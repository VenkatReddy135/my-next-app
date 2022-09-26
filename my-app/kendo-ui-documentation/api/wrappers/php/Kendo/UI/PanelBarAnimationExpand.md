---
title: PanelBarAnimationExpand
slug: php-ui-panelbaranimationexpand
tags: api, php
publish: true
---

# \Kendo\UI\PanelBarAnimationExpand

A PHP class representing the expand setting of PanelBarAnimation.


## Methods

### duration
The number of milliseconds used for the visual animation when an item is opened.

#### Returns
`\Kendo\UI\PanelBarAnimationExpand`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $expand = new \Kendo\UI\PanelBarAnimationExpand();
    $expand->duration(1);
    ?>

### effects
A whitespace-delimited string of animation effects that are used when an item is expanded. Options include
"expandVertical" and "fadeIn".

#### Returns
`\Kendo\UI\PanelBarAnimationExpand`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $expand = new \Kendo\UI\PanelBarAnimationExpand();
    $expand->effects('value');
    ?>

### show


#### Returns
`\Kendo\UI\PanelBarAnimationExpand`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $expand = new \Kendo\UI\PanelBarAnimationExpand();
    $expand->show(true);
    ?>

