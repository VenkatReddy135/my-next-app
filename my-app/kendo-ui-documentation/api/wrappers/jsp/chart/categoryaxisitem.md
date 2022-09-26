---
title: chart-categoryAxisItem
slug: jsp-chart-categoryAxisItem
tags: api, java
publish: true
---

# \<kendo:chart-categoryAxisItem\>

The category axis configuration options.

#### Example
    <kendo:chart-categoryAxis>
        <kendo:chart-categoryAxisItem></kendo:chart-categoryAxisItem>
    </kendo:chart-categoryAxis>

## Configuration Attributes

### axisCrossingValue `java.lang.Object`

Category index at which the first value axis crosses this axis (when set as an object).Category indices at which the value axes cross the category axis (when set as an array).

#### Example
    <kendo:chart-categoryAxisItem axisCrossingValue="axisCrossingValue">
    </kendo:chart-categoryAxisItem>

### baseUnit `java.lang.String`

The base time interval for the date axis. The default base unit is determined automatically from the minimum difference
between subsequent categories.The supported values are:Setting baseUnit to "fit" will set such base unit and categoryAxis.baseUnitStep
that the total number of categories does not exceed categoryAxis.maxDateGroups.Series data is aggregated for the specified base unit using the series.aggregate function.

#### Example
    <kendo:chart-categoryAxisItem baseUnit="baseUnit">
    </kendo:chart-categoryAxisItem>

### baseUnitStep `java.lang.Object`

The step (interval) between categories in base units. Setting it to "auto" will set the step to such value
that the total number of categories does not exceed categoryAxis.maxDateGroups.This option is ignored if categoryAxis.baseUnit is set to "fit".

#### Example
    <kendo:chart-categoryAxisItem baseUnitStep="baseUnitStep">
    </kendo:chart-categoryAxisItem>

### categories `java.lang.Object`

The category names. The chart will create a category for every item of the array.

#### Example
    <kendo:chart-categoryAxisItem categories="categories">
    </kendo:chart-categoryAxisItem>

### color `java.lang.String`

The color to apply to all axis elements. Accepts a valid CSS color string, including hex and rgb. Can be overridden by categoryAxis.labels.color and
categoryAxis.line.color.

#### Example
    <kendo:chart-categoryAxisItem color="color">
    </kendo:chart-categoryAxisItem>

### field `java.lang.String`

The data item field which contains the category name. Requires the dataSource option to be set.

#### Example
    <kendo:chart-categoryAxisItem field="field">
    </kendo:chart-categoryAxisItem>

### justified `boolean`

If set to true the chart will position categories and series points on major ticks. This removes the empty space before and after the series.The default value is false except for "area" and "verticalArea".

#### Example
    <kendo:chart-categoryAxisItem justified="justified">
    </kendo:chart-categoryAxisItem>

### max `java.lang.Object`

The last date displayed on the category date axis. By default, the minimum date is the same as the last category.
This is often used in combination with the categoryAxis.min and categoryAxis.roundToBaseUnit options to
set up a fixed date range.

#### Example
    <kendo:chart-categoryAxisItem max="max">
    </kendo:chart-categoryAxisItem>

### maxDateGroups `float`

The maximum number of groups (categories) to display when
categoryAxis.baseUnit is set to "fit" or
categoryAxis.baseUnitStep is set to "auto".

#### Example
    <kendo:chart-categoryAxisItem maxDateGroups="maxDateGroups">
    </kendo:chart-categoryAxisItem>

### min `java.lang.Object`

The first date displayed on the category date axis. By default, the minimum date is the same as the first category.
This is often used in combination with the categoryAxis.min and categoryAxis.roundToBaseUnit options to
set up a fixed date range.

#### Example
    <kendo:chart-categoryAxisItem min="min">
    </kendo:chart-categoryAxisItem>

### name `java.lang.String`

The unique axis name. Used to associate a series with a category axis using the series.categoryAxis option.

#### Example
    <kendo:chart-categoryAxisItem name="name">
    </kendo:chart-categoryAxisItem>

### pane `java.lang.String`

The name of the pane that the category axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.

#### Example
    <kendo:chart-categoryAxisItem pane="pane">
    </kendo:chart-categoryAxisItem>

### reverse `boolean`

If set to true the category axis direction will be reversed. By default categories are listed from left to right and from bottom to top.

#### Example
    <kendo:chart-categoryAxisItem reverse="reverse">
    </kendo:chart-categoryAxisItem>

### roundToBaseUnit `boolean`

If set to true the chart will round the first and last date to the nearest base unit.The roundToBaseUnit option will be ignored if series.type is set to "bar", "column", "ohlc" or "candlestick".

#### Example
    <kendo:chart-categoryAxisItem roundToBaseUnit="roundToBaseUnit">
    </kendo:chart-categoryAxisItem>

### startAngle `float`

The angle (degrees) of the first category on the axis.Angles increase clockwise and zero is to the left. Negative values are acceptable.

#### Example
    <kendo:chart-categoryAxisItem startAngle="startAngle">
    </kendo:chart-categoryAxisItem>

### type `java.lang.String`

The category axis type.The supported values are:

#### Example
    <kendo:chart-categoryAxisItem type="type">
    </kendo:chart-categoryAxisItem>

### visible `boolean`

If set to true the chart will display the category axis. By default the category axis is visible.

#### Example
    <kendo:chart-categoryAxisItem visible="visible">
    </kendo:chart-categoryAxisItem>

### weekStartDay `float`

