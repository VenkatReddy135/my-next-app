---
title: DataSourceGroupItem
slug: php-data-datasourcegroupitem
tags: api, php
publish: true
---

# \Kendo\Data\DataSourceGroupItem

A PHP class representing the groupItem setting of DataSourceGroup.


## Methods

### addAggregate

Adds one or more DataSourceGroupItemAggregate to the DataSourceGroupItem.

#### Returns
`\Kendo\Data\DataSourceGroupItem`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Data\DataSourceGroupItemAggregate|array`

#### Example - using \Kendo\Data\DataSourceGroupItemAggregate

    <?php
    $groupItem = new \Kendo\Data\DataSourceGroupItem();
    $aggregate = new \Kendo\Data\DataSourceGroupItemAggregate();
    $aggregate = 'value';
    $aggregate->aggregate($aggregate);
    $groupItem->addAggregate($aggregate);
    ?>

#### Example - using array

    <?php
    $groupItem = new \Kendo\Data\DataSourceGroupItem();
    $aggregate = 'value';
    $groupItem->addAggregate(array('aggregate' => $aggregate));
    ?>

#### Example - adding more than one DataSourceGroupItemAggregate

    <?php
    $groupItem = new \Kendo\Data\DataSourceGroupItem();
    $first  = new \Kendo\Data\DataSourceGroupItemAggregate();
    $second = new \Kendo\Data\DataSourceGroupItemAggregate();
    $groupItem->addAggregate($first, $second);
    ?>

### dir
The sort order of the group. The supported values are "asc" (ascending order) and "desc" (descending order). The default sort order is ascending.

#### Returns
`\Kendo\Data\DataSourceGroupItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $groupItem = new \Kendo\Data\DataSourceGroupItem();
    $groupItem->dir('value');
    ?>

### field
The data item field to group by.

#### Returns
`\Kendo\Data\DataSourceGroupItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $groupItem = new \Kendo\Data\DataSourceGroupItem();
    $groupItem->field('value');
    ?>

