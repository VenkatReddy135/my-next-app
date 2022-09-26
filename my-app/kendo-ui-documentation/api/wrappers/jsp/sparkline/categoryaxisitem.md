---
title: sparkline-categoryAxisItem
slug: jsp-sparkline-categoryAxisItem
tags: api, java
publish: true
---

# \<kendo:sparkline-categoryAxisItem\>

The category axis configuration options.

#### Example
    <kendo:sparkline-categoryAxis>
        <kendo:sparkline-categoryAxisItem></kendo:sparkline-categoryAxisItem>
    </kendo:sparkline-categoryAxis>

## Configuration Attributes

### autoBaseUnitSteps `java.lang.Object`

Specifies the discrete baseUnitStep values when
either baseUnit is set to "fit" or baseUnitStep is set to "auto".The default configuration is as follows:Each setting can be overriden individually.

#### Example
    <kendo:sparkline-categoryAxisItem autoBaseUnitSteps="autoBaseUnitSteps">
    </kendo:sparkline-categoryAxisItem>

### axisCrossingValue `java.lang.Object`

Category index at which the first value axis crosses this axis. (Only for object)Category indicies at which the value axes cross the category axis. (Only for array)Note: Specify an index greater than or equal to the number
of categories to denote the far end of the axis.

#### Example
    <kendo:sparkline-categoryAxisItem axisCrossingValue="axisCrossingValue">
    </kendo:sparkline-categoryAxisItem>

### baseUnit `java.lang.String`

The base time interval for the axis.
The default baseUnit is determined automatically from the minimum difference
between subsequent categories. Available options:Setting baseUnit to "fit" will set such base unit and baseUnitStep
that the total number of categories does not exceed maxDateGroups.Series data is aggregated for the specified base unit by using the
series.aggregate function.

#### Example
    <kendo:sparkline-categoryAxisItem baseUnit="baseUnit">
    </kendo:sparkline-categoryAxisItem>

### baseUnitStep `java.lang.Object`

Sets the step (interval) between categories in base units.
Specifiying "auto" will set the step to such value that the total number of categories does not exceed maxDateGroups.This option is ignored if baseUnit is set to "fit".

#### Example
    <kendo:sparkline-categoryAxisItem baseUnitStep="baseUnitStep">
    </kendo:sparkline-categoryAxisItem>

### categories `java.lang.Object`

Array of category names.

#### Example
    <kendo:sparkline-categoryAxisItem categories="categories">
    </kendo:sparkline-categoryAxisItem>

### color `java.lang.String`

Color to apply to all axis elements. Any valid CSS color string will work here, including hex and rgb.
Individual color settings for line and labels take priority.

#### Example
    <kendo:sparkline-categoryAxisItem color="color">
    </kendo:sparkline-categoryAxisItem>

### field `java.lang.String`

The data field containing the category name.

#### Example
    <kendo:sparkline-categoryAxisItem field="field">
    </kendo:sparkline-categoryAxisItem>

### justified `boolean`

Positions categories and series points on major ticks. This removes the empty space before and after the series.This option is ignored if either bar or column series are plotted on the axis.

#### Example
    <kendo:sparkline-categoryAxisItem justified="justified">
    </kendo:sparkline-categoryAxisItem>

### max `java.lang.Object`

The last date displayed on the axis.
By default, the minimum date is the same as the last category.
This is often used in combination with the min and roundToBaseUnit configuration options to
set up a fixed date range.

#### Example
    <kendo:sparkline-categoryAxisItem max="max">
    </kendo:sparkline-categoryAxisItem>

### maxDateGroups `float`

Specifies the maximum number of groups (categories) to produce when
either baseUnit is set to "fit" or baseUnitStep is set to "auto".This option is ignored in all other cases.

#### Example
    <kendo:sparkline-categoryAxisItem maxDateGroups="maxDateGroups">
    </kendo:sparkline-categoryAxisItem>

### min `java.lang.Object`

The first date displayed on the axis.
By default, the minimum date is the same as the first category.
This is often used in combination with the max and roundToBaseUnit configuration options to
set up a fixed date range.

#### Example
    <kendo:sparkline-categoryAxisItem min="min">
    </kendo:sparkline-categoryAxisItem>

### name `java.lang.String`

The unique axis name.

#### Example
    <kendo:sparkline-categoryAxisItem name="name">
    </kendo:sparkline-categoryAxisItem>

### reverse `boolean`

Reverses the axis direction -
categories are listed from right to left and from top to bottom.

#### Example
    <kendo:sparkline-categoryAxisItem reverse="reverse">
    </kendo:sparkline-categoryAxisItem>

### roundToBaseUnit `boolean`

By default, the first and last dates will be rounded off to the nearest base unit.
Specifying false for this option will disable this behavior.This option is most useful in combination with explicit min and max dates.It will be ignored if either bar or column series are plotted on the axis.

#### Example
    <kendo:sparkline-categoryAxisItem roundToBaseUnit="roundToBaseUnit">
    </kendo:sparkline-categoryAxisItem>

### type `java.lang.String`

The axis type.

#### Example
    <kendo:sparkline-categoryAxisItem type="type">
    </kendo:sparkline-categoryAxisItem>

### visible `boolean`

The visibility of the axis.

