---
title: SparklineValueAxisItemCrosshair
slug: php-dataviz-ui-sparklinevalueaxisitemcrosshair
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair

A PHP class representing the crosshair setting of SparklineValueAxisItem.


## Methods

### color
The color of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair();
    $crosshair->color('value');
    ?>

### dashType
The dash type of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair();
    $crosshair->dashType(1);
    ?>

### opacity
The opacity of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair();
    $crosshair->opacity(1);
    ?>

### tooltip

The crosshar tooltip configuration options.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemCrosshairTooltip)
    <?php
    $crosshair = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair();
    $tooltip = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip();
    $background = 'value';
    $tooltip->background($background);
    $crosshair->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $crosshair = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair();
    $background = 'value';
    $crosshair->tooltip(array('background' => $background));
    ?>

### visible
The dash type of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair();
    $crosshair->visible(true);
    ?>

### width
The width of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair();
    $crosshair->width(1);
    ?>

