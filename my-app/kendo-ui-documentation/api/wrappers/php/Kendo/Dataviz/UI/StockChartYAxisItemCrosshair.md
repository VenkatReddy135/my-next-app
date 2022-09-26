---
title: StockChartYAxisItemCrosshair
slug: php-dataviz-ui-stockchartyaxisitemcrosshair
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartYAxisItemCrosshair

A PHP class representing the crosshair setting of StockChartYAxisItem.


## Methods

### color
The color of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemCrosshair`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartYAxisItemCrosshair();
    $crosshair->color('value');
    ?>

### dashType
The dash type of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartYAxisItemCrosshair();
    $crosshair->dashType(1);
    ?>

### opacity
The opacity of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartYAxisItemCrosshair();
    $crosshair->opacity(1);
    ?>

### tooltip

The crosshar tooltip configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemCrosshair`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartYAxisItemCrosshairTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartYAxisItemCrosshairTooltip](/api/wrappers/php/Kendo/Dataviz/UI/StockChartYAxisItemCrosshairTooltip)
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartYAxisItemCrosshair();
    $tooltip = new \Kendo\Dataviz\UI\StockChartYAxisItemCrosshairTooltip();
    $background = 'value';
    $tooltip->background($background);
    $crosshair->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartYAxisItemCrosshair();
    $background = 'value';
    $crosshair->tooltip(array('background' => $background));
    ?>

### visible
The dash type of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemCrosshair`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartYAxisItemCrosshair();
    $crosshair->visible(true);
    ?>

### width
The width of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartYAxisItemCrosshair();
    $crosshair->width(1);
    ?>

