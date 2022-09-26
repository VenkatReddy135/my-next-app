---
title: WindowAnimationClose
slug: php-ui-windowanimationclose
tags: api, php
publish: true
---

# \Kendo\UI\WindowAnimationClose

A PHP class representing the close setting of WindowAnimation.


## Methods

### duration
Defines the close animation duration.

#### Returns
`\Kendo\UI\WindowAnimationClose`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $close = new \Kendo\UI\WindowAnimationClose();
    $close->duration(1);
    ?>

### effects
Effect to be used for closing of the popup.

#### Returns
`\Kendo\UI\WindowAnimationClose`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $close = new \Kendo\UI\WindowAnimationClose();
    $close->effects('value');
    ?>

