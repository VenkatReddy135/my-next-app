---
title: kendo.Color
meta_title: API Reference for Kendo Color
meta_description: Documentation how to get started with the kendo.Color object. Find examples and guidelines for methods, fields and events of kendo.Color.
slug: api-framework-color
tags: api,framework
publish: true
---

# kendo.Color

The `Color` object provides a representation of colors, with a set of utility functions.

## Methods

### diff

Computes the relative luminance between two colors.

#### Returns

`Number` The relative luminance.

#### Example

    <script>
    var red = kendo.parseColor("#ff0000");

    var crimson = kendo.parseColor("#dc143c");
    var pink = kendo.parseColor("#ffc0cb");
    var white = kendo.parseColor("#ffffff");

    console.log(red.diff(crimson)); // logs 17.118
    console.log(red.diff(pink));    // logs 115.459
    console.log(red.diff(white));   // logs 153.042
    </script>

### equals

Compares two color objects for equality.

#### Returns

`Boolean` returns `true` if the two colors are the same. Otherwise, `false`

#### Example

    <script>
    var red = kendo.Color.fromRGB(1,0,0);
    var green = kendo.Color.fromRGB(0,1,0);
    console.log(red.equals(green)); // logs false

    var opaqueRed = kendo.Color.fromBytes(255,0,0,1);
    console.log(red.equals(opaqueRed)); // logs true
    </script>

## Static Methods

### fromRGB

Creates a new color object from the rgba channels in the 0..1 range.

#### Parameters

##### red `Number`

The red channel of the color, in the range from 0 to 1.

##### green `Number`

The green channel of the color, in the range from 0 to 1.

##### blue `Number`

The blue channel of the color, in the range from 0 to 1.

##### alpha `Number` *(optional)*

The alpha channel of the color, in the range from 0 to 1. Defaults to 1 when omitted.

#### Returns

`kendo.Color` A new object that represents the color with the passed color coordinates

#### Example - get the level of the node

    <script>
    var color = kendo.Color.fromRGB(1,0,0);
    console.log(color.toCss()); // logs "#ff0000"

    color = kendo.Color.fromRGB(0,1,0,1);
    console.log(color.toCssRgba()); // logs "rgba(0, 255, 0, 1)"
    </script>

### fromHSV

Creates a new color object from the hsva channels in the 0..1 range.

#### Parameters

##### hue `Number`

The hue channel of the color, in the range from 0 to 1.

##### saturation `Number`

The saturation channel of the color, in the range from 0 to 1.

##### value `Number`

The value channel of the color, in the range from 0 to 1.

##### alpha `Number` *(optional)*

The alpha channel of the color, in the range from 0 to 1. Defaults to 1 when omitted.

#### Returns

`kendo.Color` A new object that represents the color with the passed color coordinates

#### Example - get the level of the node

    <script>
    var color = kendo.Color.fromHSV(1,.5,.5);
    console.log(color.toCss()); // logs "#804140"

    color = kendo.Color.fromHSV(.5,1,.5,1);
    console.log(color.toCssRgba()); // logs "rgba(128, 1, 0, 1)"
    </script>

### fromBytes

Creates a new color object from the rgba channels in the 0..255 range.

#### Parameters

##### red `Number`

The red channel of the color, in the range from 0 to 255.

##### green `Number`

The green channel of the color, in the range from 0 to 255.

##### blue `Number`

The blue channel of the color, in the range from 0 to 255.

##### alpha `Number` *(optional)*

The alpha channel of the color, in the range from 0 to 1. Defaults to 1 when omitted.

#### Returns

`kendo.Color` A new object that represents the color with the passed color coordinates

#### Example - get the level of the node

    <script>
    var color = kendo.Color.fromBytes(0,0,255);
    console.log(color.toCss()); // logs "#0000ff"

    color = kendo.Color.fromBytes(255,255,0,.5);
    console.log(color.toCssRgba()); // logs "rgba(255, 255, 0, 0.5)"
    </script>
