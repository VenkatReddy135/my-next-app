---
title: chart-yAxisItem-labels
slug: jsp-chart-yAxisItem-labels
tags: api, java
publish: true
---

# \<kendo:chart-yAxisItem-labels\>

The axis labels configuration.

#### Example
    <kendo:chart-yAxisItem>
        <kendo:chart-yAxisItem-labels></kendo:chart-yAxisItem-labels>
    </kendo:chart-yAxisItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-yAxisItem-labels background="background">
    </kendo:chart-yAxisItem-labels>

### color `java.lang.String`

The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-yAxisItem-labels color="color">
    </kendo:chart-yAxisItem-labels>

### culture `java.lang.String`

The culture to use when formatting date values. See the globalization overview for more information.

#### Example
    <kendo:chart-yAxisItem-labels culture="culture">
    </kendo:chart-yAxisItem-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:chart-yAxisItem-labels font="font">
    </kendo:chart-yAxisItem-labels>

### format `java.lang.String`

The format used to display the labels. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Example
    <kendo:chart-yAxisItem-labels format="format">
    </kendo:chart-yAxisItem-labels>

### margin `float`

The margin of the labels. A numeric value will set all margins. Further configuration is available via [kendo:chart-yAxisItem-labels-margin](#kendo-chart-yAxisItem-labels-margin). 

#### Example
    <kendo:chart-yAxisItem-labels margin="margin">
    </kendo:chart-yAxisItem-labels>

### mirror `boolean`

If set to true the chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.

#### Example
    <kendo:chart-yAxisItem-labels mirror="mirror">
    </kendo:chart-yAxisItem-labels>

### padding `float`

The padding of the labels. A numeric value will set all paddings. Further configuration is available via [kendo:chart-yAxisItem-labels-padding](#kendo-chart-yAxisItem-labels-padding). 

#### Example
    <kendo:chart-yAxisItem-labels padding="padding">
    </kendo:chart-yAxisItem-labels>

### rotation `float`

The rotation angle of the labels. By default the labels are not rotated.

#### Example
    <kendo:chart-yAxisItem-labels rotation="rotation">
    </kendo:chart-yAxisItem-labels>

### skip `float`

The number of labels to skip.

#### Example
    <kendo:chart-yAxisItem-labels skip="skip">
    </kendo:chart-yAxisItem-labels>

### step `float`

The label rendering step - render every n-th label. By default every label is rendered.

#### Example
    <kendo:chart-yAxisItem-labels step="step">
    </kendo:chart-yAxisItem-labels>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:chart-yAxisItem-labels template="template">
    </kendo:chart-yAxisItem-labels>

### visible `boolean`

If set to true the chart will display the y axis labels. By default the y axis labels are visible.

#### Example
    <kendo:chart-yAxisItem-labels visible="visible">
    </kendo:chart-yAxisItem-labels>


##  Configuration JSP Tags

### kendo:chart-yAxisItem-labels-border

The border of the labels.

More documentation is available at [kendo:chart-yAxisItem-labels-border](chart/yaxisitem-labels-border).

#### Example

    <kendo:chart-yAxisItem-labels>
        <kendo:chart-yAxisItem-labels-border></kendo:chart-yAxisItem-labels-border>
    </kendo:chart-yAxisItem-labels>

### kendo:chart-yAxisItem-labels-dateFormats

The format used to display the labels when the x values are dates. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

More documentation is available at [kendo:chart-yAxisItem-labels-dateFormats](chart/yaxisitem-labels-dateformats).

#### Example

    <kendo:chart-yAxisItem-labels>
        <kendo:chart-yAxisItem-labels-dateFormats></kendo:chart-yAxisItem-labels-dateFormats>
    </kendo:chart-yAxisItem-labels>

### kendo:chart-yAxisItem-labels-margin

The margin of the labels. A numeric value will set all margins.

More documentation is available at [kendo:chart-yAxisItem-labels-margin](chart/yaxisitem-labels-margin).

#### Example

    <kendo:chart-yAxisItem-labels>
        <kendo:chart-yAxisItem-labels-margin></kendo:chart-yAxisItem-labels-margin>
    </kendo:chart-yAxisItem-labels>

### kendo:chart-yAxisItem-labels-padding

The padding of the labels. A numeric value will set all paddings.

More documentation is available at [kendo:chart-yAxisItem-labels-padding](chart/yaxisitem-labels-padding).

#### Example

    <kendo:chart-yAxisItem-labels>
        <kendo:chart-yAxisItem-labels-padding></kendo:chart-yAxisItem-labels-padding>
    </kendo:chart-yAxisItem-labels>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-yAxisItem-labels template="handle_template">
    </kendo:chart-yAxisItem-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-yAxisItem-labels-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-yAxisItem-labels>
        <kendo:chart-yAxisItem-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-yAxisItem-labels-template>
    </kendo:chart-yAxisItem-labels>

