---
title: EditorImageBrowserSchemaModelFieldsSize
slug: php-ui-editorimagebrowserschemamodelfieldssize
tags: api, php
publish: true
---

# \Kendo\UI\EditorImageBrowserSchemaModelFieldsSize

A PHP class representing the size setting of EditorImageBrowserSchemaModelFields.


## Methods

### field
The name of the field.

#### Returns
`\Kendo\UI\EditorImageBrowserSchemaModelFieldsSize`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $size = new \Kendo\UI\EditorImageBrowserSchemaModelFieldsSize();
    $size->field('value');
    ?>

### parse
Specifies the function which will parse the field value. If not set default parsers will be used.

#### Returns
`\Kendo\UI\EditorImageBrowserSchemaModelFieldsSize`

#### Parameters

##### $value `\Kendo\JavaScriptFunction`



#### Example 
    <?php
    $size = new \Kendo\UI\EditorImageBrowserSchemaModelFieldsSize();
    $size->parse(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

