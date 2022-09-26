---
title: sparkline-seriesItem-highlight
slug: jsp-sparkline-seriesItem-highlight
tags: api, java
publish: true
---

# \<kendo:sparkline-seriesItem-highlight\>

Configures the appearance of highlighted points.

#### Example
    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-highlight></kendo:sparkline-seriesItem-highlight>
    </kendo:sparkline-seriesItem>

## Configuration Attributes

### color `java.lang.String`

The highlight color.** Available only for pie series **

#### Example
    <kendo:sparkline-seriesItem-highlight color="color">
    </kendo:sparkline-seriesItem-highlight>

### opacity `float`

The opacity of the highlighted points.** Applicable to pie series. **

#### Example
    <kendo:sparkline-seriesItem-highlight opacity="opacity">
    </kendo:sparkline-seriesItem-highlight>

### visible `boolean`

A value indicating if the series points should be highlighted.

#### Example
    <kendo:sparkline-seriesItem-highlight visible="visible">
    </kendo:sparkline-seriesItem-highlight>


##  Configuration JSP Tags

### kendo:sparkline-seriesItem-highlight-border

The border of highlighted points. The color is computed automatically from the base point color.** Applicable to pie series. **

More documentation is available at [kendo:sparkline-seriesItem-highlight-border](sparkline/seriesitem-highlight-border).

#### Example

    <kendo:sparkline-seriesItem-highlight>
        <kendo:sparkline-seriesItem-highlight-border></kendo:sparkline-seriesItem-highlight-border>
    </kendo:sparkline-seriesItem-highlight>

