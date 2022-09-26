---
title: ChartCategoryAxisItem
slug: php-dataviz-ui-chartcategoryaxisitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItem

A PHP class representing the categoryAxisItem setting of ChartCategoryAxis.


## Methods

### autoBaseUnitSteps

The discrete categoryAxis.baseUnitStep values when
either categoryAxis.baseUnit is set to "fit" or
categoryAxis.baseUnitStep is set to "auto".

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemAutoBaseUnitSteps|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemAutoBaseUnitSteps](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemAutoBaseUnitSteps)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $autoBaseUnitSteps = new \Kendo\Dataviz\UI\ChartCategoryAxisItemAutoBaseUnitSteps();
    $days = new array();
    $autoBaseUnitSteps->days($days);
    $categoryAxisItem->autoBaseUnitSteps($autoBaseUnitSteps);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $days = new array();
    $categoryAxisItem->autoBaseUnitSteps(array('days' => $days));
    ?>

### axisCrossingValue
Category index at which the first value axis crosses this axis (when set as an object).Category indices at which the value axes cross the category axis (when set as an array).

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `|date|array`



#### Example  - using 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->axisCrossingValue(new ());
    ?>

#### Example  - using date
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->axisCrossingValue(new date());
    ?>

#### Example  - using array
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->axisCrossingValue(new array());
    ?>

### baseUnit
The base time interval for the date axis. The default base unit is determined automatically from the minimum difference
between subsequent categories.The supported values are:Setting baseUnit to "fit" will set such base unit and categoryAxis.baseUnitStep
that the total number of categories does not exceed categoryAxis.maxDateGroups.Series data is aggregated for the specified base unit using the series.aggregate function.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->baseUnit('value');
    ?>

### baseUnitStep
The step (interval) between categories in base units. Setting it to "auto" will set the step to such value
that the total number of categories does not exceed categoryAxis.maxDateGroups.This option is ignored if categoryAxis.baseUnit is set to "fit".

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value ``



### categories
The category names. The chart will create a category for every item of the array.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->categories(new array());
    ?>

### color
The color to apply to all axis elements. Accepts a valid CSS color string, including hex and rgb. Can be overridden by categoryAxis.labels.color and
categoryAxis.line.color.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->color('value');
    ?>

### crosshair

The crosshair configuration options.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemCrosshair)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $crosshair = new \Kendo\Dataviz\UI\ChartCategoryAxisItemCrosshair();
    $color = 'value';
    $crosshair->color($color);
    $categoryAxisItem->crosshair($crosshair);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->crosshair(array('color' => $color));
    ?>

### field
The data item field which contains the category name. Requires the dataSource option to be set.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->field('value');
    ?>

### justified
If set to true the chart will position categories and series points on major ticks. This removes the empty space before and after the series.The default value is false except for "area" and "verticalArea".

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->justified(true);
    ?>

### labels

The axis labels configuration.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemLabels)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $background = 'value';
    $labels->background($background);
    $categoryAxisItem->labels($labels);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $background = 'value';
    $categoryAxisItem->labels(array('background' => $background));
    ?>

### line

The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemLine)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $line = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLine();
    $color = 'value';
    $line->color($color);
    $categoryAxisItem->line($line);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->line(array('color' => $color));
    ?>

### majorGridLines

The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemMajorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemMajorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemMajorGridLines)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $majorGridLines = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMajorGridLines();
    $color = 'value';
    $majorGridLines->color($color);
    $categoryAxisItem->majorGridLines($majorGridLines);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->majorGridLines(array('color' => $color));
    ?>

### majorTicks

The configuration of the category axis major ticks.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemMajorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemMajorTicks](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemMajorTicks)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $majorTicks = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMajorTicks();
    $color = 'value';
    $majorTicks->color($color);
    $categoryAxisItem->majorTicks($majorTicks);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->majorTicks(array('color' => $color));
    ?>

### max
The last date displayed on the category date axis. By default, the minimum date is the same as the last category.
This is often used in combination with the categoryAxis.min and categoryAxis.roundToBaseUnit options to
set up a fixed date range.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value ``



