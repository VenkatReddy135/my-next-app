---
title: chart-legend-inactiveItems-labels
slug: jsp-chart-legend-inactiveItems-labels
tags: api, java
publish: true
---

# \<kendo:chart-legend-inactiveItems-labels\>

The chart legend label configuration.

#### Example
    <kendo:chart-legend-inactiveItems>
        <kendo:chart-legend-inactiveItems-labels></kendo:chart-legend-inactiveItems-labels>
    </kendo:chart-legend-inactiveItems>

## Configuration Attributes

### color `java.lang.String`

The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-legend-inactiveItems-labels color="color">
    </kendo:chart-legend-inactiveItems-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:chart-legend-inactiveItems-labels font="font">
    </kendo:chart-legend-inactiveItems-labels>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:chart-legend-inactiveItems-labels template="template">
    </kendo:chart-legend-inactiveItems-labels>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-legend-inactiveItems-labels template="handle_template">
    </kendo:chart-legend-inactiveItems-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-legend-inactiveItems-labels-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-legend-inactiveItems-labels>
        <kendo:chart-legend-inactiveItems-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-legend-inactiveItems-labels-template>
    </kendo:chart-legend-inactiveItems-labels>

