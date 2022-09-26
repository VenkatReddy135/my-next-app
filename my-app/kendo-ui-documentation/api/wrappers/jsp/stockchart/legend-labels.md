---
title: stockChart-legend-labels
slug: jsp-stockChart-legend-labels
tags: api, java
publish: true
---

# \<kendo:stockChart-legend-labels\>

Configures the legend labels.

#### Example
    <kendo:stockChart-legend>
        <kendo:stockChart-legend-labels></kendo:stockChart-legend-labels>
    </kendo:stockChart-legend>

## Configuration Attributes

### color `java.lang.String`

The color of the labels.
Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:stockChart-legend-labels color="color">
    </kendo:stockChart-legend-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:stockChart-legend-labels font="font">
    </kendo:stockChart-legend-labels>

### template `java.lang.String`

The template of the labels.
Template variables:
*   text - the text the legend item.
*   series - the data series.

#### Example
    <kendo:stockChart-legend-labels template="template">
    </kendo:stockChart-legend-labels>

