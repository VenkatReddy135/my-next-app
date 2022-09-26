---
title: TabStripAnimation
slug: php-ui-tabstripanimation
tags: api, php
publish: true
---

# \Kendo\UI\TabStripAnimation

A PHP class representing the animation setting of TabStrip.


## Methods

### close

The visual animation(s) that will be used when the current tab is closed.

#### Returns
`\Kendo\UI\TabStripAnimation`

#### Parameters

##### $value `\Kendo\UI\TabStripAnimationClose|array`


#### Example - using [\Kendo\UI\TabStripAnimationClose](/api/wrappers/php/Kendo/UI/TabStripAnimationClose)
    <?php
    $animation = new \Kendo\UI\TabStripAnimation();
    $close = new \Kendo\UI\TabStripAnimationClose();
    $duration = 1;
    $close->duration($duration);
    $animation->close($close);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\TabStripAnimation();
    $duration = 1;
    $animation->close(array('duration' => $duration));
    ?>

### open

The visual animation(s) that will be used when the new tab is shown.

#### Returns
`\Kendo\UI\TabStripAnimation`

#### Parameters

##### $value `\Kendo\UI\TabStripAnimationOpen|array`


#### Example - using [\Kendo\UI\TabStripAnimationOpen](/api/wrappers/php/Kendo/UI/TabStripAnimationOpen)
    <?php
    $animation = new \Kendo\UI\TabStripAnimation();
    $open = new \Kendo\UI\TabStripAnimationOpen();
    $duration = 1;
    $open->duration($duration);
    $animation->open($open);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\TabStripAnimation();
    $duration = 1;
    $animation->open(array('duration' => $duration));
    ?>

