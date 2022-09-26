---
title: StockChartValueAxisItemCrosshairTooltip
slug: php-dataviz-ui-stockchartvalueaxisitemcrosshairtooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip

A PHP class representing the tooltip setting of StockChartValueAxisItemCrosshair.


## Methods

### background
The background color of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip();
    $tooltip->background('value');
    ?>

### border

The border configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemCrosshairTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip();
    $border = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip();
    $tooltip->font('value');
    ?>

### format
The tooltip format.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip();
    $tooltip->format('value');
    ?>

### padding
The padding of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip();
    $tooltip->padding(1);
    ?>

### template
The tooltip template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
A value indicating if the tooltip should be displayed.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshairTooltip();
    $tooltip->visible(true);
    ?>

