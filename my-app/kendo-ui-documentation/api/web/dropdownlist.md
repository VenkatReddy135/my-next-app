---
title: kendo.ui.DropDownList
meta_title: Configuration, methods and events of Kendo UI DropDownList
meta_description: Learn how to control your DropDown UI widget's behavior to suit your needs: open, close, enable, disable the widget. Events data and code examples available.
slug: api-web-dropdownlist
relatedDocs: gs-web-dropdownlist-overview
tags: api,web
publish: true
---

# kendo.ui.DropDownList

Represents the Kendo UI DropDownList widget. Inherits from [Widget](/api/framework/widget).

## Configuration

### animation `Object`

Configures the opening and closing animations of the suggestion popup. Setting the `animation` option to `false` will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.

#### Example - disable open and close animations

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      animation: false
    });
    </script>

#### Example - configure the animation

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      animation: {
       close: {
         effects: "fadeOut zoom:out",
         duration: 300
       },
       open: {
         effects: "fadeIn zoom:in",
         duration: 300
       }
      }
    });
    </script>

### animation.close `Object`

#### Example - configure the close animation

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      animation: {
       close: {
         effects: "zoom:out",
         duration: 300
       }
      }
    });
    </script>

### animation.close.effects `String`

The effect(s) to use when playing the close animation. Multiple effects should be separated with a space.

[Complete list of available animations](/api/framework/fx#effects)

### animation.close.duration `Number` *(default: 100)*

The duration of the close animation in milliseconds.

### animation.open `Object`

The animation played when the suggestion popup is opened.

#### Example - configure the open animation

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      animation: {
       open: {
         effects: "zoom:in",
         duration: 300
       }
      }
    });
    </script>

### animation.open.effects `String`

The effect(s) to use when playing the open animation. Multiple effects should be separated with a space.

[Complete list of available animations](/api/framework/fx#effects)

### animation.open.duration `Number` *(default: 200)*

The duration of the open animation in milliseconds.

### autoBind `Boolean`*(default: true)*

Controls whether to bind the widget to the data source on initialization.

#### Example

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
        autoBind: false
    });
    </script>

### cascadeFrom `String`

Use it to set the Id of the parent dropdownlist widget.
[Help topic showing how cascading functionality works](/web/dropdownlist/cascading)

#### Example

    <input id="parent" />
    <input id="child" />
    <script>
    $("#parent").kendoComboBox({
        dataTextField: "parentName",
        dataValueField: "parentId",
        dataSource: [
            { parentName: "Parent1", parentId: 1 },
            { parentName: "Parent2", parentId: 2 }
        ]
    });

    $("#child").kendoComboBox({
        cascadeFrom: "parent",
        dataTextField: "childName",
        dataValueField: "childId",
        dataSource: [
            { childName: "Child1", childId: 1, parentId: 1 },
            { childName: "Child2", childId: 2, parentId: 2 },
            { childName: "Child3", childId: 3, parentId: 1 },
            { childName: "Child4", childId: 4, parentId: 2 }
        ]
    });
    </script>

### dataSource `Object|Array|kendo.data.DataSource`

The data source of the widget which is used to display a list of values. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing [kendo.data.DataSource](/api/framework/datasource)
instance.

If the `dataSource` option is set to a JavaScript object or array the widget will initialize a new [kendo.data.DataSource](/api/framework/datasource) instance using that value as data source configuration.

If the `dataSource` option is an existing [kendo.data.DataSource](/api/framework/datasource) instance the widget will use that instance and will **not** initialize a new one.

#### Example - set dataSource as a JavaScript object

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: {
        data: ["One", "Two"]
      }
    });
    </script>

#### Example - set dataSource as a JavaScript array

    <input id="dropdownlist" />
    <script>
    var data = ["One", "Two"];
    $("#dropdownlist").kendoDropDownList({
      dataSource: data
    });
    </script>

