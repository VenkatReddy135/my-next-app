---
title: comboBox
slug: jsp-comboBox
tags: api, java
publish: true
---

# \<kendo:comboBox\>
A JSP wrapper for Kendo UI [ComboBox](/api/web/combobox).

## Configuration Attributes

### autoBind `boolean`

Controls whether to bind the widget to the data source on initialization.

#### Example
    <kendo:comboBox autoBind="autoBind">
    </kendo:comboBox>

### cascadeFrom `java.lang.String`

Use it to set the Id of the parent ComboBox widget.
Help topic showing how cascading functionality works

#### Example
    <kendo:comboBox cascadeFrom="cascadeFrom">
    </kendo:comboBox>

### dataTextField `java.lang.String`

The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.

#### Example
    <kendo:comboBox dataTextField="dataTextField">
    </kendo:comboBox>

### dataValueField `java.lang.String`

The field of the data item that provides the value of the widget.

#### Example
    <kendo:comboBox dataValueField="dataValueField">
    </kendo:comboBox>

### delay `float`

The delay in milliseconds between a keystroke and when the widget displays the popup.

#### Example
    <kendo:comboBox delay="delay">
    </kendo:comboBox>

### enable `boolean`

If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.

#### Example
    <kendo:comboBox enable="enable">
    </kendo:comboBox>

### filter `java.lang.String`

The filtering method used to determine the suggestions for the current value. Filtration is turned of by default.
The supported filter values are startswith, endswith and contains.

#### Example
    <kendo:comboBox filter="filter">
    </kendo:comboBox>

### height `float`

The height of the suggestion popup in pixels. The default value is 200 pixels.

#### Example
    <kendo:comboBox height="height">
    </kendo:comboBox>

### highlightFirst `boolean`

If set to true the first suggestion will be automatically highlighted.

#### Example
    <kendo:comboBox highlightFirst="highlightFirst">
    </kendo:comboBox>

### ignoreCase `java.lang.String`

If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.

#### Example
    <kendo:comboBox ignoreCase="ignoreCase">
    </kendo:comboBox>

### index `float`

The index of the initially selected item. The index is 0 based.

#### Example
    <kendo:comboBox index="index">
    </kendo:comboBox>

### minLength `float`

The minimum number of characters the user must type before a search is performed. Set to higher value than 1 if the search could match a lot of items.

#### Example
    <kendo:comboBox minLength="minLength">
    </kendo:comboBox>

### placeholder `java.lang.String`

The hint displayed by the widget when it is empty. Not set by default.

#### Example
    <kendo:comboBox placeholder="placeholder">
    </kendo:comboBox>

### suggest `boolean`

If set to true the widget will automatically use the first suggestion as its value.

#### Example
    <kendo:comboBox suggest="suggest">
    </kendo:comboBox>

### template `java.lang.String`

The template used to render the items. By default the widget displays only the text of the data item (configured via dataTextField).

#### Example
    <kendo:comboBox template="template">
    </kendo:comboBox>

### text `java.lang.String`

The text of the widget used when the autoBind is set to false.

#### Example
    <kendo:comboBox text="text">
    </kendo:comboBox>

### value `java.lang.String`

The value of the widget.

#### Example
    <kendo:comboBox value="value">
    </kendo:comboBox>

### valuePrimitive `boolean`

Specifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.

#### Example
    <kendo:comboBox valuePrimitive="valuePrimitive">
    </kendo:comboBox>


##  Configuration JSP Tags

### kendo:comboBox-animation

Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.

More documentation is available at [kendo:comboBox-animation](combobox/animation).

#### Example

    <kendo:comboBox>
        <kendo:comboBox-animation></kendo:comboBox-animation>
    </kendo:comboBox>


## Event Attributes

### change `String`

