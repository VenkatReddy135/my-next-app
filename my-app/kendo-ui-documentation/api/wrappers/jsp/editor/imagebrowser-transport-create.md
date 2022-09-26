---
title: editor-imageBrowser-transport-create
slug: jsp-editor-imageBrowser-transport-create
tags: api, java
publish: true
---

# \<kendo:editor-imageBrowser-transport-create\>

Options or URL which will handle the directory creation. If not specified that create new folder button will not be present.

#### Example
    <kendo:editor-imageBrowser-transport>
        <kendo:editor-imageBrowser-transport-create></kendo:editor-imageBrowser-transport-create>
    </kendo:editor-imageBrowser-transport>

## Configuration Attributes

### contentType `java.lang.String`

The content-type HTTP header sent to the server. Default is "application/x-www-form-urlencoded". Use "application/json" if the content is JSON.
Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:editor-imageBrowser-transport-create contentType="contentType">
    </kendo:editor-imageBrowser-transport-create>

### data `java.lang.Object`

Data to be send to the server.
Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:editor-imageBrowser-transport-create data="data">
    </kendo:editor-imageBrowser-transport-create>

### dataType `java.lang.String`

The type of data that you're expecting back from the server. Commonly used values are "json" and "jsonp".
Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:editor-imageBrowser-transport-create dataType="dataType">
    </kendo:editor-imageBrowser-transport-create>

### type `java.lang.String`

The type of request to make ("POST", "GET", "PUT" or "DELETE"), default is "GET".
Refer to the jQuery.ajax documentation for further info.

#### Example
    <kendo:editor-imageBrowser-transport-create type="type">
    </kendo:editor-imageBrowser-transport-create>

### url `java.lang.String`

The remote url to call when creating a new record.

#### Example
    <kendo:editor-imageBrowser-transport-create url="url">
    </kendo:editor-imageBrowser-transport-create>


## Event Attributes

### data `String`

Data to be send to the server.
Refer to the jQuery.ajax documentation for further info.


#### Example
    <kendo:editor-imageBrowser-transport-create data="handle_data">
    </kendo:editor-imageBrowser-transport-create>
    <script>
        function handle_data(e) {
            // Code to handle the data event.
        }
    </script>

### url `String`

The remote url to call when creating a new record.


#### Example
    <kendo:editor-imageBrowser-transport-create url="handle_url">
    </kendo:editor-imageBrowser-transport-create>
    <script>
        function handle_url(e) {
            // Code to handle the url event.
        }
    </script>

## Event Tags

### kendo:editor-imageBrowser-transport-create-data

Data to be send to the server.
Refer to the jQuery.ajax documentation for further info.


#### Example
    <kendo:editor-imageBrowser-transport-create>
        <kendo:editor-imageBrowser-transport-create-data>
            <script>
                function(e) {
                    // Code to handle the data event.
                }
            </script>
        </kendo:editor-imageBrowser-transport-create-data>
    </kendo:editor-imageBrowser-transport-create>

### kendo:editor-imageBrowser-transport-create-url

The remote url to call when creating a new record.


#### Example
    <kendo:editor-imageBrowser-transport-create>
        <kendo:editor-imageBrowser-transport-create-url>
            <script>
                function(e) {
                    // Code to handle the url event.
                }
            </script>
        </kendo:editor-imageBrowser-transport-create-url>
    </kendo:editor-imageBrowser-transport-create>

