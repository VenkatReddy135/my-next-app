---
title: EditorToolItem
slug: php-ui-editortoolitem
tags: api, php
publish: true
---

# \Kendo\UI\EditorToolItem

A PHP class representing the item setting of EditorToolItems.


## Methods

### context
Only applicable for the formatting tool. Specifies the context in which the option will be available.

#### Returns
`\Kendo\UI\EditorToolItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\EditorToolItem();
    $item->context('value');
    ?>

### text
The string that the popup item will show.

#### Returns
`\Kendo\UI\EditorToolItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\EditorToolItem();
    $item->text('value');
    ?>

### value
The value that will be applied by the tool when this item is selected.

#### Returns
`\Kendo\UI\EditorToolItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\EditorToolItem();
    $item->value('value');
    ?>

