---
title: stockChart-categoryAxisItem-minorGridLines
slug: jsp-stockChart-categoryAxisItem-minorGridLines
tags: api, java
publish: true
---

# \<kendo:stockChart-categoryAxisItem-minorGridLines\>

Configures the minor grid lines.  These are the lines that are an extension of the minor ticks through
the body of the chart.Note that minor grid lines are not visible by default, therefore none of these settings will take effect with the minor grid lines visibility being set to true.

#### Example
    <kendo:stockChart-categoryAxisItem>
        <kendo:stockChart-categoryAxisItem-minorGridLines></kendo:stockChart-categoryAxisItem-minorGridLines>
    </kendo:stockChart-categoryAxisItem>

## Configuration Attributes

### color `java.lang.String`

The color of the lines. Any valid CSS color string will work here, including hex and
rgb.Note that this setting has no effect if the visibility of the minor
grid lines is not set to true.

#### Example
    <kendo:stockChart-categoryAxisItem-minorGridLines color="color">
    </kendo:stockChart-categoryAxisItem-minorGridLines>

### dashType `java.lang.String`

The dash type of the grid lines.

#### Example
    <kendo:stockChart-categoryAxisItem-minorGridLines dashType="dashType">
    </kendo:stockChart-categoryAxisItem-minorGridLines>

### visible `boolean`

The visibility of the lines.

#### Example
    <kendo:stockChart-categoryAxisItem-minorGridLines visible="visible">
    </kendo:stockChart-categoryAxisItem-minorGridLines>

### width `float`

The width of the lines.Note that this setting has no effect if the visibility of the minor
grid lines is not set to true.

#### Example
    <kendo:stockChart-categoryAxisItem-minorGridLines width="width">
    </kendo:stockChart-categoryAxisItem-minorGridLines>

