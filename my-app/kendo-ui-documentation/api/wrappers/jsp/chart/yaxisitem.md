---
title: chart-yAxisItem
slug: jsp-chart-yAxisItem
tags: api, java
publish: true
---

# \<kendo:chart-yAxisItem\>

The y axis configuration options of the scatter chart. Supports all valueAxis options.

#### Example
    <kendo:chart-yAxis>
        <kendo:chart-yAxisItem></kendo:chart-yAxisItem>
    </kendo:chart-yAxis>

## Configuration Attributes

### axisCrossingValue `java.lang.Object`

Value at which the Y axis crosses this axis. (Only for object)Value indices at which the Y axes cross the value axis. (Only for array)Date at which the Y axis crosses this axis. (Only for date)

#### Example
    <kendo:chart-yAxisItem axisCrossingValue="axisCrossingValue">
    </kendo:chart-yAxisItem>

### baseUnit `java.lang.String`

The base time interval for the axis labels. The default baseUnit is determined automatically from the value range. Available options:

#### Example
    <kendo:chart-yAxisItem baseUnit="baseUnit">
    </kendo:chart-yAxisItem>

### color `java.lang.String`

The color of the axis. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-yAxisItem color="color">
    </kendo:chart-yAxisItem>

### majorUnit `float`

The interval between major divisions.
If this is a date axis the value represents the number of xAxis.baseUnits between major divisions.

#### Example
    <kendo:chart-yAxisItem majorUnit="majorUnit">
    </kendo:chart-yAxisItem>

### max `java.lang.Object`

The maximum value of the axis.

#### Example
    <kendo:chart-yAxisItem max="max">
    </kendo:chart-yAxisItem>

### min `java.lang.Object`

The minimum value of the axis.

#### Example
    <kendo:chart-yAxisItem min="min">
    </kendo:chart-yAxisItem>

### minorUnit `float`

The interval between minor divisions. It defaults to 1/5th of the yAxis.majorUnit.

#### Example
    <kendo:chart-yAxisItem minorUnit="minorUnit">
    </kendo:chart-yAxisItem>

### name `java.lang.Object`

The unique axis name. Used to associate a series with a y axis using the series.yAxis option.

#### Example
    <kendo:chart-yAxisItem name="name">
    </kendo:chart-yAxisItem>

### narrowRange `boolean`

If set to true the chart will prevent the automatic axis range from snapping to 0.

#### Example
    <kendo:chart-yAxisItem narrowRange="narrowRange">
    </kendo:chart-yAxisItem>

### pane `java.lang.String`

The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.

#### Example
    <kendo:chart-yAxisItem pane="pane">
    </kendo:chart-yAxisItem>

### reverse `boolean`

If set to true the value axis direction will be reversed. By default values increase from left to right and from bottom to top.

#### Example
    <kendo:chart-yAxisItem reverse="reverse">
    </kendo:chart-yAxisItem>

### type `java.lang.String`

The axis type.The supported values are:

#### Example
    <kendo:chart-yAxisItem type="type">
    </kendo:chart-yAxisItem>

### visible `boolean`

If set to true the chart will display the y axis. By default the y axis is visible.

#### Example
    <kendo:chart-yAxisItem visible="visible">
    </kendo:chart-yAxisItem>


##  Configuration JSP Tags

### kendo:chart-yAxisItem-crosshair

The crosshair configuration options.

More documentation is available at [kendo:chart-yAxisItem-crosshair](chart/yaxisitem-crosshair).

#### Example

    <kendo:chart-yAxisItem>
        <kendo:chart-yAxisItem-crosshair></kendo:chart-yAxisItem-crosshair>
    </kendo:chart-yAxisItem>

### kendo:chart-yAxisItem-labels

The axis labels configuration.

More documentation is available at [kendo:chart-yAxisItem-labels](chart/yaxisitem-labels).

#### Example

    <kendo:chart-yAxisItem>
        <kendo:chart-yAxisItem-labels></kendo:chart-yAxisItem-labels>
    </kendo:chart-yAxisItem>

### kendo:chart-yAxisItem-line

The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.

More documentation is available at [kendo:chart-yAxisItem-line](chart/yaxisitem-line).

#### Example

    <kendo:chart-yAxisItem>
        <kendo:chart-yAxisItem-line></kendo:chart-yAxisItem-line>
    </kendo:chart-yAxisItem>

### kendo:chart-yAxisItem-majorGridLines

The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

More documentation is available at [kendo:chart-yAxisItem-majorGridLines](chart/yaxisitem-majorgridlines).

#### Example

    <kendo:chart-yAxisItem>
        <kendo:chart-yAxisItem-majorGridLines></kendo:chart-yAxisItem-majorGridLines>
    </kendo:chart-yAxisItem>

### kendo:chart-yAxisItem-majorTicks

The configuration of the scatter chart y axis major ticks.

More documentation is available at [kendo:chart-yAxisItem-majorTicks](chart/yaxisitem-majorticks).

#### Example

    <kendo:chart-yAxisItem>
        <kendo:chart-yAxisItem-majorTicks></kendo:chart-yAxisItem-majorTicks>
    </kendo:chart-yAxisItem>

### kendo:chart-yAxisItem-minorGridLines

The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the
body of the chart.

More documentation is available at [kendo:chart-yAxisItem-minorGridLines](chart/yaxisitem-minorgridlines).

#### Example

    <kendo:chart-yAxisItem>
        <kendo:chart-yAxisItem-minorGridLines></kendo:chart-yAxisItem-minorGridLines>
    </kendo:chart-yAxisItem>

### kendo:chart-yAxisItem-notes

The y axis notes configuration.

More documentation is available at [kendo:chart-yAxisItem-notes](chart/yaxisitem-notes).

#### Example

    <kendo:chart-yAxisItem>
        <kendo:chart-yAxisItem-notes></kendo:chart-yAxisItem-notes>
    </kendo:chart-yAxisItem>

### kendo:chart-yAxisItem-plotBands

The plot bands of the y axis.

More documentation is available at [kendo:chart-yAxisItem-plotBands](chart/yaxisitem-plotbands).

#### Example

    <kendo:chart-yAxisItem>
        <kendo:chart-yAxisItem-plotBands></kendo:chart-yAxisItem-plotBands>
    </kendo:chart-yAxisItem>

### kendo:chart-yAxisItem-title

The title configuration of the scatter chart y axis.

More documentation is available at [kendo:chart-yAxisItem-title](chart/yaxisitem-title).

#### Example

    <kendo:chart-yAxisItem>
        <kendo:chart-yAxisItem-title></kendo:chart-yAxisItem-title>
    </kendo:chart-yAxisItem>

