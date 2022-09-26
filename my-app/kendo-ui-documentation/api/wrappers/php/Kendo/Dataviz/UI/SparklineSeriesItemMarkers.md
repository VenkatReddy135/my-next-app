---
title: SparklineSeriesItemMarkers
slug: php-dataviz-ui-sparklineseriesitemmarkers
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineSeriesItemMarkers

A PHP class representing the markers setting of SparklineSeriesItem.


## Methods

### background
The background color of the current series markers.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemMarkers`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $markers = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkers();
    $markers->background('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $markers = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkers();
    $markers->background(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### border

The border of the markers.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemMarkers`

#### Parameters

##### $value `\Kendo\JavaScriptFunction|\Kendo\Dataviz\UI\SparklineSeriesItemMarkersBorder|array`




#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $markers = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkers();
    $markers->border(new \Kendo\JavaScriptFunction('function() { }'));
    ?>


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemMarkersBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemMarkersBorder)
    <?php
    $markers = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkers();
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkersBorder();
    $color = 'value';
    $border->color($color);
    $markers->border($border);
    ?>

#### Example - using array

    <?php
    $markers = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkers();
    $color = 'value';
    $markers->border(array('color' => $color));
    ?>

### rotation
The rotation angle of the markers.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemMarkers`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $markers = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkers();
    $markers->rotation(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $markers = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkers();
    $markers->rotation(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### size
The marker size.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemMarkers`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $markers = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkers();
    $markers->size(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $markers = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkers();
    $markers->size(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### type
Configures the markers shape type.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemMarkers`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $markers = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkers();
    $markers->type('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $markers = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkers();
    $markers->type(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
The markers visibility.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemMarkers`

#### Parameters

##### $value `boolean|\Kendo\JavaScriptFunction`



#### Example  - using boolean
    <?php
    $markers = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkers();
    $markers->visible(true);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $markers = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkers();
    $markers->visible(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

