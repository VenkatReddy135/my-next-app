---
title: TabStripAnimationClose
slug: php-ui-tabstripanimationclose
tags: api, php
publish: true
---

# \Kendo\UI\TabStripAnimationClose

A PHP class representing the close setting of TabStripAnimation.


## Methods

### duration
The number of milliseconds used for the visual animation when the current tab is closed.

#### Returns
`\Kendo\UI\TabStripAnimationClose`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $close = new \Kendo\UI\TabStripAnimationClose();
    $close->duration(1);
    ?>

### effects
A whitespace-delimited string of animation effects that are utilized when the current tab
is closed. By default not specified - uses the opening animation with reverse.

#### Returns
`\Kendo\UI\TabStripAnimationClose`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $close = new \Kendo\UI\TabStripAnimationClose();
    $close->effects('value');
    ?>

