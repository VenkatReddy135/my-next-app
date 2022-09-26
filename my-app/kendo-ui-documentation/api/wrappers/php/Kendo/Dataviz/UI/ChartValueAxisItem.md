---
title: ChartValueAxisItem
slug: php-dataviz-ui-chartvalueaxisitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItem

A PHP class representing the valueAxisItem setting of ChartValueAxis.


## Methods

### axisCrossingValue
Value at which the category axis crosses this axis. (Only for object)Value indices at which the category axes cross the value axis. (Only for array)Date at which the category axis crosses this axis. (Only for date)

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `|date|array`



#### Example  - using 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $valueAxisItem->axisCrossingValue(new ());
    ?>

#### Example  - using date
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $valueAxisItem->axisCrossingValue(new date());
    ?>

#### Example  - using array
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $valueAxisItem->axisCrossingValue(new array());
    ?>

### color
The color of the value axis. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $valueAxisItem->color('value');
    ?>

### crosshair

The crosshair configuration options.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemCrosshair|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemCrosshair](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemCrosshair)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $crosshair = new \Kendo\Dataviz\UI\ChartValueAxisItemCrosshair();
    $color = 'value';
    $crosshair->color($color);
    $valueAxisItem->crosshair($crosshair);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $color = 'value';
    $valueAxisItem->crosshair(array('color' => $color));
    ?>

### labels

The axis labels configuration.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemLabels|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemLabels](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemLabels)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $background = 'value';
    $labels->background($background);
    $valueAxisItem->labels($labels);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $background = 'value';
    $valueAxisItem->labels(array('background' => $background));
    ?>

### line

The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemLine)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $line = new \Kendo\Dataviz\UI\ChartValueAxisItemLine();
    $color = 'value';
    $line->color($color);
    $valueAxisItem->line($line);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $color = 'value';
    $valueAxisItem->line(array('color' => $color));
    ?>

### majorGridLines

The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemMajorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemMajorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemMajorGridLines)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $majorGridLines = new \Kendo\Dataviz\UI\ChartValueAxisItemMajorGridLines();
    $color = 'value';
    $majorGridLines->color($color);
    $valueAxisItem->majorGridLines($majorGridLines);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $color = 'value';
    $valueAxisItem->majorGridLines(array('color' => $color));
    ?>

### majorTicks

The configuration of the value axis major ticks.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemMajorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemMajorTicks](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemMajorTicks)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $majorTicks = new \Kendo\Dataviz\UI\ChartValueAxisItemMajorTicks();
    $color = 'value';
    $majorTicks->color($color);
    $valueAxisItem->majorTicks($majorTicks);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $color = 'value';
    $valueAxisItem->majorTicks(array('color' => $color));
    ?>

### majorUnit
The interval between major divisions.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $valueAxisItem->majorUnit(1);
    ?>

### max
The maximum value of the axis.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $valueAxisItem->max(1);
    ?>

### min
The minimum value of the axis.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $valueAxisItem->min(1);
    ?>

### minorGridLines

The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the
body of the chart.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemMinorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemMinorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemMinorGridLines)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $minorGridLines = new \Kendo\Dataviz\UI\ChartValueAxisItemMinorGridLines();
    $color = 'value';
    $minorGridLines->color($color);
    $valueAxisItem->minorGridLines($minorGridLines);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $color = 'value';
    $valueAxisItem->minorGridLines(array('color' => $color));
    ?>

### minorTicks

The configuration of the value axis minor ticks.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemMinorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemMinorTicks](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemMinorTicks)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $minorTicks = new \Kendo\Dataviz\UI\ChartValueAxisItemMinorTicks();
    $color = 'value';
    $minorTicks->color($color);
    $valueAxisItem->minorTicks($minorTicks);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $color = 'value';
    $valueAxisItem->minorTicks(array('color' => $color));
    ?>

### minorUnit
The interval between minor divisions. It defaults to 1/5th of the valueAxis.majorUnit.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $valueAxisItem->minorUnit(1);
    ?>

### name
The unique axis name. Used to associate a series with a value axis using the series.axis option.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value ``



### narrowRange
If set to true the chart will prevent the automatic axis range from snapping to 0.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $valueAxisItem->narrowRange(true);
    ?>

### notes

The value axis notes configuration.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemNotes|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemNotes](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemNotes)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $notes = new \Kendo\Dataviz\UI\ChartValueAxisItemNotes();
    $position = 'value';
    $notes->position($position);
    $valueAxisItem->notes($notes);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $position = 'value';
    $valueAxisItem->notes(array('position' => $position));
    ?>

### pane
The name of the pane that the value axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $valueAxisItem->pane('value');
    ?>

### addPlotBand

Adds one or more ChartValueAxisItemPlotBand to the ChartValueAxisItem.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\ChartValueAxisItemPlotBand|array`

#### Example - using \Kendo\Dataviz\UI\ChartValueAxisItemPlotBand

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $plotBand = new \Kendo\Dataviz\UI\ChartValueAxisItemPlotBand();
    $color = 'value';
    $plotBand->color($color);
    $valueAxisItem->addPlotBand($plotBand);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $color = 'value';
    $valueAxisItem->addPlotBand(array('color' => $color));
    ?>

#### Example - adding more than one ChartValueAxisItemPlotBand

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $first  = new \Kendo\Dataviz\UI\ChartValueAxisItemPlotBand();
    $second = new \Kendo\Dataviz\UI\ChartValueAxisItemPlotBand();
    $valueAxisItem->addPlotBand($first, $second);
    ?>

### reverse
If set to true the value axis direction will be reversed. By default categories are listed from left to right and from bottom to top.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $valueAxisItem->reverse(true);
    ?>

### title

The title configuration of the value axis.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemTitle|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemTitle](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemTitle)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $background = 'value';
    $title->background($background);
    $valueAxisItem->title($title);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $background = 'value';
    $valueAxisItem->title(array('background' => $background));
    ?>

### visible
If set to true the chart will display the value axis. By default the value axis is visible.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $valueAxisItem->visible(true);
    ?>

