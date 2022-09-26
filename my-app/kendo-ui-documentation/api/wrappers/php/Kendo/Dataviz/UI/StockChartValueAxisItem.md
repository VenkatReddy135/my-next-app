---
title: StockChartValueAxisItem
slug: php-dataviz-ui-stockchartvalueaxisitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartValueAxisItem

A PHP class representing the valueAxisItem setting of StockChartValueAxis.


## Methods

### axisCrossingValue
Value at which the category axis crosses this axis. (Only for object)Value indicies at which the category axes cross the value axis. (Only for array)Date at which the category axis crosses this axis. (Only for date)

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `|date|array`



#### Example  - using 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $valueAxisItem->axisCrossingValue(new ());
    ?>

#### Example  - using date
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $valueAxisItem->axisCrossingValue(new date());
    ?>

#### Example  - using array
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $valueAxisItem->axisCrossingValue(new array());
    ?>

### color
Color to apply to all axis elements.
Individual color settings for line and labels take priority. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $valueAxisItem->color('value');
    ?>

### crosshair

The crosshair configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemCrosshair)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $crosshair = new \Kendo\Dataviz\UI\StockChartValueAxisItemCrosshair();
    $color = 'value';
    $crosshair->color($color);
    $valueAxisItem->crosshair($crosshair);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $color = 'value';
    $valueAxisItem->crosshair(array('color' => $color));
    ?>

### labels

Configures the axis labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemLabels|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemLabels](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemLabels)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $labels = new \Kendo\Dataviz\UI\StockChartValueAxisItemLabels();
    $background = 'value';
    $labels->background($background);
    $valueAxisItem->labels($labels);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $background = 'value';
    $valueAxisItem->labels(array('background' => $background));
    ?>

### line

Configures the axis line. This will also affect the major and minor ticks, but not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemLine)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $line = new \Kendo\Dataviz\UI\StockChartValueAxisItemLine();
    $color = 'value';
    $line->color($color);
    $valueAxisItem->line($line);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $color = 'value';
    $valueAxisItem->line(array('color' => $color));
    ?>

### majorGridLines

Configures the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemMajorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemMajorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemMajorGridLines)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $majorGridLines = new \Kendo\Dataviz\UI\StockChartValueAxisItemMajorGridLines();
    $color = 'value';
    $majorGridLines->color($color);
    $valueAxisItem->majorGridLines($majorGridLines);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $color = 'value';
    $valueAxisItem->majorGridLines(array('color' => $color));
    ?>

### majorTicks

The major ticks of the axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemMajorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemMajorTicks](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemMajorTicks)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $majorTicks = new \Kendo\Dataviz\UI\StockChartValueAxisItemMajorTicks();
    $size = 1;
    $majorTicks->size($size);
    $valueAxisItem->majorTicks($majorTicks);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $size = 1;
    $valueAxisItem->majorTicks(array('size' => $size));
    ?>

### majorUnit
The interval between major divisions.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $valueAxisItem->majorUnit(1);
    ?>

### max
The maximum value of the axis.
This is often used in combination with the min configuration option.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $valueAxisItem->max(1);
    ?>

### min
The minimum value of the axis.
This is often used in combination with the max configuration option.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $valueAxisItem->min(1);
    ?>

### minorGridLines

Configures the minor grid lines.  These are the lines that are an extension of the minor ticks through the

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemMinorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemMinorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemMinorGridLines)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $minorGridLines = new \Kendo\Dataviz\UI\StockChartValueAxisItemMinorGridLines();
    $color = 'value';
    $minorGridLines->color($color);
    $valueAxisItem->minorGridLines($minorGridLines);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $color = 'value';
    $valueAxisItem->minorGridLines(array('color' => $color));
    ?>

### minorTicks

The minor ticks of the axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemMinorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemMinorTicks](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemMinorTicks)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $minorTicks = new \Kendo\Dataviz\UI\StockChartValueAxisItemMinorTicks();
    $size = 1;
    $minorTicks->size($size);
    $valueAxisItem->minorTicks($minorTicks);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $size = 1;
    $valueAxisItem->minorTicks(array('size' => $size));
    ?>

### minorUnit
The interval between minor divisions.
It defaults to 1/5th of the majorUnit.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $valueAxisItem->minorUnit(1);
    ?>

### name
The unique axis name.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value ``



### narrowRange
Prevents the automatic axis range from snapping to 0.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $valueAxisItem->narrowRange(true);
    ?>

### notes

The value axis notes configuration.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemNotes|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemNotes](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemNotes)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $notes = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotes();
    $position = 'value';
    $notes->position($position);
    $valueAxisItem->notes($notes);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $position = 'value';
    $valueAxisItem->notes(array('position' => $position));
    ?>

### pane
The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $valueAxisItem->pane('value');
    ?>

### addPlotBand

Adds one or more StockChartValueAxisItemPlotBand to the StockChartValueAxisItem.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\StockChartValueAxisItemPlotBand|array`

#### Example - using \Kendo\Dataviz\UI\StockChartValueAxisItemPlotBand

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $plotBand = new \Kendo\Dataviz\UI\StockChartValueAxisItemPlotBand();
    $color = 'value';
    $plotBand->color($color);
    $valueAxisItem->addPlotBand($plotBand);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $color = 'value';
    $valueAxisItem->addPlotBand(array('color' => $color));
    ?>

#### Example - adding more than one StockChartValueAxisItemPlotBand

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $first  = new \Kendo\Dataviz\UI\StockChartValueAxisItemPlotBand();
    $second = new \Kendo\Dataviz\UI\StockChartValueAxisItemPlotBand();
    $valueAxisItem->addPlotBand($first, $second);
    ?>

### reverse
Reverses the axis direction -
values increase from right to left and from top to bottom.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $valueAxisItem->reverse(true);
    ?>

### title

The title of the value axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemTitle|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemTitle](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemTitle)
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $title = new \Kendo\Dataviz\UI\StockChartValueAxisItemTitle();
    $background = 'value';
    $title->background($background);
    $valueAxisItem->title($title);
    ?>

#### Example - using array

    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $background = 'value';
    $valueAxisItem->title(array('background' => $background));
    ?>

### visible
The visibility of the axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $valueAxisItem->visible(true);
    ?>

