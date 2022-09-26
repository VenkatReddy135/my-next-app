---
title: chart-valueAxisItem-crosshair-tooltip
slug: jsp-chart-valueAxisItem-crosshair-tooltip
tags: api, java
publish: true
---

# \<kendo:chart-valueAxisItem-crosshair-tooltip\>

The crosshar tooltip options.

#### Example
    <kendo:chart-valueAxisItem-crosshair>
        <kendo:chart-valueAxisItem-crosshair-tooltip></kendo:chart-valueAxisItem-crosshair-tooltip>
    </kendo:chart-valueAxisItem-crosshair>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-valueAxisItem-crosshair-tooltip background="background">
    </kendo:chart-valueAxisItem-crosshair-tooltip>

### color `java.lang.String`

The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-valueAxisItem-crosshair-tooltip color="color">
    </kendo:chart-valueAxisItem-crosshair-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:chart-valueAxisItem-crosshair-tooltip font="font">
    </kendo:chart-valueAxisItem-crosshair-tooltip>

### format `java.lang.String`

The format used to display the tooltip. Uses kendo.format. Contains one placeholder ("{0}") which represents the value value.

#### Example
    <kendo:chart-valueAxisItem-crosshair-tooltip format="format">
    </kendo:chart-valueAxisItem-crosshair-tooltip>

### padding `float`

The padding of the crosshair tooltip. A numeric value will set all paddings. Further configuration is available via [kendo:chart-valueAxisItem-crosshair-tooltip-padding](#kendo-chart-valueAxisItem-crosshair-tooltip-padding). 

#### Example
    <kendo:chart-valueAxisItem-crosshair-tooltip padding="padding">
    </kendo:chart-valueAxisItem-crosshair-tooltip>

### template `java.lang.String`

The template which renders the tooltip.The fields which can be used in the template are:

#### Example
    <kendo:chart-valueAxisItem-crosshair-tooltip template="template">
    </kendo:chart-valueAxisItem-crosshair-tooltip>

### visible `boolean`

If set to true the chart will display the value axis crosshair tooltip. By default the value axis crosshair tooltip is not visible.

#### Example
    <kendo:chart-valueAxisItem-crosshair-tooltip visible="visible">
    </kendo:chart-valueAxisItem-crosshair-tooltip>


##  Configuration JSP Tags

### kendo:chart-valueAxisItem-crosshair-tooltip-border

The border options.

More documentation is available at [kendo:chart-valueAxisItem-crosshair-tooltip-border](chart/valueaxisitem-crosshair-tooltip-border).

#### Example

    <kendo:chart-valueAxisItem-crosshair-tooltip>
        <kendo:chart-valueAxisItem-crosshair-tooltip-border></kendo:chart-valueAxisItem-crosshair-tooltip-border>
    </kendo:chart-valueAxisItem-crosshair-tooltip>

### kendo:chart-valueAxisItem-crosshair-tooltip-padding

The padding of the crosshair tooltip. A numeric value will set all paddings.

More documentation is available at [kendo:chart-valueAxisItem-crosshair-tooltip-padding](chart/valueaxisitem-crosshair-tooltip-padding).

#### Example

    <kendo:chart-valueAxisItem-crosshair-tooltip>
        <kendo:chart-valueAxisItem-crosshair-tooltip-padding></kendo:chart-valueAxisItem-crosshair-tooltip-padding>
    </kendo:chart-valueAxisItem-crosshair-tooltip>


## Event Attributes

### template `String`

The template which renders the tooltip.The fields which can be used in the template are:


#### Example
    <kendo:chart-valueAxisItem-crosshair-tooltip template="handle_template">
    </kendo:chart-valueAxisItem-crosshair-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-valueAxisItem-crosshair-tooltip-template

The template which renders the tooltip.The fields which can be used in the template are:


#### Example
    <kendo:chart-valueAxisItem-crosshair-tooltip>
        <kendo:chart-valueAxisItem-crosshair-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-valueAxisItem-crosshair-tooltip-template>
    </kendo:chart-valueAxisItem-crosshair-tooltip>

