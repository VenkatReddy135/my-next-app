---
title: StockChartSeriesItemMarkers
slug: php-dataviz-ui-stockchartseriesitemmarkers
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartSeriesItemMarkers

A PHP class representing the markers setting of StockChartSeriesItem.


## Methods

### background
The background color of the current series markers.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemMarkers`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkers();
    $markers->background('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkers();
    $markers->background(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### border

The border of the markers.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemMarkers`

#### Parameters

##### $value `\Kendo\JavaScriptFunction|\Kendo\Dataviz\UI\StockChartSeriesItemMarkersBorder|array`




#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkers();
    $markers->border(new \Kendo\JavaScriptFunction('function() { }'));
    ?>


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemMarkersBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemMarkersBorder)
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkers();
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkersBorder();
    $color = 'value';
    $border->color($color);
    $markers->border($border);
    ?>

#### Example - using array

    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkers();
    $color = 'value';
    $markers->border(array('color' => $color));
    ?>

### rotation
The rotation angle of the markers.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemMarkers`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkers();
    $markers->rotation(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkers();
    $markers->rotation(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### size
The marker size.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemMarkers`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkers();
    $markers->size(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkers();
    $markers->size(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### type
Configures the markers shape type.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemMarkers`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkers();
    $markers->type('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkers();
    $markers->type(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
The markers visibility.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemMarkers`

#### Parameters

##### $value `boolean|\Kendo\JavaScriptFunction`



#### Example  - using boolean
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkers();
    $markers->visible(true);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkers();
    $markers->visible(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

