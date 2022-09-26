---
title: sparkline-seriesItem
slug: jsp-sparkline-seriesItem
tags: api, java
publish: true
---

# \<kendo:sparkline-seriesItem\>

Array of series definitions.The series type is determined by the value of the type field.
If a type value is missing, the type is assumed to be the one specified in seriesDefaults.Each series type has a different set of options.

#### Example
    <kendo:sparkline-series>
        <kendo:sparkline-seriesItem></kendo:sparkline-seriesItem>
    </kendo:sparkline-series>

## Configuration Attributes

### aggregate `java.lang.String`

The aggregate function to apply for date series.This function is used when a category (an year, month, etc.) contains two or more points.
The function return value is displayed instead of the individual points.The supported values are:

#### Example
    <kendo:sparkline-seriesItem aggregate="aggregate">
    </kendo:sparkline-seriesItem>

### axis `java.lang.String`

The name of the value axis to use.** Applicable to area, bar, column and line series **

#### Example
    <kendo:sparkline-seriesItem axis="axis">
    </kendo:sparkline-seriesItem>

### categoryField `java.lang.String`

The data field containing the point category name.** Applicable to pie series. **

#### Example
    <kendo:sparkline-seriesItem categoryField="categoryField">
    </kendo:sparkline-seriesItem>

### color `java.lang.String`

The series base color.

#### Example
    <kendo:sparkline-seriesItem color="color">
    </kendo:sparkline-seriesItem>

### colorField `java.lang.String`

The data field containing the point color.** Applicable for bar, column and pie series. **

#### Example
    <kendo:sparkline-seriesItem colorField="colorField">
    </kendo:sparkline-seriesItem>

### currentField `java.lang.String`

The data field containing the current value.** Available for bullet and verticalBullet series. **

#### Example
    <kendo:sparkline-seriesItem currentField="currentField">
    </kendo:sparkline-seriesItem>

### dashType `java.lang.String`

The series line dash type.** Applicable only to line series **

#### Example
    <kendo:sparkline-seriesItem dashType="dashType">
    </kendo:sparkline-seriesItem>

### data `java.lang.Object`

Array of data items. The data item type can be either a:

#### Example
    <kendo:sparkline-seriesItem data="data">
    </kendo:sparkline-seriesItem>

### explodeField `java.lang.String`

The data field containing a boolean value that indicates if the sector is exploded.** Available for pie series **

#### Example
    <kendo:sparkline-seriesItem explodeField="explodeField">
    </kendo:sparkline-seriesItem>

### field `java.lang.String`

The data field containing the series value.

#### Example
    <kendo:sparkline-seriesItem field="field">
    </kendo:sparkline-seriesItem>

### gap `float`

The distance between category clusters.** Applicable for bar and column series. **

#### Example
    <kendo:sparkline-seriesItem gap="gap">
    </kendo:sparkline-seriesItem>

### line `java.lang.String`

