---
title: ChartXAxisItemCrosshairTooltip
slug: php-dataviz-ui-chartxaxisitemcrosshairtooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip

A PHP class representing the tooltip setting of ChartXAxisItemCrosshair.


## Methods

### background
The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip();
    $tooltip->background('value');
    ?>

### border

The border options.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemCrosshairTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip();
    $border = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip();
    $tooltip->font('value');
    ?>

### format
The format used to display the tooltip. Uses kendo.format. Contains one placeholder ("{0}") which represents the value value.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip();
    $tooltip->format('value');
    ?>

### padding

The padding of the crosshair tooltip. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltipPadding|array`




#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip();
    $tooltip->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltipPadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemCrosshairTooltipPadding)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip();
    $padding = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltipPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $tooltip->padding($padding);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip();
    $bottom = 1;
    $tooltip->padding(array('bottom' => $bottom));
    ?>

### template
The template which renders the tooltip.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the scatter chart x axis crosshair tooltip. By default the scatter chart x axis crosshair tooltip is not visible.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshairTooltip();
    $tooltip->visible(true);
    ?>

