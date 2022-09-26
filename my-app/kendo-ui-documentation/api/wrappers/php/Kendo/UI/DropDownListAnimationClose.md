---
title: DropDownListAnimationClose
slug: php-ui-dropdownlistanimationclose
tags: api, php
publish: true
---

# \Kendo\UI\DropDownListAnimationClose

A PHP class representing the close setting of DropDownListAnimation.


## Methods

### duration
The duration of the close animation in milliseconds.

#### Returns
`\Kendo\UI\DropDownListAnimationClose`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $close = new \Kendo\UI\DropDownListAnimationClose();
    $close->duration(1);
    ?>

### effects
The effect(s) to use when playing the close animation. Multiple effects should be separated with a space.Complete list of available animations

#### Returns
`\Kendo\UI\DropDownListAnimationClose`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $close = new \Kendo\UI\DropDownListAnimationClose();
    $close->effects('value');
    ?>

