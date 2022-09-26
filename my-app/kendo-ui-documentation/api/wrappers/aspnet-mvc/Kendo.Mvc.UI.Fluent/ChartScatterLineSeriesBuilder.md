---
title:ChartScatterLineSeriesBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.chartscatterlineseriesbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.ChartScatterLineSeriesBuilder
Defines the fluent interface for configuring scatter line series.



## Methods

### Width(`System.Double`)
Sets the chart line width.


#### Parameters

##### width `System.Double`
The line width.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .Series(series => series.ScatterLine(s => s.x, s => s.y).Width(2))
        .Render();
    %>


### DashType(`Kendo.Mvc.UI.ChartDashType`)
Sets the chart line dash type.


#### Parameters

##### dashType [Kendo.Mvc.UI.ChartDashType](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartDashType)
The line dash type.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .Series(series => series.ScatterLine(s => s.x, s => s.y).DashType(ChartDashType.Dot))
        .Render();
    %>


### MissingValues(`Kendo.Mvc.UI.ChartScatterLineMissingValues`)
Configures the behavior for handling missing values in scatter line series.


#### Parameters

##### missingValues [Kendo.Mvc.UI.ChartScatterLineMissingValues](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartScatterLineMissingValues)
The missing values behavior. The default is to leave gaps.




#### Example (ASPX)
    <%= Html.Kendo().Chart()
    .Name("Chart")
    .Series(series => series
        .ScatterLine(s => s.x, s => s.y)
        .MissingValues(ChartScatterLineMissingValues.Interpolate);
    )
    %>



