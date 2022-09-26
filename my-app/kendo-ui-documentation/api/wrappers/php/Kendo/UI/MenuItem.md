---
title: MenuItem
slug: php-ui-menuitem
tags: api, php
publish: true
---

# \Kendo\UI\MenuItem

A PHP class representing the item setting of MenuItems.


## Methods

### content

Sets the HTML content of the MenuItem.

#### Returns

`MenuItem`

#### $value `string`

#### Example

    <?php
    $item = new \Kendo\UI\MenuItem();
    $item->content('<strong>Content</strong>');
    ?>


### enabled
Specifies whether the item is initially enabled

#### Returns
`\Kendo\UI\MenuItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $item = new \Kendo\UI\MenuItem();
    $item->enabled(true);
    ?>

### endContent

Stops output bufferring and sets the preceding markup as the content of the MenuItem.

#### Example

    <?php
    $item = new \Kendo\UI\MenuItem();
    $item->startContent();
    ?>
    <strong>Content</strong>
    <?php
    $item->endContent(); // content is set to <strong>Content</strong>
    ?>

### imageUrl
Specifies the URL of the image displayed by the item

#### Returns
`\Kendo\UI\MenuItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\MenuItem();
    $item->imageUrl('value');
    ?>

### selected
Specifies whether the item is initially selected

#### Returns
`\Kendo\UI\MenuItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $item = new \Kendo\UI\MenuItem();
    $item->selected(true);
    ?>

### spriteCssClass
Specifies the class name for the sprite image displayed by the item

#### Returns
`\Kendo\UI\MenuItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\MenuItem();
    $item->spriteCssClass('value');
    ?>

### startContent

Starts output bufferring. Any following markup will be set as the content of the MenuItem.

#### Example

    <?php
    $item = new \Kendo\UI\MenuItem();
    $item->startContent();
    ?>
    <strong>Content</strong>
    <?php
    $item->endContent(); // content is set to <strong>Content</strong>
    ?>


### text
Specifies the text displayed by the item

#### Returns
`\Kendo\UI\MenuItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\MenuItem();
    $item->text('value');
    ?>

### url
Specifies the URL that the item links to

#### Returns
`\Kendo\UI\MenuItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\MenuItem();
    $item->url('value');
    ?>

