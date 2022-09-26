---
title: StockChartCategoryAxisItemCrosshairTooltip
slug: php-dataviz-ui-stockchartcategoryaxisitemcrosshairtooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip

A PHP class representing the tooltip setting of StockChartCategoryAxisItemCrosshair.


## Methods

### background
The background color of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip();
    $tooltip->background('value');
    ?>

### border

The border configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemCrosshairTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip();
    $border = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip();
    $tooltip->font('value');
    ?>

### format
The tooltip format.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip();
    $tooltip->format('value');
    ?>

### padding
The padding of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip();
    $tooltip->padding(1);
    ?>

### template
The tooltip template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
A value indicating if the tooltip should be displayed.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshairTooltip();
    $tooltip->visible(true);
    ?>

