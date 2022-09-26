---
title: grid-scrollable
slug: jsp-grid-scrollable
tags: api, java
publish: true
---

# \<kendo:grid-scrollable\>

If set to true the grid will display a scrollbar when the total row height (or width) exceeds the grid height (or width). By default scrolling is enabled.Can be set to a JavaScript object which represents the scrolling configuration.

#### Example
    <kendo:grid>
        <kendo:grid-scrollable></kendo:grid-scrollable>
    </kendo:grid>

## Configuration Attributes

### virtual `boolean`

If set to true the grid will always display a single page of data. Scrolling would just change the data which is currently displayed.

#### Example
    <kendo:grid-scrollable virtual="virtual">
    </kendo:grid-scrollable>

