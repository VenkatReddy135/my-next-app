---
title: DataSourceTransport
slug: php-data-datasourcetransport
tags: api, php
publish: true
---

# \Kendo\Data\DataSourceTransport

A PHP class representing the transport setting of DataSource.


## Methods

### create

The configuration used when the data source saves newly created data items. Those are items added to the data source via the add or insert methods.If the value of transport.create is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.create is a string the data source uses this string as the URL of the remote service.

#### Returns
`\Kendo\Data\DataSourceTransport`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction|\Kendo\Data\DataSourceTransportCreate|array`




#### Example  - using string
    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $transport->create('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $transport->create(new \Kendo\JavaScriptFunction('function() { }'));
    ?>


#### Example - using [\Kendo\Data\DataSourceTransportCreate](/api/wrappers/php/Kendo/Data/DataSourceTransportCreate)
    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $create = new \Kendo\Data\DataSourceTransportCreate();
    $cache = true;
    $create->cache($cache);
    $transport->create($create);
    ?>

#### Example - using array

    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $cache = true;
    $transport->create(array('cache' => $cache));
    ?>

### destroy

The configuration used when the data source destroys data items. Those are items removed from the data source via the remove method.If the value of transport.destroy is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.destroy is a string the data source uses this string as the URL of the remote service.

#### Returns
`\Kendo\Data\DataSourceTransport`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction|\Kendo\Data\DataSourceTransportDestroy|array`




#### Example  - using string
    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $transport->destroy('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $transport->destroy(new \Kendo\JavaScriptFunction('function() { }'));
    ?>


#### Example - using [\Kendo\Data\DataSourceTransportDestroy](/api/wrappers/php/Kendo/Data/DataSourceTransportDestroy)
    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $destroy = new \Kendo\Data\DataSourceTransportDestroy();
    $cache = true;
    $destroy->cache($cache);
    $transport->destroy($destroy);
    ?>

#### Example - using array

    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $cache = true;
    $transport->destroy(array('cache' => $cache));
    ?>

### parameterMap
The function which converts the request parameters to a format suitable for the remote service. By default
the data source sends the parameters using jQuery's conventions.

#### Returns
`\Kendo\Data\DataSourceTransport`

#### Parameters

##### $value `\Kendo\JavaScriptFunction`



#### Example 
    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $transport->parameterMap(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### read

The configuration used when the data source loads data items from a remote service.If the value of transport.read is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.read is a string the data source uses this string as the URL of the remote service.

#### Returns
`\Kendo\Data\DataSourceTransport`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction|\Kendo\Data\DataSourceTransportRead|array`




#### Example  - using string
    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $transport->read('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $transport->read(new \Kendo\JavaScriptFunction('function() { }'));
    ?>


#### Example - using [\Kendo\Data\DataSourceTransportRead](/api/wrappers/php/Kendo/Data/DataSourceTransportRead)
    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $read = new \Kendo\Data\DataSourceTransportRead();
    $cache = true;
    $read->cache($cache);
    $transport->read($read);
    ?>

#### Example - using array

    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $cache = true;
    $transport->read(array('cache' => $cache));
    ?>

### update

The configuration used when the data source saves updated data items. Those are data items whose fields have been updated.If the value of transport.update is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.update is a string the data source uses this string as the URL of the remote service.

#### Returns
`\Kendo\Data\DataSourceTransport`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction|\Kendo\Data\DataSourceTransportUpdate|array`




#### Example  - using string
    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $transport->update('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $transport->update(new \Kendo\JavaScriptFunction('function() { }'));
    ?>


#### Example - using [\Kendo\Data\DataSourceTransportUpdate](/api/wrappers/php/Kendo/Data/DataSourceTransportUpdate)
    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $update = new \Kendo\Data\DataSourceTransportUpdate();
    $cache = true;
    $update->cache($cache);
    $transport->update($update);
    ?>

#### Example - using array

    <?php
    $transport = new \Kendo\Data\DataSourceTransport();
    $cache = true;
    $transport->update(array('cache' => $cache));
    ?>

