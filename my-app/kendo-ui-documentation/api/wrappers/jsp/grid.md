---
title: grid
slug: jsp-grid
tags: api, java
publish: true
---

# \<kendo:grid\>
A JSP wrapper for Kendo UI [Grid](/api/web/grid).

## Configuration Attributes

### altRowTemplate `java.lang.String`

The id of the template used for rendering the alternate rows in the grid.

#### Example
    <kendo:grid altRowTemplate="altRowTemplate">
    </kendo:grid>

### autoBind `boolean`

If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
data source is fired. By default the widget will bind to the data source specified in the configuration.

#### Example
    <kendo:grid autoBind="autoBind">
    </kendo:grid>

### columnMenu `boolean`

If set to true the grid will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration. Further configuration is available via [kendo:grid-columnMenu](#kendo-grid-columnMenu). 

#### Example
    <kendo:grid columnMenu="columnMenu">
    </kendo:grid>

### columnResizeHandleWidth `float`

Defines the width of the column resize handle in pixels. Apply a larger value for easier grasping.

#### Example
    <kendo:grid columnResizeHandleWidth="columnResizeHandleWidth">
    </kendo:grid>

### detailTemplate `java.lang.String`

The id of the template used for rendering the detail rows in the grid.

#### Example
    <kendo:grid detailTemplate="detailTemplate">
    </kendo:grid>

### editable `boolean`

If set to true the user would be able to edit the data to which the grid is bound to. By default editing is disabled.Can be set to a string ("inline", "incell" or "popup") to specify the editing mode. The default editing mode is "incell".Can be set to a JavaScript object which represents the editing configuration. Further configuration is available via [kendo:grid-editable](#kendo-grid-editable). 

#### Example
    <kendo:grid editable="editable">
    </kendo:grid>

### filterable `boolean`

If set to true the user can filter the data source using the grid filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration. Further configuration is available via [kendo:grid-filterable](#kendo-grid-filterable). 

#### Example
    <kendo:grid filterable="filterable">
    </kendo:grid>

### groupable `boolean`

If set to true the user could group the grid by dragging the column header cells. By default grouping is disabled.Can be set to a JavaScript object which represents the grouping configuration. Further configuration is available via [kendo:grid-groupable](#kendo-grid-groupable). 

#### Example
    <kendo:grid groupable="groupable">
    </kendo:grid>

### height `java.lang.Object`

The height of the grid. Numeric values are treated as pixels.

#### Example
    <kendo:grid height="height">
    </kendo:grid>

### navigatable `boolean`

If set to true the use could navigate the widget using the keyboard navigation. By default keyboard navigation is disabled.

#### Example
    <kendo:grid navigatable="navigatable">
    </kendo:grid>

### pageable `boolean`

If set to true the grid will display a pager. By default paging is disabled.Can be set to a JavaScript object which represents the pager configuration. Further configuration is available via [kendo:grid-pageable](#kendo-grid-pageable). 

#### Example
    <kendo:grid pageable="pageable">
    </kendo:grid>

### reorderable `boolean`

If set to true the user could reorder the columns by dragging their header cells. By default reordering is disabled.

#### Example
    <kendo:grid reorderable="reorderable">
    </kendo:grid>

### resizable `boolean`

If set to true the user could resize the columns by dragging the edges of their header cells. By default resizing is disabled.

#### Example
    <kendo:grid resizable="resizable">
    </kendo:grid>

### rowTemplate `java.lang.String`

The id of the template used for rendering the rows in the grid.

#### Example
    <kendo:grid rowTemplate="rowTemplate">
    </kendo:grid>

### scrollable `boolean`

If set to true the grid will display a scrollbar when the total row height (or width) exceeds the grid height (or width). By default scrolling is enabled.Can be set to a JavaScript object which represents the scrolling configuration. Further configuration is available via [kendo:grid-scrollable](#kendo-grid-scrollable). 

#### Example
    <kendo:grid scrollable="scrollable">
    </kendo:grid>

### selectable `java.lang.Object`

If set to true the user would be able to select grid rows. By default selection is disabled.Can also be set to the following string values:

#### Example
    <kendo:grid selectable="selectable">
    </kendo:grid>

### sortable `boolean`

If set to true the user could sort the grid by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration. Further configuration is available via [kendo:grid-sortable](#kendo-grid-sortable). 

#### Example
    <kendo:grid sortable="sortable">
    </kendo:grid>


##  Configuration JSP Tags

### kendo:grid-columnMenu

If set to true the grid will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration.

More documentation is available at [kendo:grid-columnMenu](grid/columnmenu).

#### Example

    <kendo:grid>
        <kendo:grid-columnMenu></kendo:grid-columnMenu>
    </kendo:grid>

### kendo:grid-columns

The configuration of the grid columns. An array of JavaScript objects or strings. A JavaScript objects are interpreted as column configurations. Strings are interpreted as the
field to which the column is bound. The grid will create a column for every item of the array.

More documentation is available at [kendo:grid-columns](grid/columns).

#### Example

    <kendo:grid>
        <kendo:grid-columns></kendo:grid-columns>
    </kendo:grid>

### kendo:grid-editable

If set to true the user would be able to edit the data to which the grid is bound to. By default editing is disabled.Can be set to a string ("inline", "incell" or "popup") to specify the editing mode. The default editing mode is "incell".Can be set to a JavaScript object which represents the editing configuration.

More documentation is available at [kendo:grid-editable](grid/editable).

#### Example

    <kendo:grid>
        <kendo:grid-editable></kendo:grid-editable>
    </kendo:grid>

### kendo:grid-filterable

If set to true the user can filter the data source using the grid filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration.

More documentation is available at [kendo:grid-filterable](grid/filterable).

#### Example

    <kendo:grid>
        <kendo:grid-filterable></kendo:grid-filterable>
    </kendo:grid>

### kendo:grid-groupable

If set to true the user could group the grid by dragging the column header cells. By default grouping is disabled.Can be set to a JavaScript object which represents the grouping configuration.

More documentation is available at [kendo:grid-groupable](grid/groupable).

#### Example

    <kendo:grid>
        <kendo:grid-groupable></kendo:grid-groupable>
    </kendo:grid>

### kendo:grid-pageable

If set to true the grid will display a pager. By default paging is disabled.Can be set to a JavaScript object which represents the pager configuration.

More documentation is available at [kendo:grid-pageable](grid/pageable).

#### Example

    <kendo:grid>
        <kendo:grid-pageable></kendo:grid-pageable>
    </kendo:grid>

### kendo:grid-scrollable

If set to true the grid will display a scrollbar when the total row height (or width) exceeds the grid height (or width). By default scrolling is enabled.Can be set to a JavaScript object which represents the scrolling configuration.

More documentation is available at [kendo:grid-scrollable](grid/scrollable).

#### Example

    <kendo:grid>
        <kendo:grid-scrollable></kendo:grid-scrollable>
    </kendo:grid>

### kendo:grid-sortable

If set to true the user could sort the grid by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.

More documentation is available at [kendo:grid-sortable](grid/sortable).

#### Example

    <kendo:grid>
        <kendo:grid-sortable></kendo:grid-sortable>
    </kendo:grid>

### kendo:grid-toolbar

The list of commands displayed in the grid toolbar. Commands can be custom or built-in ("cancel", "create", "save").The "cancel" built-in command reverts any data changes done by the end user.The "create" command adds an empty data item to the grid.The "save" command persists any data changes done by the end user.

More documentation is available at [kendo:grid-toolbar](grid/toolbar).

#### Example

    <kendo:grid>
        <kendo:grid-toolbar></kendo:grid-toolbar>
    </kendo:grid>


## Event Attributes

### cancel `String`

Fired when the user clicks the "cancel" button (in inline or popup editing mode) or closes the popup window.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [cancel](/api/web/grid#events-cancel) event documentation.

#### Example
    <kendo:grid cancel="handle_cancel">
    </kendo:grid>
    <script>
        function handle_cancel(e) {
            // Code to handle the cancel event.
        }
    </script>

### change `String`

Fired when the user selects a table row or cell in the grid.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [change](/api/web/grid#events-change) event documentation.

#### Example
    <kendo:grid change="handle_change">
    </kendo:grid>
    <script>
        function handle_change(e) {
            // Code to handle the change event.
        }
    </script>

### columnHide `String`

Fired when the user hides a column.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [columnHide](/api/web/grid#events-columnHide) event documentation.

#### Example
    <kendo:grid columnHide="handle_columnHide">
    </kendo:grid>
    <script>
        function handle_columnHide(e) {
            // Code to handle the columnHide event.
        }
    </script>

### columnMenuInit `String`

Fired when the column menu is initialized.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [columnMenuInit](/api/web/grid#events-columnMenuInit) event documentation.

#### Example
    <kendo:grid columnMenuInit="handle_columnMenuInit">
    </kendo:grid>
    <script>
        function handle_columnMenuInit(e) {
            // Code to handle the columnMenuInit event.
        }
    </script>

### columnReorder `String`

Fired when the user changes the order of a column.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [columnReorder](/api/web/grid#events-columnReorder) event documentation.

#### Example
    <kendo:grid columnReorder="handle_columnReorder">
    </kendo:grid>
    <script>
        function handle_columnReorder(e) {
            // Code to handle the columnReorder event.
        }
    </script>

### columnResize `String`

Fired when the user resizes a column.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [columnResize](/api/web/grid#events-columnResize) event documentation.

#### Example
    <kendo:grid columnResize="handle_columnResize">
    </kendo:grid>
    <script>
        function handle_columnResize(e) {
            // Code to handle the columnResize event.
        }
    </script>

### columnShow `String`

Fired when the user shows a column.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [columnShow](/api/web/grid#events-columnShow) event documentation.

#### Example
    <kendo:grid columnShow="handle_columnShow">
    </kendo:grid>
    <script>
        function handle_columnShow(e) {
            // Code to handle the columnShow event.
        }
    </script>

### dataBinding `String`

Fired before the widget binds to its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBinding](/api/web/grid#events-dataBinding) event documentation.

#### Example
    <kendo:grid dataBinding="handle_dataBinding">
    </kendo:grid>
    <script>
        function handle_dataBinding(e) {
            // Code to handle the dataBinding event.
        }
    </script>

### dataBound `String`

Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBound](/api/web/grid#events-dataBound) event documentation.

#### Example
    <kendo:grid dataBound="handle_dataBound">
    </kendo:grid>
    <script>
        function handle_dataBound(e) {
            // Code to handle the dataBound event.
        }
    </script>

### detailCollapse `String`

Fired when the user collapses a detail table row.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [detailCollapse](/api/web/grid#events-detailCollapse) event documentation.

#### Example
    <kendo:grid detailCollapse="handle_detailCollapse">
    </kendo:grid>
    <script>
        function handle_detailCollapse(e) {
            // Code to handle the detailCollapse event.
        }
    </script>

### detailExpand `String`

Fired when the user expands a detail table row.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [detailExpand](/api/web/grid#events-detailExpand) event documentation.

#### Example
    <kendo:grid detailExpand="handle_detailExpand">
    </kendo:grid>
    <script>
        function handle_detailExpand(e) {
            // Code to handle the detailExpand event.
        }
    </script>

### detailInit `String`

Fired when a detail table row is initialized.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [detailInit](/api/web/grid#events-detailInit) event documentation.

#### Example
    <kendo:grid detailInit="handle_detailInit">
    </kendo:grid>
    <script>
        function handle_detailInit(e) {
            // Code to handle the detailInit event.
        }
    </script>

### edit `String`

Fired when the user edits or creates a data item.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [edit](/api/web/grid#events-edit) event documentation.

#### Example
    <kendo:grid edit="handle_edit">
    </kendo:grid>
    <script>
        function handle_edit(e) {
            // Code to handle the edit event.
        }
    </script>

### filterMenuInit `String`

Fired when the grid filter menu is initialized.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [filterMenuInit](/api/web/grid#events-filterMenuInit) event documentation.

#### Example
    <kendo:grid filterMenuInit="handle_filterMenuInit">
    </kendo:grid>
    <script>
        function handle_filterMenuInit(e) {
            // Code to handle the filterMenuInit event.
        }
    </script>

### remove `String`

Fired when the user clicks the "destroy" command button.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [remove](/api/web/grid#events-remove) event documentation.

#### Example
    <kendo:grid remove="handle_remove">
    </kendo:grid>
    <script>
        function handle_remove(e) {
            // Code to handle the remove event.
        }
    </script>

### save `String`

Fired when a data item is saved.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [save](/api/web/grid#events-save) event documentation.

#### Example
    <kendo:grid save="handle_save">
    </kendo:grid>
    <script>
        function handle_save(e) {
            // Code to handle the save event.
        }
    </script>

### saveChanges `String`

Fired when the user clicks the "save" command button.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [saveChanges](/api/web/grid#events-saveChanges) event documentation.

#### Example
    <kendo:grid saveChanges="handle_saveChanges">
    </kendo:grid>
    <script>
        function handle_saveChanges(e) {
            // Code to handle the saveChanges event.
        }
    </script>

## Event Tags

### kendo:grid-cancel

Fired when the user clicks the "cancel" button (in inline or popup editing mode) or closes the popup window.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [cancel](/api/web/grid#events-cancel) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-cancel>
            <script>
                function(e) {
                    // Code to handle the cancel event.
                }
            </script>
        </kendo:grid-cancel>
    </kendo:grid>

### kendo:grid-change

Fired when the user selects a table row or cell in the grid.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [change](/api/web/grid#events-change) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-change>
            <script>
                function(e) {
                    // Code to handle the change event.
                }
            </script>
        </kendo:grid-change>
    </kendo:grid>

### kendo:grid-columnHide

Fired when the user hides a column.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [columnHide](/api/web/grid#events-columnHide) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-columnHide>
            <script>
                function(e) {
                    // Code to handle the columnHide event.
                }
            </script>
        </kendo:grid-columnHide>
    </kendo:grid>

### kendo:grid-columnMenuInit

Fired when the column menu is initialized.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [columnMenuInit](/api/web/grid#events-columnMenuInit) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-columnMenuInit>
            <script>
                function(e) {
                    // Code to handle the columnMenuInit event.
                }
            </script>
        </kendo:grid-columnMenuInit>
    </kendo:grid>

### kendo:grid-columnReorder

Fired when the user changes the order of a column.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [columnReorder](/api/web/grid#events-columnReorder) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-columnReorder>
            <script>
                function(e) {
                    // Code to handle the columnReorder event.
                }
            </script>
        </kendo:grid-columnReorder>
    </kendo:grid>

### kendo:grid-columnResize

Fired when the user resizes a column.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [columnResize](/api/web/grid#events-columnResize) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-columnResize>
            <script>
                function(e) {
                    // Code to handle the columnResize event.
                }
            </script>
        </kendo:grid-columnResize>
    </kendo:grid>

### kendo:grid-columnShow

Fired when the user shows a column.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [columnShow](/api/web/grid#events-columnShow) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-columnShow>
            <script>
                function(e) {
                    // Code to handle the columnShow event.
                }
            </script>
        </kendo:grid-columnShow>
    </kendo:grid>

### kendo:grid-dataBinding

Fired before the widget binds to its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBinding](/api/web/grid#events-dataBinding) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-dataBinding>
            <script>
                function(e) {
                    // Code to handle the dataBinding event.
                }
            </script>
        </kendo:grid-dataBinding>
    </kendo:grid>

### kendo:grid-dataBound

Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBound](/api/web/grid#events-dataBound) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-dataBound>
            <script>
                function(e) {
                    // Code to handle the dataBound event.
                }
            </script>
        </kendo:grid-dataBound>
    </kendo:grid>

### kendo:grid-detailCollapse

Fired when the user collapses a detail table row.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [detailCollapse](/api/web/grid#events-detailCollapse) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-detailCollapse>
            <script>
                function(e) {
                    // Code to handle the detailCollapse event.
                }
            </script>
        </kendo:grid-detailCollapse>
    </kendo:grid>

### kendo:grid-detailExpand

Fired when the user expands a detail table row.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [detailExpand](/api/web/grid#events-detailExpand) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-detailExpand>
            <script>
                function(e) {
                    // Code to handle the detailExpand event.
                }
            </script>
        </kendo:grid-detailExpand>
    </kendo:grid>

### kendo:grid-detailInit

Fired when a detail table row is initialized.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [detailInit](/api/web/grid#events-detailInit) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-detailInit>
            <script>
                function(e) {
                    // Code to handle the detailInit event.
                }
            </script>
        </kendo:grid-detailInit>
    </kendo:grid>

### kendo:grid-edit

Fired when the user edits or creates a data item.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [edit](/api/web/grid#events-edit) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-edit>
            <script>
                function(e) {
                    // Code to handle the edit event.
                }
            </script>
        </kendo:grid-edit>
    </kendo:grid>

### kendo:grid-filterMenuInit

Fired when the grid filter menu is initialized.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [filterMenuInit](/api/web/grid#events-filterMenuInit) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-filterMenuInit>
            <script>
                function(e) {
                    // Code to handle the filterMenuInit event.
                }
            </script>
        </kendo:grid-filterMenuInit>
    </kendo:grid>

### kendo:grid-remove

Fired when the user clicks the "destroy" command button.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [remove](/api/web/grid#events-remove) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-remove>
            <script>
                function(e) {
                    // Code to handle the remove event.
                }
            </script>
        </kendo:grid-remove>
    </kendo:grid>

### kendo:grid-save

Fired when a data item is saved.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [save](/api/web/grid#events-save) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-save>
            <script>
                function(e) {
                    // Code to handle the save event.
                }
            </script>
        </kendo:grid-save>
    </kendo:grid>

### kendo:grid-saveChanges

Fired when the user clicks the "save" command button.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [saveChanges](/api/web/grid#events-saveChanges) event documentation.

#### Example
    <kendo:grid>
        <kendo:grid-saveChanges>
            <script>
                function(e) {
                    // Code to handle the saveChanges event.
                }
            </script>
        </kendo:grid-saveChanges>
    </kendo:grid>

