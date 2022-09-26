---
title: TreeViewItem
slug: php-ui-treeviewitem
tags: api, php
publish: true
---

# \Kendo\UI\TreeViewItem

A PHP class representing the item setting of TreeViewItems.


## Methods

### content

Sets the HTML content of the TreeViewItem.

#### Returns

`TreeViewItem`

#### $value `string`

#### Example

    <?php
    $item = new \Kendo\UI\TreeViewItem();
    $item->content('<strong>Content</strong>');
    ?>


### enabled
Specifies whether the item is initially enabled. True by default.

#### Returns
`\Kendo\UI\TreeViewItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $item = new \Kendo\UI\TreeViewItem();
    $item->enabled(true);
    ?>

### endContent

Stops output bufferring and sets the preceding markup as the content of the TreeViewItem.

#### Example

    <?php
    $item = new \Kendo\UI\TreeViewItem();
    $item->startContent();
    ?>
    <strong>Content</strong>
    <?php
    $item->endContent(); // content is set to <strong>Content</strong>
    ?>

### expanded
Specifies whether the item is initially expanded

#### Returns
`\Kendo\UI\TreeViewItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $item = new \Kendo\UI\TreeViewItem();
    $item->expanded(true);
    ?>

### imageUrl
Specifies the URL of the image displayed by the item

#### Returns
`\Kendo\UI\TreeViewItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\TreeViewItem();
    $item->imageUrl('value');
    ?>

### selected
Specifies whether the item is initially selected

#### Returns
`\Kendo\UI\TreeViewItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $item = new \Kendo\UI\TreeViewItem();
    $item->selected(true);
    ?>

### spriteCssClass
Specifies the class name for the sprite image displayed by the item

#### Returns
`\Kendo\UI\TreeViewItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\TreeViewItem();
    $item->spriteCssClass('value');
    ?>

### startContent

Starts output bufferring. Any following markup will be set as the content of the TreeViewItem.

#### Example

    <?php
    $item = new \Kendo\UI\TreeViewItem();
    $item->startContent();
    ?>
    <strong>Content</strong>
    <?php
    $item->endContent(); // content is set to <strong>Content</strong>
    ?>


### text
Specifies the text displayed by the item

#### Returns
`\Kendo\UI\TreeViewItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\TreeViewItem();
    $item->text('value');
    ?>

### url
Specifies the URL that the item will link to. Used for navigational trees.

#### Returns
`\Kendo\UI\TreeViewItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\TreeViewItem();
    $item->url('value');
    ?>

