---
title: sparkline-seriesDefaults-tooltip
slug: jsp-sparkline-seriesDefaults-tooltip
tags: api, java
publish: true
---

# \<kendo:sparkline-seriesDefaults-tooltip\>

The data point tooltip configuration options.

#### Example
    <kendo:sparkline-seriesDefaults>
        <kendo:sparkline-seriesDefaults-tooltip></kendo:sparkline-seriesDefaults-tooltip>
    </kendo:sparkline-seriesDefaults>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip. The default is determined from the series color.

#### Example
    <kendo:sparkline-seriesDefaults-tooltip background="background">
    </kendo:sparkline-seriesDefaults-tooltip>

### color `java.lang.String`

The text color of the tooltip. The default is the same as the series labels color.

#### Example
    <kendo:sparkline-seriesDefaults-tooltip color="color">
    </kendo:sparkline-seriesDefaults-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:sparkline-seriesDefaults-tooltip font="font">
    </kendo:sparkline-seriesDefaults-tooltip>

### format `java.lang.String`

The tooltip format.

#### Example
    <kendo:sparkline-seriesDefaults-tooltip format="format">
    </kendo:sparkline-seriesDefaults-tooltip>

### padding `java.lang.Object`

The padding of the tooltip.

#### Example
    <kendo:sparkline-seriesDefaults-tooltip padding="padding">
    </kendo:sparkline-seriesDefaults-tooltip>

### template `java.lang.String`

The tooltip template.
Template variables:

#### Example
    <kendo:sparkline-seriesDefaults-tooltip template="template">
    </kendo:sparkline-seriesDefaults-tooltip>

### visible `boolean`

A value indicating if the tooltip should be displayed.

#### Example
    <kendo:sparkline-seriesDefaults-tooltip visible="visible">
    </kendo:sparkline-seriesDefaults-tooltip>


##  Configuration JSP Tags

### kendo:sparkline-seriesDefaults-tooltip-border

The border configuration options.

More documentation is available at [kendo:sparkline-seriesDefaults-tooltip-border](sparkline/seriesdefaults-tooltip-border).

#### Example

    <kendo:sparkline-seriesDefaults-tooltip>
        <kendo:sparkline-seriesDefaults-tooltip-border></kendo:sparkline-seriesDefaults-tooltip-border>
    </kendo:sparkline-seriesDefaults-tooltip>


## Event Attributes

### template `String`

The tooltip template.
Template variables:


#### Example
    <kendo:sparkline-seriesDefaults-tooltip template="handle_template">
    </kendo:sparkline-seriesDefaults-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:sparkline-seriesDefaults-tooltip-template

The tooltip template.
Template variables:


#### Example
    <kendo:sparkline-seriesDefaults-tooltip>
        <kendo:sparkline-seriesDefaults-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:sparkline-seriesDefaults-tooltip-template>
    </kendo:sparkline-seriesDefaults-tooltip>

