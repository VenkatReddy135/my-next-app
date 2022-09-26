---
title: stockChart-navigator-categoryAxisItem-labels
slug: jsp-stockChart-navigator-categoryAxisItem-labels
tags: api, java
publish: true
---

# \<kendo:stockChart-navigator-categoryAxisItem-labels\>

The axis labels configuration.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem>
        <kendo:stockChart-navigator-categoryAxisItem-labels></kendo:stockChart-navigator-categoryAxisItem-labels>
    </kendo:stockChart-navigator-categoryAxisItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels background="background">
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### color `java.lang.String`

The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels color="color">
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### culture `java.lang.String`

The culture to use when formatting date values. See the globalization overview for more information.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels culture="culture">
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels font="font">
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### format `java.lang.String`

The format used to display the labels. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels format="format">
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### margin `float`

The margin of the labels. A numeric value will set all margins. Further configuration is available via [kendo:stockChart-navigator-categoryAxisItem-labels-margin](#kendo-stockChart-navigator-categoryAxisItem-labels-margin). 

#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels margin="margin">
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### mirror `boolean`

If set to true the chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels mirror="mirror">
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### padding `float`

The padding of the labels. A numeric value will set all paddings. Further configuration is available via [kendo:stockChart-navigator-categoryAxisItem-labels-padding](#kendo-stockChart-navigator-categoryAxisItem-labels-padding). 

#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels padding="padding">
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### rotation `float`

The rotation angle of the labels. By default the labels are not rotated.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels rotation="rotation">
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### skip `float`

The number of labels to skip. By default no labels are skipped.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels skip="skip">
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### step `float`

The label rendering step - render every n-th label. By default every label is rendered.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels step="step">
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels template="template">
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### visible `boolean`

If set to true the chart will display the category axis labels. By default the category axis labels are visible.

#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels visible="visible">
    </kendo:stockChart-navigator-categoryAxisItem-labels>


##  Configuration JSP Tags

### kendo:stockChart-navigator-categoryAxisItem-labels-border

The border of the labels.

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-labels-border](stockchart/navigator-categoryaxisitem-labels-border).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem-labels>
        <kendo:stockChart-navigator-categoryAxisItem-labels-border></kendo:stockChart-navigator-categoryAxisItem-labels-border>
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### kendo:stockChart-navigator-categoryAxisItem-labels-dateFormats

The format used to display the labels when the categories are dates. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-labels-dateFormats](stockchart/navigator-categoryaxisitem-labels-dateformats).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem-labels>
        <kendo:stockChart-navigator-categoryAxisItem-labels-dateFormats></kendo:stockChart-navigator-categoryAxisItem-labels-dateFormats>
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### kendo:stockChart-navigator-categoryAxisItem-labels-margin

The margin of the labels. A numeric value will set all margins.

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-labels-margin](stockchart/navigator-categoryaxisitem-labels-margin).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem-labels>
        <kendo:stockChart-navigator-categoryAxisItem-labels-margin></kendo:stockChart-navigator-categoryAxisItem-labels-margin>
    </kendo:stockChart-navigator-categoryAxisItem-labels>

### kendo:stockChart-navigator-categoryAxisItem-labels-padding

The padding of the labels. A numeric value will set all paddings.

More documentation is available at [kendo:stockChart-navigator-categoryAxisItem-labels-padding](stockchart/navigator-categoryaxisitem-labels-padding).

#### Example

    <kendo:stockChart-navigator-categoryAxisItem-labels>
        <kendo:stockChart-navigator-categoryAxisItem-labels-padding></kendo:stockChart-navigator-categoryAxisItem-labels-padding>
    </kendo:stockChart-navigator-categoryAxisItem-labels>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels template="handle_template">
    </kendo:stockChart-navigator-categoryAxisItem-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-navigator-categoryAxisItem-labels-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:stockChart-navigator-categoryAxisItem-labels>
        <kendo:stockChart-navigator-categoryAxisItem-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-navigator-categoryAxisItem-labels-template>
    </kendo:stockChart-navigator-categoryAxisItem-labels>

