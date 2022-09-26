---
title: DateTimePickerAnimationClose
slug: php-ui-datetimepickeranimationclose
tags: api, php
publish: true
---

# \Kendo\UI\DateTimePickerAnimationClose

A PHP class representing the close setting of DateTimePickerAnimation.


## Methods

### duration
The duration of the close animation in milliseconds.

#### Returns
`\Kendo\UI\DateTimePickerAnimationClose`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $close = new \Kendo\UI\DateTimePickerAnimationClose();
    $close->duration(1);
    ?>

### effects
The effect(s) to use when playing the close animation. Multiple effects should be separated with a space.Complete list of available animations

#### Returns
`\Kendo\UI\DateTimePickerAnimationClose`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $close = new \Kendo\UI\DateTimePickerAnimationClose();
    $close->effects('value');
    ?>

