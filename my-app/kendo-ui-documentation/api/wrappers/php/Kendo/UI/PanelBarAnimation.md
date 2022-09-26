---
title: PanelBarAnimation
slug: php-ui-panelbaranimation
tags: api, php
publish: true
---

# \Kendo\UI\PanelBarAnimation

A PHP class representing the animation setting of PanelBar.


## Methods

### collapse

The visual animation(s) that will be used when PanelBar items are closed.

#### Returns
`\Kendo\UI\PanelBarAnimation`

#### Parameters

##### $value `\Kendo\UI\PanelBarAnimationCollapse|array`


#### Example - using [\Kendo\UI\PanelBarAnimationCollapse](/api/wrappers/php/Kendo/UI/PanelBarAnimationCollapse)
    <?php
    $animation = new \Kendo\UI\PanelBarAnimation();
    $collapse = new \Kendo\UI\PanelBarAnimationCollapse();
    $duration = 1;
    $collapse->duration($duration);
    $animation->collapse($collapse);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\PanelBarAnimation();
    $duration = 1;
    $animation->collapse(array('duration' => $duration));
    ?>

### expand

The visual animation(s) that will be used when opening items.

#### Returns
`\Kendo\UI\PanelBarAnimation`

#### Parameters

##### $value `\Kendo\UI\PanelBarAnimationExpand|array`


#### Example - using [\Kendo\UI\PanelBarAnimationExpand](/api/wrappers/php/Kendo/UI/PanelBarAnimationExpand)
    <?php
    $animation = new \Kendo\UI\PanelBarAnimation();
    $expand = new \Kendo\UI\PanelBarAnimationExpand();
    $duration = 1;
    $expand->duration($duration);
    $animation->expand($expand);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\PanelBarAnimation();
    $duration = 1;
    $animation->expand(array('duration' => $duration));
    ?>

