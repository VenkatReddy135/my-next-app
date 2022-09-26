---
title: chart-pane-title
slug: jsp-chart-pane-title
tags: api, java
publish: true
---

# \<kendo:chart-pane-title\>

The title configuration of the chart pane.

#### Example
    <kendo:chart-pane>
        <kendo:chart-pane-title></kendo:chart-pane-title>
    </kendo:chart-pane>

## Configuration Attributes

### background `java.lang.String`

The background color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-pane-title background="background">
    </kendo:chart-pane-title>

### color `java.lang.String`

The text color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Example
    <kendo:chart-pane-title color="color">
    </kendo:chart-pane-title>

### font `java.lang.String`

The font style of the title.

#### Example
    <kendo:chart-pane-title font="font">
    </kendo:chart-pane-title>

### margin `float`

The margin of the title. A numeric value will set all margins. Further configuration is available via [kendo:chart-pane-title-margin](#kendo-chart-pane-title-margin). 

#### Example
    <kendo:chart-pane-title margin="margin">
    </kendo:chart-pane-title>

### position `java.lang.String`

The position of the title.The supported values are:

#### Example
    <kendo:chart-pane-title position="position">
    </kendo:chart-pane-title>

### text `java.lang.String`

The text of the title.

#### Example
    <kendo:chart-pane-title text="text">
    </kendo:chart-pane-title>

### visible `boolean`

If set to true the chart will display the pane title. By default the pane title is visible.

#### Example
    <kendo:chart-pane-title visible="visible">
    </kendo:chart-pane-title>


##  Configuration JSP Tags

### kendo:chart-pane-title-border

The border of the title.

More documentation is available at [kendo:chart-pane-title-border](chart/pane-title-border).

#### Example

    <kendo:chart-pane-title>
        <kendo:chart-pane-title-border></kendo:chart-pane-title-border>
    </kendo:chart-pane-title>

### kendo:chart-pane-title-margin

The margin of the title. A numeric value will set all margins.

More documentation is available at [kendo:chart-pane-title-margin](chart/pane-title-margin).

#### Example

    <kendo:chart-pane-title>
        <kendo:chart-pane-title-margin></kendo:chart-pane-title-margin>
    </kendo:chart-pane-title>

