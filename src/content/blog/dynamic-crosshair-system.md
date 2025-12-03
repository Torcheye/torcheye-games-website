---
title: "Chiaroscuro Devlog #2: Dynamic Crosshair — UI That Speaks Without Words"
date: 2025-12-05
description: "We built a shader-driven crosshair that morphs, inverts color, and adapts per interactable so players feel feedback before they click."
excerpt: "A shader-driven dynamic crosshair that morphs, inverts color, and adapts per interactable so players feel the world respond before they click."
locale: en
tags:
  - ui
  - unity
  - shader
  - crosshair
  - sdf
metaDescription: "A shader-driven dynamic crosshair that morphs, inverts color, and adapts per interactable so players feel feedback even before clicking."
metaKeywords:
  - unity
  - crosshair
  - shader
  - sdf
  - ui design
  - interaction
---

> **TL;DR:** We built a shader-driven crosshair that morphs, inverts color, and adapts to each interactable so players feel the world responding before they even click.

This post is a short companion to the video walkthrough. The clips carry the details; here is the written overview.

<div class="video-embed" style="position: relative; padding-top: 56.25%; width: 100%; height: 0;">
  <iframe
    src="https://www.youtube.com/embed/i5ZQRMgXPC8?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1"
    title="Dynamic Crosshair System — Chiaroscuro Devlog #2"
    style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;"
    allow="autoplay; encrypted-media; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

## What players see
- Idle: a single dot that stays out of the way.
- Focus: pulsing circle on standard interactables.
- Active: rotating square while the interaction runs.
- Move: up/down triangles for lift/place cues.
- Rotate: pulsing, then spinning hexagon to imply torque.
- Visibility: the shader samples the background and inverts color to stay readable from black corridors to white atriums (toggleable if you prefer a flat color).

## How it is built
- SDF shader library generated into `.cginc` files keeps shapes crisp at any size and lets us morph between them.
- Shapes and animations live as ScriptableObjects under `Resources/Shapes` and `Resources/Animations`; adding a new verb is a data change plus a shader regen.
- CrosshairController layers size/rotation/color/inversion via MaterialPropertyBlocks to avoid allocations.
- CrosshairCustomization on each prefab picks Focus/Active shapes, so designers can swap verbs without code.

## Sample Code

```csharp
// Pseudocode: state-driven shape/animation layering
void ApplyInteractableState(InteractableState state)
{
    crosshair.StopAllAnimations();

    switch (state)
    {
        case Idle:
            crosshair.TransitionToShape("dot", 0.15f, Ease.OutSine, applyDefaults: true);
            crosshair.PlayAnimation(curves.BreatheIdle);
            break;
        case Focused:
            crosshair.TransitionToShape(state.FocusShapeId, 0.2f, Ease.OutQuad, applyDefaults: true);
            crosshair.PlayAnimation(curves.AttentionFlash);
            break;
        case Active:
            crosshair.TransitionToShape(state.ActiveShapeId, 0.25f, Ease.OutBack, applyDefaults: true);
            crosshair.PlayAnimation(curves.InteractPulse);
            crosshair.PlayAnimation(curves.RotateIfNeeded);
            break;
    }
}
```

`FocusShapeId` and `ActiveShapeId` come straight from `CrosshairCustomization` on the prefab, so swapping verbs is a data change, not a code change.

## Editor flow shown in the video
- Tour of `Assets/TorcheyeGames/CrosshairSystem/` (Runtime, Editor, Resources).
- Make a polygon shape asset, set defaults, regenerate shader code.
- Tweak AnimationCurve for the breathe/flash loops and swap blend modes.
- Add CrosshairCustomization to a prefab, choose the focused/active shapes, drop in the CrosshairSystem prefab, and watch the UI respond to interactable events.

## Notes and next steps
- Color inversion uses GrabPass and has a small cost; there is a config toggle.
- Next on the list: let ambient light subtly influence the pulse speed.

Watch the full video for the live demo and editor walkthrough.

**Wishlist Chiaroscuro on Steam:** <https://store.steampowered.com/app/2831270>

Keywords: unity, crosshair, shader, sdf, ui design, interaction, color inversion, animation
