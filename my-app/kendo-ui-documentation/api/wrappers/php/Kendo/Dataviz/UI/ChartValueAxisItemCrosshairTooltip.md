---
title: ChartValueAxisItemCrosshairTooltip
slug: php-dataviz-ui-chartvalueaxisitemcrosshairtooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip

A PHP class representing the tooltip setting of ChartValueAxisItemCrosshair.


## Methods

### background
The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip();
    $tooltip->background('value');
    ?>

### border

The border options.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemCrosshairTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip();
    $border = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip();
    $tooltip->font('value');
    ?>

### format
The format used to display the tooltip. Uses kendo.format. Contains one placeholder ("{0}") which represents the value value.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip();
    $tooltip->format('value');
    ?>

### padding

The padding of the crosshair tooltip. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltipPadding|array`




#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip();
    $tooltip->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltipPadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemCrosshairTooltipPadding)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip();
    $padding = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltipPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $tooltip->padding($padding);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip();
    $bottom = 1;
    $tooltip->padding(array('bottom' => $bottom));
    ?>

### template
The template which renders the tooltip.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the value axis crosshair tooltip. By default the value axis crosshair tooltip is not visible.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshairTooltip();
    $tooltip->visible(true);
    ?>

