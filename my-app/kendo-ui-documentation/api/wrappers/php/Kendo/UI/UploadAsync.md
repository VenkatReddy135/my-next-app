---
title: UploadAsync
slug: php-ui-uploadasync
tags: api, php
publish: true
---

# \Kendo\UI\UploadAsync

A PHP class representing the async setting of Upload.


## Methods

### autoUpload
The selected files will be uploaded immediately by default. You can change this behavior by setting
autoUpload to false.

#### Returns
`\Kendo\UI\UploadAsync`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $async = new \Kendo\UI\UploadAsync();
    $async->autoUpload(true);
    ?>

### batch
The selected files will be uploaded in separate requests, if this is supported by the browser.
You can change this behavior by setting batch to true.

#### Returns
`\Kendo\UI\UploadAsync`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $async = new \Kendo\UI\UploadAsync();
    $async->batch(true);
    ?>

### removeField
The name of the form field submitted to the Remove URL.

#### Returns
`\Kendo\UI\UploadAsync`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $async = new \Kendo\UI\UploadAsync();
    $async->removeField('value');
    ?>

### removeUrl
The URL of the handler responsible for removing uploaded files (if any). The handler must accept POST
requests containing one or more "fileNames" fields specifying the files to be deleted.

#### Returns
`\Kendo\UI\UploadAsync`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $async = new \Kendo\UI\UploadAsync();
    $async->removeUrl('value');
    ?>

### removeVerb
The HTTP verb to be used by the remove action.

#### Returns
`\Kendo\UI\UploadAsync`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $async = new \Kendo\UI\UploadAsync();
    $async->removeVerb('value');
    ?>

### saveField
The name of the form field submitted to the save URL. The default value is the input name.

#### Returns
`\Kendo\UI\UploadAsync`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $async = new \Kendo\UI\UploadAsync();
    $async->saveField('value');
    ?>

### saveUrl
The URL of the handler that will receive the submitted files. The handler must accept POST requests
containing one or more fields with the same name as the original input name.

#### Returns
`\Kendo\UI\UploadAsync`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $async = new \Kendo\UI\UploadAsync();
    $async->saveUrl('value');
    ?>

