---
title: stockChart-categoryAxisItem
slug: jsp-stockChart-categoryAxisItem
tags: api, java
publish: true
---

# \<kendo:stockChart-categoryAxisItem\>

The category axis configuration options.

#### Example
    <kendo:stockChart-categoryAxis>
        <kendo:stockChart-categoryAxisItem></kendo:stockChart-categoryAxisItem>
    </kendo:stockChart-categoryAxis>

## Configuration Attributes

### axisCrossingValue `java.lang.Object`

Category index at which the first value axis crosses this axis. (Only for object)Category indicies at which the value axes cross the category axis. (Only for array)Note: Specify an index greater than or equal to the number
of categories to denote the far end of the axis.

#### Example
    <kendo:stockChart-categoryAxisItem axisCrossingValue="axisCrossingValue">
    </kendo:stockChart-categoryAxisItem>

### baseUnit `java.lang.String`

The base time interval for the date axis. The default base unit is determined automatically from the minimum difference
between subsequent categories.The supported values are:Setting baseUnit to "fit" will set such base unit and categoryAxis.baseUnitStep
that the total number of categories does not exceed categoryAxis.maxDateGroups.Series data is aggregated for the specified base unit using the series.aggregate function.

#### Example
    <kendo:stockChart-categoryAxisItem baseUnit="baseUnit">
    </kendo:stockChart-categoryAxisItem>

### baseUnitStep `java.lang.Object`

The step (interval) between categories in base units. Setting it to "auto" will set the step to such value
that the total number of categories does not exceed categoryAxis.maxDateGroups.This option is ignored if categoryAxis.baseUnit is set to "fit".

#### Example
    <kendo:stockChart-categoryAxisItem baseUnitStep="baseUnitStep">
    </kendo:stockChart-categoryAxisItem>

### categories `java.lang.Object`

Array of category names.

#### Example
    <kendo:stockChart-categoryAxisItem categories="categories">
    </kendo:stockChart-categoryAxisItem>

### color `java.lang.String`

Color to apply to all axis elements. Any valid CSS color string will work here, including hex and rgb.
Individual color settings for line and labels take priority.

#### Example
    <kendo:stockChart-categoryAxisItem color="color">
    </kendo:stockChart-categoryAxisItem>

### field `java.lang.String`

The data field containing the category name.

#### Example
    <kendo:stockChart-categoryAxisItem field="field">
    </kendo:stockChart-categoryAxisItem>

### justified `boolean`

Positions categories and series points on major ticks. This removes the empty space before and after the series.This option is ignored if either column, ohlc or candlestick series are plotted on the axis.

#### Example
    <kendo:stockChart-categoryAxisItem justified="justified">
    </kendo:stockChart-categoryAxisItem>

### max `java.lang.Object`

The last date displayed on the axis.
By default, the minimum date is the same as the last category.
This is often used in combination with the min and roundToBaseUnit configuration options to
set up a fixed date range.

#### Example
    <kendo:stockChart-categoryAxisItem max="max">
    </kendo:stockChart-categoryAxisItem>

### maxDateGroups `float`

Specifies the maximum number of groups (categories) to produce when
either baseUnit is set to "fit" or baseUnitStep is set to "auto".This option is ignored in all other cases.The default value is approximately equal to [widget width, px] / 30

#### Example
    <kendo:stockChart-categoryAxisItem maxDateGroups="maxDateGroups">
    </kendo:stockChart-categoryAxisItem>

### min `java.lang.Object`

The first date displayed on the axis.
By default, the minimum date is the same as the first category.
This is often used in combination with the max and roundToBaseUnit configuration options to
set up a fixed date range.

#### Example
    <kendo:stockChart-categoryAxisItem min="min">
    </kendo:stockChart-categoryAxisItem>

### name `java.lang.String`

The unique axis name.

#### Example
    <kendo:stockChart-categoryAxisItem name="name">
    </kendo:stockChart-categoryAxisItem>

### pane `java.lang.String`

The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.

#### Example
    <kendo:stockChart-categoryAxisItem pane="pane">
    </kendo:stockChart-categoryAxisItem>

### reverse `boolean`

Reverses the axis direction -
categories are listed from right to left and from top to bottom.

#### Example
    <kendo:stockChart-categoryAxisItem reverse="reverse">
    </kendo:stockChart-categoryAxisItem>

### roundToBaseUnit `boolean`

By default, the first and last dates will be rounded off to the nearest base unit.
Specifying false for this option will disable this behavior.This option is most useful in combination with explicit min and max dates.It will be ignored if either column, ohlc or candlestick series are plotted on the axis.

#### Example
    <kendo:stockChart-categoryAxisItem roundToBaseUnit="roundToBaseUnit">
    </kendo:stockChart-categoryAxisItem>

### type `java.lang.String`

The axis type.

#### Example
    <kendo:stockChart-categoryAxisItem type="type">
    </kendo:stockChart-categoryAxisItem>

### visible `boolean`

The visibility of the axis.

#### Example
    <kendo:stockChart-categoryAxisItem visible="visible">
    </kendo:stockChart-categoryAxisItem>

### weekStartDay `float`

Specifies the week start day when baseUnit is set to "weeks".
Use the kendo.days constants to specify the day by name.

#### Example
    <kendo:stockChart-categoryAxisItem weekStartDay="weekStartDay">
    </kendo:stockChart-categoryAxisItem>


##  Configuration JSP Tags

### kendo:stockChart-categoryAxisItem-autoBaseUnitSteps

The discrete categoryAxis.baseUnitStep values when
either categoryAxis.baseUnit is set to "fit" or
categoryAxis.baseUnitStep is set to "auto".

