---
title: ChartYAxisItemCrosshairTooltip
slug: php-dataviz-ui-chartyaxisitemcrosshairtooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip

A PHP class representing the tooltip setting of ChartYAxisItemCrosshair.


## Methods

### background
The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip();
    $tooltip->background('value');
    ?>

### border

The border options.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemCrosshairTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip();
    $border = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip();
    $tooltip->font('value');
    ?>

### format
The format used to display the tooltip. Uses kendo.format. Contains one placeholder ("{0}") which represents the value value.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip();
    $tooltip->format('value');
    ?>

### padding

The padding of the crosshair tooltip. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltipPadding|array`




#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip();
    $tooltip->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltipPadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemCrosshairTooltipPadding)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip();
    $padding = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltipPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $tooltip->padding($padding);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip();
    $bottom = 1;
    $tooltip->padding(array('bottom' => $bottom));
    ?>

### template
The template which renders the tooltip.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the scatter chart y axis crosshair tooltip. By default the scatter chart y axis crosshair tooltip is not visible.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshairTooltip();
    $tooltip->visible(true);
    ?>

