---
title: stockChart-seriesItem-markers
slug: jsp-stockChart-seriesItem-markers
tags: api, java
publish: true
---

# \<kendo:stockChart-seriesItem-markers\>

Marker options.** Applicable for area and line series. **

#### Example
    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-markers></kendo:stockChart-seriesItem-markers>
    </kendo:stockChart-seriesItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the current series markers.

#### Example
    <kendo:stockChart-seriesItem-markers background="background">
    </kendo:stockChart-seriesItem-markers>

### border `java.lang.String`

The border of the markers. Further configuration is available via [kendo:stockChart-seriesItem-markers-border](#kendo-stockChart-seriesItem-markers-border). 

#### Example
    <kendo:stockChart-seriesItem-markers border="border">
    </kendo:stockChart-seriesItem-markers>

### rotation `float`

The rotation angle of the markers.

#### Example
    <kendo:stockChart-seriesItem-markers rotation="rotation">
    </kendo:stockChart-seriesItem-markers>

### size `float`

The marker size.

#### Example
    <kendo:stockChart-seriesItem-markers size="size">
    </kendo:stockChart-seriesItem-markers>

### type `java.lang.String`

Configures the markers shape type.

#### Example
    <kendo:stockChart-seriesItem-markers type="type">
    </kendo:stockChart-seriesItem-markers>

### visible `boolean`

The markers visibility.

#### Example
    <kendo:stockChart-seriesItem-markers visible="visible">
    </kendo:stockChart-seriesItem-markers>


##  Configuration JSP Tags

### kendo:stockChart-seriesItem-markers-border

The border of the markers.

More documentation is available at [kendo:stockChart-seriesItem-markers-border](stockchart/seriesitem-markers-border).

#### Example

    <kendo:stockChart-seriesItem-markers>
        <kendo:stockChart-seriesItem-markers-border></kendo:stockChart-seriesItem-markers-border>
    </kendo:stockChart-seriesItem-markers>


## Event Attributes

### background `String`

The background color of the current series markers.


#### Example
    <kendo:stockChart-seriesItem-markers background="handle_background">
    </kendo:stockChart-seriesItem-markers>
    <script>
        function handle_background(e) {
            // Code to handle the background event.
        }
    </script>

### size `String`

The marker size.


#### Example
    <kendo:stockChart-seriesItem-markers size="handle_size">
    </kendo:stockChart-seriesItem-markers>
    <script>
        function handle_size(e) {
            // Code to handle the size event.
        }
    </script>

### rotation `String`

The rotation angle of the markers.


#### Example
    <kendo:stockChart-seriesItem-markers rotation="handle_rotation">
    </kendo:stockChart-seriesItem-markers>
    <script>
        function handle_rotation(e) {
            // Code to handle the rotation event.
        }
    </script>

### type `String`

Configures the markers shape type.


#### Example
    <kendo:stockChart-seriesItem-markers type="handle_type">
    </kendo:stockChart-seriesItem-markers>
    <script>
        function handle_type(e) {
            // Code to handle the type event.
        }
    </script>

### visible `String`

The markers visibility.


#### Example
    <kendo:stockChart-seriesItem-markers visible="handle_visible">
    </kendo:stockChart-seriesItem-markers>
    <script>
        function handle_visible(e) {
            // Code to handle the visible event.
        }
    </script>

## Event Tags

### kendo:stockChart-seriesItem-markers-background

The background color of the current series markers.


#### Example
    <kendo:stockChart-seriesItem-markers>
        <kendo:stockChart-seriesItem-markers-background>
            <script>
                function(e) {
                    // Code to handle the background event.
                }
            </script>
        </kendo:stockChart-seriesItem-markers-background>
    </kendo:stockChart-seriesItem-markers>

### kendo:stockChart-seriesItem-markers-size

The marker size.


#### Example
    <kendo:stockChart-seriesItem-markers>
        <kendo:stockChart-seriesItem-markers-size>
            <script>
                function(e) {
                    // Code to handle the size event.
                }
            </script>
        </kendo:stockChart-seriesItem-markers-size>
    </kendo:stockChart-seriesItem-markers>

### kendo:stockChart-seriesItem-markers-rotation

The rotation angle of the markers.


#### Example
    <kendo:stockChart-seriesItem-markers>
        <kendo:stockChart-seriesItem-markers-rotation>
            <script>
                function(e) {
                    // Code to handle the rotation event.
                }
            </script>
        </kendo:stockChart-seriesItem-markers-rotation>
    </kendo:stockChart-seriesItem-markers>

### kendo:stockChart-seriesItem-markers-type

Configures the markers shape type.


#### Example
    <kendo:stockChart-seriesItem-markers>
        <kendo:stockChart-seriesItem-markers-type>
            <script>
                function(e) {
                    // Code to handle the type event.
                }
            </script>
        </kendo:stockChart-seriesItem-markers-type>
    </kendo:stockChart-seriesItem-markers>

### kendo:stockChart-seriesItem-markers-visible

The markers visibility.


#### Example
    <kendo:stockChart-seriesItem-markers>
        <kendo:stockChart-seriesItem-markers-visible>
            <script>
                function(e) {
                    // Code to handle the visible event.
                }
            </script>
        </kendo:stockChart-seriesItem-markers-visible>
    </kendo:stockChart-seriesItem-markers>

