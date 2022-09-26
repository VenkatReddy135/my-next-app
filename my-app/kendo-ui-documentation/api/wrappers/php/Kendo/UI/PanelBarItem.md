---
title: PanelBarItem
slug: php-ui-panelbaritem
tags: api, php
publish: true
---

# \Kendo\UI\PanelBarItem

A PHP class representing the item setting of PanelBarItems.


## Methods

### content

Sets the HTML content of the PanelBarItem.

#### Returns

`PanelBarItem`

#### $value `string`

#### Example

    <?php
    $item = new \Kendo\UI\PanelBarItem();
    $item->content('<strong>Content</strong>');
    ?>


### contentUrl
Specifies the url from which the item content will be loaded

#### Returns
`\Kendo\UI\PanelBarItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\PanelBarItem();
    $item->contentUrl('value');
    ?>

### enabled
Specifies whether the item is initially enabled

#### Returns
`\Kendo\UI\PanelBarItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $item = new \Kendo\UI\PanelBarItem();
    $item->enabled(true);
    ?>

### endContent

Stops output bufferring and sets the preceding markup as the content of the PanelBarItem.

#### Example

    <?php
    $item = new \Kendo\UI\PanelBarItem();
    $item->startContent();
    ?>
    <strong>Content</strong>
    <?php
    $item->endContent(); // content is set to <strong>Content</strong>
    ?>

### expanded
Specifies whether the item is initially expanded

#### Returns
`\Kendo\UI\PanelBarItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $item = new \Kendo\UI\PanelBarItem();
    $item->expanded(true);
    ?>

### imageUrl
Specifies the URL of the image displayed by the item

#### Returns
`\Kendo\UI\PanelBarItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\PanelBarItem();
    $item->imageUrl('value');
    ?>

### selected
Specifies whether the item is initially selected

#### Returns
`\Kendo\UI\PanelBarItem`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $item = new \Kendo\UI\PanelBarItem();
    $item->selected(true);
    ?>

### spriteCssClass
Specifies the class name for the sprite image displayed by the item

#### Returns
`\Kendo\UI\PanelBarItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\PanelBarItem();
    $item->spriteCssClass('value');
    ?>

### startContent

Starts output bufferring. Any following markup will be set as the content of the PanelBarItem.

#### Example

    <?php
    $item = new \Kendo\UI\PanelBarItem();
    $item->startContent();
    ?>
    <strong>Content</strong>
    <?php
    $item->endContent(); // content is set to <strong>Content</strong>
    ?>


### text
Specifies the text displayed by the item

#### Returns
`\Kendo\UI\PanelBarItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $item = new \Kendo\UI\PanelBarItem();
    $item->text('value');
    ?>

