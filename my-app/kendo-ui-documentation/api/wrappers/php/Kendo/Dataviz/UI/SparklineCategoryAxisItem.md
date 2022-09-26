---
title: SparklineCategoryAxisItem
slug: php-dataviz-ui-sparklinecategoryaxisitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineCategoryAxisItem

A PHP class representing the categoryAxisItem setting of SparklineCategoryAxis.


## Methods

### autoBaseUnitSteps
Specifies the discrete baseUnitStep values when
either baseUnit is set to "fit" or baseUnitStep is set to "auto".The default configuration is as follows:Each setting can be overriden individually.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value ``



### axisCrossingValue
Category index at which the first value axis crosses this axis. (Only for object)Category indicies at which the value axes cross the category axis. (Only for array)Note: Specify an index greater than or equal to the number
of categories to denote the far end of the axis.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `|date|array`



#### Example  - using 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->axisCrossingValue(new ());
    ?>

#### Example  - using date
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->axisCrossingValue(new date());
    ?>

#### Example  - using array
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->axisCrossingValue(new array());
    ?>

### baseUnit
The base time interval for the axis.
The default baseUnit is determined automatically from the minimum difference
between subsequent categories. Available options:Setting baseUnit to "fit" will set such base unit and baseUnitStep
that the total number of categories does not exceed maxDateGroups.Series data is aggregated for the specified base unit by using the
series.aggregate function.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->baseUnit('value');
    ?>

### baseUnitStep
Sets the step (interval) between categories in base units.
Specifiying "auto" will set the step to such value that the total number of categories does not exceed maxDateGroups.This option is ignored if baseUnit is set to "fit".

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value ``



### categories
Array of category names.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->categories(new array());
    ?>

### color
Color to apply to all axis elements. Any valid CSS color string will work here, including hex and rgb.
Individual color settings for line and labels take priority.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->color('value');
    ?>

### crosshair

The crosshair configuration options.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemCrosshair)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $crosshair = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshair();
    $color = 'value';
    $crosshair->color($color);
    $categoryAxisItem->crosshair($crosshair);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->crosshair(array('color' => $color));
    ?>

### field
The data field containing the category name.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->field('value');
    ?>

### justified
Positions categories and series points on major ticks. This removes the empty space before and after the series.This option is ignored if either bar or column series are plotted on the axis.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->justified(true);
    ?>

### labels

Configures the axis labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemLabels)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $background = 'value';
    $labels->background($background);
    $categoryAxisItem->labels($labels);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $background = 'value';
    $categoryAxisItem->labels(array('background' => $background));
    ?>

### line

Configures the axis line. This will also effect major and minor ticks, but not gridlines.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemLine](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemLine)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $line = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLine();
    $color = 'value';
    $line->color($color);
    $categoryAxisItem->line($line);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->line(array('color' => $color));
    ?>

### majorGridLines

Configures the major grid lines.
These are the lines that are an extension of the major ticks through the body of the chart.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemMajorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemMajorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemMajorGridLines)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $majorGridLines = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemMajorGridLines();
    $color = 'value';
    $majorGridLines->color($color);
    $categoryAxisItem->majorGridLines($majorGridLines);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->majorGridLines(array('color' => $color));
    ?>

### majorTicks

The major ticks of the axis.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemMajorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemMajorTicks](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemMajorTicks)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $majorTicks = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemMajorTicks();
    $size = 1;
    $majorTicks->size($size);
    $categoryAxisItem->majorTicks($majorTicks);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $size = 1;
    $categoryAxisItem->majorTicks(array('size' => $size));
    ?>

### max
The last date displayed on the axis.
By default, the minimum date is the same as the last category.
This is often used in combination with the min and roundToBaseUnit configuration options to
set up a fixed date range.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value ``



### maxDateGroups
Specifies the maximum number of groups (categories) to produce when
either baseUnit is set to "fit" or baseUnitStep is set to "auto".This option is ignored in all other cases.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->maxDateGroups(1);
    ?>

### min
The first date displayed on the axis.
By default, the minimum date is the same as the first category.
This is often used in combination with the max and roundToBaseUnit configuration options to
set up a fixed date range.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value ``



### minorGridLines

Configures the minor grid lines.  These are the lines that are an extension of the minor ticks through
the body of the chart.Note that minor grid lines are not visible by default, therefore none of these settings will take effect with the minor grid lines visibility being set to true.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorGridLines|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorGridLines](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemMinorGridLines)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $minorGridLines = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorGridLines();
    $color = 'value';
    $minorGridLines->color($color);
    $categoryAxisItem->minorGridLines($minorGridLines);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->minorGridLines(array('color' => $color));
    ?>

### minorTicks

The minor ticks of the axis.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorTicks](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemMinorTicks)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $minorTicks = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorTicks();
    $size = 1;
    $minorTicks->size($size);
    $categoryAxisItem->minorTicks($minorTicks);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $size = 1;
    $categoryAxisItem->minorTicks(array('size' => $size));
    ?>

### name
The unique axis name.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->name('value');
    ?>

### notes

The category axis notes configuration.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemNotes)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $notes = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes();
    $position = 'value';
    $notes->position($position);
    $categoryAxisItem->notes($notes);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $position = 'value';
    $categoryAxisItem->notes(array('position' => $position));
    ?>

### addPlotBand

Adds one or more SparklineCategoryAxisItemPlotBand to the SparklineCategoryAxisItem.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\SparklineCategoryAxisItemPlotBand|array`

#### Example - using \Kendo\Dataviz\UI\SparklineCategoryAxisItemPlotBand

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $plotBand = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemPlotBand();
    $color = 'value';
    $plotBand->color($color);
    $categoryAxisItem->addPlotBand($plotBand);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $color = 'value';
    $categoryAxisItem->addPlotBand(array('color' => $color));
    ?>

#### Example - adding more than one SparklineCategoryAxisItemPlotBand

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $first  = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemPlotBand();
    $second = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemPlotBand();
    $categoryAxisItem->addPlotBand($first, $second);
    ?>

### reverse
Reverses the axis direction -
categories are listed from right to left and from top to bottom.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->reverse(true);
    ?>

### roundToBaseUnit
By default, the first and last dates will be rounded off to the nearest base unit.
Specifying false for this option will disable this behavior.This option is most useful in combination with explicit min and max dates.It will be ignored if either bar or column series are plotted on the axis.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->roundToBaseUnit(true);
    ?>

### title

The title of the category axis.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemTitle)
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $title = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle();
    $background = 'value';
    $title->background($background);
    $categoryAxisItem->title($title);
    ?>

#### Example - using array

    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $background = 'value';
    $categoryAxisItem->title(array('background' => $background));
    ?>

### type
The axis type.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->type('value');
    ?>

### visible
The visibility of the axis.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->visible(true);
    ?>

### weekStartDay
Specifies the week start day when baseUnit is set to "weeks".
Use the kendo.days constants to specify the day by name.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $categoryAxisItem->weekStartDay(1);
    ?>

