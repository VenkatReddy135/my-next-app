---
title: DataSourceTransportUpdate
slug: php-data-datasourcetransportupdate
tags: api, php
publish: true
---

# \Kendo\Data\DataSourceTransportUpdate

A PHP class representing the update setting of DataSourceTransport.


## Methods

### cache
If set to false the request result will not be cached by the browser. Setting cache to false will only work correctly with HEAD and GET requests. It works by appending "_={timestamp}" to the GET parameters.
By default "jsonp" requests are not cached.Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\Data\DataSourceTransportUpdate`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $update = new \Kendo\Data\DataSourceTransportUpdate();
    $update->cache(true);
    ?>

### contentType
The content-type HTTP header sent to the server. Default is "application/x-www-form-urlencoded". Use "application/json" if the content is JSON.
Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\Data\DataSourceTransportUpdate`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $update = new \Kendo\Data\DataSourceTransportUpdate();
    $update->contentType('value');
    ?>

### data
Additional parameters which are sent to the remote service.Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\Data\DataSourceTransportUpdate`

#### Parameters

##### $value `|\Kendo\JavaScriptFunction`



#### Example  - using 
    <?php
    $update = new \Kendo\Data\DataSourceTransportUpdate();
    $update->data(new ());
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $update = new \Kendo\Data\DataSourceTransportUpdate();
    $update->data(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### dataType
The type of result expected from the server. Commonly used values are "json" and "jsonp".Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\Data\DataSourceTransportUpdate`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $update = new \Kendo\Data\DataSourceTransportUpdate();
    $update->dataType('value');
    ?>

### type
The type of request to make ("POST", "GET", "PUT" or "DELETE"), default is "GET".Refer to the jQuery.ajax documentation for further info.

#### Returns
`\Kendo\Data\DataSourceTransportUpdate`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $update = new \Kendo\Data\DataSourceTransportUpdate();
    $update->type('value');
    ?>

### url
The URL to which the request is sent.If set to function the data source will invoke it and use the result as the URL.

#### Returns
`\Kendo\Data\DataSourceTransportUpdate`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $update = new \Kendo\Data\DataSourceTransportUpdate();
    $update->url('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $update = new \Kendo\Data\DataSourceTransportUpdate();
    $update->url(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

