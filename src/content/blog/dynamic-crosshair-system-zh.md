---
title: "光影迷踪开发日志 #2：动态准星系统——让UI无声地对话"
date: 2025-12-05
description: "我们打造了一个由着色器驱动的动态准星，它能变形、反转颜色，并根据互动物体智能变化，让你在点击前就感受到世界的回应。"
excerpt: "由着色器驱动的动态准星，能变形、反转颜色，并根据互动物体智能变化，让玩家在点击前就感受到反馈。"
locale: zh
tags:
  - ui
  - unity
  - shader
  - crosshair
  - sdf
metaDescription: "着色器驱动的动态准星，形态变换、颜色反转、根据交互智能切换，让玩家在点击前就感受到反馈。"
metaKeywords:
  - unity
  - crosshair
  - shader
  - sdf
  - ui 设计
  - 交互
---

> **太长不看**：我们打造了一个由着色器驱动的动态准星，它能变形、反转颜色，还会根据互动物体智能变化，让你在点击前就感受到世界的回应。

这是一篇配合视频的文字概要，主要信息在视频里，这里记录重点。

<div class="video-embed" style="position: relative; padding-top: 56.25%; width: 100%; height: 0;">
  <iframe
    src="//player.bilibili.com/player.html?isOutside=true&aid=115647967206117&bvid=BV1ZQSpBSELs&cid=34437530987&p=1"
    title="动态准星系统 —— 光影迷踪开发日志 #2"
    style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;"
    scrolling="no"
    frameborder="no"
    allowfullscreen="true"
    loading="lazy"
  ></iframe>
</div>

## 玩家看到的效果
- 待机：单个小点，尽量不打扰视线。
- 聚焦：在普通可互动物体上变成脉动圆圈。
- 互动中：锁定为旋转方块。
- 移动：上/下三角提示“拿起/放下”。
- 旋转：脉动六边形进入状态，旋转时变成实心旋转六边形。
- 可见性：着色器实时采样背景并反转颜色，在漆黑走廊和雪白大厅都能看清（可在设置中关闭，改用固定颜色）。

## 技术实现
- SDF着色器库生成到`.cginc`，形状在任意尺寸都清晰，方便做形态过渡。
- 形状与动画都做成`Resources/Shapes`和`Resources/Animations`下的ScriptableObject，新交互只需加资源并重新生成着色器。
- CrosshairController用MaterialPropertyBlock分层控制尺寸/旋转/颜色/反转，避免分配。
- 预制体上的CrosshairCustomization指定聚焦/激活形状，策划改动不必写代码。

## 示例代码

```csharp
// 伪代码：状态驱动的形状/动画分层
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

`FocusShapeId`和`ActiveShapeId`直接从预制体上的`CrosshairCustomization`获取，所以更换操作类型只是数据变更，不需要改代码。

## 视频里展示的编辑器流程
- 浏览`Assets/TorcheyeGames/CrosshairSystem/`（Runtime、Editor、Resources）。
- 创建多边形形状资源，设定默认尺寸/厚度，生成着色器。
- 调AnimationCurve做呼吸/闪动，切换混合模式。
- 给预制体添加CrosshairCustomization，选择聚焦/激活形状，放入CrosshairSystem预制体并查看交互事件响应。

## 备注与下一步
- 颜色反转依赖GrabPass，会有少量开销，配置里可切换。
- 下一步想让环境光轻微影响脉动速度。

完整演示和编辑器操作请看视频。

愿望单也别忘了：<https://store.steampowered.com/app/2831270>

关键词：unity, crosshair, shader, sdf, ui 设计, 交互, 颜色反转, 动画
