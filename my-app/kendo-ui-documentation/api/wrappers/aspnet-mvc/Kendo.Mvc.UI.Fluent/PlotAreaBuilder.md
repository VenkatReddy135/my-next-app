---
title:PlotAreaBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.plotareabuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.PlotAreaBuilder
Defines the fluent interface for configuring the PlotArea.



## Methods

### Background(`System.String`)
Sets the Plot area background color


#### Parameters

##### background `System.String`
The background color.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .PlotArea(plotArea => plotArea.Background("Red"))
        .Render();
    %>


### Margin(`System.Int32,System.Int32,System.Int32,System.Int32`)
Sets the Plot area margin


#### Parameters

##### top `System.Int32`
The plot area top margin.

##### right `System.Int32`
The plot area right margin.

##### bottom `System.Int32`
The plot area bottom margin.

##### left `System.Int32`
The plot area left margin.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .PlotArea(plotArea => plotArea.Margin(0, 5, 5, 0))
        .Render();
    %>


### Margin(`System.Int32`)
Sets the Plot area margin


#### Parameters

##### margin `System.Int32`
The plot area margin.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .PlotArea(plotArea => plotArea.Margin(5))
        .Render();
    %>


### Border(`System.Int32,System.String,Kendo.Mvc.UI.ChartDashType`)
Sets the Plot area border


#### Parameters

##### width `System.Int32`
The border width.

##### color `System.String`
The border color (CSS syntax).

##### dashType [Kendo.Mvc.UI.ChartDashType](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartDashType)
The border dash type.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .PlotArea(plotArea => plotArea.Border(1, "#000", ChartDashType.Dot))
        .Render();
    %>


### Border(`System.Action<Kendo.Mvc.UI.Fluent.ChartBorderBuilder>`)
Configures the plot area border


#### Parameters

##### configurator System.Action<[Kendo.Mvc.UI.Fluent.ChartBorderBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/ChartBorderBuilder)>
The border configuration action