#### Example - set dataSource as an existing kendo.data.DataSource instance

    <input id="dropdownlist" />
    <script>
    var dataSource = new kendo.data.DataSource({
      transport: {
        read: {
          url: "http://demos.kendoui.com/service/products",
          dataType: "jsonp"
        }
      }
    });
    $("#dropdownlist").kendoDropDownList({
      dataSource: dataSource,
      dataTextField: "ProductName",
      dataValueField: "ProductID"
    });
    </script>

### dataTextField `String`*(default: "")*

The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.

> **Important** When `dataTextField` is defined, the`dataValueField` option also should be set.

#### Example - set the dataTextField

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
        dataSource: [{
            { Name: "Parent1", Id: 1 },
            { Name: "Parent2", Id: 2 }
        }]
        dataTextField: "Name",
        dataValueField: "Id"
    });
    </script>

### dataValueField `String`*(default: "")*

The field of the data item that provides the value of the widget.

> **Important** When `dataValueField` is defined, the`dataTextField` option also should be set.

#### Example - set the dataValueField

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
        dataSource: [{
            { Name: "Parent1", Id: 1 },
            { Name: "Parent2", Id: 2 }
        }]
        dataTextField: "Name",
        dataValueField: "Id"
    });
    </script>

### delay `Number`*(default: 500)*

 Specifies the delay in milliseconds before the search-text typed by the end user is cleared.

#### Example - set the delay

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
        delay: 1000 // wait 1 second before clearing the user input
    });
    </script>

### enable `Boolean`*(default: true)*

If set to `false` the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.

#### Example - disable the widget

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      enable: false
    });
    </script>

### height `Number`*(default: 200)*

The height of the suggestion popup in pixels. The default value is 200 pixels.

#### Example - set the height

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      height: 500
    });
    </script>

### ignoreCase `String`*(default: true)*

If set to `false` case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.

#### Example - disable case-insensitive suggestions

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      ignoreCase: false
    });
    </script>

### index `Number`*(default: 0)*

The index of the initially selected item. The index is `0` based.

#### Example - select second item

    <input id="dropdownlist" />
    <script>
    var items = [{ text: "Item 1", value: "1" }, { text: "Item 2", value: "2" }];
    $("#dropdownlist").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: items,
        index: 1
    });
    </script>

### optionLabel `String | Object`*(default: "")*

 Define the text of the default empty item. If the value is an object, then the widget will use it a valid data item.
 Note that the optionLabel will not be available if the widget is empty.

> **Important:** If optionLabel is an object, it needs to have atleast dataValueField and dataTextField properties. Otherwise, widget will show `undefined`.

> **Important:** Widget's value will be equal to the optionLabel if the dataValueField and dataTextField options are equal or not defined

#### Example - specify optionLabel as a string

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
        dataSource: ["Apples", "Oranges"],
        optionLabel: "Select a fruit..."
    });
    </script>

#### Example - specify optionLabel as an object

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
        dataSource: [
            { productName: "Product 1", productId: 1 },
            { productName: "Product 2", productId: 2 }
        ],
        dataTextField: "productName",
        dataValueField: "productId",
        optionLabel: {
            productName: "Select a product...",
            productId: ""
        }
    });
    </script>

### template `String|Function`

The [template](/api/framework/kendo#methods-template) used to render the items. By default the widget displays only the text of the data item (configured via `dataTextField`).

#### Example - specify template as a function

    <input id="dropdownlist" />
    <script id="template" type="text/x-kendo-template">
      <span>
        <img src="/img/#: id #.png" alt="#: name #" />
        #: name #
      </span>
    </script>
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [
        { id: 1, name: "Apples" },
        { id: 2, name: "Oranges" }
      ],
      dataTextField: "name",
      dataValueField: "id",
      template: kendo.template($("#template").html())
    });
    </script>

#### Example - specify template as a string

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [
        { id: 1, name: "Apples" },
        { id: 2, name: "Oranges" }
      ],
      dataTextField: "name",
      dataValueField: "id",
      template: '<span><img src="/img/#: id #.png" alt="#: name #" />#: name #</span>'
    });
    </script>

### text `String`*(default: "")*

The text of the widget used when the `autoBind` is set to `false`.

