---
title: chart-seriesItem-markers-border
slug: jsp-chart-seriesItem-markers-border
tags: api, java
publish: true
---

# \<kendo:chart-seriesItem-markers-border\>

The border of the markers.

#### Example
    <kendo:chart-seriesItem-markers>
        <kendo:chart-seriesItem-markers-border></kendo:chart-seriesItem-markers-border>
    </kendo:chart-seriesItem-markers>

## Configuration Attributes

### color `java.lang.String`

The color of the border. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-seriesItem-markers-border color="color">
    </kendo:chart-seriesItem-markers-border>

### width `float`

The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Example
    <kendo:chart-seriesItem-markers-border width="width">
    </kendo:chart-seriesItem-markers-border>


## Event Attributes

### color `String`

The color of the border. Accepts a valid CSS color string, including hex and rgb.


#### Example
    <kendo:chart-seriesItem-markers-border color="handle_color">
    </kendo:chart-seriesItem-markers-border>
    <script>
        function handle_color(e) {
            // Code to handle the color event.
        }
    </script>

### width `String`

The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.


#### Example
    <kendo:chart-seriesItem-markers-border width="handle_width">
    </kendo:chart-seriesItem-markers-border>
    <script>
        function handle_width(e) {
            // Code to handle the width event.
        }
    </script>

## Event Tags

### kendo:chart-seriesItem-markers-border-color

The color of the border. Accepts a valid CSS color string, including hex and rgb.


#### Example
    <kendo:chart-seriesItem-markers-border>
        <kendo:chart-seriesItem-markers-border-color>
            <script>
                function(e) {
                    // Code to handle the color event.
                }
            </script>
        </kendo:chart-seriesItem-markers-border-color>
    </kendo:chart-seriesItem-markers-border>

### kendo:chart-seriesItem-markers-border-width

The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.


#### Example
    <kendo:chart-seriesItem-markers-border>
        <kendo:chart-seriesItem-markers-border-width>
            <script>
                function(e) {
                    // Code to handle the width event.
                }
            </script>
        </kendo:chart-seriesItem-markers-border-width>
    </kendo:chart-seriesItem-markers-border>

