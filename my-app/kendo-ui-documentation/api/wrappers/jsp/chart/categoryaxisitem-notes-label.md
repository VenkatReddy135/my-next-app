---
title: chart-categoryAxisItem-notes-label
slug: jsp-chart-categoryAxisItem-notes-label
tags: api, java
publish: true
---

# \<kendo:chart-categoryAxisItem-notes-label\>

The label of the notes.

#### Example
    <kendo:chart-categoryAxisItem-notes>
        <kendo:chart-categoryAxisItem-notes-label></kendo:chart-categoryAxisItem-notes-label>
    </kendo:chart-categoryAxisItem-notes>

## Configuration Attributes

### background `java.lang.String`

The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-categoryAxisItem-notes-label background="background">
    </kendo:chart-categoryAxisItem-notes-label>

### color `java.lang.String`

The text color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-categoryAxisItem-notes-label color="color">
    </kendo:chart-categoryAxisItem-notes-label>

### font `java.lang.String`

The font style of the label.

#### Example
    <kendo:chart-categoryAxisItem-notes-label font="font">
    </kendo:chart-categoryAxisItem-notes-label>

### format `java.lang.String`

The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Example
    <kendo:chart-categoryAxisItem-notes-label format="format">
    </kendo:chart-categoryAxisItem-notes-label>

### position `java.lang.String`

The position of the labels.

#### Example
    <kendo:chart-categoryAxisItem-notes-label position="position">
    </kendo:chart-categoryAxisItem-notes-label>

### rotation `float`

The rotation angle of the label. By default the label are not rotated.

#### Example
    <kendo:chart-categoryAxisItem-notes-label rotation="rotation">
    </kendo:chart-categoryAxisItem-notes-label>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:chart-categoryAxisItem-notes-label template="template">
    </kendo:chart-categoryAxisItem-notes-label>

### visible `boolean`

If set to true the chart will display the category notes label. By default the category notes label are visible.

#### Example
    <kendo:chart-categoryAxisItem-notes-label visible="visible">
    </kendo:chart-categoryAxisItem-notes-label>


##  Configuration JSP Tags

### kendo:chart-categoryAxisItem-notes-label-border

The border of the label.

More documentation is available at [kendo:chart-categoryAxisItem-notes-label-border](chart/categoryaxisitem-notes-label-border).

#### Example

    <kendo:chart-categoryAxisItem-notes-label>
        <kendo:chart-categoryAxisItem-notes-label-border></kendo:chart-categoryAxisItem-notes-label-border>
    </kendo:chart-categoryAxisItem-notes-label>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-categoryAxisItem-notes-label template="handle_template">
    </kendo:chart-categoryAxisItem-notes-label>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-categoryAxisItem-notes-label-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-categoryAxisItem-notes-label>
        <kendo:chart-categoryAxisItem-notes-label-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-categoryAxisItem-notes-label-template>
    </kendo:chart-categoryAxisItem-notes-label>

