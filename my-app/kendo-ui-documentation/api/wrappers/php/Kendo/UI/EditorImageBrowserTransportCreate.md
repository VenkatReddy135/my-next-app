---
title: EditorImageBrowserTransportCreate
slug: php-ui-editorimagebrowsertransportcreate
tags: api, php
publish: true
---

# \Kendo\UI\EditorImageBrowserTransportCreate

A PHP class representing the create setting of EditorImageBrowserTransport.


## Methods

### contentType
The content-type HTTP header sent to the server. Default is "application/x-www-form-urlencoded". Use "application/json" if the content is JSON.
Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportCreate`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $create = new \Kendo\UI\EditorImageBrowserTransportCreate();
    $create->contentType('value');
    ?>

### data
Data to be send to the server.
Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportCreate`

#### Parameters

##### $value `|string|\Kendo\JavaScriptFunction`



#### Example  - using 
    <?php
    $create = new \Kendo\UI\EditorImageBrowserTransportCreate();
    $create->data(new ());
    ?>

#### Example  - using string
    <?php
    $create = new \Kendo\UI\EditorImageBrowserTransportCreate();
    $create->data('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $create = new \Kendo\UI\EditorImageBrowserTransportCreate();
    $create->data(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### dataType
The type of data that you're expecting back from the server. Commonly used values are "json" and "jsonp".
Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportCreate`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $create = new \Kendo\UI\EditorImageBrowserTransportCreate();
    $create->dataType('value');
    ?>

### type
The type of request to make ("POST", "GET", "PUT" or "DELETE"), default is "GET".
Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportCreate`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $create = new \Kendo\UI\EditorImageBrowserTransportCreate();
    $create->type('value');
    ?>

### url
The remote url to call when creating a new record.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportCreate`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $create = new \Kendo\UI\EditorImageBrowserTransportCreate();
    $create->url('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $create = new \Kendo\UI\EditorImageBrowserTransportCreate();
    $create->url(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

