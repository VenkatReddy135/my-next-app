---
title: DataSource
slug: php-data-datasource
tags: api, php
publish: true
---

# \Kendo\Data\DataSource

A PHP wrapper for Kendo UI [DataSource](/api/framework/datasource).


## Methods

### addAggregateItem

Adds one or more DataSourceAggregateItem to the DataSource.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Data\DataSourceAggregateItem|array`

#### Example - using \Kendo\Data\DataSourceAggregateItem

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $aggregateItem = new \Kendo\Data\DataSourceAggregateItem();
    $aggregate = 'value';
    $aggregateItem->aggregate($aggregate);
    $dataSource->addAggregateItem($aggregateItem);
    ?>

#### Example - using array

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $aggregate = 'value';
    $dataSource->addAggregateItem(array('aggregate' => $aggregate));
    ?>

#### Example - adding more than one DataSourceAggregateItem

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $first  = new \Kendo\Data\DataSourceAggregateItem();
    $second = new \Kendo\Data\DataSourceAggregateItem();
    $dataSource->addAggregateItem($first, $second);
    ?>

### autoSync
If set to true the data source would automatically save any changed data items by calling the sync method. By default changes are not automatically saved.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->autoSync(true);
    ?>

### batch
If set to true the data source will batch CRUD operation requests. For example updating two data items would cause one HTTP request instead of two. By default the data source
makes a HTTP request for every CRUD operation.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->batch(true);
    ?>

### change
Fired when the data source is populated from a JavaScript array or a remote service, a data item is inserted, updated or removed, the data items are paged, sorted, filtered or grouped.The event handler function context (available via the this keyword) will be set to the data source instance.
For additional information check the [change](/api/framework/datasource#events-change) event documentation.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### data
The array of data items which the data source contains. The data source will wrap those items as kendo.data.ObservableObject or kendo.data.Model (if schema.model is set).Can be set to a string value if the schema.type option is set to "xml".

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `array|string`



#### Example  - using array
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->data(new array());
    ?>

#### Example  - using string
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->data('value');
    ?>

### error
Fired when a request to the remote service fails.The event handler function context (available via the this keyword) will be set to the data source instance.
For additional information check the [error](/api/framework/datasource#events-error) event documentation.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->error('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onError(e) {
            // handle the error event.
        }
    </script>
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->error('onError');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->error(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### addFilterItem

Adds one or more DataSourceFilterItem to the DataSource.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Data\DataSourceFilterItem|array`

#### Example - using \Kendo\Data\DataSourceFilterItem

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $filterItem = new \Kendo\Data\DataSourceFilterItem();
    $field = 'value';
    $filterItem->field($field);
    $dataSource->addFilterItem($filterItem);
    ?>

#### Example - using array

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $field = 'value';
    $dataSource->addFilterItem(array('field' => $field));
    ?>

#### Example - adding more than one DataSourceFilterItem

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $first  = new \Kendo\Data\DataSourceFilterItem();
    $second = new \Kendo\Data\DataSourceFilterItem();
    $dataSource->addFilterItem($first, $second);
    ?>

### addGroupItem

