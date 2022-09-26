---
title: dataSource-transport
slug: jsp-dataSource-transport
tags: api, java
publish: true
---

# \<kendo:dataSource-transport\>

The configuration used to load and save the data items. A data source is remote or local based on the way of it retrieves data items.Remote data sources load and save data items from and to a remote end-point (a.k.a. remote service or server). The transport option describes the remote service configuration - URL, HTTP verb, HTTP headers etc.
The transport option can also be used to implement custom data loading and saving.Local data sources are bound to a JavaScript array via the data option.

#### Example
    <kendo:dataSource>
        <kendo:dataSource-transport></kendo:dataSource-transport>
    </kendo:dataSource>

## Configuration Attributes

### create `java.lang.String`

The configuration used when the data source saves newly created data items. Those are items added to the data source via the add or insert methods.If the value of transport.create is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.create is a string the data source uses this string as the URL of the remote service. Further configuration is available via [kendo:dataSource-transport-create](#kendo-dataSource-transport-create). 

#### Example
    <kendo:dataSource-transport create="create">
    </kendo:dataSource-transport>

### destroy `java.lang.String`

The configuration used when the data source destroys data items. Those are items removed from the data source via the remove method.If the value of transport.destroy is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.destroy is a string the data source uses this string as the URL of the remote service. Further configuration is available via [kendo:dataSource-transport-destroy](#kendo-dataSource-transport-destroy). 

#### Example
    <kendo:dataSource-transport destroy="destroy">
    </kendo:dataSource-transport>

### parameterMap `java.lang.String`

The function which converts the request parameters to a format suitable for the remote service. By default
the data source sends the parameters using jQuery's conventions.

#### Example
    <kendo:dataSource-transport parameterMap="parameterMap">
    </kendo:dataSource-transport>

### read `java.lang.String`

The configuration used when the data source loads data items from a remote service.If the value of transport.read is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.read is a string the data source uses this string as the URL of the remote service. Further configuration is available via [kendo:dataSource-transport-read](#kendo-dataSource-transport-read). 

#### Example
    <kendo:dataSource-transport read="read">
    </kendo:dataSource-transport>

### update `java.lang.String`

The configuration used when the data source saves updated data items. Those are data items whose fields have been updated.If the value of transport.update is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.update is a string the data source uses this string as the URL of the remote service. Further configuration is available via [kendo:dataSource-transport-update](#kendo-dataSource-transport-update). 

#### Example
    <kendo:dataSource-transport update="update">
    </kendo:dataSource-transport>


##  Configuration JSP Tags

### kendo:dataSource-transport-create

The configuration used when the data source saves newly created data items. Those are items added to the data source via the add or insert methods.If the value of transport.create is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.create is a string the data source uses this string as the URL of the remote service.

More documentation is available at [kendo:dataSource-transport-create](datasource/transport-create).

#### Example

    <kendo:dataSource-transport>
        <kendo:dataSource-transport-create></kendo:dataSource-transport-create>
    </kendo:dataSource-transport>

### kendo:dataSource-transport-destroy

The configuration used when the data source destroys data items. Those are items removed from the data source via the remove method.If the value of transport.destroy is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.destroy is a string the data source uses this string as the URL of the remote service.

More documentation is available at [kendo:dataSource-transport-destroy](datasource/transport-destroy).

#### Example

    <kendo:dataSource-transport>
        <kendo:dataSource-transport-destroy></kendo:dataSource-transport-destroy>
    </kendo:dataSource-transport>

### kendo:dataSource-transport-read

The configuration used when the data source loads data items from a remote service.If the value of transport.read is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.read is a string the data source uses this string as the URL of the remote service.

More documentation is available at [kendo:dataSource-transport-read](datasource/transport-read).

#### Example

    <kendo:dataSource-transport>
        <kendo:dataSource-transport-read></kendo:dataSource-transport-read>
    </kendo:dataSource-transport>

### kendo:dataSource-transport-update

The configuration used when the data source saves updated data items. Those are data items whose fields have been updated.If the value of transport.update is a function, the data source invokes that function instead of jQuery.ajax.If the value of transport.update is a string the data source uses this string as the URL of the remote service.

More documentation is available at [kendo:dataSource-transport-update](datasource/transport-update).

#### Example

    <kendo:dataSource-transport>
        <kendo:dataSource-transport-update></kendo:dataSource-transport-update>
    </kendo:dataSource-transport>


## Event Attributes

### parameterMap `String`

The function which converts the request parameters to a format suitable for the remote service. By default
the data source sends the parameters using jQuery's conventions.


#### Example
    <kendo:dataSource-transport parameterMap="handle_parameterMap">
    </kendo:dataSource-transport>
    <script>
        function handle_parameterMap(e) {
            // Code to handle the parameterMap event.
        }
    </script>

## Event Tags

### kendo:dataSource-transport-parameterMap

The function which converts the request parameters to a format suitable for the remote service. By default
the data source sends the parameters using jQuery's conventions.


#### Example
    <kendo:dataSource-transport>
        <kendo:dataSource-transport-parameterMap>
            <script>
                function(e) {
                    // Code to handle the parameterMap event.
                }
            </script>
        </kendo:dataSource-transport-parameterMap>
    </kendo:dataSource-transport>

