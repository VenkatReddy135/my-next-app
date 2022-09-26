---
title: chart-yAxisItem-notes-label
slug: jsp-chart-yAxisItem-notes-label
tags: api, java
publish: true
---

# \<kendo:chart-yAxisItem-notes-label\>

The label of the notes.

#### Example
    <kendo:chart-yAxisItem-notes>
        <kendo:chart-yAxisItem-notes-label></kendo:chart-yAxisItem-notes-label>
    </kendo:chart-yAxisItem-notes>

## Configuration Attributes

### background `java.lang.String`

The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-yAxisItem-notes-label background="background">
    </kendo:chart-yAxisItem-notes-label>

### color `java.lang.String`

The text color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-yAxisItem-notes-label color="color">
    </kendo:chart-yAxisItem-notes-label>

### font `java.lang.String`

The font style of the label.

#### Example
    <kendo:chart-yAxisItem-notes-label font="font">
    </kendo:chart-yAxisItem-notes-label>

### format `java.lang.String`

The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.

#### Example
    <kendo:chart-yAxisItem-notes-label format="format">
    </kendo:chart-yAxisItem-notes-label>

### position `java.lang.String`

The position of the labels.

#### Example
    <kendo:chart-yAxisItem-notes-label position="position">
    </kendo:chart-yAxisItem-notes-label>

### rotation `float`

The rotation angle of the label. By default the label are not rotated.

#### Example
    <kendo:chart-yAxisItem-notes-label rotation="rotation">
    </kendo:chart-yAxisItem-notes-label>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:chart-yAxisItem-notes-label template="template">
    </kendo:chart-yAxisItem-notes-label>

### visible `boolean`

If set to true the chart will display the y axis notes label. By default the y axis notes label are visible.

#### Example
    <kendo:chart-yAxisItem-notes-label visible="visible">
    </kendo:chart-yAxisItem-notes-label>


##  Configuration JSP Tags

### kendo:chart-yAxisItem-notes-label-border

The border of the label.

More documentation is available at [kendo:chart-yAxisItem-notes-label-border](chart/yaxisitem-notes-label-border).

#### Example

    <kendo:chart-yAxisItem-notes-label>
        <kendo:chart-yAxisItem-notes-label-border></kendo:chart-yAxisItem-notes-label-border>
    </kendo:chart-yAxisItem-notes-label>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-yAxisItem-notes-label template="handle_template">
    </kendo:chart-yAxisItem-notes-label>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-yAxisItem-notes-label-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-yAxisItem-notes-label>
        <kendo:chart-yAxisItem-notes-label-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-yAxisItem-notes-label-template>
    </kendo:chart-yAxisItem-notes-label>

