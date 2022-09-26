---
title: chart-title
slug: jsp-chart-title
tags: api, java
publish: true
---

# \<kendo:chart-title\>

The chart title configuration options or text.

#### Example
    <kendo:chart>
        <kendo:chart-title></kendo:chart-title>
    </kendo:chart>

## Configuration Attributes

### align `java.lang.String`

The alignment of the title.

#### Example
    <kendo:chart-title align="align">
    </kendo:chart-title>

### background `java.lang.String`

The background color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-title background="background">
    </kendo:chart-title>

### font `java.lang.String`

The font of the title.

#### Example
    <kendo:chart-title font="font">
    </kendo:chart-title>

### margin `float`

The margin of the title. A numeric value will set all margins. Further configuration is available via [kendo:chart-title-margin](#kendo-chart-title-margin). 

#### Example
    <kendo:chart-title margin="margin">
    </kendo:chart-title>

### padding `float`

The padding of the title. A numeric value will set all margins. Further configuration is available via [kendo:chart-title-padding](#kendo-chart-title-padding). 

#### Example
    <kendo:chart-title padding="padding">
    </kendo:chart-title>

### position `java.lang.String`

The position of the title.

#### Example
    <kendo:chart-title position="position">
    </kendo:chart-title>

### text `java.lang.String`

The text of the chart title. You can also set the text directly for a title with default options.

#### Example
    <kendo:chart-title text="text">
    </kendo:chart-title>

### visible `boolean`

If set to true the chart will display the title. By default the title is not displayed.

#### Example
    <kendo:chart-title visible="visible">
    </kendo:chart-title>


##  Configuration JSP Tags

### kendo:chart-title-border

The border of the series.

More documentation is available at [kendo:chart-title-border](chart/title-border).

#### Example

    <kendo:chart-title>
        <kendo:chart-title-border></kendo:chart-title-border>
    </kendo:chart-title>

### kendo:chart-title-margin

The margin of the title. A numeric value will set all margins.

More documentation is available at [kendo:chart-title-margin](chart/title-margin).

#### Example

    <kendo:chart-title>
        <kendo:chart-title-margin></kendo:chart-title-margin>
    </kendo:chart-title>

### kendo:chart-title-padding

The padding of the title. A numeric value will set all margins.

More documentation is available at [kendo:chart-title-padding](chart/title-padding).

#### Example

    <kendo:chart-title>
        <kendo:chart-title-padding></kendo:chart-title-padding>
    </kendo:chart-title>

