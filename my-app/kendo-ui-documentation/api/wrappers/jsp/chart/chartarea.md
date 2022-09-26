---
title: chart-chartArea
slug: jsp-chart-chartArea
tags: api, java
publish: true
---

# \<kendo:chart-chartArea\>

The chart area configuration options. Represents the entire visible area of the chart.

#### Example
    <kendo:chart>
        <kendo:chart-chartArea></kendo:chart-chartArea>
    </kendo:chart>

## Configuration Attributes

### background `java.lang.String`

The background color of the chart area. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-chartArea background="background">
    </kendo:chart-chartArea>

### height `float`

The height of the chart area.

#### Example
    <kendo:chart-chartArea height="height">
    </kendo:chart-chartArea>

### margin `float`

The margin of the chart area. A numeric value will set all margins. Further configuration is available via [kendo:chart-chartArea-margin](#kendo-chart-chartArea-margin). 

#### Example
    <kendo:chart-chartArea margin="margin">
    </kendo:chart-chartArea>

### opacity `float`

The background opacity of the chart area. By default the background is opaque.

#### Example
    <kendo:chart-chartArea opacity="opacity">
    </kendo:chart-chartArea>

### width `float`

The width of the chart area.

#### Example
    <kendo:chart-chartArea width="width">
    </kendo:chart-chartArea>


##  Configuration JSP Tags

### kendo:chart-chartArea-border

The border of the chart area.

More documentation is available at [kendo:chart-chartArea-border](chart/chartarea-border).

#### Example

    <kendo:chart-chartArea>
        <kendo:chart-chartArea-border></kendo:chart-chartArea-border>
    </kendo:chart-chartArea>

### kendo:chart-chartArea-margin

The margin of the chart area. A numeric value will set all margins.

More documentation is available at [kendo:chart-chartArea-margin](chart/chartarea-margin).

#### Example

    <kendo:chart-chartArea>
        <kendo:chart-chartArea-margin></kendo:chart-chartArea-margin>
    </kendo:chart-chartArea>

