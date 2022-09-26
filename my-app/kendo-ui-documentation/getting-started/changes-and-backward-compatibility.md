---
title: Changes and Backward Compatibility
meta_title: Changes and Backward Compatibility in Kendo UI
meta_description: Find all changes which are effective in Kendo UI 2012 Q2 from previous releases
slug: gs-changes-and-backward-compatibility
publish: true
---

# Kendo UI Framework Changes and Backwards Compatibility

## KendoUI 2013 Q2

### Changes from 2013 Q1 SP1 (2013.1.514)

#### Breaking changes

* **Editor**: default tools are now changed to enable table editing; as toolbar tools are now grouped, their dimensions have been increased by 2px. If you need to use the old configuration, use the following

        $("#editor").kendoEditor({
            tools: [
                "bold", "italic", "underline", "strikethrough",
                "fontName", "fontSize", "foreColor", "backColor",
                "justifyLeft", "justifyCenter", "justifyRight", "justifyFull",
                "insertUnorderedList", "insertOrderedList",
                "indent", "outdent",
                "formatBlock",
                "createLink", "unlink", "insertImage"
            ]
        });

* **Editor**: Initializing the editor from a `div` element triggers the [inline editing mode](http://demos.kendoui.com/web/editor/inline-editing.html). If you need to revert to the old behavior, initialize it from a `<textarea>` element.

* **Mobile ListView**:

Enabling endless scrolling or press to load more configuration options now puts the listview in a virtual mode, which has different behavior than Q1 2013 and previous releases.

1. `endlessScrollParameters` and `loadMoreParameters` configuration options are not available anymore. Endless scrolling uses on the dataSource paging configuration to issue subsequent requests.

1. `scrollTreshold` option is not available anymore. The listvew automatically prefetches the next page when 2/3 of the current page is reached.

1. `stopEndlessScrolling` and `stopLoadMore` methods are no longer available. The listview automatically hides the button and loading indicator when the items loaded reach the number returned by the `schema.total` method of the bound DataSource.

1. `lastPageReached` event is no longer triggered, due to the same reasons.

#### Deprecated functionality

* **Editor**: The **formatBlock** and **style** tools have been deprecated in favor of the unified **formatting** tool. The new tool supports the functionality of both old tools, as well as new styling options. If you need to keep the styles and block formats in different drop-downs, you can use two formatting tools in paralel. The old tool declarations work, yielding a console.warn about the deprecation, and will be removed with a future official release.
    - Old

            $("#editor").kendoEditor({
                tools: [
                    { name: "style", items: [
                        // applies class "foo"
                        { text: "foo", value: "foo" }
                    ] },

                    { name: "formatBlock", items: [
                        // changes wrapping block to paragraph
                        { text: "paragraph", value: "p" }
                    ] }
                ]
            });
    - New

            $("#editor").kendoEditor({
                tools: [
                    { name: "formatting", items: [
                        // applies class "foo"
                        { text: "foo", value: ".foo" },

                        // changes wrapping block to paragraph
                        { text: "paragraph", value: "p" },

                        // changes wrapping block to paragraph with class "fine-print"
                        { text: "fine print", value: "p.fine-print" }
                    ] }
                ]
            });


## KendoUI 2013 Q1

### Changes from 2012 Q3 SP1 (2012.3.1315)

#### Breaking changes

* jQuery is updated to 1.9.1.
* **Mobile:** Rename scrollTreshold option of the ListView to **scrollThreshold**.
* **AutoComplete/ComboBox/DropDownList:** Rename enable option to **enabled**.
* **TreeView/HierarchicalDataSource/Node:** The `children` field is initialized depending on the `hasChildren` field, as previously documented. Use the `append` and `load` methods to initialize it, and if accessing the children field directly, verify if it is present.

#### ASP.NET MVC

Some ASP.NET MVC applications may be broken if using other libraries incompatible with jQuery 1.9.1. Further details available in the [troubleshooting guide](/getting-started/using-kendo-with/aspnet-mvc/troubleshooting#javascript-error-that-live-method-is-unavailable,-undefined-or-unsupported)

## KendoUI 2012 Q3 SP1

### Changes from 2012 Q3 (2011.3.1114)

#### Breaking changes

* **Cascading ComboBoxes/DropDownLists:** The parameterMap of the child widget's dataSource is called before the change event of the parent widget.
Use [cascade](http://docs.kendoui.com/api/web/combobox#cascade) event instead of change event.

* **Kendo UI Complete for ASP.NET MVC:** Remove Slide effect. Use SlideIn instead.

## KendoUI 2012 Q3

### Changes from 2012 Q2 SP1 (2011.2.913)

#### Breaking changes

* **Mobile:** the kendoMobileSwipe plugin is obsolete - replace its usage with the **touch** widget.

* **Mobile:** WebKit mask icons are now deprecated and font icons are used instead. If you have custom icons, they might break after the upgrade.
Add the following CSS rule to fix them /if you have data-icon="custom" on them, or use .km-icon to remove all non-custom icons/:

        .km-root .km-pane .km-view .km-custom {
            background-size: 100% 100%;
            -webkit-background-clip: border-box;
            background-color: currentcolor;
        }

        .km-root .km-pane .km-view .km-custom:after,
        .km-root .km-pane .km-view .km-custom:before
        {
            visibility: hidden;
        }

Additionally it should be noted that the mask icons used **background-color** for colorization, while the font ones use **color**
and custom colorization (but not on custom icons) **should be updated** after the upgrade. For example a rule like this:

        .km-ios .km-tabstrip .km-icon {
            background-color: rgb(20, 30, 40);
        }

should be changed to this:

        .km-ios .km-tabstrip .km-icon {
            color: rgb(20, 30, 40);
        }

* **DataViz:** Widgets now require theme-specific stylesheets. For example:

        <link href="styles/kendo.dataviz.min.css" rel="stylesheet" />

if using the Default skin, should be updated to:

        <link href="styles/kendo.dataviz.min.css" rel="stylesheet" />
        <link href="styles/kendo.dataviz.default.min.css" rel="stylesheet" />

* **DataViz:** missingValues defaults to "zero" for area, stacked area and stacked line series. The previous default was "gap" which can lead to incorrect results.

## KendoUI 2012 Q2

### Changes from 2012 Q1 SP1 (2012.1.322)

#### Breaking changes

*  **All Widgets:** All arrows have been renamed to better reflect their direction and size. For instance:

    - Old

            .k-arrow-up
            .k-arrow-next
            .k-arrow-down
            .k-arrow-prev
            .k-arrow-first
            .k-arrow-last

    - New

            .k-i-arrow-n
            .k-i-arrow-e
            .k-i-arrow-s
            .k-i-arrow-w
            .k-i-seek-w
            .k-i-seek-e
    for more information check the [Styling Icons demo](http://demos.kendoui.com/web/styling/icons.html).

*  **Popup:** Popup based widgets nested in other Popup based widgets create their Popup container inside the Popup parent. This means that a DropDownList created inside an already
    initialized Menu will create its list inside the Menu item's parent Popup.
*  **TreeView:** The TreeView widget now depends on kendo.data.js
*  **TreeView:** Using the API methods will re-create the HTML of the nodes. In order to get the new reference to the nodes, use the return value of the methods.

    - Old

            var foo = treeviewObject.findByText("foo");
            treeviewObject.append(foo);
            // starting with 2012 Q2, foo will point to a DOM node that is removed from the document
            foo.text("bar: foo");

    - New

            var foo = treeviewObject.findByText("foo");
            foo = treeviewObject.append(foo);
            foo.text("bar: foo");

* **DataViz:** Refresh() no longer invokes Read() of the DataSource.

    - Old

            var chart = $("#chart").data("kendoChart");
            chart.refresh();

    - New

            var chart = $("#chart").data("kendoChart");
            chart.dataSource.read();

## KendoUI 2012 Q1 (2012.1.322)

### Changes from 2011 Q3 SP1 (2011.3.1407)

#### Breaking changes

> The combined JavaScript file kendo.all.js is available only in the Kendo Complete package. The corresponding file in Kendo Web is called kendo.web.js. Use it instead of kendo.all.js.

*  **Data:** kendo.model.js file has been removed. The content of kendo.model.js file has been consolidated with the kendo.data.js content.
*  **Data:** `Model.id` is no longer a function. It is a field.
    - Old

            var model = dataSource.get(42);
            var modelId = model.id(); //42
    - New

            var model = dataSource.get(42);
            var modelId = model.id; //42

*  **Data:** The `DataSource` contains ObservableObject instances instead of raw JavaScript objects.

*  **Grid:** The Grid widget is now using the `uid` field of the Model instead of the `id`. A new uid field is introduced to the DataSource's Model,
    which represents its unique id. The Grid row data attribute has been changed to use this field.
    Note that in order to retrieve Model instance by its uid, DataSource's `getByUid` method should be used.
    - Old

            <tr data-id="42"><!--...--></tr>
    - New

            <tr data-uid=”aaaaa-bbbbb-ddddd-gggg”><!--...--></tr>

*  **DataViz:** The kendo.chart(.min).js file is replaced by kendo.dataviz(.min).js
*  **DataViz:** The axis orientation property deprecated in favor of dedicated verticalLine and verticalArea chart types
*  **DataViz:** The suite now requires kendo.dataviz.css to be included
*  **DataViz:** The Chart widget is now in the kendo.dataviz.ui namespace. Previously it was part of kendo.ui
*  **Other:** `dataValueField` and `dataTextField` of DropDownList, ComboBox and AutoComplete, are set to empty string by default. In order to get your old code working, you will need to list the fields manually, like this:
    - Old

            $("#combobox").kendoComboBox([
                {text: "Item 1", value: "item1"},
                {text: "Item 2", value: "item2"}
            ]);
    - New

            $("#combobox").kendoComboBox({
                dataTextField: "text",
                dataValueField: "value",
                dataSource: [
                    {text: "Item 1", value: "item1"},
                    {text: "Item 2", value: "item2"}
                ]
            });
