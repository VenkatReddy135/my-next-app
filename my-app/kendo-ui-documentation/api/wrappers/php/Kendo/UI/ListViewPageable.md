---
title: ListViewPageable
slug: php-ui-listviewpageable
tags: api, php
publish: true
---

# \Kendo\UI\ListViewPageable

A PHP class representing the pageable setting of ListView.


## Methods

### buttonCount
Defines the number of buttons displayed in the numeric pager.

#### Returns
`\Kendo\UI\ListViewPageable`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $pageable = new \Kendo\UI\ListViewPageable();
    $pageable->buttonCount(1);
    ?>

### info
Defines if a label showing current paging information will be displayed.

#### Returns
`\Kendo\UI\ListViewPageable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pageable = new \Kendo\UI\ListViewPageable();
    $pageable->info(true);
    ?>

### input
Defines if an input element which allows the user to navigate to given page will be displayed.

#### Returns
`\Kendo\UI\ListViewPageable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pageable = new \Kendo\UI\ListViewPageable();
    $pageable->input(true);
    ?>

### messages

Defines texts shown within the pager.

#### Returns
`\Kendo\UI\ListViewPageable`

#### Parameters

##### $value `\Kendo\UI\ListViewPageableMessages|array`


#### Example - using [\Kendo\UI\ListViewPageableMessages](/api/wrappers/php/Kendo/UI/ListViewPageableMessages)
    <?php
    $pageable = new \Kendo\UI\ListViewPageable();
    $messages = new \Kendo\UI\ListViewPageableMessages();
    $display = 'value';
    $messages->display($display);
    $pageable->messages($messages);
    ?>

#### Example - using array

    <?php
    $pageable = new \Kendo\UI\ListViewPageable();
    $display = 'value';
    $pageable->messages(array('display' => $display));
    ?>

### numeric
Defines if numeric portion of the pager will be shown.

#### Returns
`\Kendo\UI\ListViewPageable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pageable = new \Kendo\UI\ListViewPageable();
    $pageable->numeric(true);
    ?>

### pageSize
Defines the number of records which will be displyed.

#### Returns
`\Kendo\UI\ListViewPageable`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $pageable = new \Kendo\UI\ListViewPageable();
    $pageable->pageSize(1);
    ?>

### pageSizes
Displays a list with predefined page sizes. An array of values to be displayed can be provided.

#### Returns
`\Kendo\UI\ListViewPageable`

#### Parameters

##### $value `boolean|array`



#### Example  - using boolean
    <?php
    $pageable = new \Kendo\UI\ListViewPageable();
    $pageable->pageSizes(true);
    ?>

#### Example  - using array
    <?php
    $pageable = new \Kendo\UI\ListViewPageable();
    $pageable->pageSizes(new array());
    ?>

### previousNext
Defines if buttons for navigating to the first, last, previous and next pages will be shown.

#### Returns
`\Kendo\UI\ListViewPageable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pageable = new \Kendo\UI\ListViewPageable();
    $pageable->previousNext(true);
    ?>

### refresh
Defines if a refresh button will be displayed.

#### Returns
`\Kendo\UI\ListViewPageable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pageable = new \Kendo\UI\ListViewPageable();
    $pageable->refresh(true);
    ?>

