---
title: chart-valueAxisItem-notes-dataItem-label
slug: jsp-chart-valueAxisItem-notes-dataItem-label
tags: api, java
publish: true
---

# \<kendo:chart-valueAxisItem-notes-dataItem-label\>

The label of the note.

#### Example
    <kendo:chart-valueAxisItem-notes-dataItem>
        <kendo:chart-valueAxisItem-notes-dataItem-label></kendo:chart-valueAxisItem-notes-dataItem-label>
    </kendo:chart-valueAxisItem-notes-dataItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-valueAxisItem-notes-dataItem-label background="background">
    </kendo:chart-valueAxisItem-notes-dataItem-label>

### color `java.lang.String`

The text color of the note label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-valueAxisItem-notes-dataItem-label color="color">
    </kendo:chart-valueAxisItem-notes-dataItem-label>

### font `java.lang.String`

The font style of the note label.

#### Example
    <kendo:chart-valueAxisItem-notes-dataItem-label font="font">
    </kendo:chart-valueAxisItem-notes-dataItem-label>

### format `java.lang.String`

The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.

#### Example
    <kendo:chart-valueAxisItem-notes-dataItem-label format="format">
    </kendo:chart-valueAxisItem-notes-dataItem-label>

### position `java.lang.String`

The position of the value axis note label.

#### Example
    <kendo:chart-valueAxisItem-notes-dataItem-label position="position">
    </kendo:chart-valueAxisItem-notes-dataItem-label>

### rotation `float`

The rotation angle of the label. By default the label are not rotated.

#### Example
    <kendo:chart-valueAxisItem-notes-dataItem-label rotation="rotation">
    </kendo:chart-valueAxisItem-notes-dataItem-label>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:chart-valueAxisItem-notes-dataItem-label template="template">
    </kendo:chart-valueAxisItem-notes-dataItem-label>

### text `java.lang.String`

The label note text.

#### Example
    <kendo:chart-valueAxisItem-notes-dataItem-label text="text">
    </kendo:chart-valueAxisItem-notes-dataItem-label>

### visible `boolean`

If set to true the chart will display the value axis notes label. By default the value axis notes label are visible.

#### Example
    <kendo:chart-valueAxisItem-notes-dataItem-label visible="visible">
    </kendo:chart-valueAxisItem-notes-dataItem-label>


##  Configuration JSP Tags

### kendo:chart-valueAxisItem-notes-dataItem-label-border

The border of the label.

More documentation is available at [kendo:chart-valueAxisItem-notes-dataItem-label-border](chart/valueaxisitem-notes-dataitem-label-border).

#### Example

    <kendo:chart-valueAxisItem-notes-dataItem-label>
        <kendo:chart-valueAxisItem-notes-dataItem-label-border></kendo:chart-valueAxisItem-notes-dataItem-label-border>
    </kendo:chart-valueAxisItem-notes-dataItem-label>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-valueAxisItem-notes-dataItem-label template="handle_template">
    </kendo:chart-valueAxisItem-notes-dataItem-label>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-valueAxisItem-notes-dataItem-label-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-valueAxisItem-notes-dataItem-label>
        <kendo:chart-valueAxisItem-notes-dataItem-label-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-valueAxisItem-notes-dataItem-label-template>
    </kendo:chart-valueAxisItem-notes-dataItem-label>

