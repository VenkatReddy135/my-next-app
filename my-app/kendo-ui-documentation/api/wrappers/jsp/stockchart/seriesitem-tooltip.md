---
title: stockChart-seriesItem-tooltip
slug: jsp-stockChart-seriesItem-tooltip
tags: api, java
publish: true
---

# \<kendo:stockChart-seriesItem-tooltip\>

The data point tooltip configuration options.

#### Example
    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-tooltip></kendo:stockChart-seriesItem-tooltip>
    </kendo:stockChart-seriesItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip. The default is determined from the series color.

#### Example
    <kendo:stockChart-seriesItem-tooltip background="background">
    </kendo:stockChart-seriesItem-tooltip>

### color `java.lang.String`

The text color of the tooltip. The default is the same as the series labels color.

#### Example
    <kendo:stockChart-seriesItem-tooltip color="color">
    </kendo:stockChart-seriesItem-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:stockChart-seriesItem-tooltip font="font">
    </kendo:stockChart-seriesItem-tooltip>

### format `java.lang.String`

The tooltip format. Format variables depend on the series type:

#### Example
    <kendo:stockChart-seriesItem-tooltip format="format">
    </kendo:stockChart-seriesItem-tooltip>

### padding `java.lang.Object`

The padding of the tooltip.

#### Example
    <kendo:stockChart-seriesItem-tooltip padding="padding">
    </kendo:stockChart-seriesItem-tooltip>

### template `java.lang.String`

The tooltip template.
Template variables:

#### Example
    <kendo:stockChart-seriesItem-tooltip template="template">
    </kendo:stockChart-seriesItem-tooltip>

### visible `boolean`

A value indicating if the tooltip should be displayed.

#### Example
    <kendo:stockChart-seriesItem-tooltip visible="visible">
    </kendo:stockChart-seriesItem-tooltip>


##  Configuration JSP Tags

### kendo:stockChart-seriesItem-tooltip-border

The border configuration options.

More documentation is available at [kendo:stockChart-seriesItem-tooltip-border](stockchart/seriesitem-tooltip-border).

#### Example

    <kendo:stockChart-seriesItem-tooltip>
        <kendo:stockChart-seriesItem-tooltip-border></kendo:stockChart-seriesItem-tooltip-border>
    </kendo:stockChart-seriesItem-tooltip>


## Event Attributes

### template `String`

The tooltip template.
Template variables:


#### Example
    <kendo:stockChart-seriesItem-tooltip template="handle_template">
    </kendo:stockChart-seriesItem-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-seriesItem-tooltip-template

The tooltip template.
Template variables:


#### Example
    <kendo:stockChart-seriesItem-tooltip>
        <kendo:stockChart-seriesItem-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-seriesItem-tooltip-template>
    </kendo:stockChart-seriesItem-tooltip>