More documentation is available at [kendo:stockChart-categoryAxisItem-autoBaseUnitSteps](stockchart/categoryaxisitem-autobaseunitsteps).

#### Example

    <kendo:stockChart-categoryAxisItem>
        <kendo:stockChart-categoryAxisItem-autoBaseUnitSteps></kendo:stockChart-categoryAxisItem-autoBaseUnitSteps>
    </kendo:stockChart-categoryAxisItem>

### kendo:stockChart-categoryAxisItem-crosshair

The crosshair configuration options.

More documentation is available at [kendo:stockChart-categoryAxisItem-crosshair](stockchart/categoryaxisitem-crosshair).

#### Example

    <kendo:stockChart-categoryAxisItem>
        <kendo:stockChart-categoryAxisItem-crosshair></kendo:stockChart-categoryAxisItem-crosshair>
    </kendo:stockChart-categoryAxisItem>

### kendo:stockChart-categoryAxisItem-labels

Configures the axis labels.

More documentation is available at [kendo:stockChart-categoryAxisItem-labels](stockchart/categoryaxisitem-labels).

#### Example

    <kendo:stockChart-categoryAxisItem>
        <kendo:stockChart-categoryAxisItem-labels></kendo:stockChart-categoryAxisItem-labels>
    </kendo:stockChart-categoryAxisItem>

### kendo:stockChart-categoryAxisItem-line

Configures the axis line. This will also effect major and minor ticks, but not gridlines.

More documentation is available at [kendo:stockChart-categoryAxisItem-line](stockchart/categoryaxisitem-line).

#### Example

    <kendo:stockChart-categoryAxisItem>
        <kendo:stockChart-categoryAxisItem-line></kendo:stockChart-categoryAxisItem-line>
    </kendo:stockChart-categoryAxisItem>

### kendo:stockChart-categoryAxisItem-majorGridLines

Configures the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

More documentation is available at [kendo:stockChart-categoryAxisItem-majorGridLines](stockchart/categoryaxisitem-majorgridlines).

#### Example

    <kendo:stockChart-categoryAxisItem>
        <kendo:stockChart-categoryAxisItem-majorGridLines></kendo:stockChart-categoryAxisItem-majorGridLines>
    </kendo:stockChart-categoryAxisItem>

### kendo:stockChart-categoryAxisItem-majorTicks

The major ticks of the axis.

More documentation is available at [kendo:stockChart-categoryAxisItem-majorTicks](stockchart/categoryaxisitem-majorticks).

#### Example

    <kendo:stockChart-categoryAxisItem>
        <kendo:stockChart-categoryAxisItem-majorTicks></kendo:stockChart-categoryAxisItem-majorTicks>
    </kendo:stockChart-categoryAxisItem>

### kendo:stockChart-categoryAxisItem-minorGridLines

Configures the minor grid lines.  These are the lines that are an extension of the minor ticks through
the body of the chart.Note that minor grid lines are not visible by default, therefore none of these settings will take effect with the minor grid lines visibility being set to true.

More documentation is available at [kendo:stockChart-categoryAxisItem-minorGridLines](stockchart/categoryaxisitem-minorgridlines).

#### Example

    <kendo:stockChart-categoryAxisItem>
        <kendo:stockChart-categoryAxisItem-minorGridLines></kendo:stockChart-categoryAxisItem-minorGridLines>
    </kendo:stockChart-categoryAxisItem>

### kendo:stockChart-categoryAxisItem-minorTicks

The minor ticks of the axis.

More documentation is available at [kendo:stockChart-categoryAxisItem-minorTicks](stockchart/categoryaxisitem-minorticks).

#### Example

    <kendo:stockChart-categoryAxisItem>
        <kendo:stockChart-categoryAxisItem-minorTicks></kendo:stockChart-categoryAxisItem-minorTicks>
    </kendo:stockChart-categoryAxisItem>

### kendo:stockChart-categoryAxisItem-notes

The category axis notes configuration.

More documentation is available at [kendo:stockChart-categoryAxisItem-notes](stockchart/categoryaxisitem-notes).

#### Example

    <kendo:stockChart-categoryAxisItem>
        <kendo:stockChart-categoryAxisItem-notes></kendo:stockChart-categoryAxisItem-notes>
    </kendo:stockChart-categoryAxisItem>

### kendo:stockChart-categoryAxisItem-plotBands

The plot bands of the category axis.

More documentation is available at [kendo:stockChart-categoryAxisItem-plotBands](stockchart/categoryaxisitem-plotbands).

#### Example

    <kendo:stockChart-categoryAxisItem>
        <kendo:stockChart-categoryAxisItem-plotBands></kendo:stockChart-categoryAxisItem-plotBands>
    </kendo:stockChart-categoryAxisItem>

### kendo:stockChart-categoryAxisItem-select

The selected axis range. If configured, axis selection will be enabled.** Available only for vertical axes **The range units are:

More documentation is available at [kendo:stockChart-categoryAxisItem-select](stockchart/categoryaxisitem-select).

#### Example

    <kendo:stockChart-categoryAxisItem>
        <kendo:stockChart-categoryAxisItem-select></kendo:stockChart-categoryAxisItem-select>
    </kendo:stockChart-categoryAxisItem>

### kendo:stockChart-categoryAxisItem-title

The title of the category axis.

More documentation is available at [kendo:stockChart-categoryAxisItem-title](stockchart/categoryaxisitem-title).

#### Example

    <kendo:stockChart-categoryAxisItem>
        <kendo:stockChart-categoryAxisItem-title></kendo:stockChart-categoryAxisItem-title>
    </kendo:stockChart-categoryAxisItem>

