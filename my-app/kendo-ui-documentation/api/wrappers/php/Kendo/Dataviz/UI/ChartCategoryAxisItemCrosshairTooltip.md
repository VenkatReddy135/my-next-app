---
title: ChartCategoryAxisItemCrosshairTooltip
slug: php-dataviz-ui-chartcategoryaxisitemcrosshairtooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip

A PHP class representing the tooltip setting of ChartCategoryAxisItemCrosshair.


## Methods

### background
The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip();
    $tooltip->background('value');
    ?>

### border

The border options.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemCrosshairTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip();
    $border = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip();
    $tooltip->font('value');
    ?>

### format
The format used to display the tooltip. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip();
    $tooltip->format('value');
    ?>

### padding

The padding of the crosshair tooltip. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltipPadding|array`




#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip();
    $tooltip->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltipPadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemCrosshairTooltipPadding)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip();
    $padding = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltipPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $tooltip->padding($padding);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip();
    $bottom = 1;
    $tooltip->padding(array('bottom' => $bottom));
    ?>

### template
The template which renders the tooltip.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the category axis crosshair tooltip. By default the category axis crosshair tooltip is not visible.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshairTooltip();
    $tooltip->visible(true);
    ?>

