---
title: ChartYAxisItem
slug: php-dataviz-ui-chartyaxisitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartYAxisItem

A PHP class representing the yAxisItem setting of ChartYAxis.


## Methods

### axisCrossingValue
Value at which the Y axis crosses this axis. (Only for object)Value indices at which the Y axes cross the value axis. (Only for array)Date at which the Y axis crosses this axis. (Only for date)

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `|date|array`



#### Example  - using 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $yAxisItem->axisCrossingValue(new ());
    ?>

#### Example  - using date
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $yAxisItem->axisCrossingValue(new date());
    ?>

#### Example  - using array
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $yAxisItem->axisCrossingValue(new array());
    ?>

### baseUnit
The base time interval for the axis labels. The default baseUnit is determined automatically from the value range. Available options:

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $yAxisItem->baseUnit('value');
    ?>

### color
The color of the axis. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $yAxisItem->color('value');
    ?>

### crosshair

The crosshair configuration options.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemCrosshair|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemCrosshair](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemCrosshair)
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $crosshair = new \Kendo\Dataviz\UI\ChartYAxisItemCrosshair();
    $color = 'value';
    $crosshair->color($color);
    $yAxisItem->crosshair($crosshair);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $color = 'value';
    $yAxisItem->crosshair(array('color' => $color));
    ?>

### labels

The axis labels configuration.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemLabels|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemLabels](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemLabels)
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $background = 'value';
    $labels->background($background);
    $yAxisItem->labels($labels);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $background = 'value';
    $yAxisItem->labels(array('background' => $background));
    ?>

### line

The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemLine)
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $line = new \Kendo\Dataviz\UI\ChartYAxisItemLine();
    $color = 'value';
    $line->color($color);
    $yAxisItem->line($line);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $color = 'value';
    $yAxisItem->line(array('color' => $color));
    ?>

### majorGridLines

The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemMajorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemMajorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemMajorGridLines)
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $majorGridLines = new \Kendo\Dataviz\UI\ChartYAxisItemMajorGridLines();
    $color = 'value';
    $majorGridLines->color($color);
    $yAxisItem->majorGridLines($majorGridLines);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $color = 'value';
    $yAxisItem->majorGridLines(array('color' => $color));
    ?>

### majorTicks

The configuration of the scatter chart y axis major ticks.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemMajorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemMajorTicks](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemMajorTicks)
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $majorTicks = new \Kendo\Dataviz\UI\ChartYAxisItemMajorTicks();
    $color = 'value';
    $majorTicks->color($color);
    $yAxisItem->majorTicks($majorTicks);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $color = 'value';
    $yAxisItem->majorTicks(array('color' => $color));
    ?>

### majorUnit
The interval between major divisions.
If this is a date axis the value represents the number of xAxis.baseUnits between major divisions.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $yAxisItem->majorUnit(1);
    ?>

### max
The maximum value of the axis.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value ``



### min
The minimum value of the axis.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value ``



### minorGridLines

The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the
body of the chart.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemMinorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemMinorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemMinorGridLines)
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $minorGridLines = new \Kendo\Dataviz\UI\ChartYAxisItemMinorGridLines();
    $color = 'value';
    $minorGridLines->color($color);
    $yAxisItem->minorGridLines($minorGridLines);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $color = 'value';
    $yAxisItem->minorGridLines(array('color' => $color));
    ?>

### minorUnit
The interval between minor divisions. It defaults to 1/5th of the yAxis.majorUnit.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $yAxisItem->minorUnit(1);
    ?>

### name
The unique axis name. Used to associate a series with a y axis using the series.yAxis option.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value ``



### narrowRange
If set to true the chart will prevent the automatic axis range from snapping to 0.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $yAxisItem->narrowRange(true);
    ?>

### notes

The y axis notes configuration.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemNotes|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemNotes](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemNotes)
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $notes = new \Kendo\Dataviz\UI\ChartYAxisItemNotes();
    $position = 'value';
    $notes->position($position);
    $yAxisItem->notes($notes);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $position = 'value';
    $yAxisItem->notes(array('position' => $position));
    ?>

### pane
The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $yAxisItem->pane('value');
    ?>

### addPlotBand

Adds one or more ChartYAxisItemPlotBand to the ChartYAxisItem.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\ChartYAxisItemPlotBand|array`

#### Example - using \Kendo\Dataviz\UI\ChartYAxisItemPlotBand

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $plotBand = new \Kendo\Dataviz\UI\ChartYAxisItemPlotBand();
    $color = 'value';
    $plotBand->color($color);
    $yAxisItem->addPlotBand($plotBand);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $color = 'value';
    $yAxisItem->addPlotBand(array('color' => $color));
    ?>

#### Example - adding more than one ChartYAxisItemPlotBand

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $first  = new \Kendo\Dataviz\UI\ChartYAxisItemPlotBand();
    $second = new \Kendo\Dataviz\UI\ChartYAxisItemPlotBand();
    $yAxisItem->addPlotBand($first, $second);
    ?>

### reverse
If set to true the value axis direction will be reversed. By default values increase from left to right and from bottom to top.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $yAxisItem->reverse(true);
    ?>

### title

The title configuration of the scatter chart y axis.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemTitle|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemTitle](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemTitle)
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $background = 'value';
    $title->background($background);
    $yAxisItem->title($title);
    ?>

#### Example - using array

    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $background = 'value';
    $yAxisItem->title(array('background' => $background));
    ?>

### type
The axis type.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $yAxisItem->type('value');
    ?>

### visible
If set to true the chart will display the y axis. By default the y axis is visible.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $yAxisItem->visible(true);
    ?>

