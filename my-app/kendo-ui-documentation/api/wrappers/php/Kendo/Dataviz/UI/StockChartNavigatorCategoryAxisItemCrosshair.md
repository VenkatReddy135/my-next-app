---
title: StockChartNavigatorCategoryAxisItemCrosshair
slug: php-dataviz-ui-stockchartnavigatorcategoryaxisitemcrosshair
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair

A PHP class representing the crosshair setting of StockChartNavigatorCategoryAxisItem.


## Methods

### color
The color of the crosshair. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair();
    $crosshair->color('value');
    ?>

### opacity
The opacity of the crosshair. By default the crosshair is opaque.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair();
    $crosshair->opacity(1);
    ?>

### tooltip

The crosshar tooltip options.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemCrosshairTooltip)
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair();
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip();
    $background = 'value';
    $tooltip->background($background);
    $crosshair->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair();
    $background = 'value';
    $crosshair->tooltip(array('background' => $background));
    ?>

### visible
If set to true the chart will display the category axis crosshair. By default the category axis crosshair is not visible.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair();
    $crosshair->visible(true);
    ?>

### width
The width of the crosshair in pixels.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair();
    $crosshair->width(1);
    ?>

