---
title: dropDownList
slug: jsp-dropDownList
tags: api, java
publish: true
---

# \<kendo:dropDownList\>
A JSP wrapper for Kendo UI [DropDownList](/api/web/dropdownlist).

## Configuration Attributes

### autoBind `boolean`

Controls whether to bind the widget to the data source on initialization.

#### Example
    <kendo:dropDownList autoBind="autoBind">
    </kendo:dropDownList>

### cascadeFrom `java.lang.String`

Use it to set the Id of the parent dropdownlist widget.
Help topic showing how cascading functionality works

#### Example
    <kendo:dropDownList cascadeFrom="cascadeFrom">
    </kendo:dropDownList>

### dataTextField `java.lang.String`

The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.

#### Example
    <kendo:dropDownList dataTextField="dataTextField">
    </kendo:dropDownList>

### dataValueField `java.lang.String`

The field of the data item that provides the value of the widget.

#### Example
    <kendo:dropDownList dataValueField="dataValueField">
    </kendo:dropDownList>

### delay `float`

Specifies the delay in milliseconds before the search-text typed by the end user is cleared.

#### Example
    <kendo:dropDownList delay="delay">
    </kendo:dropDownList>

### enable `boolean`

If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.

#### Example
    <kendo:dropDownList enable="enable">
    </kendo:dropDownList>

### height `float`

The height of the suggestion popup in pixels. The default value is 200 pixels.

#### Example
    <kendo:dropDownList height="height">
    </kendo:dropDownList>

### ignoreCase `java.lang.String`

If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.

#### Example
    <kendo:dropDownList ignoreCase="ignoreCase">
    </kendo:dropDownList>

### index `float`

The index of the initially selected item. The index is 0 based.

#### Example
    <kendo:dropDownList index="index">
    </kendo:dropDownList>

### optionLabel `java.lang.Object`

Define the text of the default empty item. If the value is an object, then the widget will use it a valid data item.
 Note that the optionLabel will not be available if the widget is empty.

#### Example
    <kendo:dropDownList optionLabel="optionLabel">
    </kendo:dropDownList>

### template `java.lang.String`

The template used to render the items. By default the widget displays only the text of the data item (configured via dataTextField).

#### Example
    <kendo:dropDownList template="template">
    </kendo:dropDownList>

### text `java.lang.String`

The text of the widget used when the autoBind is set to false.

#### Example
    <kendo:dropDownList text="text">
    </kendo:dropDownList>

### value `java.lang.String`

The value of the widget.

#### Example
    <kendo:dropDownList value="value">
    </kendo:dropDownList>

### valuePrimitive `boolean`

Spcifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.

#### Example
    <kendo:dropDownList valuePrimitive="valuePrimitive">
    </kendo:dropDownList>


##  Configuration JSP Tags

### kendo:dropDownList-animation

Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.

More documentation is available at [kendo:dropDownList-animation](dropdownlist/animation).

#### Example

    <kendo:dropDownList>
        <kendo:dropDownList-animation></kendo:dropDownList-animation>
    </kendo:dropDownList>


## Event Attributes

### change `String`

Fired when the value of the widget is changed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [change](/api/web/dropdownlist#events-change) event documentation.

#### Example
    <kendo:dropDownList change="handle_change">
    </kendo:dropDownList>
    <script>
        function handle_change(e) {
            // Code to handle the change event.
        }
    </script>

### close `String`

Fired when the popup of the widget is closed.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [close](/api/web/dropdownlist#events-close) event documentation.

#### Example
    <kendo:dropDownList close="handle_close">
    </kendo:dropDownList>
    <script>
        function handle_close(e) {
            // Code to handle the close event.
        }
    </script>

### dataBound `String`

Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBound](/api/web/dropdownlist#events-dataBound) event documentation.

#### Example
    <kendo:dropDownList dataBound="handle_dataBound">
    </kendo:dropDownList>
    <script>
        function handle_dataBound(e) {
            // Code to handle the dataBound event.
        }
    </script>

### open `String`

Fired when the popup of the widget is opened by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [open](/api/web/dropdownlist#events-open) event documentation.

#### Example
    <kendo:dropDownList open="handle_open">
    </kendo:dropDownList>
    <script>
        function handle_open(e) {
            // Code to handle the open event.
        }
    </script>

### select `String`

Fired when an item from the popup is selected by the user.


For additional information check the [select](/api/web/dropdownlist#events-select) event documentation.

#### Example
    <kendo:dropDownList select="handle_select">
    </kendo:dropDownList>
    <script>
        function handle_select(e) {
            // Code to handle the select event.
        }
    </script>

### cascade `String`

Fired when the value of the widget is changed via API or user interactionTriggered.


For additional information check the [cascade](/api/web/dropdownlist#events-cascade) event documentation.

#### Example
    <kendo:dropDownList cascade="handle_cascade">
    </kendo:dropDownList>
    <script>
        function handle_cascade(e) {
            // Code to handle the cascade event.
        }
    </script>

## Event Tags

### kendo:dropDownList-change

Fired when the value of the widget is changed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [change](/api/web/dropdownlist#events-change) event documentation.

#### Example
    <kendo:dropDownList>
        <kendo:dropDownList-change>
            <script>
                function(e) {
                    // Code to handle the change event.
                }
            </script>
        </kendo:dropDownList-change>
    </kendo:dropDownList>

### kendo:dropDownList-close

Fired when the popup of the widget is closed.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [close](/api/web/dropdownlist#events-close) event documentation.

#### Example
    <kendo:dropDownList>
        <kendo:dropDownList-close>
            <script>
                function(e) {
                    // Code to handle the close event.
                }
            </script>
        </kendo:dropDownList-close>
    </kendo:dropDownList>

### kendo:dropDownList-dataBound

Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBound](/api/web/dropdownlist#events-dataBound) event documentation.

#### Example
    <kendo:dropDownList>
        <kendo:dropDownList-dataBound>
            <script>
                function(e) {
                    // Code to handle the dataBound event.
                }
            </script>
        </kendo:dropDownList-dataBound>
    </kendo:dropDownList>

### kendo:dropDownList-open

Fired when the popup of the widget is opened by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [open](/api/web/dropdownlist#events-open) event documentation.

#### Example
    <kendo:dropDownList>
        <kendo:dropDownList-open>
            <script>
                function(e) {
                    // Code to handle the open event.
                }
            </script>
        </kendo:dropDownList-open>
    </kendo:dropDownList>

### kendo:dropDownList-select

Fired when an item from the popup is selected by the user.


For additional information check the [select](/api/web/dropdownlist#events-select) event documentation.

#### Example
    <kendo:dropDownList>
        <kendo:dropDownList-select>
            <script>
                function(e) {
                    // Code to handle the select event.
                }
            </script>
        </kendo:dropDownList-select>
    </kendo:dropDownList>

### kendo:dropDownList-cascade

Fired when the value of the widget is changed via API or user interactionTriggered.


For additional information check the [cascade](/api/web/dropdownlist#events-cascade) event documentation.

#### Example
    <kendo:dropDownList>
        <kendo:dropDownList-cascade>
            <script>
                function(e) {
                    // Code to handle the cascade event.
                }
            </script>
        </kendo:dropDownList-cascade>
    </kendo:dropDownList>

