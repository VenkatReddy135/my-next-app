---
title: chart-seriesItem-notes-label
slug: jsp-chart-seriesItem-notes-label
tags: api, java
publish: true
---

# \<kendo:chart-seriesItem-notes-label\>

The label of the notes.

#### Example
    <kendo:chart-seriesItem-notes>
        <kendo:chart-seriesItem-notes-label></kendo:chart-seriesItem-notes-label>
    </kendo:chart-seriesItem-notes>

## Configuration Attributes

### background `java.lang.String`

The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-seriesItem-notes-label background="background">
    </kendo:chart-seriesItem-notes-label>

### color `java.lang.String`

The text color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-seriesItem-notes-label color="color">
    </kendo:chart-seriesItem-notes-label>

### font `java.lang.String`

The font style of the label.

#### Example
    <kendo:chart-seriesItem-notes-label font="font">
    </kendo:chart-seriesItem-notes-label>

### format `java.lang.String`

The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.

#### Example
    <kendo:chart-seriesItem-notes-label format="format">
    </kendo:chart-seriesItem-notes-label>

### position `java.lang.String`

The position of the labels.

#### Example
    <kendo:chart-seriesItem-notes-label position="position">
    </kendo:chart-seriesItem-notes-label>

### rotation `float`

The rotation angle of the label. By default the label are not rotated.

#### Example
    <kendo:chart-seriesItem-notes-label rotation="rotation">
    </kendo:chart-seriesItem-notes-label>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:chart-seriesItem-notes-label template="template">
    </kendo:chart-seriesItem-notes-label>

### visible `boolean`

If set to true the chart will display the series notes label. By default the series notes label are visible.

#### Example
    <kendo:chart-seriesItem-notes-label visible="visible">
    </kendo:chart-seriesItem-notes-label>


##  Configuration JSP Tags

### kendo:chart-seriesItem-notes-label-border

The border of the label.

More documentation is available at [kendo:chart-seriesItem-notes-label-border](chart/seriesitem-notes-label-border).

#### Example

    <kendo:chart-seriesItem-notes-label>
        <kendo:chart-seriesItem-notes-label-border></kendo:chart-seriesItem-notes-label-border>
    </kendo:chart-seriesItem-notes-label>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-seriesItem-notes-label template="handle_template">
    </kendo:chart-seriesItem-notes-label>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:chart-seriesItem-notes-label-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:chart-seriesItem-notes-label>
        <kendo:chart-seriesItem-notes-label-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-seriesItem-notes-label-template>
    </kendo:chart-seriesItem-notes-label>

