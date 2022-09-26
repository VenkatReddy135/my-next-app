---
title: GridSortable
slug: php-ui-gridsortable
tags: api, php
publish: true
---

# \Kendo\UI\GridSortable

A PHP class representing the sortable setting of Grid.


## Methods

### allowUnsort
If set to true the user can get the grid in unsorted state by clicking the sorted column header.

#### Returns
`\Kendo\UI\GridSortable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $sortable = new \Kendo\UI\GridSortable();
    $sortable->allowUnsort(true);
    ?>

### mode
The sorting mode. If set to "single" the user can sort by one column. If set to "multiple" the user can sort by one column.

#### Returns
`\Kendo\UI\GridSortable`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $sortable = new \Kendo\UI\GridSortable();
    $sortable->mode('value');
    ?>

