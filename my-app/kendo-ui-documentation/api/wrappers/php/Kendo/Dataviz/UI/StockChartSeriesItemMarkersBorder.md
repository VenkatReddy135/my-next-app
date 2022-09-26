---
title: StockChartSeriesItemMarkersBorder
slug: php-dataviz-ui-stockchartseriesitemmarkersborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartSeriesItemMarkersBorder

A PHP class representing the border setting of StockChartSeriesItemMarkers.


## Methods

### color
The color of the border.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemMarkersBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkersBorder();
    $border->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkersBorder();
    $border->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### width
The width of the border.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemMarkersBorder`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkersBorder();
    $border->width(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkersBorder();
    $border->width(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

