---
title: StockChartCategoryAxisItemLine
slug: php-dataviz-ui-stockchartcategoryaxisitemline
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartCategoryAxisItemLine

A PHP class representing the line setting of StockChartCategoryAxisItem.


## Methods

### color
The color of the lines. Any valid CSS color string will work here, including hex and rgb.Note: This will also effect the major and minor ticks, but not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLine();
    $line->color('value');
    ?>

### dashType
The dash type of the line.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLine();
    $line->dashType('value');
    ?>

### visible
The visibility of the lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLine`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLine();
    $line->visible(true);
    ?>

### width
The width of the line. This will also effect the major and minor ticks, but
not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLine`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLine();
    $line->width(1);
    ?>

