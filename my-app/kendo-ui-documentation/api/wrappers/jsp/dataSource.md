---
title: dataSource
slug: jsp-dataSource
tags: api, java
publish: true
---

# \<kendo:dataSource\>
A JSP wrapper for Kendo UI [DataSource](/api/framework/datasource).

## Configuration Attributes

### autoSync `boolean`

If set to true the data source would automatically save any changed data items by calling the sync method. By default changes are not automatically saved.

#### Example
    <kendo:dataSource autoSync="autoSync">
    </kendo:dataSource>

### batch `boolean`

If set to true the data source will batch CRUD operation requests. For example updating two data items would cause one HTTP request instead of two. By default the data source
makes a HTTP request for every CRUD operation.

#### Example
    <kendo:dataSource batch="batch">
    </kendo:dataSource>

### data `java.lang.Object`

The array of data items which the data source contains. The data source will wrap those items as kendo.data.ObservableObject or kendo.data.Model (if schema.model is set).Can be set to a string value if the schema.type option is set to "xml".

#### Example
    <kendo:dataSource data="data">
    </kendo:dataSource>

### page `float`

The page of data which the data source will return when the view method is invoked or request from the remote service.

#### Example
    <kendo:dataSource page="page">
    </kendo:dataSource>

### pageSize `float`

The number of data items per page.

#### Example
    <kendo:dataSource pageSize="pageSize">
    </kendo:dataSource>

### serverAggregates `boolean`

If set to true the data source will leave the aggregate calculation to the remote service. By default the data source calculates aggregates client-side.

#### Example
    <kendo:dataSource serverAggregates="serverAggregates">
    </kendo:dataSource>

### serverFiltering `boolean`

If set to true the data source will leave the filtering implementation to the remote service. By default the data source performs filtering client-side.By default the filter is sent to the server following jQuery's conventions.For example the filter { logic: "and", filters: [ { field: "name", operator: "startswith", value: "Jane" } ] } is sent as:Use the parameterMap option to send the filter option in a different format.

#### Example
    <kendo:dataSource serverFiltering="serverFiltering">
    </kendo:dataSource>

### serverGrouping `boolean`

If set to true the data source will leave the grouping implementation to the remote service. By default the data source performs grouping client-side.By default the group is sent to the server following jQuery's conventions.For example the group { field: "category", dir: "desc" } is sent as:Use the parameterMap option to send the group option in a different format.

#### Example
    <kendo:dataSource serverGrouping="serverGrouping">
    </kendo:dataSource>

### serverPaging `boolean`

If set to true the data source will leave the data item paging implementation to the remote service. By default the data source performs paging client-side.The following options are sent to the server when server paging is enabled:Use the parameterMap option to send the paging options in a different format.

#### Example
    <kendo:dataSource serverPaging="serverPaging">
    </kendo:dataSource>

### serverSorting `boolean`

If set to true the data source will leave the data item sorting implementation to the remote service. By default the data source performs sorting client-side.By default the sort is sent to the server following jQuery's conventions.For example the sort { field: "age", dir: "desc" } is sent as:Use the parameterMap option to send the paging options in a different format.

#### Example
    <kendo:dataSource serverSorting="serverSorting">
    </kendo:dataSource>

### type `java.lang.String`

If set the data source will use a predefined transport and/or schema. The only supported value is "odata" which supports the OData v.2 protocol.

#### Example
    <kendo:dataSource type="type">
    </kendo:dataSource>


##  Configuration JSP Tags

### kendo:dataSource-aggregate

The aggregate(s) which are calculated when the data source populates with data. The supported aggregates are "average", "count", "max", "min" and "sum".

More documentation is available at [kendo:dataSource-aggregate](datasource/aggregate).

#### Example

    <kendo:dataSource>
        <kendo:dataSource-aggregate></kendo:dataSource-aggregate>
    </kendo:dataSource>

### kendo:dataSource-filter

The filter(s) which is (are) applied over the data items. By default no filter is applied.

More documentation is available at [kendo:dataSource-filter](datasource/filter).

#### Example

    <kendo:dataSource>
        <kendo:dataSource-filter></kendo:dataSource-filter>
    </kendo:dataSource>

### kendo:dataSource-group

The grouping configuration of the data source. If set the data items will be grouped when the data source is populated. By default grouping is not applied.

More documentation is available at [kendo:dataSource-group](datasource/group).

#### Example

    <kendo:dataSource>
        <kendo:dataSource-group></kendo:dataSource-group>
    </kendo:dataSource>

### kendo:dataSource-schema

The configuration used to parse the remote service response.

More documentation is available at [kendo:dataSource-schema](datasource/schema).

#### Example

    <kendo:dataSource>
        <kendo:dataSource-schema></kendo:dataSource-schema>
    </kendo:dataSource>

### kendo:dataSource-sort

The sort order which will be applied over the data items. By default the data items are not sorted.

More documentation is available at [kendo:dataSource-sort](datasource/sort).

#### Example

    <kendo:dataSource>
        <kendo:dataSource-sort></kendo:dataSource-sort>
    </kendo:dataSource>

### kendo:dataSource-transport

