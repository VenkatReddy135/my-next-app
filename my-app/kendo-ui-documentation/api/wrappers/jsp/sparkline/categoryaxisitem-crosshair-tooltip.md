---
title: sparkline-categoryAxisItem-crosshair-tooltip
slug: jsp-sparkline-categoryAxisItem-crosshair-tooltip
tags: api, java
publish: true
---

# \<kendo:sparkline-categoryAxisItem-crosshair-tooltip\>

The crosshar tooltip configuration options.

#### Example
    <kendo:sparkline-categoryAxisItem-crosshair>
        <kendo:sparkline-categoryAxisItem-crosshair-tooltip></kendo:sparkline-categoryAxisItem-crosshair-tooltip>
    </kendo:sparkline-categoryAxisItem-crosshair>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip.

#### Example
    <kendo:sparkline-categoryAxisItem-crosshair-tooltip background="background">
    </kendo:sparkline-categoryAxisItem-crosshair-tooltip>

### color `java.lang.String`

The text color of the tooltip.

#### Example
    <kendo:sparkline-categoryAxisItem-crosshair-tooltip color="color">
    </kendo:sparkline-categoryAxisItem-crosshair-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:sparkline-categoryAxisItem-crosshair-tooltip font="font">
    </kendo:sparkline-categoryAxisItem-crosshair-tooltip>

### format `java.lang.String`

The tooltip format.

#### Example
    <kendo:sparkline-categoryAxisItem-crosshair-tooltip format="format">
    </kendo:sparkline-categoryAxisItem-crosshair-tooltip>

### padding `java.lang.Object`

The padding of the tooltip.

#### Example
    <kendo:sparkline-categoryAxisItem-crosshair-tooltip padding="padding">
    </kendo:sparkline-categoryAxisItem-crosshair-tooltip>

### template `java.lang.String`

The tooltip template.
Template variables:

#### Example
    <kendo:sparkline-categoryAxisItem-crosshair-tooltip template="template">
    </kendo:sparkline-categoryAxisItem-crosshair-tooltip>

### visible `boolean`

A value indicating if the tooltip should be displayed.

#### Example
    <kendo:sparkline-categoryAxisItem-crosshair-tooltip visible="visible">
    </kendo:sparkline-categoryAxisItem-crosshair-tooltip>


##  Configuration JSP Tags

### kendo:sparkline-categoryAxisItem-crosshair-tooltip-border

The border configuration options.

More documentation is available at [kendo:sparkline-categoryAxisItem-crosshair-tooltip-border](sparkline/categoryaxisitem-crosshair-tooltip-border).

#### Example

    <kendo:sparkline-categoryAxisItem-crosshair-tooltip>
        <kendo:sparkline-categoryAxisItem-crosshair-tooltip-border></kendo:sparkline-categoryAxisItem-crosshair-tooltip-border>
    </kendo:sparkline-categoryAxisItem-crosshair-tooltip>


## Event Attributes

### template `String`

The tooltip template.
Template variables:


#### Example
    <kendo:sparkline-categoryAxisItem-crosshair-tooltip template="handle_template">
    </kendo:sparkline-categoryAxisItem-crosshair-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:sparkline-categoryAxisItem-crosshair-tooltip-template

The tooltip template.
Template variables:


#### Example
    <kendo:sparkline-categoryAxisItem-crosshair-tooltip>
        <kendo:sparkline-categoryAxisItem-crosshair-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:sparkline-categoryAxisItem-crosshair-tooltip-template>
    </kendo:sparkline-categoryAxisItem-crosshair-tooltip>

