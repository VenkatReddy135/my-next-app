---
title: chart-xAxisItem-majorGridLines
slug: jsp-chart-xAxisItem-majorGridLines
tags: api, java
publish: true
---

# \<kendo:chart-xAxisItem-majorGridLines\>

The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.

#### Example
    <kendo:chart-xAxisItem>
        <kendo:chart-xAxisItem-majorGridLines></kendo:chart-xAxisItem-majorGridLines>
    </kendo:chart-xAxisItem>

## Configuration Attributes

### color `java.lang.String`

The color of the lines. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-xAxisItem-majorGridLines color="color">
    </kendo:chart-xAxisItem-majorGridLines>

### dashType `java.lang.String`

The dash type of the line.The following dash types are supported:

#### Example
    <kendo:chart-xAxisItem-majorGridLines dashType="dashType">
    </kendo:chart-xAxisItem-majorGridLines>

### visible `boolean`

If set to true the chart will display the x major grid liness. By default the x major grid liness are visible.

#### Example
    <kendo:chart-xAxisItem-majorGridLines visible="visible">
    </kendo:chart-xAxisItem-majorGridLines>

### width `float`

The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.
#### Example - set the scatter chart x major grid lines width

#### Example
    <kendo:chart-xAxisItem-majorGridLines width="width">
    </kendo:chart-xAxisItem-majorGridLines>

