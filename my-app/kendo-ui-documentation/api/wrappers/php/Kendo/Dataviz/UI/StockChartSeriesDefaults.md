---
title: StockChartSeriesDefaults
slug: php-dataviz-ui-stockchartseriesdefaults
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartSeriesDefaults

A PHP class representing the seriesDefaults setting of StockChart.


## Methods

### area
The area configuration options.
The default options for all area series. For more details see the series options.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaults`

#### Parameters

##### $value ``



### border

The border of the series.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaults`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesDefaultsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesDefaultsBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesDefaultsBorder)
    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\StockChartSeriesDefaults();
    $border = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsBorder();
    $color = 'value';
    $border->color($color);
    $seriesDefaults->border($border);
    ?>

#### Example - using array

    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\StockChartSeriesDefaults();
    $color = 'value';
    $seriesDefaults->border(array('color' => $color));
    ?>

### candlestick
The candlestick configuration options.
The default options for all candlestick series. For more details see the series options.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaults`

#### Parameters

##### $value ``



### column
The column configuration options.
The default options for all column series. For more details see the series options.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaults`

#### Parameters

##### $value ``



### gap
The distance between category clusters.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaults`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\StockChartSeriesDefaults();
    $seriesDefaults->gap(1);
    ?>

### labels

Configures the series data labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaults`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesDefaultsLabels)
    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\StockChartSeriesDefaults();
    $labels = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels();
    $background = 'value';
    $labels->background($background);
    $seriesDefaults->labels($labels);
    ?>

#### Example - using array

    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\StockChartSeriesDefaults();
    $background = 'value';
    $seriesDefaults->labels(array('background' => $background));
    ?>

### line
The line configuration options.
The default options for all line series. For more details see the series options.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaults`

#### Parameters

##### $value ``



### ohlc
The ohlc configuration options.
The default options for all ohlc series. For more details see the series options.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaults`

#### Parameters

##### $value ``



### overlay
The effects overlay.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaults`

#### Parameters

##### $value ``



### pie
The pie configuration options.
The default options for all pie series. For more details see the series options.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaults`

#### Parameters

##### $value ``



### spacing
Space between bars.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaults`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\StockChartSeriesDefaults();
    $seriesDefaults->spacing(1);
    ?>

### stack
A value indicating if the series should be stacked.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaults`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\StockChartSeriesDefaults();
    $seriesDefaults->stack(true);
    ?>

### tooltip

The data point tooltip configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaults`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesDefaultsTooltip)
    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\StockChartSeriesDefaults();
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsTooltip();
    $background = 'value';
    $tooltip->background($background);
    $seriesDefaults->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\StockChartSeriesDefaults();
    $background = 'value';
    $seriesDefaults->tooltip(array('background' => $background));
    ?>

