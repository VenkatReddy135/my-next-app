---
title: TimePickerAnimationClose
slug: php-ui-timepickeranimationclose
tags: api, php
publish: true
---

# \Kendo\UI\TimePickerAnimationClose

A PHP class representing the close setting of TimePickerAnimation.


## Methods

### duration
The duration of the close animation in milliseconds.

#### Returns
`\Kendo\UI\TimePickerAnimationClose`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $close = new \Kendo\UI\TimePickerAnimationClose();
    $close->duration(1);
    ?>

### effects
The effect(s) to use when playing the open animation. Multiple effects should be separated with a space.Complete list of available animations

#### Returns
`\Kendo\UI\TimePickerAnimationClose`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $close = new \Kendo\UI\TimePickerAnimationClose();
    $close->effects('value');
    ?>