Adds one or more DataSourceGroupItem to the DataSource.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Data\DataSourceGroupItem|array`

#### Example - using \Kendo\Data\DataSourceGroupItem

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $groupItem = new \Kendo\Data\DataSourceGroupItem();
    $dir = 'value';
    $groupItem->dir($dir);
    $dataSource->addGroupItem($groupItem);
    ?>

#### Example - using array

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dir = 'value';
    $dataSource->addGroupItem(array('dir' => $dir));
    ?>

#### Example - adding more than one DataSourceGroupItem

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $first  = new \Kendo\Data\DataSourceGroupItem();
    $second = new \Kendo\Data\DataSourceGroupItem();
    $dataSource->addGroupItem($first, $second);
    ?>

### page
The page of data which the data source will return when the view method is invoked or request from the remote service.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->page(1);
    ?>

### pageSize
The number of data items per page.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->pageSize(1);
    ?>

### requestEnd
Fired when a remote service request is finished.The event handler function context (available via the this keyword) will be set to the data source instance.
For additional information check the [requestEnd](/api/framework/datasource#events-requestEnd) event documentation.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->requestEnd('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onRequestEnd(e) {
            // handle the requestEnd event.
        }
    </script>
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->requestEnd('onRequestEnd');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->requestEnd(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### requestStart
Fired when the data source makes a remote service request.The event handler function context (available via the this keyword) will be set to the data source instance.
For additional information check the [requestStart](/api/framework/datasource#events-requestStart) event documentation.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->requestStart('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onRequestStart(e) {
            // handle the requestStart event.
        }
    </script>
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->requestStart('onRequestStart');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->requestStart(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### schema

The configuration used to parse the remote service response.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `\Kendo\Data\DataSourceSchema|array`


#### Example - using [\Kendo\Data\DataSourceSchema](/api/wrappers/php/Kendo/Data/DataSourceSchema)
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $schema = new \Kendo\Data\DataSourceSchema();
    $type = 'value';
    $schema->type($type);
    $dataSource->schema($schema);
    ?>

#### Example - using array

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $type = 'value';
    $dataSource->schema(array('type' => $type));
    ?>

### serverAggregates
If set to true the data source will leave the aggregate calculation to the remote service. By default the data source calculates aggregates client-side.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->serverAggregates(true);
    ?>

### serverFiltering
If set to true the data source will leave the filtering implementation to the remote service. By default the data source performs filtering client-side.By default the filter is sent to the server following jQuery's conventions.For example the filter { logic: "and", filters: [ { field: "name", operator: "startswith", value: "Jane" } ] } is sent as:Use the parameterMap option to send the filter option in a different format.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->serverFiltering(true);
    ?>

### serverGrouping
If set to true the data source will leave the grouping implementation to the remote service. By default the data source performs grouping client-side.By default the group is sent to the server following jQuery's conventions.For example the group { field: "category", dir: "desc" } is sent as:Use the parameterMap option to send the group option in a different format.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->serverGrouping(true);
    ?>

### serverPaging
If set to true the data source will leave the data item paging implementation to the remote service. By default the data source performs paging client-side.The following options are sent to the server when server paging is enabled:Use the parameterMap option to send the paging options in a different format.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->serverPaging(true);
    ?>

### serverSorting
If set to true the data source will leave the data item sorting implementation to the remote service. By default the data source performs sorting client-side.By default the sort is sent to the server following jQuery's conventions.For example the sort { field: "age", dir: "desc" } is sent as:Use the parameterMap option to send the paging options in a different format.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->serverSorting(true);
    ?>

### addSortItem

Adds one or more DataSourceSortItem to the DataSource.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Data\DataSourceSortItem|array`

#### Example - using \Kendo\Data\DataSourceSortItem

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $sortItem = new \Kendo\Data\DataSourceSortItem();
    $dir = 'value';
    $sortItem->dir($dir);
    $dataSource->addSortItem($sortItem);
    ?>

#### Example - using array

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dir = 'value';
    $dataSource->addSortItem(array('dir' => $dir));
    ?>

#### Example - adding more than one DataSourceSortItem

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $first  = new \Kendo\Data\DataSourceSortItem();
    $second = new \Kendo\Data\DataSourceSortItem();
    $dataSource->addSortItem($first, $second);
    ?>

### sync
Fired after the data source saves data item changes. The data source saves the data item changes when the sync method is called.The event handler function context (available via the this keyword) will be set to the data source instance.
For additional information check the [sync](/api/framework/datasource#events-sync) event documentation.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->sync('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSync(e) {
            // handle the sync event.
        }
    </script>
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->sync('onSync');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->sync(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### transport

The configuration used to load and save the data items. A data source is remote or local based on the way of it retrieves data items.Remote data sources load and save data items from and to a remote end-point (a.k.a. remote service or server). The transport option describes the remote service configuration - URL, HTTP verb, HTTP headers etc.
The transport option can also be used to implement custom data loading and saving.Local data sources are bound to a JavaScript array via the data option.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `\Kendo\Data\DataSourceTransport|array`


#### Example - using [\Kendo\Data\DataSourceTransport](/api/wrappers/php/Kendo/Data/DataSourceTransport)
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $transport = new \Kendo\Data\DataSourceTransport();
    $create = 'value';
    $transport->create($create);
    $dataSource->transport($transport);
    ?>

#### Example - using array

    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $create = 'value';
    $dataSource->transport(array('create' => $create));
    ?>

### type
If set the data source will use a predefined transport and/or schema. The only supported value is "odata" which supports the OData v.2 protocol.

#### Returns
`\Kendo\Data\DataSource`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dataSource = new \Kendo\Data\DataSource('DataSource');
    $dataSource->type('value');
    ?>

