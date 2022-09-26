---
title: TabStripItem
slug: php-ui-tabstripitem
tags: api, php
publish: true
---

# \Kendo\UI\TabStripItem

A PHP class representing the item setting of TabStripItems.


## Methods

### content

Sets the HTML content of the TabStripItem.

#### Returns

`TabStripItem`

#### $value `string`

#### Example

    <?php
    $item = new \Kendo\UI\TabStripItem();
    $item->content('<strong>Content</strong>');
    ?>


### contentUrl
Specifies the url from which the item content will be loaded

#### Returns
`\Kendo\UI\TabStripItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\TabStripItem();
    $item->contentUrl('value');
    ?>

### enabled
Specifies whether the item is initially enabled

#### Returns
`\Kendo\UI\TabStripItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $item = new \Kendo\UI\TabStripItem();
    $item->enabled(true);
    ?>

### endContent

Stops output bufferring and sets the preceding markup as the content of the TabStripItem.

#### Example

    <?php
    $item = new \Kendo\UI\TabStripItem();
    $item->startContent();
    ?>
    <strong>Content</strong>
    <?php
    $item->endContent(); // content is set to <strong>Content</strong>
    ?>

### imageUrl
Specifies the URL of the image displayed by the item

#### Returns
`\Kendo\UI\TabStripItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\TabStripItem();
    $item->imageUrl('value');
    ?>

### selected
Specifies whether the item is initially selected

#### Returns
`\Kendo\UI\TabStripItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $item = new \Kendo\UI\TabStripItem();
    $item->selected(true);
    ?>

### spriteCssClass
Specifies the class name for the sprite image displayed by the item

#### Returns
`\Kendo\UI\TabStripItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\TabStripItem();
    $item->spriteCssClass('value');
    ?>

### startContent

Starts output bufferring. Any following markup will be set as the content of the TabStripItem.

#### Example

    <?php
    $item = new \Kendo\UI\TabStripItem();
    $item->startContent();
    ?>
    <strong>Content</strong>
    <?php
    $item->endContent(); // content is set to <strong>Content</strong>
    ?>


### text
Specifies the text displayed by the item

#### Returns
`\Kendo\UI\TabStripItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\TabStripItem();
    $item->text('value');
    ?>

