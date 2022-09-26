---
title: sparkline-valueAxisItem-crosshair-tooltip
slug: jsp-sparkline-valueAxisItem-crosshair-tooltip
tags: api, java
publish: true
---

# \<kendo:sparkline-valueAxisItem-crosshair-tooltip\>

The crosshar tooltip configuration options.

#### Example
    <kendo:sparkline-valueAxisItem-crosshair>
        <kendo:sparkline-valueAxisItem-crosshair-tooltip></kendo:sparkline-valueAxisItem-crosshair-tooltip>
    </kendo:sparkline-valueAxisItem-crosshair>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip.

#### Example
    <kendo:sparkline-valueAxisItem-crosshair-tooltip background="background">
    </kendo:sparkline-valueAxisItem-crosshair-tooltip>

### color `java.lang.String`

The text color of the tooltip.

#### Example
    <kendo:sparkline-valueAxisItem-crosshair-tooltip color="color">
    </kendo:sparkline-valueAxisItem-crosshair-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:sparkline-valueAxisItem-crosshair-tooltip font="font">
    </kendo:sparkline-valueAxisItem-crosshair-tooltip>

### format `java.lang.String`

The tooltip format.

#### Example
    <kendo:sparkline-valueAxisItem-crosshair-tooltip format="format">
    </kendo:sparkline-valueAxisItem-crosshair-tooltip>

### padding `java.lang.Object`

The padding of the tooltip.

#### Example
    <kendo:sparkline-valueAxisItem-crosshair-tooltip padding="padding">
    </kendo:sparkline-valueAxisItem-crosshair-tooltip>

### template `java.lang.String`

The tooltip template.
Template variables:

#### Example
    <kendo:sparkline-valueAxisItem-crosshair-tooltip template="template">
    </kendo:sparkline-valueAxisItem-crosshair-tooltip>

### visible `boolean`

A value indicating if the tooltip should be displayed.

#### Example
    <kendo:sparkline-valueAxisItem-crosshair-tooltip visible="visible">
    </kendo:sparkline-valueAxisItem-crosshair-tooltip>


##  Configuration JSP Tags

### kendo:sparkline-valueAxisItem-crosshair-tooltip-border

The border configuration options.

More documentation is available at [kendo:sparkline-valueAxisItem-crosshair-tooltip-border](sparkline/valueaxisitem-crosshair-tooltip-border).

#### Example

    <kendo:sparkline-valueAxisItem-crosshair-tooltip>
        <kendo:sparkline-valueAxisItem-crosshair-tooltip-border></kendo:sparkline-valueAxisItem-crosshair-tooltip-border>
    </kendo:sparkline-valueAxisItem-crosshair-tooltip>


## Event Attributes

### template `String`

The tooltip template.
Template variables:


#### Example
    <kendo:sparkline-valueAxisItem-crosshair-tooltip template="handle_template">
    </kendo:sparkline-valueAxisItem-crosshair-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:sparkline-valueAxisItem-crosshair-tooltip-template

The tooltip template.
Template variables:


#### Example
    <kendo:sparkline-valueAxisItem-crosshair-tooltip>
        <kendo:sparkline-valueAxisItem-crosshair-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:sparkline-valueAxisItem-crosshair-tooltip-template>
    </kendo:sparkline-valueAxisItem-crosshair-tooltip>

