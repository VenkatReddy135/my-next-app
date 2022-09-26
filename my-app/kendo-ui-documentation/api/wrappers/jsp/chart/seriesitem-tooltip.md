---
title: chart-seriesItem-tooltip
slug: jsp-chart-seriesItem-tooltip
tags: api, java
publish: true
---

# \<kendo:chart-seriesItem-tooltip\>

The chart series tooltip configuration options.

#### Example
    <kendo:chart-seriesItem>
        <kendo:chart-seriesItem-tooltip></kendo:chart-seriesItem-tooltip>
    </kendo:chart-seriesItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-seriesItem-tooltip background="background">
    </kendo:chart-seriesItem-tooltip>

### color `java.lang.String`

The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-seriesItem-tooltip color="color">
    </kendo:chart-seriesItem-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:chart-seriesItem-tooltip font="font">
    </kendo:chart-seriesItem-tooltip>

### format `java.lang.String`

The format of the labels. Uses kendo.format.Format placeholders:

#### Example
    <kendo:chart-seriesItem-tooltip format="format">
    </kendo:chart-seriesItem-tooltip>

### padding `float`

The padding of the tooltip. A numeric value will set all paddings. Further configuration is available via [kendo:chart-seriesItem-tooltip-padding](#kendo-chart-seriesItem-tooltip-padding). 

#### Example
    <kendo:chart-seriesItem-tooltip padding="padding">
    </kendo:chart-seriesItem-tooltip>

### template `java.lang.String`

The template which renders the tooltip.The fields which can be used in the template are:

#### Example
    <kendo:chart-seriesItem-tooltip template="template">
    </kendo:chart-seriesItem-tooltip>

### visible `boolean`

If set to true the chart will display the series tooltip. By default the series tooltip is not displayed.

#### Example
    <kendo:chart-seriesItem-tooltip visible="visible">
    </kendo:chart-seriesItem-tooltip>


##  Configuration JSP Tags

### kendo:chart-seriesItem-tooltip-border

The border configuration options.

More documentation is available at [kendo:chart-seriesItem-tooltip-border](chart/seriesitem-tooltip-border).

#### Example

    <kendo:chart-seriesItem-tooltip>
        <kendo:chart-seriesItem-tooltip-border></kendo:chart-seriesItem-tooltip-border>
    </kendo:chart-seriesItem-tooltip>

### kendo:chart-seriesItem-tooltip-padding

The padding of the tooltip. A numeric value will set all paddings.

More documentation is available at [kendo:chart-seriesItem-tooltip-padding](chart/seriesitem-tooltip-padding).

#### Example

    <kendo:chart-seriesItem-tooltip>
        <kendo:chart-seriesItem-tooltip-padding></kendo:chart-seriesItem-tooltip-padding>
    </kendo:chart-seriesItem-tooltip>


## Event Attributes

### template `String`

The template which renders the tooltip.The fields which can be used in the template are:


#### Example
    <kendo:chart-seriesItem-tooltip template="handle_template">
    </kendo:chart-seriesItem-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-seriesItem-tooltip-template

The template which renders the tooltip.The fields which can be used in the template are:


#### Example
    <kendo:chart-seriesItem-tooltip>
        <kendo:chart-seriesItem-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-seriesItem-tooltip-template>
    </kendo:chart-seriesItem-tooltip>

