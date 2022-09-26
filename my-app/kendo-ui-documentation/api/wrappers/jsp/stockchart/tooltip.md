---
title: stockChart-tooltip
slug: jsp-stockChart-tooltip
tags: api, java
publish: true
---

# \<kendo:stockChart-tooltip\>

The data point tooltip configuration options.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-tooltip></kendo:stockChart-tooltip>
    </kendo:stockChart>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip. The default is determined from the series color.

#### Example
    <kendo:stockChart-tooltip background="background">
    </kendo:stockChart-tooltip>

### color `java.lang.String`

The text color of the tooltip. The default is the same as the series labels color.

#### Example
    <kendo:stockChart-tooltip color="color">
    </kendo:stockChart-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:stockChart-tooltip font="font">
    </kendo:stockChart-tooltip>

### format `java.lang.String`

The tooltip format.

#### Example
    <kendo:stockChart-tooltip format="format">
    </kendo:stockChart-tooltip>

### padding `java.lang.Object`

The padding of the tooltip.

#### Example
    <kendo:stockChart-tooltip padding="padding">
    </kendo:stockChart-tooltip>

### shared `boolean`

A value indicating if the tooltip should be shared.

#### Example
    <kendo:stockChart-tooltip shared="shared">
    </kendo:stockChart-tooltip>

### sharedTemplate `java.lang.String`

The shared tooltip template.
Template variables:

#### Example
    <kendo:stockChart-tooltip sharedTemplate="sharedTemplate">
    </kendo:stockChart-tooltip>

### template `java.lang.String`

The tooltip template.
Template variables:

#### Example
    <kendo:stockChart-tooltip template="template">
    </kendo:stockChart-tooltip>

### visible `boolean`

A value indicating if the tooltip should be displayed.

#### Example
    <kendo:stockChart-tooltip visible="visible">
    </kendo:stockChart-tooltip>


##  Configuration JSP Tags

### kendo:stockChart-tooltip-border

The border configuration options.

More documentation is available at [kendo:stockChart-tooltip-border](stockchart/tooltip-border).

#### Example

    <kendo:stockChart-tooltip>
        <kendo:stockChart-tooltip-border></kendo:stockChart-tooltip-border>
    </kendo:stockChart-tooltip>


## Event Attributes

### template `String`

The tooltip template.
Template variables:


#### Example
    <kendo:stockChart-tooltip template="handle_template">
    </kendo:stockChart-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-tooltip-template

The tooltip template.
Template variables:


#### Example
    <kendo:stockChart-tooltip>
        <kendo:stockChart-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-tooltip-template>
    </kendo:stockChart-tooltip>

