---
title: GridPageableMessages
slug: php-ui-gridpageablemessages
tags: api, php
publish: true
---

# \Kendo\UI\GridPageableMessages

A PHP class representing the messages setting of GridPageable.


## Methods

### display
The pager info text. Uses kendo.format.Contains three placeholders:
- {0} - the first data item index
- {1} - the last data item index
- {2} - the total number of data items

#### Returns
`\Kendo\UI\GridPageableMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\GridPageableMessages();
    $messages->display('value');
    ?>

### _empty
The text displayed when the grid is empty.

#### Returns
`\Kendo\UI\GridPageableMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\GridPageableMessages();
    $messages->_empty('value');
    ?>

### first
The tooltip of the button which goes to the first page.

#### Returns
`\Kendo\UI\GridPageableMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\GridPageableMessages();
    $messages->first('value');
    ?>

### itemsPerPage
The label displayed after the page size dropdown list.

#### Returns
`\Kendo\UI\GridPageableMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\GridPageableMessages();
    $messages->itemsPerPage('value');
    ?>

### last
The tooltip of the button which goes to the last page.

#### Returns
`\Kendo\UI\GridPageableMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\GridPageableMessages();
    $messages->last('value');
    ?>

### next
The tooltip of the button which goes to the next page.

#### Returns
`\Kendo\UI\GridPageableMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\GridPageableMessages();
    $messages->next('value');
    ?>

### of
The label displayed before the pager input. Uses kendo.format. Contains one optional placeholder {0} which represents the total number of pages.

#### Returns
`\Kendo\UI\GridPageableMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\GridPageableMessages();
    $messages->of('value');
    ?>

### page
The label displayed before the pager input.

#### Returns
`\Kendo\UI\GridPageableMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\GridPageableMessages();
    $messages->page('value');
    ?>

### previous
The tooltip of the button which goes to the previous page.

#### Returns
`\Kendo\UI\GridPageableMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\GridPageableMessages();
    $messages->previous('value');
    ?>

### refresh
The tooltip of the refresh button.

#### Returns
`\Kendo\UI\GridPageableMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\GridPageableMessages();
    $messages->refresh('value');
    ?>

