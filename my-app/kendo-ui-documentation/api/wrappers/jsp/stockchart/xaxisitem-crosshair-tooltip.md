---
title: stockChart-xAxisItem-crosshair-tooltip
slug: jsp-stockChart-xAxisItem-crosshair-tooltip
tags: api, java
publish: true
---

# \<kendo:stockChart-xAxisItem-crosshair-tooltip\>

The crosshar tooltip configuration options.

#### Example
    <kendo:stockChart-xAxisItem-crosshair>
        <kendo:stockChart-xAxisItem-crosshair-tooltip></kendo:stockChart-xAxisItem-crosshair-tooltip>
    </kendo:stockChart-xAxisItem-crosshair>

## Configuration Attributes

### background `String`

The background color of the tooltip.

#### Example
    <kendo:stockChart-xAxisItem-crosshair-tooltip background="background">
    </kendo:stockChart-xAxisItem-crosshair-tooltip>

### color `String`

The text color of the tooltip.

#### Example
    <kendo:stockChart-xAxisItem-crosshair-tooltip color="color">
    </kendo:stockChart-xAxisItem-crosshair-tooltip>

### font `String`

The tooltip font.

#### Example
    <kendo:stockChart-xAxisItem-crosshair-tooltip font="font">
    </kendo:stockChart-xAxisItem-crosshair-tooltip>

### format `String`

The tooltip format.

#### Example
    <kendo:stockChart-xAxisItem-crosshair-tooltip format="format">
    </kendo:stockChart-xAxisItem-crosshair-tooltip>

### padding `Object`

The padding of the tooltip.

#### Example
    <kendo:stockChart-xAxisItem-crosshair-tooltip padding="padding">
    </kendo:stockChart-xAxisItem-crosshair-tooltip>

### template `String`

The tooltip template.
Template variables:

#### Example
    <kendo:stockChart-xAxisItem-crosshair-tooltip template="template">
    </kendo:stockChart-xAxisItem-crosshair-tooltip>

### visible `boolean`

A value indicating if the tooltip should be displayed.

#### Example
    <kendo:stockChart-xAxisItem-crosshair-tooltip visible="visible">
    </kendo:stockChart-xAxisItem-crosshair-tooltip>


##  Configuration JSP Tags

### kendo:stockChart-xAxisItem-crosshair-tooltip-border

The border configuration options.

More documentation is available at [kendo:stockChart-xAxisItem-crosshair-tooltip-border](stockchart/xaxisitem-crosshair-tooltip-border).

#### Example

    <kendo:stockChart-xAxisItem-crosshair-tooltip>
        <kendo:stockChart-xAxisItem-crosshair-tooltip-border></kendo:stockChart-xAxisItem-crosshair-tooltip-border>
    </kendo:stockChart-xAxisItem-crosshair-tooltip>


## Event Attributes

### template `String`

The tooltip template.
Template variables:


#### Example
    <kendo:stockChart-xAxisItem-crosshair-tooltip template="handle_template">
    </kendo:stockChart-xAxisItem-crosshair-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-xAxisItem-crosshair-tooltip-template

The tooltip template.
Template variables:


#### Example
    <kendo:stockChart-xAxisItem-crosshair-tooltip>
        <kendo:stockChart-xAxisItem-crosshair-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-xAxisItem-crosshair-tooltip-template>
    </kendo:stockChart-xAxisItem-crosshair-tooltip>

