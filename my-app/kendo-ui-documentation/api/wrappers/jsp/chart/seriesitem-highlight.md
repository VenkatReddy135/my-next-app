---
title: chart-seriesItem-highlight
slug: jsp-chart-seriesItem-highlight
tags: api, java
publish: true
---

# \<kendo:chart-seriesItem-highlight\>

The chart series highlighting configuration options.

#### Example
    <kendo:chart-seriesItem>
        <kendo:chart-seriesItem-highlight></kendo:chart-seriesItem-highlight>
    </kendo:chart-seriesItem>

## Configuration Attributes

### color `java.lang.String`

The highlight color. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-seriesItem-highlight color="color">
    </kendo:chart-seriesItem-highlight>

### opacity `float`

The opacity of the highlighted points.

#### Example
    <kendo:chart-seriesItem-highlight opacity="opacity">
    </kendo:chart-seriesItem-highlight>

### visible `boolean`

If set to true the chart will highlight the series when the user hovers it with the mouse.
By default chart series highlighting is enabled.

#### Example
    <kendo:chart-seriesItem-highlight visible="visible">
    </kendo:chart-seriesItem-highlight>


##  Configuration JSP Tags

### kendo:chart-seriesItem-highlight-border

The border of the highlighted chart series. The color is computed automatically from the base point color.

More documentation is available at [kendo:chart-seriesItem-highlight-border](chart/seriesitem-highlight-border).

#### Example

    <kendo:chart-seriesItem-highlight>
        <kendo:chart-seriesItem-highlight-border></kendo:chart-seriesItem-highlight-border>
    </kendo:chart-seriesItem-highlight>

### kendo:chart-seriesItem-highlight-line

The line of the highlighted chart series. The color is computed automatically from the base point color.

More documentation is available at [kendo:chart-seriesItem-highlight-line](chart/seriesitem-highlight-line).

#### Example

    <kendo:chart-seriesItem-highlight>
        <kendo:chart-seriesItem-highlight-line></kendo:chart-seriesItem-highlight-line>
    </kendo:chart-seriesItem-highlight>

