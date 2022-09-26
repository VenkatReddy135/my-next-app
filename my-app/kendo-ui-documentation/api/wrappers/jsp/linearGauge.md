---
title: linearGauge
slug: jsp-linearGauge
tags: api, java
publish: true
---

# \<kendo:linearGauge\>
A JSP wrapper for Kendo UI [LinearGauge](/api/dataviz/lineargauge).

## Configuration Attributes

### renderAs `java.lang.String`

Sets the preferred rendering engine.
If it is not supported by the browser, the Gauge will switch to the first available mode.The supported values are:

#### Example
    <kendo:linearGauge renderAs="renderAs">
    </kendo:linearGauge>

### transitions `boolean`

A value indicating if transition animations should be played.

#### Example
    <kendo:linearGauge transitions="transitions">
    </kendo:linearGauge>


##  Configuration JSP Tags

### kendo:linearGauge-gaugeArea

The gauge area configuration options.
This is the entire visible area of the gauge.

More documentation is available at [kendo:linearGauge-gaugeArea](lineargauge/gaugearea).

#### Example

    <kendo:linearGauge>
        <kendo:linearGauge-gaugeArea></kendo:linearGauge-gaugeArea>
    </kendo:linearGauge>

### kendo:linearGauge-pointer

The pointer configuration options.

More documentation is available at [kendo:linearGauge-pointer](lineargauge/pointer).

#### Example

    <kendo:linearGauge>
        <kendo:linearGauge-pointer></kendo:linearGauge-pointer>
    </kendo:linearGauge>

### kendo:linearGauge-scale

Configures the scale.

More documentation is available at [kendo:linearGauge-scale](lineargauge/scale).

#### Example

    <kendo:linearGauge>
        <kendo:linearGauge-scale></kendo:linearGauge-scale>
    </kendo:linearGauge>

