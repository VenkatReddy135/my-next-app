---
title: chart-yAxisItem-line
slug: jsp-chart-yAxisItem-line
tags: api, java
publish: true
---

# \<kendo:chart-yAxisItem-line\>

The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.

#### Example
    <kendo:chart-yAxisItem>
        <kendo:chart-yAxisItem-line></kendo:chart-yAxisItem-line>
    </kendo:chart-yAxisItem>

## Configuration Attributes

### color `java.lang.String`

The color of the lines. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-yAxisItem-line color="color">
    </kendo:chart-yAxisItem-line>

### dashType `java.lang.String`

The dash type of the line.The following dash types are supported:

#### Example
    <kendo:chart-yAxisItem-line dashType="dashType">
    </kendo:chart-yAxisItem-line>

### visible `boolean`

If set to true the chart will display the y axis lines. By default the y axis lines are visible.

#### Example
    <kendo:chart-yAxisItem-line visible="visible">
    </kendo:chart-yAxisItem-line>

### width `float`

The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.
#### Example - set the scatter chart y axis line width

#### Example
    <kendo:chart-yAxisItem-line width="width">
    </kendo:chart-yAxisItem-line>

