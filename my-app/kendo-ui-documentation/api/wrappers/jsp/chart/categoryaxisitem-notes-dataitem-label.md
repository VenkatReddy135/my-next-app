---
title: chart-categoryAxisItem-notes-dataItem-label
slug: jsp-chart-categoryAxisItem-notes-dataItem-label
tags: api, java
publish: true
---

# \<kendo:chart-categoryAxisItem-notes-dataItem-label\>

The label of the note.

#### Example
    <kendo:chart-categoryAxisItem-notes-dataItem>
        <kendo:chart-categoryAxisItem-notes-dataItem-label></kendo:chart-categoryAxisItem-notes-dataItem-label>
    </kendo:chart-categoryAxisItem-notes-dataItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-categoryAxisItem-notes-dataItem-label background="background">
    </kendo:chart-categoryAxisItem-notes-dataItem-label>

### color `java.lang.String`

The text color of the note label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-categoryAxisItem-notes-dataItem-label color="color">
    </kendo:chart-categoryAxisItem-notes-dataItem-label>

### font `java.lang.String`

The font style of the note label.

#### Example
    <kendo:chart-categoryAxisItem-notes-dataItem-label font="font">
    </kendo:chart-categoryAxisItem-notes-dataItem-label>

### format `java.lang.String`

The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Example
    <kendo:chart-categoryAxisItem-notes-dataItem-label format="format">
    </kendo:chart-categoryAxisItem-notes-dataItem-label>

### position `java.lang.String`

The position of the category axis note label.

#### Example
    <kendo:chart-categoryAxisItem-notes-dataItem-label position="position">
    </kendo:chart-categoryAxisItem-notes-dataItem-label>

### rotation `float`

The rotation angle of the label. By default the label are not rotated.

#### Example
    <kendo:chart-categoryAxisItem-notes-dataItem-label rotation="rotation">
    </kendo:chart-categoryAxisItem-notes-dataItem-label>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:chart-categoryAxisItem-notes-dataItem-label template="template">
    </kendo:chart-categoryAxisItem-notes-dataItem-label>

### text `java.lang.String`

The label note text.

#### Example
    <kendo:chart-categoryAxisItem-notes-dataItem-label text="text">
    </kendo:chart-categoryAxisItem-notes-dataItem-label>

### visible `boolean`

If set to true the chart will display the category notes label. By default the category notes label are visible.

#### Example
    <kendo:chart-categoryAxisItem-notes-dataItem-label visible="visible">
    </kendo:chart-categoryAxisItem-notes-dataItem-label>


##  Configuration JSP Tags

### kendo:chart-categoryAxisItem-notes-dataItem-label-border

The border of the label.

More documentation is available at [kendo:chart-categoryAxisItem-notes-dataItem-label-border](chart/categoryaxisitem-notes-dataitem-label-border).

#### Example

    <kendo:chart-categoryAxisItem-notes-dataItem-label>
        <kendo:chart-categoryAxisItem-notes-dataItem-label-border></kendo:chart-categoryAxisItem-notes-dataItem-label-border>
    </kendo:chart-categoryAxisItem-notes-dataItem-label>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-categoryAxisItem-notes-dataItem-label template="handle_template">
    </kendo:chart-categoryAxisItem-notes-dataItem-label>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-categoryAxisItem-notes-dataItem-label-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-categoryAxisItem-notes-dataItem-label>
        <kendo:chart-categoryAxisItem-notes-dataItem-label-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-categoryAxisItem-notes-dataItem-label-template>
    </kendo:chart-categoryAxisItem-notes-dataItem-label>

