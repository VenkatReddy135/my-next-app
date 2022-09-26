---
title: listView
slug: jsp-listView
tags: api, java
publish: true
---

# \<kendo:listView\>
A JSP wrapper for Kendo UI [ListView](/api/web/listview).

## Configuration Attributes

### altTemplate `java.lang.String`

Template to be used for rendering the alternate items in the listview.

#### Example
    <kendo:listView altTemplate="altTemplate">
    </kendo:listView>

### autoBind `boolean`

If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
data source is fired. By default the widget will bind to the data source specified in the configuration.

#### Example
    <kendo:listView autoBind="autoBind">
    </kendo:listView>

### editTemplate `java.lang.String`

Specifies ListView item template in edit mode.

#### Example
    <kendo:listView editTemplate="editTemplate">
    </kendo:listView>

### navigatable `boolean`

Indicates whether keyboard navigation is enabled/disabled.

#### Example
    <kendo:listView navigatable="navigatable">
    </kendo:listView>

### pageable `boolean`

Indicates whether paging is enabled/disabled. Further configuration is available via [kendo:listView-pageable](#kendo-listView-pageable). 

#### Example
    <kendo:listView pageable="pageable">
    </kendo:listView>

### selectable `java.lang.Object`

Indicates whether selection is enabled/disabled. Possible values:

#### Example
    <kendo:listView selectable="selectable">
    </kendo:listView>

### tagName `java.lang.String`

Specifies ListView wrapper element tag name.

#### Example
    <kendo:listView tagName="tagName">
    </kendo:listView>

### template `java.lang.String`

The id of the template used for rendering the items in the listview.

#### Example
    <kendo:listView template="template">
    </kendo:listView>


##  Configuration JSP Tags

### kendo:listView-pageable

Indicates whether paging is enabled/disabled.

More documentation is available at [kendo:listView-pageable](listview/pageable).

#### Example

    <kendo:listView>
        <kendo:listView-pageable></kendo:listView-pageable>
    </kendo:listView>


## Event Attributes

### cancel `String`

Fired when the user clicks the "cancel" button.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [cancel](/api/web/listview#events-cancel) event documentation.

#### Example
    <kendo:listView cancel="handle_cancel">
    </kendo:listView>
    <script>
        function handle_cancel(e) {
            // Code to handle the cancel event.
        }
    </script>

### change `String`

Fires when the list view selection has changed.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [change](/api/web/listview#events-change) event documentation.

#### Example
    <kendo:listView change="handle_change">
    </kendo:listView>
    <script>
        function handle_change(e) {
            // Code to handle the change event.
        }
    </script>

### dataBound `String`

Fires when the list view has received data from the data source and it is already rendered.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBound](/api/web/listview#events-dataBound) event documentation.

#### Example
    <kendo:listView dataBound="handle_dataBound">
    </kendo:listView>
    <script>
        function handle_dataBound(e) {
            // Code to handle the dataBound event.
        }
    </script>

### dataBinding `String`

Fires when the list view is about to be rendered.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBinding](/api/web/listview#events-dataBinding) event documentation.

#### Example
    <kendo:listView dataBinding="handle_dataBinding">
    </kendo:listView>
    <script>
        function handle_dataBinding(e) {
            // Code to handle the dataBinding event.
        }
    </script>

### edit `String`

Fires when the list view enters edit mode.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [edit](/api/web/listview#events-edit) event documentation.

#### Example
    <kendo:listView edit="handle_edit">
    </kendo:listView>
    <script>
        function handle_edit(e) {
            // Code to handle the edit event.
        }
    </script>

### remove `String`

Fires before the list view item is removed. If it is not prevented will call DataSource sync method.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [remove](/api/web/listview#events-remove) event documentation.

#### Example
    <kendo:listView remove="handle_remove">
    </kendo:listView>
    <script>
        function handle_remove(e) {
            // Code to handle the remove event.
        }
    </script>

### save `String`

Fired when a data item is saved.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [save](/api/web/listview#events-save) event documentation.

#### Example
    <kendo:listView save="handle_save">
    </kendo:listView>
    <script>
        function handle_save(e) {
            // Code to handle the save event.
        }
    </script>

## Event Tags

### kendo:listView-cancel

Fired when the user clicks the "cancel" button.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [cancel](/api/web/listview#events-cancel) event documentation.

#### Example
    <kendo:listView>
        <kendo:listView-cancel>
            <script>
                function(e) {
                    // Code to handle the cancel event.
                }
            </script>
        </kendo:listView-cancel>
    </kendo:listView>

### kendo:listView-change

Fires when the list view selection has changed.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [change](/api/web/listview#events-change) event documentation.

#### Example
    <kendo:listView>
        <kendo:listView-change>
            <script>
                function(e) {
                    // Code to handle the change event.
                }
            </script>
        </kendo:listView-change>
    </kendo:listView>

### kendo:listView-dataBound

Fires when the list view has received data from the data source and it is already rendered.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBound](/api/web/listview#events-dataBound) event documentation.

#### Example
    <kendo:listView>
        <kendo:listView-dataBound>
            <script>
                function(e) {
                    // Code to handle the dataBound event.
                }
            </script>
        </kendo:listView-dataBound>
    </kendo:listView>

### kendo:listView-dataBinding

Fires when the list view is about to be rendered.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBinding](/api/web/listview#events-dataBinding) event documentation.

#### Example
    <kendo:listView>
        <kendo:listView-dataBinding>
            <script>
                function(e) {
                    // Code to handle the dataBinding event.
                }
            </script>
        </kendo:listView-dataBinding>
    </kendo:listView>

### kendo:listView-edit

Fires when the list view enters edit mode.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [edit](/api/web/listview#events-edit) event documentation.

#### Example
    <kendo:listView>
        <kendo:listView-edit>
            <script>
                function(e) {
                    // Code to handle the edit event.
                }
            </script>
        </kendo:listView-edit>
    </kendo:listView>

### kendo:listView-remove

Fires before the list view item is removed. If it is not prevented will call DataSource sync method.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [remove](/api/web/listview#events-remove) event documentation.

#### Example
    <kendo:listView>
        <kendo:listView-remove>
            <script>
                function(e) {
                    // Code to handle the remove event.
                }
            </script>
        </kendo:listView-remove>
    </kendo:listView>

### kendo:listView-save

Fired when a data item is saved.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [save](/api/web/listview#events-save) event documentation.

#### Example
    <kendo:listView>
        <kendo:listView-save>
            <script>
                function(e) {
                    // Code to handle the save event.
                }
            </script>
        </kendo:listView-save>
    </kendo:listView>

