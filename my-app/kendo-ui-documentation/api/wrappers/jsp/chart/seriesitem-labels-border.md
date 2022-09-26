---
title: chart-seriesItem-labels-border
slug: jsp-chart-seriesItem-labels-border
tags: api, java
publish: true
---

# \<kendo:chart-seriesItem-labels-border\>

The border of the labels.

#### Example
    <kendo:chart-seriesItem-labels>
        <kendo:chart-seriesItem-labels-border></kendo:chart-seriesItem-labels-border>
    </kendo:chart-seriesItem-labels>

## Configuration Attributes

### color `java.lang.String`

The color of the border. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-seriesItem-labels-border color="color">
    </kendo:chart-seriesItem-labels-border>

### dashType `java.lang.String`

The dash type of the border.The following dash types are supported:

#### Example
    <kendo:chart-seriesItem-labels-border dashType="dashType">
    </kendo:chart-seriesItem-labels-border>

### width `float`

The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Example
    <kendo:chart-seriesItem-labels-border width="width">
    </kendo:chart-seriesItem-labels-border>


## Event Attributes

### color `String`

The color of the border. Accepts a valid CSS color string, including hex and rgb.


#### Example
    <kendo:chart-seriesItem-labels-border color="handle_color">
    </kendo:chart-seriesItem-labels-border>
    <script>
        function handle_color(e) {
            // Code to handle the color event.
        }
    </script>

### dashType `String`

The dash type of the border.The following dash types are supported:


#### Example
    <kendo:chart-seriesItem-labels-border dashType="handle_dashType">
    </kendo:chart-seriesItem-labels-border>
    <script>
        function handle_dashType(e) {
            // Code to handle the dashType event.
        }
    </script>

### width `String`

The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.


#### Example
    <kendo:chart-seriesItem-labels-border width="handle_width">
    </kendo:chart-seriesItem-labels-border>
    <script>
        function handle_width(e) {
            // Code to handle the width event.
        }
    </script>

## Event Tags

### kendo:chart-seriesItem-labels-border-color

The color of the border. Accepts a valid CSS color string, including hex and rgb.


#### Example
    <kendo:chart-seriesItem-labels-border>
        <kendo:chart-seriesItem-labels-border-color>
            <script>
                function(e) {
                    // Code to handle the color event.
                }
            </script>
        </kendo:chart-seriesItem-labels-border-color>
    </kendo:chart-seriesItem-labels-border>

### kendo:chart-seriesItem-labels-border-dashType

The dash type of the border.The following dash types are supported:


#### Example
    <kendo:chart-seriesItem-labels-border>
        <kendo:chart-seriesItem-labels-border-dashType>
            <script>
                function(e) {
                    // Code to handle the dashType event.
                }
            </script>
        </kendo:chart-seriesItem-labels-border-dashType>
    </kendo:chart-seriesItem-labels-border>

### kendo:chart-seriesItem-labels-border-width

The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.


#### Example
    <kendo:chart-seriesItem-labels-border>
        <kendo:chart-seriesItem-labels-border-width>
            <script>
                function(e) {
                    // Code to handle the width event.
                }
            </script>
        </kendo:chart-seriesItem-labels-border-width>
    </kendo:chart-seriesItem-labels-border>

