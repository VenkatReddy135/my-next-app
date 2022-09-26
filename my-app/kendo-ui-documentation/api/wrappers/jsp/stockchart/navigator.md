---
title: stockChart-navigator
slug: jsp-stockChart-navigator
tags: api, java
publish: true
---

# \<kendo:stockChart-navigator\>

The data navigator configuration options.

#### Example
    <kendo:stockChart>
        <kendo:stockChart-navigator></kendo:stockChart-navigator>
    </kendo:stockChart>

## Configuration Attributes

### autoBind `boolean`

Indicates whether the navigator will call read on the data source initially.
Applicable only when using a dedicated navigator data source.

#### Example
    <kendo:stockChart-navigator autoBind="autoBind">
    </kendo:stockChart-navigator>

### dateField `java.lang.String`

The field containing the point date.
It is used as a default field for the navigator axis.The data item field value must be either:

#### Example
    <kendo:stockChart-navigator dateField="dateField">
    </kendo:stockChart-navigator>

### visible `boolean`

The visibility of the navigator.

#### Example
    <kendo:stockChart-navigator visible="visible">
    </kendo:stockChart-navigator>


##  Configuration JSP Tags

### kendo:stockChart-navigator-categoryAxis

The category axis configuration options.

More documentation is available at [kendo:stockChart-navigator-categoryAxis](stockchart/navigator-categoryaxis).

#### Example

    <kendo:stockChart-navigator>
        <kendo:stockChart-navigator-categoryAxis></kendo:stockChart-navigator-categoryAxis>
    </kendo:stockChart-navigator>

### kendo:stockChart-navigator-hint

Default options for the navigator hint.

More documentation is available at [kendo:stockChart-navigator-hint](stockchart/navigator-hint).

#### Example

    <kendo:stockChart-navigator>
        <kendo:stockChart-navigator-hint></kendo:stockChart-navigator-hint>
    </kendo:stockChart-navigator>

### kendo:stockChart-navigator-pane

The navigator pane configuration.

More documentation is available at [kendo:stockChart-navigator-pane](stockchart/navigator-pane).

#### Example

    <kendo:stockChart-navigator>
        <kendo:stockChart-navigator-pane></kendo:stockChart-navigator-pane>
    </kendo:stockChart-navigator>

### kendo:stockChart-navigator-select

Specifies the initially selected range.The full range of values is shown if no range is specified.

More documentation is available at [kendo:stockChart-navigator-select](stockchart/navigator-select).

#### Example

    <kendo:stockChart-navigator>
        <kendo:stockChart-navigator-select></kendo:stockChart-navigator-select>
    </kendo:stockChart-navigator>

### kendo:stockChart-navigator-series

Array of series definitions.Accepts the same options as the root series collection.Omitting the array and specifying a single series is also acceptable.

More documentation is available at [kendo:stockChart-navigator-series](stockchart/navigator-series).

#### Example

    <kendo:stockChart-navigator>
        <kendo:stockChart-navigator-series></kendo:stockChart-navigator-series>
    </kendo:stockChart-navigator>

