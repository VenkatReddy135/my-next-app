---
title: EditorImageBrowser
slug: php-ui-editorimagebrowser
tags: api, php
publish: true
---

# \Kendo\UI\EditorImageBrowser

A PHP class representing the imageBrowser setting of Editor.


## Methods

### fileTypes
Defines the allowed file extensions.

#### Returns
`\Kendo\UI\EditorImageBrowser`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $imageBrowser = new \Kendo\UI\EditorImageBrowser();
    $imageBrowser->fileTypes('value');
    ?>

### messages

Defines texts shown within the image browser.

#### Returns
`\Kendo\UI\EditorImageBrowser`

#### Parameters

##### $value `\Kendo\UI\EditorImageBrowserMessages|array`


#### Example - using [\Kendo\UI\EditorImageBrowserMessages](/api/wrappers/php/Kendo/UI/EditorImageBrowserMessages)
    <?php
    $imageBrowser = new \Kendo\UI\EditorImageBrowser();
    $messages = new \Kendo\UI\EditorImageBrowserMessages();
    $deleteFile = 'value';
    $messages->deleteFile($deleteFile);
    $imageBrowser->messages($messages);
    ?>

#### Example - using array

    <?php
    $imageBrowser = new \Kendo\UI\EditorImageBrowser();
    $deleteFile = 'value';
    $imageBrowser->messages(array('deleteFile' => $deleteFile));
    ?>

### path
Defines the initial folder to display, relative to the root.

#### Returns
`\Kendo\UI\EditorImageBrowser`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $imageBrowser = new \Kendo\UI\EditorImageBrowser();
    $imageBrowser->path('value');
    ?>

### schema

Set the object responsible for describing the image raw data format.

#### Returns
`\Kendo\UI\EditorImageBrowser`

#### Parameters

##### $value `\Kendo\UI\EditorImageBrowserSchema|array`


#### Example - using [\Kendo\UI\EditorImageBrowserSchema](/api/wrappers/php/Kendo/UI/EditorImageBrowserSchema)
    <?php
    $imageBrowser = new \Kendo\UI\EditorImageBrowser();
    $schema = new \Kendo\UI\EditorImageBrowserSchema();
    $model = new \Kendo\UI\EditorImageBrowserSchemaModel();
    $schema->model($model);
    $imageBrowser->schema($schema);
    ?>

#### Example - using array

    <?php
    $imageBrowser = new \Kendo\UI\EditorImageBrowser();
    $model = new \Kendo\UI\EditorImageBrowserSchemaModel();
    $imageBrowser->schema(array('model' => $model));
    ?>

### transport

Specifies the settings for loading and saving data.

#### Returns
`\Kendo\UI\EditorImageBrowser`

#### Parameters

##### $value `\Kendo\UI\EditorImageBrowserTransport|array`


#### Example - using [\Kendo\UI\EditorImageBrowserTransport](/api/wrappers/php/Kendo/UI/EditorImageBrowserTransport)
    <?php
    $imageBrowser = new \Kendo\UI\EditorImageBrowser();
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $create = 'value';
    $transport->create($create);
    $imageBrowser->transport($transport);
    ?>

#### Example - using array

    <?php
    $imageBrowser = new \Kendo\UI\EditorImageBrowser();
    $create = 'value';
    $imageBrowser->transport(array('create' => $create));
    ?>

