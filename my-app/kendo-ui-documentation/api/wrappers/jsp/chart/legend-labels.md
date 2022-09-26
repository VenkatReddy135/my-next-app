---
title: chart-legend-labels
slug: jsp-chart-legend-labels
tags: api, java
publish: true
---

# \<kendo:chart-legend-labels\>

The chart legend label configuration.

#### Example
    <kendo:chart-legend>
        <kendo:chart-legend-labels></kendo:chart-legend-labels>
    </kendo:chart-legend>

## Configuration Attributes

### color `java.lang.String`

The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-legend-labels color="color">
    </kendo:chart-legend-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:chart-legend-labels font="font">
    </kendo:chart-legend-labels>

### margin `float`

The margin of the labels. A numeric value will set all margins. Further configuration is available via [kendo:chart-legend-labels-margin](#kendo-chart-legend-labels-margin). 

#### Example
    <kendo:chart-legend-labels margin="margin">
    </kendo:chart-legend-labels>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:chart-legend-labels template="template">
    </kendo:chart-legend-labels>


##  Configuration JSP Tags

### kendo:chart-legend-labels-margin

The margin of the labels. A numeric value will set all margins.

More documentation is available at [kendo:chart-legend-labels-margin](chart/legend-labels-margin).

#### Example

    <kendo:chart-legend-labels>
        <kendo:chart-legend-labels-margin></kendo:chart-legend-labels-margin>
    </kendo:chart-legend-labels>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-legend-labels template="handle_template">
    </kendo:chart-legend-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-legend-labels-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-legend-labels>
        <kendo:chart-legend-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-legend-labels-template>
    </kendo:chart-legend-labels>

