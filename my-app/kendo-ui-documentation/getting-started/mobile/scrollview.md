---
title: ScrollView
meta_title: Technical documentation for Kendo UI Mobile ScrollView widget
meta_description: Learn how to initialize Mobile ScrollView widget and define content pages in order to display one item per page.
slug: gs-mobile-scrollview
relatedDocs: api-mobile-scrollview
tags: getting-started,mobile
publish: true
---

# ScrollView

The Kendo Mobile ScrollView widget is used to scroll content wider than the device screen.

## Getting Started

The Kendo Mobile Application automatically initializes the Mobile ScrollView for every element with `role` data attribute set to `scrollview` present in the views' markup.
Alternatively, it can be initialized using jQuery plugin syntax in the containing mobile View **init event handler**.

The widget supports two operation modes - standard and data bound. The first one is suitable for displaying static content, while the second one provides remote data virtualization. If the ScrollView has a DataSource set during the initialization it will operate in data bound mode.

### Initialize mobile ScrollView using a role data attribute.

    <div data-role="scrollview">
        Foo
    </div>

### Initialize mobile ScrollView using jQuery plugin syntax.

    <div data-role="view" data-init="initScrollView">
        <div id="scrollView">
            <div data-role="page">Foo</div>
            <div data-role="page">Bar</div>
        </div>
    </div>

    <script>
        function initScrollView(e) {
            e.view.element.find("#scrollView").kendoMobileScrollView();
        }
    </script>

### Initialize mobile ScrollView in data bound mode.

    <div data-role="view" data-stretch="true">
        <div data-role="scrollview" 
            data-source="dataSource" 
            data-template="scrollview-template"
            data-content-height="120px">
        </div>
    </div>

    <script id="scrollview-template" type="text/x-kendo-template">
        <div style="width: 110px; height: 110px; background-image: #=setBackground(ProductID)#;"></div>
        <p>#= ProductName #</p>
    </script>

    <script>
        var app = new kendo.mobile.Application();

        var dataSource = new kendo.data.DataSource({
            type: "odata",
            transport: {
                read: {
                    url: "http://demos.kendoui.com/service/Northwind.svc/Products"
                }
            },
            serverPaging: true,
            pageSize: 30
        });

        function setBackground(id) {
            return "url(http://demos.kendoui.com/content/web/foods/" + id +".jpg)";
        }
    </script>

### Initialize mobile ScrollView in data bound mode using jQuery plug-in syntax.

    <div data-role="view" data-stretch="true" data-init="onInit">
        <div id="scrollview"></div>
    </div>

    <script id="scrollview-template" type="text/x-kendo-template">
        <div style="width: 110px; height: 110px; background-image: #=setBackground(ProductID)#;"></div>
        <p>#= ProductName #</p>
    </script>

    <script>
        var app = new kendo.mobile.Application();

        function onInit() {
            $("#scrollview").kendoMobileScrollView({
                dataSource: {
                    type: "odata",
                    transport: {
                        read: {
                            url: "http://demos.kendoui.com/service/Northwind.svc/Products"
                        }
                    },
                    serverPaging: true,
                    pageSize: 30
                },
                template: $("#scrollview-template").html(),
                contentHeight: 120,
                enablePager: false
            });
        }

        function setBackground(id) {
            return "url(http://demos.kendoui.com/content/web/foods/" + id +".jpg)";
        }
    </script>

## Pages in standard mode

Content pages may be defined in order to display exactly one item per page. Pages are automatically resized
when the device is rotated. To define a page, wrap the content in a div with `data-role="page"` attribute set.

### ScrollView with pages

    <div data-role="scrollView">
        <div data-role="page">Foo</div>
        <div data-role="page">Bar</div>
    </div>

### Clearing the whitespaces

Whitespaces between page elements in the mark-up causes the ScrollView pager to display an extra page. In order to fix this any whitespace between page elements should be removed.

    <div data-role="page">
        <!--page content-->
    </div><div data-role="page">
        <!--page content-->
    </div><div data-role="page">
        <!--page content-->
    </div>

If a Kendo template is used to generate the pages the whitespace gaps can be avoided in the following way.

    <script type="text/x-kendo-template" id="tmp"><div data-role="page" >
        <!-- page content -->
    </div></script>

## Binding to data

The mobile ScrollView can be bound to both local JavaScript arrays and remote data via the Kendo DataSource component. Local JavaScript arrays are appropriate for limited value options, while remote data binding is better for larger data sets. The widget provides support for displaying large amounts of data by rendering additional pages of data on demand.

> **Important:** In case the total amount of displayed data is large, it is recommended to turn off the pager by setting `enablePager: false` in the configuration options or via `data-enable-pager="false"` data attribute.

If the developer sets the DataSource of the widget it will trigger the data bound mode.

In virtual mode, fixed amount of DOM elements are rendered, and then dynamically repositioned and updated while the user scrolls the widget.

Once the ScrollView reaches the total amount of DataSource items forward scrolling will be prevented automatically.

## Pages in data bound mode

The Kendo Mobile ScrollView will generate its page elements automatically. When DataSource is populated with data the widget will use its template to render the pages' content. **Specifying the template is mandatory**, if it is missing the widget will not be able to render the content.

By default the widget displays one data record per page. There is an opportunity for displaying multiple data records on a single page by setting the itemsPerPage configuration option. *In such case, the specified amount of data records will be passed to the template and it is responsibily of the developer to handle the way they will be displayed.*

> **Important:** In order ensure smooth scrolling the **pageSize of the DataSource should be 6 times itemsPerPage amount** or higher. For example, if itemsPerPage is set to 4, then the pageSize must be 24 (4*6) or higher.

### Example: single item template

    <script id="scrollview-template" type="text/x-kendo-template">
        <div style="width: 110px; height: 110px; background-image: #=setBackground(ProductID)#;"></div>
        <p>#= ProductName #</p>
    </script>

### Example: multiple items template (data is accessed via `data[index].fieldName`)

    <script id="scrollview-template" type="text/x-kendo-template">
        <div>
            <div style="width: 110px; height: 110px; background-image: #=setBackground(data[0].ProductID)#;"></div>
            <p>#= data[0].ProductName #</p>
        </div>
        <div>
            <div style="width: 110px; height: 110px; background-image: #=setBackground(data[1].ProductID)#;"></div>
            <p>#= data[1].ProductName #</p>
        </div>
    </script>

    <div data-role="view" data-stretch="true" data-init="onInit">
        <div id="scrollview"></div>
    </div>

    <script>
        var app = new kendo.mobile.Application();

        function onInit() {
            $("#scrollview").kendoMobileScrollView({
                dataSource: {
                    type: "odata",
                    transport: {
                        read: {
                            url: "http://demos.kendoui.com/service/Northwind.svc/Products"
                        }
                    },
                    serverPaging: true,
                    pageSize: 30
                },
                itemsPerPage: 2,
                template: $("#scrollview-template").html(),
                contentHeight: 120,
                enablePager: false
            });
        }

        function setBackground(id) {
            return "url(http://demos.kendoui.com/content/web/foods/" + id +".jpg)";
        }
    </script>