---
title: sparkline-valueAxisItem-notes-label
slug: jsp-sparkline-valueAxisItem-notes-label
tags: api, java
publish: true
---

# \<kendo:sparkline-valueAxisItem-notes-label\>

The label of the notes.

#### Example
    <kendo:sparkline-valueAxisItem-notes>
        <kendo:sparkline-valueAxisItem-notes-label></kendo:sparkline-valueAxisItem-notes-label>
    </kendo:sparkline-valueAxisItem-notes>

## Configuration Attributes

### background `java.lang.String`

The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:sparkline-valueAxisItem-notes-label background="background">
    </kendo:sparkline-valueAxisItem-notes-label>

### color `java.lang.String`

The text color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:sparkline-valueAxisItem-notes-label color="color">
    </kendo:sparkline-valueAxisItem-notes-label>

### font `java.lang.String`

The font style of the label.

#### Example
    <kendo:sparkline-valueAxisItem-notes-label font="font">
    </kendo:sparkline-valueAxisItem-notes-label>

### format `java.lang.String`

The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.

#### Example
    <kendo:sparkline-valueAxisItem-notes-label format="format">
    </kendo:sparkline-valueAxisItem-notes-label>

### position `java.lang.String`

The position of the labels.

#### Example
    <kendo:sparkline-valueAxisItem-notes-label position="position">
    </kendo:sparkline-valueAxisItem-notes-label>

### rotation `float`

The rotation angle of the label. By default the label are not rotated.

#### Example
    <kendo:sparkline-valueAxisItem-notes-label rotation="rotation">
    </kendo:sparkline-valueAxisItem-notes-label>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:sparkline-valueAxisItem-notes-label template="template">
    </kendo:sparkline-valueAxisItem-notes-label>

### visible `boolean`

If set to true the chart will display the value axis notes label. By default the value axis notes label are visible.

#### Example
    <kendo:sparkline-valueAxisItem-notes-label visible="visible">
    </kendo:sparkline-valueAxisItem-notes-label>


##  Configuration JSP Tags

### kendo:sparkline-valueAxisItem-notes-label-border

The border of the label.

More documentation is available at [kendo:sparkline-valueAxisItem-notes-label-border](sparkline/valueaxisitem-notes-label-border).

#### Example

    <kendo:sparkline-valueAxisItem-notes-label>
        <kendo:sparkline-valueAxisItem-notes-label-border></kendo:sparkline-valueAxisItem-notes-label-border>
    </kendo:sparkline-valueAxisItem-notes-label>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:sparkline-valueAxisItem-notes-label template="handle_template">
    </kendo:sparkline-valueAxisItem-notes-label>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:sparkline-valueAxisItem-notes-label-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:sparkline-valueAxisItem-notes-label>
        <kendo:sparkline-valueAxisItem-notes-label-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:sparkline-valueAxisItem-notes-label-template>
    </kendo:sparkline-valueAxisItem-notes-label>

