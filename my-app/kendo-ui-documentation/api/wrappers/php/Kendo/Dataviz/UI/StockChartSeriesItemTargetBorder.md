---
title: StockChartSeriesItemTargetBorder
slug: php-dataviz-ui-stockchartseriesitemtargetborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartSeriesItemTargetBorder

A PHP class representing the border setting of StockChartSeriesItemTarget.


## Methods

### color
The color of the border.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemTargetBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemTargetBorder();
    $border->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemTargetBorder();
    $border->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### dashType
The dash type of the border.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemTargetBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemTargetBorder();
    $border->dashType('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemTargetBorder();
    $border->dashType(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### width
The width of the border.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemTargetBorder`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemTargetBorder();
    $border->width(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemTargetBorder();
    $border->width(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

