---
title: DatePickerAnimation
slug: php-ui-datepickeranimation
tags: api, php
publish: true
---

# \Kendo\UI\DatePickerAnimation

A PHP class representing the animation setting of DatePicker.


## Methods

### close

The animation played when the calendar popup is closed.

#### Returns
`\Kendo\UI\DatePickerAnimation`

#### Parameters

##### $value `\Kendo\UI\DatePickerAnimationClose|array`


#### Example - using [\Kendo\UI\DatePickerAnimationClose](/api/wrappers/php/Kendo/UI/DatePickerAnimationClose)
    <?php
    $animation = new \Kendo\UI\DatePickerAnimation();
    $close = new \Kendo\UI\DatePickerAnimationClose();
    $duration = 1;
    $close->duration($duration);
    $animation->close($close);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\DatePickerAnimation();
    $duration = 1;
    $animation->close(array('duration' => $duration));
    ?>

### open

The animation played when the calendar popup is opened.

#### Returns
`\Kendo\UI\DatePickerAnimation`

#### Parameters

##### $value `\Kendo\UI\DatePickerAnimationOpen|array`


#### Example - using [\Kendo\UI\DatePickerAnimationOpen](/api/wrappers/php/Kendo/UI/DatePickerAnimationOpen)
    <?php
    $animation = new \Kendo\UI\DatePickerAnimation();
    $open = new \Kendo\UI\DatePickerAnimationOpen();
    $duration = 1;
    $open->duration($duration);
    $animation->open($open);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\DatePickerAnimation();
    $duration = 1;
    $animation->open(array('duration' => $duration));
    ?>

