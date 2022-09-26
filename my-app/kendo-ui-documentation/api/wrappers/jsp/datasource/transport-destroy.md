---
title: dataSource-transport-destroy
slug: jsp-dataSource-transport-destroy
tags: api, java
publish: true
---

# \<kendo:dataSource-transport-destroy\>

The configuration used when the data source destroys data items. Those are items removed from the data source via the remove method.If the value of transport.destroy is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.destroy is a string the data source uses this string as the URL of the remote service.

#### Example
    <kendo:dataSource-transport>
        <kendo:dataSource-transport-destroy></kendo:dataSource-transport-destroy>
    </kendo:dataSource-transport>

## Configuration Attributes

### cache `boolean`

If set to false the request result will not be cached by the browser. Setting cache to false will only work correctly with HEAD and GET requests. It works by appending "_={timestamp}" to the GET parameters.
By default "jsonp" requests are not cached.Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-destroy cache="cache">
    </kendo:dataSource-transport-destroy>

### contentType `java.lang.String`

The content-type HTTP header sent to the server. Default is "application/x-www-form-urlencoded". Use "application/json" if the content is JSON.
Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-destroy contentType="contentType">
    </kendo:dataSource-transport-destroy>

### data `java.lang.Object`

Additional parameters which are sent to the remote service.Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-destroy data="data">
    </kendo:dataSource-transport-destroy>

### dataType `java.lang.String`

The type of result expected from the server. Commonly used values are "json" and "jsonp".Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-destroy dataType="dataType">
    </kendo:dataSource-transport-destroy>

### type `java.lang.String`

The type of request to make ("POST", "GET", "PUT" or "DELETE"), default is "GET".Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:dataSource-transport-destroy type="type">
    </kendo:dataSource-transport-destroy>

### url `java.lang.String`

The URL to which the request is sent.If set to function the data source will invoke it and use the result as the URL.

#### Example
    <kendo:dataSource-transport-destroy url="url">
    </kendo:dataSource-transport-destroy>


## Event Attributes

### data `String`

Additional parameters which are sent to the remote service.Refer to the jQuery.ajax documentation for further info.


#### Example
    <kendo:dataSource-transport-destroy data="handle_data">
    </kendo:dataSource-transport-destroy>
    <script>
        function handle_data(e) {
            // Code to handle the data event.
        }
    </script>

### url `String`

The URL to which the request is sent.If set to function the data source will invoke it and use the result as the URL.


#### Example
    <kendo:dataSource-transport-destroy url="handle_url">
    </kendo:dataSource-transport-destroy>
    <script>
        function handle_url(e) {
            // Code to handle the url event.
        }
    </script>

## Event Tags

### kendo:dataSource-transport-destroy-data

Additional parameters which are sent to the remote service.Refer to the jQuery.ajax documentation for further info.


#### Example
    <kendo:dataSource-transport-destroy>
        <kendo:dataSource-transport-destroy-data>
            <script>
                function(e) {
                    // Code to handle the data event.
                }
            </script>
        </kendo:dataSource-transport-destroy-data>
    </kendo:dataSource-transport-destroy>

### kendo:dataSource-transport-destroy-url

The URL to which the request is sent.If set to function the data source will invoke it and use the result as the URL.


#### Example
    <kendo:dataSource-transport-destroy>
        <kendo:dataSource-transport-destroy-url>
            <script>
                function(e) {
                    // Code to handle the url event.
                }
            </script>
        </kendo:dataSource-transport-destroy-url>
    </kendo:dataSource-transport-destroy>