Line options.** Applicable to area series. ** Further configuration is available via [kendo:sparkline-seriesItem-line](#kendo-sparkline-seriesItem-line). 

#### Example
    <kendo:sparkline-seriesItem line="line">
    </kendo:sparkline-seriesItem>

### missingValues `java.lang.String`

The behavior for handling missing values. The supported values are:

#### Example
    <kendo:sparkline-seriesItem missingValues="missingValues">
    </kendo:sparkline-seriesItem>

### name `java.lang.String`

The series name.The name can also be a template which sets the name of the series when bound to grouped data source.The fields which can be used in the template are:

#### Example
    <kendo:sparkline-seriesItem name="name">
    </kendo:sparkline-seriesItem>

### negativeColor `java.lang.String`

Color to use for bars with negative values.** Applicable only to bar and column series. **

#### Example
    <kendo:sparkline-seriesItem negativeColor="negativeColor">
    </kendo:sparkline-seriesItem>

### opacity `float`

The series opacity.

#### Example
    <kendo:sparkline-seriesItem opacity="opacity">
    </kendo:sparkline-seriesItem>

### padding `float`

The padding around the chart (equal on all sides).** Available for pie series. **

#### Example
    <kendo:sparkline-seriesItem padding="padding">
    </kendo:sparkline-seriesItem>

### size `float`

The size (or radius) of the series in pixels.
If not specified, the available space is split evenly between the series.Available for only.

#### Example
    <kendo:sparkline-seriesItem size="size">
    </kendo:sparkline-seriesItem>

### spacing `float`

Space between points as proportion of the point width.** Available for bar and column series. **

#### Example
    <kendo:sparkline-seriesItem spacing="spacing">
    </kendo:sparkline-seriesItem>

### stack `java.lang.Object`

A value indicating if the series should be stacked. String value indicates that the series should be stacked in a group with the specified name.
** Available for bar and column series. **

#### Example
    <kendo:sparkline-seriesItem stack="stack">
    </kendo:sparkline-seriesItem>

### startAngle `float`

The start angle of the first segment.Available for pie series.

#### Example
    <kendo:sparkline-seriesItem startAngle="startAngle">
    </kendo:sparkline-seriesItem>

### targetField `java.lang.String`

The data field containing the target value.** Available for bullet and verticalBullet series. **** Available for pie series **

#### Example
    <kendo:sparkline-seriesItem targetField="targetField">
    </kendo:sparkline-seriesItem>

### type `java.lang.String`

The type of the series. Available types:

#### Example
    <kendo:sparkline-seriesItem type="type">
    </kendo:sparkline-seriesItem>

### width `float`

The line width.** Available for line series **

#### Example
    <kendo:sparkline-seriesItem width="width">
    </kendo:sparkline-seriesItem>


##  Configuration JSP Tags

### kendo:sparkline-seriesItem-border

The border of the points.** Applicable to bar, column and pie series **

More documentation is available at [kendo:sparkline-seriesItem-border](sparkline/seriesitem-border).

#### Example

    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-border></kendo:sparkline-seriesItem-border>
    </kendo:sparkline-seriesItem>

### kendo:sparkline-seriesItem-connectors

The label connectors options.** Applicable to pie series. **

More documentation is available at [kendo:sparkline-seriesItem-connectors](sparkline/seriesitem-connectors).

#### Example

    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-connectors></kendo:sparkline-seriesItem-connectors>
    </kendo:sparkline-seriesItem>

### kendo:sparkline-seriesItem-highlight

Configures the appearance of highlighted points.

More documentation is available at [kendo:sparkline-seriesItem-highlight](sparkline/seriesitem-highlight).

#### Example

    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-highlight></kendo:sparkline-seriesItem-highlight>
    </kendo:sparkline-seriesItem>

### kendo:sparkline-seriesItem-labels

Configures the series data labels.

More documentation is available at [kendo:sparkline-seriesItem-labels](sparkline/seriesitem-labels).

#### Example

    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-labels></kendo:sparkline-seriesItem-labels>
    </kendo:sparkline-seriesItem>

### kendo:sparkline-seriesItem-line

Line options.** Applicable to area series. **

More documentation is available at [kendo:sparkline-seriesItem-line](sparkline/seriesitem-line).

#### Example

    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-line></kendo:sparkline-seriesItem-line>
    </kendo:sparkline-seriesItem>

### kendo:sparkline-seriesItem-markers

Marker options.** Applicable to area and line series **

More documentation is available at [kendo:sparkline-seriesItem-markers](sparkline/seriesitem-markers).

#### Example

    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-markers></kendo:sparkline-seriesItem-markers>
    </kendo:sparkline-seriesItem>

### kendo:sparkline-seriesItem-notes

The series notes configuration.

More documentation is available at [kendo:sparkline-seriesItem-notes](sparkline/seriesitem-notes).

#### Example

    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-notes></kendo:sparkline-seriesItem-notes>
    </kendo:sparkline-seriesItem>

### kendo:sparkline-seriesItem-overlay

The effects overlay.

More documentation is available at [kendo:sparkline-seriesItem-overlay](sparkline/seriesitem-overlay).

#### Example

    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-overlay></kendo:sparkline-seriesItem-overlay>
    </kendo:sparkline-seriesItem>

### kendo:sparkline-seriesItem-target

The target of the bullet chart.

More documentation is available at [kendo:sparkline-seriesItem-target](sparkline/seriesitem-target).

#### Example

    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-target></kendo:sparkline-seriesItem-target>
    </kendo:sparkline-seriesItem>

### kendo:sparkline-seriesItem-tooltip

The data point tooltip configuration options.

More documentation is available at [kendo:sparkline-seriesItem-tooltip](sparkline/seriesitem-tooltip).

#### Example

    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-tooltip></kendo:sparkline-seriesItem-tooltip>
    </kendo:sparkline-seriesItem>


## Event Attributes

### color `String`

The series base color.


#### Example
    <kendo:sparkline-seriesItem color="handle_color">
    </kendo:sparkline-seriesItem>
    <script>
        function handle_color(e) {
            // Code to handle the color event.
        }
    </script>

## Event Tags

### kendo:sparkline-seriesItem-color

The series base color.


#### Example
    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-color>
            <script>
                function(e) {
                    // Code to handle the color event.
                }
            </script>
        </kendo:sparkline-seriesItem-color>
    </kendo:sparkline-seriesItem>

