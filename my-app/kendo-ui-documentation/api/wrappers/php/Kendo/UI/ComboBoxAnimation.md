---
title: ComboBoxAnimation
slug: php-ui-comboboxanimation
tags: api, php
publish: true
---

# \Kendo\UI\ComboBoxAnimation

A PHP class representing the animation setting of ComboBox.


## Methods

### close



#### Returns
`\Kendo\UI\ComboBoxAnimation`

#### Parameters

##### $value `\Kendo\UI\ComboBoxAnimationClose|array`


#### Example - using [\Kendo\UI\ComboBoxAnimationClose](/api/wrappers/php/Kendo/UI/ComboBoxAnimationClose)
    <?php
    $animation = new \Kendo\UI\ComboBoxAnimation();
    $close = new \Kendo\UI\ComboBoxAnimationClose();
    $duration = 1;
    $close->duration($duration);
    $animation->close($close);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\ComboBoxAnimation();
    $duration = 1;
    $animation->close(array('duration' => $duration));
    ?>

### open

The animation played when the suggestion popup is opened.

#### Returns
`\Kendo\UI\ComboBoxAnimation`

#### Parameters

##### $value `\Kendo\UI\ComboBoxAnimationOpen|array`


#### Example - using [\Kendo\UI\ComboBoxAnimationOpen](/api/wrappers/php/Kendo/UI/ComboBoxAnimationOpen)
    <?php
    $animation = new \Kendo\UI\ComboBoxAnimation();
    $open = new \Kendo\UI\ComboBoxAnimationOpen();
    $duration = 1;
    $open->duration($duration);
    $animation->open($open);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\ComboBoxAnimation();
    $duration = 1;
    $animation->open(array('duration' => $duration));
    ?>

