---
title: dataSource-transport-update
slug: jsp-dataSource-transport-update
tags: api, java
publish: true
---

# \<kendo:dataSource-transport-update\>

The configuration used when the data source saves updated data items. Those are data items whose fields have been updated.If the value of transport.update is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.update is a string the data source uses this string as the URL of the remote service.

#### Example
    <kendo:dataSource-transport>
        <kendo:dataSource-transport-update></kendo:dataSource-transport-update>
    </kendo:dataSource-transport>

## Configuration Attributes

### cache `boolean`

If set to false the request result will not be cached by the browser. Setting cache to false will only work correctly with HEAD and GET requests. It works by appending "_={timestamp}" to the GET parameters.
By default "jsonp" requests are not cached.Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-update cache="cache">
    </kendo:dataSource-transport-update>

### contentType `java.lang.String`

The content-type HTTP header sent to the server. Default is "application/x-www-form-urlencoded". Use "application/json" if the content is JSON.
Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-update contentType="contentType">
    </kendo:dataSource-transport-update>

### data `java.lang.Object`

Additional parameters which are sent to the remote service.Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-update data="data">
    </kendo:dataSource-transport-update>

### dataType `java.lang.String`

The type of result expected from the server. Commonly used values are "json" and "jsonp".Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-update dataType="dataType">
    </kendo:dataSource-transport-update>

### type `java.lang.String`

The type of request to make ("POST", "GET", "PUT" or "DELETE"), default is "GET".Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-update type="type">
    </kendo:dataSource-transport-update>

### url `java.lang.String`

The URL to which the request is sent.If set to function the data source will invoke it and use the result as the URL.

#### Example
    <kendo:dataSource-transport-update url="url">
    </kendo:dataSource-transport-update>


## Event Attributes

### data `String`

Additional parameters which are sent to the remote service.Refer to the jQuery.ajax documentation for further info.


#### Example
    <kendo:dataSource-transport-update data="handle_data">
    </kendo:dataSource-transport-update>
    <script>
        function handle_data(e) {
            // Code to handle the data event.
        }
    </script>

### url `String`

The URL to which the request is sent.If set to function the data source will invoke it and use the result as the URL.


#### Example
    <kendo:dataSource-transport-update url="handle_url">
    </kendo:dataSource-transport-update>
    <script>
        function handle_url(e) {
            // Code to handle the url event.
        }
    </script>

## Event Tags

### kendo:dataSource-transport-update-data

Additional parameters which are sent to the remote service.Refer to the jQuery.ajax documentation for further info.


#### Example
    <kendo:dataSource-transport-update>
        <kendo:dataSource-transport-update-data>
            <script>
                function(e) {
                    // Code to handle the data event.
                }
            </script>
        </kendo:dataSource-transport-update-data>
    </kendo:dataSource-transport-update>

### kendo:dataSource-transport-update-url

The URL to which the request is sent.If set to function the data source will invoke it and use the result as the URL.


#### Example
    <kendo:dataSource-transport-update>
        <kendo:dataSource-transport-update-url>
            <script>
                function(e) {
                    // Code to handle the url event.
                }
            </script>
        </kendo:dataSource-transport-update-url>
    </kendo:dataSource-transport-update>

