---
title:ChartOHLCSeriesBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.chartohlcseriesbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.ChartOHLCSeriesBuilder
Defines the fluent interface for configuring bar series.



## Methods

### Aggregate(`System.Nullable<Kendo.Mvc.UI.ChartSeriesAggregate>,System.Nullable<Kendo.Mvc.UI.ChartSeriesAggregate>,System.Nullable<Kendo.Mvc.UI.ChartSeriesAggregate>,System.Nullable<Kendo.Mvc.UI.ChartSeriesAggregate>`)
Sets the aggregate function for date series.
            This function is used when a category (an year, month, etc.) contains two or more points.


#### Parameters

##### open System.Nullable<[Kendo.Mvc.UI.ChartSeriesAggregate](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartSeriesAggregate)>
Open aggregate name.

##### high System.Nullable<[Kendo.Mvc.UI.ChartSeriesAggregate](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartSeriesAggregate)>
High aggregate name.

##### low System.Nullable<[Kendo.Mvc.UI.ChartSeriesAggregate](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartSeriesAggregate)>
Low aggregate name.

##### close System.Nullable<[Kendo.Mvc.UI.ChartSeriesAggregate](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartSeriesAggregate)>
Close aggregate name.




#### Example (ASPX)
    <%= Html.Kendo().Chart(Model)
    .Name("Chart")
    .Series(series => series.OHLC(s => s.Sales).Aggregate(ChartSeriesAggregate.Avg))
    %>


### Gap(`System.Double`)
Set distance between category clusters.
            
            A value of 1 means that there is a total of 1 point width between categories.
            The distance is distributed evenly on each side.
            The default value is 1




#### Example (ASPX)
    <%= Html.Kendo().Chart(Model)
    .Name("Chart")
    .Series(series => series.OHLC(s => s.Sales).Gap(1.5))
    %>


### Spacing(`System.Double`)
Sets a value indicating the distance between points in the same category.


#### Parameters

##### spacing `System.Double`
Value of 1 means that the distance between points in the same category.
            The default value is 0.3




#### Example (ASPX)
    <%= Html.Kendo().Chart(Model)
    .Name("Chart")
    .Series(series => series.Spacing(s => s.Sales).Spacing(1))
    %>


### Border(`System.Int32,System.String,Kendo.Mvc.UI.ChartDashType`)
Sets the points border


#### Parameters

##### width `System.Int32`
The points border width.

##### color `System.String`
The points border color (CSS syntax).

##### dashType [Kendo.Mvc.UI.ChartDashType](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartDashType)
The points border dash type.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .Series(series => series.OHLC(s => s.Sales).Border("1", "#000", ChartDashType.Dot))
        .Render();
    %>


### Line(`System.Int32,System.String,Kendo.Mvc.UI.ChartDashType`)
Configures the ohlc chart lines.


#### Parameters

##### width `System.Int32`
The lines width.

##### color `System.String`
The lines color.

##### dashType [Kendo.Mvc.UI.ChartDashType](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ChartDashType)
The lines dashType.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("Chart")
        .Series(series => series
            .OHLC(s => s.Sales)
            .Line(2, "red", ChartDashType.Dot)
        )
        .Render();
    %>


### Line(`System.Int32`)
Configures the ohlc line width.


#### Parameters

##### width `System.Int32`
The lines width.





### Line(`System.Int32,System.String`)
Configures the ohlc lines.


#### Parameters

##### width `System.Int32`
The lines width.

##### color `System.String`
The lines color.





### Line(`System.Action<Kendo.Mvc.UI.Fluent.ChartAreaLineBuilder>`)
Configures the ohlc chart lines.


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


### Highlight(`System.Action<Kendo.Mvc.UI.Fluent.ChartOHLCSeriesHighlightBuilder>`)
Configures the series highlight


#### Parameters

##### configurator System.Action<[Kendo.Mvc.UI.Fluent.ChartOHLCSeriesHighlightBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/ChartOHLCSeriesHighlightBuilder)>
The configuration action.






