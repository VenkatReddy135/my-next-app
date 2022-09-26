---
title: barcode-text
slug: jsp-barcode-text
tags: api, java
publish: true
---

# \<kendo:barcode-text\>

Can be set to a JavaScript object which represents the text configuration.

#### Example
    <kendo:barcode>
        <kendo:barcode-text></kendo:barcode-text>
    </kendo:barcode>

## Configuration Attributes

### color `java.lang.String`

The color of the text. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:barcode-text color="color">
    </kendo:barcode-text>

### font `java.lang.String`

The font of the text.

#### Example
    <kendo:barcode-text font="font">
    </kendo:barcode-text>

### visible `boolean`

If set to false the barcode will not display the value as a text below the barcode lines.

#### Example
    <kendo:barcode-text visible="visible">
    </kendo:barcode-text>


##  Configuration JSP Tags

### kendo:barcode-text-margin

The margin of the text

More documentation is available at [kendo:barcode-text-margin](barcode/text-margin).

#### Example

    <kendo:barcode-text>
        <kendo:barcode-text-margin></kendo:barcode-text-margin>
    </kendo:barcode-text>

