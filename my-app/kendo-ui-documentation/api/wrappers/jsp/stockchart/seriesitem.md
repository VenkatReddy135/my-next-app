---
title: stockChart-seriesItem
slug: jsp-stockChart-seriesItem
tags: api, java
publish: true
---

# \<kendo:stockChart-seriesItem\>

Array of series definitions.The series type is determined by the value of the type field.
If a type value is missing, the type is assumed to be the one specified in seriesDefaults.Each series type has a different set of options.

#### Example
    <kendo:stockChart-series>
        <kendo:stockChart-seriesItem></kendo:stockChart-seriesItem>
    </kendo:stockChart-series>

## Configuration Attributes

### aggregate `java.lang.String`

The aggregate function to apply for date series.This function is used when a category (an year, month, etc.) contains two or more points.
The function return value is displayed instead of the individual points.The supported values are:

#### Example
    <kendo:stockChart-seriesItem aggregate="aggregate">
    </kendo:stockChart-seriesItem>

### axis `java.lang.String`

The name of the value axis to use.** Applicable to area, column, line, ohlc and candlestick series **

#### Example
    <kendo:stockChart-seriesItem axis="axis">
    </kendo:stockChart-seriesItem>

### categoryField `java.lang.String`

The data item field which contains the category name or date.

#### Example
    <kendo:stockChart-seriesItem categoryField="categoryField">
    </kendo:stockChart-seriesItem>

### closeField `java.lang.String`

The data field containing the close value.** Available for candlestick and ohlc series only **

#### Example
    <kendo:stockChart-seriesItem closeField="closeField">
    </kendo:stockChart-seriesItem>

### color `java.lang.String`

The series base color.

#### Example
    <kendo:stockChart-seriesItem color="color">
    </kendo:stockChart-seriesItem>

### colorField `java.lang.String`

The data field containing the point color.** Applicable for column, candlestick and ohlc series. **

#### Example
    <kendo:stockChart-seriesItem colorField="colorField">
    </kendo:stockChart-seriesItem>

### currentField `java.lang.String`

The data field containing the current value.** Available for bullet and verticalBullet series. **

#### Example
    <kendo:stockChart-seriesItem currentField="currentField">
    </kendo:stockChart-seriesItem>

### dashType `java.lang.String`

The series line dash type.** Applicable only to line series **

#### Example
    <kendo:stockChart-seriesItem dashType="dashType">
    </kendo:stockChart-seriesItem>

### data `java.lang.Object`

Array of data items. The data item type can be either a:

#### Example
    <kendo:stockChart-seriesItem data="data">
    </kendo:stockChart-seriesItem>

### downColor `java.lang.String`

The series color when open value is smoller then close value.** Available for candlestick series only **

#### Example
    <kendo:stockChart-seriesItem downColor="downColor">
    </kendo:stockChart-seriesItem>

### downColorField `java.lang.String`

The data field containing the body color.** Available for candlestick series only **

#### Example
    <kendo:stockChart-seriesItem downColorField="downColorField">
    </kendo:stockChart-seriesItem>

### field `java.lang.String`

The data field containing the series value.

#### Example
    <kendo:stockChart-seriesItem field="field">
    </kendo:stockChart-seriesItem>

### gap `float`

The distance between category clusters.** Applicable for column, candlestick and ohlc series. **

#### Example
    <kendo:stockChart-seriesItem gap="gap">
    </kendo:stockChart-seriesItem>

### highField `java.lang.String`

The data field containing the high value.** Available for candlestick and ohlc series only **

#### Example
    <kendo:stockChart-seriesItem highField="highField">
    </kendo:stockChart-seriesItem>

### line `java.lang.String`

