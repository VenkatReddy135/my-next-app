---
title: sparkline
slug: jsp-sparkline
tags: api, java
publish: true
---

# \<kendo:sparkline\>
A JSP wrapper for Kendo UI [Sparkline](/api/dataviz/sparkline).

## Configuration Attributes

### autoBind `boolean`

Indicates whether the chart will call read on the data source initially.

#### Example
    <kendo:sparkline autoBind="autoBind">
    </kendo:sparkline>

### axisDefaults `java.lang.Object`

Default options for all chart axes.

#### Example
    <kendo:sparkline axisDefaults="axisDefaults">
    </kendo:sparkline>

### data `java.lang.Object`

The data for the default sparkline series.Will be discareded if series are supplied.

#### Example
    <kendo:sparkline data="data">
    </kendo:sparkline>

### pointWidth `float`

The width to allocate for each data point.

#### Example
    <kendo:sparkline pointWidth="pointWidth">
    </kendo:sparkline>

### renderAs `java.lang.String`

Sets the preferred rendering engine.
If it is not supported by the browser, the Sparkline will switch to the first available mode.The supported values are:

#### Example
    <kendo:sparkline renderAs="renderAs">
    </kendo:sparkline>

### seriesColors `java.lang.Object`

The default colors for the chart's series. When all colors are used, new colors are pulled from the start again.

#### Example
    <kendo:sparkline seriesColors="seriesColors">
    </kendo:sparkline>

### theme `java.lang.String`

Sets Chart theme. Available themes: default, blueOpal, black.

#### Example
    <kendo:sparkline theme="theme">
    </kendo:sparkline>

### transitions `boolean`

A value indicating if transition animations should be played.

#### Example
    <kendo:sparkline transitions="transitions">
    </kendo:sparkline>

### type `java.lang.String`

The default series type.

#### Example
    <kendo:sparkline type="type">
    </kendo:sparkline>


##  Configuration JSP Tags

### kendo:sparkline-categoryAxis

The category axis configuration options.

More documentation is available at [kendo:sparkline-categoryAxis](sparkline/categoryaxis).

#### Example

    <kendo:sparkline>
        <kendo:sparkline-categoryAxis></kendo:sparkline-categoryAxis>
    </kendo:sparkline>

### kendo:sparkline-chartArea

The chart area configuration options.
This is the entire visible area of the chart.

More documentation is available at [kendo:sparkline-chartArea](sparkline/chartarea).

#### Example

    <kendo:sparkline>
        <kendo:sparkline-chartArea></kendo:sparkline-chartArea>
    </kendo:sparkline>

### kendo:sparkline-plotArea

The plot area configuration options. This is the area containing the plotted series.

More documentation is available at [kendo:sparkline-plotArea](sparkline/plotarea).

#### Example

    <kendo:sparkline>
        <kendo:sparkline-plotArea></kendo:sparkline-plotArea>
    </kendo:sparkline>

### kendo:sparkline-series

Array of series definitions.The series type is determined by the value of the type field.
If a type value is missing, the type is assumed to be the one specified in seriesDefaults.Each series type has a different set of options.

More documentation is available at [kendo:sparkline-series](sparkline/series).

#### Example

    <kendo:sparkline>
        <kendo:sparkline-series></kendo:sparkline-series>
    </kendo:sparkline>

### kendo:sparkline-seriesDefaults

Default values for each series.

More documentation is available at [kendo:sparkline-seriesDefaults](sparkline/seriesdefaults).

#### Example

    <kendo:sparkline>
        <kendo:sparkline-seriesDefaults></kendo:sparkline-seriesDefaults>
    </kendo:sparkline>

### kendo:sparkline-tooltip

The data point tooltip configuration options.

More documentation is available at [kendo:sparkline-tooltip](sparkline/tooltip).

#### Example

    <kendo:sparkline>
        <kendo:sparkline-tooltip></kendo:sparkline-tooltip>
    </kendo:sparkline>

### kendo:sparkline-valueAxis

The value axis configuration options.

More documentation is available at [kendo:sparkline-valueAxis](sparkline/valueaxis).

#### Example

    <kendo:sparkline>
        <kendo:sparkline-valueAxis></kendo:sparkline-valueAxis>
    </kendo:sparkline>


## Event Attributes

### axisLabelClick `String`

Fires when an axis label is clicked.


