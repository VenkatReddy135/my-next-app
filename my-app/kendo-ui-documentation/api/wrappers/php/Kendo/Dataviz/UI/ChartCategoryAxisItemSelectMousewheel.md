---
title: ChartCategoryAxisItemSelectMousewheel
slug: php-dataviz-ui-chartcategoryaxisitemselectmousewheel
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItemSelectMousewheel

A PHP class representing the mousewheel setting of ChartCategoryAxisItemSelect.


## Methods

### reverse
If set to true will reverse the mouse wheel direction. The normal direction is down for "zoom out", up for "zoom in".

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemSelectMousewheel`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $mousewheel = new \Kendo\Dataviz\UI\ChartCategoryAxisItemSelectMousewheel();
    $mousewheel->reverse(true);
    ?>

### zoom
The zoom direction.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemSelectMousewheel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $mousewheel = new \Kendo\Dataviz\UI\ChartCategoryAxisItemSelectMousewheel();
    $mousewheel->zoom('value');
    ?>

