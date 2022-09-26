---
title: dataSource-groupItem-aggregate
slug: jsp-dataSource-groupItem-aggregate
tags: api, java
publish: true
---

# \<kendo:dataSource-groupItem-aggregate\>

The aggregate(s) which are calculated during grouping. The supported aggregates are "average", "count", "max", "min" and "sum".

#### Example
    <kendo:dataSource-groupItem-aggregates>
        <kendo:dataSource-groupItem-aggregate></kendo:dataSource-groupItem-aggregate>
    </kendo:dataSource-groupItem-aggregates>

## Configuration Attributes

### aggregate `java.lang.String`

The name of the aggregate function. Specifies the aggregate function. The supported aggregates are "average", "count", "max", "min" and "sum".

#### Example
    <kendo:dataSource-groupItem-aggregate aggregate="aggregate">
    </kendo:dataSource-groupItem-aggregate>

### field `java.lang.String`

The data item field which will be used to calculate the aggregates.

#### Example
    <kendo:dataSource-groupItem-aggregate field="field">
    </kendo:dataSource-groupItem-aggregate>

