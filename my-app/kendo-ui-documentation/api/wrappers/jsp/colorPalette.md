---
title: colorPalette
slug: jsp-colorPalette
tags: api, java
publish: true
---

# \<kendo:colorPalette\>
A JSP wrapper for Kendo UI [ColorPalette](/api/web/colorpalette).

## Configuration Attributes

### columns `float`

The number of columns to display.  When you use the "websafe" palette, this will automatically default to 18.

#### Example
    <kendo:colorPalette columns="columns">
    </kendo:colorPalette>

### palette `java.lang.Object`

Specifies the color palette to display.
It can be a string with comma-separated colors in hex representation, an array of kendo.Color object objects or of strings that parseColor understands.  As a shortcut, you can pass "basic" to get the simple palette (this is the default) or "websafe" to get the Web-safe palette.

#### Example
    <kendo:colorPalette palette="palette">
    </kendo:colorPalette>

### tileSize `float`

The size of a color cell. Further configuration is available via [kendo:colorPalette-tileSize](#kendo-colorPalette-tileSize). 

#### Example
    <kendo:colorPalette tileSize="tileSize">
    </kendo:colorPalette>

### value `java.lang.String`

Specifies the initially selected color.

#### Example
    <kendo:colorPalette value="value">
    </kendo:colorPalette>


##  Configuration JSP Tags

### kendo:colorPalette-tileSize

The size of a color cell.

More documentation is available at [kendo:colorPalette-tileSize](colorpalette/tilesize).

#### Example

    <kendo:colorPalette>
        <kendo:colorPalette-tileSize></kendo:colorPalette-tileSize>
    </kendo:colorPalette>


## Event Attributes

### change `String`

Triggers when a new color has been changed.


For additional information check the [change](/api/web/colorpalette#events-change) event documentation.

#### Example
    <kendo:colorPalette change="handle_change">
    </kendo:colorPalette>
    <script>
        function handle_change(e) {
            // Code to handle the change event.
        }
    </script>

## Event Tags

### kendo:colorPalette-change

Triggers when a new color has been changed.


For additional information check the [change](/api/web/colorpalette#events-change) event documentation.

#### Example
    <kendo:colorPalette>
        <kendo:colorPalette-change>
            <script>
                function(e) {
                    // Code to handle the change event.
                }
            </script>
        </kendo:colorPalette-change>
    </kendo:colorPalette>

