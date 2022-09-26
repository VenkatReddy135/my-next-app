---
title: chart-xAxisItem-labels
slug: jsp-chart-xAxisItem-labels
tags: api, java
publish: true
---

# \<kendo:chart-xAxisItem-labels\>

The axis labels configuration.

#### Example
    <kendo:chart-xAxisItem>
        <kendo:chart-xAxisItem-labels></kendo:chart-xAxisItem-labels>
    </kendo:chart-xAxisItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-xAxisItem-labels background="background">
    </kendo:chart-xAxisItem-labels>

### color `java.lang.String`

The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-xAxisItem-labels color="color">
    </kendo:chart-xAxisItem-labels>

### culture `java.lang.String`

The culture to use when formatting date values. See the globalization overview for more information.

#### Example
    <kendo:chart-xAxisItem-labels culture="culture">
    </kendo:chart-xAxisItem-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:chart-xAxisItem-labels font="font">
    </kendo:chart-xAxisItem-labels>

### format `java.lang.String`

The format used to display the labels. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Example
    <kendo:chart-xAxisItem-labels format="format">
    </kendo:chart-xAxisItem-labels>

### margin `float`

The margin of the labels. A numeric value will set all margins. Further configuration is available via [kendo:chart-xAxisItem-labels-margin](#kendo-chart-xAxisItem-labels-margin). 

#### Example
    <kendo:chart-xAxisItem-labels margin="margin">
    </kendo:chart-xAxisItem-labels>

### mirror `boolean`

If set to true the chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.

#### Example
    <kendo:chart-xAxisItem-labels mirror="mirror">
    </kendo:chart-xAxisItem-labels>

### padding `float`

The padding of the labels. A numeric value will set all paddings. Further configuration is available via [kendo:chart-xAxisItem-labels-padding](#kendo-chart-xAxisItem-labels-padding). 

#### Example
    <kendo:chart-xAxisItem-labels padding="padding">
    </kendo:chart-xAxisItem-labels>

### rotation `float`

The rotation angle of the labels. By default the labels are not rotated.

#### Example
    <kendo:chart-xAxisItem-labels rotation="rotation">
    </kendo:chart-xAxisItem-labels>

### skip `float`

The number of labels to skip.

#### Example
    <kendo:chart-xAxisItem-labels skip="skip">
    </kendo:chart-xAxisItem-labels>

### step `float`

The label rendering step - render every n-th label. By default every label is rendered.

#### Example
    <kendo:chart-xAxisItem-labels step="step">
    </kendo:chart-xAxisItem-labels>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:chart-xAxisItem-labels template="template">
    </kendo:chart-xAxisItem-labels>

### visible `boolean`

If set to true the chart will display the x axis labels. By default the x axis labels are visible.

#### Example
    <kendo:chart-xAxisItem-labels visible="visible">
    </kendo:chart-xAxisItem-labels>


##  Configuration JSP Tags

### kendo:chart-xAxisItem-labels-border

The border of the labels.

More documentation is available at [kendo:chart-xAxisItem-labels-border](chart/xaxisitem-labels-border).

#### Example

    <kendo:chart-xAxisItem-labels>
        <kendo:chart-xAxisItem-labels-border></kendo:chart-xAxisItem-labels-border>
    </kendo:chart-xAxisItem-labels>

### kendo:chart-xAxisItem-labels-dateFormats

The format used to display the labels when the x values are dates. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

More documentation is available at [kendo:chart-xAxisItem-labels-dateFormats](chart/xaxisitem-labels-dateformats).

#### Example

    <kendo:chart-xAxisItem-labels>
        <kendo:chart-xAxisItem-labels-dateFormats></kendo:chart-xAxisItem-labels-dateFormats>
    </kendo:chart-xAxisItem-labels>

### kendo:chart-xAxisItem-labels-margin

The margin of the labels. A numeric value will set all margins.

More documentation is available at [kendo:chart-xAxisItem-labels-margin](chart/xaxisitem-labels-margin).

#### Example

    <kendo:chart-xAxisItem-labels>
        <kendo:chart-xAxisItem-labels-margin></kendo:chart-xAxisItem-labels-margin>
    </kendo:chart-xAxisItem-labels>

### kendo:chart-xAxisItem-labels-padding

The padding of the labels. A numeric value will set all paddings.

More documentation is available at [kendo:chart-xAxisItem-labels-padding](chart/xaxisitem-labels-padding).

#### Example

    <kendo:chart-xAxisItem-labels>
        <kendo:chart-xAxisItem-labels-padding></kendo:chart-xAxisItem-labels-padding>
    </kendo:chart-xAxisItem-labels>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-xAxisItem-labels template="handle_template">
    </kendo:chart-xAxisItem-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-xAxisItem-labels-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-xAxisItem-labels>
        <kendo:chart-xAxisItem-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-xAxisItem-labels-template>
    </kendo:chart-xAxisItem-labels>

