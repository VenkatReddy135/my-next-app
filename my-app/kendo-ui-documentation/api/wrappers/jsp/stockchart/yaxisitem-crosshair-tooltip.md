---
title: stockChart-yAxisItem-crosshair-tooltip
slug: jsp-stockChart-yAxisItem-crosshair-tooltip
tags: api, java
publish: true
---

# \<kendo:stockChart-yAxisItem-crosshair-tooltip\>

The crosshar tooltip configuration options.

#### Example
    <kendo:stockChart-yAxisItem-crosshair>
        <kendo:stockChart-yAxisItem-crosshair-tooltip></kendo:stockChart-yAxisItem-crosshair-tooltip>
    </kendo:stockChart-yAxisItem-crosshair>

## Configuration Attributes

### background `String`

The background color of the tooltip.

#### Example
    <kendo:stockChart-yAxisItem-crosshair-tooltip background="background">
    </kendo:stockChart-yAxisItem-crosshair-tooltip>

### color `String`

The text color of the tooltip.

#### Example
    <kendo:stockChart-yAxisItem-crosshair-tooltip color="color">
    </kendo:stockChart-yAxisItem-crosshair-tooltip>

### font `String`

The tooltip font.

#### Example
    <kendo:stockChart-yAxisItem-crosshair-tooltip font="font">
    </kendo:stockChart-yAxisItem-crosshair-tooltip>

### format `String`

The tooltip format.

#### Example
    <kendo:stockChart-yAxisItem-crosshair-tooltip format="format">
    </kendo:stockChart-yAxisItem-crosshair-tooltip>

### padding `Object`

The padding of the tooltip.

#### Example
    <kendo:stockChart-yAxisItem-crosshair-tooltip padding="padding">
    </kendo:stockChart-yAxisItem-crosshair-tooltip>

### template `String`

The tooltip template.
Template variables:

#### Example
    <kendo:stockChart-yAxisItem-crosshair-tooltip template="template">
    </kendo:stockChart-yAxisItem-crosshair-tooltip>

### visible `boolean`

A value indicating if the tooltip should be displayed.

#### Example
    <kendo:stockChart-yAxisItem-crosshair-tooltip visible="visible">
    </kendo:stockChart-yAxisItem-crosshair-tooltip>


##  Configuration JSP Tags

### kendo:stockChart-yAxisItem-crosshair-tooltip-border

The border configuration options.

More documentation is available at [kendo:stockChart-yAxisItem-crosshair-tooltip-border](stockchart/yaxisitem-crosshair-tooltip-border).

#### Example

    <kendo:stockChart-yAxisItem-crosshair-tooltip>
        <kendo:stockChart-yAxisItem-crosshair-tooltip-border></kendo:stockChart-yAxisItem-crosshair-tooltip-border>
    </kendo:stockChart-yAxisItem-crosshair-tooltip>


## Event Attributes

### template `String`

The tooltip template.
Template variables:


#### Example
    <kendo:stockChart-yAxisItem-crosshair-tooltip template="handle_template">
    </kendo:stockChart-yAxisItem-crosshair-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-yAxisItem-crosshair-tooltip-template

The tooltip template.
Template variables:


#### Example
    <kendo:stockChart-yAxisItem-crosshair-tooltip>
        <kendo:stockChart-yAxisItem-crosshair-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-yAxisItem-crosshair-tooltip-template>
    </kendo:stockChart-yAxisItem-crosshair-tooltip>

