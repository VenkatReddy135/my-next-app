---
title: sparkline-seriesDefaults-labels
slug: jsp-sparkline-seriesDefaults-labels
tags: api, java
publish: true
---

# \<kendo:sparkline-seriesDefaults-labels\>

Configures the series data labels.

#### Example
    <kendo:sparkline-seriesDefaults>
        <kendo:sparkline-seriesDefaults-labels></kendo:sparkline-seriesDefaults-labels>
    </kendo:sparkline-seriesDefaults>

## Configuration Attributes

### background `java.lang.String`

The background color of the labels. Any valid CSS color string will work here,
including hex and rgb.

#### Example
    <kendo:sparkline-seriesDefaults-labels background="background">
    </kendo:sparkline-seriesDefaults-labels>

### color `java.lang.String`

The text color of the labels. Any valid CSS color string will work here, including hex
and rgb.

#### Example
    <kendo:sparkline-seriesDefaults-labels color="color">
    </kendo:sparkline-seriesDefaults-labels>

### font `java.lang.String`

The font style of the labels.
labels

#### Example
    <kendo:sparkline-seriesDefaults-labels font="font">
    </kendo:sparkline-seriesDefaults-labels>

### format `java.lang.String`

The format of the labels.

#### Example
    <kendo:sparkline-seriesDefaults-labels format="format">
    </kendo:sparkline-seriesDefaults-labels>

### margin `java.lang.Object`

The margin of the labels.

#### Example
    <kendo:sparkline-seriesDefaults-labels margin="margin">
    </kendo:sparkline-seriesDefaults-labels>

### padding `java.lang.Object`

The padding of the labels.

#### Example
    <kendo:sparkline-seriesDefaults-labels padding="padding">
    </kendo:sparkline-seriesDefaults-labels>

### template `java.lang.String`

The label template.
Template variables:

#### Example
    <kendo:sparkline-seriesDefaults-labels template="template">
    </kendo:sparkline-seriesDefaults-labels>

### visible `boolean`

The visibility of the labels.

#### Example
    <kendo:sparkline-seriesDefaults-labels visible="visible">
    </kendo:sparkline-seriesDefaults-labels>


##  Configuration JSP Tags

### kendo:sparkline-seriesDefaults-labels-border

The border of the labels.

More documentation is available at [kendo:sparkline-seriesDefaults-labels-border](sparkline/seriesdefaults-labels-border).

#### Example

    <kendo:sparkline-seriesDefaults-labels>
        <kendo:sparkline-seriesDefaults-labels-border></kendo:sparkline-seriesDefaults-labels-border>
    </kendo:sparkline-seriesDefaults-labels>


## Event Attributes

### template `String`

The label template.
Template variables:


#### Example
    <kendo:sparkline-seriesDefaults-labels template="handle_template">
    </kendo:sparkline-seriesDefaults-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:sparkline-seriesDefaults-labels-template

The label template.
Template variables:


#### Example
    <kendo:sparkline-seriesDefaults-labels>
        <kendo:sparkline-seriesDefaults-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:sparkline-seriesDefaults-labels-template>
    </kendo:sparkline-seriesDefaults-labels>

