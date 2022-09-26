---
title: PanelBarAnimationCollapse
slug: php-ui-panelbaranimationcollapse
tags: api, php
publish: true
---

# \Kendo\UI\PanelBarAnimationCollapse

A PHP class representing the collapse setting of PanelBarAnimation.


## Methods

### duration
The number of milliseconds used for the visual animation when a PanelBar item is closed.

#### Returns
`\Kendo\UI\PanelBarAnimationCollapse`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $collapse = new \Kendo\UI\PanelBarAnimationCollapse();
    $collapse->duration(1);
    ?>

### effects
A whitespace-delimited string of animation effects that are utilized when a PanelBar item
is closed. Options include "fadeOut".

#### Returns
`\Kendo\UI\PanelBarAnimationCollapse`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $collapse = new \Kendo\UI\PanelBarAnimationCollapse();
    $collapse->effects('value');
    ?>

