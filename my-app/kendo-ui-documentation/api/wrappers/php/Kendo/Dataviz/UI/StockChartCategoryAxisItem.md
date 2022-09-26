---
title: StockChartCategoryAxisItem
slug: php-dataviz-ui-stockchartcategoryaxisitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartCategoryAxisItem

A PHP class representing the categoryAxisItem setting of StockChartCategoryAxis.


## Methods

### autoBaseUnitSteps

The discrete categoryAxis.baseUnitStep values when
either categoryAxis.baseUnit is set to "fit" or
categoryAxis.baseUnitStep is set to "auto".

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemAutoBaseUnitSteps|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemAutoBaseUnitSteps](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemAutoBaseUnitSteps)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $autoBaseUnitSteps = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemAutoBaseUnitSteps();
    $days = new array();
    $autoBaseUnitSteps->days($days);
    $categoryAxisItem->autoBaseUnitSteps($autoBaseUnitSteps);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $days = new array();
    $categoryAxisItem->autoBaseUnitSteps(array('days' => $days));
    ?>

### axisCrossingValue
Category index at which the first value axis crosses this axis. (Only for object)Category indicies at which the value axes cross the category axis. (Only for array)Note: Specify an index greater than or equal to the number
of categories to denote the far end of the axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `|date|array`



#### Example  - using 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->axisCrossingValue(new ());
    ?>

#### Example  - using date
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->axisCrossingValue(new date());
    ?>

#### Example  - using array
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->axisCrossingValue(new array());
    ?>

### baseUnit
The base time interval for the date axis. The default base unit is determined automatically from the minimum difference
between subsequent categories.The supported values are:Setting baseUnit to "fit" will set such base unit and categoryAxis.baseUnitStep
that the total number of categories does not exceed categoryAxis.maxDateGroups.Series data is aggregated for the specified base unit using the series.aggregate function.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->baseUnit('value');
    ?>

### baseUnitStep
The step (interval) between categories in base units. Setting it to "auto" will set the step to such value
that the total number of categories does not exceed categoryAxis.maxDateGroups.This option is ignored if categoryAxis.baseUnit is set to "fit".

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value ``



### categories
Array of category names.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->categories(new array());
    ?>

### color
Color to apply to all axis elements. Any valid CSS color string will work here, including hex and rgb.
Individual color settings for line and labels take priority.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->color('value');
    ?>

### crosshair

The crosshair configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemCrosshair)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $crosshair = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemCrosshair();
    $color = 'value';
    $crosshair->color($color);
    $categoryAxisItem->crosshair($crosshair);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->crosshair(array('color' => $color));
    ?>

### field
The data field containing the category name.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->field('value');
    ?>

### justified
Positions categories and series points on major ticks. This removes the empty space before and after the series.This option is ignored if either column, ohlc or candlestick series are plotted on the axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->justified(true);
    ?>

### labels

Configures the axis labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemLabels)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $background = 'value';
    $labels->background($background);
    $categoryAxisItem->labels($labels);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $background = 'value';
    $categoryAxisItem->labels(array('background' => $background));
    ?>

### line

Configures the axis line. This will also effect major and minor ticks, but not gridlines.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemLine)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $line = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLine();
    $color = 'value';
    $line->color($color);
    $categoryAxisItem->line($line);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->line(array('color' => $color));
    ?>

### majorGridLines

Configures the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemMajorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemMajorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemMajorGridLines)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $majorGridLines = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemMajorGridLines();
    $color = 'value';
    $majorGridLines->color($color);
    $categoryAxisItem->majorGridLines($majorGridLines);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->majorGridLines(array('color' => $color));
    ?>

### majorTicks

The major ticks of the axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemMajorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemMajorTicks](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemMajorTicks)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $majorTicks = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemMajorTicks();
    $size = 1;
    $majorTicks->size($size);
    $categoryAxisItem->majorTicks($majorTicks);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $size = 1;
    $categoryAxisItem->majorTicks(array('size' => $size));
    ?>

