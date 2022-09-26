---
title:GridColumnBuilderBase
slug:aspnetmvc-kendo.mvc.ui.fluent.gridcolumnbuilderbase
publish:true
---

# Kendo.Mvc.UI.Fluent.GridColumnBuilderBase
Defines the fluent interface for configuring columns.


## Properties
### Column
Gets or sets the column.



## Methods

### Title(`System.String`)
Sets the title displayed in the header of the column.


#### Parameters

##### text `System.String`
The text.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Columns(columns => columns.Bound(o => o.OrderID).Title("ID"))
    %>


### HeaderHtmlAttributes(`System.Object`)
Sets the HTML attributes applied to the header cell of the column.


#### Parameters

##### attributes `System.Object`
The attributes.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Columns(columns => columns.Bound(o => o.OrderID).HeaderHtmlAttributes(new {@class="order-header"}))
    %>


### HeaderHtmlAttributes(`System.Collections.Generic.IDictionary<System.String,System.Object>`)
Sets the HTML attributes applied to the header cell of the column.


#### Parameters

##### attributes `System.Collections.Generic.IDictionary<System.String,System.Object>`
The attributes.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Columns(columns => columns.Bound(o => o.OrderID).HeaderHtmlAttributes(new {@class="order-header"}))
    %>


### FooterHtmlAttributes(`System.Object`)
Sets the HTML attributes applied to the footer cell of the column.


#### Parameters

##### attributes `System.Object`
The attributes.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Columns(columns => columns.Bound(o => o.OrderID).FooterHtmlAttributes(new {@class="order-footer"}))
    %>


### FooterHtmlAttributes(`System.Collections.Generic.IDictionary<System.String,System.Object>`)
Sets the HTML attributes applied to the footer cell of the column.


#### Parameters

##### attributes `System.Collections.Generic.IDictionary<System.String,System.Object>`
The attributes.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Columns(columns => columns.Bound(o => o.OrderID).FooterHtmlAttributes(new {@class="order-footer"}))
    %>


### HtmlAttributes(`System.Object`)
Sets the HTML attributes applied to the content cell of the column.


#### Parameters

##### attributes `System.Object`
The attributes.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Columns(columns => columns.Bound(o => o.OrderID).HtmlAttributes(new {@class="order-cell"}))
    %>


### HtmlAttributes(`System.Collections.Generic.IDictionary<System.String,System.Object>`)
Sets the HTML attributes applied to the content cell of the column.


#### Parameters

##### attributes `System.Collections.Generic.IDictionary<System.String,System.Object>`
The attributes.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Columns(columns => columns.Bound(o => o.OrderID).HtmlAttributes(new {@class="order-cell"}))
    %>


### Width(`System.Int32`)
Sets the width of the column in pixels.


#### Parameters

##### pixelWidth `System.Int32`
The width in pixels.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Columns(columns => columns.Bound(o => o.OrderID).Width(100))
    %>


### Width(`System.String`)
Sets the width of the column using CSS syntax.


#### Parameters

##### value `System.String`
The width to set.




#### Example (ASPX)
    <% Html.Kendo().Grid(Model)
        .Name("Grid")
        .Columns(columns => columns.Bound(o =>
        {
            %>
            <%= Html.ActionLink("Edit", "Home", new { id = o.OrderID}) %>
            <%
            }))
            .Width("30px")
            .Render();
            %>


### Visible(`System.Boolean`)
Makes the column visible or not. By default all columns are visible. Invisible columns are not rendered in the output HTML.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Columns(columns => columns.Bound(o => o.OrderID).Visible((bool)ViewData["visible"]))
    %>


### Hidden(`System.Boolean`)
Makes the column hidden or not. By default all columns are not hidden. Hidden columns are rendered in the output HTML but are hidden.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Columns(columns => columns.Bound(o => o.OrderID).Hidden((bool)ViewData["hidden"]))
    %>


### Hidden
Hides a column. By default all columns are not hidden. Hidden columns are rendered in the output HTML but are hidden.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Columns(columns => columns.Bound(o => o.OrderID).Hidden())
    %>


### IncludeInMenu(`System.Boolean`)
Specifys whether the columns should be included in column header menu. By default all columns are included.
            The column also need to have a Title set in order to be included in the menu.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Columns(columns => columns.Bound(o => o.OrderID).IncludeInMenu((bool)ViewData["hidden"]))
    %>


### HeaderTemplate(`System.Action`)
Sets the header template for the column.


#### Parameters

##### template `System.Action`
The action defining the template.





### HeaderTemplate(`System.String`)
Sets the header template for the column.


#### Parameters

##### template `System.String`
The string defining the template.





### HeaderTemplate(`System.Func<System.Object,System.Object>`)
Sets the header template for the column.


#### Parameters

##### template `System.Func<System.Object,System.Object>`
The action defining the template.





### FooterTemplate(`System.Action`)
Sets the footer template for the column.


#### Parameters

##### template `System.Action`
The action defining the template.





### FooterTemplate(`System.String`)
Sets the footer template for the column.


#### Parameters

##### template `System.String`
The string defining the template.





### FooterTemplate(`System.Func<System.Object,System.Object>`)
Sets the footer template for the column.


#### Parameters

##### template `System.Func<System.Object,System.Object>`
The action defining the template.






