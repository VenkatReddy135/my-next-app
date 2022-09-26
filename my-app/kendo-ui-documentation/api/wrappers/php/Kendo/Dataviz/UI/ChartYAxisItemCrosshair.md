---
title: ChartYAxisItemCrosshair
slug: php-dataviz-ui-chartyaxisitemcrosshair
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartYAxisItemCrosshair

A PHP class representing the crosshair setting of ChartYAxisItem.


## Methods

### color
The color of the crosshair. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshair`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshair();
    $crosshair->color('value');
    ?>

### opacity
The opacity of the crosshair. By default the crosshair is opaque.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshair();
    $crosshair->opacity(1);
    ?>

### tooltip

The crosshar tooltip options.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshair`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemCrosshairTooltip)
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshair();
    $tooltip = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip();
    $background = 'value';
    $tooltip->background($background);
    $crosshair->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshair();
    $background = 'value';
    $crosshair->tooltip(array('background' => $background));
    ?>

### visible
If set to true the chart will display the scatter chart y axis crosshair. By default the scatter chart y axis crosshair is not visible.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshair`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshair();
    $crosshair->visible(true);
    ?>

### width
The width of the crosshair in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshair();
    $crosshair->width(1);
    ?>

