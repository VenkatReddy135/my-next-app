---
title: StockChartSeriesItemTooltip
slug: php-dataviz-ui-stockchartseriesitemtooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartSeriesItemTooltip

A PHP class representing the tooltip setting of StockChartSeriesItem.


## Methods

### background
The background color of the tooltip. The default is determined from the series color.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesItemTooltip();
    $tooltip->background('value');
    ?>

### border

The border configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesItemTooltip();
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesItemTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip. The default is the same as the series labels color.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesItemTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesItemTooltip();
    $tooltip->font('value');
    ?>

### format
The tooltip format. Format variables depend on the series type:

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesItemTooltip();
    $tooltip->format('value');
    ?>

### padding
The padding of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemTooltip`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesItemTooltip();
    $tooltip->padding(1);
    ?>

### template
The tooltip template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesItemTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesItemTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
A value indicating if the tooltip should be displayed.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesItemTooltip();
    $tooltip->visible(true);
    ?>

