---
title: listView-pageable
slug: jsp-listView-pageable
tags: api, java
publish: true
---

# \<kendo:listView-pageable\>

Indicates whether paging is enabled/disabled.

#### Example
    <kendo:listView>
        <kendo:listView-pageable></kendo:listView-pageable>
    </kendo:listView>

## Configuration Attributes

### buttonCount `float`

Defines the number of buttons displayed in the numeric pager.

#### Example
    <kendo:listView-pageable buttonCount="buttonCount">
    </kendo:listView-pageable>

### info `boolean`

Defines if a label showing current paging information will be displayed.

#### Example
    <kendo:listView-pageable info="info">
    </kendo:listView-pageable>

### input `boolean`

Defines if an input element which allows the user to navigate to given page will be displayed.

#### Example
    <kendo:listView-pageable input="input">
    </kendo:listView-pageable>

### numeric `boolean`

Defines if numeric portion of the pager will be shown.

#### Example
    <kendo:listView-pageable numeric="numeric">
    </kendo:listView-pageable>

### pageSize `float`

Defines the number of records which will be displyed.

#### Example
    <kendo:listView-pageable pageSize="pageSize">
    </kendo:listView-pageable>

### pageSizes `java.lang.Object`

Displays a list with predefined page sizes. An array of values to be displayed can be provided.

#### Example
    <kendo:listView-pageable pageSizes="pageSizes">
    </kendo:listView-pageable>

### previousNext `boolean`

Defines if buttons for navigating to the first, last, previous and next pages will be shown.

#### Example
    <kendo:listView-pageable previousNext="previousNext">
    </kendo:listView-pageable>

### refresh `boolean`

Defines if a refresh button will be displayed.

#### Example
    <kendo:listView-pageable refresh="refresh">
    </kendo:listView-pageable>


##  Configuration JSP Tags

### kendo:listView-pageable-messages

Defines texts shown within the pager.

More documentation is available at [kendo:listView-pageable-messages](listview/pageable-messages).

#### Example

    <kendo:listView-pageable>
        <kendo:listView-pageable-messages></kendo:listView-pageable-messages>
    </kendo:listView-pageable>

