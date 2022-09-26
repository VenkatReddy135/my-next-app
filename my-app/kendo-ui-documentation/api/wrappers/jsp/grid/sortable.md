---
title: grid-sortable
slug: jsp-grid-sortable
tags: api, java
publish: true
---

# \<kendo:grid-sortable\>

If set to true the user could sort the grid by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.

#### Example
    <kendo:grid>
        <kendo:grid-sortable></kendo:grid-sortable>
    </kendo:grid>

## Configuration Attributes

### allowUnsort `boolean`

If set to true the user can get the grid in unsorted state by clicking the sorted column header.

#### Example
    <kendo:grid-sortable allowUnsort="allowUnsort">
    </kendo:grid-sortable>

### mode `java.lang.String`

The sorting mode. If set to "single" the user can sort by one column. If set to "multiple" the user can sort by one column.

#### Example
    <kendo:grid-sortable mode="mode">
    </kendo:grid-sortable>

