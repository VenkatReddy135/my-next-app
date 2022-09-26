---
title: EditorImageBrowserSchemaModelFieldsType
slug: php-ui-editorimagebrowserschemamodelfieldstype
tags: api, php
publish: true
---

# \Kendo\UI\EditorImageBrowserSchemaModelFieldsType

A PHP class representing the type setting of EditorImageBrowserSchemaModelFields.


## Methods

### field
The name of the field.

#### Returns
`\Kendo\UI\EditorImageBrowserSchemaModelFieldsType`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $type = new \Kendo\UI\EditorImageBrowserSchemaModelFieldsType();
    $type->field('value');
    ?>

### parse
Specifies the function which will parse the field value. If not set default parsers will be used.

#### Returns
`\Kendo\UI\EditorImageBrowserSchemaModelFieldsType`

#### Parameters

##### $value `\Kendo\JavaScriptFunction`



#### Example 
    <?php
    $type = new \Kendo\UI\EditorImageBrowserSchemaModelFieldsType();
    $type->parse(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

