---
title: GridPageable
slug: php-ui-gridpageable
tags: api, php
publish: true
---

# \Kendo\UI\GridPageable

A PHP class representing the pageable setting of Grid.


## Methods

### buttonCount
The maximum number of buttons displayed in the numeric pager. The pager will display ellipsis (...) if there are more pages than the specified number.

#### Returns
`\Kendo\UI\GridPageable`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $pageable = new \Kendo\UI\GridPageable();
    $pageable->buttonCount(1);
    ?>

### info
If set to true the pager will display information about the current page and total number of data items. By default the paging information is displayed.

#### Returns
`\Kendo\UI\GridPageable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pageable = new \Kendo\UI\GridPageable();
    $pageable->info(true);
    ?>

### input
If set to true the pager will display an input element which allows the user to type a specific page number. By default the page input is not displayed.

#### Returns
`\Kendo\UI\GridPageable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pageable = new \Kendo\UI\GridPageable();
    $pageable->input(true);
    ?>

### messages

The text messages displayed in pager. Use this option to customize or localize the pager messages.

#### Returns
`\Kendo\UI\GridPageable`

#### Parameters

##### $value `\Kendo\UI\GridPageableMessages|array`


#### Example - using [\Kendo\UI\GridPageableMessages](/api/wrappers/php/Kendo/UI/GridPageableMessages)
    <?php
    $pageable = new \Kendo\UI\GridPageable();
    $messages = new \Kendo\UI\GridPageableMessages();
    $display = 'value';
    $messages->display($display);
    $pageable->messages($messages);
    ?>

#### Example - using array

    <?php
    $pageable = new \Kendo\UI\GridPageable();
    $display = 'value';
    $pageable->messages(array('display' => $display));
    ?>

### numeric
If set to true the pager will display buttons for navigating to specific pages. By default those buttons are displayed.

#### Returns
`\Kendo\UI\GridPageable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pageable = new \Kendo\UI\GridPageable();
    $pageable->numeric(true);
    ?>

### pageSize
The number of data items which will be displayed in the grid.

#### Returns
`\Kendo\UI\GridPageable`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $pageable = new \Kendo\UI\GridPageable();
    $pageable->pageSize(1);
    ?>

### pageSizes
If set to true the pager will display a dropdown list which allows the user to pick a page size. By default the page size dropdown list is not displayed.Can be set to an array with the available page sizes.

#### Returns
`\Kendo\UI\GridPageable`

#### Parameters

##### $value `boolean|array`



#### Example  - using boolean
    <?php
    $pageable = new \Kendo\UI\GridPageable();
    $pageable->pageSizes(true);
    ?>

#### Example  - using array
    <?php
    $pageable = new \Kendo\UI\GridPageable();
    $pageable->pageSizes(new array());
    ?>

### previousNext
If set to true the pager will display buttons for going to the first, previous, next and last pages. By default those buttons are displayed.

#### Returns
`\Kendo\UI\GridPageable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pageable = new \Kendo\UI\GridPageable();
    $pageable->previousNext(true);
    ?>

### refresh
If set to true the pager will display the refresh button. Clicking the refresh button will refresh the grid. By default the refresh button is not displayed.

#### Returns
`\Kendo\UI\GridPageable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pageable = new \Kendo\UI\GridPageable();
    $pageable->refresh(true);
    ?>

