---
title: StockChartXAxisItemCrosshair
slug: php-dataviz-ui-stockchartxaxisitemcrosshair
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartXAxisItemCrosshair

A PHP class representing the crosshair setting of StockChartXAxisItem.


## Methods

### color
The color of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemCrosshair`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshair();
    $crosshair->color('value');
    ?>

### dashType
The dash type of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshair();
    $crosshair->dashType(1);
    ?>

### opacity
The opacity of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshair();
    $crosshair->opacity(1);
    ?>

### tooltip

The crosshar tooltip configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemCrosshair`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip](/api/wrappers/php/Kendo/Dataviz/UI/StockChartXAxisItemCrosshairTooltip)
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshair();
    $tooltip = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip();
    $background = 'value';
    $tooltip->background($background);
    $crosshair->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshair();
    $background = 'value';
    $crosshair->tooltip(array('background' => $background));
    ?>

### visible
The dash type of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemCrosshair`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshair();
    $crosshair->visible(true);
    ?>

### width
The width of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshair();
    $crosshair->width(1);
    ?>

