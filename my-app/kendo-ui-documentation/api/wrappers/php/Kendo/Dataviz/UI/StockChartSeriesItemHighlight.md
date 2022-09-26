---
title: StockChartSeriesItemHighlight
slug: php-dataviz-ui-stockchartseriesitemhighlight
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartSeriesItemHighlight

A PHP class representing the highlight setting of StockChartSeriesItem.


## Methods

### border

The border of highlighted points. The color is computed automatically from the base point color.** Applicable to bubble, pie, candlestick and ohlc series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemHighlight`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemHighlightBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemHighlightBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemHighlightBorder)
    <?php
    $highlight = new \Kendo\Dataviz\UI\StockChartSeriesItemHighlight();
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemHighlightBorder();
    $color = 'value';
    $border->color($color);
    $highlight->border($border);
    ?>

#### Example - using array

    <?php
    $highlight = new \Kendo\Dataviz\UI\StockChartSeriesItemHighlight();
    $color = 'value';
    $highlight->border(array('color' => $color));
    ?>

### color
The highlight color.** Available only for pie series **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemHighlight`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $highlight = new \Kendo\Dataviz\UI\StockChartSeriesItemHighlight();
    $highlight->color('value');
    ?>

### line

Line options for highlighted points. The color is computed automatically from the base point color.** Available only for candlestick series **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemHighlight`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemHighlightLine|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemHighlightLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemHighlightLine)
    <?php
    $highlight = new \Kendo\Dataviz\UI\StockChartSeriesItemHighlight();
    $line = new \Kendo\Dataviz\UI\StockChartSeriesItemHighlightLine();
    $color = 'value';
    $line->color($color);
    $highlight->line($line);
    ?>

#### Example - using array

    <?php
    $highlight = new \Kendo\Dataviz\UI\StockChartSeriesItemHighlight();
    $color = 'value';
    $highlight->line(array('color' => $color));
    ?>

### opacity
The opacity of the highlighted points.** Applicable to bubble, pie, candlestick and ohlc series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemHighlight`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $highlight = new \Kendo\Dataviz\UI\StockChartSeriesItemHighlight();
    $highlight->opacity(1);
    ?>

### visible
A value indicating if the series points should be highlighted.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemHighlight`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $highlight = new \Kendo\Dataviz\UI\StockChartSeriesItemHighlight();
    $highlight->visible(true);
    ?>

