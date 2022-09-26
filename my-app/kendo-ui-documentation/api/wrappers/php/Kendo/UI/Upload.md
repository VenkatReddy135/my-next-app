---
title: Upload
slug: php-ui-upload
tags: api, php
publish: true
---

# \Kendo\UI\Upload

A PHP wrapper for Kendo UI [Upload](/api/web/upload).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use Upload in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo Upload

    <?php
    // Create a new instance of Upload and specify its id
    $upload = new \Kendo\UI\Upload('Upload');

    // Configure it
    $upload->enabled(true)

    // Output it

    echo $upload->render();
    ?>


## Methods

### async

Configures the ability to upload a file(s) in an asynchronous manner. Please refer to the
async mode help topic
for more details.

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `\Kendo\UI\UploadAsync|array`


#### Example - using [\Kendo\UI\UploadAsync](/api/wrappers/php/Kendo/UI/UploadAsync)
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $async = new \Kendo\UI\UploadAsync();
    $autoUpload = true;
    $async->autoUpload($autoUpload);
    $upload->async($async);
    ?>

#### Example - using array

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $autoUpload = true;
    $upload->async(array('autoUpload' => $autoUpload));
    ?>

### cancel
Fires when the upload has been cancelled while in progress.Note: The cancel event fires only when the upload is in
async mode.
For additional information check the [cancel](/api/web/upload#events-cancel) event documentation.

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->cancel('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onCancel(e) {
            // handle the cancel event.
        }
    </script>
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->cancel('onCancel');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->cancel(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### complete
Fires when all active uploads have completed either successfully or with errors.Note: The complete event fires only when the upload is in
async mode.
For additional information check the [complete](/api/web/upload#events-complete) event documentation.

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->complete('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onComplete(e) {
            // handle the complete event.
        }
    </script>
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->complete('onComplete');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->complete(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### enabled
Enables (true) or disables (false) an Upload. A disabled
Upload may be re-enabled via enable().

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->enabled(true);
    ?>

### error
Fires when an upload / remove operation has failed.Note: The error event fires only when the upload is in
async mode.
For additional information check the [error](/api/web/upload#events-error) event documentation.

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->error('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onError(e) {
            // handle the error event.
        }
    </script>
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->error('onError');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->error(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### files
List of files to be initially rendered in the Upload widget files list.

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->files(new array());
    ?>

### localization

Sets the strings rendered by the Upload.

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `\Kendo\UI\UploadLocalization|array`


#### Example - using [\Kendo\UI\UploadLocalization](/api/wrappers/php/Kendo/UI/UploadLocalization)
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $localization = new \Kendo\UI\UploadLocalization();
    $cancel = 'value';
    $localization->cancel($cancel);
    $upload->localization($localization);
    ?>

#### Example - using array

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $cancel = 'value';
    $upload->localization(array('cancel' => $cancel));
    ?>

### multiple
Enables (true) or disables (false) the ability to select multiple files.
If false, users will be able to select only one file at a time. Note: This option does not
limit the total number of uploaded files in an asynchronous configuration.

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->multiple(true);
    ?>

### progress
Fires when upload progress data is available.Note: The progress event fires only when the upload is in
async mode.Note: The progress event is not fired in IE.
See Supported Browsers
For additional information check the [progress](/api/web/upload#events-progress) event documentation.

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->progress('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onProgress(e) {
            // handle the progress event.
        }
    </script>
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->progress('onProgress');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->progress(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### remove
Fires when an uploaded file is about to be removed.
Cancelling the event will prevent the remove.
For additional information check the [remove](/api/web/upload#events-remove) event documentation.

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->remove('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onRemove(e) {
            // handle the remove event.
        }
    </script>
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->remove('onRemove');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->remove(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### select
Triggered when a file(s) is selected. Note: Cancelling this event will prevent the selection from
occurring.
For additional information check the [select](/api/web/upload#events-select) event documentation.

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->select('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelect(e) {
            // handle the select event.
        }
    </script>
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->select('onSelect');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->select(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### showFileList
Enables (true) or disables (false) the ability to display a file listing
for uploading a file(s). Disabling a file listing may be useful you wish to customize the UI; use the
client-side events to build your own UI.

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->showFileList(true);
    ?>

### success
Fires when an upload / remove operation has been completed successfully.Note: The success event fires only when the upload is in
async mode.
For additional information check the [success](/api/web/upload#events-success) event documentation.

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->success('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSuccess(e) {
            // handle the success event.
        }
    </script>
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->success('onSuccess');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->success(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### template
The template used to render the files in the list

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### upload
Fires when one or more files are about to be uploaded.
Cancelling the event will prevent the upload.Note: The upload event fires only when the upload is in
async mode.
For additional information check the [upload](/api/web/upload#events-upload) event documentation.

#### Returns
`\Kendo\UI\Upload`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->upload('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onUpload(e) {
            // handle the upload event.
        }
    </script>
    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->upload('onUpload');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $upload = new \Kendo\UI\Upload('Upload');
    $upload->upload(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

