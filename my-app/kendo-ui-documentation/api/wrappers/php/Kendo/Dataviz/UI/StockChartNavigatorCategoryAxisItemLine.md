---
title: StockChartNavigatorCategoryAxisItemLine
slug: php-dataviz-ui-stockchartnavigatorcategoryaxisitemline
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLine

A PHP class representing the line setting of StockChartNavigatorCategoryAxisItem.


## Methods

### color
The color of the lines. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLine();
    $line->color('value');
    ?>

### dashType
The dash type of the line.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLine();
    $line->dashType('value');
    ?>

### visible
If set to true the chart will display the category axis lines. By default the category axis lines are visible.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLine`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLine();
    $line->visible(true);
    ?>

### width
The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLine`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLine();
    $line->width(1);
    ?>

