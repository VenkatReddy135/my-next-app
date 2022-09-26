---
title: upload-async
slug: jsp-upload-async
tags: api, java
publish: true
---

# \<kendo:upload-async\>

Configures the ability to upload a file(s) in an asynchronous manner. Please refer to the
async mode help topic
for more details.

#### Example
    <kendo:upload>
        <kendo:upload-async></kendo:upload-async>
    </kendo:upload>

## Configuration Attributes

### autoUpload `boolean`

The selected files will be uploaded immediately by default. You can change this behavior by setting
autoUpload to false.

#### Example
    <kendo:upload-async autoUpload="autoUpload">
    </kendo:upload-async>

### batch `boolean`

The selected files will be uploaded in separate requests, if this is supported by the browser.
You can change this behavior by setting batch to true.

#### Example
    <kendo:upload-async batch="batch">
    </kendo:upload-async>

### removeField `java.lang.String`

The name of the form field submitted to the Remove URL.

#### Example
    <kendo:upload-async removeField="removeField">
    </kendo:upload-async>

### removeUrl `java.lang.String`

The URL of the handler responsible for removing uploaded files (if any). The handler must accept POST
requests containing one or more "fileNames" fields specifying the files to be deleted.

#### Example
    <kendo:upload-async removeUrl="removeUrl">
    </kendo:upload-async>

### removeVerb `java.lang.String`

The HTTP verb to be used by the remove action.

#### Example
    <kendo:upload-async removeVerb="removeVerb">
    </kendo:upload-async>

### saveField `java.lang.String`

The name of the form field submitted to the save URL. The default value is the input name.

#### Example
    <kendo:upload-async saveField="saveField">
    </kendo:upload-async>

### saveUrl `java.lang.String`

The URL of the handler that will receive the submitted files. The handler must accept POST requests
containing one or more fields with the same name as the original input name.

#### Example
    <kendo:upload-async saveUrl="saveUrl">
    </kendo:upload-async>

