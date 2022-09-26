---
title: chart-xAxisItem-notes-label
slug: jsp-chart-xAxisItem-notes-label
tags: api, java
publish: true
---

# \<kendo:chart-xAxisItem-notes-label\>

The label of the notes.

#### Example
    <kendo:chart-xAxisItem-notes>
        <kendo:chart-xAxisItem-notes-label></kendo:chart-xAxisItem-notes-label>
    </kendo:chart-xAxisItem-notes>

## Configuration Attributes

### background `java.lang.String`

The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-xAxisItem-notes-label background="background">
    </kendo:chart-xAxisItem-notes-label>

### color `java.lang.String`

The text color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-xAxisItem-notes-label color="color">
    </kendo:chart-xAxisItem-notes-label>

### font `java.lang.String`

The font style of the label.

#### Example
    <kendo:chart-xAxisItem-notes-label font="font">
    </kendo:chart-xAxisItem-notes-label>

### format `java.lang.String`

The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.

#### Example
    <kendo:chart-xAxisItem-notes-label format="format">
    </kendo:chart-xAxisItem-notes-label>

### position `java.lang.String`

The position of the labels.

#### Example
    <kendo:chart-xAxisItem-notes-label position="position">
    </kendo:chart-xAxisItem-notes-label>

### rotation `float`

The rotation angle of the label. By default the label are not rotated.

#### Example
    <kendo:chart-xAxisItem-notes-label rotation="rotation">
    </kendo:chart-xAxisItem-notes-label>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:chart-xAxisItem-notes-label template="template">
    </kendo:chart-xAxisItem-notes-label>

### visible `boolean`

If set to true the chart will display the x axis notes label. By default the x axis notes label are visible.

#### Example
    <kendo:chart-xAxisItem-notes-label visible="visible">
    </kendo:chart-xAxisItem-notes-label>


##  Configuration JSP Tags

### kendo:chart-xAxisItem-notes-label-border

The border of the label.

More documentation is available at [kendo:chart-xAxisItem-notes-label-border](chart/xaxisitem-notes-label-border).

#### Example

    <kendo:chart-xAxisItem-notes-label>
        <kendo:chart-xAxisItem-notes-label-border></kendo:chart-xAxisItem-notes-label-border>
    </kendo:chart-xAxisItem-notes-label>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-xAxisItem-notes-label template="handle_template">
    </kendo:chart-xAxisItem-notes-label>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-xAxisItem-notes-label-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-xAxisItem-notes-label>
        <kendo:chart-xAxisItem-notes-label-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-xAxisItem-notes-label-template>
    </kendo:chart-xAxisItem-notes-label>

