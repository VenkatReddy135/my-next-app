---
title: stockChart-categoryAxisItem-crosshair-tooltip
slug: jsp-stockChart-categoryAxisItem-crosshair-tooltip
tags: api, java
publish: true
---

# \<kendo:stockChart-categoryAxisItem-crosshair-tooltip\>

The crosshar tooltip configuration options.

#### Example
    <kendo:stockChart-categoryAxisItem-crosshair>
        <kendo:stockChart-categoryAxisItem-crosshair-tooltip></kendo:stockChart-categoryAxisItem-crosshair-tooltip>
    </kendo:stockChart-categoryAxisItem-crosshair>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip.

#### Example
    <kendo:stockChart-categoryAxisItem-crosshair-tooltip background="background">
    </kendo:stockChart-categoryAxisItem-crosshair-tooltip>

### color `java.lang.String`

The text color of the tooltip.

#### Example
    <kendo:stockChart-categoryAxisItem-crosshair-tooltip color="color">
    </kendo:stockChart-categoryAxisItem-crosshair-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:stockChart-categoryAxisItem-crosshair-tooltip font="font">
    </kendo:stockChart-categoryAxisItem-crosshair-tooltip>

### format `java.lang.String`

The tooltip format.

#### Example
    <kendo:stockChart-categoryAxisItem-crosshair-tooltip format="format">
    </kendo:stockChart-categoryAxisItem-crosshair-tooltip>

### padding `java.lang.Object`

The padding of the tooltip.

#### Example
    <kendo:stockChart-categoryAxisItem-crosshair-tooltip padding="padding">
    </kendo:stockChart-categoryAxisItem-crosshair-tooltip>

### template `java.lang.String`

The tooltip template.
Template variables:

#### Example
    <kendo:stockChart-categoryAxisItem-crosshair-tooltip template="template">
    </kendo:stockChart-categoryAxisItem-crosshair-tooltip>

### visible `boolean`

A value indicating if the tooltip should be displayed.

#### Example
    <kendo:stockChart-categoryAxisItem-crosshair-tooltip visible="visible">
    </kendo:stockChart-categoryAxisItem-crosshair-tooltip>


##  Configuration JSP Tags

### kendo:stockChart-categoryAxisItem-crosshair-tooltip-border

The border configuration options.

More documentation is available at [kendo:stockChart-categoryAxisItem-crosshair-tooltip-border](stockchart/categoryaxisitem-crosshair-tooltip-border).

#### Example

    <kendo:stockChart-categoryAxisItem-crosshair-tooltip>
        <kendo:stockChart-categoryAxisItem-crosshair-tooltip-border></kendo:stockChart-categoryAxisItem-crosshair-tooltip-border>
    </kendo:stockChart-categoryAxisItem-crosshair-tooltip>


## Event Attributes

### template `String`

The tooltip template.
Template variables:


#### Example
    <kendo:stockChart-categoryAxisItem-crosshair-tooltip template="handle_template">
    </kendo:stockChart-categoryAxisItem-crosshair-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-categoryAxisItem-crosshair-tooltip-template

The tooltip template.
Template variables:


#### Example
    <kendo:stockChart-categoryAxisItem-crosshair-tooltip>
        <kendo:stockChart-categoryAxisItem-crosshair-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-categoryAxisItem-crosshair-tooltip-template>
    </kendo:stockChart-categoryAxisItem-crosshair-tooltip>

