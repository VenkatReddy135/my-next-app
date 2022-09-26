---
title: StockChartYAxisItemLine
slug: php-dataviz-ui-stockchartyaxisitemline
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartYAxisItemLine

A PHP class representing the line setting of StockChartYAxisItem.


## Methods

### color
The color of the line. This will also effect the major and minor ticks, but
not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartYAxisItemLine();
    $line->color('value');
    ?>

### dashType
The dash type of the line.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartYAxisItemLine();
    $line->dashType('value');
    ?>

### visible
The visibility of the line.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLine`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartYAxisItemLine();
    $line->visible(true);
    ?>

### width
The width of the line. This will also effect the major and minor ticks, but
not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLine`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartYAxisItemLine();
    $line->width(1);
    ?>

