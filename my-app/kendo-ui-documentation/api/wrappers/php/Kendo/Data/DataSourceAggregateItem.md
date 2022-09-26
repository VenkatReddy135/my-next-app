---
title: DataSourceAggregateItem
slug: php-data-datasourceaggregateitem
tags: api, php
publish: true
---

# \Kendo\Data\DataSourceAggregateItem

A PHP class representing the aggregateItem setting of DataSourceAggregate.


## Methods

### aggregate
The name of the aggregate function. The supported aggregates are "average", "count", "max", "min" and "sum".

#### Returns
`\Kendo\Data\DataSourceAggregateItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $aggregateItem = new \Kendo\Data\DataSourceAggregateItem();
    $aggregateItem->aggregate('value');
    ?>

### field
The data item field which will be used to calculate the aggregates.

#### Returns
`\Kendo\Data\DataSourceAggregateItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $aggregateItem = new \Kendo\Data\DataSourceAggregateItem();
    $aggregateItem->field('value');
    ?>

