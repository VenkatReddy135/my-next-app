---
title: grid-pageable-messages
slug: jsp-grid-pageable-messages
tags: api, java
publish: true
---

# \<kendo:grid-pageable-messages\>

The text messages displayed in pager. Use this option to customize or localize the pager messages.

#### Example
    <kendo:grid-pageable>
        <kendo:grid-pageable-messages></kendo:grid-pageable-messages>
    </kendo:grid-pageable>

## Configuration Attributes

### display `java.lang.String`

The pager info text. Uses kendo.format.Contains three placeholders:
- {0} - the first data item index
- {1} - the last data item index
- {2} - the total number of data items

#### Example
    <kendo:grid-pageable-messages display="display">
    </kendo:grid-pageable-messages>

### empty `java.lang.String`

The text displayed when the grid is empty.

#### Example
    <kendo:grid-pageable-messages empty="empty">
    </kendo:grid-pageable-messages>

### first `java.lang.String`

The tooltip of the button which goes to the first page.

#### Example
    <kendo:grid-pageable-messages first="first">
    </kendo:grid-pageable-messages>

### itemsPerPage `java.lang.String`

The label displayed after the page size dropdown list.

#### Example
    <kendo:grid-pageable-messages itemsPerPage="itemsPerPage">
    </kendo:grid-pageable-messages>

### last `java.lang.String`

The tooltip of the button which goes to the last page.

#### Example
    <kendo:grid-pageable-messages last="last">
    </kendo:grid-pageable-messages>

### next `java.lang.String`

The tooltip of the button which goes to the next page.

#### Example
    <kendo:grid-pageable-messages next="next">
    </kendo:grid-pageable-messages>

### of `java.lang.String`

The label displayed before the pager input. Uses kendo.format. Contains one optional placeholder {0} which represents the total number of pages.

#### Example
    <kendo:grid-pageable-messages of="of">
    </kendo:grid-pageable-messages>

### page `java.lang.String`

The label displayed before the pager input.

#### Example
    <kendo:grid-pageable-messages page="page">
    </kendo:grid-pageable-messages>

### previous `java.lang.String`

The tooltip of the button which goes to the previous page.

#### Example
    <kendo:grid-pageable-messages previous="previous">
    </kendo:grid-pageable-messages>

### refresh `java.lang.String`

The tooltip of the refresh button.

#### Example
    <kendo:grid-pageable-messages refresh="refresh">
    </kendo:grid-pageable-messages>

