---
title: chart-xAxisItem-crosshair-tooltip
slug: jsp-chart-xAxisItem-crosshair-tooltip
tags: api, java
publish: true
---

# \<kendo:chart-xAxisItem-crosshair-tooltip\>

The crosshar tooltip options.

#### Example
    <kendo:chart-xAxisItem-crosshair>
        <kendo:chart-xAxisItem-crosshair-tooltip></kendo:chart-xAxisItem-crosshair-tooltip>
    </kendo:chart-xAxisItem-crosshair>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-xAxisItem-crosshair-tooltip background="background">
    </kendo:chart-xAxisItem-crosshair-tooltip>

### color `java.lang.String`

The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-xAxisItem-crosshair-tooltip color="color">
    </kendo:chart-xAxisItem-crosshair-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:chart-xAxisItem-crosshair-tooltip font="font">
    </kendo:chart-xAxisItem-crosshair-tooltip>

### format `java.lang.String`

The format used to display the tooltip. Uses kendo.format. Contains one placeholder ("{0}") which represents the value value.

#### Example
    <kendo:chart-xAxisItem-crosshair-tooltip format="format">
    </kendo:chart-xAxisItem-crosshair-tooltip>

### padding `float`

The padding of the crosshair tooltip. A numeric value will set all paddings. Further configuration is available via [kendo:chart-xAxisItem-crosshair-tooltip-padding](#kendo-chart-xAxisItem-crosshair-tooltip-padding). 

#### Example
    <kendo:chart-xAxisItem-crosshair-tooltip padding="padding">
    </kendo:chart-xAxisItem-crosshair-tooltip>

### template `java.lang.String`

The template which renders the tooltip.The fields which can be used in the template are:

#### Example
    <kendo:chart-xAxisItem-crosshair-tooltip template="template">
    </kendo:chart-xAxisItem-crosshair-tooltip>

### visible `boolean`

If set to true the chart will display the scatter chart x axis crosshair tooltip. By default the scatter chart x axis crosshair tooltip is not visible.

#### Example
    <kendo:chart-xAxisItem-crosshair-tooltip visible="visible">
    </kendo:chart-xAxisItem-crosshair-tooltip>


##  Configuration JSP Tags

### kendo:chart-xAxisItem-crosshair-tooltip-border

The border options.

More documentation is available at [kendo:chart-xAxisItem-crosshair-tooltip-border](chart/xaxisitem-crosshair-tooltip-border).

#### Example

    <kendo:chart-xAxisItem-crosshair-tooltip>
        <kendo:chart-xAxisItem-crosshair-tooltip-border></kendo:chart-xAxisItem-crosshair-tooltip-border>
    </kendo:chart-xAxisItem-crosshair-tooltip>

### kendo:chart-xAxisItem-crosshair-tooltip-padding

The padding of the crosshair tooltip. A numeric value will set all paddings.

More documentation is available at [kendo:chart-xAxisItem-crosshair-tooltip-padding](chart/xaxisitem-crosshair-tooltip-padding).

#### Example

    <kendo:chart-xAxisItem-crosshair-tooltip>
        <kendo:chart-xAxisItem-crosshair-tooltip-padding></kendo:chart-xAxisItem-crosshair-tooltip-padding>
    </kendo:chart-xAxisItem-crosshair-tooltip>


## Event Attributes

### template `String`

The template which renders the tooltip.The fields which can be used in the template are:


#### Example
    <kendo:chart-xAxisItem-crosshair-tooltip template="handle_template">
    </kendo:chart-xAxisItem-crosshair-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-xAxisItem-crosshair-tooltip-template

The template which renders the tooltip.The fields which can be used in the template are:


#### Example
    <kendo:chart-xAxisItem-crosshair-tooltip>
        <kendo:chart-xAxisItem-crosshair-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-xAxisItem-crosshair-tooltip-template>
    </kendo:chart-xAxisItem-crosshair-tooltip>

