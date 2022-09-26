---
title: WindowAnimation
slug: php-ui-windowanimation
tags: api, php
publish: true
---

# \Kendo\UI\WindowAnimation

A PHP class representing the animation setting of Window.


## Methods

### close

The animation that will be used when a Window closes.

#### Returns
`\Kendo\UI\WindowAnimation`

#### Parameters

##### $value `\Kendo\UI\WindowAnimationClose|array`


#### Example - using [\Kendo\UI\WindowAnimationClose](/api/wrappers/php/Kendo/UI/WindowAnimationClose)
    <?php
    $animation = new \Kendo\UI\WindowAnimation();
    $close = new \Kendo\UI\WindowAnimationClose();
    $duration = 1;
    $close->duration($duration);
    $animation->close($close);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\WindowAnimation();
    $duration = 1;
    $animation->close(array('duration' => $duration));
    ?>

### open

The animation that will be used when a Window opens.

#### Returns
`\Kendo\UI\WindowAnimation`

#### Parameters

##### $value `\Kendo\UI\WindowAnimationOpen|array`


#### Example - using [\Kendo\UI\WindowAnimationOpen](/api/wrappers/php/Kendo/UI/WindowAnimationOpen)
    <?php
    $animation = new \Kendo\UI\WindowAnimation();
    $open = new \Kendo\UI\WindowAnimationOpen();
    $duration = 1;
    $open->duration($duration);
    $animation->open($open);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\WindowAnimation();
    $duration = 1;
    $animation->open(array('duration' => $duration));
    ?>

