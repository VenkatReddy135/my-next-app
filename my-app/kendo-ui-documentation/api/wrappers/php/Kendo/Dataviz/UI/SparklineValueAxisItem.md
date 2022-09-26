---
title: SparklineValueAxisItem
slug: php-dataviz-ui-sparklinevalueaxisitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineValueAxisItem

A PHP class representing the valueAxisItem setting of SparklineValueAxis.


## Methods

### axisCrossingValue
Value at which the category axis crosses this axis. (Only for object)Value indicies at which the category axes cross the value axis. (Only for array)Date at which the category axis crosses this axis. (Only for date)

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `|date|array`



#### Example  - using 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $valueAxisItem->axisCrossingValue(new ());
    ?>

#### Example  - using date
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $valueAxisItem->axisCrossingValue(new date());
    ?>

#### Example  - using array
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $valueAxisItem->axisCrossingValue(new array());
    ?>

### color
Color to apply to all axis elements.
Individual color settings for line and labels take priority. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $valueAxisItem->color('value');
    ?>

### crosshair

The crosshair configuration options.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemCrosshair)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $crosshair = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshair();
    $color = 'value';
    $crosshair->color($color);
    $valueAxisItem->crosshair($crosshair);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $color = 'value';
    $valueAxisItem->crosshair(array('color' => $color));
    ?>

### labels

Configures the axis labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemLabels|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemLabels](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemLabels)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $background = 'value';
    $labels->background($background);
    $valueAxisItem->labels($labels);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $background = 'value';
    $valueAxisItem->labels(array('background' => $background));
    ?>

### line

Configures the axis line. This will also affect the major and minor ticks, but not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemLine](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemLine)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $line = new \Kendo\Dataviz\UI\SparklineValueAxisItemLine();
    $color = 'value';
    $line->color($color);
    $valueAxisItem->line($line);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $color = 'value';
    $valueAxisItem->line(array('color' => $color));
    ?>

### majorGridLines

Configures the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemMajorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemMajorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemMajorGridLines)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $majorGridLines = new \Kendo\Dataviz\UI\SparklineValueAxisItemMajorGridLines();
    $color = 'value';
    $majorGridLines->color($color);
    $valueAxisItem->majorGridLines($majorGridLines);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $color = 'value';
    $valueAxisItem->majorGridLines(array('color' => $color));
    ?>

### majorTicks

The major ticks of the axis.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemMajorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemMajorTicks](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemMajorTicks)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $majorTicks = new \Kendo\Dataviz\UI\SparklineValueAxisItemMajorTicks();
    $size = 1;
    $majorTicks->size($size);
    $valueAxisItem->majorTicks($majorTicks);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $size = 1;
    $valueAxisItem->majorTicks(array('size' => $size));
    ?>

### majorUnit
The interval between major divisions.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $valueAxisItem->majorUnit(1);
    ?>

### max
The maximum value of the axis.
This is often used in combination with the min configuration option.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $valueAxisItem->max(1);
    ?>

### min
The minimum value of the axis.
This is often used in combination with the max configuration option.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $valueAxisItem->min(1);
    ?>

### minorGridLines

Configures the minor grid lines.  These are the lines that are an extension of the minor ticks through the

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemMinorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemMinorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemMinorGridLines)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $minorGridLines = new \Kendo\Dataviz\UI\SparklineValueAxisItemMinorGridLines();
    $color = 'value';
    $minorGridLines->color($color);
    $valueAxisItem->minorGridLines($minorGridLines);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $color = 'value';
    $valueAxisItem->minorGridLines(array('color' => $color));
    ?>

### minorTicks

The minor ticks of the axis.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemMinorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemMinorTicks](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemMinorTicks)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $minorTicks = new \Kendo\Dataviz\UI\SparklineValueAxisItemMinorTicks();
    $size = 1;
    $minorTicks->size($size);
    $valueAxisItem->minorTicks($minorTicks);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $size = 1;
    $valueAxisItem->minorTicks(array('size' => $size));
    ?>

### minorUnit
The interval between minor divisions.
It defaults to 1/5th of the majorUnit.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $valueAxisItem->minorUnit(1);
    ?>

### name
The unique axis name.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value ``



### narrowRange
Prevents the automatic axis range from snapping to 0.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $valueAxisItem->narrowRange(true);
    ?>

### notes

The value axis notes configuration.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemNotes|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemNotes](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemNotes)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $notes = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotes();
    $position = 'value';
    $notes->position($position);
    $valueAxisItem->notes($notes);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $position = 'value';
    $valueAxisItem->notes(array('position' => $position));
    ?>

### addPlotBand

Adds one or more SparklineValueAxisItemPlotBand to the SparklineValueAxisItem.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\SparklineValueAxisItemPlotBand|array`

#### Example - using \Kendo\Dataviz\UI\SparklineValueAxisItemPlotBand

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $plotBand = new \Kendo\Dataviz\UI\SparklineValueAxisItemPlotBand();
    $color = 'value';
    $plotBand->color($color);
    $valueAxisItem->addPlotBand($plotBand);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $color = 'value';
    $valueAxisItem->addPlotBand(array('color' => $color));
    ?>

#### Example - adding more than one SparklineValueAxisItemPlotBand

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $first  = new \Kendo\Dataviz\UI\SparklineValueAxisItemPlotBand();
    $second = new \Kendo\Dataviz\UI\SparklineValueAxisItemPlotBand();
    $valueAxisItem->addPlotBand($first, $second);
    ?>

### reverse
Reverses the axis direction -
values increase from right to left and from top to bottom.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $valueAxisItem->reverse(true);
    ?>

### title

The title of the value axis.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemTitle|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemTitle](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemTitle)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $title = new \Kendo\Dataviz\UI\SparklineValueAxisItemTitle();
    $background = 'value';
    $title->background($background);
    $valueAxisItem->title($title);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $background = 'value';
    $valueAxisItem->title(array('background' => $background));
    ?>

### visible
The visibility of the axis.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $valueAxisItem->visible(true);
    ?>

