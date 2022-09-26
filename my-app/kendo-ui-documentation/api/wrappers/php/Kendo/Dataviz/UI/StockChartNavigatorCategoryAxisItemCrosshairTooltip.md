---
title: StockChartNavigatorCategoryAxisItemCrosshairTooltip
slug: php-dataviz-ui-stockchartnavigatorcategoryaxisitemcrosshairtooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip

A PHP class representing the tooltip setting of StockChartNavigatorCategoryAxisItemCrosshair.


## Methods

### background
The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip();
    $tooltip->background('value');
    ?>

### border

The border options.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemCrosshairTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip();
    $border = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip();
    $tooltip->font('value');
    ?>

### format
The format used to display the tooltip. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip();
    $tooltip->format('value');
    ?>

### padding

The padding of the crosshair tooltip. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltipPadding|array`




#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip();
    $tooltip->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltipPadding](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemCrosshairTooltipPadding)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip();
    $padding = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltipPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $tooltip->padding($padding);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip();
    $bottom = 1;
    $tooltip->padding(array('bottom' => $bottom));
    ?>

### template
The template which renders the tooltip.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the category axis crosshair tooltip. By default the category axis crosshair tooltip is not visible.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshairTooltip();
    $tooltip->visible(true);
    ?>

