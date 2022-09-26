---
title: multiSelect
slug: jsp-multiSelect
tags: api, java
publish: true
---

# \<kendo:multiSelect\>
A JSP wrapper for Kendo UI [MultiSelect](/api/web/multiselect).

## Configuration Attributes

### autoBind `boolean`

Controls whether to bind the widget to the data source on initialization.

#### Example
    <kendo:multiSelect autoBind="autoBind">
    </kendo:multiSelect>

### dataTextField `java.lang.String`

The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.

#### Example
    <kendo:multiSelect dataTextField="dataTextField">
    </kendo:multiSelect>

### dataValueField `java.lang.String`

The field of the data item that provides the value of the widget.

#### Example
    <kendo:multiSelect dataValueField="dataValueField">
    </kendo:multiSelect>

### delay `float`

Specifies the delay in milliseconds after which the multiselect will start filtering dataSource.

#### Example
    <kendo:multiSelect delay="delay">
    </kendo:multiSelect>

### enable `boolean`

If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.

#### Example
    <kendo:multiSelect enable="enable">
    </kendo:multiSelect>

### filter `java.lang.String`

The filtering method used to determine the suggestions for the current value. Filtration is turned of by default.
The supported filter values are startswith, endswith and contains.

#### Example
    <kendo:multiSelect filter="filter">
    </kendo:multiSelect>

### height `float`

The height of the suggestion popup in pixels. The default value is 200 pixels.

#### Example
    <kendo:multiSelect height="height">
    </kendo:multiSelect>

### highlightFirst `boolean`

If set to true the first suggestion will be automatically highlighted.

#### Example
    <kendo:multiSelect highlightFirst="highlightFirst">
    </kendo:multiSelect>

### ignoreCase `java.lang.String`

If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.

#### Example
    <kendo:multiSelect ignoreCase="ignoreCase">
    </kendo:multiSelect>

### itemTemplate `java.lang.String`

The template used to render the items in the popup list.

#### Example
    <kendo:multiSelect itemTemplate="itemTemplate">
    </kendo:multiSelect>

### maxSelectedItems `float`

Defines the limit of the selected items. If set to null widget will not limit number of the selected items.

#### Example
    <kendo:multiSelect maxSelectedItems="maxSelectedItems">
    </kendo:multiSelect>

### minLength `float`

The minimum number of characters the user must type before a search is performed. Set to higher value than 1 if the search could match a lot of items.

#### Example
    <kendo:multiSelect minLength="minLength">
    </kendo:multiSelect>

### placeholder `java.lang.String`

The hint displayed by the widget when it is empty. Not set by default.

#### Example
    <kendo:multiSelect placeholder="placeholder">
    </kendo:multiSelect>

### tagTemplate `java.lang.String`

The template used to render the tags.

#### Example
    <kendo:multiSelect tagTemplate="tagTemplate">
    </kendo:multiSelect>

### value `java.lang.Object`

Define the value of the widget

#### Example
    <kendo:multiSelect value="value">
    </kendo:multiSelect>


##  Configuration JSP Tags

### kendo:multiSelect-animation

Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.

More documentation is available at [kendo:multiSelect-animation](multiselect/animation).

#### Example

    <kendo:multiSelect>
        <kendo:multiSelect-animation></kendo:multiSelect-animation>
    </kendo:multiSelect>


## Event Attributes

### change `String`

Fired when the value of the widget is changed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [change](/api/web/multiselect#events-change) event documentation.

#### Example
    <kendo:multiSelect change="handle_change">
    </kendo:multiSelect>
    <script>
        function handle_change(e) {
            // Code to handle the change event.
        }
    </script>

### close `String`

Fired when the popup of the widget is closed.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [close](/api/web/multiselect#events-close) event documentation.

#### Example
    <kendo:multiSelect close="handle_close">
    </kendo:multiSelect>
    <script>
        function handle_close(e) {
            // Code to handle the close event.
        }
    </script>

### dataBound `String`

Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBound](/api/web/multiselect#events-dataBound) event documentation.

#### Example
    <kendo:multiSelect dataBound="handle_dataBound">
    </kendo:multiSelect>
    <script>
        function handle_dataBound(e) {
            // Code to handle the dataBound event.
        }
    </script>

### open `String`

Fired when the popup of the widget is opened by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [open](/api/web/multiselect#events-open) event documentation.

#### Example
    <kendo:multiSelect open="handle_open">
    </kendo:multiSelect>
    <script>
        function handle_open(e) {
            // Code to handle the open event.
        }
    </script>

### select `String`

Fired when an item from the popup is selected by the user.


For additional information check the [select](/api/web/multiselect#events-select) event documentation.

#### Example
    <kendo:multiSelect select="handle_select">
    </kendo:multiSelect>
    <script>
        function handle_select(e) {
            // Code to handle the select event.
        }
    </script>

## Event Tags

### kendo:multiSelect-change

Fired when the value of the widget is changed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [change](/api/web/multiselect#events-change) event documentation.

#### Example
    <kendo:multiSelect>
        <kendo:multiSelect-change>
            <script>
                function(e) {
                    // Code to handle the change event.
                }
            </script>
        </kendo:multiSelect-change>
    </kendo:multiSelect>

### kendo:multiSelect-close

Fired when the popup of the widget is closed.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [close](/api/web/multiselect#events-close) event documentation.

#### Example
    <kendo:multiSelect>
        <kendo:multiSelect-close>
            <script>
                function(e) {
                    // Code to handle the close event.
                }
            </script>
        </kendo:multiSelect-close>
    </kendo:multiSelect>

### kendo:multiSelect-dataBound

Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBound](/api/web/multiselect#events-dataBound) event documentation.

#### Example
    <kendo:multiSelect>
        <kendo:multiSelect-dataBound>
            <script>
                function(e) {
                    // Code to handle the dataBound event.
                }
            </script>
        </kendo:multiSelect-dataBound>
    </kendo:multiSelect>

### kendo:multiSelect-open

Fired when the popup of the widget is opened by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [open](/api/web/multiselect#events-open) event documentation.

#### Example
    <kendo:multiSelect>
        <kendo:multiSelect-open>
            <script>
                function(e) {
                    // Code to handle the open event.
                }
            </script>
        </kendo:multiSelect-open>
    </kendo:multiSelect>

### kendo:multiSelect-select

Fired when an item from the popup is selected by the user.


For additional information check the [select](/api/web/multiselect#events-select) event documentation.

#### Example
    <kendo:multiSelect>
        <kendo:multiSelect-select>
            <script>
                function(e) {
                    // Code to handle the select event.
                }
            </script>
        </kendo:multiSelect-select>
    </kendo:multiSelect>

