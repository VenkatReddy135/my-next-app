---
title: stockChart-legend
slug: jsp-stockChart-legend
tags: api, java
publish: true
---

# \<kendo:stockChart-legend\>

The chart legend configuration options.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-legend></kendo:stockChart-legend>
    </kendo:stockChart>

## Configuration Attributes

### background `java.lang.String`

The background color of the legend. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:stockChart-legend background="background">
    </kendo:stockChart-legend>

### margin `java.lang.Object`

The margin of the legend.

#### Example
    <kendo:stockChart-legend margin="margin">
    </kendo:stockChart-legend>

### offsetX `float`

The X offset from its position.  The offset is relative to the current position of the legend.
For instance, a value of 20 will move the legend 20 pixels to the right of it's initial position.  A negative value will move the legend
to the left of the current position.

#### Example
    <kendo:stockChart-legend offsetX="offsetX">
    </kendo:stockChart-legend>

### offsetY `float`

The Y offset from its position.  The offset is relative to the current position of the legend.
For instance, a value of 20 will move the legend 20 pixels down from it's initial position.  A negative value will move the legend
upwards from the current position.

#### Example
    <kendo:stockChart-legend offsetY="offsetY">
    </kendo:stockChart-legend>

### padding `java.lang.Object`

The padding of the legend.

#### Example
    <kendo:stockChart-legend padding="padding">
    </kendo:stockChart-legend>

### position `java.lang.String`

The positions of the legend.

#### Example
    <kendo:stockChart-legend position="position">
    </kendo:stockChart-legend>

### visible `boolean`

The visibility of the legend.

#### Example
    <kendo:stockChart-legend visible="visible">
    </kendo:stockChart-legend>


##  Configuration JSP Tags

### kendo:stockChart-legend-border

The border of the legend.

More documentation is available at [kendo:stockChart-legend-border](stockchart/legend-border).

#### Example

    <kendo:stockChart-legend>
        <kendo:stockChart-legend-border></kendo:stockChart-legend-border>
    </kendo:stockChart-legend>

### kendo:stockChart-legend-inactiveItems

Configures the legend inactive items.

More documentation is available at [kendo:stockChart-legend-inactiveItems](stockchart/legend-inactiveitems).

#### Example

    <kendo:stockChart-legend>
        <kendo:stockChart-legend-inactiveItems></kendo:stockChart-legend-inactiveItems>
    </kendo:stockChart-legend>

### kendo:stockChart-legend-labels

Configures the legend labels.

More documentation is available at [kendo:stockChart-legend-labels](stockchart/legend-labels).

#### Example

    <kendo:stockChart-legend>
        <kendo:stockChart-legend-labels></kendo:stockChart-legend-labels>
    </kendo:stockChart-legend>

