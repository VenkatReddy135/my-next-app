---
title: radialGauge
slug: jsp-radialGauge
tags: api, java
publish: true
---

# \<kendo:radialGauge\>
A JSP wrapper for Kendo UI [RadialGauge](/api/dataviz/radialgauge).

## Configuration Attributes

### renderAs `java.lang.String`

Sets the preferred rendering engine.
If it is not supported by the browser, the Gauge will switch to the first available mode.The supported values are:

#### Example
    <kendo:radialGauge renderAs="renderAs">
    </kendo:radialGauge>

### transitions `boolean`

A value indicating if transition animations should be played.

#### Example
    <kendo:radialGauge transitions="transitions">
    </kendo:radialGauge>


##  Configuration JSP Tags

### kendo:radialGauge-gaugeArea

The gauge area configuration options.
This is the entire visible area of the gauge.

More documentation is available at [kendo:radialGauge-gaugeArea](radialgauge/gaugearea).

#### Example

    <kendo:radialGauge>
        <kendo:radialGauge-gaugeArea></kendo:radialGauge-gaugeArea>
    </kendo:radialGauge>

### kendo:radialGauge-pointer

The pointer configuration options.

More documentation is available at [kendo:radialGauge-pointer](radialgauge/pointer).

#### Example

    <kendo:radialGauge>
        <kendo:radialGauge-pointer></kendo:radialGauge-pointer>
    </kendo:radialGauge>

### kendo:radialGauge-scale

Configures the scale.

More documentation is available at [kendo:radialGauge-scale](radialgauge/scale).

#### Example

    <kendo:radialGauge>
        <kendo:radialGauge-scale></kendo:radialGauge-scale>
    </kendo:radialGauge>

