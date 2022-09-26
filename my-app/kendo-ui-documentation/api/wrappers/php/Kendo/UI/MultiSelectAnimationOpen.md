---
title: MultiSelectAnimationOpen
slug: php-ui-multiselectanimationopen
tags: api, php
publish: true
---

# \Kendo\UI\MultiSelectAnimationOpen

A PHP class representing the open setting of MultiSelectAnimation.


## Methods

### duration
The duration of the open animation in milliseconds.

#### Returns
`\Kendo\UI\MultiSelectAnimationOpen`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $open = new \Kendo\UI\MultiSelectAnimationOpen();
    $open->duration(1);
    ?>

### effects
The effect(s) to use when playing the open animation. Multiple effects should be separated with a space.Complete list of available animations

#### Returns
`\Kendo\UI\MultiSelectAnimationOpen`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $open = new \Kendo\UI\MultiSelectAnimationOpen();
    $open->effects('value');
    ?>

