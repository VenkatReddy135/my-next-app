---
title: stockChart-valueAxisItem
slug: jsp-stockChart-valueAxisItem
tags: api, java
publish: true
---

# \<kendo:stockChart-valueAxisItem\>

The value axis configuration options.

#### Example
    <kendo:stockChart-valueAxis>
        <kendo:stockChart-valueAxisItem></kendo:stockChart-valueAxisItem>
    </kendo:stockChart-valueAxis>

## Configuration Attributes

### axisCrossingValue `java.lang.Object`

Value at which the category axis crosses this axis. (Only for object)Value indicies at which the category axes cross the value axis. (Only for array)Date at which the category axis crosses this axis. (Only for date)

#### Example
    <kendo:stockChart-valueAxisItem axisCrossingValue="axisCrossingValue">
    </kendo:stockChart-valueAxisItem>

### color `java.lang.String`

Color to apply to all axis elements.
Individual color settings for line and labels take priority. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:stockChart-valueAxisItem color="color">
    </kendo:stockChart-valueAxisItem>

### majorUnit `float`

The interval between major divisions.

#### Example
    <kendo:stockChart-valueAxisItem majorUnit="majorUnit">
    </kendo:stockChart-valueAxisItem>

### max `float`

The maximum value of the axis.
This is often used in combination with the min configuration option.

#### Example
    <kendo:stockChart-valueAxisItem max="max">
    </kendo:stockChart-valueAxisItem>

### min `float`

The minimum value of the axis.
This is often used in combination with the max configuration option.

#### Example
    <kendo:stockChart-valueAxisItem min="min">
    </kendo:stockChart-valueAxisItem>

### minorUnit `float`

The interval between minor divisions.
It defaults to 1/5th of the majorUnit.

#### Example
    <kendo:stockChart-valueAxisItem minorUnit="minorUnit">
    </kendo:stockChart-valueAxisItem>

### name `java.lang.Object`

The unique axis name.

#### Example
    <kendo:stockChart-valueAxisItem name="name">
    </kendo:stockChart-valueAxisItem>

### narrowRange `boolean`

Prevents the automatic axis range from snapping to 0.

#### Example
    <kendo:stockChart-valueAxisItem narrowRange="narrowRange">
    </kendo:stockChart-valueAxisItem>

### pane `java.lang.String`

The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.

#### Example
    <kendo:stockChart-valueAxisItem pane="pane">
    </kendo:stockChart-valueAxisItem>

### reverse `boolean`

Reverses the axis direction -
values increase from right to left and from top to bottom.

#### Example
    <kendo:stockChart-valueAxisItem reverse="reverse">
    </kendo:stockChart-valueAxisItem>

### visible `boolean`

The visibility of the axis.

#### Example
    <kendo:stockChart-valueAxisItem visible="visible">
    </kendo:stockChart-valueAxisItem>


##  Configuration JSP Tags

### kendo:stockChart-valueAxisItem-crosshair

The crosshair configuration options.

More documentation is available at [kendo:stockChart-valueAxisItem-crosshair](stockchart/valueaxisitem-crosshair).

#### Example

    <kendo:stockChart-valueAxisItem>
        <kendo:stockChart-valueAxisItem-crosshair></kendo:stockChart-valueAxisItem-crosshair>
    </kendo:stockChart-valueAxisItem>

### kendo:stockChart-valueAxisItem-labels

Configures the axis labels.

More documentation is available at [kendo:stockChart-valueAxisItem-labels](stockchart/valueaxisitem-labels).

#### Example

    <kendo:stockChart-valueAxisItem>
        <kendo:stockChart-valueAxisItem-labels></kendo:stockChart-valueAxisItem-labels>
    </kendo:stockChart-valueAxisItem>

### kendo:stockChart-valueAxisItem-line

Configures the axis line. This will also affect the major and minor ticks, but not the grid lines.

More documentation is available at [kendo:stockChart-valueAxisItem-line](stockchart/valueaxisitem-line).

#### Example

    <kendo:stockChart-valueAxisItem>
        <kendo:stockChart-valueAxisItem-line></kendo:stockChart-valueAxisItem-line>
    </kendo:stockChart-valueAxisItem>

### kendo:stockChart-valueAxisItem-majorGridLines

Configures the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

More documentation is available at [kendo:stockChart-valueAxisItem-majorGridLines](stockchart/valueaxisitem-majorgridlines).

#### Example

    <kendo:stockChart-valueAxisItem>
        <kendo:stockChart-valueAxisItem-majorGridLines></kendo:stockChart-valueAxisItem-majorGridLines>
    </kendo:stockChart-valueAxisItem>

### kendo:stockChart-valueAxisItem-majorTicks

The major ticks of the axis.

More documentation is available at [kendo:stockChart-valueAxisItem-majorTicks](stockchart/valueaxisitem-majorticks).

#### Example

    <kendo:stockChart-valueAxisItem>
        <kendo:stockChart-valueAxisItem-majorTicks></kendo:stockChart-valueAxisItem-majorTicks>
    </kendo:stockChart-valueAxisItem>

### kendo:stockChart-valueAxisItem-minorGridLines

Configures the minor grid lines.  These are the lines that are an extension of the minor ticks through the

More documentation is available at [kendo:stockChart-valueAxisItem-minorGridLines](stockchart/valueaxisitem-minorgridlines).

#### Example

    <kendo:stockChart-valueAxisItem>
        <kendo:stockChart-valueAxisItem-minorGridLines></kendo:stockChart-valueAxisItem-minorGridLines>
    </kendo:stockChart-valueAxisItem>

### kendo:stockChart-valueAxisItem-minorTicks

The minor ticks of the axis.

More documentation is available at [kendo:stockChart-valueAxisItem-minorTicks](stockchart/valueaxisitem-minorticks).

#### Example

    <kendo:stockChart-valueAxisItem>
        <kendo:stockChart-valueAxisItem-minorTicks></kendo:stockChart-valueAxisItem-minorTicks>
    </kendo:stockChart-valueAxisItem>

### kendo:stockChart-valueAxisItem-notes

The value axis notes configuration.

More documentation is available at [kendo:stockChart-valueAxisItem-notes](stockchart/valueaxisitem-notes).

#### Example

    <kendo:stockChart-valueAxisItem>
        <kendo:stockChart-valueAxisItem-notes></kendo:stockChart-valueAxisItem-notes>
    </kendo:stockChart-valueAxisItem>

### kendo:stockChart-valueAxisItem-plotBands

The plot bands of the value axis.

More documentation is available at [kendo:stockChart-valueAxisItem-plotBands](stockchart/valueaxisitem-plotbands).

#### Example

    <kendo:stockChart-valueAxisItem>
        <kendo:stockChart-valueAxisItem-plotBands></kendo:stockChart-valueAxisItem-plotBands>
    </kendo:stockChart-valueAxisItem>

### kendo:stockChart-valueAxisItem-title

The title of the value axis.

More documentation is available at [kendo:stockChart-valueAxisItem-title](stockchart/valueaxisitem-title).

#### Example

    <kendo:stockChart-valueAxisItem>
        <kendo:stockChart-valueAxisItem-title></kendo:stockChart-valueAxisItem-title>
    </kendo:stockChart-valueAxisItem>

