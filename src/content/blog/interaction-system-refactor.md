---
title: "Chiaroscuro Devlog #1: From States to Signals — Refactoring the Interaction System"
date: 2025-11-15
description: "We rebuilt Chiaroscuro's interaction system around event-driven signals, modular behaviors, and trigger-based detection for faster iteration."
excerpt: "We rebuilt Chiaroscuro's interaction system around event-driven signals, modular behaviors, and trigger-based detection for faster iteration."
locale: en
tags:
  - deisgn pattern
  - unity
  - refctor
  - interaction
metaDescription: "Replacing a heavyweight state machine with signals and behaviors simplified Chiaroscuro's interaction system and made iteration faster."
metaKeywords:
  - unity
  - interaction system
  - event-driven
  - behavior pattern
  - triggers
  - refactoring
---

> **TL;DR:** Replaced a formal State Pattern with event-driven signals and small behavior classes. Result: clearer ownership, faster iteration, and easier testing.

The past few days I tore out our old interaction system and rebuilt it around an event-driven, behavior-based architecture. The original version leaned on a textbook State Pattern with separate state classes orchestrating input and transitions. It "worked," but it fought Unity's strengths, added indirection, and made changes feel heavier than they needed to be.

<figure class="image image-h-medium" data-lightbox>
  <img
    src="/devlog/interactive-system-refactor/diagram_0.png"
    alt="Before/after architecture sketch, with state objects and transitions compared against signal flow"
    loading="lazy"
  />
  <figcaption>
    Replacing state objects and transitions with direct events and clearer behavior ownership reduced complexity and increased clarity.
  </figcaption>
</figure>

## Why change a working system?

- Indirection hid the real flow. Debugging required chasing state transitions and lifecycles spread across multiple classes.
- Unity isn’t a pure OO sandbox. Component wiring and UnityEvents are powerful; the formal state graph got in the way of quick iteration.
- Testing was awkward. State objects had implicit dependencies; behaviors and input routing were hard to exercise in isolation.

The new model in one sentence: Input is event-driven, detection is trigger-based, “what happens” lives in pure C# behavior classes, and data flows through a read-only interaction context. That’s it.

## What changed, concretely

- Event-driven input: A thin input wrapper raises events. The manager listens and either starts a behavior (when focused) or forwards the signal to the currently active behavior.
- Behavior-based execution: Interactions such as “instant press” or “enter control mode” are pure C# behaviors that can be swapped per interactable. No MonoBehaviour inheritance required.
- Immutable-style context: Behaviors receive a context object exposing player/camera/input safely. The context is treated as read-only during execution to avoid subtle side-effects.
- Trigger-based detection: Instead of raycasts/hybrid modes, we use small trigger components on interactables. The player detector tracks nearby interactables and chooses the best candidate (e.g., closest and available).
- UnityEvent feedback: Interactables expose OnFocused/OnUnfocused as UnityEvents so designers can hook visuals/audio in the Inspector — no hardcoded feedback mapping.

### Before vs. after (conceptual)

```csharp
// Before: state objects own transitions and input branching
interface IInteractionState {
  void Enter();
  void Update();
  void Exit();
  void OnInteractPressed();
}

IdleState.OnInteractPressed() => transition to Focused or do nothing
FocusedState.OnInteractPressed() => start interaction or warn
ActiveState.OnInteractPressed() => route to behavior or exit

// After: signals and behaviors
onInteractStarted() {
  if (hasFocused && canInteract) start(behavior);
  else if (isActive) activeBehavior.handleInteract(context);
}
behavior.Execute(interactable, context);
behavior.OnComplete += () => restore focus or idle;
```

This simplification removed state classes, reduced coupling, and made ownership obvious: the manager coordinates, behaviors execute, interactables declare capabilities.

**Minimal Behavior skeleton**

```csharp
public interface IInteractionBehavior
{
    void Execute(Interactable interactable, InteractionContext context);
}

public sealed class InstantPressBehavior : IInteractionBehavior
{
    public void Execute(Interactable i, InteractionContext c)
    { /* Do the thing: e.g., open door, toggle lever, call event...*/ }
}
```
<figure class="image image-h-medium" data-lightbox>
  <img
    src="/devlog/interactive-system-refactor/image_0.png"
    alt="Unity Inspector — interactable with Behavior assignment and focus UnityEvents"
    loading="lazy"
  />
  <figcaption>
    Designers wire feedback and behavior per-instance in the Inspector. No code changes needed to add sounds, outlines, or crosshair tweaks.
  </figcaption>
</figure>

## Why triggers over raycasts?

- Predictability: Triggers make “in range” explicit and level-designable. You can tune colliders per object instead of global raycast distances.
- Performance: Triggers avoid per-frame raycast logic and branching for hybrid modes.
- Extensibility: Raycasts can be layered in later without breaking the core system. Today’s needs are simple; we optimized for that.

## About the context object

Even in Unity, immutability (or “immutable-style” usage) pays off for interactions. Behaviors get a single bundle of references—player controller, camera, input façade, anchors—and never mutate it. That makes reasoning about behavior execution (and testing) straightforward.

```csharp
// Construct/context setup once at runtime
context = new InteractionContext {
  FpsController = playerController,
  PlayerCamera  = camera,
  Input         = inputFacade,
  // plus anchor lookups / helpers
};

// Later in behavior
Execute(interactable, context) {
  // Read only; do not mutate context
  // Use data to move, enter control mode, or trigger actions
}
```

## UI hooks and control mode feedback

The manager emits state changes, which a small UI controller listens to. That controller swaps crosshair styles (idle, focus, grab/hold) and can fade a subtle border when in “control mode.” Because these are just event listeners, you can iterate on UI feedback without touching interaction logic.

<figure class="image image-h-tall" data-lightbox>
  <img
    src="/devlog/interactive-system-refactor/gif_0.gif"
    alt="Crosshair swapping between idle dot, focus hand, and grab state"
    loading="lazy"
  />
  <figcaption>Crosshair changes emerge from state change events — no UI logic hidden inside interactions</figcaption>
</figure>

## What improved in day-to-day work

- Adding a new interaction: Implement a small behavior class, assign it to an interactable, done.
- Tuning detection: Adjust a trigger collider and layer in the Inspector. No code merges to tweak global ranges.
- Testing: Behaviors are pure C#; you can exercise them without standing up entire scenes.
- Stability: Fewer moving parts and clearer ownership reduced “who owns this input now?” bugs.

### Trade-offs

- Gave up theoretical elegance (formal state classes) for practical clarity. The enum + events are enough.
- Trigger-only is opinionated; specialized interactions (e.g., long-range raycast) will add a second path later. For now, it's good enough.

<figure class="image image-h-short" data-lightbox>
  <img
    src="/devlog/interactive-system-refactor/diagram_1.png"
    alt="Simple dependency diagram showing Input to Manager to Behavior to Interactable with UI listeners"
    loading="lazy"
  />
  <figcaption>One-way data flow clarifies who depends on whom and why.</figcaption>
</figure>

## Closing thoughts

If you're fighting a "clever" architecture, it might be time to simplify. For us, moving from state objects to signals and behaviors made the system more Unity-native, easier to test, and faster to extend. If you'd like more deep dives like this, follow the project and wishlist Chiaroscuro on Steam — your feedback shapes what we build next.

**Wishlist Chiaroscuro on Steam:** <https://store.steampowered.com/app/2831270>

Keywords: unity, event-driven, interaction system, behavior pattern, triggers, UnityEvents, immutable context, game architecture, first-person interactions, refactoring
