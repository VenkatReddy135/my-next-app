---
title: chart-valueAxisItem-notes-label
slug: jsp-chart-valueAxisItem-notes-label
tags: api, java
publish: true
---

# \<kendo:chart-valueAxisItem-notes-label\>

The label of the notes.

#### Example
    <kendo:chart-valueAxisItem-notes>
        <kendo:chart-valueAxisItem-notes-label></kendo:chart-valueAxisItem-notes-label>
    </kendo:chart-valueAxisItem-notes>

## Configuration Attributes

### background `java.lang.String`

The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-valueAxisItem-notes-label background="background">
    </kendo:chart-valueAxisItem-notes-label>

### color `java.lang.String`

The text color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-valueAxisItem-notes-label color="color">
    </kendo:chart-valueAxisItem-notes-label>

### font `java.lang.String`

The font style of the label.

#### Example
    <kendo:chart-valueAxisItem-notes-label font="font">
    </kendo:chart-valueAxisItem-notes-label>

### format `java.lang.String`

The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.

#### Example
    <kendo:chart-valueAxisItem-notes-label format="format">
    </kendo:chart-valueAxisItem-notes-label>

### position `java.lang.String`

The position of the labels.

#### Example
    <kendo:chart-valueAxisItem-notes-label position="position">
    </kendo:chart-valueAxisItem-notes-label>

### rotation `float`

The rotation angle of the label. By default the label are not rotated.

#### Example
    <kendo:chart-valueAxisItem-notes-label rotation="rotation">
    </kendo:chart-valueAxisItem-notes-label>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:chart-valueAxisItem-notes-label template="template">
    </kendo:chart-valueAxisItem-notes-label>

### visible `boolean`

If set to true the chart will display the value axis notes label. By default the value axis notes label are visible.

#### Example
    <kendo:chart-valueAxisItem-notes-label visible="visible">
    </kendo:chart-valueAxisItem-notes-label>


##  Configuration JSP Tags

### kendo:chart-valueAxisItem-notes-label-border

The border of the label.

More documentation is available at [kendo:chart-valueAxisItem-notes-label-border](chart/valueaxisitem-notes-label-border).

#### Example

    <kendo:chart-valueAxisItem-notes-label>
        <kendo:chart-valueAxisItem-notes-label-border></kendo:chart-valueAxisItem-notes-label-border>
    </kendo:chart-valueAxisItem-notes-label>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-valueAxisItem-notes-label template="handle_template">
    </kendo:chart-valueAxisItem-notes-label>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-valueAxisItem-notes-label-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-valueAxisItem-notes-label>
        <kendo:chart-valueAxisItem-notes-label-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-valueAxisItem-notes-label-template>
    </kendo:chart-valueAxisItem-notes-label>

