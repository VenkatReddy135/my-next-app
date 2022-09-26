---
title: chart-categoryAxisItem-crosshair-tooltip
slug: jsp-chart-categoryAxisItem-crosshair-tooltip
tags: api, java
publish: true
---

# \<kendo:chart-categoryAxisItem-crosshair-tooltip\>

The crosshar tooltip options.

#### Example
    <kendo:chart-categoryAxisItem-crosshair>
        <kendo:chart-categoryAxisItem-crosshair-tooltip></kendo:chart-categoryAxisItem-crosshair-tooltip>
    </kendo:chart-categoryAxisItem-crosshair>

## Configuration Attributes

### background `java.lang.String`

The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-categoryAxisItem-crosshair-tooltip background="background">
    </kendo:chart-categoryAxisItem-crosshair-tooltip>

### color `java.lang.String`

The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-categoryAxisItem-crosshair-tooltip color="color">
    </kendo:chart-categoryAxisItem-crosshair-tooltip>

### font `java.lang.String`

The tooltip font.

#### Example
    <kendo:chart-categoryAxisItem-crosshair-tooltip font="font">
    </kendo:chart-categoryAxisItem-crosshair-tooltip>

### format `java.lang.String`

The format used to display the tooltip. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Example
    <kendo:chart-categoryAxisItem-crosshair-tooltip format="format">
    </kendo:chart-categoryAxisItem-crosshair-tooltip>

### padding `float`

The padding of the crosshair tooltip. A numeric value will set all paddings. Further configuration is available via [kendo:chart-categoryAxisItem-crosshair-tooltip-padding](#kendo-chart-categoryAxisItem-crosshair-tooltip-padding). 

#### Example
    <kendo:chart-categoryAxisItem-crosshair-tooltip padding="padding">
    </kendo:chart-categoryAxisItem-crosshair-tooltip>

### template `java.lang.String`

The template which renders the tooltip.The fields which can be used in the template are:

#### Example
    <kendo:chart-categoryAxisItem-crosshair-tooltip template="template">
    </kendo:chart-categoryAxisItem-crosshair-tooltip>

### visible `boolean`

If set to true the chart will display the category axis crosshair tooltip. By default the category axis crosshair tooltip is not visible.

#### Example
    <kendo:chart-categoryAxisItem-crosshair-tooltip visible="visible">
    </kendo:chart-categoryAxisItem-crosshair-tooltip>


##  Configuration JSP Tags

### kendo:chart-categoryAxisItem-crosshair-tooltip-border

The border options.

More documentation is available at [kendo:chart-categoryAxisItem-crosshair-tooltip-border](chart/categoryaxisitem-crosshair-tooltip-border).

#### Example

    <kendo:chart-categoryAxisItem-crosshair-tooltip>
        <kendo:chart-categoryAxisItem-crosshair-tooltip-border></kendo:chart-categoryAxisItem-crosshair-tooltip-border>
    </kendo:chart-categoryAxisItem-crosshair-tooltip>

### kendo:chart-categoryAxisItem-crosshair-tooltip-padding

The padding of the crosshair tooltip. A numeric value will set all paddings.

More documentation is available at [kendo:chart-categoryAxisItem-crosshair-tooltip-padding](chart/categoryaxisitem-crosshair-tooltip-padding).

#### Example

    <kendo:chart-categoryAxisItem-crosshair-tooltip>
        <kendo:chart-categoryAxisItem-crosshair-tooltip-padding></kendo:chart-categoryAxisItem-crosshair-tooltip-padding>
    </kendo:chart-categoryAxisItem-crosshair-tooltip>


## Event Attributes

### template `String`

The template which renders the tooltip.The fields which can be used in the template are:


#### Example
    <kendo:chart-categoryAxisItem-crosshair-tooltip template="handle_template">
    </kendo:chart-categoryAxisItem-crosshair-tooltip>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-categoryAxisItem-crosshair-tooltip-template

The template which renders the tooltip.The fields which can be used in the template are:


#### Example
    <kendo:chart-categoryAxisItem-crosshair-tooltip>
        <kendo:chart-categoryAxisItem-crosshair-tooltip-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-categoryAxisItem-crosshair-tooltip-template>
    </kendo:chart-categoryAxisItem-crosshair-tooltip>

