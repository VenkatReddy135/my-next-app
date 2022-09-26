---
title: Overview
meta_title: How to use FlatColorPicker HtmlHelper extension | Kendo UI documentation
meta_description: User Guide for server-side wrapper for Kendo UI FlatColorPicker for ASP.NET MVC widget.
slug: mvc-flatcolorpicker-overview
publish: true
---

# FlatColorPicker

The FlatColorPicker HtmlHelper extension is a server-side wrapper for the [Kendo UI FlatColorPicker](http://docs.kendoui.com/api/web/flatcolorpicker) widget.

## Getting Started

Here is how to configure a simple Kendo FlatColorPicker:

1.  Make sure you have followed all the steps from the [Introduction](http://docs.kendoui.com/getting-started/using-kendo-with/aspnet-mvc/introduction) help topic.

2.  Create a new action method which renders the view:

        public ActionResult Index()
        {
            return View();
        }
3.  Add a FlatColorPicker:
    - WebForms

            <%: Html.Kendo().FlatColorPicker()
                    .Name("flatcolorpicker") // The name of the flatcolorpicker is mandatory. It specifies the "id" attribute of the widget.
                    .Value("#ff0000") // Set the value of the flatcolorpicker
            %>
    - Razor

            @(Html.Kendo().FlatColorPicker()
                  .Name("flatcolorpicker") //The name of the flatcolorpicker is mandatory. It specifies the "id" attribute of the widget.
                  .Value("#ff0000") //Set the value of the flatcolorpicker
            )

## Accessing an Existing FlatColorPicker

You can reference an existing FlatColorPicker instance via [jQuery.data()](http://api.jquery.com/jQuery.data/).
Once a reference has been established, you can use the [API](http://docs.kendoui.com/api/web/flatcolorpicker#methods) to control its behavior.


### Accessing an existing FlatColorPicker instance

    //Put this after your Kendo FlatColorPicker for ASP.NET MVC declaration
    <script>
    $(function() {
        // Notice that the Name() of the flatcolorpicker is used to get its client-side instance
        var flatcolorpicker = $("#flatcolorpicker").data("kendoFlatColorPicker");
    });
    </script>


## Handling Kendo UI FlatColorPicker events

You can subscribe to all [events](http://docs.kendoui.com/api/web/flatcolorpicker#events) exposed by Kendo UI FlatColorPicker:

### WebForms - subscribe by handler name

    <%: Html.Kendo().FlatColorPicker()
            .Name("flatcolorpicker")
            .Events(e => e
                .Change("flatcolorpicker_change")
            )
    %>
    <script>
        function flatcolorpicker_change() {
            // Handle the change event
        }
    </script>


### Razor - subscribe by handler name

    @(Html.Kendo().FlatColorPicker()
          .Name("flatcolorpicker")
          .Events(e => e
                .Change("flatcolorpicker_change")
          )
    )
    <script>
        function flatcolorpicker_change() {
            // Handle the change event
        }
    </script>


### Razor - subscribe by template delegate

    @(Html.Kendo().FlatColorPicker()
          .Name("flatcolorpicker")
          .Events(e => e
              .Change(@<text>
                function() {
                    // Handle the change event inline
                }
                </text>)
          )
    )

