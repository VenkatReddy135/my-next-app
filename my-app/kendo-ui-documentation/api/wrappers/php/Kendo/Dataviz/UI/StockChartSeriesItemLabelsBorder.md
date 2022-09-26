---
title: StockChartSeriesItemLabelsBorder
slug: php-dataviz-ui-stockchartseriesitemlabelsborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartSeriesItemLabelsBorder

A PHP class representing the border setting of StockChartSeriesItemLabels.


## Methods

### color
The color of the border.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemLabelsBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemLabelsBorder();
    $border->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemLabelsBorder();
    $border->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### dashType
The dash type of the border.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemLabelsBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemLabelsBorder();
    $border->dashType('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemLabelsBorder();
    $border->dashType(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### width
The width of the border.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemLabelsBorder`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemLabelsBorder();
    $border->width(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemLabelsBorder();
    $border->width(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

