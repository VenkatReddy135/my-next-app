---
title: stockChart-yAxisItem
slug: jsp-stockChart-yAxisItem
tags: api, java
publish: true
---

# \<kendo:stockChart-yAxisItem\>

Scatter charts Y-axis configuration options.
Includes all valueAxis options in addition to:

#### Example
    <kendo:stockChart-yAxis>
        <kendo:stockChart-yAxisItem></kendo:stockChart-yAxisItem>
    </kendo:stockChart-yAxis>

## Configuration Attributes

### axisCrossingValue `Object`

Value at which the Y axis crosses this axis. (Only for object)Value indicies at which the Y axes cross the value axis. (Only for array)Date at which the Y axis crosses this axis. (Only for date)Note: Specify a value greater than or equal to the
axis maximum value to denote the far end of the axis.

#### Example
    <kendo:stockChart-yAxisItem axisCrossingValue="axisCrossingValue">
    </kendo:stockChart-yAxisItem>

### baseUnit `String`

The base time interval for the axis labels.
The default baseUnit is determined automatically from the value range. Available options:

#### Example
    <kendo:stockChart-yAxisItem baseUnit="baseUnit">
    </kendo:stockChart-yAxisItem>

### color `String`

Color to apply to all axis elements.
Individual color settings for line and labels take priority. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:stockChart-yAxisItem color="color">
    </kendo:stockChart-yAxisItem>

### majorUnit `float`

The interval between major divisions in base units.

#### Example
    <kendo:stockChart-yAxisItem majorUnit="majorUnit">
    </kendo:stockChart-yAxisItem>

### max `Object`

The end date of the axis.
This is often used in combination with the min configuration option.

#### Example
    <kendo:stockChart-yAxisItem max="max">
    </kendo:stockChart-yAxisItem>

### min `Object`

The maximum value of the axis.
This is often used in combination with the max configuration option.

#### Example
    <kendo:stockChart-yAxisItem min="min">
    </kendo:stockChart-yAxisItem>

### minorUnit `float`

The interval between minor divisions in base units.
It defaults to 1/5th of the majorUnit.

#### Example
    <kendo:stockChart-yAxisItem minorUnit="minorUnit">
    </kendo:stockChart-yAxisItem>

### name `Object`

The unique axis name.

#### Example
    <kendo:stockChart-yAxisItem name="name">
    </kendo:stockChart-yAxisItem>

### narrowRange `boolean`

Prevents the automatic axis range from snapping to 0.

#### Example
    <kendo:stockChart-yAxisItem narrowRange="narrowRange">
    </kendo:stockChart-yAxisItem>

### pane `String`

The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.

#### Example
    <kendo:stockChart-yAxisItem pane="pane">
    </kendo:stockChart-yAxisItem>

### reverse `boolean`

Reverses the axis direction -
values increase from right to left and from top to bottom.

#### Example
    <kendo:stockChart-yAxisItem reverse="reverse">
    </kendo:stockChart-yAxisItem>

### type `String`

The axis type.Note: The Chart will automatically switch to a date axis if the series X value
is of type Date. Specify type explicitly when such behavior is undesired.

#### Example
    <kendo:stockChart-yAxisItem type="type">
    </kendo:stockChart-yAxisItem>

### visible `boolean`

The visibility of the axis.

#### Example
    <kendo:stockChart-yAxisItem visible="visible">
    </kendo:stockChart-yAxisItem>


##  Configuration JSP Tags

### kendo:stockChart-yAxisItem-crosshair

The crosshair configuration options.

More documentation is available at [kendo:stockChart-yAxisItem-crosshair](stockchart/yaxisitem-crosshair).

#### Example

    <kendo:stockChart-yAxisItem>
        <kendo:stockChart-yAxisItem-crosshair></kendo:stockChart-yAxisItem-crosshair>
    </kendo:stockChart-yAxisItem>

### kendo:stockChart-yAxisItem-labels

Configures the axis labels.

More documentation is available at [kendo:stockChart-yAxisItem-labels](stockchart/yaxisitem-labels).

#### Example

    <kendo:stockChart-yAxisItem>
        <kendo:stockChart-yAxisItem-labels></kendo:stockChart-yAxisItem-labels>
    </kendo:stockChart-yAxisItem>

### kendo:stockChart-yAxisItem-line

Configures the axis line. This will also affect the major and minor ticks, but not the grid lines.

More documentation is available at [kendo:stockChart-yAxisItem-line](stockchart/yaxisitem-line).

#### Example

    <kendo:stockChart-yAxisItem>
        <kendo:stockChart-yAxisItem-line></kendo:stockChart-yAxisItem-line>
    </kendo:stockChart-yAxisItem>

### kendo:stockChart-yAxisItem-majorGridLines

Configures the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

More documentation is available at [kendo:stockChart-yAxisItem-majorGridLines](stockchart/yaxisitem-majorgridlines).

#### Example

    <kendo:stockChart-yAxisItem>
        <kendo:stockChart-yAxisItem-majorGridLines></kendo:stockChart-yAxisItem-majorGridLines>
    </kendo:stockChart-yAxisItem>

### kendo:stockChart-yAxisItem-majorTicks

The major ticks of the axis.

More documentation is available at [kendo:stockChart-yAxisItem-majorTicks](stockchart/yaxisitem-majorticks).

#### Example

    <kendo:stockChart-yAxisItem>
        <kendo:stockChart-yAxisItem-majorTicks></kendo:stockChart-yAxisItem-majorTicks>
    </kendo:stockChart-yAxisItem>

### kendo:stockChart-yAxisItem-plotBands

The plot bands of the yAxis.

More documentation is available at [kendo:stockChart-yAxisItem-plotBands](stockchart/yaxisitem-plotbands).

#### Example

    <kendo:stockChart-yAxisItem>
        <kendo:stockChart-yAxisItem-plotBands></kendo:stockChart-yAxisItem-plotBands>
    </kendo:stockChart-yAxisItem>

### kendo:stockChart-yAxisItem-title

The title of the value axis.

More documentation is available at [kendo:stockChart-yAxisItem-title](stockchart/yaxisitem-title).

#### Example

    <kendo:stockChart-yAxisItem>
        <kendo:stockChart-yAxisItem-title></kendo:stockChart-yAxisItem-title>
    </kendo:stockChart-yAxisItem>