Fired when the value of the widget is changed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [change](/api/web/combobox#events-change) event documentation.

#### Example
    <kendo:comboBox change="handle_change">
    </kendo:comboBox>
    <script>
        function handle_change(e) {
            // Code to handle the change event.
        }
    </script>

### close `String`

Fired when the popup of the widget is closed.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [close](/api/web/combobox#events-close) event documentation.

#### Example
    <kendo:comboBox close="handle_close">
    </kendo:comboBox>
    <script>
        function handle_close(e) {
            // Code to handle the close event.
        }
    </script>

### dataBound `String`

Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBound](/api/web/combobox#events-dataBound) event documentation.

#### Example
    <kendo:comboBox dataBound="handle_dataBound">
    </kendo:comboBox>
    <script>
        function handle_dataBound(e) {
            // Code to handle the dataBound event.
        }
    </script>

### open `String`

Fired when the popup of the widget is opened by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [open](/api/web/combobox#events-open) event documentation.

#### Example
    <kendo:comboBox open="handle_open">
    </kendo:comboBox>
    <script>
        function handle_open(e) {
            // Code to handle the open event.
        }
    </script>

### select `String`

Fired when an item from the popup is selected by the user.


For additional information check the [select](/api/web/combobox#events-select) event documentation.

#### Example
    <kendo:comboBox select="handle_select">
    </kendo:comboBox>
    <script>
        function handle_select(e) {
            // Code to handle the select event.
        }
    </script>

### cascade `String`

Fired when the value of the widget is changed via API or user interaction.


For additional information check the [cascade](/api/web/combobox#events-cascade) event documentation.

#### Example
    <kendo:comboBox cascade="handle_cascade">
    </kendo:comboBox>
    <script>
        function handle_cascade(e) {
            // Code to handle the cascade event.
        }
    </script>

## Event Tags

### kendo:comboBox-change

Fired when the value of the widget is changed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [change](/api/web/combobox#events-change) event documentation.

#### Example
    <kendo:comboBox>
        <kendo:comboBox-change>
            <script>
                function(e) {
                    // Code to handle the change event.
                }
            </script>
        </kendo:comboBox-change>
    </kendo:comboBox>

### kendo:comboBox-close

Fired when the popup of the widget is closed.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [close](/api/web/combobox#events-close) event documentation.

#### Example
    <kendo:comboBox>
        <kendo:comboBox-close>
            <script>
                function(e) {
                    // Code to handle the close event.
                }
            </script>
        </kendo:comboBox-close>
    </kendo:comboBox>

### kendo:comboBox-dataBound

Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBound](/api/web/combobox#events-dataBound) event documentation.

#### Example
    <kendo:comboBox>
        <kendo:comboBox-dataBound>
            <script>
                function(e) {
                    // Code to handle the dataBound event.
                }
            </script>
        </kendo:comboBox-dataBound>
    </kendo:comboBox>

### kendo:comboBox-open

Fired when the popup of the widget is opened by the user.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [open](/api/web/combobox#events-open) event documentation.

#### Example
    <kendo:comboBox>
        <kendo:comboBox-open>
            <script>
                function(e) {
                    // Code to handle the open event.
                }
            </script>
        </kendo:comboBox-open>
    </kendo:comboBox>

### kendo:comboBox-select

Fired when an item from the popup is selected by the user.


For additional information check the [select](/api/web/combobox#events-select) event documentation.

#### Example
    <kendo:comboBox>
        <kendo:comboBox-select>
            <script>
                function(e) {
                    // Code to handle the select event.
                }
            </script>
        </kendo:comboBox-select>
    </kendo:comboBox>

### kendo:comboBox-cascade

Fired when the value of the widget is changed via API or user interaction.


For additional information check the [cascade](/api/web/combobox#events-cascade) event documentation.

#### Example
    <kendo:comboBox>
        <kendo:comboBox-cascade>
            <script>
                function(e) {
                    // Code to handle the cascade event.
                }
            </script>
        </kendo:comboBox-cascade>
    </kendo:comboBox>

