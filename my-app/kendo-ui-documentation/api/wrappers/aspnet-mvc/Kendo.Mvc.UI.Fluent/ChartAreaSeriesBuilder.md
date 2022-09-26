---
title:ChartAreaSeriesBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.chartareaseriesbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.ChartAreaSeriesBuilder
Defines the fluent interface for configuring area series.



## Methods

### Stack(`System.Boolean`)
Sets a value indicating if the areas should be stacked.


#### Parameters

##### stacked `System.Boolean`
A value indicating if the areas should be stacked.




#### Example (ASPX)
    <%= Html.Kendo().Chart(Model)
    .Name("Chart")
    .Series(series => series.Area(s => s.Sales).Stack(true))
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
    .Series(series => series.Area(s => s.Sales).Aggregate())
    %>


### Labels(`System.Action<Kendo.Mvc.UI.Fluent.ChartPointLabelsBuilder>`)
Configures the area chart labels.


#### Parameters

##### configurator System.Action<[Kendo.Mvc.UI.Fluent.ChartPointLabelsBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/ChartPointLabelsBuilder)>
The configuration action.




#### Example (ASPX)
    <%= Html.Kendo().Chart()
    .Name("Chart")
    .Series(series => series
        .Area(s => s.Sales)
        .Labels(labels => labels
            .Position(ChartBarLabelsPosition.Above)
            .Visible(true)
            );
        )
    %>


### Labels(`System.Boolean`)
Sets the visibility of area chart labels.


#### Parameters

##### visible `System.Boolean`
The visibility. The default value is false.




#### Example (ASPX)
    <%= Html.Kendo().Chart()
    .Name("Chart")
    .Series(series => series
        .Area(s => s.Sales)
        .Labels(true);
    )
    %>


### Line(`System.Int32,System.String,Kendo.Mvc.UI.ChartDashType`)
Configures the area chart line.


#### Parameters

##### width `System.Int32`
The line width.

##### color `System.String`
The line color.

##### dashType [Kendo.Mvc.UI.ChartDashType](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartDashType)
The line dashType.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .Series(series => series
            .Area(s => s.Sales)
            .Line(2, "red", ChartDashType.Dot)
        )
        .Render();
    %>


### Line(`System.Action<Kendo.Mvc.UI.Fluent.ChartAreaLineBuilder>`)
Configures the area chart line.


#### Parameters

##### configurator System.Action<[Kendo.Mvc.UI.Fluent.ChartAreaLineBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/ChartAreaLineBuilder)>
The configuration action.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .Series(series => series
            .Area(s => s.Sales)
            .Line(line => line.Opacity(0.2))
        )
        .Render();
    %>


### Markers(`System.Action<Kendo.Mvc.UI.Fluent.ChartMarkersBuilder>`)
Configures the area chart markers.


#### Parameters

##### configurator System.Action<[Kendo.Mvc.UI.Fluent.ChartMarkersBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/ChartMarkersBuilder)>
The configuration action.




#### Example (ASPX)
    <%= Html.Kendo().Chart()
    .Name("Chart")
    .Series(series => series
        .Area(s => s.Sales)
        .Markers(markers => markers
            .Type(ChartMarkerShape.Triangle)
            );
        )
    %>


### Markers(`System.Boolean`)
Sets the visibility of area chart markers.


#### Parameters

##### visible `System.Boolean`
The visibility. The default value is true.




#### Example (ASPX)
    <%= Html.Kendo().Chart()
    .Name("Chart")
    .Series(series => series
        .Area(s => s.Sales)
        .Markers(true);
    )
    %>


### MissingValues(`Kendo.Mvc.UI.ChartAreaMissingValues`)
Configures the behavior for handling missing values in area series.


#### Parameters

##### missingValues [Kendo.Mvc.UI.ChartAreaMissingValues](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartAreaMissingValues)
The missing values behavior. The default is to leave gaps.




#### Example (ASPX)
    <%= Html.Kendo().Chart()
    .Name("Chart")
    .Series(series => series
        .Area(s => s.Sales)
        .MissingValues(ChartAreaMissingValues.Interpolate);
    )
    %>



