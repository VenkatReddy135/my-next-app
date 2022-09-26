---
title: TreeViewAnimation
slug: php-ui-treeviewanimation
tags: api, php
publish: true
---

# \Kendo\UI\TreeViewAnimation

A PHP class representing the animation setting of TreeView.


## Methods

### collapse

The animation that will be used when collapsing items.

#### Returns
`\Kendo\UI\TreeViewAnimation`

#### Parameters

##### $value `boolean|\Kendo\UI\TreeViewAnimationCollapse|array`




#### Example  - using boolean
    <?php
    $animation = new \Kendo\UI\TreeViewAnimation();
    $animation->collapse(true);
    ?>


#### Example - using [\Kendo\UI\TreeViewAnimationCollapse](/api/wrappers/php/Kendo/UI/TreeViewAnimationCollapse)
    <?php
    $animation = new \Kendo\UI\TreeViewAnimation();
    $collapse = new \Kendo\UI\TreeViewAnimationCollapse();
    $duration = 1;
    $collapse->duration($duration);
    $animation->collapse($collapse);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\TreeViewAnimation();
    $duration = 1;
    $animation->collapse(array('duration' => $duration));
    ?>

### expand

The animation that will be used when expanding items.

#### Returns
`\Kendo\UI\TreeViewAnimation`

#### Parameters

##### $value `boolean|\Kendo\UI\TreeViewAnimationExpand|array`




#### Example  - using boolean
    <?php
    $animation = new \Kendo\UI\TreeViewAnimation();
    $animation->expand(true);
    ?>


#### Example - using [\Kendo\UI\TreeViewAnimationExpand](/api/wrappers/php/Kendo/UI/TreeViewAnimationExpand)
    <?php
    $animation = new \Kendo\UI\TreeViewAnimation();
    $expand = new \Kendo\UI\TreeViewAnimationExpand();
    $duration = 1;
    $expand->duration($duration);
    $animation->expand($expand);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\TreeViewAnimation();
    $duration = 1;
    $animation->expand(array('duration' => $duration));
    ?>

