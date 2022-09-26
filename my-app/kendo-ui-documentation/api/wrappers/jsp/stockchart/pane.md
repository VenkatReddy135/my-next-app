---
title: stockChart-pane
slug: jsp-stockChart-pane
tags: api, java
publish: true
---

# \<kendo:stockChart-pane\>

The chart panes configuration.Panes are used to split the chart in two or more parts. The panes are ordered from top to bottom.Each axis can be associated with a pane by setting its pane option to the name of the desired pane.
Axis that don't have specified pane are placed in the top (default) pane.Series are moved to the desired pane by associating them with an axis.

#### Example
    <kendo:stockChart-panes>
        <kendo:stockChart-pane></kendo:stockChart-pane>
    </kendo:stockChart-panes>

## Configuration Attributes

### background `java.lang.String`

The background color of the pane.

#### Example
    <kendo:stockChart-pane background="background">
    </kendo:stockChart-pane>

### height `float`

The pane height in pixels.

#### Example
    <kendo:stockChart-pane height="height">
    </kendo:stockChart-pane>

### margin `java.lang.Object`

The margin of the pane.

#### Example
    <kendo:stockChart-pane margin="margin">
    </kendo:stockChart-pane>

### name `java.lang.String`

The unique pane name.

#### Example
    <kendo:stockChart-pane name="name">
    </kendo:stockChart-pane>

### padding `java.lang.Object`

The padding of the pane.

#### Example
    <kendo:stockChart-pane padding="padding">
    </kendo:stockChart-pane>

### title `java.lang.String`

The pane title text or configuration. Further configuration is available via [kendo:stockChart-pane-title](#kendo-stockChart-pane-title). 

#### Example
    <kendo:stockChart-pane title="title">
    </kendo:stockChart-pane>


##  Configuration JSP Tags

### kendo:stockChart-pane-border

The border of the pane.

More documentation is available at [kendo:stockChart-pane-border](stockchart/pane-border).

#### Example

    <kendo:stockChart-pane>
        <kendo:stockChart-pane-border></kendo:stockChart-pane-border>
    </kendo:stockChart-pane>

### kendo:stockChart-pane-title

The pane title text or configuration.

More documentation is available at [kendo:stockChart-pane-title](stockchart/pane-title).

#### Example

    <kendo:stockChart-pane>
        <kendo:stockChart-pane-title></kendo:stockChart-pane-title>
    </kendo:stockChart-pane>

