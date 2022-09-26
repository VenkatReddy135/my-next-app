---
title: DataSourceGroupItemAggregate
slug: php-data-datasourcegroupitemaggregate
tags: api, php
publish: true
---

# \Kendo\Data\DataSourceGroupItemAggregate

A PHP class representing the aggregate setting of DataSourceGroupItemAggregates.


## Methods

### aggregate
The name of the aggregate function. Specifies the aggregate function. The supported aggregates are "average", "count", "max", "min" and "sum".

#### Returns
`\Kendo\Data\DataSourceGroupItemAggregate`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $aggregate = new \Kendo\Data\DataSourceGroupItemAggregate();
    $aggregate->aggregate('value');
    ?>

### field
The data item field which will be used to calculate the aggregates.

#### Returns
`\Kendo\Data\DataSourceGroupItemAggregate`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $aggregate = new \Kendo\Data\DataSourceGroupItemAggregate();
    $aggregate->field('value');
    ?>

