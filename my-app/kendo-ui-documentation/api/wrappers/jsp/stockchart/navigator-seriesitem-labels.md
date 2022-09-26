---
title: stockChart-navigator-seriesItem-labels
slug: jsp-stockChart-navigator-seriesItem-labels
tags: api, java
publish: true
---

# \<kendo:stockChart-navigator-seriesItem-labels\>

Configures the series data labels.

#### Example
    <kendo:stockChart-navigator-seriesItem>
        <kendo:stockChart-navigator-seriesItem-labels></kendo:stockChart-navigator-seriesItem-labels>
    </kendo:stockChart-navigator-seriesItem>

## Configuration Attributes

### background `java.lang.String`

The background color of the labels.

#### Example
    <kendo:stockChart-navigator-seriesItem-labels background="background">
    </kendo:stockChart-navigator-seriesItem-labels>

### color `java.lang.String`

The text color of the labels.

#### Example
    <kendo:stockChart-navigator-seriesItem-labels color="color">
    </kendo:stockChart-navigator-seriesItem-labels>

### font `java.lang.String`

The font style of the labels.

#### Example
    <kendo:stockChart-navigator-seriesItem-labels font="font">
    </kendo:stockChart-navigator-seriesItem-labels>

### format `java.lang.String`

The format of the labels.

#### Example
    <kendo:stockChart-navigator-seriesItem-labels format="format">
    </kendo:stockChart-navigator-seriesItem-labels>

### margin `java.lang.Object`

The margin of the labels.

#### Example
    <kendo:stockChart-navigator-seriesItem-labels margin="margin">
    </kendo:stockChart-navigator-seriesItem-labels>

### padding `java.lang.Object`

The padding of the labels.

#### Example
    <kendo:stockChart-navigator-seriesItem-labels padding="padding">
    </kendo:stockChart-navigator-seriesItem-labels>

### position `java.lang.String`

Defines the position of the labels.

#### Example
    <kendo:stockChart-navigator-seriesItem-labels position="position">
    </kendo:stockChart-navigator-seriesItem-labels>

### template `java.lang.String`

The label template. Template variables:

#### Example
    <kendo:stockChart-navigator-seriesItem-labels template="template">
    </kendo:stockChart-navigator-seriesItem-labels>

### visible `boolean`

The visibility of the labels.

#### Example
    <kendo:stockChart-navigator-seriesItem-labels visible="visible">
    </kendo:stockChart-navigator-seriesItem-labels>


##  Configuration JSP Tags

### kendo:stockChart-navigator-seriesItem-labels-border

The border of the labels.

More documentation is available at [kendo:stockChart-navigator-seriesItem-labels-border](stockchart/navigator-seriesitem-labels-border).

#### Example

    <kendo:stockChart-navigator-seriesItem-labels>
        <kendo:stockChart-navigator-seriesItem-labels-border></kendo:stockChart-navigator-seriesItem-labels-border>
    </kendo:stockChart-navigator-seriesItem-labels>


## Event Attributes

### template `String`

The label template. Template variables:


#### Example
    <kendo:stockChart-navigator-seriesItem-labels template="handle_template">
    </kendo:stockChart-navigator-seriesItem-labels>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-navigator-seriesItem-labels-template

The label template. Template variables:


#### Example
    <kendo:stockChart-navigator-seriesItem-labels>
        <kendo:stockChart-navigator-seriesItem-labels-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-navigator-seriesItem-labels-template>
    </kendo:stockChart-navigator-seriesItem-labels>

