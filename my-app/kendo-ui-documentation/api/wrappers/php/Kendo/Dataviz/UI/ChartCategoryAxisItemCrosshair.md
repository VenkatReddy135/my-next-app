---
title: ChartCategoryAxisItemCrosshair
slug: php-dataviz-ui-chartcategoryaxisitemcrosshair
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair

A PHP class representing the crosshair setting of ChartCategoryAxisItem.


## Methods

### color
The color of the crosshair. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair();
    $crosshair->color('value');
    ?>

### opacity
The opacity of the crosshair. By default the crosshair is opaque.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair();
    $crosshair->opacity(1);
    ?>

### tooltip

The crosshar tooltip options.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemCrosshairTooltip)
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair();
    $tooltip = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip();
    $background = 'value';
    $tooltip->background($background);
    $crosshair->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair();
    $background = 'value';
    $crosshair->tooltip(array('background' => $background));
    ?>

### visible
If set to true the chart will display the category axis crosshair. By default the category axis crosshair is not visible.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair();
    $crosshair->visible(true);
    ?>

### width
The width of the crosshair in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $crosshair = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair();
    $crosshair->width(1);
    ?>

