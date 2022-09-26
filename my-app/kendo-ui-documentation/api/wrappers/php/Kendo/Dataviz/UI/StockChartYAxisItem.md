---
title: StockChartYAxisItem
slug: php-dataviz-ui-stockchartyaxisitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartYAxisItem

A PHP class representing the yAxisItem setting of StockChartYAxis.


## Methods

### axisCrossingValue
Value at which the Y axis crosses this axis. (Only for object)Value indicies at which the Y axes cross the value axis. (Only for array)Date at which the Y axis crosses this axis. (Only for date)Note: Specify a value greater than or equal to the
axis maximum value to denote the far end of the axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `|date|array`



#### Example  - using 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $yAxisItem->axisCrossingValue(new ());
    ?>

#### Example  - using date
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $yAxisItem->axisCrossingValue(new date());
    ?>

#### Example  - using array
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $yAxisItem->axisCrossingValue(new array());
    ?>

### baseUnit
The base time interval for the axis labels.
The default baseUnit is determined automatically from the value range. Available options:

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $yAxisItem->baseUnit('value');
    ?>

### color
Color to apply to all axis elements.
Individual color settings for line and labels take priority. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $yAxisItem->color('value');
    ?>

### crosshair

The crosshair configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartYAxisItemCrosshair|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartYAxisItemCrosshair](/api/wrappers/php/Kendo/Dataviz/UI/StockChartYAxisItemCrosshair)
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $crosshair = new \Kendo\Dataviz\UI\StockChartYAxisItemCrosshair();
    $color = 'value';
    $crosshair->color($color);
    $yAxisItem->crosshair($crosshair);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $color = 'value';
    $yAxisItem->crosshair(array('color' => $color));
    ?>

### labels

Configures the axis labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartYAxisItemLabels|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartYAxisItemLabels](/api/wrappers/php/Kendo/Dataviz/UI/StockChartYAxisItemLabels)
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $background = 'value';
    $labels->background($background);
    $yAxisItem->labels($labels);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $background = 'value';
    $yAxisItem->labels(array('background' => $background));
    ?>

### line

Configures the axis line. This will also affect the major and minor ticks, but not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartYAxisItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartYAxisItemLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartYAxisItemLine)
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $line = new \Kendo\Dataviz\UI\StockChartYAxisItemLine();
    $color = 'value';
    $line->color($color);
    $yAxisItem->line($line);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $color = 'value';
    $yAxisItem->line(array('color' => $color));
    ?>

### majorGridLines

Configures the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartYAxisItemMajorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartYAxisItemMajorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/StockChartYAxisItemMajorGridLines)
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $majorGridLines = new \Kendo\Dataviz\UI\StockChartYAxisItemMajorGridLines();
    $color = 'value';
    $majorGridLines->color($color);
    $yAxisItem->majorGridLines($majorGridLines);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $color = 'value';
    $yAxisItem->majorGridLines(array('color' => $color));
    ?>

### majorTicks

The major ticks of the axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartYAxisItemMajorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartYAxisItemMajorTicks](/api/wrappers/php/Kendo/Dataviz/UI/StockChartYAxisItemMajorTicks)
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $majorTicks = new \Kendo\Dataviz\UI\StockChartYAxisItemMajorTicks();
    $size = 1;
    $majorTicks->size($size);
    $yAxisItem->majorTicks($majorTicks);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $size = 1;
    $yAxisItem->majorTicks(array('size' => $size));
    ?>

### majorUnit
The interval between major divisions in base units.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $yAxisItem->majorUnit(1);
    ?>

### max
The end date of the axis.
This is often used in combination with the min configuration option.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value ``



### min
The maximum value of the axis.
This is often used in combination with the max configuration option.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value ``



### minorUnit
The interval between minor divisions in base units.
It defaults to 1/5th of the majorUnit.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $yAxisItem->minorUnit(1);
    ?>

### name
The unique axis name.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value ``



### narrowRange
Prevents the automatic axis range from snapping to 0.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $yAxisItem->narrowRange(true);
    ?>

### pane
The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $yAxisItem->pane('value');
    ?>

### addPlotBand

Adds one or more StockChartYAxisItemPlotBand to the StockChartYAxisItem.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\StockChartYAxisItemPlotBand|array`

#### Example - using \Kendo\Dataviz\UI\StockChartYAxisItemPlotBand

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $plotBand = new \Kendo\Dataviz\UI\StockChartYAxisItemPlotBand();
    $color = 'value';
    $plotBand->color($color);
    $yAxisItem->addPlotBand($plotBand);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $color = 'value';
    $yAxisItem->addPlotBand(array('color' => $color));
    ?>

#### Example - adding more than one StockChartYAxisItemPlotBand

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $first  = new \Kendo\Dataviz\UI\StockChartYAxisItemPlotBand();
    $second = new \Kendo\Dataviz\UI\StockChartYAxisItemPlotBand();
    $yAxisItem->addPlotBand($first, $second);
    ?>

### reverse
Reverses the axis direction -
values increase from right to left and from top to bottom.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $yAxisItem->reverse(true);
    ?>

### title

The title of the value axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartYAxisItemTitle|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartYAxisItemTitle](/api/wrappers/php/Kendo/Dataviz/UI/StockChartYAxisItemTitle)
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $title = new \Kendo\Dataviz\UI\StockChartYAxisItemTitle();
    $background = 'value';
    $title->background($background);
    $yAxisItem->title($title);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $background = 'value';
    $yAxisItem->title(array('background' => $background));
    ?>

### type
The axis type.Note: The Chart will automatically switch to a date axis if the series X value
is of type Date. Specify type explicitly when such behavior is undesired.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $yAxisItem->type('value');
    ?>

### visible
The visibility of the axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\StockChartYAxisItem();
    $yAxisItem->visible(true);
    ?>

