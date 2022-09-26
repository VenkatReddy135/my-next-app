---
title:ChartLineSeriesBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.chartlineseriesbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.ChartLineSeriesBuilder
Defines the fluent interface for configuring line series.



## Methods

### Stack(`System.Boolean`)
Sets a value indicating if the lines should be stacked.


#### Parameters

##### stacked `System.Boolean`
A value indicating if the lines should be stacked.




#### Example (ASPX)
    <%= Html.Kendo().Chart(Model)
    .Name("Chart")
    .Series(series => series.Line(s => s.Sales).Stack(true))
    %>


### Aggregate(`Kendo.Mvc.UI.ChartSeriesAggregate`)
Sets the aggregate function for date series.
            This function is used when a category (an year, month, etc.) contains two or more points.


#### Parameters

##### aggregate [Kendo.Mvc.UI.ChartSeriesAggregate](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartSeriesAggregate)
Aggregate function name.




#### Example (ASPX)
    <%= Html.Kendo().Chart(Model)
    .Name("Chart")
    .Series(series => series.Line(s => s.Sales).Aggregate())
    %>


### Labels(`System.Action<Kendo.Mvc.UI.Fluent.ChartPointLabelsBuilder>`)
Configures the line chart labels.


#### Parameters

##### configurator System.Action<[Kendo.Mvc.UI.Fluent.ChartPointLabelsBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/ChartPointLabelsBuilder)>
The configuration action.




#### Example (ASPX)
    <%= Html.Kendo().Chart()
    .Name("Chart")
    .Series(series => series
        .Line(s => s.Sales)
        .Labels(labels => labels
            .Position(ChartBarLabelsPosition.Above)
            .Visible(true)
            );
        )
    %>


### Labels(`System.Boolean`)
Sets the visibility of line chart labels.


#### Parameters

##### visible `System.Boolean`
The visibility. The default value is false.




#### Example (ASPX)
    <%= Html.Kendo().Chart()
    .Name("Chart")
    .Series(series => series
        .Line(s => s.Sales)
        .Labels(true);
    )
    %>


### Width(`System.Double`)
Sets the line chart line width.


#### Parameters

##### width `System.Double`
The line width.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .Series(series => series.Line(s => s.Sales).Width(2))
        .Render();
    %>


### DashType(`Kendo.Mvc.UI.ChartDashType`)
Sets the line chart line dash type.


#### Parameters

##### dashType [Kendo.Mvc.UI.ChartDashType](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartDashType)
The line dash type.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .Series(series => series.Line(s => s.Sales).DashType(ChartDashType.Dot))
        .Render();
    %>


### Markers(`System.Action<Kendo.Mvc.UI.Fluent.ChartMarkersBuilder>`)
Configures the line chart markers.


#### Parameters

##### configurator System.Action<[Kendo.Mvc.UI.Fluent.ChartMarkersBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/ChartMarkersBuilder)>
The configuration action.




#### Example (ASPX)
    <%= Html.Kendo().Chart()
    .Name("Chart")
    .Series(series => series
        .Line(s => s.Sales)
        .Markers(markers => markers
            .Type(ChartMarkerShape.Triangle)
            );
        )
    %>


### Markers(`System.Boolean`)
Sets the visibility of line chart markers.


#### Parameters

##### visible `System.Boolean`
The visibility. The default value is true.




#### Example (ASPX)
    <%= Html.Kendo().Chart()
    .Name("Chart")
    .Series(series => series
        .Line(s => s.Sales)
        .Markers(true);
    )
    %>


### MissingValues(`Kendo.Mvc.UI.ChartLineMissingValues`)
Configures the behavior for handling missing values in line series.


#### Parameters

##### missingValues [Kendo.Mvc.UI.ChartLineMissingValues](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartLineMissingValues)
The missing values behavior. The default is to leave gaps.




#### Example (ASPX)
    <%= Html.Kendo().Chart()
    .Name("Chart")
    .Series(series => series
        .Line(s => s.Sales)
        .MissingValues(ChartLineMissingValues.Interpolate);
    )
    %>



