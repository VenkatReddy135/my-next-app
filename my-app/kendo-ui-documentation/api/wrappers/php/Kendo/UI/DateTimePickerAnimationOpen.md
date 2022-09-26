---
title: DateTimePickerAnimationOpen
slug: php-ui-datetimepickeranimationopen
tags: api, php
publish: true
---

# \Kendo\UI\DateTimePickerAnimationOpen

A PHP class representing the open setting of DateTimePickerAnimation.


## Methods

### duration
The duration of the open animation in milliseconds.

#### Returns
`\Kendo\UI\DateTimePickerAnimationOpen`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $open = new \Kendo\UI\DateTimePickerAnimationOpen();
    $open->duration(1);
    ?>

### effects
The effect(s) to use when playing the open animation. Multiple effects should be separated with a space.Complete list of available animations

#### Returns
`\Kendo\UI\DateTimePickerAnimationOpen`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $open = new \Kendo\UI\DateTimePickerAnimationOpen();
    $open->effects('value');
    ?>

