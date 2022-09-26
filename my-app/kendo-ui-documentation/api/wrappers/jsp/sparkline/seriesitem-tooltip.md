---
title: sparkline-seriesItem-tooltip
slug: jsp-sparkline-seriesItem-tooltip
tags: api, java
publish: true
---

# \<kendo:sparkline-seriesItem-tooltip\>

The data point tooltip configuration options.

#### Example
    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-tooltip></kendo:sparkline-seriesItem-tooltip>
    </kendo:sparkline-seriesItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip. The default is determined from the series color.

#### Example
    <kendo:sparkline-seriesItem-tooltip background="background">
    </kendo:sparkline-seriesItem-tooltip>

### color `java.lang.String`

The text color of the tooltip. The default is the same as the series labels color.

#### Example
    <kendo:sparkline-seriesItem-tooltip color="color">
    </kendo:sparkline-seriesItem-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:sparkline-seriesItem-tooltip font="font">
    </kendo:sparkline-seriesItem-tooltip>

### format `java.lang.String`

The tooltip format. Format variables depend on the series type:

#### Example
    <kendo:sparkline-seriesItem-tooltip format="format">
    </kendo:sparkline-seriesItem-tooltip>

### padding `java.lang.Object`

The padding of the tooltip.

#### Example
    <kendo:sparkline-seriesItem-tooltip padding="padding">
    </kendo:sparkline-seriesItem-tooltip>

### template `java.lang.String`

The tooltip template.
Template variables:

#### Example
    <kendo:sparkline-seriesItem-tooltip template="template">
    </kendo:sparkline-seriesItem-tooltip>

### visible `boolean`

A value indicating if the tooltip should be displayed.

#### Example
    <kendo:sparkline-seriesItem-tooltip visible="visible">
    </kendo:sparkline-seriesItem-tooltip>


##  Configuration JSP Tags

### kendo:sparkline-seriesItem-tooltip-border

The border configuration options.

More documentation is available at [kendo:sparkline-seriesItem-tooltip-border](sparkline/seriesitem-tooltip-border).

#### Example

    <kendo:sparkline-seriesItem-tooltip>
        <kendo:sparkline-seriesItem-tooltip-border></kendo:sparkline-seriesItem-tooltip-border>
    </kendo:sparkline-seriesItem-tooltip>


## Event Attributes

### template `String`

The tooltip template.
Template variables:


#### Example
    <kendo:sparkline-seriesItem-tooltip template="handle_template">
    </kendo:sparkline-seriesItem-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:sparkline-seriesItem-tooltip-template

The tooltip template.
Template variables:


#### Example
    <kendo:sparkline-seriesItem-tooltip>
        <kendo:sparkline-seriesItem-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:sparkline-seriesItem-tooltip-template>
    </kendo:sparkline-seriesItem-tooltip>

