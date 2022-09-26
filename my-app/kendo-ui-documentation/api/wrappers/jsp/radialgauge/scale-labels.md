---
title: radialGauge-scale-labels
slug: jsp-radialGauge-scale-labels
tags: api, java
publish: true
---

# \<kendo:radialGauge-scale-labels\>

Configures the scale labels.

#### Example
    <kendo:radialGauge-scale>
        <kendo:radialGauge-scale-labels></kendo:radialGauge-scale-labels>
    </kendo:radialGauge-scale>

## Configuration Attributes

### background `java.lang.String`

The background color of the labels.
Any valid CSS color string will work here, including hex and rgb

#### Example
    <kendo:radialGauge-scale-labels background="background">
    </kendo:radialGauge-scale-labels>

### color `java.lang.String`

The text color of the labels.
Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:radialGauge-scale-labels color="color">
    </kendo:radialGauge-scale-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:radialGauge-scale-labels font="font">
    </kendo:radialGauge-scale-labels>

### format `java.lang.String`

The format of the labels.

#### Example
    <kendo:radialGauge-scale-labels format="format">
    </kendo:radialGauge-scale-labels>

### margin `java.lang.Object`

The margin of the labels.

#### Example
    <kendo:radialGauge-scale-labels margin="margin">
    </kendo:radialGauge-scale-labels>

### padding `java.lang.Object`

The padding of the labels.

#### Example
    <kendo:radialGauge-scale-labels padding="padding">
    </kendo:radialGauge-scale-labels>

### position `java.lang.String`

The labels positions.

#### Example
    <kendo:radialGauge-scale-labels position="position">
    </kendo:radialGauge-scale-labels>

### template `java.lang.String`

The label template.
Template variables:

#### Example
    <kendo:radialGauge-scale-labels template="template">
    </kendo:radialGauge-scale-labels>

### visible `boolean`

The visibility of the labels.

#### Example
    <kendo:radialGauge-scale-labels visible="visible">
    </kendo:radialGauge-scale-labels>


##  Configuration JSP Tags

### kendo:radialGauge-scale-labels-border

The border of the labels.

More documentation is available at [kendo:radialGauge-scale-labels-border](radialgauge/scale-labels-border).

#### Example

    <kendo:radialGauge-scale-labels>
        <kendo:radialGauge-scale-labels-border></kendo:radialGauge-scale-labels-border>
    </kendo:radialGauge-scale-labels>


## Event Attributes

### template `String`

The label template.
Template variables:


#### Example
    <kendo:radialGauge-scale-labels template="handle_template">
    </kendo:radialGauge-scale-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:radialGauge-scale-labels-template

The label template.
Template variables:


#### Example
    <kendo:radialGauge-scale-labels>
        <kendo:radialGauge-scale-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:radialGauge-scale-labels-template>
    </kendo:radialGauge-scale-labels>

