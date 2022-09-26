---
title: StockChartNavigatorCategoryAxisItem
slug: php-dataviz-ui-stockchartnavigatorcategoryaxisitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem

A PHP class representing the categoryAxisItem setting of StockChartNavigatorCategoryAxis.


## Methods

### autoBaseUnitSteps

The discrete navigator.categoryAxis.baseUnitStep values when
either navigator.categoryAxis.baseUnit is set to "fit" or
navigator.categoryAxis.baseUnitStep is set to "auto".

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemAutoBaseUnitSteps|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemAutoBaseUnitSteps](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemAutoBaseUnitSteps)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $autoBaseUnitSteps = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemAutoBaseUnitSteps();
    $days = new array();
    $autoBaseUnitSteps->days($days);
    $categoryAxisItem->autoBaseUnitSteps($autoBaseUnitSteps);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $days = new array();
    $categoryAxisItem->autoBaseUnitSteps(array('days' => $days));
    ?>

### axisCrossingValue
Category index at which the first value axis crosses this axis (when set as an object).Category indices at which the value axes cross the category axis (when set as an array).

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `|date|array`



#### Example  - using 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $categoryAxisItem->axisCrossingValue(new ());
    ?>

#### Example  - using date
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $categoryAxisItem->axisCrossingValue(new date());
    ?>

#### Example  - using array
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $categoryAxisItem->axisCrossingValue(new array());
    ?>

### baseUnit
The base time interval for the date axis. The default base unit is determined automatically from the minimum difference
between subsequent categories.The supported values are:Setting baseUnit to "fit" will set such base unit and categoryAxis.baseUnitStep
that the total number of categories does not exceed categoryAxis.maxDateGroups.Series data is aggregated for the specified base unit using the series.aggregate function.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $categoryAxisItem->baseUnit('value');
    ?>

### baseUnitStep
The step (interval) between categories in base units. Setting it to "auto" will set the step to such value
that the total number of categories does not exceed categoryAxis.maxDateGroups.This option is ignored if categoryAxis.baseUnit is set to "fit".

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value ``



### categories
The category names. The chart will create a category for every item of the array.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $categoryAxisItem->categories(new array());
    ?>

### color
The color to apply to all axis elements. Accepts a valid CSS color string, including hex and rgb. Can be overridden by categoryAxis.labels.color and
categoryAxis.line.color.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $categoryAxisItem->color('value');
    ?>

### crosshair

The crosshair configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemCrosshair)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $crosshair = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemCrosshair();
    $color = 'value';
    $crosshair->color($color);
    $categoryAxisItem->crosshair($crosshair);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->crosshair(array('color' => $color));
    ?>

### field
The data item field which contains the category name. Requires the dataSource option to be set.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $categoryAxisItem->field('value');
    ?>

### justified
If set to true the chart will position categories and series points on major ticks. This removes the empty space before and after the series.The default value is false except for "area", "verticalArea", "stepArea" and "verticalStepArea".

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $categoryAxisItem->justified(true);
    ?>

### labels

The axis labels configuration.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLabels|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLabels](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemLabels)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $labels = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLabels();
    $background = 'value';
    $labels->background($background);
    $categoryAxisItem->labels($labels);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $background = 'value';
    $categoryAxisItem->labels(array('background' => $background));
    ?>

### line

The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemLine)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $line = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemLine();
    $color = 'value';
    $line->color($color);
    $categoryAxisItem->line($line);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->line(array('color' => $color));
    ?>

### majorGridLines

The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemMajorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemMajorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemMajorGridLines)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $majorGridLines = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemMajorGridLines();
    $color = 'value';
    $majorGridLines->color($color);
    $categoryAxisItem->majorGridLines($majorGridLines);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->majorGridLines(array('color' => $color));
    ?>

### majorTicks

The configuration of the category axis major ticks.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemMajorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemMajorTicks](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemMajorTicks)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $majorTicks = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemMajorTicks();
    $color = 'value';
    $majorTicks->color($color);
    $categoryAxisItem->majorTicks($majorTicks);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->majorTicks(array('color' => $color));
    ?>

### max
The last date displayed on the category date axis. By default, the minimum date is the same as the last category.
This is often used in combination with the categoryAxis.min and categoryAxis.roundToBaseUnit options to
set up a fixed date range.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value ``



### maxDateGroups
The maximum number of groups (categories) to display when
categoryAxis.baseUnit is set to "fit" or
categoryAxis.baseUnitStep is set to "auto".

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $categoryAxisItem->maxDateGroups(1);
    ?>

### min
The first date displayed on the category date axis. By default, the minimum date is the same as the first category.
This is often used in combination with the categoryAxis.min and categoryAxis.roundToBaseUnit options to
set up a fixed date range.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value ``



### minorGridLines

The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the
body of the chart.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemMinorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemMinorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemMinorGridLines)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $minorGridLines = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemMinorGridLines();
    $color = 'value';
    $minorGridLines->color($color);
    $categoryAxisItem->minorGridLines($minorGridLines);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->minorGridLines(array('color' => $color));
    ?>

### minorTicks

The configuration of the category axis minor ticks.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemMinorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemMinorTicks](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemMinorTicks)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $minorTicks = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemMinorTicks();
    $color = 'value';
    $minorTicks->color($color);
    $categoryAxisItem->minorTicks($minorTicks);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->minorTicks(array('color' => $color));
    ?>

### notes

The category axis notes configuration.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemNotes)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $notes = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes();
    $position = 'value';
    $notes->position($position);
    $categoryAxisItem->notes($notes);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $position = 'value';
    $categoryAxisItem->notes(array('position' => $position));
    ?>

### addPlotBand

Adds one or more StockChartNavigatorCategoryAxisItemPlotBand to the StockChartNavigatorCategoryAxisItem.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemPlotBand|array`

#### Example - using \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemPlotBand

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $plotBand = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemPlotBand();
    $color = 'value';
    $plotBand->color($color);
    $categoryAxisItem->addPlotBand($plotBand);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->addPlotBand(array('color' => $color));
    ?>

#### Example - adding more than one StockChartNavigatorCategoryAxisItemPlotBand

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $first  = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemPlotBand();
    $second = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemPlotBand();
    $categoryAxisItem->addPlotBand($first, $second);
    ?>

### reverse
If set to true the category axis direction will be reversed. By default categories are listed from left to right and from bottom to top.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $categoryAxisItem->reverse(true);
    ?>

### roundToBaseUnit
If set to true the chart will round the first and last date to the nearest base unit.The roundToBaseUnit option will be ignored if series.type is set to "bar", "column", "ohlc" or "candlestick".

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $categoryAxisItem->roundToBaseUnit(true);
    ?>

### title

The title configuration of the category axis.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemTitle)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $background = 'value';
    $title->background($background);
    $categoryAxisItem->title($title);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $background = 'value';
    $categoryAxisItem->title(array('background' => $background));
    ?>

### visible
If set to true the chart will display the category axis. By default the category axis is visible.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $categoryAxisItem->visible(true);
    ?>

### weekStartDay
The week start day when categoryAxis.baseUnit is set to "weeks".The supported values are:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $categoryAxisItem->weekStartDay(1);
    ?>

