---
title: EditorImageBrowserSchemaModel
slug: php-ui-editorimagebrowserschemamodel
tags: api, php
publish: true
---

# \Kendo\UI\EditorImageBrowserSchemaModel

A PHP class representing the model setting of EditorImageBrowserSchema.


## Methods

### fields



#### Returns
`\Kendo\UI\EditorImageBrowserSchemaModel`

#### Parameters

##### $value `\Kendo\UI\EditorImageBrowserSchemaModelFields|array`


#### Example - using [\Kendo\UI\EditorImageBrowserSchemaModelFields](/api/wrappers/php/Kendo/UI/EditorImageBrowserSchemaModelFields)
    <?php
    $model = new \Kendo\UI\EditorImageBrowserSchemaModel();
    $fields = new \Kendo\UI\EditorImageBrowserSchemaModelFields();
    $name = 'value';
    $fields->name($name);
    $model->fields($fields);
    ?>

#### Example - using array

    <?php
    $model = new \Kendo\UI\EditorImageBrowserSchemaModel();
    $name = 'value';
    $model->fields(array('name' => $name));
    ?>

### id
The name of the field which acts as an identifier.

#### Returns
`\Kendo\UI\EditorImageBrowserSchemaModel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $model = new \Kendo\UI\EditorImageBrowserSchemaModel();
    $model->id('value');
    ?>