The configuration used to load and save the data items. A data source is remote or local based on the way of it retrieves data items.Remote data sources load and save data items from and to a remote end-point (a.k.a. remote service or server). The transport option describes the remote service configuration - URL, HTTP verb, HTTP headers etc.
The transport option can also be used to implement custom data loading and saving.Local data sources are bound to a JavaScript array via the data option.

More documentation is available at [kendo:dataSource-transport](datasource/transport).

#### Example

    <kendo:dataSource>
        <kendo:dataSource-transport></kendo:dataSource-transport>
    </kendo:dataSource>


## Event Attributes

### change `String`

Fired when the data source is populated from a JavaScript array or a remote service, a data item is inserted, updated or removed, the data items are paged, sorted, filtered or grouped.The event handler function context (available via the this keyword) will be set to the data source instance.


For additional information check the [change](/api/framework/datasource#events-change) event documentation.

#### Example
    <kendo:dataSource change="handle_change">
    </kendo:dataSource>
    <script>
        function handle_change(e) {
            // Code to handle the change event.
        }
    </script>

### error `String`

Fired when a request to the remote service fails.The event handler function context (available via the this keyword) will be set to the data source instance.


For additional information check the [error](/api/framework/datasource#events-error) event documentation.

#### Example
    <kendo:dataSource error="handle_error">
    </kendo:dataSource>
    <script>
        function handle_error(e) {
            // Code to handle the error event.
        }
    </script>

### requestEnd `String`

Fired when a remote service request is finished.The event handler function context (available via the this keyword) will be set to the data source instance.


For additional information check the [requestEnd](/api/framework/datasource#events-requestEnd) event documentation.

#### Example
    <kendo:dataSource requestEnd="handle_requestEnd">
    </kendo:dataSource>
    <script>
        function handle_requestEnd(e) {
            // Code to handle the requestEnd event.
        }
    </script>

### requestStart `String`

Fired when the data source makes a remote service request.The event handler function context (available via the this keyword) will be set to the data source instance.


For additional information check the [requestStart](/api/framework/datasource#events-requestStart) event documentation.

#### Example
    <kendo:dataSource requestStart="handle_requestStart">
    </kendo:dataSource>
    <script>
        function handle_requestStart(e) {
            // Code to handle the requestStart event.
        }
    </script>

### sync `String`

Fired after the data source saves data item changes. The data source saves the data item changes when the sync method is called.The event handler function context (available via the this keyword) will be set to the data source instance.


For additional information check the [sync](/api/framework/datasource#events-sync) event documentation.

#### Example
    <kendo:dataSource sync="handle_sync">
    </kendo:dataSource>
    <script>
        function handle_sync(e) {
            // Code to handle the sync event.
        }
    </script>

## Event Tags

### kendo:dataSource-change

Fired when the data source is populated from a JavaScript array or a remote service, a data item is inserted, updated or removed, the data items are paged, sorted, filtered or grouped.The event handler function context (available via the this keyword) will be set to the data source instance.


For additional information check the [change](/api/framework/datasource#events-change) event documentation.

#### Example
    <kendo:dataSource>
        <kendo:dataSource-change>
            <script>
                function(e) {
                    // Code to handle the change event.
                }
            </script>
        </kendo:dataSource-change>
    </kendo:dataSource>

### kendo:dataSource-error

Fired when a request to the remote service fails.The event handler function context (available via the this keyword) will be set to the data source instance.


For additional information check the [error](/api/framework/datasource#events-error) event documentation.

#### Example
    <kendo:dataSource>
        <kendo:dataSource-error>
            <script>
                function(e) {
                    // Code to handle the error event.
                }
            </script>
        </kendo:dataSource-error>
    </kendo:dataSource>

### kendo:dataSource-requestEnd

Fired when a remote service request is finished.The event handler function context (available via the this keyword) will be set to the data source instance.


For additional information check the [requestEnd](/api/framework/datasource#events-requestEnd) event documentation.

#### Example
    <kendo:dataSource>
        <kendo:dataSource-requestEnd>
            <script>
                function(e) {
                    // Code to handle the requestEnd event.
                }
            </script>
        </kendo:dataSource-requestEnd>
    </kendo:dataSource>

### kendo:dataSource-requestStart

Fired when the data source makes a remote service request.The event handler function context (available via the this keyword) will be set to the data source instance.


For additional information check the [requestStart](/api/framework/datasource#events-requestStart) event documentation.

#### Example
    <kendo:dataSource>
        <kendo:dataSource-requestStart>
            <script>
                function(e) {
                    // Code to handle the requestStart event.
                }
            </script>
        </kendo:dataSource-requestStart>
    </kendo:dataSource>

### kendo:dataSource-sync

Fired after the data source saves data item changes. The data source saves the data item changes when the sync method is called.The event handler function context (available via the this keyword) will be set to the data source instance.


For additional information check the [sync](/api/framework/datasource#events-sync) event documentation.

#### Example
    <kendo:dataSource>
        <kendo:dataSource-sync>
            <script>
                function(e) {
                    // Code to handle the sync event.
                }
            </script>
        </kendo:dataSource-sync>
    </kendo:dataSource>

