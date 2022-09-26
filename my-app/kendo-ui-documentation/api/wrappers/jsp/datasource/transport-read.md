---
title: dataSource-transport-read
slug: jsp-dataSource-transport-read
tags: api, java
publish: true
---

# \<kendo:dataSource-transport-read\>

The configuration used when the data source loads data items from a remote service.If the value of transport.read is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.read is a string the data source uses this string as the URL of the remote service.

#### Example
    <kendo:dataSource-transport>
        <kendo:dataSource-transport-read></kendo:dataSource-transport-read>
    </kendo:dataSource-transport>

## Configuration Attributes

### cache `boolean`

If set to false the request result will not be cached by the browser. Setting cache to false will only work correctly with HEAD and GET requests. It works by appending "_={timestamp}" to the GET parameters.
By default "jsonp" requests are not cached.Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-read cache="cache">
    </kendo:dataSource-transport-read>

### contentType `java.lang.String`

The content-type HTTP header sent to the server. Default is "application/x-www-form-urlencoded". Use "application/json" if the content is JSON.
Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-read contentType="contentType">
    </kendo:dataSource-transport-read>

### data `java.lang.Object`

Additional parameters which are sent to the remote service.Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-read data="data">
    </kendo:dataSource-transport-read>

### dataType `java.lang.String`

The type of result expected from the server. Commonly used values are "json" and "jsonp".Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-read dataType="dataType">
    </kendo:dataSource-transport-read>

### type `java.lang.String`

The type of request to make ("POST", "GET", "PUT" or "DELETE"), default is "GET".Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-read type="type">
    </kendo:dataSource-transport-read>

### url `java.lang.String`

The URL to which the request is sent.If set to function the data source will invoke it and use the result as the URL.

#### Example
    <kendo:dataSource-transport-read url="url">
    </kendo:dataSource-transport-read>


## Event Attributes

### data `String`

Additional parameters which are sent to the remote service.Refer to the jQuery.ajax documentation for further info.


#### Example
    <kendo:dataSource-transport-read data="handle_data">
    </kendo:dataSource-transport-read>
    <script>
        function handle_data(e) {
            // Code to handle the data event.
        }
    </script>

### url `String`

The URL to which the request is sent.If set to function the data source will invoke it and use the result as the URL.


#### Example
    <kendo:dataSource-transport-read url="handle_url">
    </kendo:dataSource-transport-read>
    <script>
        function handle_url(e) {
            // Code to handle the url event.
        }
    </script>

## Event Tags

### kendo:dataSource-transport-read-data

Additional parameters which are sent to the remote service.Refer to the jQuery.ajax documentation for further info.


#### Example
    <kendo:dataSource-transport-read>
        <kendo:dataSource-transport-read-data>
            <script>
                function(e) {
                    // Code to handle the data event.
                }
            </script>
        </kendo:dataSource-transport-read-data>
    </kendo:dataSource-transport-read>

### kendo:dataSource-transport-read-url

The URL to which the request is sent.If set to function the data source will invoke it and use the result as the URL.


#### Example
    <kendo:dataSource-transport-read>
        <kendo:dataSource-transport-read-url>
            <script>
                function(e) {
                    // Code to handle the url event.
                }
            </script>
        </kendo:dataSource-transport-read-url>
    </kendo:dataSource-transport-read>

