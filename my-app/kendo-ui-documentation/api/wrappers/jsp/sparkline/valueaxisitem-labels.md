---
title: sparkline-valueAxisItem-labels
slug: jsp-sparkline-valueAxisItem-labels
tags: api, java
publish: true
---

# \<kendo:sparkline-valueAxisItem-labels\>

Configures the axis labels.

#### Example
    <kendo:sparkline-valueAxisItem>
        <kendo:sparkline-valueAxisItem-labels></kendo:sparkline-valueAxisItem-labels>
    </kendo:sparkline-valueAxisItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the labels. Any valid CSS color string will work here, including
hex and rgb

#### Example
    <kendo:sparkline-valueAxisItem-labels background="background">
    </kendo:sparkline-valueAxisItem-labels>

### color `java.lang.String`

The text color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:sparkline-valueAxisItem-labels color="color">
    </kendo:sparkline-valueAxisItem-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:sparkline-valueAxisItem-labels font="font">
    </kendo:sparkline-valueAxisItem-labels>

### format `java.lang.String`

The format of the labels.

#### Example
    <kendo:sparkline-valueAxisItem-labels format="format">
    </kendo:sparkline-valueAxisItem-labels>

### margin `java.lang.Object`

The margin of the labels.

#### Example
    <kendo:sparkline-valueAxisItem-labels margin="margin">
    </kendo:sparkline-valueAxisItem-labels>

### mirror `boolean`

Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.

#### Example
    <kendo:sparkline-valueAxisItem-labels mirror="mirror">
    </kendo:sparkline-valueAxisItem-labels>

### padding `java.lang.Object`

The padding of the labels.

#### Example
    <kendo:sparkline-valueAxisItem-labels padding="padding">
    </kendo:sparkline-valueAxisItem-labels>

### rotation `float`

The rotation angle of the labels.

#### Example
    <kendo:sparkline-valueAxisItem-labels rotation="rotation">
    </kendo:sparkline-valueAxisItem-labels>

### skip `float`

Number of labels to skip.
Skips rendering the first n labels.

#### Example
    <kendo:sparkline-valueAxisItem-labels skip="skip">
    </kendo:sparkline-valueAxisItem-labels>

### step `float`

Label rendering step.
Every n-th label is rendered where n is the step

#### Example
    <kendo:sparkline-valueAxisItem-labels step="step">
    </kendo:sparkline-valueAxisItem-labels>

### template `java.lang.String`

The label template.
Template variables:

#### Example
    <kendo:sparkline-valueAxisItem-labels template="template">
    </kendo:sparkline-valueAxisItem-labels>

### visible `boolean`

The visibility of the labels.

#### Example
    <kendo:sparkline-valueAxisItem-labels visible="visible">
    </kendo:sparkline-valueAxisItem-labels>


##  Configuration JSP Tags

### kendo:sparkline-valueAxisItem-labels-border

The border of the labels.

More documentation is available at [kendo:sparkline-valueAxisItem-labels-border](sparkline/valueaxisitem-labels-border).

#### Example

    <kendo:sparkline-valueAxisItem-labels>
        <kendo:sparkline-valueAxisItem-labels-border></kendo:sparkline-valueAxisItem-labels-border>
    </kendo:sparkline-valueAxisItem-labels>


## Event Attributes

### template `String`

The label template.
Template variables:


#### Example
    <kendo:sparkline-valueAxisItem-labels template="handle_template">
    </kendo:sparkline-valueAxisItem-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:sparkline-valueAxisItem-labels-template

The label template.
Template variables:


#### Example
    <kendo:sparkline-valueAxisItem-labels>
        <kendo:sparkline-valueAxisItem-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:sparkline-valueAxisItem-labels-template>
    </kendo:sparkline-valueAxisItem-labels>

