---
title: sparkline-seriesItem-border
slug: jsp-sparkline-seriesItem-border
tags: api, java
publish: true
---

# \<kendo:sparkline-seriesItem-border\>

The border of the points.** Applicable to bar, column and pie series **

#### Example
    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-border></kendo:sparkline-seriesItem-border>
    </kendo:sparkline-seriesItem>

## Configuration Attributes

### color `java.lang.String`

The color of the border.  It defaults to the color of the current series.

#### Example
    <kendo:sparkline-seriesItem-border color="color">
    </kendo:sparkline-seriesItem-border>

### dashType `java.lang.String`

The dash type of the border.

#### Example
    <kendo:sparkline-seriesItem-border dashType="dashType">
    </kendo:sparkline-seriesItem-border>

### opacity `float`

The border opacity.

#### Example
    <kendo:sparkline-seriesItem-border opacity="opacity">
    </kendo:sparkline-seriesItem-border>

### width `float`

The width of the border.

#### Example
    <kendo:sparkline-seriesItem-border width="width">
    </kendo:sparkline-seriesItem-border>


## Event Attributes

### color `String`

The color of the border.  It defaults to the color of the current series.


#### Example
    <kendo:sparkline-seriesItem-border color="handle_color">
    </kendo:sparkline-seriesItem-border>
    <script>
        function handle_color(e) {
            // Code to handle the color event.
        }
    </script>

### dashType `String`

The dash type of the border.


#### Example
    <kendo:sparkline-seriesItem-border dashType="handle_dashType">
    </kendo:sparkline-seriesItem-border>
    <script>
        function handle_dashType(e) {
            // Code to handle the dashType event.
        }
    </script>

### opacity `String`

The border opacity.


#### Example
    <kendo:sparkline-seriesItem-border opacity="handle_opacity">
    </kendo:sparkline-seriesItem-border>
    <script>
        function handle_opacity(e) {
            // Code to handle the opacity event.
        }
    </script>

### width `String`

The width of the border.


#### Example
    <kendo:sparkline-seriesItem-border width="handle_width">
    </kendo:sparkline-seriesItem-border>
    <script>
        function handle_width(e) {
            // Code to handle the width event.
        }
    </script>

## Event Tags

### kendo:sparkline-seriesItem-border-color

The color of the border.  It defaults to the color of the current series.


#### Example
    <kendo:sparkline-seriesItem-border>
        <kendo:sparkline-seriesItem-border-color>
            <script>
                function(e) {
                    // Code to handle the color event.
                }
            </script>
        </kendo:sparkline-seriesItem-border-color>
    </kendo:sparkline-seriesItem-border>

### kendo:sparkline-seriesItem-border-dashType

The dash type of the border.


#### Example
    <kendo:sparkline-seriesItem-border>
        <kendo:sparkline-seriesItem-border-dashType>
            <script>
                function(e) {
                    // Code to handle the dashType event.
                }
            </script>
        </kendo:sparkline-seriesItem-border-dashType>
    </kendo:sparkline-seriesItem-border>

### kendo:sparkline-seriesItem-border-opacity

The border opacity.


#### Example
    <kendo:sparkline-seriesItem-border>
        <kendo:sparkline-seriesItem-border-opacity>
            <script>
                function(e) {
                    // Code to handle the opacity event.
                }
            </script>
        </kendo:sparkline-seriesItem-border-opacity>
    </kendo:sparkline-seriesItem-border>

### kendo:sparkline-seriesItem-border-width

The width of the border.


#### Example
    <kendo:sparkline-seriesItem-border>
        <kendo:sparkline-seriesItem-border-width>
            <script>
                function(e) {
                    // Code to handle the width event.
                }
            </script>
        </kendo:sparkline-seriesItem-border-width>
    </kendo:sparkline-seriesItem-border>