For additional information check the [axisLabelClick](/api/web/sparkline#events-axisLabelClick) event documentation.

#### Example
    <kendo:sparkline axisLabelClick="handle_axisLabelClick">
    </kendo:sparkline>
    <script>
        function handle_axisLabelClick(e) {
            // Code to handle the axisLabelClick event.
        }
    </script>

### dataBound `String`

Fires when the sparkline has received data from the data source
and is about to render it.


For additional information check the [dataBound](/api/web/sparkline#events-dataBound) event documentation.

#### Example
    <kendo:sparkline dataBound="handle_dataBound">
    </kendo:sparkline>
    <script>
        function handle_dataBound(e) {
            // Code to handle the dataBound event.
        }
    </script>

### dragStart `String`

Fires when the user has used the mouse or a swipe gesture to drag the sparkline.The drag operation can be aborted by calling e.preventDefault().


For additional information check the [dragStart](/api/web/sparkline#events-dragStart) event documentation.

#### Example
    <kendo:sparkline dragStart="handle_dragStart">
    </kendo:sparkline>
    <script>
        function handle_dragStart(e) {
            // Code to handle the dragStart event.
        }
    </script>

### drag `String`

Fires as long as the user is dragging the sparkline using the mouse or swipe gestures.


For additional information check the [drag](/api/web/sparkline#events-drag) event documentation.

#### Example
    <kendo:sparkline drag="handle_drag">
    </kendo:sparkline>
    <script>
        function handle_drag(e) {
            // Code to handle the drag event.
        }
    </script>

### dragEnd `String`

Fires when the user stops dragging the sparkline.


For additional information check the [dragEnd](/api/web/sparkline#events-dragEnd) event documentation.

#### Example
    <kendo:sparkline dragEnd="handle_dragEnd">
    </kendo:sparkline>
    <script>
        function handle_dragEnd(e) {
            // Code to handle the dragEnd event.
        }
    </script>

### plotAreaClick `String`

Fires when plot area is clicked.


For additional information check the [plotAreaClick](/api/web/sparkline#events-plotAreaClick) event documentation.

#### Example
    <kendo:sparkline plotAreaClick="handle_plotAreaClick">
    </kendo:sparkline>
    <script>
        function handle_plotAreaClick(e) {
            // Code to handle the plotAreaClick event.
        }
    </script>

### seriesClick `String`

Fires when chart series are clicked.


For additional information check the [seriesClick](/api/web/sparkline#events-seriesClick) event documentation.

#### Example
    <kendo:sparkline seriesClick="handle_seriesClick">
    </kendo:sparkline>
    <script>
        function handle_seriesClick(e) {
            // Code to handle the seriesClick event.
        }
    </script>

### seriesHover `String`

Fires when chart series are hovered.


For additional information check the [seriesHover](/api/web/sparkline#events-seriesHover) event documentation.

#### Example
    <kendo:sparkline seriesHover="handle_seriesHover">
    </kendo:sparkline>
    <script>
        function handle_seriesHover(e) {
            // Code to handle the seriesHover event.
        }
    </script>

### zoomStart `String`

Fires when the user has used the mousewheel to zoom the chart.The zoom operation can be aborted by calling e.preventDefault().


For additional information check the [zoomStart](/api/web/sparkline#events-zoomStart) event documentation.

#### Example
    <kendo:sparkline zoomStart="handle_zoomStart">
    </kendo:sparkline>
    <script>
        function handle_zoomStart(e) {
            // Code to handle the zoomStart event.
        }
    </script>

### zoom `String`

Fires as long as the user is zooming the chart using the mousewheel.


For additional information check the [zoom](/api/web/sparkline#events-zoom) event documentation.

#### Example
    <kendo:sparkline zoom="handle_zoom">
    </kendo:sparkline>
    <script>
        function handle_zoom(e) {
            // Code to handle the zoom event.
        }
    </script>

### zoomEnd `String`

Fires when the user stops zooming the chart.


For additional information check the [zoomEnd](/api/web/sparkline#events-zoomEnd) event documentation.

#### Example
    <kendo:sparkline zoomEnd="handle_zoomEnd">
    </kendo:sparkline>
    <script>
        function handle_zoomEnd(e) {
            // Code to handle the zoomEnd event.
        }
    </script>

## Event Tags

### kendo:sparkline-axisLabelClick

Fires when an axis label is clicked.


For additional information check the [axisLabelClick](/api/web/sparkline#events-axisLabelClick) event documentation.

#### Example
    <kendo:sparkline>
        <kendo:sparkline-axisLabelClick>
            <script>
                function(e) {
                    // Code to handle the axisLabelClick event.
                }
            </script>
        </kendo:sparkline-axisLabelClick>
    </kendo:sparkline>

### kendo:sparkline-dataBound

Fires when the sparkline has received data from the data source
and is about to render it.


For additional information check the [dataBound](/api/web/sparkline#events-dataBound) event documentation.

#### Example
    <kendo:sparkline>
        <kendo:sparkline-dataBound>
            <script>
                function(e) {
                    // Code to handle the dataBound event.
                }
            </script>
        </kendo:sparkline-dataBound>
    </kendo:sparkline>

### kendo:sparkline-dragStart

Fires when the user has used the mouse or a swipe gesture to drag the sparkline.The drag operation can be aborted by calling e.preventDefault().


For additional information check the [dragStart](/api/web/sparkline#events-dragStart) event documentation.

#### Example
    <kendo:sparkline>
        <kendo:sparkline-dragStart>
            <script>
                function(e) {
                    // Code to handle the dragStart event.
                }
            </script>
        </kendo:sparkline-dragStart>
    </kendo:sparkline>

### kendo:sparkline-drag

Fires as long as the user is dragging the sparkline using the mouse or swipe gestures.


For additional information check the [drag](/api/web/sparkline#events-drag) event documentation.

#### Example
    <kendo:sparkline>
        <kendo:sparkline-drag>
            <script>
                function(e) {
                    // Code to handle the drag event.
                }
            </script>
        </kendo:sparkline-drag>
    </kendo:sparkline>

### kendo:sparkline-dragEnd

Fires when the user stops dragging the sparkline.


For additional information check the [dragEnd](/api/web/sparkline#events-dragEnd) event documentation.

#### Example
    <kendo:sparkline>
        <kendo:sparkline-dragEnd>
            <script>
                function(e) {
                    // Code to handle the dragEnd event.
                }
            </script>
        </kendo:sparkline-dragEnd>
    </kendo:sparkline>

### kendo:sparkline-plotAreaClick

Fires when plot area is clicked.


For additional information check the [plotAreaClick](/api/web/sparkline#events-plotAreaClick) event documentation.

#### Example
    <kendo:sparkline>
        <kendo:sparkline-plotAreaClick>
            <script>
                function(e) {
                    // Code to handle the plotAreaClick event.
                }
            </script>
        </kendo:sparkline-plotAreaClick>
    </kendo:sparkline>

### kendo:sparkline-seriesClick

Fires when chart series are clicked.


For additional information check the [seriesClick](/api/web/sparkline#events-seriesClick) event documentation.

#### Example
    <kendo:sparkline>
        <kendo:sparkline-seriesClick>
            <script>
                function(e) {
                    // Code to handle the seriesClick event.
                }
            </script>
        </kendo:sparkline-seriesClick>
    </kendo:sparkline>

### kendo:sparkline-seriesHover

Fires when chart series are hovered.


For additional information check the [seriesHover](/api/web/sparkline#events-seriesHover) event documentation.

#### Example
    <kendo:sparkline>
        <kendo:sparkline-seriesHover>
            <script>
                function(e) {
                    // Code to handle the seriesHover event.
                }
            </script>
        </kendo:sparkline-seriesHover>
    </kendo:sparkline>

### kendo:sparkline-zoomStart

Fires when the user has used the mousewheel to zoom the chart.The zoom operation can be aborted by calling e.preventDefault().


For additional information check the [zoomStart](/api/web/sparkline#events-zoomStart) event documentation.

#### Example
    <kendo:sparkline>
        <kendo:sparkline-zoomStart>
            <script>
                function(e) {
                    // Code to handle the zoomStart event.
                }
            </script>
        </kendo:sparkline-zoomStart>
    </kendo:sparkline>

### kendo:sparkline-zoom

Fires as long as the user is zooming the chart using the mousewheel.


For additional information check the [zoom](/api/web/sparkline#events-zoom) event documentation.

#### Example
    <kendo:sparkline>
        <kendo:sparkline-zoom>
            <script>
                function(e) {
                    // Code to handle the zoom event.
                }
            </script>
        </kendo:sparkline-zoom>
    </kendo:sparkline>

### kendo:sparkline-zoomEnd

Fires when the user stops zooming the chart.


For additional information check the [zoomEnd](/api/web/sparkline#events-zoomEnd) event documentation.

#### Example
    <kendo:sparkline>
        <kendo:sparkline-zoomEnd>
            <script>
                function(e) {
                    // Code to handle the zoomEnd event.
                }
            </script>
        </kendo:sparkline-zoomEnd>
    </kendo:sparkline>

