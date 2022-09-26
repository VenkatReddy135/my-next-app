---
title: StockChartCategoryAxisItemMinorGridLines
slug: php-dataviz-ui-stockchartcategoryaxisitemminorgridlines
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorGridLines

A PHP class representing the minorGridLines setting of StockChartCategoryAxisItem.


## Methods

### color
The color of the lines. Any valid CSS color string will work here, including hex and
rgb.Note that this setting has no effect if the visibility of the minor
grid lines is not set to true.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorGridLines();
    $minorGridLines->color('value');
    ?>

### dashType
The dash type of the grid lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorGridLines();
    $minorGridLines->dashType('value');
    ?>

### visible
The visibility of the lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorGridLines`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorGridLines();
    $minorGridLines->visible(true);
    ?>

### width
The width of the lines.Note that this setting has no effect if the visibility of the minor
grid lines is not set to true.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorGridLines`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorGridLines();
    $minorGridLines->width(1);
    ?>

