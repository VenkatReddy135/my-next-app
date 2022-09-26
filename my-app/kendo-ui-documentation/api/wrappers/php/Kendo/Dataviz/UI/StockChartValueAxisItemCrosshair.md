---
title: StockChartValueAxisItemCrosshair
slug: php-dataviz-ui-stockchartvalueaxisitemcrosshair
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair

A PHP class representing the crosshair setting of StockChartValueAxisItem.


## Methods

### color
The color of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair();
    $crosshair->color('value');
    ?>

### dashType
The dash type of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair();
    $crosshair->dashType(1);
    ?>

### opacity
The opacity of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair();
    $crosshair->opacity(1);
    ?>

### tooltip

The crosshar tooltip configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemCrosshairTooltip)
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair();
    $tooltip = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip();
    $background = 'value';
    $tooltip->background($background);
    $crosshair->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair();
    $background = 'value';
    $crosshair->tooltip(array('background' => $background));
    ?>

### visible
The dash type of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair();
    $crosshair->visible(true);
    ?>

### width
The width of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair();
    $crosshair->width(1);
    ?>

