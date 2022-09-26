---
title: StockChartNavigatorSeriesItem
slug: php-dataviz-ui-stockchartnavigatorseriesitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem

A PHP class representing the seriesItem setting of StockChartNavigatorSeries.


## Methods

### aggregate
The aggregate function to apply for date series.This function is used when a category (an year, month, etc.) contains two or more points.
The function return value is displayed instead of the individual points.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->aggregate('value');
    ?>

### axis
The name of the value axis to use.** Applicable to area, column, line, ohlc and candlestick series **

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->axis('value');
    ?>

### border

The border of the points.** Applicable to column, ohlc and candlestick series **

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorSeriesItemBorder)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $border = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemBorder();
    $color = 'value';
    $border->color($color);
    $seriesItem->border($border);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $color = 'value';
    $seriesItem->border(array('color' => $color));
    ?>

### categoryField
The data item field which contains the category name or date.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->categoryField('value');
    ?>

### closeField
The data field containing the close value.** Available for candlestick and ohlc series only **

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->closeField('value');
    ?>

### color
The series base color.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->color('value');
    ?>

### colorField
The data field containing the point color.** Applicable for column, candlestick and ohlc series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->colorField('value');
    ?>

### dashType
The dash type of line chart.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->dashType('value');
    ?>

### data
Array of data items. The data item type can be either a:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->data(new array());
    ?>

### downColor
The series color when open value is smoller then close value.** Available for candlestick series only **

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->downColor('value');
    ?>

### downColorField
The data field containing the body color.** Available for candlestick series only **

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->downColorField('value');
    ?>

### field
The data field containing the series value.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->field('value');
    ?>

### gap
The distance between category clusters.** Applicable for column, candlestick and ohlc series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->gap(1);
    ?>

### highField
The data field containing the high value.** Available for candlestick and ohlc series only **

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->highField('value');
    ?>

### highlight

Configures the appearance of highlighted points.** Applicable to candlestick and ohlc series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemHighlight|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemHighlight](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorSeriesItemHighlight)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $highlight = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemHighlight();
    $color = 'value';
    $highlight->color($color);
    $seriesItem->highlight($highlight);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $color = 'value';
    $seriesItem->highlight(array('color' => $color));
    ?>

### labels

Configures the series data labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorSeriesItemLabels)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $labels = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels();
    $background = 'value';
    $labels->background($background);
    $seriesItem->labels($labels);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $background = 'value';
    $seriesItem->labels(array('background' => $background));
    ?>

### line

Line options.** Applicable to area, candlestick and ohlc series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string|\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLine|array`




#### Example  - using string
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->line('value');
    ?>


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorSeriesItemLine)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $line = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLine();
    $color = 'value';
    $line->color($color);
    $seriesItem->line($line);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $color = 'value';
    $seriesItem->line(array('color' => $color));
    ?>

### lowField
The data field containing the low value.** Available for candlestick and ohlc series **

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->lowField('value');
    ?>

### markers

Marker options.** Applicable for area and line series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorSeriesItemMarkers)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $markers = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemMarkers();
    $background = 'value';
    $markers->background($background);
    $seriesItem->markers($markers);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $background = 'value';
    $seriesItem->markers(array('background' => $background));
    ?>

### missingValues
The behavior for handling missing values. The supported values are:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->missingValues('value');
    ?>

### name
The navigator series name.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->name('value');
    ?>

### opacity
The series opacity.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->opacity(1);
    ?>

### openField
The data field containing the open value.** Available for candlestick and ohlc series **

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->openField('value');
    ?>

### overlay

The effects overlay.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemOverlay|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemOverlay](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorSeriesItemOverlay)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $overlay = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemOverlay();
    $gradient = 'value';
    $overlay->gradient($gradient);
    $seriesItem->overlay($overlay);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $gradient = 'value';
    $seriesItem->overlay(array('gradient' => $gradient));
    ?>

### spacing
Space between points as proportion of the point width.Available for column, candlestick and ohlc series.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->spacing(1);
    ?>

### stack
A value indicating if the series should be stacked.  String value indicates that the series should be stacked in a group with the specified name.
Available for column series.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `boolean|boolean`



#### Example  - using boolean
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->stack(true);
    ?>

#### Example  - using boolean
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->stack(true);
    ?>

### tooltip

The data point tooltip configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorSeriesItemTooltip)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $tooltip = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemTooltip();
    $background = 'value';
    $tooltip->background($background);
    $seriesItem->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $background = 'value';
    $seriesItem->tooltip(array('background' => $background));
    ?>

### type
The type of the series. Available types:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->type('value');
    ?>

### width
The line width.** Applicable for line series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $seriesItem->width(1);
    ?>

