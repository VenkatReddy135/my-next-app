---
title: chart-seriesItem-labels
slug: jsp-chart-seriesItem-labels
tags: api, java
publish: true
---

# \<kendo:chart-seriesItem-labels\>

The chart series label configuration.

#### Example
    <kendo:chart-seriesItem>
        <kendo:chart-seriesItem-labels></kendo:chart-seriesItem-labels>
    </kendo:chart-seriesItem>

## Configuration Attributes

### align `java.lang.String`

The label alignment when series.type is set to "donut" or "pie".The supported values are:

#### Example
    <kendo:chart-seriesItem-labels align="align">
    </kendo:chart-seriesItem-labels>

### background `java.lang.String`

The background color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-seriesItem-labels background="background">
    </kendo:chart-seriesItem-labels>

### color `java.lang.String`

The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-seriesItem-labels color="color">
    </kendo:chart-seriesItem-labels>

### distance `float`

The distance of the labels when series.type is set to "donut" or "pie".

#### Example
    <kendo:chart-seriesItem-labels distance="distance">
    </kendo:chart-seriesItem-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:chart-seriesItem-labels font="font">
    </kendo:chart-seriesItem-labels>

### format `java.lang.String`

The format of the labels. Uses kendo.format.

#### Example
    <kendo:chart-seriesItem-labels format="format">
    </kendo:chart-seriesItem-labels>

### margin `float`

