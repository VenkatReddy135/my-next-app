---
title: stockChart
slug: jsp-stockChart
tags: api, java
publish: true
---

# \<kendo:stockChart\>
A JSP wrapper for Kendo UI [StockChart](/api/dataviz/stockchart).

## Configuration Attributes

### autoBind `boolean`

Indicates whether the chart will call read on the data source initially.

#### Example
    <kendo:stockChart autoBind="autoBind">
    </kendo:stockChart>

### dateField `java.lang.String`

The field containing the point date.
It is used as a default categoryField for all series.The data item field value must be either:

#### Example
    <kendo:stockChart dateField="dateField">
    </kendo:stockChart>

### renderAs `java.lang.String`

Sets the preferred rendering engine.
If it is not supported by the browser, the Chart will switch to the first available mode.The supported values are:

#### Example
    <kendo:stockChart renderAs="renderAs">
    </kendo:stockChart>

### seriesColors `java.lang.Object`

The default colors for the chart's series. When all colors are used, new colors are pulled from the start again.

#### Example
    <kendo:stockChart seriesColors="seriesColors">
    </kendo:stockChart>

### theme `java.lang.String`

Sets Chart theme. Available themes: default, blueOpal, black.

#### Example
    <kendo:stockChart theme="theme">
    </kendo:stockChart>

### transitions `boolean`

A value indicating if transition animations should be played.

#### Example
    <kendo:stockChart transitions="transitions">
    </kendo:stockChart>


##  Configuration JSP Tags

### kendo:stockChart-categoryAxis

The category axis configuration options.

More documentation is available at [kendo:stockChart-categoryAxis](stockchart/categoryaxis).

#### Example

    <kendo:stockChart>
        <kendo:stockChart-categoryAxis></kendo:stockChart-categoryAxis>
    </kendo:stockChart>

### kendo:stockChart-chartArea

The chart area configuration options.
This is the entire visible area of the chart.

More documentation is available at [kendo:stockChart-chartArea](stockchart/chartarea).

#### Example

    <kendo:stockChart>
        <kendo:stockChart-chartArea></kendo:stockChart-chartArea>
    </kendo:stockChart>

### kendo:stockChart-legend

The chart legend configuration options.

More documentation is available at [kendo:stockChart-legend](stockchart/legend).

#### Example

    <kendo:stockChart>
        <kendo:stockChart-legend></kendo:stockChart-legend>
    </kendo:stockChart>

### kendo:stockChart-navigator

The data navigator configuration options.

More documentation is available at [kendo:stockChart-navigator](stockchart/navigator).

#### Example

    <kendo:stockChart>
        <kendo:stockChart-navigator></kendo:stockChart-navigator>
    </kendo:stockChart>

### kendo:stockChart-panes

The chart panes configuration.Panes are used to split the chart in two or more parts. The panes are ordered from top to bottom.Each axis can be associated with a pane by setting its pane option to the name of the desired pane.
Axis that don't have specified pane are placed in the top (default) pane.Series are moved to the desired pane by associating them with an axis.

More documentation is available at [kendo:stockChart-panes](stockchart/panes).

#### Example

    <kendo:stockChart>
        <kendo:stockChart-panes></kendo:stockChart-panes>
    </kendo:stockChart>

### kendo:stockChart-plotArea

The plot area configuration options. This is the area containing the plotted series.

More documentation is available at [kendo:stockChart-plotArea](stockchart/plotarea).

#### Example

    <kendo:stockChart>
        <kendo:stockChart-plotArea></kendo:stockChart-plotArea>
    </kendo:stockChart>

### kendo:stockChart-series

Array of series definitions.The series type is determined by the value of the type field.
If a type value is missing, the type is assumed to be the one specified in seriesDefaults.Each series type has a different set of options.

More documentation is available at [kendo:stockChart-series](stockchart/series).

#### Example

    <kendo:stockChart>
        <kendo:stockChart-series></kendo:stockChart-series>
    </kendo:stockChart>

### kendo:stockChart-title

The chart title configuration options or text.

More documentation is available at [kendo:stockChart-title](stockchart/title).

#### Example

    <kendo:stockChart>
        <kendo:stockChart-title></kendo:stockChart-title>
    </kendo:stockChart>

