---
title: grid-filterable
slug: jsp-grid-filterable
tags: api, java
publish: true
---

# \<kendo:grid-filterable\>

If set to true the user can filter the data source using the grid filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration.

#### Example
    <kendo:grid>
        <kendo:grid-filterable></kendo:grid-filterable>
    </kendo:grid>

## Configuration Attributes

### extra `boolean`

If set to true the filter menu allows the user to input a second criteria.

#### Example
    <kendo:grid-filterable extra="extra">
    </kendo:grid-filterable>


##  Configuration JSP Tags

### kendo:grid-filterable-messages

The text messages displayed in the filter menu. Use it to customize or localize the filter menu messages.

More documentation is available at [kendo:grid-filterable-messages](grid/filterable-messages).

#### Example

    <kendo:grid-filterable>
        <kendo:grid-filterable-messages></kendo:grid-filterable-messages>
    </kendo:grid-filterable>

### kendo:grid-filterable-operators

The text of the filter operators displayed in the filter menu.

More documentation is available at [kendo:grid-filterable-operators](grid/filterable-operators).

#### Example

    <kendo:grid-filterable>
        <kendo:grid-filterable-operators></kendo:grid-filterable-operators>
    </kendo:grid-filterable>