#### Example - specify text of the widget

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
         autoBind: false,
         text: "Chai"
    });
    </script>

### value `String`*(default: "")*

The value of the widget.

#### Example - specify value of the widget

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
         dataSource: ["Item1", "Item2"],
         value: "Item1"
    });
    </script>

### valuePrimitive `Boolean`*(default: false)*

Spcifies the [value binding](/getting-started/framework/mvvm/bindings/value) behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.

#### Example - specify that the View-Model field should be updated with the selected item value

    <select id="dropdown" data-bind="value: selectedProductId, source: products" >
    </select>

    <script>
    $("#dropdown").kendoDropDownList({
      valuePrimitive: true,
      dataTextField: "name",
      dataValueField: "id",
      optionLabel: "Select product..."
    });
    var viewModel = kendo.observable({
      selectedProductId: null,
      products: [
        { id: 1, name: "Coffee" },
        { id: 2, name: "Tea" },
        { id: 3, name: "Juice" }
      ]
    });

    kendo.bind($("#dropdown"), viewModel);
    </script>

## Fields

### dataSource `kendo.data.DataSource`

The [data source](/api/framework/datasource) of the widget. Configured via the [dataSource](#configuration-dataSource) option.

> Changes of the data source will be reflected in the widget.

> **Important:** Assigning a new data source would have no effect. Use the [setDataSource](#methods-setDataSource) method instead.

#### Example - add a data item to the data source
    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [
        { name: "Apples" },
        { name: "Oranges" }
      ],
      dataTextField: "name",
      dataValueField: "name"
    });
    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");
    dropdownlist.dataSource.add({ name: "Appricot" });
    dropdownlist.search("A");
    </script>

### span `jQuery`
A jQuery object of the span element which holds the selected text.

#### Example - modify span element

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList();

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");

    var span = dropdownlist.span;

    span.css("background-color", "red");
    <script>

### options `Object`
An object, which holds the options of the widget.

#### Example - get options of the widget

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList();

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");

    var options = dropdownlist.options;
    <script>

### list `jQuery`
A jQuery object of the drop-down list element.

#### Example - get list element

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList();

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");

    var list = dropdownlist.list;
    <script>

### ul `jQuery`
A jQuery object of the ul element, which holds the available options.

#### Example - get ul element

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList();

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");

    var ul = dropdownlist.ul;
    <script>

## Methods

### close

Closes the widget popup.

#### Example - close the suggestion popup

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [ "Apples", "Oranges" ]
    });
    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");
    // Search for items starting with "A" - will open the suggestion popup and show "Apples"
    dropdownlist.search("A");
    // Close the suggestion popup
    dropdownlist.close();
    </script>

### dataItem

Returns the data item at the specified index. If the index is not specified, the selected index will be used.

#### Parameters

##### index `Number` *(optional)*

The zero-based index of the data record.

#### Returns

`Object` The raw data record. Returns <i>undefined</i> if no data.

#### Example

    <input id="dropdownlist" />
    <script>

    $("#dropdownlist").kendoDropDownList({
      dataSource: [
        { id: 1, name: "Apples" },
        { id: 2, name: "Oranges" }
      ],
      dataTextField: "name",
      dataValueField: "id",
      index: 1
    });

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");

    // get the dataItem corresponding to the selectedIndex.
    var dataItem = dropdownlist.dataItem();

    // get the dataItem corresponding to the passed index.
    var dataItem = dropdownlist.dataItem(0);
    </script>

### destroy
Prepares the **DropDownList** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.

> **Important:** This method does not remove the DropDownList element from DOM.

#### Example

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList();
    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");
    dropdownlist.destroy();
    </script>

### focus

Focuses the widget.

#### Example - focus the widget

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList();
    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");
    dropdownlist.focus();
    </script>

### open

Opens the popup.

#### Example

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [
        { id: 1, name: "Apples" },
        { id: 2, name: "Oranges" }
      ],
      dataTextField: "name",
      dataValueField: "id",
      index: 1
    });

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");
    dropdownlist.focus();
    </script>

