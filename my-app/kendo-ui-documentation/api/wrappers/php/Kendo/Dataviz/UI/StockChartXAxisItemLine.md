---
title: StockChartXAxisItemLine
slug: php-dataviz-ui-stockchartxaxisitemline
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartXAxisItemLine

A PHP class representing the line setting of StockChartXAxisItem.


## Methods

### color
The color of the line. This will also effect the major and minor ticks, but
not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartXAxisItemLine();
    $line->color('value');
    ?>

### dashType
The dash type of the line.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartXAxisItemLine();
    $line->dashType('value');
    ?>

### visible
The visibility of the line.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemLine`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartXAxisItemLine();
    $line->visible(true);
    ?>

### width
The width of the line. This will also effect the major and minor ticks, but
not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemLine`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\StockChartXAxisItemLine();
    $line->width(1);
    ?>

