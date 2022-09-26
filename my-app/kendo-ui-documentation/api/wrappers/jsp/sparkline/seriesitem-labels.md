---
title: sparkline-seriesItem-labels
slug: jsp-sparkline-seriesItem-labels
tags: api, java
publish: true
---

# \<kendo:sparkline-seriesItem-labels\>

Configures the series data labels.

#### Example
    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-labels></kendo:sparkline-seriesItem-labels>
    </kendo:sparkline-seriesItem>

## Configuration Attributes

### align `java.lang.String`

Defines the alignment of the labels.** Available for pie series. **

#### Example
    <kendo:sparkline-seriesItem-labels align="align">
    </kendo:sparkline-seriesItem-labels>

### background `java.lang.String`

The background color of the labels.

#### Example
    <kendo:sparkline-seriesItem-labels background="background">
    </kendo:sparkline-seriesItem-labels>

### color `java.lang.String`

The text color of the labels.

#### Example
    <kendo:sparkline-seriesItem-labels color="color">
    </kendo:sparkline-seriesItem-labels>

### distance `float`

The distance of the labels.** Available for pie series. **

#### Example
    <kendo:sparkline-seriesItem-labels distance="distance">
    </kendo:sparkline-seriesItem-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:sparkline-seriesItem-labels font="font">
    </kendo:sparkline-seriesItem-labels>

### format `java.lang.String`

The format of the labels.

#### Example
    <kendo:sparkline-seriesItem-labels format="format">
    </kendo:sparkline-seriesItem-labels>

### margin `java.lang.Object`

The margin of the labels.

#### Example
    <kendo:sparkline-seriesItem-labels margin="margin">
    </kendo:sparkline-seriesItem-labels>

### padding `java.lang.Object`

The padding of the labels.

#### Example
    <kendo:sparkline-seriesItem-labels padding="padding">
    </kendo:sparkline-seriesItem-labels>

### position `java.lang.String`

Defines the position of the labels.

#### Example
    <kendo:sparkline-seriesItem-labels position="position">
    </kendo:sparkline-seriesItem-labels>

### template `java.lang.String`

The label template. Template variables:

#### Example
    <kendo:sparkline-seriesItem-labels template="template">
    </kendo:sparkline-seriesItem-labels>

### visible `boolean`

The visibility of the labels.

#### Example
    <kendo:sparkline-seriesItem-labels visible="visible">
    </kendo:sparkline-seriesItem-labels>


##  Configuration JSP Tags

### kendo:sparkline-seriesItem-labels-border

The border of the labels.

More documentation is available at [kendo:sparkline-seriesItem-labels-border](sparkline/seriesitem-labels-border).

#### Example

    <kendo:sparkline-seriesItem-labels>
        <kendo:sparkline-seriesItem-labels-border></kendo:sparkline-seriesItem-labels-border>
    </kendo:sparkline-seriesItem-labels>


## Event Attributes

### background `String`

The background color of the labels.


#### Example
    <kendo:sparkline-seriesItem-labels background="handle_background">
    </kendo:sparkline-seriesItem-labels>
    <script>
        function handle_background(e) {
            // Code to handle the background event.
        }
    </script>

### color `String`

The text color of the labels.


#### Example
    <kendo:sparkline-seriesItem-labels color="handle_color">
    </kendo:sparkline-seriesItem-labels>
    <script>
        function handle_color(e) {
            // Code to handle the color event.
        }
    </script>

### font `String`

The font style of the labels.


#### Example
    <kendo:sparkline-seriesItem-labels font="handle_font">
    </kendo:sparkline-seriesItem-labels>
    <script>
        function handle_font(e) {
            // Code to handle the font event.
        }
    </script>

### format `String`

The format of the labels.


#### Example
    <kendo:sparkline-seriesItem-labels format="handle_format">
    </kendo:sparkline-seriesItem-labels>
    <script>
        function handle_format(e) {
            // Code to handle the format event.
        }
    </script>

### position `String`

Defines the position of the labels.


#### Example
    <kendo:sparkline-seriesItem-labels position="handle_position">
    </kendo:sparkline-seriesItem-labels>
    <script>
        function handle_position(e) {
            // Code to handle the position event.
        }
    </script>

### template `String`

The label template. Template variables:


#### Example
    <kendo:sparkline-seriesItem-labels template="handle_template">
    </kendo:sparkline-seriesItem-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

### visible `String`

The visibility of the labels.


#### Example
    <kendo:sparkline-seriesItem-labels visible="handle_visible">
    </kendo:sparkline-seriesItem-labels>
    <script>
        function handle_visible(e) {
            // Code to handle the visible event.
        }
    </script>

## Event Tags

### kendo:sparkline-seriesItem-labels-background

The background color of the labels.


#### Example
    <kendo:sparkline-seriesItem-labels>
        <kendo:sparkline-seriesItem-labels-background>
            <script>
                function(e) {
                    // Code to handle the background event.
                }
            </script>
        </kendo:sparkline-seriesItem-labels-background>
    </kendo:sparkline-seriesItem-labels>

### kendo:sparkline-seriesItem-labels-color

The text color of the labels.


#### Example
    <kendo:sparkline-seriesItem-labels>
        <kendo:sparkline-seriesItem-labels-color>
            <script>
                function(e) {
                    // Code to handle the color event.
                }
            </script>
        </kendo:sparkline-seriesItem-labels-color>
    </kendo:sparkline-seriesItem-labels>

### kendo:sparkline-seriesItem-labels-font

The font style of the labels.


#### Example
    <kendo:sparkline-seriesItem-labels>
        <kendo:sparkline-seriesItem-labels-font>
            <script>
                function(e) {
                    // Code to handle the font event.
                }
            </script>
        </kendo:sparkline-seriesItem-labels-font>
    </kendo:sparkline-seriesItem-labels>

### kendo:sparkline-seriesItem-labels-format

The format of the labels.


#### Example
    <kendo:sparkline-seriesItem-labels>
        <kendo:sparkline-seriesItem-labels-format>
            <script>
                function(e) {
                    // Code to handle the format event.
                }
            </script>
        </kendo:sparkline-seriesItem-labels-format>
    </kendo:sparkline-seriesItem-labels>

### kendo:sparkline-seriesItem-labels-position

Defines the position of the labels.


#### Example
    <kendo:sparkline-seriesItem-labels>
        <kendo:sparkline-seriesItem-labels-position>
            <script>
                function(e) {
                    // Code to handle the position event.
                }
            </script>
        </kendo:sparkline-seriesItem-labels-position>
    </kendo:sparkline-seriesItem-labels>

### kendo:sparkline-seriesItem-labels-template

The label template. Template variables:


#### Example
    <kendo:sparkline-seriesItem-labels>
        <kendo:sparkline-seriesItem-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:sparkline-seriesItem-labels-template>
    </kendo:sparkline-seriesItem-labels>

### kendo:sparkline-seriesItem-labels-visible

The visibility of the labels.


#### Example
    <kendo:sparkline-seriesItem-labels>
        <kendo:sparkline-seriesItem-labels-visible>
            <script>
                function(e) {
                    // Code to handle the visible event.
                }
            </script>
        </kendo:sparkline-seriesItem-labels-visible>
    </kendo:sparkline-seriesItem-labels>

