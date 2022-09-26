---
title: StockChartValueAxisItemLine
slug: php-dataviz-ui-stockchartvalueaxisitemline
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartValueAxisItemLine

A PHP class representing the line setting of StockChartValueAxisItem.


## Methods

### color
The color of the line. This will also effect the major and minor ticks, but
not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartValueAxisItemLine();
    $line->color('value');
    ?>

### dashType
The dash type of the line.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartValueAxisItemLine();
    $line->dashType('value');
    ?>

### visible
The visibility of the line.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemLine`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartValueAxisItemLine();
    $line->visible(true);
    ?>

### width
The width of the line. This will also effect the major and minor ticks, but
not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemLine`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartValueAxisItemLine();
    $line->width(1);
    ?>

