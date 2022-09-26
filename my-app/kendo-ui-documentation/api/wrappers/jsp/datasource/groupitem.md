---
title: dataSource-groupItem
slug: jsp-dataSource-groupItem
tags: api, java
publish: true
---

# \<kendo:dataSource-groupItem\>

The grouping configuration of the data source. If set the data items will be grouped when the data source is populated. By default grouping is not applied.

#### Example
    <kendo:dataSource-group>
        <kendo:dataSource-groupItem></kendo:dataSource-groupItem>
    </kendo:dataSource-group>

## Configuration Attributes

### dir `java.lang.String`

The sort order of the group. The supported values are "asc" (ascending order) and "desc" (descending order). The default sort order is ascending.

#### Example
    <kendo:dataSource-groupItem dir="dir">
    </kendo:dataSource-groupItem>

### field `java.lang.String`

The data item field to group by.

#### Example
    <kendo:dataSource-groupItem field="field">
    </kendo:dataSource-groupItem>


##  Configuration JSP Tags

### kendo:dataSource-groupItem-aggregates

The aggregate(s) which are calculated during grouping. The supported aggregates are "average", "count", "max", "min" and "sum".

More documentation is available at [kendo:dataSource-groupItem-aggregates](datasource/groupitem-aggregates).

#### Example

    <kendo:dataSource-groupItem>
        <kendo:dataSource-groupItem-aggregates></kendo:dataSource-groupItem-aggregates>
    </kendo:dataSource-groupItem>

