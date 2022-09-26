---
title: sparkline-categoryAxisItem-notes-label
slug: jsp-sparkline-categoryAxisItem-notes-label
tags: api, java
publish: true
---

# \<kendo:sparkline-categoryAxisItem-notes-label\>

The label of the notes.

#### Example
    <kendo:sparkline-categoryAxisItem-notes>
        <kendo:sparkline-categoryAxisItem-notes-label></kendo:sparkline-categoryAxisItem-notes-label>
    </kendo:sparkline-categoryAxisItem-notes>

## Configuration Attributes

### background `java.lang.String`

The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:sparkline-categoryAxisItem-notes-label background="background">
    </kendo:sparkline-categoryAxisItem-notes-label>

### color `java.lang.String`

The text color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:sparkline-categoryAxisItem-notes-label color="color">
    </kendo:sparkline-categoryAxisItem-notes-label>

### font `java.lang.String`

The font style of the label.

#### Example
    <kendo:sparkline-categoryAxisItem-notes-label font="font">
    </kendo:sparkline-categoryAxisItem-notes-label>

### format `java.lang.String`

The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Example
    <kendo:sparkline-categoryAxisItem-notes-label format="format">
    </kendo:sparkline-categoryAxisItem-notes-label>

### position `java.lang.String`

The position of the labels.

#### Example
    <kendo:sparkline-categoryAxisItem-notes-label position="position">
    </kendo:sparkline-categoryAxisItem-notes-label>

### rotation `float`

The rotation angle of the label. By default the label are not rotated.

#### Example
    <kendo:sparkline-categoryAxisItem-notes-label rotation="rotation">
    </kendo:sparkline-categoryAxisItem-notes-label>

### template `java.lang.String`

The template which renders the labels.The fields which can be used in the template are:

#### Example
    <kendo:sparkline-categoryAxisItem-notes-label template="template">
    </kendo:sparkline-categoryAxisItem-notes-label>

### visible `boolean`

If set to true the chart will display the category notes label. By default the category notes label are visible.

#### Example
    <kendo:sparkline-categoryAxisItem-notes-label visible="visible">
    </kendo:sparkline-categoryAxisItem-notes-label>


##  Configuration JSP Tags

### kendo:sparkline-categoryAxisItem-notes-label-border

The border of the label.

More documentation is available at [kendo:sparkline-categoryAxisItem-notes-label-border](sparkline/categoryaxisitem-notes-label-border).

#### Example

    <kendo:sparkline-categoryAxisItem-notes-label>
        <kendo:sparkline-categoryAxisItem-notes-label-border></kendo:sparkline-categoryAxisItem-notes-label-border>
    </kendo:sparkline-categoryAxisItem-notes-label>


## Event Attributes

### template `String`

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:sparkline-categoryAxisItem-notes-label template="handle_template">
    </kendo:sparkline-categoryAxisItem-notes-label>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:sparkline-categoryAxisItem-notes-label-template

The template which renders the labels.The fields which can be used in the template are:


#### Example
    <kendo:sparkline-categoryAxisItem-notes-label>
        <kendo:sparkline-categoryAxisItem-notes-label-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:sparkline-categoryAxisItem-notes-label-template>
    </kendo:sparkline-categoryAxisItem-notes-label>

