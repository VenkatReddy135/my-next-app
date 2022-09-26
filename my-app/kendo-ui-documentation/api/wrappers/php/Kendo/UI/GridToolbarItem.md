---
title: GridToolbarItem
slug: php-ui-gridtoolbaritem
tags: api, php
publish: true
---

# \Kendo\UI\GridToolbarItem

A PHP class representing the toolbarItem setting of GridToolbar.


## Methods

### name
The name of the toolbar command. Either a built-in ("cancel", "create" and "save") or custom.

#### Returns
`\Kendo\UI\GridToolbarItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $toolbarItem = new \Kendo\UI\GridToolbarItem();
    $toolbarItem->name('value');
    ?>

### template
The template which renders the command. Be default renders a button.

#### Returns
`\Kendo\UI\GridToolbarItem`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $toolbarItem = new \Kendo\UI\GridToolbarItem();
    $toolbarItem->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $toolbarItem = new \Kendo\UI\GridToolbarItem();
    $toolbarItem->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### text
The text displayed by the command button. If not set the name` option would be used as the button text instead.

#### Returns
`\Kendo\UI\GridToolbarItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $toolbarItem = new \Kendo\UI\GridToolbarItem();
    $toolbarItem->text('value');
    ?>

