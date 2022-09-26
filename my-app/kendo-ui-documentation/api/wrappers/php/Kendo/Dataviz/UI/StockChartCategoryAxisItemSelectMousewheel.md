---
title: StockChartCategoryAxisItemSelectMousewheel
slug: php-dataviz-ui-stockchartcategoryaxisitemselectmousewheel
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartCategoryAxisItemSelectMousewheel

A PHP class representing the mousewheel setting of StockChartCategoryAxisItemSelect.


## Methods

### reverse
Reverses the mousewheel zoom direction.
Normal direction is down for "zoom out", up for "zoom in".

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemSelectMousewheel`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $mousewheel = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemSelectMousewheel();
    $mousewheel->reverse(true);
    ?>

### zoom
The zoom direction. Possible values:

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemSelectMousewheel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $mousewheel = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemSelectMousewheel();
    $mousewheel->zoom('value');
    ?>

