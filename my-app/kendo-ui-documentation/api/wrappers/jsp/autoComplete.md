---
title: autoComplete
slug: jsp-autoComplete
tags: api, java
publish: true
---

# \<kendo:autoComplete\>
A JSP wrapper for Kendo UI [AutoComplete](/api/web/autocomplete).

## Configuration Attributes

### dataTextField `java.lang.String`

The field of the data item used when searching for suggestions.  This is the text that will be displayed in the list of matched results.

#### Example
    <kendo:autoComplete dataTextField="dataTextField">
    </kendo:autoComplete>

### delay `float`

The delay in milliseconds between a keystroke and when the widget displays the suggestion popup.

#### Example
    <kendo:autoComplete delay="delay">
    </kendo:autoComplete>

### enable `boolean`

If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.

#### Example
    <kendo:autoComplete enable="enable">
    </kendo:autoComplete>

### filter `java.lang.String`

The filtering method used to determine the suggestions for the current value. The default filter is "startswith" -
all data items which begin with the current widget value are displayed in the suggestion popup. The supported filter values are startswith, endswith and contains.

#### Example
    <kendo:autoComplete filter="filter">
    </kendo:autoComplete>

### height `float`

The height of the suggestion popup in pixels. The default value is 200 pixels.

#### Example
    <kendo:autoComplete height="height">
    </kendo:autoComplete>

### highlightFirst `boolean`

If set to true the first suggestion will be automatically highlighted.

#### Example
    <kendo:autoComplete highlightFirst="highlightFirst">
    </kendo:autoComplete>

### ignoreCase `boolean`

If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.

#### Example
    <kendo:autoComplete ignoreCase="ignoreCase">
    </kendo:autoComplete>

### minLength `float`

The minimum number of characters the user must type before a search is performed. Set to higher value than 1 if the search could match a lot of items.

#### Example
    <kendo:autoComplete minLength="minLength">
    </kendo:autoComplete>

### placeholder `java.lang.String`

The hint displayed by the widget when it is empty. Not set by default.

#### Example
    <kendo:autoComplete placeholder="placeholder">
    </kendo:autoComplete>

### separator `java.lang.String`

The character used to separate multiple values. Empty by default.

#### Example
    <kendo:autoComplete separator="separator">
    </kendo:autoComplete>

### suggest `boolean`

If set to true the widget will automatically use the first suggestion as its value.

#### Example
    <kendo:autoComplete suggest="suggest">
    </kendo:autoComplete>

### template `java.lang.String`

The template used to render the suggestions. By default the widget displays only the text of the suggestion (configured via dataTextField).

#### Example
    <kendo:autoComplete template="template">
    </kendo:autoComplete>

### valuePrimitive `boolean`

Spcifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item text field. If set to false, the View-Model field will be updated with the selected item.

#### Example
    <kendo:autoComplete valuePrimitive="valuePrimitive">
    </kendo:autoComplete>


##  Configuration JSP Tags

### kendo:autoComplete-animation

Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.

More documentation is available at [kendo:autoComplete-animation](autocomplete/animation).

#### Example

    <kendo:autoComplete>
        <kendo:autoComplete-animation></kendo:autoComplete-animation>
    </kendo:autoComplete>


## Event Attributes

### change `String`

Fired when the value of the widget is changed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [change](/api/web/autocomplete#events-change) event documentation.

#### Example
    <kendo:autoComplete change="handle_change">
    </kendo:autoComplete>
    <script>
        function handle_change(e) {
            // Code to handle the change event.
        }
    </script>

### close `String`

Fired when the suggestion popup of the widget is closed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [close](/api/web/autocomplete#events-close) event documentation.

#### Example
    <kendo:autoComplete close="handle_close">
    </kendo:autoComplete>
    <script>
        function handle_close(e) {
            // Code to handle the close event.
        }
    </script>

### dataBound `String`

Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBound](/api/web/autocomplete#events-dataBound) event documentation.

#### Example
    <kendo:autoComplete dataBound="handle_dataBound">
    </kendo:autoComplete>
    <script>
        function handle_dataBound(e) {
            // Code to handle the dataBound event.
        }
    </script>

### open `String`

Fired when the suggestion popup of the widget is opened by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [open](/api/web/autocomplete#events-open) event documentation.

#### Example
    <kendo:autoComplete open="handle_open">
    </kendo:autoComplete>
    <script>
        function handle_open(e) {
            // Code to handle the open event.
        }
    </script>

### select `String`

Fired when an item from the suggestion popup is selected by the user.


For additional information check the [select](/api/web/autocomplete#events-select) event documentation.

#### Example
    <kendo:autoComplete select="handle_select">
    </kendo:autoComplete>
    <script>
        function handle_select(e) {
            // Code to handle the select event.
        }
    </script>

## Event Tags

### kendo:autoComplete-change

Fired when the value of the widget is changed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [change](/api/web/autocomplete#events-change) event documentation.

#### Example
    <kendo:autoComplete>
        <kendo:autoComplete-change>
            <script>
                function(e) {
                    // Code to handle the change event.
                }
            </script>
        </kendo:autoComplete-change>
    </kendo:autoComplete>

### kendo:autoComplete-close

Fired when the suggestion popup of the widget is closed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [close](/api/web/autocomplete#events-close) event documentation.

#### Example
    <kendo:autoComplete>
        <kendo:autoComplete-close>
            <script>
                function(e) {
                    // Code to handle the close event.
                }
            </script>
        </kendo:autoComplete-close>
    </kendo:autoComplete>

### kendo:autoComplete-dataBound

Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBound](/api/web/autocomplete#events-dataBound) event documentation.

#### Example
    <kendo:autoComplete>
        <kendo:autoComplete-dataBound>
            <script>
                function(e) {
                    // Code to handle the dataBound event.
                }
            </script>
        </kendo:autoComplete-dataBound>
    </kendo:autoComplete>

### kendo:autoComplete-open

Fired when the suggestion popup of the widget is opened by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [open](/api/web/autocomplete#events-open) event documentation.

#### Example
    <kendo:autoComplete>
        <kendo:autoComplete-open>
            <script>
                function(e) {
                    // Code to handle the open event.
                }
            </script>
        </kendo:autoComplete-open>
    </kendo:autoComplete>

### kendo:autoComplete-select

Fired when an item from the suggestion popup is selected by the user.


For additional information check the [select](/api/web/autocomplete#events-select) event documentation.

#### Example
    <kendo:autoComplete>
        <kendo:autoComplete-select>
            <script>
                function(e) {
                    // Code to handle the select event.
                }
            </script>
        </kendo:autoComplete-select>
    </kendo:autoComplete>

