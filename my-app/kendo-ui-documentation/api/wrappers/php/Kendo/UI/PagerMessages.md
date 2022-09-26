---
title: PagerMessages
slug: php-ui-pagermessages
tags: api, php
publish: true
---

# \Kendo\UI\PagerMessages

A PHP class representing the messages setting of Pager.


## Methods

### display
The pager info text. Uses kendo.format.Contains three placeholders:
- {0} - the first data item index
- {1} - the last data item index
- {2} - the total number of data items

#### Returns
`\Kendo\UI\PagerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\PagerMessages();
    $messages->display('value');
    ?>

### _empty
The text displayed when the DataSource view does no contain items.

#### Returns
`\Kendo\UI\PagerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\PagerMessages();
    $messages->_empty('value');
    ?>

### first
The tooltip of the button which navigates to the first page.

#### Returns
`\Kendo\UI\PagerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\PagerMessages();
    $messages->first('value');
    ?>

### itemsPerPage
The label displayed after the page size dropdown list.

#### Returns
`\Kendo\UI\PagerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\PagerMessages();
    $messages->itemsPerPage('value');
    ?>

### last
The tooltip of the button which navigates to the last page.

#### Returns
`\Kendo\UI\PagerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\PagerMessages();
    $messages->last('value');
    ?>

### next
The tooltip of the button which navigates to the next page.

#### Returns
`\Kendo\UI\PagerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\PagerMessages();
    $messages->next('value');
    ?>

### of
The label displayed before the pager input. Uses kendo.format. Contains one optional placeholder {0} which represents the total number of pages.

#### Returns
`\Kendo\UI\PagerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\PagerMessages();
    $messages->of('value');
    ?>

### page
The label displayed before the pager input.

#### Returns
`\Kendo\UI\PagerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\PagerMessages();
    $messages->page('value');
    ?>

### previous
The tooltip of the button which navigates to the previous page.

#### Returns
`\Kendo\UI\PagerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\PagerMessages();
    $messages->previous('value');
    ?>

### refresh
The tooltip of the refresh button.

#### Returns
`\Kendo\UI\PagerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\PagerMessages();
    $messages->refresh('value');
    ?>

