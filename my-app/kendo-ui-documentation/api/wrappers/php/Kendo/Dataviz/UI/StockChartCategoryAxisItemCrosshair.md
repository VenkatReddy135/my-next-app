---
title: StockChartCategoryAxisItemCrosshair
slug: php-dataviz-ui-stockchartcategoryaxisitemcrosshair
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair

A PHP class representing the crosshair setting of StockChartCategoryAxisItem.


## Methods

### color
The color of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair();
    $crosshair->color('value');
    ?>

### dashType
The dash type of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair();
    $crosshair->dashType(1);
    ?>

### opacity
The opacity of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair();
    $crosshair->opacity(1);
    ?>

### tooltip

The crosshar tooltip configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemCrosshairTooltip)
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair();
    $tooltip = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip();
    $background = 'value';
    $tooltip->background($background);
    $crosshair->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair();
    $background = 'value';
    $crosshair->tooltip(array('background' => $background));
    ?>

### visible
The dash type of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair();
    $crosshair->visible(true);
    ?>

### width
The width of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair();
    $crosshair->width(1);
    ?>

