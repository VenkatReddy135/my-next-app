---
title:ChartAxisTicksBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.chartaxisticksbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.ChartAxisTicksBuilder
Defines the fluent interface for configuring ChartAxisTicks.



## Methods

### Size(`System.Int32`)
Sets the ticks size


#### Parameters

##### size `System.Int32`
The ticks size.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("chart")
        .ValueAxis(axis => axis.MajorTicks(ticks => ticks.Size(2)))
        .Render();
    %>


### Visible(`System.Boolean`)
Sets the ticks visibility


#### Parameters

##### visible `System.Boolean`
The ticks visibility.




#### Example (ASPX)
    <% Html.Kendo().Chart()
        .Name("chart")
        .ValueAxis(axis => axis.MajorTicks(ticks => ticks.Visible(false)))
        .Render();
    %>



