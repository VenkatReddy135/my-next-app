---
title: stockChart-xAxisItem-labels
slug: jsp-stockChart-xAxisItem-labels
tags: api, java
publish: true
---

# \<kendo:stockChart-xAxisItem-labels\>

Configures the axis labels.

#### Example
    <kendo:stockChart-xAxisItem>
        <kendo:stockChart-xAxisItem-labels></kendo:stockChart-xAxisItem-labels>
    </kendo:stockChart-xAxisItem>

## Configuration Attributes

### background `String`

The background color of the labels. Any valid CSS color string will work here, including
hex and rgb

#### Example
    <kendo:stockChart-xAxisItem-labels background="background">
    </kendo:stockChart-xAxisItem-labels>

### color `String`

The text color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:stockChart-xAxisItem-labels color="color">
    </kendo:stockChart-xAxisItem-labels>

### culture `String`

Culture to use for formatting the dates. See Globalization for more information.
By default it uses the global culture.

#### Example
    <kendo:stockChart-xAxisItem-labels culture="culture">
    </kendo:stockChart-xAxisItem-labels>

### dateFormats `Object`

Date format strings

#### Example
    <kendo:stockChart-xAxisItem-labels dateFormats="dateFormats">
    </kendo:stockChart-xAxisItem-labels>

### font `String`

The font style of the labels.

#### Example
    <kendo:stockChart-xAxisItem-labels font="font">
    </kendo:stockChart-xAxisItem-labels>

### format `String`

The format of the labels.

#### Example
    <kendo:stockChart-xAxisItem-labels format="format">
    </kendo:stockChart-xAxisItem-labels>

### margin `Object`

The margin of the labels.

#### Example
    <kendo:stockChart-xAxisItem-labels margin="margin">
    </kendo:stockChart-xAxisItem-labels>

### mirror `boolean`

Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.

#### Example
    <kendo:stockChart-xAxisItem-labels mirror="mirror">
    </kendo:stockChart-xAxisItem-labels>

### padding `Object`

The padding of the labels.

#### Example
    <kendo:stockChart-xAxisItem-labels padding="padding">
    </kendo:stockChart-xAxisItem-labels>

### rotation `float`

The rotation angle of the labels.

#### Example
    <kendo:stockChart-xAxisItem-labels rotation="rotation">
    </kendo:stockChart-xAxisItem-labels>

### skip `float`

Number of labels to skip.
Skips rendering the first n labels.

#### Example
    <kendo:stockChart-xAxisItem-labels skip="skip">
    </kendo:stockChart-xAxisItem-labels>

### step `float`

Label rendering step.
Every n-th label is rendered where n is the step

#### Example
    <kendo:stockChart-xAxisItem-labels step="step">
    </kendo:stockChart-xAxisItem-labels>

### template `String`

The label template.

#### Example
    <kendo:stockChart-xAxisItem-labels template="template">
    </kendo:stockChart-xAxisItem-labels>

### visible `boolean`

The visibility of the labels.

#### Example
    <kendo:stockChart-xAxisItem-labels visible="visible">
    </kendo:stockChart-xAxisItem-labels>


##  Configuration JSP Tags

### kendo:stockChart-xAxisItem-labels-border

The border of the labels.

More documentation is available at [kendo:stockChart-xAxisItem-labels-border](stockchart/xaxisitem-labels-border).

#### Example

    <kendo:stockChart-xAxisItem-labels>
        <kendo:stockChart-xAxisItem-labels-border></kendo:stockChart-xAxisItem-labels-border>
    </kendo:stockChart-xAxisItem-labels>


## Event Attributes

### template `String`

The label template.


#### Example
    <kendo:stockChart-xAxisItem-labels template="handle_template">
    </kendo:stockChart-xAxisItem-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-xAxisItem-labels-template

The label template.


#### Example
    <kendo:stockChart-xAxisItem-labels>
        <kendo:stockChart-xAxisItem-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-xAxisItem-labels-template>
    </kendo:stockChart-xAxisItem-labels>

