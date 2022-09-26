---
title: upload
slug: jsp-upload
tags: api, java
publish: true
---

# \<kendo:upload\>
A JSP wrapper for Kendo UI [Upload](/api/web/upload).

## Configuration Attributes

### enabled `boolean`

Enables (true) or disables (false) an Upload. A disabled
Upload may be re-enabled via enable().

#### Example
    <kendo:upload enabled="enabled">
    </kendo:upload>

### files `java.lang.Object`

List of files to be initially rendered in the Upload widget files list.

#### Example
    <kendo:upload files="files">
    </kendo:upload>

### multiple `boolean`

Enables (true) or disables (false) the ability to select multiple files.
If false, users will be able to select only one file at a time. Note: This option does not
limit the total number of uploaded files in an asynchronous configuration.

#### Example
    <kendo:upload multiple="multiple">
    </kendo:upload>

### showFileList `boolean`

Enables (true) or disables (false) the ability to display a file listing
for uploading a file(s). Disabling a file listing may be useful you wish to customize the UI; use the
client-side events to build your own UI.

#### Example
    <kendo:upload showFileList="showFileList">
    </kendo:upload>

### template `java.lang.String`

The template used to render the files in the list

#### Example
    <kendo:upload template="template">
    </kendo:upload>


##  Configuration JSP Tags

### kendo:upload-async

Configures the ability to upload a file(s) in an asynchronous manner. Please refer to the
async mode help topic
for more details.

More documentation is available at [kendo:upload-async](upload/async).

#### Example

    <kendo:upload>
        <kendo:upload-async></kendo:upload-async>
    </kendo:upload>

### kendo:upload-localization

Sets the strings rendered by the Upload.

More documentation is available at [kendo:upload-localization](upload/localization).

#### Example

    <kendo:upload>
        <kendo:upload-localization></kendo:upload-localization>
    </kendo:upload>


## Event Attributes

### cancel `String`

Fires when the upload has been cancelled while in progress.Note: The cancel event fires only when the upload is in
async mode.


