---
title: sparkline-seriesItem-markers
slug: jsp-sparkline-seriesItem-markers
tags: api, java
publish: true
---

# \<kendo:sparkline-seriesItem-markers\>

Marker options.** Applicable to area and line series **

#### Example
    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-markers></kendo:sparkline-seriesItem-markers>
    </kendo:sparkline-seriesItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the current series markers.

#### Example
    <kendo:sparkline-seriesItem-markers background="background">
    </kendo:sparkline-seriesItem-markers>

### border `java.lang.String`

The border of the markers. Further configuration is available via [kendo:sparkline-seriesItem-markers-border](#kendo-sparkline-seriesItem-markers-border). 

#### Example
    <kendo:sparkline-seriesItem-markers border="border">
    </kendo:sparkline-seriesItem-markers>

### rotation `float`

The rotation angle of the markers.

#### Example
    <kendo:sparkline-seriesItem-markers rotation="rotation">
    </kendo:sparkline-seriesItem-markers>

### size `float`

The marker size.

#### Example
    <kendo:sparkline-seriesItem-markers size="size">
    </kendo:sparkline-seriesItem-markers>

### type `java.lang.String`

Configures the markers shape type.

#### Example
    <kendo:sparkline-seriesItem-markers type="type">
    </kendo:sparkline-seriesItem-markers>

### visible `boolean`

The markers visibility.

#### Example
    <kendo:sparkline-seriesItem-markers visible="visible">
    </kendo:sparkline-seriesItem-markers>


##  Configuration JSP Tags

### kendo:sparkline-seriesItem-markers-border

The border of the markers.

More documentation is available at [kendo:sparkline-seriesItem-markers-border](sparkline/seriesitem-markers-border).

#### Example

    <kendo:sparkline-seriesItem-markers>
        <kendo:sparkline-seriesItem-markers-border></kendo:sparkline-seriesItem-markers-border>
    </kendo:sparkline-seriesItem-markers>


## Event Attributes

### background `String`

The background color of the current series markers.


#### Example
    <kendo:sparkline-seriesItem-markers background="handle_background">
    </kendo:sparkline-seriesItem-markers>
    <script>
        function handle_background(e) {
            // Code to handle the background event.
        }
    </script>

### size `String`

The marker size.


#### Example
    <kendo:sparkline-seriesItem-markers size="handle_size">
    </kendo:sparkline-seriesItem-markers>
    <script>
        function handle_size(e) {
            // Code to handle the size event.
        }
    </script>

### type `String`

Configures the markers shape type.


#### Example
    <kendo:sparkline-seriesItem-markers type="handle_type">
    </kendo:sparkline-seriesItem-markers>
    <script>
        function handle_type(e) {
            // Code to handle the type event.
        }
    </script>

### visible `String`

The markers visibility.


#### Example
    <kendo:sparkline-seriesItem-markers visible="handle_visible">
    </kendo:sparkline-seriesItem-markers>
    <script>
        function handle_visible(e) {
            // Code to handle the visible event.
        }
    </script>

### rotation `String`

The rotation angle of the markers.


#### Example
    <kendo:sparkline-seriesItem-markers rotation="handle_rotation">
    </kendo:sparkline-seriesItem-markers>
    <script>
        function handle_rotation(e) {
            // Code to handle the rotation event.
        }
    </script>

## Event Tags

### kendo:sparkline-seriesItem-markers-background

The background color of the current series markers.


#### Example
    <kendo:sparkline-seriesItem-markers>
        <kendo:sparkline-seriesItem-markers-background>
            <script>
                function(e) {
                    // Code to handle the background event.
                }
            </script>
        </kendo:sparkline-seriesItem-markers-background>
    </kendo:sparkline-seriesItem-markers>

### kendo:sparkline-seriesItem-markers-size

The marker size.


#### Example
    <kendo:sparkline-seriesItem-markers>
        <kendo:sparkline-seriesItem-markers-size>
            <script>
                function(e) {
                    // Code to handle the size event.
                }
            </script>
        </kendo:sparkline-seriesItem-markers-size>
    </kendo:sparkline-seriesItem-markers>

### kendo:sparkline-seriesItem-markers-type

Configures the markers shape type.


#### Example
    <kendo:sparkline-seriesItem-markers>
        <kendo:sparkline-seriesItem-markers-type>
            <script>
                function(e) {
                    // Code to handle the type event.
                }
            </script>
        </kendo:sparkline-seriesItem-markers-type>
    </kendo:sparkline-seriesItem-markers>

### kendo:sparkline-seriesItem-markers-visible

The markers visibility.


#### Example
    <kendo:sparkline-seriesItem-markers>
        <kendo:sparkline-seriesItem-markers-visible>
            <script>
                function(e) {
                    // Code to handle the visible event.
                }
            </script>
        </kendo:sparkline-seriesItem-markers-visible>
    </kendo:sparkline-seriesItem-markers>

### kendo:sparkline-seriesItem-markers-rotation

The rotation angle of the markers.


#### Example
    <kendo:sparkline-seriesItem-markers>
        <kendo:sparkline-seriesItem-markers-rotation>
            <script>
                function(e) {
                    // Code to handle the rotation event.
                }
            </script>
        </kendo:sparkline-seriesItem-markers-rotation>
    </kendo:sparkline-seriesItem-markers>

