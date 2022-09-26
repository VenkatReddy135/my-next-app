---
title: MultiSelectAnimationClose
slug: php-ui-multiselectanimationclose
tags: api, php
publish: true
---

# \Kendo\UI\MultiSelectAnimationClose

A PHP class representing the close setting of MultiSelectAnimation.


## Methods

### duration
The duration of the close animation in milliseconds.

#### Returns
`\Kendo\UI\MultiSelectAnimationClose`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $close = new \Kendo\UI\MultiSelectAnimationClose();
    $close->duration(1);
    ?>

### effects
The effect(s) to use when playing the close animation. Multiple effects should be separated with a space.Complete list of available animations

#### Returns
`\Kendo\UI\MultiSelectAnimationClose`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $close = new \Kendo\UI\MultiSelectAnimationClose();
    $close->effects('value');
    ?>

