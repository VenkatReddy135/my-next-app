---
title: MultiSelectAnimation
slug: php-ui-multiselectanimation
tags: api, php
publish: true
---

# \Kendo\UI\MultiSelectAnimation

A PHP class representing the animation setting of MultiSelect.


## Methods

### close



#### Returns
`\Kendo\UI\MultiSelectAnimation`

#### Parameters

##### $value `\Kendo\UI\MultiSelectAnimationClose|array`


#### Example - using [\Kendo\UI\MultiSelectAnimationClose](/api/wrappers/php/Kendo/UI/MultiSelectAnimationClose)
    <?php
    $animation = new \Kendo\UI\MultiSelectAnimation();
    $close = new \Kendo\UI\MultiSelectAnimationClose();
    $duration = 1;
    $close->duration($duration);
    $animation->close($close);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\MultiSelectAnimation();
    $duration = 1;
    $animation->close(array('duration' => $duration));
    ?>

### open

The animation played when the suggestion popup is opened.

#### Returns
`\Kendo\UI\MultiSelectAnimation`

#### Parameters

##### $value `\Kendo\UI\MultiSelectAnimationOpen|array`


#### Example - using [\Kendo\UI\MultiSelectAnimationOpen](/api/wrappers/php/Kendo/UI/MultiSelectAnimationOpen)
    <?php
    $animation = new \Kendo\UI\MultiSelectAnimation();
    $open = new \Kendo\UI\MultiSelectAnimationOpen();
    $duration = 1;
    $open->duration($duration);
    $animation->open($open);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\MultiSelectAnimation();
    $duration = 1;
    $animation->open(array('duration' => $duration));
    ?>

