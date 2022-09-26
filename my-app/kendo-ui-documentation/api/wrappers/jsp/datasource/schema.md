---
title: dataSource-schema
slug: jsp-dataSource-schema
tags: api, java
publish: true
---

# \<kendo:dataSource-schema\>

The configuration used to parse the remote service response.

#### Example
    <kendo:dataSource>
        <kendo:dataSource-schema></kendo:dataSource-schema>
    </kendo:dataSource>

## Configuration Attributes

### aggregates `java.lang.String`

The field from the response which contains the aggregate results. Can be set to a function which is called to
return the aggregate results from the response.The result of the function should be a JavaScript object which contains the aggregate results for every fields in the following format:For example if the data source is configured like this:The aggregate results should have the following format:

#### Example
    <kendo:dataSource-schema aggregates="aggregates">
    </kendo:dataSource-schema>

### data `java.lang.String`

The field from the server response which contains the data items. Can be set to a function which is called to
return the data items for the response.

#### Example
    <kendo:dataSource-schema data="data">
    </kendo:dataSource-schema>

### errors `java.lang.String`

The field from the server response which contains server-side errors. Can be set to a function which is called to
return the errors for response. If there are any errors the error event will be fired.

#### Example
    <kendo:dataSource-schema errors="errors">
    </kendo:dataSource-schema>

### groups `java.lang.String`

The field from the server response which contains the groups. Can be set to a function which is called to
return the groups from the response.The result should have the following format:

#### Example
    <kendo:dataSource-schema groups="groups">
    </kendo:dataSource-schema>

### model `java.lang.Object`

The data item (model) configuration.If set to an object the Model.define method will be used to initialize the data source model.If set to an existing kendo.data.Model instance the data source will use that instance and will not initialize a new one.

#### Example
    <kendo:dataSource-schema model="model">
    </kendo:dataSource-schema>

### parse `java.lang.String`

Executed before the server response is used. Use it to preprocess or parse the server response.

#### Example
    <kendo:dataSource-schema parse="parse">
    </kendo:dataSource-schema>

### total `java.lang.String`

The field from the server response which contains the total number of data items. Can be set to a function which is called to
return the total number of data items for the response.

#### Example
    <kendo:dataSource-schema total="total">
    </kendo:dataSource-schema>

### type `java.lang.String`

The type of the response. The supported values are "xml" and "json". By default the schema interprets the server response as JSON.

#### Example
    <kendo:dataSource-schema type="type">
    </kendo:dataSource-schema>


## Event Attributes

### aggregates `String`

The field from the response which contains the aggregate results. Can be set to a function which is called to
return the aggregate results from the response.The result of the function should be a JavaScript object which contains the aggregate results for every fields in the following format:For example if the data source is configured like this:The aggregate results should have the following format:


#### Example
    <kendo:dataSource-schema aggregates="handle_aggregates">
    </kendo:dataSource-schema>
    <script>
        function handle_aggregates(e) {
            // Code to handle the aggregates event.
        }
    </script>

### data `String`

The field from the server response which contains the data items. Can be set to a function which is called to
return the data items for the response.


#### Example
    <kendo:dataSource-schema data="handle_data">
    </kendo:dataSource-schema>
    <script>
        function handle_data(e) {
            // Code to handle the data event.
        }
    </script>

### errors `String`

The field from the server response which contains server-side errors. Can be set to a function which is called to
return the errors for response. If there are any errors the error event will be fired.


#### Example
    <kendo:dataSource-schema errors="handle_errors">
    </kendo:dataSource-schema>
    <script>
        function handle_errors(e) {
            // Code to handle the errors event.
        }
    </script>

### groups `String`

The field from the server response which contains the groups. Can be set to a function which is called to
return the groups from the response.The result should have the following format:


#### Example
    <kendo:dataSource-schema groups="handle_groups">
    </kendo:dataSource-schema>
    <script>
        function handle_groups(e) {
            // Code to handle the groups event.
        }
    </script>

### parse `String`

Executed before the server response is used. Use it to preprocess or parse the server response.


#### Example
    <kendo:dataSource-schema parse="handle_parse">
    </kendo:dataSource-schema>
    <script>
        function handle_parse(e) {
            // Code to handle the parse event.
        }
    </script>

### total `String`

The field from the server response which contains the total number of data items. Can be set to a function which is called to
return the total number of data items for the response.


#### Example
    <kendo:dataSource-schema total="handle_total">
    </kendo:dataSource-schema>
    <script>
        function handle_total(e) {
            // Code to handle the total event.
        }
    </script>

## Event Tags

### kendo:dataSource-schema-aggregates

The field from the response which contains the aggregate results. Can be set to a function which is called to
return the aggregate results from the response.The result of the function should be a JavaScript object which contains the aggregate results for every fields in the following format:For example if the data source is configured like this:The aggregate results should have the following format:


#### Example
    <kendo:dataSource-schema>
        <kendo:dataSource-schema-aggregates>
            <script>
                function(e) {
                    // Code to handle the aggregates event.
                }
            </script>
        </kendo:dataSource-schema-aggregates>
    </kendo:dataSource-schema>

### kendo:dataSource-schema-data

The field from the server response which contains the data items. Can be set to a function which is called to
return the data items for the response.


#### Example
    <kendo:dataSource-schema>
        <kendo:dataSource-schema-data>
            <script>
                function(e) {
                    // Code to handle the data event.
                }
            </script>
        </kendo:dataSource-schema-data>
    </kendo:dataSource-schema>

### kendo:dataSource-schema-errors

The field from the server response which contains server-side errors. Can be set to a function which is called to
return the errors for response. If there are any errors the error event will be fired.


#### Example
    <kendo:dataSource-schema>
        <kendo:dataSource-schema-errors>
            <script>
                function(e) {
                    // Code to handle the errors event.
                }
            </script>
        </kendo:dataSource-schema-errors>
    </kendo:dataSource-schema>

### kendo:dataSource-schema-groups

The field from the server response which contains the groups. Can be set to a function which is called to
return the groups from the response.The result should have the following format:


#### Example
    <kendo:dataSource-schema>
        <kendo:dataSource-schema-groups>
            <script>
                function(e) {
                    // Code to handle the groups event.
                }
            </script>
        </kendo:dataSource-schema-groups>
    </kendo:dataSource-schema>

### kendo:dataSource-schema-parse

Executed before the server response is used. Use it to preprocess or parse the server response.


#### Example
    <kendo:dataSource-schema>
        <kendo:dataSource-schema-parse>
            <script>
                function(e) {
                    // Code to handle the parse event.
                }
            </script>
        </kendo:dataSource-schema-parse>
    </kendo:dataSource-schema>

### kendo:dataSource-schema-total

The field from the server response which contains the total number of data items. Can be set to a function which is called to
return the total number of data items for the response.


#### Example
    <kendo:dataSource-schema>
        <kendo:dataSource-schema-total>
            <script>
                function(e) {
                    // Code to handle the total event.
                }
            </script>
        </kendo:dataSource-schema-total>
    </kendo:dataSource-schema>