The week start day when categoryAxis.baseUnit is set to "weeks".The supported values are:

#### Example
    <kendo:chart-categoryAxisItem weekStartDay="weekStartDay">
    </kendo:chart-categoryAxisItem>


##  Configuration JSP Tags

### kendo:chart-categoryAxisItem-autoBaseUnitSteps

The discrete categoryAxis.baseUnitStep values when
either categoryAxis.baseUnit is set to "fit" or
categoryAxis.baseUnitStep is set to "auto".

More documentation is available at [kendo:chart-categoryAxisItem-autoBaseUnitSteps](chart/categoryaxisitem-autobaseunitsteps).

#### Example

    <kendo:chart-categoryAxisItem>
        <kendo:chart-categoryAxisItem-autoBaseUnitSteps></kendo:chart-categoryAxisItem-autoBaseUnitSteps>
    </kendo:chart-categoryAxisItem>

### kendo:chart-categoryAxisItem-crosshair

The crosshair configuration options.

More documentation is available at [kendo:chart-categoryAxisItem-crosshair](chart/categoryaxisitem-crosshair).

#### Example

    <kendo:chart-categoryAxisItem>
        <kendo:chart-categoryAxisItem-crosshair></kendo:chart-categoryAxisItem-crosshair>
    </kendo:chart-categoryAxisItem>

### kendo:chart-categoryAxisItem-labels

The axis labels configuration.

More documentation is available at [kendo:chart-categoryAxisItem-labels](chart/categoryaxisitem-labels).

#### Example

    <kendo:chart-categoryAxisItem>
        <kendo:chart-categoryAxisItem-labels></kendo:chart-categoryAxisItem-labels>
    </kendo:chart-categoryAxisItem>

### kendo:chart-categoryAxisItem-line

The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.

More documentation is available at [kendo:chart-categoryAxisItem-line](chart/categoryaxisitem-line).

#### Example

    <kendo:chart-categoryAxisItem>
        <kendo:chart-categoryAxisItem-line></kendo:chart-categoryAxisItem-line>
    </kendo:chart-categoryAxisItem>

### kendo:chart-categoryAxisItem-majorGridLines

The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

More documentation is available at [kendo:chart-categoryAxisItem-majorGridLines](chart/categoryaxisitem-majorgridlines).

#### Example

    <kendo:chart-categoryAxisItem>
        <kendo:chart-categoryAxisItem-majorGridLines></kendo:chart-categoryAxisItem-majorGridLines>
    </kendo:chart-categoryAxisItem>

### kendo:chart-categoryAxisItem-majorTicks

The configuration of the category axis major ticks.

More documentation is available at [kendo:chart-categoryAxisItem-majorTicks](chart/categoryaxisitem-majorticks).

#### Example

    <kendo:chart-categoryAxisItem>
        <kendo:chart-categoryAxisItem-majorTicks></kendo:chart-categoryAxisItem-majorTicks>
    </kendo:chart-categoryAxisItem>

### kendo:chart-categoryAxisItem-minorGridLines

The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the
body of the chart.

More documentation is available at [kendo:chart-categoryAxisItem-minorGridLines](chart/categoryaxisitem-minorgridlines).

#### Example

    <kendo:chart-categoryAxisItem>
        <kendo:chart-categoryAxisItem-minorGridLines></kendo:chart-categoryAxisItem-minorGridLines>
    </kendo:chart-categoryAxisItem>

### kendo:chart-categoryAxisItem-minorTicks

The configuration of the category axis minor ticks.

More documentation is available at [kendo:chart-categoryAxisItem-minorTicks](chart/categoryaxisitem-minorticks).

#### Example

    <kendo:chart-categoryAxisItem>
        <kendo:chart-categoryAxisItem-minorTicks></kendo:chart-categoryAxisItem-minorTicks>
    </kendo:chart-categoryAxisItem>

### kendo:chart-categoryAxisItem-notes

The category axis notes configuration.

More documentation is available at [kendo:chart-categoryAxisItem-notes](chart/categoryaxisitem-notes).

#### Example

    <kendo:chart-categoryAxisItem>
        <kendo:chart-categoryAxisItem-notes></kendo:chart-categoryAxisItem-notes>
    </kendo:chart-categoryAxisItem>

### kendo:chart-categoryAxisItem-plotBands

The plot bands of the category axis.

More documentation is available at [kendo:chart-categoryAxisItem-plotBands](chart/categoryaxisitem-plotbands).

#### Example

    <kendo:chart-categoryAxisItem>
        <kendo:chart-categoryAxisItem-plotBands></kendo:chart-categoryAxisItem-plotBands>
    </kendo:chart-categoryAxisItem>

### kendo:chart-categoryAxisItem-select

The selected axis range. If set, axis selection will be enabled.The range units are:

More documentation is available at [kendo:chart-categoryAxisItem-select](chart/categoryaxisitem-select).

#### Example

    <kendo:chart-categoryAxisItem>
        <kendo:chart-categoryAxisItem-select></kendo:chart-categoryAxisItem-select>
    </kendo:chart-categoryAxisItem>

### kendo:chart-categoryAxisItem-title

The title configuration of the category axis.

More documentation is available at [kendo:chart-categoryAxisItem-title](chart/categoryaxisitem-title).

#### Example

    <kendo:chart-categoryAxisItem>
        <kendo:chart-categoryAxisItem-title></kendo:chart-categoryAxisItem-title>
    </kendo:chart-categoryAxisItem>

