---
title: stockChart-valueAxisItem-notes-label
slug: jsp-stockChart-valueAxisItem-notes-label
tags: api, java
publish: true
---

# \<kendo:stockChart-valueAxisItem-notes-label\>

The label of the notes.

#### Example
    <kendo:stockChart-valueAxisItem-notes>
        <kendo:stockChart-valueAxisItem-notes-label></kendo:stockChart-valueAxisItem-notes-label>
    </kendo:stockChart-valueAxisItem-notes>

## Configuration Attributes

### background `java.lang.String`

The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:stockChart-valueAxisItem-notes-label background="background">
    </kendo:stockChart-valueAxisItem-notes-label>

### color `java.lang.String`

The text color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:stockChart-valueAxisItem-notes-label color="color">
    </kendo:stockChart-valueAxisItem-notes-label>

### font `java.lang.String`

The font style of the label.

#### Example
    <kendo:stockChart-valueAxisItem-notes-label font="font">
    </kendo:stockChart-valueAxisItem-notes-label>

### format `java.lang.String`

The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.

#### Example
    <kendo:stockChart-valueAxisItem-notes-label format="format">
    </kendo:stockChart-valueAxisItem-notes-label>

### position `java.lang.String`

The position of the labels.

#### Example
    <kendo:stockChart-valueAxisItem-notes-label position="position">
    </kendo:stockChart-valueAxisItem-notes-label>

### rotation `float`

The rotation angle of the label. By default the label are not rotated.

#### Example
    <kendo:stockChart-valueAxisItem-notes-label rotation="rotation">
    </kendo:stockChart-valueAxisItem-notes-label>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:stockChart-valueAxisItem-notes-label template="template">
    </kendo:stockChart-valueAxisItem-notes-label>

### visible `boolean`

If set to true the chart will display the value axis notes label. By default the value axis notes label are visible.

#### Example
    <kendo:stockChart-valueAxisItem-notes-label visible="visible">
    </kendo:stockChart-valueAxisItem-notes-label>


##  Configuration JSP Tags

### kendo:stockChart-valueAxisItem-notes-label-border

The border of the label.

More documentation is available at [kendo:stockChart-valueAxisItem-notes-label-border](stockchart/valueaxisitem-notes-label-border).

#### Example

    <kendo:stockChart-valueAxisItem-notes-label>
        <kendo:stockChart-valueAxisItem-notes-label-border></kendo:stockChart-valueAxisItem-notes-label-border>
    </kendo:stockChart-valueAxisItem-notes-label>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:stockChart-valueAxisItem-notes-label template="handle_template">
    </kendo:stockChart-valueAxisItem-notes-label>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-valueAxisItem-notes-label-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:stockChart-valueAxisItem-notes-label>
        <kendo:stockChart-valueAxisItem-notes-label-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-valueAxisItem-notes-label-template>
    </kendo:stockChart-valueAxisItem-notes-label>

