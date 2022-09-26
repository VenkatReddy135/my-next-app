---
title: sparkline-categoryAxisItem-minorGridLines
slug: jsp-sparkline-categoryAxisItem-minorGridLines
tags: api, java
publish: true
---

# \<kendo:sparkline-categoryAxisItem-minorGridLines\>

Configures the minor grid lines.  These are the lines that are an extension of the minor ticks through
the body of the chart.Note that minor grid lines are not visible by default, therefore none of these settings will take effect with the minor grid lines visibility being set to true.

#### Example
    <kendo:sparkline-categoryAxisItem>
        <kendo:sparkline-categoryAxisItem-minorGridLines></kendo:sparkline-categoryAxisItem-minorGridLines>
    </kendo:sparkline-categoryAxisItem>

## Configuration Attributes

### color `java.lang.String`

The color of the lines. Any valid CSS color string will work here, including hex and
rgb.Note that this setting has no effect if the visibility of the minor
grid lines is not set to true.

#### Example
    <kendo:sparkline-categoryAxisItem-minorGridLines color="color">
    </kendo:sparkline-categoryAxisItem-minorGridLines>

### dashType `java.lang.String`

The dash type of the grid lines.

#### Example
    <kendo:sparkline-categoryAxisItem-minorGridLines dashType="dashType">
    </kendo:sparkline-categoryAxisItem-minorGridLines>

### visible `boolean`

The visibility of the lines.

#### Example
    <kendo:sparkline-categoryAxisItem-minorGridLines visible="visible">
    </kendo:sparkline-categoryAxisItem-minorGridLines>

### width `float`

The width of the lines.Note that this setting has no effect if the visibility of the minor
grid lines is not set to true.

#### Example
    <kendo:sparkline-categoryAxisItem-minorGridLines width="width">
    </kendo:sparkline-categoryAxisItem-minorGridLines>

