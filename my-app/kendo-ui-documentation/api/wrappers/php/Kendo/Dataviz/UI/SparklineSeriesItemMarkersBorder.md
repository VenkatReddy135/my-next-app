---
title: SparklineSeriesItemMarkersBorder
slug: php-dataviz-ui-sparklineseriesitemmarkersborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineSeriesItemMarkersBorder

A PHP class representing the border setting of SparklineSeriesItemMarkers.


## Methods

### color
The color of the border.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemMarkersBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkersBorder();
    $border->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkersBorder();
    $border->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### width
The width of the border.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemMarkersBorder`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkersBorder();
    $border->width(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkersBorder();
    $border->width(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

