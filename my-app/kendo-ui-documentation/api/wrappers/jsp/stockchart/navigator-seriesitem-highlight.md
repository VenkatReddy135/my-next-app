---
title: stockChart-navigator-seriesItem-highlight
slug: jsp-stockChart-navigator-seriesItem-highlight
tags: api, java
publish: true
---

# \<kendo:stockChart-navigator-seriesItem-highlight\>

Configures the appearance of highlighted points.** Applicable to candlestick and ohlc series. **

#### Example
    <kendo:stockChart-navigator-seriesItem>
        <kendo:stockChart-navigator-seriesItem-highlight></kendo:stockChart-navigator-seriesItem-highlight>
    </kendo:stockChart-navigator-seriesItem>

## Configuration Attributes

### color `java.lang.String`

The highlight color.** Available only for pie series **

#### Example
    <kendo:stockChart-navigator-seriesItem-highlight color="color">
    </kendo:stockChart-navigator-seriesItem-highlight>

### opacity `float`

The opacity of the highlighted points.

#### Example
    <kendo:stockChart-navigator-seriesItem-highlight opacity="opacity">
    </kendo:stockChart-navigator-seriesItem-highlight>

### visible `boolean`

A value indicating if the series points should be highlighted.

#### Example
    <kendo:stockChart-navigator-seriesItem-highlight visible="visible">
    </kendo:stockChart-navigator-seriesItem-highlight>


##  Configuration JSP Tags

### kendo:stockChart-navigator-seriesItem-highlight-border

The border of highlighted points. The color is computed automatically from the base point color.

More documentation is available at [kendo:stockChart-navigator-seriesItem-highlight-border](stockchart/navigator-seriesitem-highlight-border).

#### Example

    <kendo:stockChart-navigator-seriesItem-highlight>
        <kendo:stockChart-navigator-seriesItem-highlight-border></kendo:stockChart-navigator-seriesItem-highlight-border>
    </kendo:stockChart-navigator-seriesItem-highlight>

### kendo:stockChart-navigator-seriesItem-highlight-line

Line options for highlighted points. The color is computed automatically from the base point color.** Available only for candlestick series **

More documentation is available at [kendo:stockChart-navigator-seriesItem-highlight-line](stockchart/navigator-seriesitem-highlight-line).

#### Example

    <kendo:stockChart-navigator-seriesItem-highlight>
        <kendo:stockChart-navigator-seriesItem-highlight-line></kendo:stockChart-navigator-seriesItem-highlight-line>
    </kendo:stockChart-navigator-seriesItem-highlight>

