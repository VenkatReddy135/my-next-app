---
title: TooltipAnimation
slug: php-ui-tooltipanimation
tags: api, php
publish: true
---

# \Kendo\UI\TooltipAnimation

A PHP class representing the animation setting of Tooltip.


## Methods

### close

The animation that will be used when a Tooltip closes.

#### Returns
`\Kendo\UI\TooltipAnimation`

#### Parameters

##### $value `\Kendo\UI\TooltipAnimationClose|array`


#### Example - using [\Kendo\UI\TooltipAnimationClose](/api/wrappers/php/Kendo/UI/TooltipAnimationClose)
    <?php
    $animation = new \Kendo\UI\TooltipAnimation();
    $close = new \Kendo\UI\TooltipAnimationClose();
    $duration = 1;
    $close->duration($duration);
    $animation->close($close);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\TooltipAnimation();
    $duration = 1;
    $animation->close(array('duration' => $duration));
    ?>

### open

The animation that will be used when a Tooltip opens.

#### Returns
`\Kendo\UI\TooltipAnimation`

#### Parameters

##### $value `\Kendo\UI\TooltipAnimationOpen|array`


#### Example - using [\Kendo\UI\TooltipAnimationOpen](/api/wrappers/php/Kendo/UI/TooltipAnimationOpen)
    <?php
    $animation = new \Kendo\UI\TooltipAnimation();
    $open = new \Kendo\UI\TooltipAnimationOpen();
    $duration = 1;
    $open->duration($duration);
    $animation->open($open);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\TooltipAnimation();
    $duration = 1;
    $animation->open(array('duration' => $duration));
    ?>

