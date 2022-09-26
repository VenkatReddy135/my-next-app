---
title: SparklineCategoryAxisItemCrosshair
slug: php-dataviz-ui-sparklinecategoryaxisitemcrosshair
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair

A PHP class representing the crosshair setting of SparklineCategoryAxisItem.


## Methods

### color
The color of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair();
    $crosshair->color('value');
    ?>

### dashType
The dash type of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair();
    $crosshair->dashType(1);
    ?>

### opacity
The opacity of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair();
    $crosshair->opacity(1);
    ?>

### tooltip

The crosshar tooltip configuration options.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemCrosshairTooltip)
    <?php
    $crosshair = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair();
    $tooltip = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip();
    $background = 'value';
    $tooltip->background($background);
    $crosshair->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $crosshair = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair();
    $background = 'value';
    $crosshair->tooltip(array('background' => $background));
    ?>

### visible
The dash type of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair();
    $crosshair->visible(true);
    ?>

### width
The width of the crosshair.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair();
    $crosshair->width(1);
    ?>

