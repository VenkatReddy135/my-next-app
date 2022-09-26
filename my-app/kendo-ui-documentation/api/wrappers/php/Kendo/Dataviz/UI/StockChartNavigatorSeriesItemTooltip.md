---
title: StockChartNavigatorSeriesItemTooltip
slug: php-dataviz-ui-stockchartnavigatorseriesitemtooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip

A PHP class representing the tooltip setting of StockChartNavigatorSeriesItem.


## Methods

### background
The background color of the tooltip. The default is determined from the series color.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip();
    $tooltip->background('value');
    ?>

### border

The border configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorSeriesItemTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip();
    $border = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip. The default is the same as the series labels color.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip();
    $tooltip->font('value');
    ?>

### format
The tooltip format. Format variables depend on the series type:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip();
    $tooltip->format('value');
    ?>

### padding
The padding of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip();
    $tooltip->padding(1);
    ?>

### template
The tooltip template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
A value indicating if the tooltip should be displayed.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip();
    $tooltip->visible(true);
    ?>