### readonly

Controls whether the widget is editable or readonly.

#### Example

    // get a reference to the timepicker widget
    var timepicker = $("timepicker").data("kendoTimePicker");

    // makes timepicker readonly
    timepicker.readonly();

    // makes timepicker editable
    timepicker.readonly(false);

#### Parameters

##### readonly `Boolean`

The argument, which defines whether the timepicker should be readonly or editable.

### refresh

Refresh the popup by rendering all items again.

#### Example - refresh the popup items

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [
        { id: 1, name: "Apples" },
        { id: 2, name: "Oranges" }
      ],
      dataTextField: "name",
      dataValueField: "id",
      index: 1
    });

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");

    dropdownlist.refresh();
    </script>

### search

Selects an item, which starts with the provided value.

#### Parameters

##### word `String`

The search value.

#### Example - search the widget

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [
        { id: 1, name: "Apples" },
        { id: 2, name: "Oranges" }
      ],
      dataTextField: "name",
      dataValueField: "id"
    });

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");

    dropdownlist.search("Oranges");
    </script>

### select

Gets or sets the selected item. Selects the item provided as an argument and updates the value and text of the widget.

#### Parameters

##### li `jQuery | Number | Function`

A string, DOM element or jQuery object which represents the item to be selected. A string is treated as a jQuery selector.
A number representing the index of the item or function predicate which returns the correct data item.

#### Returns

`Number` The index of the selected item, if called with no parameters. If a custom value is entered, the returned selected index is `-1`.

`undefined` If called with a parameter as a setter.

#### Example - select item based on jQuery object

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [
        { id: 1, name: "Apples" },
        { id: 2, name: "Oranges" }
      ],
      dataTextField: "name",
      dataValueField: "id"
    });

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");

    dropdownlist.select(dropdownlist.ul.children().eq(0));
    </script>

#### Example - select item based on index

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [
        { id: 1, name: "Apples" },
        { id: 2, name: "Oranges" }
      ],
      dataTextField: "name",
      dataValueField: "id"
    });

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");

    dropdownlist.select(1);
    </script>

#### Example - select item based on function predicate

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [
        { id: 1, name: "Apples" },
        { id: 2, name: "Oranges" }
      ],
      dataTextField: "name",
      dataValueField: "id"
    });

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");

    dropdownlist.select(function(dataItem) {
        return dataItem.text === "Apples";
    });
    </script>

#### Example - get selected index of the widget

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [
        { id: 1, name: "Apples" },
        { id: 2, name: "Oranges" }
      ],
      dataTextField: "name",
      dataValueField: "id",
      index: 1
    });

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");

    var selectedIndex = dropdownlist.select();
    </script>

### setDataSource

Sets the dataSource of an existing DropDownList and rebinds it.

#### Parameters

##### dataSource `kendo.data.DataSource`

#### Example

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [ "Apples", "Oranges" ]
    });
    var dataSource = new kendo.data.DataSource({
      data: [ "Bananas", "Cherries" ]
    });
    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");
    dropdownlist.setDataSource(dataSource);
    </script>

### text

Gets or sets the text of the dropdownlist.

#### Parameters

##### text `String`

The text to set.

#### Returns

`String` The text of the dropdownlist.

#### Example - set text of the widget

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [ "Apples", "Oranges" ]
    });

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");

    dropdownlist.text("Apples");
    </script>

### toggle

Opens or closes the widget popup.

#### Parameters

##### toggle `Boolean`

Defines the whether to open/close the drop-down list.

#### Example - set text of the widget

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [ "Apples", "Oranges" ]
    });

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");

    dropdownlist.toggle();
    </script>

### value

Gets or sets the value of the dropdownlist. The value will not be set if there is no item with such value. If value is undefined, text of the data item is used.

> **Important:** If the widget is not bound, value method will pre-fetch the data before continue with the value setting.

#### Parameters

##### value `String`

The value to set.

#### Returns

`String` The value of the dropdownlist.

