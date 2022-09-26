---
title: stockChart-navigator-categoryAxisItem
slug: jsp-stockChart-navigator-categoryAxisItem
tags: api, java
publish: true
---

# \<kendo:stockChart-navigator-categoryAxisItem\>

The category axis configuration options.

#### Example
    <kendo:stockChart-navigator-categoryAxis>
        <kendo:stockChart-navigator-categoryAxisItem></kendo:stockChart-navigator-categoryAxisItem>
    </kendo:stockChart-navigator-categoryAxis>

## Configuration Attributes

### axisCrossingValue `java.lang.Object`

Category index at which the first value axis crosses this axis (when set as an object).Category indices at which the value axes cross the category axis (when set as an array).

#### Example
    <kendo:stockChart-navigator-categoryAxisItem axisCrossingValue="axisCrossingValue">
    </kendo:stockChart-navigator-categoryAxisItem>

### baseUnit `java.lang.String`

The base time interval for the date axis. The default base unit is determined automatically from the minimum difference
between subsequent categories.The supported values are:Setting baseUnit to "fit" will set such base unit and categoryAxis.baseUnitStep
that the total number of categories does not exceed categoryAxis.maxDateGroups.Series data is aggregated for the specified base unit using the series.aggregate function.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem baseUnit="baseUnit">
    </kendo:stockChart-navigator-categoryAxisItem>

### baseUnitStep `java.lang.Object`

The step (interval) between categories in base units. Setting it to "auto" will set the step to such value
that the total number of categories does not exceed categoryAxis.maxDateGroups.This option is ignored if categoryAxis.baseUnit is set to "fit".

#### Example
    <kendo:stockChart-navigator-categoryAxisItem baseUnitStep="baseUnitStep">
    </kendo:stockChart-navigator-categoryAxisItem>

### categories `java.lang.Object`

The category names. The chart will create a category for every item of the array.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem categories="categories">
    </kendo:stockChart-navigator-categoryAxisItem>

### color `java.lang.String`

The color to apply to all axis elements. Accepts a valid CSS color string, including hex and rgb. Can be overridden by categoryAxis.labels.color and
categoryAxis.line.color.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem color="color">
    </kendo:stockChart-navigator-categoryAxisItem>

### field `java.lang.String`

The data item field which contains the category name. Requires the dataSource option to be set.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem field="field">
    </kendo:stockChart-navigator-categoryAxisItem>

### justified `boolean`

If set to true the chart will position categories and series points on major ticks. This removes the empty space before and after the series.The default value is false except for "area", "verticalArea", "stepArea" and "verticalStepArea".

#### Example
    <kendo:stockChart-navigator-categoryAxisItem justified="justified">
    </kendo:stockChart-navigator-categoryAxisItem>

### max `java.lang.Object`

The last date displayed on the category date axis. By default, the minimum date is the same as the last category.
This is often used in combination with the categoryAxis.min and categoryAxis.roundToBaseUnit options to
set up a fixed date range.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem max="max">
    </kendo:stockChart-navigator-categoryAxisItem>

### maxDateGroups `float`

The maximum number of groups (categories) to display when
categoryAxis.baseUnit is set to "fit" or
categoryAxis.baseUnitStep is set to "auto".

#### Example
    <kendo:stockChart-navigator-categoryAxisItem maxDateGroups="maxDateGroups">
    </kendo:stockChart-navigator-categoryAxisItem>

### min `java.lang.Object`

The first date displayed on the category date axis. By default, the minimum date is the same as the first category.
This is often used in combination with the categoryAxis.min and categoryAxis.roundToBaseUnit options to
set up a fixed date range.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem min="min">
    </kendo:stockChart-navigator-categoryAxisItem>

### reverse `boolean`

If set to true the category axis direction will be reversed. By default categories are listed from left to right and from bottom to top.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem reverse="reverse">
    </kendo:stockChart-navigator-categoryAxisItem>

### roundToBaseUnit `boolean`

If set to true the chart will round the first and last date to the nearest base unit.The roundToBaseUnit option will be ignored if series.type is set to "bar", "column", "ohlc" or "candlestick".

#### Example
    <kendo:stockChart-navigator-categoryAxisItem roundToBaseUnit="roundToBaseUnit">
    </kendo:stockChart-navigator-categoryAxisItem>

### visible `boolean`

If set to true the chart will display the category axis. By default the category axis is visible.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem visible="visible">
    </kendo:stockChart-navigator-categoryAxisItem>

### weekStartDay `float`

The week start day when categoryAxis.baseUnit is set to "weeks".The supported values are:

