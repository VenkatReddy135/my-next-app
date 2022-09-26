---
title: chart-seriesItem-border
slug: jsp-chart-seriesItem-border
tags: api, java
publish: true
---

# \<kendo:chart-seriesItem-border\>

The border of the chart series.

#### Example
    <kendo:chart-seriesItem>
        <kendo:chart-seriesItem-border></kendo:chart-seriesItem-border>
    </kendo:chart-seriesItem>

## Configuration Attributes

### color `java.lang.String`

The color of the border. Accepts a valid CSS color string, including hex and rgb. By default it is set to color of the current series.

#### Example
    <kendo:chart-seriesItem-border color="color">
    </kendo:chart-seriesItem-border>

### dashType `java.lang.String`

The dash type of the border.The following dash types are supported:

#### Example
    <kendo:chart-seriesItem-border dashType="dashType">
    </kendo:chart-seriesItem-border>

### opacity `float`

The opacity of the border. By default the border is opaque.

#### Example
    <kendo:chart-seriesItem-border opacity="opacity">
    </kendo:chart-seriesItem-border>

### width `float`

The width of the border in pixels.

#### Example
    <kendo:chart-seriesItem-border width="width">
    </kendo:chart-seriesItem-border>


## Event Attributes

### color `String`

The color of the border. Accepts a valid CSS color string, including hex and rgb. By default it is set to color of the current series.


#### Example
    <kendo:chart-seriesItem-border color="handle_color">
    </kendo:chart-seriesItem-border>
    <script>
        function handle_color(e) {
            // Code to handle the color event.
        }
    </script>

### dashType `String`

The dash type of the border.The following dash types are supported:


#### Example
    <kendo:chart-seriesItem-border dashType="handle_dashType">
    </kendo:chart-seriesItem-border>
    <script>
        function handle_dashType(e) {
            // Code to handle the dashType event.
        }
    </script>

### opacity `String`

The opacity of the border. By default the border is opaque.


#### Example
    <kendo:chart-seriesItem-border opacity="handle_opacity">
    </kendo:chart-seriesItem-border>
    <script>
        function handle_opacity(e) {
            // Code to handle the opacity event.
        }
    </script>

### width `String`

The width of the border in pixels.


#### Example
    <kendo:chart-seriesItem-border width="handle_width">
    </kendo:chart-seriesItem-border>
    <script>
        function handle_width(e) {
            // Code to handle the width event.
        }
    </script>

## Event Tags

### kendo:chart-seriesItem-border-color

The color of the border. Accepts a valid CSS color string, including hex and rgb. By default it is set to color of the current series.


#### Example
    <kendo:chart-seriesItem-border>
        <kendo:chart-seriesItem-border-color>
            <script>
                function(e) {
                    // Code to handle the color event.
                }
            </script>
        </kendo:chart-seriesItem-border-color>
    </kendo:chart-seriesItem-border>

### kendo:chart-seriesItem-border-dashType

The dash type of the border.The following dash types are supported:


#### Example
    <kendo:chart-seriesItem-border>
        <kendo:chart-seriesItem-border-dashType>
            <script>
                function(e) {
                    // Code to handle the dashType event.
                }
            </script>
        </kendo:chart-seriesItem-border-dashType>
    </kendo:chart-seriesItem-border>

### kendo:chart-seriesItem-border-opacity

The opacity of the border. By default the border is opaque.


#### Example
    <kendo:chart-seriesItem-border>
        <kendo:chart-seriesItem-border-opacity>
            <script>
                function(e) {
                    // Code to handle the opacity event.
                }
            </script>
        </kendo:chart-seriesItem-border-opacity>
    </kendo:chart-seriesItem-border>

### kendo:chart-seriesItem-border-width

The width of the border in pixels.


#### Example
    <kendo:chart-seriesItem-border>
        <kendo:chart-seriesItem-border-width>
            <script>
                function(e) {
                    // Code to handle the width event.
                }
            </script>
        </kendo:chart-seriesItem-border-width>
    </kendo:chart-seriesItem-border>

