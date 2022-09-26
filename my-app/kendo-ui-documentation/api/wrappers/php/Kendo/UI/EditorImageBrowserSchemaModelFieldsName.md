---
title: EditorImageBrowserSchemaModelFieldsName
slug: php-ui-editorimagebrowserschemamodelfieldsname
tags: api, php
publish: true
---

# \Kendo\UI\EditorImageBrowserSchemaModelFieldsName

A PHP class representing the name setting of EditorImageBrowserSchemaModelFields.


## Methods

### field
The name of the field.

#### Returns
`\Kendo\UI\EditorImageBrowserSchemaModelFieldsName`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $name = new \Kendo\UI\EditorImageBrowserSchemaModelFieldsName();
    $name->field('value');
    ?>

### parse
Specifies the function which will parse the field value. If not set default parsers will be used.

#### Returns
`\Kendo\UI\EditorImageBrowserSchemaModelFieldsName`

#### Parameters

##### $value `\Kendo\JavaScriptFunction`



#### Example 
    <?php
    $name = new \Kendo\UI\EditorImageBrowserSchemaModelFieldsName();
    $name->parse(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

