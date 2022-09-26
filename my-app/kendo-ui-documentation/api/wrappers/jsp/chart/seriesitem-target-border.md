---
title: chart-seriesItem-target-border
slug: jsp-chart-seriesItem-target-border
tags: api, java
publish: true
---

# \<kendo:chart-seriesItem-target-border\>

The border of the target.

#### Example
    <kendo:chart-seriesItem-target>
        <kendo:chart-seriesItem-target-border></kendo:chart-seriesItem-target-border>
    </kendo:chart-seriesItem-target>

## Configuration Attributes

### color `java.lang.String`

The color of the border.

#### Example
    <kendo:chart-seriesItem-target-border color="color">
    </kendo:chart-seriesItem-target-border>

### dashType `java.lang.String`

The following dash types are supported:

#### Example
    <kendo:chart-seriesItem-target-border dashType="dashType">
    </kendo:chart-seriesItem-target-border>

### width `float`

The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Example
    <kendo:chart-seriesItem-target-border width="width">
    </kendo:chart-seriesItem-target-border>


## Event Attributes

### color `String`

The color of the border.


#### Example
    <kendo:chart-seriesItem-target-border color="handle_color">
    </kendo:chart-seriesItem-target-border>
    <script>
        function handle_color(e) {
            // Code to handle the color event.
        }
    </script>

### dashType `String`

The following dash types are supported:


#### Example
    <kendo:chart-seriesItem-target-border dashType="handle_dashType">
    </kendo:chart-seriesItem-target-border>
    <script>
        function handle_dashType(e) {
            // Code to handle the dashType event.
        }
    </script>

### width `String`

The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.


#### Example
    <kendo:chart-seriesItem-target-border width="handle_width">
    </kendo:chart-seriesItem-target-border>
    <script>
        function handle_width(e) {
            // Code to handle the width event.
        }
    </script>

## Event Tags

### kendo:chart-seriesItem-target-border-color

The color of the border.


#### Example
    <kendo:chart-seriesItem-target-border>
        <kendo:chart-seriesItem-target-border-color>
            <script>
                function(e) {
                    // Code to handle the color event.
                }
            </script>
        </kendo:chart-seriesItem-target-border-color>
    </kendo:chart-seriesItem-target-border>

### kendo:chart-seriesItem-target-border-dashType

The following dash types are supported:


#### Example
    <kendo:chart-seriesItem-target-border>
        <kendo:chart-seriesItem-target-border-dashType>
            <script>
                function(e) {
                    // Code to handle the dashType event.
                }
            </script>
        </kendo:chart-seriesItem-target-border-dashType>
    </kendo:chart-seriesItem-target-border>

### kendo:chart-seriesItem-target-border-width

The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.


#### Example
    <kendo:chart-seriesItem-target-border>
        <kendo:chart-seriesItem-target-border-width>
            <script>
                function(e) {
                    // Code to handle the width event.
                }
            </script>
        </kendo:chart-seriesItem-target-border-width>
    </kendo:chart-seriesItem-target-border>

