---
title:GridScrollSettingsBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.gridscrollsettingsbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.GridScrollSettingsBuilder
Defines the fluent interface for configuring Scrollable



## Methods

### Enabled(`System.Boolean`)
Enables or disables scrolling.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Scrolling(scrolling => scrolling.Enabled((bool)ViewData["enableScrolling"]))
    %>


### Height(`System.Int32`)
Sets the height of the scrollable area in pixels.


#### Parameters

##### pixelHeight `System.Int32`
The height in pixels.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Scrolling(scrolling => scrolling.Height(400))
    %>


### Height(`System.String`)
Sets the height of the scrollable.


#### Parameters

##### value `System.String`
The height in pixels.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Scrolling(scrolling => scrolling.Height("20em"))
    %>



