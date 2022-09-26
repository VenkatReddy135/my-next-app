---
title: ComboBoxAnimationClose
slug: php-ui-comboboxanimationclose
tags: api, php
publish: true
---

# \Kendo\UI\ComboBoxAnimationClose

A PHP class representing the close setting of ComboBoxAnimation.


## Methods

### duration
The duration of the close animation in milliseconds.

#### Returns
`\Kendo\UI\ComboBoxAnimationClose`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $close = new \Kendo\UI\ComboBoxAnimationClose();
    $close->duration(1);
    ?>

### effects
The effect(s) to use when playing the close animation. Multiple effects should be separated with a space.Complete list of available animations

#### Returns
`\Kendo\UI\ComboBoxAnimationClose`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $close = new \Kendo\UI\ComboBoxAnimationClose();
    $close->effects('value');
    ?>

