---
title: chart-tooltip
slug: jsp-chart-tooltip
tags: api, java
publish: true
---

# \<kendo:chart-tooltip\>

The chart series tooltip configuration options.

#### Example
    <kendo:chart>
        <kendo:chart-tooltip></kendo:chart-tooltip>
    </kendo:chart>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-tooltip background="background">
    </kendo:chart-tooltip>

### color `java.lang.String`

The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-tooltip color="color">
    </kendo:chart-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:chart-tooltip font="font">
    </kendo:chart-tooltip>

### format `java.lang.String`

The format of the labels. Uses kendo.format.Format placeholders:

#### Example
    <kendo:chart-tooltip format="format">
    </kendo:chart-tooltip>

### padding `float`

The padding of the tooltip. A numeric value will set all paddings. Further configuration is available via [kendo:chart-tooltip-padding](#kendo-chart-tooltip-padding). 

#### Example
    <kendo:chart-tooltip padding="padding">
    </kendo:chart-tooltip>

### shared `boolean`

If set to true the chart will display a single tooltip for every category.

#### Example
    <kendo:chart-tooltip shared="shared">
    </kendo:chart-tooltip>

### sharedTemplate `java.lang.String`

The template which renders the shared tooltip.The fields which can be used in the template are:

#### Example
    <kendo:chart-tooltip sharedTemplate="sharedTemplate">
    </kendo:chart-tooltip>

### template `java.lang.String`

The template which renders the tooltip.The fields which can be used in the template are:

#### Example
    <kendo:chart-tooltip template="template">
    </kendo:chart-tooltip>

### visible `boolean`

If set to true the chart will display the series tooltip. By default the series tooltip is not displayed.

#### Example
    <kendo:chart-tooltip visible="visible">
    </kendo:chart-tooltip>


##  Configuration JSP Tags

### kendo:chart-tooltip-border

The border configuration options.

More documentation is available at [kendo:chart-tooltip-border](chart/tooltip-border).

#### Example

    <kendo:chart-tooltip>
        <kendo:chart-tooltip-border></kendo:chart-tooltip-border>
    </kendo:chart-tooltip>

### kendo:chart-tooltip-padding

The padding of the tooltip. A numeric value will set all paddings.

More documentation is available at [kendo:chart-tooltip-padding](chart/tooltip-padding).

#### Example

    <kendo:chart-tooltip>
        <kendo:chart-tooltip-padding></kendo:chart-tooltip-padding>
    </kendo:chart-tooltip>


## Event Attributes

### sharedTemplate `String`

The template which renders the shared tooltip.The fields which can be used in the template are:


#### Example
    <kendo:chart-tooltip sharedTemplate="handle_sharedTemplate">
    </kendo:chart-tooltip>
    <script>
        function handle_sharedTemplate(e) {
            // Code to handle the sharedTemplate event.
        }
    </script>

### template `String`

The template which renders the tooltip.The fields which can be used in the template are:


#### Example
    <kendo:chart-tooltip template="handle_template">
    </kendo:chart-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-tooltip-sharedTemplate

The template which renders the shared tooltip.The fields which can be used in the template are:


#### Example
    <kendo:chart-tooltip>
        <kendo:chart-tooltip-sharedTemplate>
            <script>
                function(e) {
                    // Code to handle the sharedTemplate event.
                }
            </script>
        </kendo:chart-tooltip-sharedTemplate>
    </kendo:chart-tooltip>

### kendo:chart-tooltip-template

The template which renders the tooltip.The fields which can be used in the template are:


#### Example
    <kendo:chart-tooltip>
        <kendo:chart-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-tooltip-template>
    </kendo:chart-tooltip>

