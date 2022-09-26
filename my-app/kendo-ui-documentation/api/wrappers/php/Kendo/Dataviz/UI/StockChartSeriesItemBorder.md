---
title: StockChartSeriesItemBorder
slug: php-dataviz-ui-stockchartseriesitemborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartSeriesItemBorder

A PHP class representing the border setting of StockChartSeriesItem.


## Methods

### color
The color of the border.  It defaults to the color of the current series.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemBorder();
    $border->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemBorder();
    $border->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### dashType
The dash type of the border.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemBorder();
    $border->dashType('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemBorder();
    $border->dashType(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### opacity
The border opacity.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemBorder`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemBorder();
    $border->opacity(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemBorder();
    $border->opacity(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### width
The width of the border.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemBorder`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemBorder();
    $border->width(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemBorder();
    $border->width(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