### kendo:stockChart-tooltip

The data point tooltip configuration options.

More documentation is available at [kendo:stockChart-tooltip](stockchart/tooltip).

#### Example

    <kendo:stockChart>
        <kendo:stockChart-tooltip></kendo:stockChart-tooltip>
    </kendo:stockChart>

### kendo:stockChart-valueAxis

The value axis configuration options.

More documentation is available at [kendo:stockChart-valueAxis](stockchart/valueaxis).

#### Example

    <kendo:stockChart>
        <kendo:stockChart-valueAxis></kendo:stockChart-valueAxis>
    </kendo:stockChart>


## Event Attributes

### axisLabelClick `String`

Fires when an axis label is clicked.


For additional information check the [axisLabelClick](/api/web/stockchart#events-axisLabelClick) event documentation.

#### Example
    <kendo:stockChart axisLabelClick="handle_axisLabelClick">
    </kendo:stockChart>
    <script>
        function handle_axisLabelClick(e) {
            // Code to handle the axisLabelClick event.
        }
    </script>

### legendItemClick `String`

Fires when an legend item is clicked.


For additional information check the [legendItemClick](/api/web/stockchart#events-legendItemClick) event documentation.

#### Example
    <kendo:stockChart legendItemClick="handle_legendItemClick">
    </kendo:stockChart>
    <script>
        function handle_legendItemClick(e) {
            // Code to handle the legendItemClick event.
        }
    </script>

### legendItemHover `String`

Fires when an legend item is hovered.


For additional information check the [legendItemHover](/api/web/stockchart#events-legendItemHover) event documentation.

#### Example
    <kendo:stockChart legendItemHover="handle_legendItemHover">
    </kendo:stockChart>
    <script>
        function handle_legendItemHover(e) {
            // Code to handle the legendItemHover event.
        }
    </script>

### dataBound `String`

Fires when the chart has received data from the data source
and is about to render it.


For additional information check the [dataBound](/api/web/stockchart#events-dataBound) event documentation.

#### Example
    <kendo:stockChart dataBound="handle_dataBound">
    </kendo:stockChart>
    <script>
        function handle_dataBound(e) {
            // Code to handle the dataBound event.
        }
    </script>

### dragStart `String`

Fires when the user has used the mouse or a swipe gesture to drag the chart.The drag operation can be aborted by calling e.preventDefault().


For additional information check the [dragStart](/api/web/stockchart#events-dragStart) event documentation.

#### Example
    <kendo:stockChart dragStart="handle_dragStart">
    </kendo:stockChart>
    <script>
        function handle_dragStart(e) {
            // Code to handle the dragStart event.
        }
    </script>

### drag `String`

Fires as long as the user is dragging the chart using the mouse or swipe gestures.


For additional information check the [drag](/api/web/stockchart#events-drag) event documentation.

#### Example
    <kendo:stockChart drag="handle_drag">
    </kendo:stockChart>
    <script>
        function handle_drag(e) {
            // Code to handle the drag event.
        }
    </script>

### dragEnd `String`

Fires when the user stops dragging the chart.


For additional information check the [dragEnd](/api/web/stockchart#events-dragEnd) event documentation.

#### Example
    <kendo:stockChart dragEnd="handle_dragEnd">
    </kendo:stockChart>
    <script>
        function handle_dragEnd(e) {
            // Code to handle the dragEnd event.
        }
    </script>

### plotAreaClick `String`

Fires when plot area is clicked.


For additional information check the [plotAreaClick](/api/web/stockchart#events-plotAreaClick) event documentation.

#### Example
    <kendo:stockChart plotAreaClick="handle_plotAreaClick">
    </kendo:stockChart>
    <script>
        function handle_plotAreaClick(e) {
            // Code to handle the plotAreaClick event.
        }
    </script>

### seriesClick `String`

Fires when chart series are clicked.


For additional information check the [seriesClick](/api/web/stockchart#events-seriesClick) event documentation.

#### Example
    <kendo:stockChart seriesClick="handle_seriesClick">
    </kendo:stockChart>
    <script>
        function handle_seriesClick(e) {
            // Code to handle the seriesClick event.
        }
    </script>

### seriesHover `String`

Fires when chart series are hovered.


For additional information check the [seriesHover](/api/web/stockchart#events-seriesHover) event documentation.

#### Example
    <kendo:stockChart seriesHover="handle_seriesHover">
    </kendo:stockChart>
    <script>
        function handle_seriesHover(e) {
            // Code to handle the seriesHover event.
        }
    </script>

### zoomStart `String`

Fires when the user has used the mousewheel to zoom the chart.The zoom operation can be aborted by calling e.preventDefault().


For additional information check the [zoomStart](/api/web/stockchart#events-zoomStart) event documentation.

#### Example
    <kendo:stockChart zoomStart="handle_zoomStart">
    </kendo:stockChart>
    <script>
        function handle_zoomStart(e) {
            // Code to handle the zoomStart event.
        }
    </script>

### zoom `String`

Fires as long as the user is zooming the chart using the mousewheel.


For additional information check the [zoom](/api/web/stockchart#events-zoom) event documentation.

#### Example
    <kendo:stockChart zoom="handle_zoom">
    </kendo:stockChart>
    <script>
        function handle_zoom(e) {
            // Code to handle the zoom event.
        }
    </script>

### zoomEnd `String`

Fires when the user stops zooming the chart.


For additional information check the [zoomEnd](/api/web/stockchart#events-zoomEnd) event documentation.

#### Example
    <kendo:stockChart zoomEnd="handle_zoomEnd">
    </kendo:stockChart>
    <script>
        function handle_zoomEnd(e) {
            // Code to handle the zoomEnd event.
        }
    </script>

### selectStart `String`

Fires when the user starts modifying the axis selection.The range units are:


For additional information check the [selectStart](/api/web/stockchart#events-selectStart) event documentation.

#### Example
    <kendo:stockChart selectStart="handle_selectStart">
    </kendo:stockChart>
    <script>
        function handle_selectStart(e) {
            // Code to handle the selectStart event.
        }
    </script>

### select `String`

Fires when the user modifies the selection.The range units are:


For additional information check the [select](/api/web/stockchart#events-select) event documentation.

#### Example
    <kendo:stockChart select="handle_select">
    </kendo:stockChart>
    <script>
        function handle_select(e) {
            // Code to handle the select event.
        }
    </script>

### selectEnd `String`

Fires when the user completes modifying the selection.


For additional information check the [selectEnd](/api/web/stockchart#events-selectEnd) event documentation.

#### Example
    <kendo:stockChart selectEnd="handle_selectEnd">
    </kendo:stockChart>
    <script>
        function handle_selectEnd(e) {
            // Code to handle the selectEnd event.
        }
    </script>

## Event Tags

### kendo:stockChart-axisLabelClick

Fires when an axis label is clicked.


For additional information check the [axisLabelClick](/api/web/stockchart#events-axisLabelClick) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-axisLabelClick>
            <script>
                function(e) {
                    // Code to handle the axisLabelClick event.
                }
            </script>
        </kendo:stockChart-axisLabelClick>
    </kendo:stockChart>

### kendo:stockChart-legendItemClick

Fires when an legend item is clicked.


For additional information check the [legendItemClick](/api/web/stockchart#events-legendItemClick) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-legendItemClick>
            <script>
                function(e) {
                    // Code to handle the legendItemClick event.
                }
            </script>
        </kendo:stockChart-legendItemClick>
    </kendo:stockChart>

### kendo:stockChart-legendItemHover

Fires when an legend item is hovered.


For additional information check the [legendItemHover](/api/web/stockchart#events-legendItemHover) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-legendItemHover>
            <script>
                function(e) {
                    // Code to handle the legendItemHover event.
                }
            </script>
        </kendo:stockChart-legendItemHover>
    </kendo:stockChart>

### kendo:stockChart-dataBound

Fires when the chart has received data from the data source
and is about to render it.


For additional information check the [dataBound](/api/web/stockchart#events-dataBound) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-dataBound>
            <script>
                function(e) {
                    // Code to handle the dataBound event.
                }
            </script>
        </kendo:stockChart-dataBound>
    </kendo:stockChart>

### kendo:stockChart-dragStart

Fires when the user has used the mouse or a swipe gesture to drag the chart.The drag operation can be aborted by calling e.preventDefault().


For additional information check the [dragStart](/api/web/stockchart#events-dragStart) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-dragStart>
            <script>
                function(e) {
                    // Code to handle the dragStart event.
                }
            </script>
        </kendo:stockChart-dragStart>
    </kendo:stockChart>

### kendo:stockChart-drag

Fires as long as the user is dragging the chart using the mouse or swipe gestures.


For additional information check the [drag](/api/web/stockchart#events-drag) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-drag>
            <script>
                function(e) {
                    // Code to handle the drag event.
                }
            </script>
        </kendo:stockChart-drag>
    </kendo:stockChart>

### kendo:stockChart-dragEnd

Fires when the user stops dragging the chart.


For additional information check the [dragEnd](/api/web/stockchart#events-dragEnd) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-dragEnd>
            <script>
                function(e) {
                    // Code to handle the dragEnd event.
                }
            </script>
        </kendo:stockChart-dragEnd>
    </kendo:stockChart>

### kendo:stockChart-plotAreaClick

Fires when plot area is clicked.


For additional information check the [plotAreaClick](/api/web/stockchart#events-plotAreaClick) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-plotAreaClick>
            <script>
                function(e) {
                    // Code to handle the plotAreaClick event.
                }
            </script>
        </kendo:stockChart-plotAreaClick>
    </kendo:stockChart>

### kendo:stockChart-seriesClick

Fires when chart series are clicked.


For additional information check the [seriesClick](/api/web/stockchart#events-seriesClick) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-seriesClick>
            <script>
                function(e) {
                    // Code to handle the seriesClick event.
                }
            </script>
        </kendo:stockChart-seriesClick>
    </kendo:stockChart>

### kendo:stockChart-seriesHover

Fires when chart series are hovered.


For additional information check the [seriesHover](/api/web/stockchart#events-seriesHover) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-seriesHover>
            <script>
                function(e) {
                    // Code to handle the seriesHover event.
                }
            </script>
        </kendo:stockChart-seriesHover>
    </kendo:stockChart>

### kendo:stockChart-zoomStart

Fires when the user has used the mousewheel to zoom the chart.The zoom operation can be aborted by calling e.preventDefault().


For additional information check the [zoomStart](/api/web/stockchart#events-zoomStart) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-zoomStart>
            <script>
                function(e) {
                    // Code to handle the zoomStart event.
                }
            </script>
        </kendo:stockChart-zoomStart>
    </kendo:stockChart>

### kendo:stockChart-zoom

Fires as long as the user is zooming the chart using the mousewheel.


For additional information check the [zoom](/api/web/stockchart#events-zoom) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-zoom>
            <script>
                function(e) {
                    // Code to handle the zoom event.
                }
            </script>
        </kendo:stockChart-zoom>
    </kendo:stockChart>

### kendo:stockChart-zoomEnd

Fires when the user stops zooming the chart.


For additional information check the [zoomEnd](/api/web/stockchart#events-zoomEnd) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-zoomEnd>
            <script>
                function(e) {
                    // Code to handle the zoomEnd event.
                }
            </script>
        </kendo:stockChart-zoomEnd>
    </kendo:stockChart>

### kendo:stockChart-selectStart

Fires when the user starts modifying the axis selection.The range units are:


For additional information check the [selectStart](/api/web/stockchart#events-selectStart) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-selectStart>
            <script>
                function(e) {
                    // Code to handle the selectStart event.
                }
            </script>
        </kendo:stockChart-selectStart>
    </kendo:stockChart>

### kendo:stockChart-select

Fires when the user modifies the selection.The range units are:


For additional information check the [select](/api/web/stockchart#events-select) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-select>
            <script>
                function(e) {
                    // Code to handle the select event.
                }
            </script>
        </kendo:stockChart-select>
    </kendo:stockChart>

### kendo:stockChart-selectEnd

Fires when the user completes modifying the selection.


For additional information check the [selectEnd](/api/web/stockchart#events-selectEnd) event documentation.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-selectEnd>
            <script>
                function(e) {
                    // Code to handle the selectEnd event.
                }
            </script>
        </kendo:stockChart-selectEnd>
    </kendo:stockChart>

