---
title: ChartXAxisItem
slug: php-dataviz-ui-chartxaxisitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItem

A PHP class representing the xAxisItem setting of ChartXAxis.


## Methods

### axisCrossingValue
Value at which the Y axis crosses this axis. (Only for object)Value indices at which the Y axes cross the value axis. (Only for array)Date at which the Y axis crosses this axis. (Only for date)

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `|date|array`



#### Example  - using 
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $xAxisItem->axisCrossingValue(new ());
    ?>

#### Example  - using date
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $xAxisItem->axisCrossingValue(new date());
    ?>

#### Example  - using array
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $xAxisItem->axisCrossingValue(new array());
    ?>

### baseUnit
The base time interval for the axis labels. The default baseUnit is determined automatically from the value range. Available options:

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $xAxisItem->baseUnit('value');
    ?>

### color
The color of the axis. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $xAxisItem->color('value');
    ?>

### crosshair

The crosshair configuration options.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemCrosshair|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemCrosshair](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemCrosshair)
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $crosshair = new \Kendo\Dataviz\UI\ChartXAxisItemCrosshair();
    $color = 'value';
    $crosshair->color($color);
    $xAxisItem->crosshair($crosshair);
    ?>

#### Example - using array

    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $color = 'value';
    $xAxisItem->crosshair(array('color' => $color));
    ?>

### labels

The axis labels configuration.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemLabels|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemLabels](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemLabels)
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $background = 'value';
    $labels->background($background);
    $xAxisItem->labels($labels);
    ?>

#### Example - using array

    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $background = 'value';
    $xAxisItem->labels(array('background' => $background));
    ?>

### line

The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemLine)
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $line = new \Kendo\Dataviz\UI\ChartXAxisItemLine();
    $color = 'value';
    $line->color($color);
    $xAxisItem->line($line);
    ?>

#### Example - using array

    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $color = 'value';
    $xAxisItem->line(array('color' => $color));
    ?>

### majorGridLines

The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemMajorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemMajorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemMajorGridLines)
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $majorGridLines = new \Kendo\Dataviz\UI\ChartXAxisItemMajorGridLines();
    $color = 'value';
    $majorGridLines->color($color);
    $xAxisItem->majorGridLines($majorGridLines);
    ?>

#### Example - using array

    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $color = 'value';
    $xAxisItem->majorGridLines(array('color' => $color));
    ?>

### majorTicks

The configuration of the scatter chart x axis major ticks.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemMajorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemMajorTicks](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemMajorTicks)
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $majorTicks = new \Kendo\Dataviz\UI\ChartXAxisItemMajorTicks();
    $color = 'value';
    $majorTicks->color($color);
    $xAxisItem->majorTicks($majorTicks);
    ?>

#### Example - using array

    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $color = 'value';
    $xAxisItem->majorTicks(array('color' => $color));
    ?>

### majorUnit
The interval between major divisions.
If this is a date axis the value represents the number of xAxis.baseUnits between major divisions.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $xAxisItem->majorUnit(1);
    ?>

### max
The maximum value of the axis.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value ``



### min
The minimum value of the axis.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value ``



### minorGridLines

The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the
body of the chart.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemMinorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemMinorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemMinorGridLines)
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $minorGridLines = new \Kendo\Dataviz\UI\ChartXAxisItemMinorGridLines();
    $color = 'value';
    $minorGridLines->color($color);
    $xAxisItem->minorGridLines($minorGridLines);
    ?>

#### Example - using array

    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $color = 'value';
    $xAxisItem->minorGridLines(array('color' => $color));
    ?>

### minorUnit
The interval between minor divisions. It defaults to 1/5th of the xAxis.majorUnit.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $xAxisItem->minorUnit(1);
    ?>

### name
The unique axis name. Used to associate a series with a x axis using the series.xAxis option.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value ``



### narrowRange
If set to true the chart will prevent the automatic axis range from snapping to 0.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $xAxisItem->narrowRange(true);
    ?>

### notes

The x axis notes configuration.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemNotes|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemNotes](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemNotes)
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $notes = new \Kendo\Dataviz\UI\ChartXAxisItemNotes();
    $position = 'value';
    $notes->position($position);
    $xAxisItem->notes($notes);
    ?>

#### Example - using array

    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $position = 'value';
    $xAxisItem->notes(array('position' => $position));
    ?>

### pane
The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $xAxisItem->pane('value');
    ?>

### addPlotBand

Adds one or more ChartXAxisItemPlotBand to the ChartXAxisItem.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\ChartXAxisItemPlotBand|array`

#### Example - using \Kendo\Dataviz\UI\ChartXAxisItemPlotBand

    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $plotBand = new \Kendo\Dataviz\UI\ChartXAxisItemPlotBand();
    $color = 'value';
    $plotBand->color($color);
    $xAxisItem->addPlotBand($plotBand);
    ?>

#### Example - using array

    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $color = 'value';
    $xAxisItem->addPlotBand(array('color' => $color));
    ?>

#### Example - adding more than one ChartXAxisItemPlotBand

    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $first  = new \Kendo\Dataviz\UI\ChartXAxisItemPlotBand();
    $second = new \Kendo\Dataviz\UI\ChartXAxisItemPlotBand();
    $xAxisItem->addPlotBand($first, $second);
    ?>

### reverse
If set to true the value axis direction will be reversed. By default values increase from left to right and from bottom to top.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $xAxisItem->reverse(true);
    ?>

### startAngle
The angle (degrees) where the 0 value is placed.Angles increase counterclockwise and zero is to the right. Negative values are acceptable.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $xAxisItem->startAngle(1);
    ?>

### title

The title configuration of the scatter chart x axis.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemTitle|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemTitle](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemTitle)
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $background = 'value';
    $title->background($background);
    $xAxisItem->title($title);
    ?>

#### Example - using array

    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $background = 'value';
    $xAxisItem->title(array('background' => $background));
    ?>

### type
The axis type.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $xAxisItem->type('value');
    ?>

### visible
If set to true the chart will display the x axis. By default the x axis is visible.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $xAxisItem->visible(true);
    ?>

