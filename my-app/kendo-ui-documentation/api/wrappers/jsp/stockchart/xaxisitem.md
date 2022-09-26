---
title: stockChart-xAxisItem
slug: jsp-stockChart-xAxisItem
tags: api, java
publish: true
---

# \<kendo:stockChart-xAxisItem\>

Scatter charts X-axis configuration options.
Includes all valueAxis options in addition to:

#### Example
    <kendo:stockChart-xAxis>
        <kendo:stockChart-xAxisItem></kendo:stockChart-xAxisItem>
    </kendo:stockChart-xAxis>

## Configuration Attributes

### axisCrossingValue `Object`

Value at which the Y axis crosses this axis. (Only for object)Value indicies at which the Y axes cross the value axis. (Only for array)Date at which the Y axis crosses this axis. (Only for date)Note: Specify a value greater than or equal to the
axis maximum value to denote the far end of the axis.

#### Example
    <kendo:stockChart-xAxisItem axisCrossingValue="axisCrossingValue">
    </kendo:stockChart-xAxisItem>

### baseUnit `String`

The base time interval for the axis labels.
The default baseUnit is determined automatically from the value range. Available options:

#### Example
    <kendo:stockChart-xAxisItem baseUnit="baseUnit">
    </kendo:stockChart-xAxisItem>

### color `String`

Color to apply to all axis elements.
Individual color settings for line and labels take priority. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:stockChart-xAxisItem color="color">
    </kendo:stockChart-xAxisItem>

### majorUnit `float`

The interval between major divisions in base units.

#### Example
    <kendo:stockChart-xAxisItem majorUnit="majorUnit">
    </kendo:stockChart-xAxisItem>

### max `Object`

The end date of the axis.
This is often used in combination with the min configuration option.

#### Example
    <kendo:stockChart-xAxisItem max="max">
    </kendo:stockChart-xAxisItem>

### min `Object`

The maximum value of the axis.
This is often used in combination with the max configuration option.

#### Example
    <kendo:stockChart-xAxisItem min="min">
    </kendo:stockChart-xAxisItem>

### minorUnit `float`

The interval between minor divisions in base units.
It defaults to 1/5th of the majorUnit.

#### Example
    <kendo:stockChart-xAxisItem minorUnit="minorUnit">
    </kendo:stockChart-xAxisItem>

### name `Object`

The unique axis name.

#### Example
    <kendo:stockChart-xAxisItem name="name">
    </kendo:stockChart-xAxisItem>

### narrowRange `boolean`

Prevents the automatic axis range from snapping to 0.

#### Example
    <kendo:stockChart-xAxisItem narrowRange="narrowRange">
    </kendo:stockChart-xAxisItem>

### pane `String`

The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.

#### Example
    <kendo:stockChart-xAxisItem pane="pane">
    </kendo:stockChart-xAxisItem>

### reverse `boolean`

Reverses the axis direction -
values increase from right to left and from top to bottom.

#### Example
    <kendo:stockChart-xAxisItem reverse="reverse">
    </kendo:stockChart-xAxisItem>

### type `String`

The axis type.Note: The Chart will automatically switch to a date axis if the series X value
is of type Date. Specify type explicitly when such behavior is undesired.

#### Example
    <kendo:stockChart-xAxisItem type="type">
    </kendo:stockChart-xAxisItem>

### visible `boolean`

The visibility of the axis.

#### Example
    <kendo:stockChart-xAxisItem visible="visible">
    </kendo:stockChart-xAxisItem>


##  Configuration JSP Tags

### kendo:stockChart-xAxisItem-crosshair

The crosshair configuration options.

More documentation is available at [kendo:stockChart-xAxisItem-crosshair](stockchart/xaxisitem-crosshair).

#### Example

    <kendo:stockChart-xAxisItem>
        <kendo:stockChart-xAxisItem-crosshair></kendo:stockChart-xAxisItem-crosshair>
    </kendo:stockChart-xAxisItem>

### kendo:stockChart-xAxisItem-labels

Configures the axis labels.

More documentation is available at [kendo:stockChart-xAxisItem-labels](stockchart/xaxisitem-labels).

#### Example

    <kendo:stockChart-xAxisItem>
        <kendo:stockChart-xAxisItem-labels></kendo:stockChart-xAxisItem-labels>
    </kendo:stockChart-xAxisItem>

### kendo:stockChart-xAxisItem-line

Configures the axis line. This will also affect the major and minor ticks, but not the grid lines.

More documentation is available at [kendo:stockChart-xAxisItem-line](stockchart/xaxisitem-line).

#### Example

    <kendo:stockChart-xAxisItem>
        <kendo:stockChart-xAxisItem-line></kendo:stockChart-xAxisItem-line>
    </kendo:stockChart-xAxisItem>

### kendo:stockChart-xAxisItem-majorGridLines

Configures the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

More documentation is available at [kendo:stockChart-xAxisItem-majorGridLines](stockchart/xaxisitem-majorgridlines).

#### Example

    <kendo:stockChart-xAxisItem>
        <kendo:stockChart-xAxisItem-majorGridLines></kendo:stockChart-xAxisItem-majorGridLines>
    </kendo:stockChart-xAxisItem>

### kendo:stockChart-xAxisItem-majorTicks

The major ticks of the axis.

More documentation is available at [kendo:stockChart-xAxisItem-majorTicks](stockchart/xaxisitem-majorticks).

#### Example

    <kendo:stockChart-xAxisItem>
        <kendo:stockChart-xAxisItem-majorTicks></kendo:stockChart-xAxisItem-majorTicks>
    </kendo:stockChart-xAxisItem>

### kendo:stockChart-xAxisItem-plotBands

The plot bands of the xAxis.

More documentation is available at [kendo:stockChart-xAxisItem-plotBands](stockchart/xaxisitem-plotbands).

#### Example

    <kendo:stockChart-xAxisItem>
        <kendo:stockChart-xAxisItem-plotBands></kendo:stockChart-xAxisItem-plotBands>
    </kendo:stockChart-xAxisItem>

### kendo:stockChart-xAxisItem-title

The title of the value axis.

More documentation is available at [kendo:stockChart-xAxisItem-title](stockchart/xaxisitem-title).

#### Example

    <kendo:stockChart-xAxisItem>
        <kendo:stockChart-xAxisItem-title></kendo:stockChart-xAxisItem-title>
    </kendo:stockChart-xAxisItem>

