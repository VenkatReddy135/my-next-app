---
title: stockChart-categoryAxisItem-labels
slug: jsp-stockChart-categoryAxisItem-labels
tags: api, java
publish: true
---

# \<kendo:stockChart-categoryAxisItem-labels\>

Configures the axis labels.

#### Example
    <kendo:stockChart-categoryAxisItem>
        <kendo:stockChart-categoryAxisItem-labels></kendo:stockChart-categoryAxisItem-labels>
    </kendo:stockChart-categoryAxisItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:stockChart-categoryAxisItem-labels background="background">
    </kendo:stockChart-categoryAxisItem-labels>

### color `java.lang.String`

The text color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:stockChart-categoryAxisItem-labels color="color">
    </kendo:stockChart-categoryAxisItem-labels>

### culture `java.lang.String`

Culture to use for formatting the dates. See Globalization for more information.
It defaults to the global culture.

#### Example
    <kendo:stockChart-categoryAxisItem-labels culture="culture">
    </kendo:stockChart-categoryAxisItem-labels>

### dateFormats `java.lang.Object`

Date format strings

#### Example
    <kendo:stockChart-categoryAxisItem-labels dateFormats="dateFormats">
    </kendo:stockChart-categoryAxisItem-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:stockChart-categoryAxisItem-labels font="font">
    </kendo:stockChart-categoryAxisItem-labels>

### format `java.lang.String`

The format of the labels.

#### Example
    <kendo:stockChart-categoryAxisItem-labels format="format">
    </kendo:stockChart-categoryAxisItem-labels>

### margin `java.lang.Object`

The margin of the labels.

#### Example
    <kendo:stockChart-categoryAxisItem-labels margin="margin">
    </kendo:stockChart-categoryAxisItem-labels>

### mirror `boolean`

Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.

#### Example
    <kendo:stockChart-categoryAxisItem-labels mirror="mirror">
    </kendo:stockChart-categoryAxisItem-labels>

### padding `java.lang.Object`

The padding of the labels.

#### Example
    <kendo:stockChart-categoryAxisItem-labels padding="padding">
    </kendo:stockChart-categoryAxisItem-labels>

### rotation `float`

The rotation angle of the labels.

#### Example
    <kendo:stockChart-categoryAxisItem-labels rotation="rotation">
    </kendo:stockChart-categoryAxisItem-labels>

### skip `float`

Number of labels to skip.
Skips rendering the first n labels.

#### Example
    <kendo:stockChart-categoryAxisItem-labels skip="skip">
    </kendo:stockChart-categoryAxisItem-labels>

### step `float`

Label rendering step.
Every n-th label is rendered where n is the step

#### Example
    <kendo:stockChart-categoryAxisItem-labels step="step">
    </kendo:stockChart-categoryAxisItem-labels>

### template `java.lang.String`

The label template.
Template variables:

#### Example
    <kendo:stockChart-categoryAxisItem-labels template="template">
    </kendo:stockChart-categoryAxisItem-labels>

### visible `boolean`

The visibility of the labels.

#### Example
    <kendo:stockChart-categoryAxisItem-labels visible="visible">
    </kendo:stockChart-categoryAxisItem-labels>


##  Configuration JSP Tags

### kendo:stockChart-categoryAxisItem-labels-border

The border of the labels.

More documentation is available at [kendo:stockChart-categoryAxisItem-labels-border](stockchart/categoryaxisitem-labels-border).

#### Example

    <kendo:stockChart-categoryAxisItem-labels>
        <kendo:stockChart-categoryAxisItem-labels-border></kendo:stockChart-categoryAxisItem-labels-border>
    </kendo:stockChart-categoryAxisItem-labels>


## Event Attributes

### template `String`

The label template.
Template variables:


#### Example
    <kendo:stockChart-categoryAxisItem-labels template="handle_template">
    </kendo:stockChart-categoryAxisItem-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-categoryAxisItem-labels-template

The label template.
Template variables:


#### Example
    <kendo:stockChart-categoryAxisItem-labels>
        <kendo:stockChart-categoryAxisItem-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-categoryAxisItem-labels-template>
    </kendo:stockChart-categoryAxisItem-labels>

