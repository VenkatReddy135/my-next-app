---
title: ComboBoxAnimationOpen
slug: php-ui-comboboxanimationopen
tags: api, php
publish: true
---

# \Kendo\UI\ComboBoxAnimationOpen

A PHP class representing the open setting of ComboBoxAnimation.


## Methods

### duration
The duration of the open animation in milliseconds.

#### Returns
`\Kendo\UI\ComboBoxAnimationOpen`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $open = new \Kendo\UI\ComboBoxAnimationOpen();
    $open->duration(1);
    ?>

### effects
The effect(s) to use when playing the open animation. Multiple effects should be separated with a space.Complete list of available animations

#### Returns
`\Kendo\UI\ComboBoxAnimationOpen`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $open = new \Kendo\UI\ComboBoxAnimationOpen();
    $open->effects('value');
    ?>

