---
title: ChartXAxisItemCrosshair
slug: php-dataviz-ui-chartxaxisitemcrosshair
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItemCrosshair

A PHP class representing the crosshair setting of ChartXAxisItem.


## Methods

### color
The color of the crosshair. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemCrosshair`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshair();
    $crosshair->color('value');
    ?>

### opacity
The opacity of the crosshair. By default the crosshair is opaque.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshair();
    $crosshair->opacity(1);
    ?>

### tooltip

The crosshar tooltip options.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemCrosshair`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemCrosshairTooltip)
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshair();
    $tooltip = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip();
    $background = 'value';
    $tooltip->background($background);
    $crosshair->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshair();
    $background = 'value';
    $crosshair->tooltip(array('background' => $background));
    ?>

### visible
If set to true the chart will display the scatter chart x axis crosshair. By default the scatter chart x axis crosshair is not visible.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemCrosshair`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshair();
    $crosshair->visible(true);
    ?>

### width
The width of the crosshair in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshair();
    $crosshair->width(1);
    ?>

