---
title:GridBoundColumnFilterableBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.gridboundcolumnfilterablebuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.GridBoundColumnFilterableBuilder
Defines the fluent interface for configuring bound columns filterable options



## Methods

### UI(`Kendo.Mvc.UI.GridFilterUIRole`)
Sets the type of the input element of the filter menu




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Columns(columns =>
        columns.Bound(o => o.OrderDate)
        .Filterable(filterable =>
            filterable.UI(GridFilterUIRole.DatePicker)
        )
    )
    %>


### UI(`System.Func<System.Object,System.Object>`)
Sets JavaScript function which to modify the UI of the filter input.




#### Example (ASPX)
    <%= Html.Kendo().Grid(Model)
    .Name("Grid")
    .Columns(columns =>
        columns.Bound(o => o.OrderDate)
        .Filterable(filterable =>
            filterable.UI(@<text>
                JavaScript function goes here
            </text>)
        )
    )
    %>


### UI(`System.String`)
Sets JavaScript function which to modify the UI of the filter input.


#### Parameters

##### handler `System.String`
JavaScript function name






