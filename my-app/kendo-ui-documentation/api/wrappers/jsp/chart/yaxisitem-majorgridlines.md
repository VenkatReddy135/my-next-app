---
title: chart-yAxisItem-majorGridLines
slug: jsp-chart-yAxisItem-majorGridLines
tags: api, java
publish: true
---

# \<kendo:chart-yAxisItem-majorGridLines\>

The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

#### Example
    <kendo:chart-yAxisItem>
        <kendo:chart-yAxisItem-majorGridLines></kendo:chart-yAxisItem-majorGridLines>
    </kendo:chart-yAxisItem>

## Configuration Attributes

### color `java.lang.String`

The color of the lines. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-yAxisItem-majorGridLines color="color">
    </kendo:chart-yAxisItem-majorGridLines>

### dashType `java.lang.String`

The dash type of the line.The following dash types are supported:

#### Example
    <kendo:chart-yAxisItem-majorGridLines dashType="dashType">
    </kendo:chart-yAxisItem-majorGridLines>

### visible `boolean`

If set to true the chart will display the x major grid liness. By default the x major grid liness are visible.

#### Example
    <kendo:chart-yAxisItem-majorGridLines visible="visible">
    </kendo:chart-yAxisItem-majorGridLines>

### width `float`

The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.
#### Example - set the scatter chart x major grid lines width

#### Example
    <kendo:chart-yAxisItem-majorGridLines width="width">
    </kendo:chart-yAxisItem-majorGridLines>

