---
title: dataSource-aggregateItem
slug: jsp-dataSource-aggregateItem
tags: api, java
publish: true
---

# \<kendo:dataSource-aggregateItem\>

The aggregate(s) which are calculated when the data source populates with data. The supported aggregates are "average", "count", "max", "min" and "sum".

#### Example
    <kendo:dataSource-aggregate>
        <kendo:dataSource-aggregateItem></kendo:dataSource-aggregateItem>
    </kendo:dataSource-aggregate>

## Configuration Attributes

### aggregate `java.lang.String`

The name of the aggregate function. The supported aggregates are "average", "count", "max", "min" and "sum".

#### Example
    <kendo:dataSource-aggregateItem aggregate="aggregate">
    </kendo:dataSource-aggregateItem>

### field `java.lang.String`

The data item field which will be used to calculate the aggregates.

#### Example
    <kendo:dataSource-aggregateItem field="field">
    </kendo:dataSource-aggregateItem>

