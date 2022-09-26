---
title: AutoCompleteAnimationOpen
slug: php-ui-autocompleteanimationopen
tags: api, php
publish: true
---

# \Kendo\UI\AutoCompleteAnimationOpen

A PHP class representing the open setting of AutoCompleteAnimation.


## Methods

### duration
The duration of the open animation in milliseconds.

#### Returns
`\Kendo\UI\AutoCompleteAnimationOpen`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $open = new \Kendo\UI\AutoCompleteAnimationOpen();
    $open->duration(1);
    ?>

### effects
The effect(s) to use when playing the open animation. Multiple effects should be separated with a space.Complete list of available animations

#### Returns
`\Kendo\UI\AutoCompleteAnimationOpen`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $open = new \Kendo\UI\AutoCompleteAnimationOpen();
    $open->effects('value');
    ?>

