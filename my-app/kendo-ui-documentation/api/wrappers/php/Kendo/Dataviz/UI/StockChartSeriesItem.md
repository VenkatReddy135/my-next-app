---
title: StockChartSeriesItem
slug: php-dataviz-ui-stockchartseriesitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartSeriesItem

A PHP class representing the seriesItem setting of StockChartSeries.


## Methods

### aggregate
The aggregate function to apply for date series.This function is used when a category (an year, month, etc.) contains two or more points.
The function return value is displayed instead of the individual points.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->aggregate('value');
    ?>

### axis
The name of the value axis to use.** Applicable to area, column, line, ohlc and candlestick series **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->axis('value');
    ?>

### border

The border of the points.** Applicable to column, ohlc and candlestick series **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemBorder)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemBorder();
    $color = 'value';
    $border->color($color);
    $seriesItem->border($border);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $color = 'value';
    $seriesItem->border(array('color' => $color));
    ?>

### categoryField
The data item field which contains the category name or date.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->categoryField('value');
    ?>

### closeField
The data field containing the close value.** Available for candlestick and ohlc series only **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->closeField('value');
    ?>

### color
The series base color.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### colorField
The data field containing the point color.** Applicable for column, candlestick and ohlc series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->colorField('value');
    ?>

### currentField
The data field containing the current value.** Available for bullet and verticalBullet series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->currentField('value');
    ?>

### dashType
The series line dash type.** Applicable only to line series **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->dashType('value');
    ?>

### data
Array of data items. The data item type can be either a:

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->data(new array());
    ?>

### downColor
The series color when open value is smoller then close value.** Available for candlestick series only **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->downColor('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->downColor(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### downColorField
The data field containing the body color.** Available for candlestick series only **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->downColorField('value');
    ?>

### field
The data field containing the series value.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->field('value');
    ?>

### gap
The distance between category clusters.** Applicable for column, candlestick and ohlc series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->gap(1);
    ?>

### highField
The data field containing the high value.** Available for candlestick and ohlc series only **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->highField('value');
    ?>

### highlight

Configures the appearance of highlighted points.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemHighlight|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemHighlight](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemHighlight)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $highlight = new \Kendo\Dataviz\UI\StockChartSeriesItemHighlight();
    $color = 'value';
    $highlight->color($color);
    $seriesItem->highlight($highlight);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $color = 'value';
    $seriesItem->highlight(array('color' => $color));
    ?>

### labels

Configures the series data labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemLabels|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemLabels](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemLabels)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $labels = new \Kendo\Dataviz\UI\StockChartSeriesItemLabels();
    $background = 'value';
    $labels->background($background);
    $seriesItem->labels($labels);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $background = 'value';
    $seriesItem->labels(array('background' => $background));
    ?>

### line

Line options.** Applicable to area, candlestick and ohlc series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string|\Kendo\Dataviz\UI\StockChartSeriesItemLine|array`




#### Example  - using string
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->line('value');
    ?>


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemLine)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $line = new \Kendo\Dataviz\UI\StockChartSeriesItemLine();
    $color = 'value';
    $line->color($color);
    $seriesItem->line($line);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $color = 'value';
    $seriesItem->line(array('color' => $color));
    ?>

### lowField
The data field containing the low value.** Available for candlestick and ohlc series **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->lowField('value');
    ?>

### markers

Marker options.** Applicable for area and line series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemMarkers|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemMarkers](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemMarkers)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $markers = new \Kendo\Dataviz\UI\StockChartSeriesItemMarkers();
    $background = 'value';
    $markers->background($background);
    $seriesItem->markers($markers);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $background = 'value';
    $seriesItem->markers(array('background' => $background));
    ?>

### missingValues
The behavior for handling missing values. The supported values are:

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->missingValues('value');
    ?>

### name
The series name visible in the legend.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->name('value');
    ?>

### negativeColor
Color to use for bars with negative values.** Applicable only to column series. **The plot stops before the missing point and continues after it.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->negativeColor('value');
    ?>

### notes

The series notes configuration.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemNotes|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemNotes](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemNotes)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $notes = new \Kendo\Dataviz\UI\StockChartSeriesItemNotes();
    $position = 'value';
    $notes->position($position);
    $seriesItem->notes($notes);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $position = 'value';
    $seriesItem->notes(array('position' => $position));
    ?>

### opacity
The series opacity.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->opacity(1);
    ?>

### openField
The data field containing the open value.** Available for candlestick and ohlc series **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->openField('value');
    ?>

### overlay

The effects overlay.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemOverlay|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemOverlay](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemOverlay)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $overlay = new \Kendo\Dataviz\UI\StockChartSeriesItemOverlay();
    $gradient = 'value';
    $overlay->gradient($gradient);
    $seriesItem->overlay($overlay);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $gradient = 'value';
    $seriesItem->overlay(array('gradient' => $gradient));
    ?>

### spacing
Space between points as proportion of the point width.Available for column, candlestick and ohlc series.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->spacing(1);
    ?>

### stack
A value indicating if the series should be stacked. String value indicates that the series should be stacked in a group with the specified name.
Available for column series.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `boolean|string`



#### Example  - using boolean
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->stack(true);
    ?>

#### Example  - using string
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->stack('value');
    ?>

### target

The target of the bullet chart.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemTarget|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemTarget](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemTarget)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $target = new \Kendo\Dataviz\UI\StockChartSeriesItemTarget();
    $color = 'value';
    $target->color($color);
    $seriesItem->target($target);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $color = 'value';
    $seriesItem->target(array('color' => $color));
    ?>

### targetField
The data field containing the target value.** Available for bullet and verticalBullet series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->targetField('value');
    ?>

### tooltip

The data point tooltip configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemTooltip](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemTooltip)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $tooltip = new \Kendo\Dataviz\UI\StockChartSeriesItemTooltip();
    $background = 'value';
    $tooltip->background($background);
    $seriesItem->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $background = 'value';
    $seriesItem->tooltip(array('background' => $background));
    ?>

### type
The type of the series. Available types:

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->type('value');
    ?>

### visibleInLegend
A value indicating whether to show the series name in the legend.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->visibleInLegend(true);
    ?>

### width
The line width.** Applicable for area and line series. **

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $seriesItem->width(1);
    ?>

