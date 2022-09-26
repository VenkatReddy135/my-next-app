---
title: stockChart-yAxisItem-labels
slug: jsp-stockChart-yAxisItem-labels
tags: api, java
publish: true
---

# \<kendo:stockChart-yAxisItem-labels\>

Configures the axis labels.

#### Example
    <kendo:stockChart-yAxisItem>
        <kendo:stockChart-yAxisItem-labels></kendo:stockChart-yAxisItem-labels>
    </kendo:stockChart-yAxisItem>

## Configuration Attributes

### background `String`

The background color of the labels. Any valid CSS color string will work here, including
hex and rgb

#### Example
    <kendo:stockChart-yAxisItem-labels background="background">
    </kendo:stockChart-yAxisItem-labels>

### color `String`

The text color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:stockChart-yAxisItem-labels color="color">
    </kendo:stockChart-yAxisItem-labels>

### culture `String`

Culture to use for formatting the dates. See Globalization for more information.
It defaults to the global culture.

#### Example
    <kendo:stockChart-yAxisItem-labels culture="culture">
    </kendo:stockChart-yAxisItem-labels>

### dateFormats `Object`

Date format strings

#### Example
    <kendo:stockChart-yAxisItem-labels dateFormats="dateFormats">
    </kendo:stockChart-yAxisItem-labels>

### font `String`

The font style of the labels.

#### Example
    <kendo:stockChart-yAxisItem-labels font="font">
    </kendo:stockChart-yAxisItem-labels>

### format `String`

The format of the labels.

#### Example
    <kendo:stockChart-yAxisItem-labels format="format">
    </kendo:stockChart-yAxisItem-labels>

### margin `Object`

The margin of the labels.

#### Example
    <kendo:stockChart-yAxisItem-labels margin="margin">
    </kendo:stockChart-yAxisItem-labels>

### mirror `boolean`

Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.

#### Example
    <kendo:stockChart-yAxisItem-labels mirror="mirror">
    </kendo:stockChart-yAxisItem-labels>

### padding `Object`

The padding of the labels.

#### Example
    <kendo:stockChart-yAxisItem-labels padding="padding">
    </kendo:stockChart-yAxisItem-labels>

### rotation `float`

The rotation angle of the labels.

#### Example
    <kendo:stockChart-yAxisItem-labels rotation="rotation">
    </kendo:stockChart-yAxisItem-labels>

### skip `float`

Number of labels to skip.
Skips rendering the first n labels.

#### Example
    <kendo:stockChart-yAxisItem-labels skip="skip">
    </kendo:stockChart-yAxisItem-labels>

### step `float`

Label rendering step.
Every n-th label is rendered where n is the step

#### Example
    <kendo:stockChart-yAxisItem-labels step="step">
    </kendo:stockChart-yAxisItem-labels>

### template `String`

The label template.

#### Example
    <kendo:stockChart-yAxisItem-labels template="template">
    </kendo:stockChart-yAxisItem-labels>

### visible `boolean`

The visibility of the labels.

#### Example
    <kendo:stockChart-yAxisItem-labels visible="visible">
    </kendo:stockChart-yAxisItem-labels>


##  Configuration JSP Tags

### kendo:stockChart-yAxisItem-labels-border

The border of the labels.

More documentation is available at [kendo:stockChart-yAxisItem-labels-border](stockchart/yaxisitem-labels-border).

#### Example

    <kendo:stockChart-yAxisItem-labels>
        <kendo:stockChart-yAxisItem-labels-border></kendo:stockChart-yAxisItem-labels-border>
    </kendo:stockChart-yAxisItem-labels>


## Event Attributes

### template `String`

The label template.


#### Example
    <kendo:stockChart-yAxisItem-labels template="handle_template">
    </kendo:stockChart-yAxisItem-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-yAxisItem-labels-template

The label template.


#### Example
    <kendo:stockChart-yAxisItem-labels>
        <kendo:stockChart-yAxisItem-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-yAxisItem-labels-template>
    </kendo:stockChart-yAxisItem-labels>

