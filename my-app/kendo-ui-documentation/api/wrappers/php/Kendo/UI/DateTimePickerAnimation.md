---
title: DateTimePickerAnimation
slug: php-ui-datetimepickeranimation
tags: api, php
publish: true
---

# \Kendo\UI\DateTimePickerAnimation

A PHP class representing the animation setting of DateTimePicker.


## Methods

### close

The animation played when a popup is closed.

#### Returns
`\Kendo\UI\DateTimePickerAnimation`

#### Parameters

##### $value `\Kendo\UI\DateTimePickerAnimationClose|array`


#### Example - using [\Kendo\UI\DateTimePickerAnimationClose](/api/wrappers/php/Kendo/UI/DateTimePickerAnimationClose)
    <?php
    $animation = new \Kendo\UI\DateTimePickerAnimation();
    $close = new \Kendo\UI\DateTimePickerAnimationClose();
    $duration = 1;
    $close->duration($duration);
    $animation->close($close);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\DateTimePickerAnimation();
    $duration = 1;
    $animation->close(array('duration' => $duration));
    ?>

### open

The animation played when the popup is opened.

#### Returns
`\Kendo\UI\DateTimePickerAnimation`

#### Parameters

##### $value `\Kendo\UI\DateTimePickerAnimationOpen|array`


#### Example - using [\Kendo\UI\DateTimePickerAnimationOpen](/api/wrappers/php/Kendo/UI/DateTimePickerAnimationOpen)
    <?php
    $animation = new \Kendo\UI\DateTimePickerAnimation();
    $open = new \Kendo\UI\DateTimePickerAnimationOpen();
    $duration = 1;
    $open->duration($duration);
    $animation->open($open);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\DateTimePickerAnimation();
    $duration = 1;
    $animation->open(array('duration' => $duration));
    ?>

