---
title: stockChart-navigator-seriesItem-tooltip
slug: jsp-stockChart-navigator-seriesItem-tooltip
tags: api, java
publish: true
---

# \<kendo:stockChart-navigator-seriesItem-tooltip\>

The data point tooltip configuration options.

#### Example
    <kendo:stockChart-navigator-seriesItem>
        <kendo:stockChart-navigator-seriesItem-tooltip></kendo:stockChart-navigator-seriesItem-tooltip>
    </kendo:stockChart-navigator-seriesItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip. The default is determined from the series color.

#### Example
    <kendo:stockChart-navigator-seriesItem-tooltip background="background">
    </kendo:stockChart-navigator-seriesItem-tooltip>

### color `java.lang.String`

The text color of the tooltip. The default is the same as the series labels color.

#### Example
    <kendo:stockChart-navigator-seriesItem-tooltip color="color">
    </kendo:stockChart-navigator-seriesItem-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:stockChart-navigator-seriesItem-tooltip font="font">
    </kendo:stockChart-navigator-seriesItem-tooltip>

### format `java.lang.String`

The tooltip format. Format variables depend on the series type:

#### Example
    <kendo:stockChart-navigator-seriesItem-tooltip format="format">
    </kendo:stockChart-navigator-seriesItem-tooltip>

### padding `java.lang.Object`

The padding of the tooltip.

#### Example
    <kendo:stockChart-navigator-seriesItem-tooltip padding="padding">
    </kendo:stockChart-navigator-seriesItem-tooltip>

### template `java.lang.String`

The tooltip template.
Template variables:

#### Example
    <kendo:stockChart-navigator-seriesItem-tooltip template="template">
    </kendo:stockChart-navigator-seriesItem-tooltip>

### visible `boolean`

A value indicating if the tooltip should be displayed.

#### Example
    <kendo:stockChart-navigator-seriesItem-tooltip visible="visible">
    </kendo:stockChart-navigator-seriesItem-tooltip>


##  Configuration JSP Tags

### kendo:stockChart-navigator-seriesItem-tooltip-border

The border configuration options.

More documentation is available at [kendo:stockChart-navigator-seriesItem-tooltip-border](stockchart/navigator-seriesitem-tooltip-border).

#### Example

    <kendo:stockChart-navigator-seriesItem-tooltip>
        <kendo:stockChart-navigator-seriesItem-tooltip-border></kendo:stockChart-navigator-seriesItem-tooltip-border>
    </kendo:stockChart-navigator-seriesItem-tooltip>


## Event Attributes

### template `String`

The tooltip template.
Template variables:


#### Example
    <kendo:stockChart-navigator-seriesItem-tooltip template="handle_template">
    </kendo:stockChart-navigator-seriesItem-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-navigator-seriesItem-tooltip-template

The tooltip template.
Template variables:


#### Example
    <kendo:stockChart-navigator-seriesItem-tooltip>
        <kendo:stockChart-navigator-seriesItem-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-navigator-seriesItem-tooltip-template>
    </kendo:stockChart-navigator-seriesItem-tooltip>

