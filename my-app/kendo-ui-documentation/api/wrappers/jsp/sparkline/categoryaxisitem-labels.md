---
title: sparkline-categoryAxisItem-labels
slug: jsp-sparkline-categoryAxisItem-labels
tags: api, java
publish: true
---

# \<kendo:sparkline-categoryAxisItem-labels\>

Configures the axis labels.

#### Example
    <kendo:sparkline-categoryAxisItem>
        <kendo:sparkline-categoryAxisItem-labels></kendo:sparkline-categoryAxisItem-labels>
    </kendo:sparkline-categoryAxisItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:sparkline-categoryAxisItem-labels background="background">
    </kendo:sparkline-categoryAxisItem-labels>

### color `java.lang.String`

The text color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:sparkline-categoryAxisItem-labels color="color">
    </kendo:sparkline-categoryAxisItem-labels>

### culture `java.lang.String`

Culture to use for formatting the dates. See Globalization for more information.
It uses the global culture by default.

#### Example
    <kendo:sparkline-categoryAxisItem-labels culture="culture">
    </kendo:sparkline-categoryAxisItem-labels>

### dateFormats `java.lang.Object`

Date format strings

#### Example
    <kendo:sparkline-categoryAxisItem-labels dateFormats="dateFormats">
    </kendo:sparkline-categoryAxisItem-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:sparkline-categoryAxisItem-labels font="font">
    </kendo:sparkline-categoryAxisItem-labels>

### format `java.lang.String`

The format of the labels.

#### Example
    <kendo:sparkline-categoryAxisItem-labels format="format">
    </kendo:sparkline-categoryAxisItem-labels>

### margin `java.lang.Object`

The margin of the labels.

#### Example
    <kendo:sparkline-categoryAxisItem-labels margin="margin">
    </kendo:sparkline-categoryAxisItem-labels>

### mirror `boolean`

Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.

#### Example
    <kendo:sparkline-categoryAxisItem-labels mirror="mirror">
    </kendo:sparkline-categoryAxisItem-labels>

### padding `java.lang.Object`

The padding of the labels.

#### Example
    <kendo:sparkline-categoryAxisItem-labels padding="padding">
    </kendo:sparkline-categoryAxisItem-labels>

### rotation `float`

The rotation angle of the labels.

#### Example
    <kendo:sparkline-categoryAxisItem-labels rotation="rotation">
    </kendo:sparkline-categoryAxisItem-labels>

### skip `float`

Number of labels to skip.
Skips rendering the first n labels.

#### Example
    <kendo:sparkline-categoryAxisItem-labels skip="skip">
    </kendo:sparkline-categoryAxisItem-labels>

### step `float`

Label rendering step.
Every n-th label is rendered where n is the step

#### Example
    <kendo:sparkline-categoryAxisItem-labels step="step">
    </kendo:sparkline-categoryAxisItem-labels>

### template `java.lang.String`

The label template.
Template variables:

#### Example
    <kendo:sparkline-categoryAxisItem-labels template="template">
    </kendo:sparkline-categoryAxisItem-labels>

### visible `boolean`

The visibility of the labels.

#### Example
    <kendo:sparkline-categoryAxisItem-labels visible="visible">
    </kendo:sparkline-categoryAxisItem-labels>


##  Configuration JSP Tags

### kendo:sparkline-categoryAxisItem-labels-border

The border of the labels.

More documentation is available at [kendo:sparkline-categoryAxisItem-labels-border](sparkline/categoryaxisitem-labels-border).

#### Example

    <kendo:sparkline-categoryAxisItem-labels>
        <kendo:sparkline-categoryAxisItem-labels-border></kendo:sparkline-categoryAxisItem-labels-border>
    </kendo:sparkline-categoryAxisItem-labels>


## Event Attributes

### template `String`

The label template.
Template variables:


#### Example
    <kendo:sparkline-categoryAxisItem-labels template="handle_template">
    </kendo:sparkline-categoryAxisItem-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:sparkline-categoryAxisItem-labels-template

The label template.
Template variables:


#### Example
    <kendo:sparkline-categoryAxisItem-labels>
        <kendo:sparkline-categoryAxisItem-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:sparkline-categoryAxisItem-labels-template>
    </kendo:sparkline-categoryAxisItem-labels>

