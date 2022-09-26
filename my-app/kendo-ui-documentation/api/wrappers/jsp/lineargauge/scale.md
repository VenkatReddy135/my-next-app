---
title: linearGauge-scale
slug: jsp-linearGauge-scale
tags: api, java
publish: true
---

# \<kendo:linearGauge-scale\>

Configures the scale.

#### Example
    <kendo:linearGauge>
        <kendo:linearGauge-scale></kendo:linearGauge-scale>
    </kendo:linearGauge>

## Configuration Attributes

### majorUnit `float`

The interval between major divisions.

#### Example
    <kendo:linearGauge-scale majorUnit="majorUnit">
    </kendo:linearGauge-scale>

### max `float`

The maximum value of the scale.

#### Example
    <kendo:linearGauge-scale max="max">
    </kendo:linearGauge-scale>

### min `float`

The minimum value of the scale.

#### Example
    <kendo:linearGauge-scale min="min">
    </kendo:linearGauge-scale>

### minorUnit `float`

The interval between minor divisions.

#### Example
    <kendo:linearGauge-scale minorUnit="minorUnit">
    </kendo:linearGauge-scale>

### mirror `boolean`

Mirrors the scale labels and ticks.
If the labels are normally on the left side of the scale, mirroring the scale will render them to the right.

#### Example
    <kendo:linearGauge-scale mirror="mirror">
    </kendo:linearGauge-scale>

### rangePlaceholderColor `java.lang.String`

The default color for the ranges.

#### Example
    <kendo:linearGauge-scale rangePlaceholderColor="rangePlaceholderColor">
    </kendo:linearGauge-scale>

### reverse `boolean`

Reverses the axis direction - values increase from right to left and from top to bottom.

#### Example
    <kendo:linearGauge-scale reverse="reverse">
    </kendo:linearGauge-scale>

### vertical `boolean`

The position of the gauge.

#### Example
    <kendo:linearGauge-scale vertical="vertical">
    </kendo:linearGauge-scale>


##  Configuration JSP Tags

### kendo:linearGauge-scale-labels

Configures the scale labels.

More documentation is available at [kendo:linearGauge-scale-labels](lineargauge/scale-labels).

#### Example

    <kendo:linearGauge-scale>
        <kendo:linearGauge-scale-labels></kendo:linearGauge-scale-labels>
    </kendo:linearGauge-scale>

### kendo:linearGauge-scale-line

Configures the axis line.

More documentation is available at [kendo:linearGauge-scale-line](lineargauge/scale-line).

#### Example

    <kendo:linearGauge-scale>
        <kendo:linearGauge-scale-line></kendo:linearGauge-scale-line>
    </kendo:linearGauge-scale>

### kendo:linearGauge-scale-majorTicks

Configures the scale major ticks.

More documentation is available at [kendo:linearGauge-scale-majorTicks](lineargauge/scale-majorticks).

#### Example

    <kendo:linearGauge-scale>
        <kendo:linearGauge-scale-majorTicks></kendo:linearGauge-scale-majorTicks>
    </kendo:linearGauge-scale>

### kendo:linearGauge-scale-minorTicks

Configures the scale minor ticks.

More documentation is available at [kendo:linearGauge-scale-minorTicks](lineargauge/scale-minorticks).

#### Example

    <kendo:linearGauge-scale>
        <kendo:linearGauge-scale-minorTicks></kendo:linearGauge-scale-minorTicks>
    </kendo:linearGauge-scale>

### kendo:linearGauge-scale-ranges

The ranges of the scale.

More documentation is available at [kendo:linearGauge-scale-ranges](lineargauge/scale-ranges).

#### Example

    <kendo:linearGauge-scale>
        <kendo:linearGauge-scale-ranges></kendo:linearGauge-scale-ranges>
    </kendo:linearGauge-scale>

