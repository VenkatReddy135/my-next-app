---
title: chart-seriesItem-markers
slug: jsp-chart-seriesItem-markers
tags: api, java
publish: true
---

# \<kendo:chart-seriesItem-markers\>

The chart series marker configuration.

#### Example
    <kendo:chart-seriesItem>
        <kendo:chart-seriesItem-markers></kendo:chart-seriesItem-markers>
    </kendo:chart-seriesItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the series markers.

#### Example
    <kendo:chart-seriesItem-markers background="background">
    </kendo:chart-seriesItem-markers>

### border `java.lang.String`

The border of the markers. Further configuration is available via [kendo:chart-seriesItem-markers-border](#kendo-chart-seriesItem-markers-border). 

#### Example
    <kendo:chart-seriesItem-markers border="border">
    </kendo:chart-seriesItem-markers>

### rotation `float`

The rotation angle of the markers.

#### Example
    <kendo:chart-seriesItem-markers rotation="rotation">
    </kendo:chart-seriesItem-markers>

### size `float`

The marker size in pixels.

#### Example
    <kendo:chart-seriesItem-markers size="size">
    </kendo:chart-seriesItem-markers>

### type `java.lang.String`

The markers shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Example
    <kendo:chart-seriesItem-markers type="type">
    </kendo:chart-seriesItem-markers>

### visible `boolean`

If set to true the chart will display the series markers. By default chart series markers are not displayed.

#### Example
    <kendo:chart-seriesItem-markers visible="visible">
    </kendo:chart-seriesItem-markers>


##  Configuration JSP Tags

### kendo:chart-seriesItem-markers-border

The border of the markers.

More documentation is available at [kendo:chart-seriesItem-markers-border](chart/seriesitem-markers-border).

#### Example

    <kendo:chart-seriesItem-markers>
        <kendo:chart-seriesItem-markers-border></kendo:chart-seriesItem-markers-border>
    </kendo:chart-seriesItem-markers>


## Event Attributes

### background `String`

The background color of the series markers.


#### Example
    <kendo:chart-seriesItem-markers background="handle_background">
    </kendo:chart-seriesItem-markers>
    <script>
        function handle_background(e) {
            // Code to handle the background event.
        }
    </script>

### size `String`

The marker size in pixels.


#### Example
    <kendo:chart-seriesItem-markers size="handle_size">
    </kendo:chart-seriesItem-markers>
    <script>
        function handle_size(e) {
            // Code to handle the size event.
        }
    </script>

### type `String`

The markers shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.


#### Example
    <kendo:chart-seriesItem-markers type="handle_type">
    </kendo:chart-seriesItem-markers>
    <script>
        function handle_type(e) {
            // Code to handle the type event.
        }
    </script>

### visible `String`

If set to true the chart will display the series markers. By default chart series markers are not displayed.


#### Example
    <kendo:chart-seriesItem-markers visible="handle_visible">
    </kendo:chart-seriesItem-markers>
    <script>
        function handle_visible(e) {
            // Code to handle the visible event.
        }
    </script>

### rotation `String`

The rotation angle of the markers.


#### Example
    <kendo:chart-seriesItem-markers rotation="handle_rotation">
    </kendo:chart-seriesItem-markers>
    <script>
        function handle_rotation(e) {
            // Code to handle the rotation event.
        }
    </script>

## Event Tags

### kendo:chart-seriesItem-markers-background

The background color of the series markers.


#### Example
    <kendo:chart-seriesItem-markers>
        <kendo:chart-seriesItem-markers-background>
            <script>
                function(e) {
                    // Code to handle the background event.
                }
            </script>
        </kendo:chart-seriesItem-markers-background>
    </kendo:chart-seriesItem-markers>

### kendo:chart-seriesItem-markers-size

The marker size in pixels.


#### Example
    <kendo:chart-seriesItem-markers>
        <kendo:chart-seriesItem-markers-size>
            <script>
                function(e) {
                    // Code to handle the size event.
                }
            </script>
        </kendo:chart-seriesItem-markers-size>
    </kendo:chart-seriesItem-markers>

### kendo:chart-seriesItem-markers-type

The markers shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.


#### Example
    <kendo:chart-seriesItem-markers>
        <kendo:chart-seriesItem-markers-type>
            <script>
                function(e) {
                    // Code to handle the type event.
                }
            </script>
        </kendo:chart-seriesItem-markers-type>
    </kendo:chart-seriesItem-markers>

### kendo:chart-seriesItem-markers-visible

If set to true the chart will display the series markers. By default chart series markers are not displayed.


#### Example
    <kendo:chart-seriesItem-markers>
        <kendo:chart-seriesItem-markers-visible>
            <script>
                function(e) {
                    // Code to handle the visible event.
                }
            </script>
        </kendo:chart-seriesItem-markers-visible>
    </kendo:chart-seriesItem-markers>

### kendo:chart-seriesItem-markers-rotation

The rotation angle of the markers.


#### Example
    <kendo:chart-seriesItem-markers>
        <kendo:chart-seriesItem-markers-rotation>
            <script>
                function(e) {
                    // Code to handle the rotation event.
                }
            </script>
        </kendo:chart-seriesItem-markers-rotation>
    </kendo:chart-seriesItem-markers>

