---
title: sparkline-valueAxisItem
slug: jsp-sparkline-valueAxisItem
tags: api, java
publish: true
---

# \<kendo:sparkline-valueAxisItem\>

The value axis configuration options.

#### Example
    <kendo:sparkline-valueAxis>
        <kendo:sparkline-valueAxisItem></kendo:sparkline-valueAxisItem>
    </kendo:sparkline-valueAxis>

## Configuration Attributes

### axisCrossingValue `java.lang.Object`

Value at which the category axis crosses this axis. (Only for object)Value indicies at which the category axes cross the value axis. (Only for array)Date at which the category axis crosses this axis. (Only for date)

#### Example
    <kendo:sparkline-valueAxisItem axisCrossingValue="axisCrossingValue">
    </kendo:sparkline-valueAxisItem>

### color `java.lang.String`

Color to apply to all axis elements.
Individual color settings for line and labels take priority. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:sparkline-valueAxisItem color="color">
    </kendo:sparkline-valueAxisItem>

### majorUnit `float`

The interval between major divisions.

#### Example
    <kendo:sparkline-valueAxisItem majorUnit="majorUnit">
    </kendo:sparkline-valueAxisItem>

### max `float`

The maximum value of the axis.
This is often used in combination with the min configuration option.

#### Example
    <kendo:sparkline-valueAxisItem max="max">
    </kendo:sparkline-valueAxisItem>

### min `float`

The minimum value of the axis.
This is often used in combination with the max configuration option.

#### Example
    <kendo:sparkline-valueAxisItem min="min">
    </kendo:sparkline-valueAxisItem>

### minorUnit `float`

The interval between minor divisions.
It defaults to 1/5th of the majorUnit.

#### Example
    <kendo:sparkline-valueAxisItem minorUnit="minorUnit">
    </kendo:sparkline-valueAxisItem>

### name `java.lang.Object`

The unique axis name.

#### Example
    <kendo:sparkline-valueAxisItem name="name">
    </kendo:sparkline-valueAxisItem>

### narrowRange `boolean`

Prevents the automatic axis range from snapping to 0.

#### Example
    <kendo:sparkline-valueAxisItem narrowRange="narrowRange">
    </kendo:sparkline-valueAxisItem>

### reverse `boolean`

Reverses the axis direction -
values increase from right to left and from top to bottom.

#### Example
    <kendo:sparkline-valueAxisItem reverse="reverse">
    </kendo:sparkline-valueAxisItem>

### visible `boolean`

The visibility of the axis.

#### Example
    <kendo:sparkline-valueAxisItem visible="visible">
    </kendo:sparkline-valueAxisItem>


##  Configuration JSP Tags

### kendo:sparkline-valueAxisItem-crosshair

The crosshair configuration options.

More documentation is available at [kendo:sparkline-valueAxisItem-crosshair](sparkline/valueaxisitem-crosshair).

#### Example

    <kendo:sparkline-valueAxisItem>
        <kendo:sparkline-valueAxisItem-crosshair></kendo:sparkline-valueAxisItem-crosshair>
    </kendo:sparkline-valueAxisItem>

### kendo:sparkline-valueAxisItem-labels

Configures the axis labels.

More documentation is available at [kendo:sparkline-valueAxisItem-labels](sparkline/valueaxisitem-labels).

#### Example

    <kendo:sparkline-valueAxisItem>
        <kendo:sparkline-valueAxisItem-labels></kendo:sparkline-valueAxisItem-labels>
    </kendo:sparkline-valueAxisItem>

### kendo:sparkline-valueAxisItem-line

Configures the axis line. This will also affect the major and minor ticks, but not the grid lines.

More documentation is available at [kendo:sparkline-valueAxisItem-line](sparkline/valueaxisitem-line).

#### Example

    <kendo:sparkline-valueAxisItem>
        <kendo:sparkline-valueAxisItem-line></kendo:sparkline-valueAxisItem-line>
    </kendo:sparkline-valueAxisItem>

### kendo:sparkline-valueAxisItem-majorGridLines

Configures the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

More documentation is available at [kendo:sparkline-valueAxisItem-majorGridLines](sparkline/valueaxisitem-majorgridlines).

#### Example

    <kendo:sparkline-valueAxisItem>
        <kendo:sparkline-valueAxisItem-majorGridLines></kendo:sparkline-valueAxisItem-majorGridLines>
    </kendo:sparkline-valueAxisItem>

### kendo:sparkline-valueAxisItem-majorTicks

The major ticks of the axis.

More documentation is available at [kendo:sparkline-valueAxisItem-majorTicks](sparkline/valueaxisitem-majorticks).

#### Example

    <kendo:sparkline-valueAxisItem>
        <kendo:sparkline-valueAxisItem-majorTicks></kendo:sparkline-valueAxisItem-majorTicks>
    </kendo:sparkline-valueAxisItem>

### kendo:sparkline-valueAxisItem-minorGridLines

Configures the minor grid lines.  These are the lines that are an extension of the minor ticks through the

More documentation is available at [kendo:sparkline-valueAxisItem-minorGridLines](sparkline/valueaxisitem-minorgridlines).

#### Example

    <kendo:sparkline-valueAxisItem>
        <kendo:sparkline-valueAxisItem-minorGridLines></kendo:sparkline-valueAxisItem-minorGridLines>
    </kendo:sparkline-valueAxisItem>

### kendo:sparkline-valueAxisItem-minorTicks

The minor ticks of the axis.

More documentation is available at [kendo:sparkline-valueAxisItem-minorTicks](sparkline/valueaxisitem-minorticks).

#### Example

    <kendo:sparkline-valueAxisItem>
        <kendo:sparkline-valueAxisItem-minorTicks></kendo:sparkline-valueAxisItem-minorTicks>
    </kendo:sparkline-valueAxisItem>

### kendo:sparkline-valueAxisItem-notes

The value axis notes configuration.

More documentation is available at [kendo:sparkline-valueAxisItem-notes](sparkline/valueaxisitem-notes).

#### Example

    <kendo:sparkline-valueAxisItem>
        <kendo:sparkline-valueAxisItem-notes></kendo:sparkline-valueAxisItem-notes>
    </kendo:sparkline-valueAxisItem>

### kendo:sparkline-valueAxisItem-plotBands

The plot bands of the value axis.

More documentation is available at [kendo:sparkline-valueAxisItem-plotBands](sparkline/valueaxisitem-plotbands).

#### Example

    <kendo:sparkline-valueAxisItem>
        <kendo:sparkline-valueAxisItem-plotBands></kendo:sparkline-valueAxisItem-plotBands>
    </kendo:sparkline-valueAxisItem>

### kendo:sparkline-valueAxisItem-title

The title of the value axis.

More documentation is available at [kendo:sparkline-valueAxisItem-title](sparkline/valueaxisitem-title).

#### Example

    <kendo:sparkline-valueAxisItem>
        <kendo:sparkline-valueAxisItem-title></kendo:sparkline-valueAxisItem-title>
    </kendo:sparkline-valueAxisItem>

