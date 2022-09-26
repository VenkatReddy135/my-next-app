---
title: MenuAnimation
slug: php-ui-menuanimation
tags: api, php
publish: true
---

# \Kendo\UI\MenuAnimation

A PHP class representing the animation setting of Menu.


## Methods

### close

The animation that will be used when closing sub menus.

#### Returns
`\Kendo\UI\MenuAnimation`

#### Parameters

##### $value `\Kendo\UI\MenuAnimationClose|array`


#### Example - using [\Kendo\UI\MenuAnimationClose](/api/wrappers/php/Kendo/UI/MenuAnimationClose)
    <?php
    $animation = new \Kendo\UI\MenuAnimation();
    $close = new \Kendo\UI\MenuAnimationClose();
    $duration = 1;
    $close->duration($duration);
    $animation->close($close);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\MenuAnimation();
    $duration = 1;
    $animation->close(array('duration' => $duration));
    ?>

### open

The animation that will be used when opening sub menus.

#### Returns
`\Kendo\UI\MenuAnimation`

#### Parameters

##### $value `\Kendo\UI\MenuAnimationOpen|array`


#### Example - using [\Kendo\UI\MenuAnimationOpen](/api/wrappers/php/Kendo/UI/MenuAnimationOpen)
    <?php
    $animation = new \Kendo\UI\MenuAnimation();
    $open = new \Kendo\UI\MenuAnimationOpen();
    $duration = 1;
    $open->duration($duration);
    $animation->open($open);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\MenuAnimation();
    $duration = 1;
    $animation->open(array('duration' => $duration));
    ?>

