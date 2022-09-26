---
title: dataSource-transport-create
slug: jsp-dataSource-transport-create
tags: api, java
publish: true
---

# \<kendo:dataSource-transport-create\>

The configuration used when the data source saves newly created data items. Those are items added to the data source via the add or insert methods.If the value of transport.create is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.create is a string the data source uses this string as the URL of the remote service.

#### Example
    <kendo:dataSource-transport>
        <kendo:dataSource-transport-create></kendo:dataSource-transport-create>
    </kendo:dataSource-transport>

## Configuration Attributes

### cache `boolean`

If set to false the request result will not be cached by the browser. Setting cache to false will only work correctly with HEAD and GET requests. It works by appending "_={timestamp}" to the GET parameters.
By default "jsonp" requests are not cached.Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-create cache="cache">
    </kendo:dataSource-transport-create>

### contentType `java.lang.String`

The content-type HTTP header sent to the server. Default is "application/x-www-form-urlencoded". Use "application/json" if the content is JSON.
Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-create contentType="contentType">
    </kendo:dataSource-transport-create>

### data `java.lang.Object`

Additional parameters which are sent to the remote service.Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-create data="data">
    </kendo:dataSource-transport-create>

### dataType `java.lang.String`

The type of result expected from the server. Commonly used values are "json" and "jsonp".Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-create dataType="dataType">
    </kendo:dataSource-transport-create>

### type `java.lang.String`

The type of request to make ("POST", "GET", "PUT" or "DELETE"), default is "GET".Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-create type="type">
    </kendo:dataSource-transport-create>

### url `java.lang.String`

The URL to which the request is sent.If set to function the data source will invoke it and use the result as the URL.

#### Example
    <kendo:dataSource-transport-create url="url">
    </kendo:dataSource-transport-create>


## Event Attributes

### data `String`

Additional parameters which are sent to the remote service.Refer to the jQuery.ajax documentation for further info.


#### Example
    <kendo:dataSource-transport-create data="handle_data">
    </kendo:dataSource-transport-create>
    <script>
        function handle_data(e) {
            // Code to handle the data event.
        }
    </script>

### url `String`

The URL to which the request is sent.If set to function the data source will invoke it and use the result as the URL.


#### Example
    <kendo:dataSource-transport-create url="handle_url">
    </kendo:dataSource-transport-create>
    <script>
        function handle_url(e) {
            // Code to handle the url event.
        }
    </script>

## Event Tags

### kendo:dataSource-transport-create-data

Additional parameters which are sent to the remote service.Refer to the jQuery.ajax documentation for further info.


#### Example
    <kendo:dataSource-transport-create>
        <kendo:dataSource-transport-create-data>
            <script>
                function(e) {
                    // Code to handle the data event.
                }
            </script>
        </kendo:dataSource-transport-create-data>
    </kendo:dataSource-transport-create>

### kendo:dataSource-transport-create-url

The URL to which the request is sent.If set to function the data source will invoke it and use the result as the URL.


#### Example
    <kendo:dataSource-transport-create>
        <kendo:dataSource-transport-create-url>
            <script>
                function(e) {
                    // Code to handle the url event.
                }
            </script>
        </kendo:dataSource-transport-create-url>
    </kendo:dataSource-transport-create>

