---
title: TabStripAnimationOpen
slug: php-ui-tabstripanimationopen
tags: api, php
publish: true
---

# \Kendo\UI\TabStripAnimationOpen

A PHP class representing the open setting of TabStripAnimation.


## Methods

### duration
The number of milliseconds used for the visual animation when a new tab is shown.

#### Returns
`\Kendo\UI\TabStripAnimationOpen`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $open = new \Kendo\UI\TabStripAnimationOpen();
    $open->duration(1);
    ?>

### effects
A whitespace-separated string of animation effects that are used when a new tab is shown. Options include
"expand:vertical" and "fadeIn".

#### Returns
`\Kendo\UI\TabStripAnimationOpen`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $open = new \Kendo\UI\TabStripAnimationOpen();
    $open->effects('value');
    ?>

### show


#### Returns
`\Kendo\UI\TabStripAnimationOpen`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $open = new \Kendo\UI\TabStripAnimationOpen();
    $open->show(true);
    ?>

