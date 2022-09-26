---
title: chart-xAxisItem-notes-dataItem-label
slug: jsp-chart-xAxisItem-notes-dataItem-label
tags: api, java
publish: true
---

# \<kendo:chart-xAxisItem-notes-dataItem-label\>

The label of the note.

#### Example
    <kendo:chart-xAxisItem-notes-dataItem>
        <kendo:chart-xAxisItem-notes-dataItem-label></kendo:chart-xAxisItem-notes-dataItem-label>
    </kendo:chart-xAxisItem-notes-dataItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-xAxisItem-notes-dataItem-label background="background">
    </kendo:chart-xAxisItem-notes-dataItem-label>

### color `java.lang.String`

The text color of the note label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-xAxisItem-notes-dataItem-label color="color">
    </kendo:chart-xAxisItem-notes-dataItem-label>

### font `java.lang.String`

The font style of the note label.

#### Example
    <kendo:chart-xAxisItem-notes-dataItem-label font="font">
    </kendo:chart-xAxisItem-notes-dataItem-label>

### format `java.lang.String`

The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.

#### Example
    <kendo:chart-xAxisItem-notes-dataItem-label format="format">
    </kendo:chart-xAxisItem-notes-dataItem-label>

### position `java.lang.String`

The position of the x axis note label.

#### Example
    <kendo:chart-xAxisItem-notes-dataItem-label position="position">
    </kendo:chart-xAxisItem-notes-dataItem-label>

### rotation `float`

The rotation angle of the label. By default the label are not rotated.

#### Example
    <kendo:chart-xAxisItem-notes-dataItem-label rotation="rotation">
    </kendo:chart-xAxisItem-notes-dataItem-label>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:chart-xAxisItem-notes-dataItem-label template="template">
    </kendo:chart-xAxisItem-notes-dataItem-label>

### text `java.lang.String`

The label note text.

#### Example
    <kendo:chart-xAxisItem-notes-dataItem-label text="text">
    </kendo:chart-xAxisItem-notes-dataItem-label>

### visible `boolean`

If set to true the chart will display the x axis notes label. By default the x axis notes label are visible.

#### Example
    <kendo:chart-xAxisItem-notes-dataItem-label visible="visible">
    </kendo:chart-xAxisItem-notes-dataItem-label>


##  Configuration JSP Tags

### kendo:chart-xAxisItem-notes-dataItem-label-border

The border of the label.

More documentation is available at [kendo:chart-xAxisItem-notes-dataItem-label-border](chart/xaxisitem-notes-dataitem-label-border).

#### Example

    <kendo:chart-xAxisItem-notes-dataItem-label>
        <kendo:chart-xAxisItem-notes-dataItem-label-border></kendo:chart-xAxisItem-notes-dataItem-label-border>
    </kendo:chart-xAxisItem-notes-dataItem-label>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-xAxisItem-notes-dataItem-label template="handle_template">
    </kendo:chart-xAxisItem-notes-dataItem-label>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-xAxisItem-notes-dataItem-label-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-xAxisItem-notes-dataItem-label>
        <kendo:chart-xAxisItem-notes-dataItem-label-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-xAxisItem-notes-dataItem-label-template>
    </kendo:chart-xAxisItem-notes-dataItem-label>