### maxDateGroups
The maximum number of groups (categories) to display when
categoryAxis.baseUnit is set to "fit" or
categoryAxis.baseUnitStep is set to "auto".

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->maxDateGroups(1);
    ?>

### min
The first date displayed on the category date axis. By default, the minimum date is the same as the first category.
This is often used in combination with the categoryAxis.min and categoryAxis.roundToBaseUnit options to
set up a fixed date range.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value ``



### minorGridLines

The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the
body of the chart.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemMinorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemMinorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemMinorGridLines)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $minorGridLines = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMinorGridLines();
    $color = 'value';
    $minorGridLines->color($color);
    $categoryAxisItem->minorGridLines($minorGridLines);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->minorGridLines(array('color' => $color));
    ?>

### minorTicks

The configuration of the category axis minor ticks.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemMinorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemMinorTicks](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemMinorTicks)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $minorTicks = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMinorTicks();
    $color = 'value';
    $minorTicks->color($color);
    $categoryAxisItem->minorTicks($minorTicks);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->minorTicks(array('color' => $color));
    ?>

### name
The unique axis name. Used to associate a series with a category axis using the series.categoryAxis option.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->name('value');
    ?>

### notes

The category axis notes configuration.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemNotes|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemNotes](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemNotes)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $notes = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotes();
    $position = 'value';
    $notes->position($position);
    $categoryAxisItem->notes($notes);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $position = 'value';
    $categoryAxisItem->notes(array('position' => $position));
    ?>

### pane
The name of the pane that the category axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->pane('value');
    ?>

### addPlotBand

Adds one or more ChartCategoryAxisItemPlotBand to the ChartCategoryAxisItem.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\ChartCategoryAxisItemPlotBand|array`

#### Example - using \Kendo\Dataviz\UI\ChartCategoryAxisItemPlotBand

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $plotBand = new \Kendo\Dataviz\UI\ChartCategoryAxisItemPlotBand();
    $color = 'value';
    $plotBand->color($color);
    $categoryAxisItem->addPlotBand($plotBand);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->addPlotBand(array('color' => $color));
    ?>

#### Example - adding more than one ChartCategoryAxisItemPlotBand

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $first  = new \Kendo\Dataviz\UI\ChartCategoryAxisItemPlotBand();
    $second = new \Kendo\Dataviz\UI\ChartCategoryAxisItemPlotBand();
    $categoryAxisItem->addPlotBand($first, $second);
    ?>

### reverse
If set to true the category axis direction will be reversed. By default categories are listed from left to right and from bottom to top.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->reverse(true);
    ?>

### roundToBaseUnit
If set to true the chart will round the first and last date to the nearest base unit.The roundToBaseUnit option will be ignored if series.type is set to "bar", "column", "ohlc" or "candlestick".

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->roundToBaseUnit(true);
    ?>

### select

The selected axis range. If set, axis selection will be enabled.The range units are:

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemSelect|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemSelect](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemSelect)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $select = new \Kendo\Dataviz\UI\ChartCategoryAxisItemSelect();
    $from = new ();
    $select->from($from);
    $categoryAxisItem->select($select);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $from = new ();
    $categoryAxisItem->select(array('from' => $from));
    ?>

### startAngle
The angle (degrees) of the first category on the axis.Angles increase clockwise and zero is to the left. Negative values are acceptable.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->startAngle(1);
    ?>

### title

The title configuration of the category axis.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemTitle|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemTitle](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemTitle)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $background = 'value';
    $title->background($background);
    $categoryAxisItem->title($title);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $background = 'value';
    $categoryAxisItem->title(array('background' => $background));
    ?>

### type
The category axis type.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->type('value');
    ?>

### visible
If set to true the chart will display the category axis. By default the category axis is visible.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->visible(true);
    ?>

### weekStartDay
The week start day when categoryAxis.baseUnit is set to "weeks".The supported values are:

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $categoryAxisItem->weekStartDay(1);
    ?>