For additional information check the [cancel](/api/web/upload#events-cancel) event documentation.

#### Example
    <kendo:upload cancel="handle_cancel">
    </kendo:upload>
    <script>
        function handle_cancel(e) {
            // Code to handle the cancel event.
        }
    </script>

### complete `String`

Fires when all active uploads have completed either successfully or with errors.Note: The complete event fires only when the upload is in
async mode.


For additional information check the [complete](/api/web/upload#events-complete) event documentation.

#### Example
    <kendo:upload complete="handle_complete">
    </kendo:upload>
    <script>
        function handle_complete(e) {
            // Code to handle the complete event.
        }
    </script>

### error `String`

Fires when an upload / remove operation has failed.Note: The error event fires only when the upload is in
async mode.


For additional information check the [error](/api/web/upload#events-error) event documentation.

#### Example
    <kendo:upload error="handle_error">
    </kendo:upload>
    <script>
        function handle_error(e) {
            // Code to handle the error event.
        }
    </script>

### progress `String`

Fires when upload progress data is available.Note: The progress event fires only when the upload is in
async mode.Note: The progress event is not fired in IE.
See Supported Browsers


For additional information check the [progress](/api/web/upload#events-progress) event documentation.

#### Example
    <kendo:upload progress="handle_progress">
    </kendo:upload>
    <script>
        function handle_progress(e) {
            // Code to handle the progress event.
        }
    </script>

### remove `String`

Fires when an uploaded file is about to be removed.
Cancelling the event will prevent the remove.


For additional information check the [remove](/api/web/upload#events-remove) event documentation.

#### Example
    <kendo:upload remove="handle_remove">
    </kendo:upload>
    <script>
        function handle_remove(e) {
            // Code to handle the remove event.
        }
    </script>

### select `String`

Triggered when a file(s) is selected. Note: Cancelling this event will prevent the selection from
occurring.


For additional information check the [select](/api/web/upload#events-select) event documentation.

#### Example
    <kendo:upload select="handle_select">
    </kendo:upload>
    <script>
        function handle_select(e) {
            // Code to handle the select event.
        }
    </script>

### success `String`

Fires when an upload / remove operation has been completed successfully.Note: The success event fires only when the upload is in
async mode.


For additional information check the [success](/api/web/upload#events-success) event documentation.

#### Example
    <kendo:upload success="handle_success">
    </kendo:upload>
    <script>
        function handle_success(e) {
            // Code to handle the success event.
        }
    </script>

### upload `String`

Fires when one or more files are about to be uploaded.
Cancelling the event will prevent the upload.Note: The upload event fires only when the upload is in
async mode.


For additional information check the [upload](/api/web/upload#events-upload) event documentation.

#### Example
    <kendo:upload upload="handle_upload">
    </kendo:upload>
    <script>
        function handle_upload(e) {
            // Code to handle the upload event.
        }
    </script>

## Event Tags

### kendo:upload-cancel

Fires when the upload has been cancelled while in progress.Note: The cancel event fires only when the upload is in
async mode.


For additional information check the [cancel](/api/web/upload#events-cancel) event documentation.

#### Example
    <kendo:upload>
        <kendo:upload-cancel>
            <script>
                function(e) {
                    // Code to handle the cancel event.
                }
            </script>
        </kendo:upload-cancel>
    </kendo:upload>

### kendo:upload-complete

Fires when all active uploads have completed either successfully or with errors.Note: The complete event fires only when the upload is in
async mode.


For additional information check the [complete](/api/web/upload#events-complete) event documentation.

#### Example
    <kendo:upload>
        <kendo:upload-complete>
            <script>
                function(e) {
                    // Code to handle the complete event.
                }
            </script>
        </kendo:upload-complete>
    </kendo:upload>

### kendo:upload-error

Fires when an upload / remove operation has failed.Note: The error event fires only when the upload is in
async mode.


For additional information check the [error](/api/web/upload#events-error) event documentation.

#### Example
    <kendo:upload>
        <kendo:upload-error>
            <script>
                function(e) {
                    // Code to handle the error event.
                }
            </script>
        </kendo:upload-error>
    </kendo:upload>

### kendo:upload-progress

Fires when upload progress data is available.Note: The progress event fires only when the upload is in
async mode.Note: The progress event is not fired in IE.
See Supported Browsers


For additional information check the [progress](/api/web/upload#events-progress) event documentation.

#### Example
    <kendo:upload>
        <kendo:upload-progress>
            <script>
                function(e) {
                    // Code to handle the progress event.
                }
            </script>
        </kendo:upload-progress>
    </kendo:upload>

### kendo:upload-remove

Fires when an uploaded file is about to be removed.
Cancelling the event will prevent the remove.


For additional information check the [remove](/api/web/upload#events-remove) event documentation.

#### Example
    <kendo:upload>
        <kendo:upload-remove>
            <script>
                function(e) {
                    // Code to handle the remove event.
                }
            </script>
        </kendo:upload-remove>
    </kendo:upload>

### kendo:upload-select

Triggered when a file(s) is selected. Note: Cancelling this event will prevent the selection from
occurring.


For additional information check the [select](/api/web/upload#events-select) event documentation.

#### Example
    <kendo:upload>
        <kendo:upload-select>
            <script>
                function(e) {
                    // Code to handle the select event.
                }
            </script>
        </kendo:upload-select>
    </kendo:upload>

### kendo:upload-success

Fires when an upload / remove operation has been completed successfully.Note: The success event fires only when the upload is in
async mode.


For additional information check the [success](/api/web/upload#events-success) event documentation.

#### Example
    <kendo:upload>
        <kendo:upload-success>
            <script>
                function(e) {
                    // Code to handle the success event.
                }
            </script>
        </kendo:upload-success>
    </kendo:upload>

### kendo:upload-upload

Fires when one or more files are about to be uploaded.
Cancelling the event will prevent the upload.Note: The upload event fires only when the upload is in
async mode.


For additional information check the [upload](/api/web/upload#events-upload) event documentation.

#### Example
    <kendo:upload>
        <kendo:upload-upload>
            <script>
                function(e) {
                    // Code to handle the upload event.
                }
            </script>
        </kendo:upload-upload>
    </kendo:upload>

