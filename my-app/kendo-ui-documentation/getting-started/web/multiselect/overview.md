---
title: Overview
meta_title: Overview of jQuery UI multiselect | Kendo UI Documentation
meta_description: Create MultiSelect UI widget, use Kendo UI templates, instructions how to use MultiSelect.
slug: gs-web-multiselect-overview
relatedDocs: api-web-multiselect
tags: getting-started,web
publish: true
---

# MultiSelect Overview

The **MultiSelect** displays a list of values and allows the selection of multiple values from this
list.

The **MultiSelect** represents a richer version of a `<select>` element, providing support for
local and remote data binding, item and tag templates, and configurable options for controlling the list behavior.


## Getting Started

There are two ways to create a **MultiSelect** from a `<select>` element:

1.  Using its `<option>` list as a list of items
2.  With databinding to define the list items


A **MultiSelect** will look and operate consistently regardless of the way in which it was created.

### Creating a MultiSelect from an existing &lt;select&gt; element with defined data items

    <select id="multiselect"></select>

Initialization of a **MultiSelect** should occur after the DOM is fully loaded. It is recommended
that initialization the **MultiSelect** occur within a handler is provided to
$(document).ready().

> Widget copies any styles and CSS classes from the input element to the wrapper element and visible input.

### Initialize a MultiSelect using a selector within $(document).ready()

    $(document).ready(function(){
        $("#multiselect").kendoMultiSelect({
            dataTextField: "text",
            dataValueField: "value",
            dataSource: [
                { text: "Item1", value: "1" },
                { text: "Item2", value: "2" }
            ]
        });
    });

### Creating a MultiSelect from existing `<select>` element with a pre-defined structure

    <select id="multiselect">
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3</option>
    </select>

    <script>
        $(document).ready(function(){
            $("#multiselect").kendoMultiSelect();
        });
    </script>

## Binding to Local or Remote Data


The **MultiSelect** can be bound to both local arrays and remote data via the
**DataSource** component; an abstraction for local and
remote data. Local arrays are appropriate for limited value options, while remote data binding is better for
larger data sets. With remote data-binding, items will be loaded on-demand; when they are displayed.

### Binding to a remote OData service

    $(document).ready(function() {
        $("#multiselect").kendoMultiSelect({
            dataTextField: "Name",
            dataValueField: "Id",
            filter: "contains",
            dataSource: {
                type: "odata",
                serverFiltering: true,
                serverPaging: true,
                pageSize: 20,
                transport: {
                    read: "http://odata.netflix.com/Catalog/Titles"
                }
            }
        });
    });

## Customizing Item Templates


The **MultiSelect** uses Kendo UI templates to enable you to control how items are rendered. For a
detailed description of the capabilities and syntax of the Kendo UI templates, please refer to the
[documentation](http://www.kendoui.com/documentation/framework/templates/overview.aspx "Kendo UI Template").

### Basic item template customization

    <select id="multiselect"></select>
    <!-- Item Template -->
    <script id="scriptTemplate" type="text/x-kendo-template">
        # if (data.BoxArt.SmallUrl) { #
            <img src="#: data.BoxArt.SmallUrl #" alt="#: data.Name #" />
            Title:#: data.Name #, Year: #: data.Name #
        # } else { #
            <img alt="#: data.Name #" />
            Title:#: data.Name #, Year: #: data.Name #
        # } #
    </script>

    <!-- MultiSelect initialization -->
    <script>
        $(document).ready(function() {
            $("#multiselect").kendoMultiSelect({
                autoBind: false,
                dataTextField: "Name",
                dataValueField: "Id",
                itemTemplate: $("#scriptTemplate").html(),
                dataSource: {
                    type: "odata",
                    serverFiltering: true,
                    serverPaging: true,
                    pageSize: 20,
                    transport: {
                        read: "http://odata.netflix.com/Catalog/Titles"
                    }
                }
            });
        });
    </script>

## Customizing Tag Templates


The **MultiSelect** uses Kendo UI templates to enable you to control how tags are rendered. For a
detailed description of the capabilities and syntax of the Kendo UI templates, please refer to the
[documentation](http://www.kendoui.com/documentation/framework/templates/overview.aspx "Kendo UI Template").

### Basic tag template customization

    <select id="multiselect"></select>

    <!-- Tag Template -->
    <script id="scriptTemplate" type="text/x-kendo-template">
        # if (data.BoxArt.SmallUrl) { #
            <img src="#: data.BoxArt.SmallUrl #" alt="#: data.Name #" />
        # } else { #
            <img alt="#: data.Name #" />
        # } #

        Title:#: data.Name #
    </script>

    <!-- MultiSelect initialization -->
    <script>
        $(document).ready(function() {
            $("#multiselect").kendoMultiSelect({
                autoBind: false,
                dataTextField: "Name",
                dataValueField: "Id",
                tagTemplate: $("#scriptTemplate").html(),
                dataSource: {
                    type: "odata",
                    serverFiltering: true,
                    serverPaging: true,
                    pageSize: 20,
                    transport: {
                        read: "http://odata.netflix.com/Catalog/Titles"
                    }
                }
            });
        });
    </script>

## Customizing the width of the drop-down list

Width of MultiSelect' drop-down list can be changed via jQuery width method.

### Example

    var multiselect = $("#multiselect").data("kendoMultiSelect");

    // set width of the drop-down list
    multiselect.list.width(400);

## Pre-select values on initial loading

When deffered binding (autoBind: false) is used you will need to specify a list of data items instead of just list of strings.
This functionality is supported in Q1 SP1 2013 release and later versions of Kendo UI.

    <!-- MultiSelect initialization -->
    <script>
        $(document).ready(function() {
            $("#multiselect").kendoMultiSelect({
                autoBind: false,
                dataTextField: "Name",
                dataValueField: "Id",
                dataSource: {
                    type: "odata",
                    serverFiltering: true,
                    transport: {
                        read: {
                            url: "http://demos.kendoui.com/service/Northwind.svc/Products",
                        }
                    }
                },
                value: [
                    { ProductName: "Chang", ProductID: 2 },
                    { ProductName: "Uncle Bob's Organic Dried Pears", ProductID: 7 }
                ]
            });
        });
    </script>

## Accessing an Existing MultiSelect


You can reference an existing **MultiSelect** instance via
[jQuery.data()](http://api.jquery.com/jQuery.data/). Objectnce a reference has been established, you
can use the API to control its behavior.

### Accessing an existing MultiSelect instance

    var multiselect = $("#multiselect").data("kendoMultiSelect");