Line options.** Applicable to area, candlestick and ohlc series. ** Further configuration is available via [kendo:stockChart-seriesItem-line](#kendo-stockChart-seriesItem-line). 

#### Example
    <kendo:stockChart-seriesItem line="line">
    </kendo:stockChart-seriesItem>

### lowField `java.lang.String`

The data field containing the low value.** Available for candlestick and ohlc series **

#### Example
    <kendo:stockChart-seriesItem lowField="lowField">
    </kendo:stockChart-seriesItem>

### missingValues `java.lang.String`

The behavior for handling missing values. The supported values are:

#### Example
    <kendo:stockChart-seriesItem missingValues="missingValues">
    </kendo:stockChart-seriesItem>

### name `java.lang.String`

The series name visible in the legend.

#### Example
    <kendo:stockChart-seriesItem name="name">
    </kendo:stockChart-seriesItem>

### negativeColor `java.lang.String`

Color to use for bars with negative values.** Applicable only to column series. **The plot stops before the missing point and continues after it.

#### Example
    <kendo:stockChart-seriesItem negativeColor="negativeColor">
    </kendo:stockChart-seriesItem>

### opacity `float`

The series opacity.

#### Example
    <kendo:stockChart-seriesItem opacity="opacity">
    </kendo:stockChart-seriesItem>

### openField `java.lang.String`

The data field containing the open value.** Available for candlestick and ohlc series **

#### Example
    <kendo:stockChart-seriesItem openField="openField">
    </kendo:stockChart-seriesItem>

### spacing `float`

Space between points as proportion of the point width.Available for column, candlestick and ohlc series.

#### Example
    <kendo:stockChart-seriesItem spacing="spacing">
    </kendo:stockChart-seriesItem>

### stack `java.lang.Object`

A value indicating if the series should be stacked. String value indicates that the series should be stacked in a group with the specified name.
Available for column series.

#### Example
    <kendo:stockChart-seriesItem stack="stack">
    </kendo:stockChart-seriesItem>

### targetField `java.lang.String`

The data field containing the target value.** Available for bullet and verticalBullet series. **

#### Example
    <kendo:stockChart-seriesItem targetField="targetField">
    </kendo:stockChart-seriesItem>

### type `java.lang.String`

The type of the series. Available types:

#### Example
    <kendo:stockChart-seriesItem type="type">
    </kendo:stockChart-seriesItem>

### visibleInLegend `boolean`

A value indicating whether to show the series name in the legend.

#### Example
    <kendo:stockChart-seriesItem visibleInLegend="visibleInLegend">
    </kendo:stockChart-seriesItem>

### width `float`

The line width.** Applicable for area and line series. **

#### Example
    <kendo:stockChart-seriesItem width="width">
    </kendo:stockChart-seriesItem>


##  Configuration JSP Tags

### kendo:stockChart-seriesItem-border

The border of the points.** Applicable to column, ohlc and candlestick series **

More documentation is available at [kendo:stockChart-seriesItem-border](stockchart/seriesitem-border).

#### Example

    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-border></kendo:stockChart-seriesItem-border>
    </kendo:stockChart-seriesItem>

### kendo:stockChart-seriesItem-highlight

Configures the appearance of highlighted points.

More documentation is available at [kendo:stockChart-seriesItem-highlight](stockchart/seriesitem-highlight).

#### Example

    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-highlight></kendo:stockChart-seriesItem-highlight>
    </kendo:stockChart-seriesItem>

### kendo:stockChart-seriesItem-labels

Configures the series data labels.

More documentation is available at [kendo:stockChart-seriesItem-labels](stockchart/seriesitem-labels).

#### Example

    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-labels></kendo:stockChart-seriesItem-labels>
    </kendo:stockChart-seriesItem>

### kendo:stockChart-seriesItem-line

Line options.** Applicable to area, candlestick and ohlc series. **

More documentation is available at [kendo:stockChart-seriesItem-line](stockchart/seriesitem-line).

#### Example

    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-line></kendo:stockChart-seriesItem-line>
    </kendo:stockChart-seriesItem>

### kendo:stockChart-seriesItem-markers

Marker options.** Applicable for area and line series. **

More documentation is available at [kendo:stockChart-seriesItem-markers](stockchart/seriesitem-markers).

#### Example

    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-markers></kendo:stockChart-seriesItem-markers>
    </kendo:stockChart-seriesItem>

### kendo:stockChart-seriesItem-notes

The series notes configuration.

More documentation is available at [kendo:stockChart-seriesItem-notes](stockchart/seriesitem-notes).

#### Example

    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-notes></kendo:stockChart-seriesItem-notes>
    </kendo:stockChart-seriesItem>

### kendo:stockChart-seriesItem-overlay

The effects overlay.

More documentation is available at [kendo:stockChart-seriesItem-overlay](stockchart/seriesitem-overlay).

#### Example

    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-overlay></kendo:stockChart-seriesItem-overlay>
    </kendo:stockChart-seriesItem>

### kendo:stockChart-seriesItem-target

The target of the bullet chart.

More documentation is available at [kendo:stockChart-seriesItem-target](stockchart/seriesitem-target).

#### Example

    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-target></kendo:stockChart-seriesItem-target>
    </kendo:stockChart-seriesItem>

### kendo:stockChart-seriesItem-tooltip

The data point tooltip configuration options.

More documentation is available at [kendo:stockChart-seriesItem-tooltip](stockchart/seriesitem-tooltip).

#### Example

    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-tooltip></kendo:stockChart-seriesItem-tooltip>
    </kendo:stockChart-seriesItem>


## Event Attributes

### color `String`

The series base color.


#### Example
    <kendo:stockChart-seriesItem color="handle_color">
    </kendo:stockChart-seriesItem>
    <script>
        function handle_color(e) {
            // Code to handle the color event.
        }
    </script>

### downColor `String`

The series color when open value is smoller then close value.** Available for candlestick series only **


#### Example
    <kendo:stockChart-seriesItem downColor="handle_downColor">
    </kendo:stockChart-seriesItem>
    <script>
        function handle_downColor(e) {
            // Code to handle the downColor event.
        }
    </script>

## Event Tags

### kendo:stockChart-seriesItem-color

The series base color.


#### Example
    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-color>
            <script>
                function(e) {
                    // Code to handle the color event.
                }
            </script>
        </kendo:stockChart-seriesItem-color>
    </kendo:stockChart-seriesItem>

### kendo:stockChart-seriesItem-downColor

The series color when open value is smoller then close value.** Available for candlestick series only **


#### Example
    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-downColor>
            <script>
                function(e) {
                    // Code to handle the downColor event.
                }
            </script>
        </kendo:stockChart-seriesItem-downColor>
    </kendo:stockChart-seriesItem>

