---
title: EditorTool
slug: php-ui-editortool
tags: api, php
publish: true
---

# \Kendo\UI\EditorTool

A PHP class representing the tool setting of EditorTools.


## Methods

### exec
The JavaScript function which will be executed when the end-user clicks the tool button.

#### Returns
`\Kendo\UI\EditorTool`

#### Parameters

##### $value `\Kendo\JavaScriptFunction`



#### Example 
    <?php
    $tool = new \Kendo\UI\EditorTool();
    $tool->exec(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### addItem

Adds one or more EditorToolItem to the EditorTool.

#### Returns
`\Kendo\UI\EditorTool`

#### Parameters

##### $value[, $value2, ...] `\Kendo\UI\EditorToolItem|array`

#### Example - using \Kendo\UI\EditorToolItem

    <?php
    $tool = new \Kendo\UI\EditorTool();
    $item = new \Kendo\UI\EditorToolItem();
    $context = 'value';
    $item->context($context);
    $tool->addItem($item);
    ?>

#### Example - using array

    <?php
    $tool = new \Kendo\UI\EditorTool();
    $context = 'value';
    $tool->addItem(array('context' => $context));
    ?>

#### Example - adding more than one EditorToolItem

    <?php
    $tool = new \Kendo\UI\EditorTool();
    $first  = new \Kendo\UI\EditorToolItem();
    $second = new \Kendo\UI\EditorToolItem();
    $tool->addItem($first, $second);
    ?>

### name
When specifying a tool as an object, a tool name is required.

#### Returns
`\Kendo\UI\EditorTool`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tool = new \Kendo\UI\EditorTool();
    $tool->name('value');
    ?>

### template
The kendo template that will be used for rendering the given tool.

#### Returns
`\Kendo\UI\EditorTool`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tool = new \Kendo\UI\EditorTool();
    $tool->template('value');
    ?>

### tooltip
The text which will be displayed when the end-user hovers the tool button with the mouse.

#### Returns
`\Kendo\UI\EditorTool`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tool = new \Kendo\UI\EditorTool();
    $tool->tooltip('value');
    ?>

