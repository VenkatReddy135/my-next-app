---
title: stockChart-seriesItem-border
slug: jsp-stockChart-seriesItem-border
tags: api, java
publish: true
---

# \<kendo:stockChart-seriesItem-border\>

The border of the points.** Applicable to column, ohlc and candlestick series **

#### Example
    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-border></kendo:stockChart-seriesItem-border>
    </kendo:stockChart-seriesItem>

## Configuration Attributes

### color `java.lang.String`

The color of the border.  It defaults to the color of the current series.

#### Example
    <kendo:stockChart-seriesItem-border color="color">
    </kendo:stockChart-seriesItem-border>

### dashType `java.lang.String`

The dash type of the border.

#### Example
    <kendo:stockChart-seriesItem-border dashType="dashType">
    </kendo:stockChart-seriesItem-border>

### opacity `float`

The border opacity.

#### Example
    <kendo:stockChart-seriesItem-border opacity="opacity">
    </kendo:stockChart-seriesItem-border>

### width `float`

The width of the border.

#### Example
    <kendo:stockChart-seriesItem-border width="width">
    </kendo:stockChart-seriesItem-border>


## Event Attributes

### color `String`

The color of the border.  It defaults to the color of the current series.


#### Example
    <kendo:stockChart-seriesItem-border color="handle_color">
    </kendo:stockChart-seriesItem-border>
    <script>
        function handle_color(e) {
            // Code to handle the color event.
        }
    </script>

### dashType `String`

The dash type of the border.


#### Example
    <kendo:stockChart-seriesItem-border dashType="handle_dashType">
    </kendo:stockChart-seriesItem-border>
    <script>
        function handle_dashType(e) {
            // Code to handle the dashType event.
        }
    </script>

### opacity `String`

The border opacity.


#### Example
    <kendo:stockChart-seriesItem-border opacity="handle_opacity">
    </kendo:stockChart-seriesItem-border>
    <script>
        function handle_opacity(e) {
            // Code to handle the opacity event.
        }
    </script>

### width `String`

The width of the border.


#### Example
    <kendo:stockChart-seriesItem-border width="handle_width">
    </kendo:stockChart-seriesItem-border>
    <script>
        function handle_width(e) {
            // Code to handle the width event.
        }
    </script>

## Event Tags

### kendo:stockChart-seriesItem-border-color

The color of the border.  It defaults to the color of the current series.


#### Example
    <kendo:stockChart-seriesItem-border>
        <kendo:stockChart-seriesItem-border-color>
            <script>
                function(e) {
                    // Code to handle the color event.
                }
            </script>
        </kendo:stockChart-seriesItem-border-color>
    </kendo:stockChart-seriesItem-border>

### kendo:stockChart-seriesItem-border-dashType

The dash type of the border.


#### Example
    <kendo:stockChart-seriesItem-border>
        <kendo:stockChart-seriesItem-border-dashType>
            <script>
                function(e) {
                    // Code to handle the dashType event.
                }
            </script>
        </kendo:stockChart-seriesItem-border-dashType>
    </kendo:stockChart-seriesItem-border>

### kendo:stockChart-seriesItem-border-opacity

The border opacity.


#### Example
    <kendo:stockChart-seriesItem-border>
        <kendo:stockChart-seriesItem-border-opacity>
            <script>
                function(e) {
                    // Code to handle the opacity event.
                }
            </script>
        </kendo:stockChart-seriesItem-border-opacity>
    </kendo:stockChart-seriesItem-border>

### kendo:stockChart-seriesItem-border-width

The width of the border.


#### Example
    <kendo:stockChart-seriesItem-border>
        <kendo:stockChart-seriesItem-border-width>
            <script>
                function(e) {
                    // Code to handle the width event.
                }
            </script>
        </kendo:stockChart-seriesItem-border-width>
    </kendo:stockChart-seriesItem-border>

