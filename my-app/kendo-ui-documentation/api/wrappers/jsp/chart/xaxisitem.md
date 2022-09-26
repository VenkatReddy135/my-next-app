---
title: chart-xAxisItem
slug: jsp-chart-xAxisItem
tags: api, java
publish: true
---

# \<kendo:chart-xAxisItem\>

The X-axis configuration options of the scatter chart X-axis. Supports all valueAxis options.

#### Example
    <kendo:chart-xAxis>
        <kendo:chart-xAxisItem></kendo:chart-xAxisItem>
    </kendo:chart-xAxis>

## Configuration Attributes

### axisCrossingValue `java.lang.Object`

Value at which the Y axis crosses this axis. (Only for object)Value indices at which the Y axes cross the value axis. (Only for array)Date at which the Y axis crosses this axis. (Only for date)

#### Example
    <kendo:chart-xAxisItem axisCrossingValue="axisCrossingValue">
    </kendo:chart-xAxisItem>

### baseUnit `java.lang.String`

The base time interval for the axis labels. The default baseUnit is determined automatically from the value range. Available options:

#### Example
    <kendo:chart-xAxisItem baseUnit="baseUnit">
    </kendo:chart-xAxisItem>

### color `java.lang.String`

The color of the axis. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-xAxisItem color="color">
    </kendo:chart-xAxisItem>

### majorUnit `float`

The interval between major divisions.
If this is a date axis the value represents the number of xAxis.baseUnits between major divisions.

#### Example
    <kendo:chart-xAxisItem majorUnit="majorUnit">
    </kendo:chart-xAxisItem>

### max `java.lang.Object`

The maximum value of the axis.

#### Example
    <kendo:chart-xAxisItem max="max">
    </kendo:chart-xAxisItem>

### min `java.lang.Object`

The minimum value of the axis.

#### Example
    <kendo:chart-xAxisItem min="min">
    </kendo:chart-xAxisItem>

### minorUnit `float`

The interval between minor divisions. It defaults to 1/5th of the xAxis.majorUnit.

#### Example
    <kendo:chart-xAxisItem minorUnit="minorUnit">
    </kendo:chart-xAxisItem>

### name `java.lang.Object`

The unique axis name. Used to associate a series with a x axis using the series.xAxis option.

#### Example
    <kendo:chart-xAxisItem name="name">
    </kendo:chart-xAxisItem>

### narrowRange `boolean`

If set to true the chart will prevent the automatic axis range from snapping to 0.

#### Example
    <kendo:chart-xAxisItem narrowRange="narrowRange">
    </kendo:chart-xAxisItem>

### pane `java.lang.String`

The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.

#### Example
    <kendo:chart-xAxisItem pane="pane">
    </kendo:chart-xAxisItem>

### reverse `boolean`

If set to true the value axis direction will be reversed. By default values increase from left to right and from bottom to top.

#### Example
    <kendo:chart-xAxisItem reverse="reverse">
    </kendo:chart-xAxisItem>

### startAngle `float`

The angle (degrees) where the 0 value is placed.Angles increase counterclockwise and zero is to the right. Negative values are acceptable.

#### Example
    <kendo:chart-xAxisItem startAngle="startAngle">
    </kendo:chart-xAxisItem>

### type `java.lang.String`

The axis type.The supported values are:

#### Example
    <kendo:chart-xAxisItem type="type">
    </kendo:chart-xAxisItem>

### visible `boolean`

If set to true the chart will display the x axis. By default the x axis is visible.

#### Example
    <kendo:chart-xAxisItem visible="visible">
    </kendo:chart-xAxisItem>


##  Configuration JSP Tags

### kendo:chart-xAxisItem-crosshair

The crosshair configuration options.

More documentation is available at [kendo:chart-xAxisItem-crosshair](chart/xaxisitem-crosshair).

#### Example

    <kendo:chart-xAxisItem>
        <kendo:chart-xAxisItem-crosshair></kendo:chart-xAxisItem-crosshair>
    </kendo:chart-xAxisItem>

### kendo:chart-xAxisItem-labels

The axis labels configuration.

More documentation is available at [kendo:chart-xAxisItem-labels](chart/xaxisitem-labels).

#### Example

    <kendo:chart-xAxisItem>
        <kendo:chart-xAxisItem-labels></kendo:chart-xAxisItem-labels>
    </kendo:chart-xAxisItem>

### kendo:chart-xAxisItem-line

The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.

More documentation is available at [kendo:chart-xAxisItem-line](chart/xaxisitem-line).

#### Example

    <kendo:chart-xAxisItem>
        <kendo:chart-xAxisItem-line></kendo:chart-xAxisItem-line>
    </kendo:chart-xAxisItem>

### kendo:chart-xAxisItem-majorGridLines

The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

More documentation is available at [kendo:chart-xAxisItem-majorGridLines](chart/xaxisitem-majorgridlines).

#### Example

    <kendo:chart-xAxisItem>
        <kendo:chart-xAxisItem-majorGridLines></kendo:chart-xAxisItem-majorGridLines>
    </kendo:chart-xAxisItem>

### kendo:chart-xAxisItem-majorTicks

The configuration of the scatter chart x axis major ticks.

More documentation is available at [kendo:chart-xAxisItem-majorTicks](chart/xaxisitem-majorticks).

#### Example

    <kendo:chart-xAxisItem>
        <kendo:chart-xAxisItem-majorTicks></kendo:chart-xAxisItem-majorTicks>
    </kendo:chart-xAxisItem>

### kendo:chart-xAxisItem-minorGridLines

The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the
body of the chart.

More documentation is available at [kendo:chart-xAxisItem-minorGridLines](chart/xaxisitem-minorgridlines).

#### Example

    <kendo:chart-xAxisItem>
        <kendo:chart-xAxisItem-minorGridLines></kendo:chart-xAxisItem-minorGridLines>
    </kendo:chart-xAxisItem>

### kendo:chart-xAxisItem-notes

The x axis notes configuration.

More documentation is available at [kendo:chart-xAxisItem-notes](chart/xaxisitem-notes).

#### Example

    <kendo:chart-xAxisItem>
        <kendo:chart-xAxisItem-notes></kendo:chart-xAxisItem-notes>
    </kendo:chart-xAxisItem>

### kendo:chart-xAxisItem-plotBands

The plot bands of the x axis.

More documentation is available at [kendo:chart-xAxisItem-plotBands](chart/xaxisitem-plotbands).

#### Example

    <kendo:chart-xAxisItem>
        <kendo:chart-xAxisItem-plotBands></kendo:chart-xAxisItem-plotBands>
    </kendo:chart-xAxisItem>

### kendo:chart-xAxisItem-title

The title configuration of the scatter chart x axis.

More documentation is available at [kendo:chart-xAxisItem-title](chart/xaxisitem-title).

#### Example

    <kendo:chart-xAxisItem>
        <kendo:chart-xAxisItem-title></kendo:chart-xAxisItem-title>
    </kendo:chart-xAxisItem>

