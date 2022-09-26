---
title: grid-columnMenu
slug: jsp-grid-columnMenu
tags: api, java
publish: true
---

# \<kendo:grid-columnMenu\>

If set to true the grid will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration.

#### Example
    <kendo:grid>
        <kendo:grid-columnMenu></kendo:grid-columnMenu>
    </kendo:grid>

## Configuration Attributes

### columns `boolean`

If set to true the column menu would allow the user to select (show and hide) grid columns. By default the column menu allows column selection.

#### Example
    <kendo:grid-columnMenu columns="columns">
    </kendo:grid-columnMenu>

### filterable `boolean`

If set to true the column menu would allow the user to filter the grid. By default the column menu allows the user to filter if filtering is enabled via the filterable.

#### Example
    <kendo:grid-columnMenu filterable="filterable">
    </kendo:grid-columnMenu>

### sortable `boolean`

If set to true the column menu would allow the user to sort the grid by the column field. By default the column menu allows the user to sort if sorting is enabled via the sortable option.

#### Example
    <kendo:grid-columnMenu sortable="sortable">
    </kendo:grid-columnMenu>


##  Configuration JSP Tags

### kendo:grid-columnMenu-messages

The text messages displayed in the column menu. Use it to customize or localize the column menu messages.

More documentation is available at [kendo:grid-columnMenu-messages](grid/columnmenu-messages).

#### Example

    <kendo:grid-columnMenu>
        <kendo:grid-columnMenu-messages></kendo:grid-columnMenu-messages>
    </kendo:grid-columnMenu>

