---
title: sparkline-tooltip
slug: jsp-sparkline-tooltip
tags: api, java
publish: true
---

# \<kendo:sparkline-tooltip\>

The data point tooltip configuration options.

#### Example
    <kendo:sparkline>
        <kendo:sparkline-tooltip></kendo:sparkline-tooltip>
    </kendo:sparkline>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip. The default is determined from the series color.

#### Example
    <kendo:sparkline-tooltip background="background">
    </kendo:sparkline-tooltip>

### color `java.lang.String`

The text color of the tooltip. The default is the same as the series labels color.

#### Example
    <kendo:sparkline-tooltip color="color">
    </kendo:sparkline-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:sparkline-tooltip font="font">
    </kendo:sparkline-tooltip>

### format `java.lang.String`

The tooltip format.

#### Example
    <kendo:sparkline-tooltip format="format">
    </kendo:sparkline-tooltip>

### padding `java.lang.Object`

The padding of the tooltip.

#### Example
    <kendo:sparkline-tooltip padding="padding">
    </kendo:sparkline-tooltip>

### shared `boolean`

A value indicating if the tooltip should be shared.

#### Example
    <kendo:sparkline-tooltip shared="shared">
    </kendo:sparkline-tooltip>

### sharedTemplate `java.lang.String`

The shared tooltip template.
Template variables:

#### Example
    <kendo:sparkline-tooltip sharedTemplate="sharedTemplate">
    </kendo:sparkline-tooltip>

### template `java.lang.String`

The tooltip template.
Template variables:

#### Example
    <kendo:sparkline-tooltip template="template">
    </kendo:sparkline-tooltip>

### visible `boolean`

A value indicating if the tooltip should be displayed.

#### Example
    <kendo:sparkline-tooltip visible="visible">
    </kendo:sparkline-tooltip>


##  Configuration JSP Tags

### kendo:sparkline-tooltip-border

The border configuration options.

More documentation is available at [kendo:sparkline-tooltip-border](sparkline/tooltip-border).

#### Example

    <kendo:sparkline-tooltip>
        <kendo:sparkline-tooltip-border></kendo:sparkline-tooltip-border>
    </kendo:sparkline-tooltip>


## Event Attributes

### template `String`

The tooltip template.
Template variables:


#### Example
    <kendo:sparkline-tooltip template="handle_template">
    </kendo:sparkline-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:sparkline-tooltip-template

The tooltip template.
Template variables:


#### Example
    <kendo:sparkline-tooltip>
        <kendo:sparkline-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:sparkline-tooltip-template>
    </kendo:sparkline-tooltip>

