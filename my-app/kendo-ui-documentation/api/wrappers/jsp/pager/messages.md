---
title: pager-messages
slug: jsp-pager-messages
tags: api, java
publish: true
---

# \<kendo:pager-messages\>

Defines texts shown within the pager. Use this option to customize or localize the pager messages.

#### Example
    <kendo:pager>
        <kendo:pager-messages></kendo:pager-messages>
    </kendo:pager>

## Configuration Attributes

### display `java.lang.String`

The pager info text. Uses kendo.format.Contains three placeholders:
- {0} - the first data item index
- {1} - the last data item index
- {2} - the total number of data items

#### Example
    <kendo:pager-messages display="display">
    </kendo:pager-messages>

### empty `java.lang.String`

The text displayed when the DataSource view does no contain items.

#### Example
    <kendo:pager-messages empty="empty">
    </kendo:pager-messages>

### first `java.lang.String`

The tooltip of the button which navigates to the first page.

#### Example
    <kendo:pager-messages first="first">
    </kendo:pager-messages>

### itemsPerPage `java.lang.String`

The label displayed after the page size dropdown list.

#### Example
    <kendo:pager-messages itemsPerPage="itemsPerPage">
    </kendo:pager-messages>

### last `java.lang.String`

The tooltip of the button which navigates to the last page.

#### Example
    <kendo:pager-messages last="last">
    </kendo:pager-messages>

### next `java.lang.String`

The tooltip of the button which navigates to the next page.

#### Example
    <kendo:pager-messages next="next">
    </kendo:pager-messages>

### of `java.lang.String`

The label displayed before the pager input. Uses kendo.format. Contains one optional placeholder {0} which represents the total number of pages.

#### Example
    <kendo:pager-messages of="of">
    </kendo:pager-messages>

### page `java.lang.String`

The label displayed before the pager input.

#### Example
    <kendo:pager-messages page="page">
    </kendo:pager-messages>

### previous `java.lang.String`

The tooltip of the button which navigates to the previous page.

#### Example
    <kendo:pager-messages previous="previous">
    </kendo:pager-messages>

### refresh `java.lang.String`

The tooltip of the refresh button.

#### Example
    <kendo:pager-messages refresh="refresh">
    </kendo:pager-messages>

