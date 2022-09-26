---
title: TreeViewAnimationExpand
slug: php-ui-treeviewanimationexpand
tags: api, php
publish: true
---

# \Kendo\UI\TreeViewAnimationExpand

A PHP class representing the expand setting of TreeViewAnimation.


## Methods

### duration
The number of milliseconds used for the animation when a
node is expanded.

#### Returns
`\Kendo\UI\TreeViewAnimationExpand`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $expand = new \Kendo\UI\TreeViewAnimationExpand();
    $expand->duration(1);
    ?>

### effects
A whitespace-delimited string of animation effects that are used when expanding nodes.
The supported effects are "expandVertical" and "fadeIn".

#### Returns
`\Kendo\UI\TreeViewAnimationExpand`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $expand = new \Kendo\UI\TreeViewAnimationExpand();
    $expand->effects('value');
    ?>

