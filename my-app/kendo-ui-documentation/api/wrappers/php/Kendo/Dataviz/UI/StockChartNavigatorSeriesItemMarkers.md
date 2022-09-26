---
title: StockChartNavigatorSeriesItemMarkers
slug: php-dataviz-ui-stockchartnavigatorseriesitemmarkers
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers

A PHP class representing the markers setting of StockChartNavigatorSeriesItem.


## Methods

### background
The background color of the current series markers.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers();
    $markers->background('value');
    ?>

### border

The border of the markers.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkersBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkersBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorSeriesItemMarkersBorder)
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers();
    $border = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkersBorder();
    $color = 'value';
    $border->color($color);
    $markers->border($border);
    ?>

#### Example - using array

    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers();
    $color = 'value';
    $markers->border(array('color' => $color));
    ?>

### rotation
The rotation angle of the markers.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers();
    $markers->rotation(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers();
    $markers->rotation(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### size
The marker size.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers();
    $markers->size(1);
    ?>

### type
Configures the markers shape type.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers();
    $markers->type('value');
    ?>

### visible
The markers visibility.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $markers = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers();
    $markers->visible(true);
    ?>

