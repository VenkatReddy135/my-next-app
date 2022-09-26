---
title: ChartYAxisItemCrosshairTooltipBorder
slug: php-dataviz-ui-chartyaxisitemcrosshairtooltipborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltipBorder

A PHP class representing the border setting of ChartYAxisItemCrosshairTooltip.


## Methods

### color
The color of the border. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltipBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltipBorder();
    $border->color('value');
    ?>

### dashType
The dash type of the border.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltipBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltipBorder();
    $border->dashType('value');
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltipBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltipBorder();
    $border->width(1);
    ?>

