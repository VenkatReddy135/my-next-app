---
title: radialGauge-scale
slug: jsp-radialGauge-scale
tags: api, java
publish: true
---

# \<kendo:radialGauge-scale\>

Configures the scale.

#### Example
    <kendo:radialGauge>
        <kendo:radialGauge-scale></kendo:radialGauge-scale>
    </kendo:radialGauge>

## Configuration Attributes

### endAngle `float`

The end angle of the gauge.
The gauge is rendered clockwise(0 degrees are the 180 degrees in the polar coordinat system)

#### Example
    <kendo:radialGauge-scale endAngle="endAngle">
    </kendo:radialGauge-scale>

### majorUnit `float`

The interval between major divisions.

#### Example
    <kendo:radialGauge-scale majorUnit="majorUnit">
    </kendo:radialGauge-scale>

### max `float`

The maximum value of the scale.

#### Example
    <kendo:radialGauge-scale max="max">
    </kendo:radialGauge-scale>

### min `float`

The minimum value of the scale.

#### Example
    <kendo:radialGauge-scale min="min">
    </kendo:radialGauge-scale>

### minorUnit `float`

The interval between minor divisions.

#### Example
    <kendo:radialGauge-scale minorUnit="minorUnit">
    </kendo:radialGauge-scale>

### rangeDistance `float`

The distance from the range indicators to the ticks.

#### Example
    <kendo:radialGauge-scale rangeDistance="rangeDistance">
    </kendo:radialGauge-scale>

### rangePlaceholderColor `java.lang.String`

The default color for the ranges.

#### Example
    <kendo:radialGauge-scale rangePlaceholderColor="rangePlaceholderColor">
    </kendo:radialGauge-scale>

### rangeSize `float`

The width of the range indicators.

#### Example
    <kendo:radialGauge-scale rangeSize="rangeSize">
    </kendo:radialGauge-scale>

### reverse `boolean`

Reverses the scale direction - values are increase anticlockwise.

#### Example
    <kendo:radialGauge-scale reverse="reverse">
    </kendo:radialGauge-scale>

### startAngle `float`

The start angle of the gauge.
The gauge is rendered clockwise(0 degrees are the 180 degrees in the polar coordinat system)

#### Example
    <kendo:radialGauge-scale startAngle="startAngle">
    </kendo:radialGauge-scale>


##  Configuration JSP Tags

### kendo:radialGauge-scale-labels

Configures the scale labels.

More documentation is available at [kendo:radialGauge-scale-labels](radialgauge/scale-labels).

#### Example

    <kendo:radialGauge-scale>
        <kendo:radialGauge-scale-labels></kendo:radialGauge-scale-labels>
    </kendo:radialGauge-scale>

### kendo:radialGauge-scale-majorTicks

Configures the scale major ticks.

More documentation is available at [kendo:radialGauge-scale-majorTicks](radialgauge/scale-majorticks).

#### Example

    <kendo:radialGauge-scale>
        <kendo:radialGauge-scale-majorTicks></kendo:radialGauge-scale-majorTicks>
    </kendo:radialGauge-scale>

### kendo:radialGauge-scale-minorTicks

Configures the scale minor ticks.

More documentation is available at [kendo:radialGauge-scale-minorTicks](radialgauge/scale-minorticks).

#### Example

    <kendo:radialGauge-scale>
        <kendo:radialGauge-scale-minorTicks></kendo:radialGauge-scale-minorTicks>
    </kendo:radialGauge-scale>

### kendo:radialGauge-scale-ranges

The ranges of the scale.

More documentation is available at [kendo:radialGauge-scale-ranges](radialgauge/scale-ranges).

#### Example

    <kendo:radialGauge-scale>
        <kendo:radialGauge-scale-ranges></kendo:radialGauge-scale-ranges>
    </kendo:radialGauge-scale>