### max
The last date displayed on the axis.
By default, the minimum date is the same as the last category.
This is often used in combination with the min and roundToBaseUnit configuration options to
set up a fixed date range.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value ``



### maxDateGroups
Specifies the maximum number of groups (categories) to produce when
either baseUnit is set to "fit" or baseUnitStep is set to "auto".This option is ignored in all other cases.The default value is approximately equal to [widget width, px] / 30

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->maxDateGroups(1);
    ?>

### min
The first date displayed on the axis.
By default, the minimum date is the same as the first category.
This is often used in combination with the max and roundToBaseUnit configuration options to
set up a fixed date range.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value ``



### minorGridLines

Configures the minor grid lines.  These are the lines that are an extension of the minor ticks through
the body of the chart.Note that minor grid lines are not visible by default, therefore none of these settings will take effect with the minor grid lines visibility being set to true.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemMinorGridLines)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $minorGridLines = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorGridLines();
    $color = 'value';
    $minorGridLines->color($color);
    $categoryAxisItem->minorGridLines($minorGridLines);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->minorGridLines(array('color' => $color));
    ?>

### minorTicks

The minor ticks of the axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorTicks](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemMinorTicks)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $minorTicks = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemMinorTicks();
    $size = 1;
    $minorTicks->size($size);
    $categoryAxisItem->minorTicks($minorTicks);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $size = 1;
    $categoryAxisItem->minorTicks(array('size' => $size));
    ?>

### name
The unique axis name.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->name('value');
    ?>

### notes

The category axis notes configuration.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemNotes)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $notes = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes();
    $position = 'value';
    $notes->position($position);
    $categoryAxisItem->notes($notes);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $position = 'value';
    $categoryAxisItem->notes(array('position' => $position));
    ?>

### pane
The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->pane('value');
    ?>

### addPlotBand

Adds one or more StockChartCategoryAxisItemPlotBand to the StockChartCategoryAxisItem.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\StockChartCategoryAxisItemPlotBand|array`

#### Example - using \Kendo\Dataviz\UI\StockChartCategoryAxisItemPlotBand

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $plotBand = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemPlotBand();
    $color = 'value';
    $plotBand->color($color);
    $categoryAxisItem->addPlotBand($plotBand);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->addPlotBand(array('color' => $color));
    ?>

#### Example - adding more than one StockChartCategoryAxisItemPlotBand

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $first  = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemPlotBand();
    $second = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemPlotBand();
    $categoryAxisItem->addPlotBand($first, $second);
    ?>

### reverse
Reverses the axis direction -
categories are listed from right to left and from top to bottom.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->reverse(true);
    ?>

### roundToBaseUnit
By default, the first and last dates will be rounded off to the nearest base unit.
Specifying false for this option will disable this behavior.This option is most useful in combination with explicit min and max dates.It will be ignored if either column, ohlc or candlestick series are plotted on the axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->roundToBaseUnit(true);
    ?>

### select

The selected axis range. If configured, axis selection will be enabled.** Available only for vertical axes **The range units are:

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemSelect|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemSelect](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemSelect)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $select = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemSelect();
    $from = new ();
    $select->from($from);
    $categoryAxisItem->select($select);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $from = new ();
    $categoryAxisItem->select(array('from' => $from));
    ?>

### title

The title of the category axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemTitle)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $title = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle();
    $background = 'value';
    $title->background($background);
    $categoryAxisItem->title($title);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $background = 'value';
    $categoryAxisItem->title(array('background' => $background));
    ?>

### type
The axis type.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->type('value');
    ?>

### visible
The visibility of the axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->visible(true);
    ?>

### weekStartDay
Specifies the week start day when baseUnit is set to "weeks".
Use the kendo.days constants to specify the day by name.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $categoryAxisItem->weekStartDay(1);
    ?>

