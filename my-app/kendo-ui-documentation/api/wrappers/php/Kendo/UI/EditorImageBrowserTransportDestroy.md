---
title: EditorImageBrowserTransportDestroy
slug: php-ui-editorimagebrowsertransportdestroy
tags: api, php
publish: true
---

# \Kendo\UI\EditorImageBrowserTransportDestroy

A PHP class representing the destroy setting of EditorImageBrowserTransport.


## Methods

### contentType
The content-type HTTP header sent to the server. Default is "application/x-www-form-urlencoded". Use "application/json" if the content is JSON.
Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportDestroy`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $destroy = new \Kendo\UI\EditorImageBrowserTransportDestroy();
    $destroy->contentType('value');
    ?>

### data
Data to be send to the server.
Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportDestroy`

#### Parameters

##### $value `|string|\Kendo\JavaScriptFunction`



#### Example  - using 
    <?php
    $destroy = new \Kendo\UI\EditorImageBrowserTransportDestroy();
    $destroy->data(new ());
    ?>

#### Example  - using string
    <?php
    $destroy = new \Kendo\UI\EditorImageBrowserTransportDestroy();
    $destroy->data('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $destroy = new \Kendo\UI\EditorImageBrowserTransportDestroy();
    $destroy->data(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### dataType
The type of data that you're expecting back from the server. Commonly used values are "json" and "jsonp".
Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportDestroy`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $destroy = new \Kendo\UI\EditorImageBrowserTransportDestroy();
    $destroy->dataType('value');
    ?>

### type
The type of request to make ("POST", "GET", "PUT" or "DELETE"), default is "GET".
Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportDestroy`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $destroy = new \Kendo\UI\EditorImageBrowserTransportDestroy();
    $destroy->type('value');
    ?>

### url
The remote url to call when creating a new record.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportDestroy`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $destroy = new \Kendo\UI\EditorImageBrowserTransportDestroy();
    $destroy->url('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $destroy = new \Kendo\UI\EditorImageBrowserTransportDestroy();
    $destroy->url(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