The margin of the labels. A numeric value will set all margins. Further configuration is available via [kendo:chart-seriesItem-labels-margin](#kendo-chart-seriesItem-labels-margin). 

#### Example
    <kendo:chart-seriesItem-labels margin="margin">
    </kendo:chart-seriesItem-labels>

### padding `float`

The padding of the labels. A numeric value will set all paddings. Further configuration is available via [kendo:chart-seriesItem-labels-padding](#kendo-chart-seriesItem-labels-padding). 

#### Example
    <kendo:chart-seriesItem-labels padding="padding">
    </kendo:chart-seriesItem-labels>

### position `java.lang.String`

The position of the labels.

#### Example
    <kendo:chart-seriesItem-labels position="position">
    </kendo:chart-seriesItem-labels>

### template `java.lang.String`

The template which renders the chart series label.The fields which can be used in the template are:

#### Example
    <kendo:chart-seriesItem-labels template="template">
    </kendo:chart-seriesItem-labels>

### visible `boolean`

If set to true the chart will display the series labels. By default chart series labels are not displayed.

#### Example
    <kendo:chart-seriesItem-labels visible="visible">
    </kendo:chart-seriesItem-labels>


##  Configuration JSP Tags

### kendo:chart-seriesItem-labels-border

The border of the labels.

More documentation is available at [kendo:chart-seriesItem-labels-border](chart/seriesitem-labels-border).

#### Example

    <kendo:chart-seriesItem-labels>
        <kendo:chart-seriesItem-labels-border></kendo:chart-seriesItem-labels-border>
    </kendo:chart-seriesItem-labels>

### kendo:chart-seriesItem-labels-margin

The margin of the labels. A numeric value will set all margins.

More documentation is available at [kendo:chart-seriesItem-labels-margin](chart/seriesitem-labels-margin).

#### Example

    <kendo:chart-seriesItem-labels>
        <kendo:chart-seriesItem-labels-margin></kendo:chart-seriesItem-labels-margin>
    </kendo:chart-seriesItem-labels>

### kendo:chart-seriesItem-labels-padding

The padding of the labels. A numeric value will set all paddings.

More documentation is available at [kendo:chart-seriesItem-labels-padding](chart/seriesitem-labels-padding).

#### Example

    <kendo:chart-seriesItem-labels>
        <kendo:chart-seriesItem-labels-padding></kendo:chart-seriesItem-labels-padding>
    </kendo:chart-seriesItem-labels>


## Event Attributes

### background `String`

The background color of the labels. Accepts a valid CSS color string, including hex and rgb.


#### Example
    <kendo:chart-seriesItem-labels background="handle_background">
    </kendo:chart-seriesItem-labels>
    <script>
        function handle_background(e) {
            // Code to handle the background event.
        }
    </script>

### color `String`

The text color of the labels. Accepts a valid CSS color string, including hex and rgb.


#### Example
    <kendo:chart-seriesItem-labels color="handle_color">
    </kendo:chart-seriesItem-labels>
    <script>
        function handle_color(e) {
            // Code to handle the color event.
        }
    </script>

### font `String`

The font style of the labels.


#### Example
    <kendo:chart-seriesItem-labels font="handle_font">
    </kendo:chart-seriesItem-labels>
    <script>
        function handle_font(e) {
            // Code to handle the font event.
        }
    </script>

### format `String`

The format of the labels. Uses kendo.format.


#### Example
    <kendo:chart-seriesItem-labels format="handle_format">
    </kendo:chart-seriesItem-labels>
    <script>
        function handle_format(e) {
            // Code to handle the format event.
        }
    </script>

### position `String`

The position of the labels.


#### Example
    <kendo:chart-seriesItem-labels position="handle_position">
    </kendo:chart-seriesItem-labels>
    <script>
        function handle_position(e) {
            // Code to handle the position event.
        }
    </script>

### template `String`

The template which renders the chart series label.The fields which can be used in the template are:


#### Example
    <kendo:chart-seriesItem-labels template="handle_template">
    </kendo:chart-seriesItem-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

### visible `String`

If set to true the chart will display the series labels. By default chart series labels are not displayed.


#### Example
    <kendo:chart-seriesItem-labels visible="handle_visible">
    </kendo:chart-seriesItem-labels>
    <script>
        function handle_visible(e) {
            // Code to handle the visible event.
        }
    </script>

## Event Tags

### kendo:chart-seriesItem-labels-background

The background color of the labels. Accepts a valid CSS color string, including hex and rgb.


#### Example
    <kendo:chart-seriesItem-labels>
        <kendo:chart-seriesItem-labels-background>
            <script>
                function(e) {
                    // Code to handle the background event.
                }
            </script>
        </kendo:chart-seriesItem-labels-background>
    </kendo:chart-seriesItem-labels>

### kendo:chart-seriesItem-labels-color

The text color of the labels. Accepts a valid CSS color string, including hex and rgb.


#### Example
    <kendo:chart-seriesItem-labels>
        <kendo:chart-seriesItem-labels-color>
            <script>
                function(e) {
                    // Code to handle the color event.
                }
            </script>
        </kendo:chart-seriesItem-labels-color>
    </kendo:chart-seriesItem-labels>

### kendo:chart-seriesItem-labels-font

The font style of the labels.


#### Example
    <kendo:chart-seriesItem-labels>
        <kendo:chart-seriesItem-labels-font>
            <script>
                function(e) {
                    // Code to handle the font event.
                }
            </script>
        </kendo:chart-seriesItem-labels-font>
    </kendo:chart-seriesItem-labels>

### kendo:chart-seriesItem-labels-format

The format of the labels. Uses kendo.format.


#### Example
    <kendo:chart-seriesItem-labels>
        <kendo:chart-seriesItem-labels-format>
            <script>
                function(e) {
                    // Code to handle the format event.
                }
            </script>
        </kendo:chart-seriesItem-labels-format>
    </kendo:chart-seriesItem-labels>

### kendo:chart-seriesItem-labels-position

The position of the labels.


#### Example
    <kendo:chart-seriesItem-labels>
        <kendo:chart-seriesItem-labels-position>
            <script>
                function(e) {
                    // Code to handle the position event.
                }
            </script>
        </kendo:chart-seriesItem-labels-position>
    </kendo:chart-seriesItem-labels>

### kendo:chart-seriesItem-labels-template

The template which renders the chart series label.The fields which can be used in the template are:


#### Example
    <kendo:chart-seriesItem-labels>
        <kendo:chart-seriesItem-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:chart-seriesItem-labels-template>
    </kendo:chart-seriesItem-labels>

### kendo:chart-seriesItem-labels-visible

If set to true the chart will display the series labels. By default chart series labels are not displayed.


#### Example
    <kendo:chart-seriesItem-labels>
        <kendo:chart-seriesItem-labels-visible>
            <script>
                function(e) {
                    // Code to handle the visible event.
                }
            </script>
        </kendo:chart-seriesItem-labels-visible>
    </kendo:chart-seriesItem-labels>

