---
title: GridEditable
slug: php-ui-grideditable
tags: api, php
publish: true
---

# \Kendo\UI\GridEditable

A PHP class representing the editable setting of Grid.


## Methods

### confirmation
If set to true the grid will display a confirmation dialog when the user clicks the "destroy" command button.Can be set to a string which will be used as the confirmation text.

#### Returns
`\Kendo\UI\GridEditable`

#### Parameters

##### $value `boolean|string`



#### Example  - using boolean
    <?php
    $editable = new \Kendo\UI\GridEditable();
    $editable->confirmation(true);
    ?>

#### Example  - using string
    <?php
    $editable = new \Kendo\UI\GridEditable();
    $editable->confirmation('value');
    ?>

### createAt
The position at which new data items are inserted in the grid. Must be set to either "top" or "bottom". By default new data items are inserted at the top.

#### Returns
`\Kendo\UI\GridEditable`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $editable = new \Kendo\UI\GridEditable();
    $editable->createAt('value');
    ?>

### destroy
If set to true the user can delete data items from the grid by clicking the "destroy" command button. Deleting is enabled by default.

#### Returns
`\Kendo\UI\GridEditable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $editable = new \Kendo\UI\GridEditable();
    $editable->destroy(true);
    ?>

### mode
The editing mode to use. The supported editing modes are "incell", "inline" and "popup".

#### Returns
`\Kendo\UI\GridEditable`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $editable = new \Kendo\UI\GridEditable();
    $editable->mode('value');
    ?>

### template
The template which renders popup editor.The template should contain elements whose name HTML attributes are set as the editable fields. This is how the grid will know
which field to update. The other option is to use MVVM bindings in order to bind HTML elements to data item fields.

#### Returns
`\Kendo\UI\GridEditable`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $editable = new \Kendo\UI\GridEditable();
    $editable->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $editable = new \Kendo\UI\GridEditable();
    $editable->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### update
If set to true the user can edit data items when editing is enabled.

#### Returns
`\Kendo\UI\GridEditable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $editable = new \Kendo\UI\GridEditable();
    $editable->update(true);
    ?>

