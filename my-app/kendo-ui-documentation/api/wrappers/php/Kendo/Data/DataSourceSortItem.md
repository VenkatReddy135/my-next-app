---
title: DataSourceSortItem
slug: php-data-datasourcesortitem
tags: api, php
publish: true
---

# \Kendo\Data\DataSourceSortItem

A PHP class representing the sortItem setting of DataSourceSort.


## Methods

### dir
The sort order (direction). The supported values are "asc" (ascending order) and "desc" (descending order).

#### Returns
`\Kendo\Data\DataSourceSortItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $sortItem = new \Kendo\Data\DataSourceSortItem();
    $sortItem->dir('value');
    ?>

### field
The field by which the data items are sorted.

#### Returns
`\Kendo\Data\DataSourceSortItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $sortItem = new \Kendo\Data\DataSourceSortItem();
    $sortItem->field('value');
    ?>