#### Example
    <kendo:sparkline-categoryAxisItem visible="visible">
    </kendo:sparkline-categoryAxisItem>

### weekStartDay `float`

Specifies the week start day when baseUnit is set to "weeks".
Use the kendo.days constants to specify the day by name.

#### Example
    <kendo:sparkline-categoryAxisItem weekStartDay="weekStartDay">
    </kendo:sparkline-categoryAxisItem>


##  Configuration JSP Tags

### kendo:sparkline-categoryAxisItem-crosshair

The crosshair configuration options.

More documentation is available at [kendo:sparkline-categoryAxisItem-crosshair](sparkline/categoryaxisitem-crosshair).

#### Example

    <kendo:sparkline-categoryAxisItem>
        <kendo:sparkline-categoryAxisItem-crosshair></kendo:sparkline-categoryAxisItem-crosshair>
    </kendo:sparkline-categoryAxisItem>

### kendo:sparkline-categoryAxisItem-labels

Configures the axis labels.

More documentation is available at [kendo:sparkline-categoryAxisItem-labels](sparkline/categoryaxisitem-labels).

#### Example

    <kendo:sparkline-categoryAxisItem>
        <kendo:sparkline-categoryAxisItem-labels></kendo:sparkline-categoryAxisItem-labels>
    </kendo:sparkline-categoryAxisItem>

### kendo:sparkline-categoryAxisItem-line

Configures the axis line. This will also effect major and minor ticks, but not gridlines.

More documentation is available at [kendo:sparkline-categoryAxisItem-line](sparkline/categoryaxisitem-line).

#### Example

    <kendo:sparkline-categoryAxisItem>
        <kendo:sparkline-categoryAxisItem-line></kendo:sparkline-categoryAxisItem-line>
    </kendo:sparkline-categoryAxisItem>

### kendo:sparkline-categoryAxisItem-majorGridLines

Configures the major grid lines.
These are the lines that are an extension of the major ticks through the body of the chart.

More documentation is available at [kendo:sparkline-categoryAxisItem-majorGridLines](sparkline/categoryaxisitem-majorgridlines).

#### Example

    <kendo:sparkline-categoryAxisItem>
        <kendo:sparkline-categoryAxisItem-majorGridLines></kendo:sparkline-categoryAxisItem-majorGridLines>
    </kendo:sparkline-categoryAxisItem>

### kendo:sparkline-categoryAxisItem-majorTicks

The major ticks of the axis.

More documentation is available at [kendo:sparkline-categoryAxisItem-majorTicks](sparkline/categoryaxisitem-majorticks).

#### Example

    <kendo:sparkline-categoryAxisItem>
        <kendo:sparkline-categoryAxisItem-majorTicks></kendo:sparkline-categoryAxisItem-majorTicks>
    </kendo:sparkline-categoryAxisItem>

### kendo:sparkline-categoryAxisItem-minorGridLines

Configures the minor grid lines.  These are the lines that are an extension of the minor ticks through
the body of the chart.Note that minor grid lines are not visible by default, therefore none of these settings will take effect with the minor grid lines visibility being set to true.

More documentation is available at [kendo:sparkline-categoryAxisItem-minorGridLines](sparkline/categoryaxisitem-minorgridlines).

#### Example

    <kendo:sparkline-categoryAxisItem>
        <kendo:sparkline-categoryAxisItem-minorGridLines></kendo:sparkline-categoryAxisItem-minorGridLines>
    </kendo:sparkline-categoryAxisItem>

### kendo:sparkline-categoryAxisItem-minorTicks

The minor ticks of the axis.

More documentation is available at [kendo:sparkline-categoryAxisItem-minorTicks](sparkline/categoryaxisitem-minorticks).

#### Example

    <kendo:sparkline-categoryAxisItem>
        <kendo:sparkline-categoryAxisItem-minorTicks></kendo:sparkline-categoryAxisItem-minorTicks>
    </kendo:sparkline-categoryAxisItem>

### kendo:sparkline-categoryAxisItem-notes

The category axis notes configuration.

More documentation is available at [kendo:sparkline-categoryAxisItem-notes](sparkline/categoryaxisitem-notes).

#### Example

    <kendo:sparkline-categoryAxisItem>
        <kendo:sparkline-categoryAxisItem-notes></kendo:sparkline-categoryAxisItem-notes>
    </kendo:sparkline-categoryAxisItem>

### kendo:sparkline-categoryAxisItem-plotBands

The plot bands of the category axis.

More documentation is available at [kendo:sparkline-categoryAxisItem-plotBands](sparkline/categoryaxisitem-plotbands).

#### Example

    <kendo:sparkline-categoryAxisItem>
        <kendo:sparkline-categoryAxisItem-plotBands></kendo:sparkline-categoryAxisItem-plotBands>
    </kendo:sparkline-categoryAxisItem>

### kendo:sparkline-categoryAxisItem-title

The title of the category axis.

More documentation is available at [kendo:sparkline-categoryAxisItem-title](sparkline/categoryaxisitem-title).

#### Example

    <kendo:sparkline-categoryAxisItem>
        <kendo:sparkline-categoryAxisItem-title></kendo:sparkline-categoryAxisItem-title>
    </kendo:sparkline-categoryAxisItem>

