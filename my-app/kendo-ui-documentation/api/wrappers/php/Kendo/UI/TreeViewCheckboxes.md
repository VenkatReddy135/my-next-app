---
title: TreeViewCheckboxes
slug: php-ui-treeviewcheckboxes
tags: api, php
publish: true
---

# \Kendo\UI\TreeViewCheckboxes

A PHP class representing the checkboxes setting of TreeView.


## Methods

### checkChildren
Indicates whether checkboxes of child items should get checked when the checkbox of a parent item is checked. This
also enables tri-state checkboxes with an indeterminate state.

#### Returns
`\Kendo\UI\TreeViewCheckboxes`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $checkboxes = new \Kendo\UI\TreeViewCheckboxes();
    $checkboxes->checkChildren(true);
    ?>

### name
Sets the name attribute of the checkbox inputs. That name will be posted to the server.

#### Returns
`\Kendo\UI\TreeViewCheckboxes`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $checkboxes = new \Kendo\UI\TreeViewCheckboxes();
    $checkboxes->name('value');
    ?>

### template
The template which renders the checkboxes. Can be used to allow posting of
additional information along the treeview checkboxes.The fields which can be used in the template are:

#### Returns
`\Kendo\UI\TreeViewCheckboxes`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $checkboxes = new \Kendo\UI\TreeViewCheckboxes();
    $checkboxes->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $checkboxes = new \Kendo\UI\TreeViewCheckboxes();
    $checkboxes->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

