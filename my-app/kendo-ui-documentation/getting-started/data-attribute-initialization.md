---
title:  Data Attribute Initialization
meta_title: Data Attribute Initialization and Configuration
meta_description: Learn how to initialize and configure each Kendo UI widget by setting a data attribute.
slug: gs-data-attribute-initialization
tags: 101, Getting Started, widgets
Publish: true
related: gs-widgets
---

# Data Attribute Initialization

In addition to the jQuery plugin initialization, each kendo widget can be initialized and configured via data attributes. You need to set the `role` data attribute
of the target element and call [kendo.init](/api/framework/kendo#methods-init).

Data attribute initialization is convenient when there are a lot of Kendo UI widgets in the page. First the widget configuration stays with the target element. Second
there is no need to find all elements to invoke the Kendo jQuery plugins - you only need to call `kendo.init` once.

Kendo UI Mobile applications work primarily with data attribute configuration.

### Example - initialize a Kendo UI widget using a data attributes

    <div id="container">
        <input data-role="numerictextbox" />
    </div>
    <script>
    kendo.init($("#container"));
    </script>

The `kendo.init($("#container"))` statement finds all elements that have the `role` data attribute set and initializes Kendo UI widgets.

> The value of the `role` data attribute is the name of the widget in lower case e.g. "autocomplete", "dropdownlist" etc.

By default, `kendo.init` initializes only Kendo UI Web and Kendo UI DataViz widgets (in that order). This behavior can be changed by passing additional namespaces as parameters. The Kendo UI Mobile [Application](/getting-started/mobile/application)
initializes first Kendo UI Mobile widgets, then Kendo UI Web widgets and finally Kendo UI DataViz widgets. This means that an element with `data-role="listview"` will be initialized as a Kendo UI Mobile ListView in a Kendo UI Mobile Application.

The data-role attribute also accepts full widget class name (with its namespace) as value.

### Example - set role attribute to the full widget name
    <div data-role="view">
        <!-- specify the Kendo UI Web ListView widget -->
        <div data-role="kendo.ui.ListView"></div>
    </div>
    <script>
    var app = new kendo.mobile.Application();
    </script>

### Example - instantiate mobile and web widgets in a given element

    <div id="container">
        <input data-role="numerictextbox" />
        <button data-role="button">Mobile button</button>
    </div>
    <script>
    kendo.init($("#container"), kendo.ui, kendo.mobile.ui);
    </script>

## Configuration

Each widget configuration option can be set via a data attribute of the target element. Just add the "data-" prefix to the name of the configuration option and specify its value e.g. `data-delay="100"`.

> Camel-cased options are set via dash-separated attributes. For example, the [ignoreCase](/api/web/autocomplete#configuration-ignoreCase) option of the AutoComplete is set via `data-ignore-case`.

Options, which start with `data` do not require an additional "data" in the attribute name e.g. the `dataTextField` option is set via the `data-text-field` attribute and `dataSource` is set via the
`data-source` attribute.

Complex configuration options are set as JavaScript object literals: `data-source="{data: [{name: 'John Doe'},{name: 'Jane Doe'}]}"`.

### Example - configure a Kendo UI Widget with data attributes

    <div id="container">
        <input data-role="autocomplete"
               data-ignore-case="true"
               data-text-field="name"
               data-source="{data: [{name: 'John Doe'},{name: 'Jane Doe'}]}" />
    </div>
    <script>
    kendo.init($("#container"));
    </script>

## Events

You can also subscribe to Kendo UI widget events via data attributes. The value of the data attribute will be resolved as a JavaScript function, available in the global scope.

### Example - subscribe to a Kendo UI widget event via data attribute

    <div id="container">
        <input data-role="numerictextbox" data-change="numerictextbox_change" />
    </div>
    <script>
    function numerictextbox_change(e) {
        // Handle the "change" event
    }
    kendo.init($("#container"));
    </script>

Event handlers can also be set to member functions. For example an event data attribute can be set to `foo.bar` which is resolved as the `bar` method of the `foo` object which is available in the global scope.

### Example - use member function as event handler

    <div id="container">
        <input data-role="numerictextbox" data-change="handler.numerictextbox_change" />
    </div>
    <script>
    var handler = {
        numerictextbox_change: function (e) {
            // Handle the "change" event
        }
    };
    kendo.init($("#container"));
    </script>

## DataSource

The data source of data-bound Kendo UI widgets can also be set via data attribute. The value can be a JavaScript object, array or a variable available in the global scope.

### Example - set the data source of a Kendo UI widget to a JavaScript object

    <div id="container">
        <input data-role="autocomplete" data-source="{data:['One', 'Two']}" />
    </div>
    <script>
    kendo.init($("#container"));
    </script>

### Example - set the data source of a Kendo UI widget to a JavaScript array

    <div id="container">
        <input data-role="autocomplete" data-source="['One', 'Two']" />
    </div>
    <script>
    kendo.init($("#container"));
    </script>

### Example - set the data source of a Kendo UI widget to a variable available in the global scope

    <div id="container">
        <input data-role="autocomplete" data-source="dataSource" />
    </div>
    <script>
    var dataSource = new kendo.data.DataSource( {
        data: [ "One", "Two" ]
    });
    kendo.init($("#container"));
    </script>

## Templates

Template configuration can be set via data attributes as well. The attribute value will be resolved as the `id` attribute of a `script` element which represents the
template.

### Example - set the template of a Kendo UI widget

    <div id="container">
        <input data-role="autocomplete"
               data-source="[{firstName:'John', lastName: 'Doe'}, {firstName:'Jane', lastName: 'Doe'}]"
               data-text-field="firstName"
               data-template="template" />
    </div>
    <script id="template" type="text/x-kendo-template">
        <span>#: firstName # #: lastName #</span>
    </script>
    <script>
    kendo.init($("#container"));
    </script>
