---
title: stockChart-valueAxisItem-labels
slug: jsp-stockChart-valueAxisItem-labels
tags: api, java
publish: true
---

# \<kendo:stockChart-valueAxisItem-labels\>

Configures the axis labels.

#### Example
    <kendo:stockChart-valueAxisItem>
        <kendo:stockChart-valueAxisItem-labels></kendo:stockChart-valueAxisItem-labels>
    </kendo:stockChart-valueAxisItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the labels. Any valid CSS color string will work here, including
hex and rgb

#### Example
    <kendo:stockChart-valueAxisItem-labels background="background">
    </kendo:stockChart-valueAxisItem-labels>

### color `java.lang.String`

The text color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:stockChart-valueAxisItem-labels color="color">
    </kendo:stockChart-valueAxisItem-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:stockChart-valueAxisItem-labels font="font">
    </kendo:stockChart-valueAxisItem-labels>

### format `java.lang.String`

The format of the labels.

#### Example
    <kendo:stockChart-valueAxisItem-labels format="format">
    </kendo:stockChart-valueAxisItem-labels>

### margin `java.lang.Object`

The margin of the labels.

#### Example
    <kendo:stockChart-valueAxisItem-labels margin="margin">
    </kendo:stockChart-valueAxisItem-labels>

### mirror `boolean`

Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.

#### Example
    <kendo:stockChart-valueAxisItem-labels mirror="mirror">
    </kendo:stockChart-valueAxisItem-labels>

### padding `java.lang.Object`

The padding of the labels.

#### Example
    <kendo:stockChart-valueAxisItem-labels padding="padding">
    </kendo:stockChart-valueAxisItem-labels>

### rotation `float`

The rotation angle of the labels.

#### Example
    <kendo:stockChart-valueAxisItem-labels rotation="rotation">
    </kendo:stockChart-valueAxisItem-labels>

### skip `float`

Number of labels to skip.
Skips rendering the first n labels.

#### Example
    <kendo:stockChart-valueAxisItem-labels skip="skip">
    </kendo:stockChart-valueAxisItem-labels>

### step `float`

Label rendering step.
Every n-th label is rendered where n is the step

#### Example
    <kendo:stockChart-valueAxisItem-labels step="step">
    </kendo:stockChart-valueAxisItem-labels>

### template `java.lang.String`

The label template.
Template variables:

#### Example
    <kendo:stockChart-valueAxisItem-labels template="template">
    </kendo:stockChart-valueAxisItem-labels>

### visible `boolean`

The visibility of the labels.

#### Example
    <kendo:stockChart-valueAxisItem-labels visible="visible">
    </kendo:stockChart-valueAxisItem-labels>


##  Configuration JSP Tags

### kendo:stockChart-valueAxisItem-labels-border

The border of the labels.

More documentation is available at [kendo:stockChart-valueAxisItem-labels-border](stockchart/valueaxisitem-labels-border).

#### Example

    <kendo:stockChart-valueAxisItem-labels>
        <kendo:stockChart-valueAxisItem-labels-border></kendo:stockChart-valueAxisItem-labels-border>
    </kendo:stockChart-valueAxisItem-labels>


## Event Attributes

### template `String`

The label template.
Template variables:


#### Example
    <kendo:stockChart-valueAxisItem-labels template="handle_template">
    </kendo:stockChart-valueAxisItem-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-valueAxisItem-labels-template

The label template.
Template variables:


#### Example
    <kendo:stockChart-valueAxisItem-labels>
        <kendo:stockChart-valueAxisItem-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-valueAxisItem-labels-template>
    </kendo:stockChart-valueAxisItem-labels>

