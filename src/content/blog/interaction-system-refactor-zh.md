---
title: "光影迷踪开发日志 #1：从状态到信号——交互系统重构"
date: 2025-11-15
description: "我们把光影迷踪的交互系统重写成 event-driven（事件驱动）信号 + 模块化行为 + trigger（触发器）检测，让迭代速度直接起飞"
excerpt: "我们把光影迷踪的交互系统重写成 event-driven（事件驱动）信号 + 模块化行为 + trigger（触发器）检测，让迭代速度直接起飞"
locale: zh
tags:
  - design pattern
  - unity
  - refactor
  - interaction
metaDescription: "我们用 signals（信号）和行为模式替换笨重状态机，简化了光影迷踪的交互系统，也让迭代更快。"
metaKeywords:
  - unity
  - interaction system
  - event-driven
  - behavior pattern
  - triggers
  - refactoring
---

> **太长不看：** 用事件驱动信号和小型行为类替换传统的状态模式。效果：逻辑更清晰，迭代更快，测试更简单。

过去几天我把游戏的交互系统彻底重做了，从原来的教科书式状态模式转向了事件驱动、以行为为中心的架构。旧系统靠一堆状态类管理输入和转换，它确实"能用"，但和Unity的开发哲学背道而驰，增加了不必要的间接层，每次改动都像在泥潭里跋涉。

<figure class="image image-h-medium" data-lightbox>
  <img
    src="/devlog/interactive-system-refactor/diagram_0.png"
    alt="Before/after architecture sketch, with state objects and transitions compared against signal flow"
    loading="lazy"
  />
  <figcaption>
    状态对象和转场撤掉后，直接用事件+清晰的行为归属，复杂度肉眼可见地下来了
  </figcaption>
</figure>

## 为什么要动一个"能用"的系统？

- 流程藏得太深：调试时要追踪散布在多个类中的状态转换和生命周期，像在玩捉迷藏
- 与Unity特性相悖：Unity强在组件化和UnityEvents，而正式的状态图反而拖慢了迭代速度
- 测试困难：状态对象有隐式依赖，行为和输入路由很难独立测试

新架构一句话总结：输入靠事件驱动，检测靠触发器，"做什么"放在纯C#行为类中，数据通过只读交互上下文流动。就这么简单。

## 具体改了什么

- 事件驱动输入：轻量输入包装器触发事件。管理器监听后，要么启动行为（当有焦点时），要么将信号转发给当前激活的行为
- 基于行为的执行：像"即时按下"或"进入控制模式"这样的交互是纯C#行为，可按可交互物体单独配置。无需继承MonoBehaviour
- 类不可变上下文：行为接收一个安全暴露玩家/相机/输入的上下文对象。执行期间上下文被视为只读，避免隐蔽的副作用
- 触发器检测：不再用射线检测/混合模式，而是给可交互物体添加小型触发器组件。玩家检测器跟踪附近的可交互物体，选择最佳候选（比如最近且可用的）
- UnityEvent 反馈：Interactable 暴露 OnFocused/OnUnfocused UnityEvent，设计同学直接在 Inspector 里勾连音效、描边、十字准星，不再写死。

### 前后对比（概念）

```csharp
// 重构前：状态对象控制转换和输入分支
interface IInteractionState {
  void Enter();
  void Update();
  void Exit();
  void OnInteractPressed();
}

IdleState.OnInteractPressed() => 转换到Focused或无响应
FocusedState.OnInteractPressed() => 启动交互或警告
ActiveState.OnInteractPressed() => 路由到行为或退出

// 重构后：信号+行为
onInteractStarted() {
  if (hasFocused && canInteract) start(behavior);
  else if (isActive) activeBehavior.handleInteract(context);
}
behavior.Execute(interactable, context);
behavior.OnComplete += () => 恢复焦点或空闲;
```

所有权变得非常直观：
- Manager 只负责协调流程
- Behavior 只负责真正干活
- Interactable 只负责声明自己能做什么

**最小行为类骨架**

