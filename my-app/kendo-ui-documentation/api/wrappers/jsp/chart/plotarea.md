---
title: chart-plotArea
slug: jsp-chart-plotArea
tags: api, java
publish: true
---

# \<kendo:chart-plotArea\>

The plot area configuration options. The plot area is the area which displays the series.

#### Example
    <kendo:chart>
        <kendo:chart-plotArea></kendo:chart-plotArea>
    </kendo:chart>

## Configuration Attributes

### background `java.lang.String`

The background color of the chart plot area. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-plotArea background="background">
    </kendo:chart-plotArea>

### margin `float`

The margin of the chart plot area. A numeric value will set all margins. Further configuration is available via [kendo:chart-plotArea-margin](#kendo-chart-plotArea-margin). 

#### Example
    <kendo:chart-plotArea margin="margin">
    </kendo:chart-plotArea>

### opacity `float`

The background opacity of the chart plot area. By default the background is opaque.

#### Example
    <kendo:chart-plotArea opacity="opacity">
    </kendo:chart-plotArea>

### padding `float`

The padding of the chart plot area. A numeric value will set all paddings.The default padding for pie, donut, radar and polar charts is proportional of the chart size. Further configuration is available via [kendo:chart-plotArea-padding](#kendo-chart-plotArea-padding). 

#### Example
    <kendo:chart-plotArea padding="padding">
    </kendo:chart-plotArea>


##  Configuration JSP Tags

### kendo:chart-plotArea-border

The border of the chart plot area.

More documentation is available at [kendo:chart-plotArea-border](chart/plotarea-border).

#### Example

    <kendo:chart-plotArea>
        <kendo:chart-plotArea-border></kendo:chart-plotArea-border>
    </kendo:chart-plotArea>

### kendo:chart-plotArea-margin

The margin of the chart plot area. A numeric value will set all margins.

More documentation is available at [kendo:chart-plotArea-margin](chart/plotarea-margin).

#### Example

    <kendo:chart-plotArea>
        <kendo:chart-plotArea-margin></kendo:chart-plotArea-margin>
    </kendo:chart-plotArea>

### kendo:chart-plotArea-padding

The padding of the chart plot area. A numeric value will set all paddings.The default padding for pie, donut, radar and polar charts is proportional of the chart size.

More documentation is available at [kendo:chart-plotArea-padding](chart/plotarea-padding).

#### Example

    <kendo:chart-plotArea>
        <kendo:chart-plotArea-padding></kendo:chart-plotArea-padding>
    </kendo:chart-plotArea>