#### Example
    <kendo:stockChart-navigator-categoryAxisItem weekStartDay="weekStartDay">
    </kendo:stockChart-navigator-categoryAxisItem>


##  Configuration JSP Tags

### kendo:stockChart-navigator-categoryAxisItem-autoBaseUnitSteps

The discrete navigator.categoryAxis.baseUnitStep values when
either navigator.categoryAxis.baseUnit is set to "fit" or
navigator.categoryAxis.baseUnitStep is set to "auto".

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-autoBaseUnitSteps](stockchart/navigator-categoryaxisitem-autobaseunitsteps).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem>
        <kendo:stockChart-navigator-categoryAxisItem-autoBaseUnitSteps></kendo:stockChart-navigator-categoryAxisItem-autoBaseUnitSteps>
    </kendo:stockChart-navigator-categoryAxisItem>

### kendo:stockChart-navigator-categoryAxisItem-crosshair

The crosshair configuration options.

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-crosshair](stockchart/navigator-categoryaxisitem-crosshair).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem>
        <kendo:stockChart-navigator-categoryAxisItem-crosshair></kendo:stockChart-navigator-categoryAxisItem-crosshair>
    </kendo:stockChart-navigator-categoryAxisItem>

### kendo:stockChart-navigator-categoryAxisItem-labels

The axis labels configuration.

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-labels](stockchart/navigator-categoryaxisitem-labels).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem>
        <kendo:stockChart-navigator-categoryAxisItem-labels></kendo:stockChart-navigator-categoryAxisItem-labels>
    </kendo:stockChart-navigator-categoryAxisItem>

### kendo:stockChart-navigator-categoryAxisItem-line

The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-line](stockchart/navigator-categoryaxisitem-line).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem>
        <kendo:stockChart-navigator-categoryAxisItem-line></kendo:stockChart-navigator-categoryAxisItem-line>
    </kendo:stockChart-navigator-categoryAxisItem>

### kendo:stockChart-navigator-categoryAxisItem-majorGridLines

The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-majorGridLines](stockchart/navigator-categoryaxisitem-majorgridlines).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem>
        <kendo:stockChart-navigator-categoryAxisItem-majorGridLines></kendo:stockChart-navigator-categoryAxisItem-majorGridLines>
    </kendo:stockChart-navigator-categoryAxisItem>

### kendo:stockChart-navigator-categoryAxisItem-majorTicks

The configuration of the category axis major ticks.

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-majorTicks](stockchart/navigator-categoryaxisitem-majorticks).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem>
        <kendo:stockChart-navigator-categoryAxisItem-majorTicks></kendo:stockChart-navigator-categoryAxisItem-majorTicks>
    </kendo:stockChart-navigator-categoryAxisItem>

### kendo:stockChart-navigator-categoryAxisItem-minorGridLines

The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the
body of the chart.

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-minorGridLines](stockchart/navigator-categoryaxisitem-minorgridlines).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem>
        <kendo:stockChart-navigator-categoryAxisItem-minorGridLines></kendo:stockChart-navigator-categoryAxisItem-minorGridLines>
    </kendo:stockChart-navigator-categoryAxisItem>

### kendo:stockChart-navigator-categoryAxisItem-minorTicks

The configuration of the category axis minor ticks.

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-minorTicks](stockchart/navigator-categoryaxisitem-minorticks).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem>
        <kendo:stockChart-navigator-categoryAxisItem-minorTicks></kendo:stockChart-navigator-categoryAxisItem-minorTicks>
    </kendo:stockChart-navigator-categoryAxisItem>

### kendo:stockChart-navigator-categoryAxisItem-notes

The category axis notes configuration.

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-notes](stockchart/navigator-categoryaxisitem-notes).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem>
        <kendo:stockChart-navigator-categoryAxisItem-notes></kendo:stockChart-navigator-categoryAxisItem-notes>
    </kendo:stockChart-navigator-categoryAxisItem>

### kendo:stockChart-navigator-categoryAxisItem-plotBands

The plot bands of the category axis.

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-plotBands](stockchart/navigator-categoryaxisitem-plotbands).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem>
        <kendo:stockChart-navigator-categoryAxisItem-plotBands></kendo:stockChart-navigator-categoryAxisItem-plotBands>
    </kendo:stockChart-navigator-categoryAxisItem>

### kendo:stockChart-navigator-categoryAxisItem-title

The title configuration of the category axis.

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-title](stockchart/navigator-categoryaxisitem-title).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem>
        <kendo:stockChart-navigator-categoryAxisItem-title></kendo:stockChart-navigator-categoryAxisItem-title>
    </kendo:stockChart-navigator-categoryAxisItem>

