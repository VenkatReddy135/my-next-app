---
title: StockChartPlotArea
slug: php-dataviz-ui-stockchartplotarea
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartPlotArea

A PHP class representing the plotArea setting of StockChart.


## Methods

### background
The background color of the plot area.

#### Returns
`\Kendo\Dataviz\UI\StockChartPlotArea`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $plotArea = new \Kendo\Dataviz\UI\StockChartPlotArea();
    $plotArea->background('value');
    ?>

### border

The border of the plot area.

#### Returns
`\Kendo\Dataviz\UI\StockChartPlotArea`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartPlotAreaBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartPlotAreaBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartPlotAreaBorder)
    <?php
    $plotArea = new \Kendo\Dataviz\UI\StockChartPlotArea();
    $border = new \Kendo\Dataviz\UI\StockChartPlotAreaBorder();
    $color = 'value';
    $border->color($color);
    $plotArea->border($border);
    ?>

#### Example - using array

    <?php
    $plotArea = new \Kendo\Dataviz\UI\StockChartPlotArea();
    $color = 'value';
    $plotArea->border(array('color' => $color));
    ?>

### margin
The margin of the plot area.

#### Returns
`\Kendo\Dataviz\UI\StockChartPlotArea`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $plotArea = new \Kendo\Dataviz\UI\StockChartPlotArea();
    $plotArea->margin(1);
    ?>

### opacity
The background opacity of the plot area.

#### Returns
`\Kendo\Dataviz\UI\StockChartPlotArea`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $plotArea = new \Kendo\Dataviz\UI\StockChartPlotArea();
    $plotArea->opacity(1);
    ?>

