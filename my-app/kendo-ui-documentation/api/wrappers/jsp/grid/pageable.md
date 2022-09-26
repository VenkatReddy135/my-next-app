---
title: grid-pageable
slug: jsp-grid-pageable
tags: api, java
publish: true
---

# \<kendo:grid-pageable\>

If set to true the grid will display a pager. By default paging is disabled.Can be set to a JavaScript object which represents the pager configuration.

#### Example
    <kendo:grid>
        <kendo:grid-pageable></kendo:grid-pageable>
    </kendo:grid>

## Configuration Attributes

### buttonCount `float`

The maximum number of buttons displayed in the numeric pager. The pager will display ellipsis (...) if there are more pages than the specified number.

#### Example
    <kendo:grid-pageable buttonCount="buttonCount">
    </kendo:grid-pageable>

### info `boolean`

If set to true the pager will display information about the current page and total number of data items. By default the paging information is displayed.

#### Example
    <kendo:grid-pageable info="info">
    </kendo:grid-pageable>

### input `boolean`

If set to true the pager will display an input element which allows the user to type a specific page number. By default the page input is not displayed.

#### Example
    <kendo:grid-pageable input="input">
    </kendo:grid-pageable>

### numeric `boolean`

If set to true the pager will display buttons for navigating to specific pages. By default those buttons are displayed.

#### Example
    <kendo:grid-pageable numeric="numeric">
    </kendo:grid-pageable>

### pageSize `float`

The number of data items which will be displayed in the grid.

#### Example
    <kendo:grid-pageable pageSize="pageSize">
    </kendo:grid-pageable>

### pageSizes `java.lang.Object`

If set to true the pager will display a dropdown list which allows the user to pick a page size. By default the page size dropdown list is not displayed.Can be set to an array with the available page sizes.

#### Example
    <kendo:grid-pageable pageSizes="pageSizes">
    </kendo:grid-pageable>

### previousNext `boolean`

If set to true the pager will display buttons for going to the first, previous, next and last pages. By default those buttons are displayed.

#### Example
    <kendo:grid-pageable previousNext="previousNext">
    </kendo:grid-pageable>

### refresh `boolean`

If set to true the pager will display the refresh button. Clicking the refresh button will refresh the grid. By default the refresh button is not displayed.

#### Example
    <kendo:grid-pageable refresh="refresh">
    </kendo:grid-pageable>


##  Configuration JSP Tags

### kendo:grid-pageable-messages

The text messages displayed in pager. Use this option to customize or localize the pager messages.

More documentation is available at [kendo:grid-pageable-messages](grid/pageable-messages).

#### Example

    <kendo:grid-pageable>
        <kendo:grid-pageable-messages></kendo:grid-pageable-messages>
    </kendo:grid-pageable>