#### Example - set value of the widget

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataSource: [ "Apples", "Oranges" ]
    });

    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");

    dropdownlist.value("Oranges");
    </script>

## Events

### change

Fired when the value of the widget is changed by the user.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

> **Important:** The event is not fired when the value of the widget is changed from code.

#### Event Data

##### e.sender `kendo.ui.DropDownList`

The widget instance which fired the event.

#### Example - subscribe to the "change" event during initialization

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      change: function(e) {
        var value = this.value();
        // Use the value of the widget
      }
    });
    </script>

#### Example - subscribe to the "change" event after initialization

    <input id="dropdownlist" />
    <script>
    function dropdownlist_change(e) {
      var value = this.value();
      // Use the value of the widget
    }
    $("#dropdownlist").kendoDropDownList();
    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");
    dropdownlist.bind("change", dropdownlist_change);
    </script>

### close

Fired when the popup of the widget is closed.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.sender `kendo.ui.DropDownList`

The widget instance which fired the event.

#### Example - subscribe to the "close" event during initialization

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      close: function(e) {
        // handle the event
      }
    });
    </script>

#### Example - subscribe to the "close" event after initialization

    <input id="dropdownlist" />
    <script>
    function dropdownlist_close(e) {
      // handle the event
    }
    $("#dropdownlist").kendoDropDownList();
    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");
    dropdownlist.bind("close", dropdownlist_close);
    </script>

### dataBound

Fired when the widget is bound to data from its data source.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.sender `kendo.ui.DropDownList`

The widget instance which fired the event.

#### Example - subscribe to the "dataBound" event during initialization

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      dataBound: function(e) {
          // handle the event
      }
    });
    </script>

#### Example - subscribe to the "dataBound" event after initialization

    <input id="dropdownlist" />
    <script>
    function dropdownlist_dataBound(e) {
      // handle the event
    }
    $("#dropdownlist").kendoDropDownList();
    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");
    dropdownlist.bind("dataBound", dropdownlist_dataBound);
    </script>

### open

Fired when the popup of the widget is opened by the user.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.sender `kendo.ui.DropDownList`

The widget instance which fired the event.

#### Example - subscribe to the "open" event during initialization

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      open: function(e) {
        // handle the event
      }
    });
    </script>

#### Example - subscribe to the "open" event after initialization

    <input id="dropdownlist" />
    <script>
    function dropdownlist_open(e) {
      // handle the event
    }
    $("#dropdownlist").kendoDropDownList();
    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");
    dropdownlist.bind("open", dropdownlist_open);
    </script>

### select

Fired when an item from the popup is selected by the user.

#### Event Data

##### e.item `jQuery`

The jQuery object which represents the selected item.

##### e.sender `kendo.ui.DropDownList`

The widget instance which fired the event.

#### Example - subscribe to the "select" event during initialization

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      select: function(e) {
        var item = e.item;
        var text = item.text();
        // Use the selected item or its text
      }
    });
    </script>

#### Example - subscribe to the "select" event after initialization

    <input id="dropdownlist" />
    <script>
    function dropdownlist_select(e) {
      var item = e.item;
      var text = item.text();
      // Use the selected item or its text
    }
    $("#dropdownlist").kendoDropDownList();
    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");
    dropdownlist.bind("select", dropdownlist_select);
    </script>

### cascade

Fired when the value of the widget is changed via API or user interactionTriggered.

#### Event Data

##### e.sender `kendo.ui.DropDownList`

The widget instance which fired the event.

#### Example - subscribe to the "select" event during initialization

    <input id="dropdownlist" />
    <script>
    $("#dropdownlist").kendoDropDownList({
      cascade: function() {
        // Handle the event
      }
    });
    </script>

#### Example - subscribe to the "select" event after initialization

    <input id="dropdownlist" />
    <script>
    function dropdownlist_cascade(e) {
        // Handle the event
    }
    $("#dropdownlist").kendoDropDownList();
    var dropdownlist = $("#dropdownlist").data("kendoDropDownList");
    dropdownlist.bind("select", dropdownlist_cascade);
    </script>
