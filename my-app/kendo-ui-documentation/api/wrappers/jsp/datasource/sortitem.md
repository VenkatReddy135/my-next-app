---
title: dataSource-sortItem
slug: jsp-dataSource-sortItem
tags: api, java
publish: true
---

# \<kendo:dataSource-sortItem\>

The sort order which will be applied over the data items. By default the data items are not sorted.

#### Example
    <kendo:dataSource-sort>
        <kendo:dataSource-sortItem></kendo:dataSource-sortItem>
    </kendo:dataSource-sort>

## Configuration Attributes

### dir `java.lang.String`

The sort order (direction). The supported values are "asc" (ascending order) and "desc" (descending order).

#### Example
    <kendo:dataSource-sortItem dir="dir">
    </kendo:dataSource-sortItem>

### field `java.lang.String`

The field by which the data items are sorted.

#### Example
    <kendo:dataSource-sortItem field="field">
    </kendo:dataSource-sortItem>

