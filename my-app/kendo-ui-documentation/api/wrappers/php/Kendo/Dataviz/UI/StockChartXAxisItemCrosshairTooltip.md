---
title: StockChartXAxisItemCrosshairTooltip
slug: php-dataviz-ui-stockchartxaxisitemcrosshairtooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip

A PHP class representing the tooltip setting of StockChartXAxisItemCrosshair.


## Methods

### background
The background color of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip();
    $tooltip->background('value');
    ?>

### border

The border configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartXAxisItemCrosshairTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip();
    $border = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip();
    $tooltip->font('value');
    ?>

### format
The tooltip format.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip();
    $tooltip->format('value');
    ?>

### padding
The padding of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip();
    $tooltip->padding(1);
    ?>

### template
The tooltip template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
A value indicating if the tooltip should be displayed.

#### Returns
`\Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartXAxisItemCrosshairTooltip();
    $tooltip->visible(true);
    ?>

