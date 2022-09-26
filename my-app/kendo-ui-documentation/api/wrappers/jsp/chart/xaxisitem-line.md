---
title: chart-xAxisItem-line
slug: jsp-chart-xAxisItem-line
tags: api, java
publish: true
---

# \<kendo:chart-xAxisItem-line\>

The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.

#### Example
    <kendo:chart-xAxisItem>
        <kendo:chart-xAxisItem-line></kendo:chart-xAxisItem-line>
    </kendo:chart-xAxisItem>

## Configuration Attributes

### color `java.lang.String`

The color of the lines. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-xAxisItem-line color="color">
    </kendo:chart-xAxisItem-line>

### dashType `java.lang.String`

The dash type of the line.The following dash types are supported:

#### Example
    <kendo:chart-xAxisItem-line dashType="dashType">
    </kendo:chart-xAxisItem-line>

### visible `boolean`

If set to true the chart will display the x axis lines. By default the x axis lines are visible.

#### Example
    <kendo:chart-xAxisItem-line visible="visible">
    </kendo:chart-xAxisItem-line>

### width `float`

The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.
#### Example - set the scatter chart x axis line width

#### Example
    <kendo:chart-xAxisItem-line width="width">
    </kendo:chart-xAxisItem-line>

