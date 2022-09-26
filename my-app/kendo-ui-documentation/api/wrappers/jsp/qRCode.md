---
title: qRCode
slug: jsp-qRCode
tags: api, java
publish: true
---

# \<kendo:qRCode\>
A JSP wrapper for Kendo UI [QRCode](/api/dataviz/qrcode).

## Configuration Attributes

### background `java.lang.String`

The background color of the QR code. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:qRCode background="background">
    </kendo:qRCode>

### color `java.lang.String`

The color of the QR code. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:qRCode color="color">
    </kendo:qRCode>

### encoding `java.lang.String`

The encoding mode used to encode the value.The possible values are:

#### Example
    <kendo:qRCode encoding="encoding">
    </kendo:qRCode>

### errorCorrection `java.lang.String`

The error correction level used to encode the value.The possible values are:

#### Example
    <kendo:qRCode errorCorrection="errorCorrection">
    </kendo:qRCode>

### renderAs `java.lang.String`

Sets the preferred rendering engine.
If it is not supported by the browser, the QRCode will switch to the first available mode.The supported values are:

#### Example
    <kendo:qRCode renderAs="renderAs">
    </kendo:qRCode>

### size `java.lang.Object`

Specifies the size of a QR code in pixels (i.e. "200px"). Numeric values are treated as pixels. If no size is specified, it will be determined from the element width and height. In case the element does not have width or height bigger than zero, a default value of 200 pixels will be used.

#### Example
    <kendo:qRCode size="size">
    </kendo:qRCode>

### value `java.lang.Object`

The value of the QRCode.

#### Example
    <kendo:qRCode value="value">
    </kendo:qRCode>


##  Configuration JSP Tags

### kendo:qRCode-border

The border of the QR code.

More documentation is available at [kendo:qRCode-border](qrcode/border).

#### Example

    <kendo:qRCode>
        <kendo:qRCode-border></kendo:qRCode-border>
    </kendo:qRCode>

