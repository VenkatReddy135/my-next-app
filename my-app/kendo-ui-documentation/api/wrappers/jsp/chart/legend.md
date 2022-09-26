---
title: chart-legend
slug: jsp-chart-legend
tags: api, java
publish: true
---

# \<kendo:chart-legend\>

The chart legend configuration options.

#### Example
    <kendo:chart>
        <kendo:chart-legend></kendo:chart-legend>
    </kendo:chart>

## Configuration Attributes

### background `java.lang.String`

The background color of the legend. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-legend background="background">
    </kendo:chart-legend>

### margin `float`

The margin of the chart legend. A numeric value will set all paddings. Further configuration is available via [kendo:chart-legend-margin](#kendo-chart-legend-margin). 

#### Example
    <kendo:chart-legend margin="margin">
    </kendo:chart-legend>

### offsetX `float`

The X offset of the chart legend. The offset is relative to the default position of the legend.
For instance, a value of 20 will move the legend 20 pixels to the right of its initial position.
A negative value will move the legend to the left of its current position.

#### Example
    <kendo:chart-legend offsetX="offsetX">
    </kendo:chart-legend>

### offsetY `float`

The Y offset of the chart legend.  The offset is relative to the current position of the legend.
For instance, a value of 20 will move the legend 20 pixels down from its initial position.
A negative value will move the legend upwards from its current position.

#### Example
    <kendo:chart-legend offsetY="offsetY">
    </kendo:chart-legend>

### position `java.lang.String`

The positions of the chart legend.The supported values are:

#### Example
    <kendo:chart-legend position="position">
    </kendo:chart-legend>

### visible `boolean`

If set to true the chart will display the legend. By default the chart legend is visible.

#### Example
    <kendo:chart-legend visible="visible">
    </kendo:chart-legend>


##  Configuration JSP Tags

### kendo:chart-legend-border

The border of the legend.

More documentation is available at [kendo:chart-legend-border](chart/legend-border).

#### Example

    <kendo:chart-legend>
        <kendo:chart-legend-border></kendo:chart-legend-border>
    </kendo:chart-legend>

### kendo:chart-legend-inactiveItems

The chart inactive legend items configuration.

More documentation is available at [kendo:chart-legend-inactiveItems](chart/legend-inactiveitems).

#### Example

    <kendo:chart-legend>
        <kendo:chart-legend-inactiveItems></kendo:chart-legend-inactiveItems>
    </kendo:chart-legend>

### kendo:chart-legend-labels

The chart legend label configuration.

More documentation is available at [kendo:chart-legend-labels](chart/legend-labels).

#### Example

    <kendo:chart-legend>
        <kendo:chart-legend-labels></kendo:chart-legend-labels>
    </kendo:chart-legend>

### kendo:chart-legend-margin

The margin of the chart legend. A numeric value will set all paddings.

More documentation is available at [kendo:chart-legend-margin](chart/legend-margin).

#### Example

    <kendo:chart-legend>
        <kendo:chart-legend-margin></kendo:chart-legend-margin>
    </kendo:chart-legend>

