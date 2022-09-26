---
title:ChartMarkersBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.chartmarkersbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.ChartMarkersBuilder
Defines the fluent interface for configuring the chart data labels.



## Methods

### Type(`Kendo.Mvc.UI.ChartMarkerShape`)
Sets the markers shape type.


#### Parameters

##### type [Kendo.Mvc.UI.ChartMarkerShape](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartMarkerShape)
The markers shape type.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .Series(series => series
            .Line(s => s.Sales)
            .Markers(markers => markers
                .Type(ChartMarkerShape.Triangle)
                );
            )
            .Render();
            %>


### Size(`System.Int32`)
Sets the markers size.


#### Parameters

##### size `System.Int32`
The markers size.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .Series(series => series
            .Line(s => s.Sales)
            .Markers(markers => markers
                .Size(10)
                );
            )
            .Render();
            %>


### Visible(`System.Boolean`)
Sets the markers visibility


#### Parameters

##### visible `System.Boolean`
The markers visibility.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .Series(series => series
            .Line(s => s.Sales)
            .Markers(markers => markers
                .Visible(true)
                );
            )
            .Render();
            %>


### Border(`System.Int32,System.String,Kendo.Mvc.UI.ChartDashType`)
Sets the markers border


#### Parameters

##### width `System.Int32`
The markers border width.

##### color `System.String`
The markers border color (CSS syntax).

##### dashType [Kendo.Mvc.UI.ChartDashType](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartDashType)
The markers border dash type.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .Series(series => series
            .Line(s => s.Sales)
            .Markers(markers => markers
                .Border(1, "Red", ChartDashType.Dot)
                );
            )
            .Render();
            %>


### Border(`System.Action<Kendo.Mvc.UI.Fluent.ChartBorderBuilder>`)
Configures the markers border


#### Parameters

##### configurator System.Action<[Kendo.Mvc.UI.Fluent.ChartBorderBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/ChartBorderBuilder)>
The border configuration action





### Background(`System.String`)
The background color of the current series markers.


#### Parameters

##### backgorund `System.String`
The background color of the current series markers. The background color is series color.




#### Example (ASPX)
    <%= Html.Kendo().Chart()
    .Name("Chart")
    .Series(series => series
        .Line(s => s.Sales)
        .Markers(markers => markers
            .Background("Red");
            );
        )
        .Render();
    %>


### Rotation(`System.Int32`)
Sets the markers rotation angle.


#### Parameters

##### size `System.Int32`
The markers rotation angle.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .Series(series => series
            .Line(s => s.Sales)
            .Markers(markers => markers
                .Type(ChartMarkerShape.Triangle)
                .Rotation(10)
                );
            )
            .Render();
            %>



