---
title: stockChart-valueAxisItem-crosshair-tooltip
slug: jsp-stockChart-valueAxisItem-crosshair-tooltip
tags: api, java
publish: true
---

# \<kendo:stockChart-valueAxisItem-crosshair-tooltip\>

The crosshar tooltip configuration options.

#### Example
    <kendo:stockChart-valueAxisItem-crosshair>
        <kendo:stockChart-valueAxisItem-crosshair-tooltip></kendo:stockChart-valueAxisItem-crosshair-tooltip>
    </kendo:stockChart-valueAxisItem-crosshair>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip.

#### Example
    <kendo:stockChart-valueAxisItem-crosshair-tooltip background="background">
    </kendo:stockChart-valueAxisItem-crosshair-tooltip>

### color `java.lang.String`

The text color of the tooltip.

#### Example
    <kendo:stockChart-valueAxisItem-crosshair-tooltip color="color">
    </kendo:stockChart-valueAxisItem-crosshair-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:stockChart-valueAxisItem-crosshair-tooltip font="font">
    </kendo:stockChart-valueAxisItem-crosshair-tooltip>

### format `java.lang.String`

The tooltip format.

#### Example
    <kendo:stockChart-valueAxisItem-crosshair-tooltip format="format">
    </kendo:stockChart-valueAxisItem-crosshair-tooltip>

### padding `java.lang.Object`

The padding of the tooltip.

#### Example
    <kendo:stockChart-valueAxisItem-crosshair-tooltip padding="padding">
    </kendo:stockChart-valueAxisItem-crosshair-tooltip>

### template `java.lang.String`

The tooltip template.
Template variables:

#### Example
    <kendo:stockChart-valueAxisItem-crosshair-tooltip template="template">
    </kendo:stockChart-valueAxisItem-crosshair-tooltip>

### visible `boolean`

A value indicating if the tooltip should be displayed.

#### Example
    <kendo:stockChart-valueAxisItem-crosshair-tooltip visible="visible">
    </kendo:stockChart-valueAxisItem-crosshair-tooltip>


##  Configuration JSP Tags

### kendo:stockChart-valueAxisItem-crosshair-tooltip-border

The border configuration options.

More documentation is available at [kendo:stockChart-valueAxisItem-crosshair-tooltip-border](stockchart/valueaxisitem-crosshair-tooltip-border).

#### Example

    <kendo:stockChart-valueAxisItem-crosshair-tooltip>
        <kendo:stockChart-valueAxisItem-crosshair-tooltip-border></kendo:stockChart-valueAxisItem-crosshair-tooltip-border>
    </kendo:stockChart-valueAxisItem-crosshair-tooltip>


## Event Attributes

### template `String`

The tooltip template.
Template variables:


#### Example
    <kendo:stockChart-valueAxisItem-crosshair-tooltip template="handle_template">
    </kendo:stockChart-valueAxisItem-crosshair-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-valueAxisItem-crosshair-tooltip-template

The tooltip template.
Template variables:


#### Example
    <kendo:stockChart-valueAxisItem-crosshair-tooltip>
        <kendo:stockChart-valueAxisItem-crosshair-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-valueAxisItem-crosshair-tooltip-template>
    </kendo:stockChart-valueAxisItem-crosshair-tooltip>

