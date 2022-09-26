---
title: TimePickerAnimation
slug: php-ui-timepickeranimation
tags: api, php
publish: true
---

# \Kendo\UI\TimePickerAnimation

A PHP class representing the animation setting of TimePicker.


## Methods

### close

The animation played when the popup is closed.

#### Returns
`\Kendo\UI\TimePickerAnimation`

#### Parameters

##### $value `\Kendo\UI\TimePickerAnimationClose|array`


#### Example - using [\Kendo\UI\TimePickerAnimationClose](/api/wrappers/php/Kendo/UI/TimePickerAnimationClose)
    <?php
    $animation = new \Kendo\UI\TimePickerAnimation();
    $close = new \Kendo\UI\TimePickerAnimationClose();
    $duration = 1;
    $close->duration($duration);
    $animation->close($close);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\TimePickerAnimation();
    $duration = 1;
    $animation->close(array('duration' => $duration));
    ?>

### open

The animation played when the calendar popup is opened.

#### Returns
`\Kendo\UI\TimePickerAnimation`

#### Parameters

##### $value `\Kendo\UI\TimePickerAnimationOpen|array`


#### Example - using [\Kendo\UI\TimePickerAnimationOpen](/api/wrappers/php/Kendo/UI/TimePickerAnimationOpen)
    <?php
    $animation = new \Kendo\UI\TimePickerAnimation();
    $open = new \Kendo\UI\TimePickerAnimationOpen();
    $duration = 1;
    $open->duration($duration);
    $animation->open($open);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\TimePickerAnimation();
    $duration = 1;
    $animation->open(array('duration' => $duration));
    ?>

