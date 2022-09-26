---
title: EditorImageBrowserTransport
slug: php-ui-editorimagebrowsertransport
tags: api, php
publish: true
---

# \Kendo\UI\EditorImageBrowserTransport

A PHP class representing the transport setting of EditorImageBrowser.


## Methods

### create

Options or URL which will handle the directory creation. If not specified that create new folder button will not be present.

#### Returns
`\Kendo\UI\EditorImageBrowserTransport`

#### Parameters

##### $value `string|\Kendo\UI\EditorImageBrowserTransportCreate|array`




#### Example  - using string
    <?php
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $transport->create('value');
    ?>


#### Example - using [\Kendo\UI\EditorImageBrowserTransportCreate](/api/wrappers/php/Kendo/UI/EditorImageBrowserTransportCreate)
    <?php
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $create = new \Kendo\UI\EditorImageBrowserTransportCreate();
    $contentType = 'value';
    $create->contentType($contentType);
    $transport->create($create);
    ?>

#### Example - using array

    <?php
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $contentType = 'value';
    $transport->create(array('contentType' => $contentType));
    ?>

### destroy

Options or URL which will handle the file and directory deletion. If not specified the delete button will not be present.

#### Returns
`\Kendo\UI\EditorImageBrowserTransport`

#### Parameters

##### $value `string|\Kendo\UI\EditorImageBrowserTransportDestroy|array`




#### Example  - using string
    <?php
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $transport->destroy('value');
    ?>


#### Example - using [\Kendo\UI\EditorImageBrowserTransportDestroy](/api/wrappers/php/Kendo/UI/EditorImageBrowserTransportDestroy)
    <?php
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $destroy = new \Kendo\UI\EditorImageBrowserTransportDestroy();
    $contentType = 'value';
    $destroy->contentType($contentType);
    $transport->destroy($destroy);
    ?>

#### Example - using array

    <?php
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $contentType = 'value';
    $transport->destroy(array('contentType' => $contentType));
    ?>

### imageUrl
The URL responsible for serving the original image. A file name placeholder should be specified.

#### Returns
`\Kendo\UI\EditorImageBrowserTransport`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $transport->imageUrl('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $transport->imageUrl(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### read

Options or URL for remote image retrieval.

#### Returns
`\Kendo\UI\EditorImageBrowserTransport`

#### Parameters

##### $value `string|\Kendo\UI\EditorImageBrowserTransportRead|array`




#### Example  - using string
    <?php
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $transport->read('value');
    ?>


#### Example - using [\Kendo\UI\EditorImageBrowserTransportRead](/api/wrappers/php/Kendo/UI/EditorImageBrowserTransportRead)
    <?php
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $read = new \Kendo\UI\EditorImageBrowserTransportRead();
    $contentType = 'value';
    $read->contentType($contentType);
    $transport->read($read);
    ?>

#### Example - using array

    <?php
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $contentType = 'value';
    $transport->read(array('contentType' => $contentType));
    ?>

### thumbnailUrl
The URL for retrieving the thumbnail version of the image. If not specified a default image icon will be shown.
If function is assigned, the current path and image name will be provided.

#### Returns
`\Kendo\UI\EditorImageBrowserTransport`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $transport->thumbnailUrl('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $transport->thumbnailUrl(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### uploadUrl
The URL which will handle the upload of the new images. If not specified the Upload button will not be displayed.

#### Returns
`\Kendo\UI\EditorImageBrowserTransport`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $transport = new \Kendo\UI\EditorImageBrowserTransport();
    $transport->uploadUrl('value');
    ?>

