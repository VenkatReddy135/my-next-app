---
title: ChartValueAxisItemCrosshair
slug: php-dataviz-ui-chartvalueaxisitemcrosshair
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItemCrosshair

A PHP class representing the crosshair setting of ChartValueAxisItem.


## Methods

### color
The color of the crosshair. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemCrosshair`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshair();
    $crosshair->color('value');
    ?>

### opacity
The opacity of the crosshair. By default the crosshair is opaque.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshair();
    $crosshair->opacity(1);
    ?>

### tooltip

The crosshar tooltip options.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemCrosshair`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemCrosshairTooltip)
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshair();
    $tooltip = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip();
    $background = 'value';
    $tooltip->background($background);
    $crosshair->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshair();
    $background = 'value';
    $crosshair->tooltip(array('background' => $background));
    ?>

### visible
If set to true the chart will display the value axis crosshair. By default the value axis crosshair is not visible.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemCrosshair`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshair();
    $crosshair->visible(true);
    ?>

### width
The width of the crosshair in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshair();
    $crosshair->width(1);
    ?>

