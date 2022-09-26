---
title: TimePickerAnimationOpen
slug: php-ui-timepickeranimationopen
tags: api, php
publish: true
---

# \Kendo\UI\TimePickerAnimationOpen

A PHP class representing the open setting of TimePickerAnimation.


## Methods

### duration
The duration of the open animation in milliseconds.

#### Returns
`\Kendo\UI\TimePickerAnimationOpen`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $open = new \Kendo\UI\TimePickerAnimationOpen();
    $open->duration(1);
    ?>

### effects
The effect(s) to use when playing the open animation. Multiple effects should be separated with a space.Complete list of available animations

#### Returns
`\Kendo\UI\TimePickerAnimationOpen`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $open = new \Kendo\UI\TimePickerAnimationOpen();
    $open->effects('value');
    ?>

