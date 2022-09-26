---
title: linearGauge-scale-labels
slug: jsp-linearGauge-scale-labels
tags: api, java
publish: true
---

# \<kendo:linearGauge-scale-labels\>

Configures the scale labels.

#### Example
    <kendo:linearGauge-scale>
        <kendo:linearGauge-scale-labels></kendo:linearGauge-scale-labels>
    </kendo:linearGauge-scale>

## Configuration Attributes

### background `java.lang.String`

The background color of the labels.
Any valid CSS color string will work here, including hex and rgb

#### Example
    <kendo:linearGauge-scale-labels background="background">
    </kendo:linearGauge-scale-labels>

### color `java.lang.String`

The text color of the labels.
Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:linearGauge-scale-labels color="color">
    </kendo:linearGauge-scale-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:linearGauge-scale-labels font="font">
    </kendo:linearGauge-scale-labels>

### format `java.lang.String`

The format of the labels.

#### Example
    <kendo:linearGauge-scale-labels format="format">
    </kendo:linearGauge-scale-labels>

### margin `java.lang.Object`

The margin of the labels.

#### Example
    <kendo:linearGauge-scale-labels margin="margin">
    </kendo:linearGauge-scale-labels>

### padding `java.lang.Object`

The padding of the labels.

#### Example
    <kendo:linearGauge-scale-labels padding="padding">
    </kendo:linearGauge-scale-labels>

### template `java.lang.String`

The label template.
Template variables:

#### Example
    <kendo:linearGauge-scale-labels template="template">
    </kendo:linearGauge-scale-labels>

### visible `boolean`

The visibility of the labels.

#### Example
    <kendo:linearGauge-scale-labels visible="visible">
    </kendo:linearGauge-scale-labels>


##  Configuration JSP Tags

### kendo:linearGauge-scale-labels-border

The border of the labels.

More documentation is available at [kendo:linearGauge-scale-labels-border](lineargauge/scale-labels-border).

#### Example

    <kendo:linearGauge-scale-labels>
        <kendo:linearGauge-scale-labels-border></kendo:linearGauge-scale-labels-border>
    </kendo:linearGauge-scale-labels>


## Event Attributes

### template `String`

The label template.
Template variables:


#### Example
    <kendo:linearGauge-scale-labels template="handle_template">
    </kendo:linearGauge-scale-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:linearGauge-scale-labels-template

The label template.
Template variables:


#### Example
    <kendo:linearGauge-scale-labels>
        <kendo:linearGauge-scale-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:linearGauge-scale-labels-template>
    </kendo:linearGauge-scale-labels>

