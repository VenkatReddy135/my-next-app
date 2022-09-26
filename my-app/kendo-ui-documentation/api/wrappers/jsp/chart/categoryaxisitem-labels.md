---
title: chart-categoryAxisItem-labels
slug: jsp-chart-categoryAxisItem-labels
tags: api, java
publish: true
---

# \<kendo:chart-categoryAxisItem-labels\>

The axis labels configuration.

#### Example
    <kendo:chart-categoryAxisItem>
        <kendo:chart-categoryAxisItem-labels></kendo:chart-categoryAxisItem-labels>
    </kendo:chart-categoryAxisItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-categoryAxisItem-labels background="background">
    </kendo:chart-categoryAxisItem-labels>

### color `java.lang.String`

The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-categoryAxisItem-labels color="color">
    </kendo:chart-categoryAxisItem-labels>

### culture `java.lang.String`

The culture to use when formatting date values. See the globalization overview for more information.

#### Example
    <kendo:chart-categoryAxisItem-labels culture="culture">
    </kendo:chart-categoryAxisItem-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:chart-categoryAxisItem-labels font="font">
    </kendo:chart-categoryAxisItem-labels>

### format `java.lang.String`

The format used to display the labels. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Example
    <kendo:chart-categoryAxisItem-labels format="format">
    </kendo:chart-categoryAxisItem-labels>

### margin `float`

The margin of the labels. A numeric value will set all margins. Further configuration is available via [kendo:chart-categoryAxisItem-labels-margin](#kendo-chart-categoryAxisItem-labels-margin). 

#### Example
    <kendo:chart-categoryAxisItem-labels margin="margin">
    </kendo:chart-categoryAxisItem-labels>

### mirror `boolean`

If set to true the chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.

#### Example
    <kendo:chart-categoryAxisItem-labels mirror="mirror">
    </kendo:chart-categoryAxisItem-labels>

### padding `float`

The padding of the labels. A numeric value will set all paddings. Further configuration is available via [kendo:chart-categoryAxisItem-labels-padding](#kendo-chart-categoryAxisItem-labels-padding). 

#### Example
    <kendo:chart-categoryAxisItem-labels padding="padding">
    </kendo:chart-categoryAxisItem-labels>

### rotation `float`

The rotation angle of the labels. By default the labels are not rotated.

#### Example
    <kendo:chart-categoryAxisItem-labels rotation="rotation">
    </kendo:chart-categoryAxisItem-labels>

### skip `float`

The number of labels to skip. By default no labels are skipped.

#### Example
    <kendo:chart-categoryAxisItem-labels skip="skip">
    </kendo:chart-categoryAxisItem-labels>

### step `float`

The label rendering step - render every n-th label. By default every label is rendered.

#### Example
    <kendo:chart-categoryAxisItem-labels step="step">
    </kendo:chart-categoryAxisItem-labels>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:chart-categoryAxisItem-labels template="template">
    </kendo:chart-categoryAxisItem-labels>

### visible `boolean`

If set to true the chart will display the category axis labels. By default the category axis labels are visible.

#### Example
    <kendo:chart-categoryAxisItem-labels visible="visible">
    </kendo:chart-categoryAxisItem-labels>


##  Configuration JSP Tags

### kendo:chart-categoryAxisItem-labels-border

The border of the labels.

More documentation is available at [kendo:chart-categoryAxisItem-labels-border](chart/categoryaxisitem-labels-border).

#### Example

    <kendo:chart-categoryAxisItem-labels>
        <kendo:chart-categoryAxisItem-labels-border></kendo:chart-categoryAxisItem-labels-border>
    </kendo:chart-categoryAxisItem-labels>

### kendo:chart-categoryAxisItem-labels-dateFormats

The format used to display the labels when the categories are dates. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

More documentation is available at [kendo:chart-categoryAxisItem-labels-dateFormats](chart/categoryaxisitem-labels-dateformats).

#### Example

    <kendo:chart-categoryAxisItem-labels>
        <kendo:chart-categoryAxisItem-labels-dateFormats></kendo:chart-categoryAxisItem-labels-dateFormats>
    </kendo:chart-categoryAxisItem-labels>

### kendo:chart-categoryAxisItem-labels-margin

The margin of the labels. A numeric value will set all margins.

More documentation is available at [kendo:chart-categoryAxisItem-labels-margin](chart/categoryaxisitem-labels-margin).

#### Example

    <kendo:chart-categoryAxisItem-labels>
        <kendo:chart-categoryAxisItem-labels-margin></kendo:chart-categoryAxisItem-labels-margin>
    </kendo:chart-categoryAxisItem-labels>

### kendo:chart-categoryAxisItem-labels-padding

The padding of the labels. A numeric value will set all paddings.

More documentation is available at [kendo:chart-categoryAxisItem-labels-padding](chart/categoryaxisitem-labels-padding).

#### Example

    <kendo:chart-categoryAxisItem-labels>
        <kendo:chart-categoryAxisItem-labels-padding></kendo:chart-categoryAxisItem-labels-padding>
    </kendo:chart-categoryAxisItem-labels>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-categoryAxisItem-labels template="handle_template">
    </kendo:chart-categoryAxisItem-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-categoryAxisItem-labels-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-categoryAxisItem-labels>
        <kendo:chart-categoryAxisItem-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-categoryAxisItem-labels-template>
    </kendo:chart-categoryAxisItem-labels>

