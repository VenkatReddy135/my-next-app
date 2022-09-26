---
title: AutoCompleteAnimationClose
slug: php-ui-autocompleteanimationclose
tags: api, php
publish: true
---

# \Kendo\UI\AutoCompleteAnimationClose

A PHP class representing the close setting of AutoCompleteAnimation.


## Methods

### duration
The duration of the close animation in milliseconds.

#### Returns
`\Kendo\UI\AutoCompleteAnimationClose`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $close = new \Kendo\UI\AutoCompleteAnimationClose();
    $close->duration(1);
    ?>

### effects
The effect(s) to use when playing the close animation. Multiple effects should be separated with a space.Complete list of available animations

#### Returns
`\Kendo\UI\AutoCompleteAnimationClose`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $close = new \Kendo\UI\AutoCompleteAnimationClose();
    $close->effects('value');
    ?>

