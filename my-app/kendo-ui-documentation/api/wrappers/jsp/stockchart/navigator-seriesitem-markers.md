---
title: stockChart-navigator-seriesItem-markers
slug: jsp-stockChart-navigator-seriesItem-markers
tags: api, java
publish: true
---

# \<kendo:stockChart-navigator-seriesItem-markers\>

Marker options.** Applicable for area and line series. **

#### Example
    <kendo:stockChart-navigator-seriesItem>
        <kendo:stockChart-navigator-seriesItem-markers></kendo:stockChart-navigator-seriesItem-markers>
    </kendo:stockChart-navigator-seriesItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the current series markers.

#### Example
    <kendo:stockChart-navigator-seriesItem-markers background="background">
    </kendo:stockChart-navigator-seriesItem-markers>

### rotation `float`

The rotation angle of the markers.

#### Example
    <kendo:stockChart-navigator-seriesItem-markers rotation="rotation">
    </kendo:stockChart-navigator-seriesItem-markers>

### size `float`

The marker size.

#### Example
    <kendo:stockChart-navigator-seriesItem-markers size="size">
    </kendo:stockChart-navigator-seriesItem-markers>

### type `java.lang.String`

Configures the markers shape type.

#### Example
    <kendo:stockChart-navigator-seriesItem-markers type="type">
    </kendo:stockChart-navigator-seriesItem-markers>

### visible `boolean`

The markers visibility.

#### Example
    <kendo:stockChart-navigator-seriesItem-markers visible="visible">
    </kendo:stockChart-navigator-seriesItem-markers>


##  Configuration JSP Tags

### kendo:stockChart-navigator-seriesItem-markers-border

The border of the markers.

More documentation is available at [kendo:stockChart-navigator-seriesItem-markers-border](stockchart/navigator-seriesitem-markers-border).

#### Example

    <kendo:stockChart-navigator-seriesItem-markers>
        <kendo:stockChart-navigator-seriesItem-markers-border></kendo:stockChart-navigator-seriesItem-markers-border>
    </kendo:stockChart-navigator-seriesItem-markers>


## Event Attributes

### rotation `String`

The rotation angle of the markers.


#### Example
    <kendo:stockChart-navigator-seriesItem-markers rotation="handle_rotation">
    </kendo:stockChart-navigator-seriesItem-markers>
    <script>
        function handle_rotation(e) {
            // Code to handle the rotation event.
        }
    </script>

## Event Tags

### kendo:stockChart-navigator-seriesItem-markers-rotation

The rotation angle of the markers.


#### Example
    <kendo:stockChart-navigator-seriesItem-markers>
        <kendo:stockChart-navigator-seriesItem-markers-rotation>
            <script>
                function(e) {
                    // Code to handle the rotation event.
                }
            </script>
        </kendo:stockChart-navigator-seriesItem-markers-rotation>
    </kendo:stockChart-navigator-seriesItem-markers>

