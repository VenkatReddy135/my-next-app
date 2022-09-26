---
title: DatePickerAnimationOpen
slug: php-ui-datepickeranimationopen
tags: api, php
publish: true
---

# \Kendo\UI\DatePickerAnimationOpen

A PHP class representing the open setting of DatePickerAnimation.


## Methods

### duration
The duration of the open animation in milliseconds.

#### Returns
`\Kendo\UI\DatePickerAnimationOpen`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $open = new \Kendo\UI\DatePickerAnimationOpen();
    $open->duration(1);
    ?>

### effects
The effect(s) to use when playing the open animation. Multiple effects should be separated with a space.Complete list of available animations

#### Returns
`\Kendo\UI\DatePickerAnimationOpen`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $open = new \Kendo\UI\DatePickerAnimationOpen();
    $open->effects('value');
    ?>

