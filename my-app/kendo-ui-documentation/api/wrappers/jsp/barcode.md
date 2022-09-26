---
title: barcode
slug: jsp-barcode
tags: api, java
publish: true
---

# \<kendo:barcode\>
A JSP wrapper for Kendo UI [Barcode](/api/dataviz/barcode).

## Configuration Attributes

### background `java.lang.String`

The background of the barcode area.
Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:barcode background="background">
    </kendo:barcode>

### checksum `boolean`

If set to true the barcode will not display the checksum digit next to the value in the text area.

#### Example
    <kendo:barcode checksum="checksum">
    </kendo:barcode>

### color `java.lang.String`

The color of the bar elements.
Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:barcode color="color">
    </kendo:barcode>

### height `float`

The height of the barcode in pixels.  By default the height is 100.

#### Example
    <kendo:barcode height="height">
    </kendo:barcode>

### renderAs `java.lang.String`

Sets the preferred rendering engine.
If it is not supported by the browser, the Barcode will switch to the first available mode.The supported values are:

#### Example
    <kendo:barcode renderAs="renderAs">
    </kendo:barcode>

### type `java.lang.String`

The symbology (encoding) the barcode will use.The supported values are:

#### Example
    <kendo:barcode type="type">
    </kendo:barcode>

### value `java.lang.String`

The initial value of the Barcode

#### Example
    <kendo:barcode value="value">
    </kendo:barcode>

### width `float`

The width of the barcode in pixels.  By default the width is 300.

#### Example
    <kendo:barcode width="width">
    </kendo:barcode>


##  Configuration JSP Tags

### kendo:barcode-border

The border of the barcode area.

More documentation is available at [kendo:barcode-border](barcode/border).

#### Example

    <kendo:barcode>
        <kendo:barcode-border></kendo:barcode-border>
    </kendo:barcode>

### kendo:barcode-padding

The padding of the barcode.

More documentation is available at [kendo:barcode-padding](barcode/padding).

#### Example

    <kendo:barcode>
        <kendo:barcode-padding></kendo:barcode-padding>
    </kendo:barcode>

### kendo:barcode-text

Can be set to a JavaScript object which represents the text configuration.

More documentation is available at [kendo:barcode-text](barcode/text).

#### Example

    <kendo:barcode>
        <kendo:barcode-text></kendo:barcode-text>
    </kendo:barcode>

