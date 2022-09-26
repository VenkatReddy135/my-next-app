---
title: EditorImageBrowserSchemaModelFields
slug: php-ui-editorimagebrowserschemamodelfields
tags: api, php
publish: true
---

# \Kendo\UI\EditorImageBrowserSchemaModelFields

A PHP class representing the fields setting of EditorImageBrowserSchemaModel.


## Methods

### name

The field which contains the name of the image/directory

#### Returns
`\Kendo\UI\EditorImageBrowserSchemaModelFields`

#### Parameters

##### $value `string|\Kendo\UI\EditorImageBrowserSchemaModelFieldsName|array`




#### Example  - using string
    <?php
    $fields = new \Kendo\UI\EditorImageBrowserSchemaModelFields();
    $fields->name('value');
    ?>


#### Example - using [\Kendo\UI\EditorImageBrowserSchemaModelFieldsName](/api/wrappers/php/Kendo/UI/EditorImageBrowserSchemaModelFieldsName)
    <?php
    $fields = new \Kendo\UI\EditorImageBrowserSchemaModelFields();
    $name = new \Kendo\UI\EditorImageBrowserSchemaModelFieldsName();
    $field = 'value';
    $name->field($field);
    $fields->name($name);
    ?>

#### Example - using array

    <?php
    $fields = new \Kendo\UI\EditorImageBrowserSchemaModelFields();
    $field = 'value';
    $fields->name(array('field' => $field));
    ?>

### size

The field which contains the size of image.

#### Returns
`\Kendo\UI\EditorImageBrowserSchemaModelFields`

#### Parameters

##### $value `string|\Kendo\UI\EditorImageBrowserSchemaModelFieldsSize|array`




#### Example  - using string
    <?php
    $fields = new \Kendo\UI\EditorImageBrowserSchemaModelFields();
    $fields->size('value');
    ?>


#### Example - using [\Kendo\UI\EditorImageBrowserSchemaModelFieldsSize](/api/wrappers/php/Kendo/UI/EditorImageBrowserSchemaModelFieldsSize)
    <?php
    $fields = new \Kendo\UI\EditorImageBrowserSchemaModelFields();
    $size = new \Kendo\UI\EditorImageBrowserSchemaModelFieldsSize();
    $field = 'value';
    $size->field($field);
    $fields->size($size);
    ?>

#### Example - using array

    <?php
    $fields = new \Kendo\UI\EditorImageBrowserSchemaModelFields();
    $field = 'value';
    $fields->size(array('field' => $field));
    ?>

### type

The field which contains the type of the entry. Either f for image or d for directory.

#### Returns
`\Kendo\UI\EditorImageBrowserSchemaModelFields`

#### Parameters

##### $value `string|\Kendo\UI\EditorImageBrowserSchemaModelFieldsType|array`




#### Example  - using string
    <?php
    $fields = new \Kendo\UI\EditorImageBrowserSchemaModelFields();
    $fields->type('value');
    ?>


#### Example - using [\Kendo\UI\EditorImageBrowserSchemaModelFieldsType](/api/wrappers/php/Kendo/UI/EditorImageBrowserSchemaModelFieldsType)
    <?php
    $fields = new \Kendo\UI\EditorImageBrowserSchemaModelFields();
    $type = new \Kendo\UI\EditorImageBrowserSchemaModelFieldsType();
    $field = 'value';
    $type->field($field);
    $fields->type($type);
    ?>

#### Example - using array

    <?php
    $fields = new \Kendo\UI\EditorImageBrowserSchemaModelFields();
    $field = 'value';
    $fields->type(array('field' => $field));
    ?>

