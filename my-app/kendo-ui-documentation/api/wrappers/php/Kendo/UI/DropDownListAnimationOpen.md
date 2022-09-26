---
title: DropDownListAnimationOpen
slug: php-ui-dropdownlistanimationopen
tags: api, php
publish: true
---

# \Kendo\UI\DropDownListAnimationOpen

A PHP class representing the open setting of DropDownListAnimation.


## Methods

### duration
The duration of the open animation in milliseconds.

#### Returns
`\Kendo\UI\DropDownListAnimationOpen`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $open = new \Kendo\UI\DropDownListAnimationOpen();
    $open->duration(1);
    ?>

### effects
The effect(s) to use when playing the open animation. Multiple effects should be separated with a space.Complete list of available animations

#### Returns
`\Kendo\UI\DropDownListAnimationOpen`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $open = new \Kendo\UI\DropDownListAnimationOpen();
    $open->effects('value');
    ?>

