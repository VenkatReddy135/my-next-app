---
title: EditorImageBrowserTransportRead
slug: php-ui-editorimagebrowsertransportread
tags: api, php
publish: true
---

# \Kendo\UI\EditorImageBrowserTransportRead

A PHP class representing the read setting of EditorImageBrowserTransport.


## Methods

### contentType
The content-type HTTP header sent to the server. Use "application/json" if the content is JSON.
Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportRead`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $read = new \Kendo\UI\EditorImageBrowserTransportRead();
    $read->contentType('value');
    ?>

### data
Data to be send to the server.
Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportRead`

#### Parameters

##### $value `|string|\Kendo\JavaScriptFunction`



#### Example  - using 
    <?php
    $read = new \Kendo\UI\EditorImageBrowserTransportRead();
    $read->data(new ());
    ?>

#### Example  - using string
    <?php
    $read = new \Kendo\UI\EditorImageBrowserTransportRead();
    $read->data('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $read = new \Kendo\UI\EditorImageBrowserTransportRead();
    $read->data(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### dataType
The type of data that you're expecting back from the server. Commonly used values are "json" and "jsonp".
Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportRead`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $read = new \Kendo\UI\EditorImageBrowserTransportRead();
    $read->dataType('value');
    ?>

### type
The type of request to make ("POST", "GET", "PUT" or "DELETE"), default is "GET".
Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportRead`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $read = new \Kendo\UI\EditorImageBrowserTransportRead();
    $read->type('value');
    ?>

### url
The remote url to call when fetching list of items.

#### Returns
`\Kendo\UI\EditorImageBrowserTransportRead`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $read = new \Kendo\UI\EditorImageBrowserTransportRead();
    $read->url('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $read = new \Kendo\UI\EditorImageBrowserTransportRead();
    $read->url(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