```csharp
public interface IInteractionBehavior
{
    void Execute(Interactable interactable, InteractionContext context);
}

public sealed class InstantPressBehavior : IInteractionBehavior
{
    public void Execute(Interactable i, InteractionContext c)
    { /* 执行操作：比如开门、切换开关、触发事件...*/ }
}
```
<figure class="image image-h-medium" data-lightbox>
  <img
    src="/devlog/interactive-system-refactor/image_0.png"
    alt="Unity Inspector — interactable with Behavior assignment and focus UnityEvents"
    loading="lazy"
  />
  <figcaption>
    策划同学在 Inspector 里直接绑定反馈和行为，加音效、描边、准星变化都不必再敲代码
  </figcaption>
</figure>

## 为什么选触发器而非射线检测？

- 可预测性：触发器让"在范围内"变得明确且可设计。你可以为每个物体调整碰撞体，而不是全局射线距离
- 性能：触发器避免了每帧的射线计算和混合模式的分支判断
- 扩展性：今后需要时可以轻松添加射线层而不破坏核心系统。当前需求简单，我们为当下优化。

## 关于 InteractionContext

即便在 Unity 里，保持 InteractionContext 只读也能让行为逻辑好推理。行为只拿到一坨引用（player controller、camera、input facade、anchor 等），执行时只读访问，写单元测试的时候也不会牵扯整场景。

```csharp
// 运行时一次性构建/上下文设置
context = new InteractionContext {
  FpsController = playerController,
  PlayerCamera  = camera,
  Input         = inputFacade,
  // 加上锚点查找/辅助工具
};

// 行为中使用
Execute(interactable, context) {
  // 只读；不要修改context
  // 使用数据来移动、进入控制模式或触发动作
}
```

## UI 钩子与控制模式反馈

交互 Manager 会发出一系列“状态变化事件”，一个很小的 UI 控制器订阅这些事件，用来：
- 切换不同样式的准星（idle / focus / grab/hold）
- 在进入“控制模式”时给屏幕边缘加一个淡淡的框或渐变
- 显示提示文案之类

因为 UI 只是事件监听者，所以你可以放心疯狂迭代 UI 效果，而不用担心动到交互核心逻辑。
这种“UI 和交互逻辑硬分开”的感觉，真的是重构之后最爽的收获之一。

<figure class="image image-h-tall" data-lightbox>
  <img
    src="/devlog/interactive-system-refactor/gif_0.gif"
    alt="Crosshair swapping between idle dot, focus hand, and grab state"
    loading="lazy"
  />
  <figcaption>准星变化完全来自状态事件，交互代码里没有 UI 黑盒。</figcaption>
</figure>

## 日常开发中的改进

- 添加新交互：实现小型行为类，分配给可交互物体，搞定
- 调整检测：在Inspector中修改触发器碰撞体和层级，无需合并代码来调整全局范围
- 测试：行为是纯C#，无需构建完整场景就能测试
- 稳定性：输入归属更清晰，少了“现在到底谁在吃按键？”的鬼畜 bug。

### 取舍

- 放弃了理论上的“优雅状态机”，换来更直接的 enum + events。
- 全触发器挺主观，后面加远程射线要再走一遍。暂时够用就先顶着。

<figure class="image image-h-short" data-lightbox>
  <img
    src="/devlog/interactive-system-refactor/diagram_1.png"
    alt="Simple dependency diagram showing Input to Manager to Behavior to Interactable with UI listeners"
    loading="lazy"
  />
  <figcaption>单向数据流让“谁依赖谁、谁管谁”这件事一目了然</figcaption>
</figure>

## 收个尾

如果你在和一个看似"聪明"的架构搏斗，也许是时候简化了。对我们来说，从状态对象转向信号和行为，让系统更符合Unity特性，更容易测试，扩展速度也更快。愿望单也别忘了：<https://store.steampowered.com/app/2831270>

关键词：unity, event-driven, interaction system, behavior pattern, triggers, UnityEvents, immutable context, game architecture, first-person interactions, refactoring