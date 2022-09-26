---
title: StockChartSeriesDefaultsTooltip
slug: php-dataviz-ui-stockchartseriesdefaultstooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip

A PHP class representing the tooltip setting of StockChartSeriesDefaults.


## Methods

### background
The background color of the tooltip. The default is determined from the series color.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip();
    $tooltip->background('value');
    ?>

### border

The border configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesDefaultsTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip();
    $border = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip. The default is the same as the series labels color.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip();
    $tooltip->font('value');
    ?>

### format
The tooltip format.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip();
    $tooltip->format('value');
    ?>

### padding
The padding of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip();
    $tooltip->padding(1);
    ?>

### template
The tooltip template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
A value indicating if the tooltip should be displayed.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip();
    $tooltip->visible(true);
    ?>

