---
title: GridColumnMenu
slug: php-ui-gridcolumnmenu
tags: api, php
publish: true
---

# \Kendo\UI\GridColumnMenu

A PHP class representing the columnMenu setting of Grid.


## Methods

### columns
If set to true the column menu would allow the user to select (show and hide) grid columns. By default the column menu allows column selection.

#### Returns
`\Kendo\UI\GridColumnMenu`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $columnMenu = new \Kendo\UI\GridColumnMenu();
    $columnMenu->columns(true);
    ?>

### filterable
If set to true the column menu would allow the user to filter the grid. By default the column menu allows the user to filter if filtering is enabled via the filterable.

#### Returns
`\Kendo\UI\GridColumnMenu`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $columnMenu = new \Kendo\UI\GridColumnMenu();
    $columnMenu->filterable(true);
    ?>

### messages

The text messages displayed in the column menu. Use it to customize or localize the column menu messages.

#### Returns
`\Kendo\UI\GridColumnMenu`

#### Parameters

##### $value `\Kendo\UI\GridColumnMenuMessages|array`


#### Example - using [\Kendo\UI\GridColumnMenuMessages](/api/wrappers/php/Kendo/UI/GridColumnMenuMessages)
    <?php
    $columnMenu = new \Kendo\UI\GridColumnMenu();
    $messages = new \Kendo\UI\GridColumnMenuMessages();
    $columns = 'value';
    $messages->columns($columns);
    $columnMenu->messages($messages);
    ?>

#### Example - using array

    <?php
    $columnMenu = new \Kendo\UI\GridColumnMenu();
    $columns = 'value';
    $columnMenu->messages(array('columns' => $columns));
    ?>

### sortable
If set to true the column menu would allow the user to sort the grid by the column field. By default the column menu allows the user to sort if sorting is enabled via the sortable option.

#### Returns
`\Kendo\UI\GridColumnMenu`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $columnMenu = new \Kendo\UI\GridColumnMenu();
    $columnMenu->sortable(true);
    ?>

