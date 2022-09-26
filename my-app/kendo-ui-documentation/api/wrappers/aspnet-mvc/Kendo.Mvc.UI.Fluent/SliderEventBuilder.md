---
title:SliderEventBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.slidereventbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.SliderEventBuilder
Defines the fluent interface for configuring the Events.



## Methods

### Change(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Change client-side event

For additional information check the [change](/api/web/slider#events-change) event documentation.


#### Parameters

##### handlerName `System.Func<System.Object,System.Object>`
The action defining the inline handler.




#### Example (ASPX)
    <% Html.Kendo().Slider()
        .Name("Slider")
        .Events(events => events.Change(() =>
        {
            %>
            function(e) {
            //event handling code
            }
            <%
            }))
            .Render();
            %>


### Change(`System.String`)
Defines the name of the JavaScript function that will handle the the Change client-side event.

For additional information check the [change](/api/web/slider#events-change) event documentation.


#### Parameters

##### handlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Slider()
    .Name("Slider")
    .Events(events => events.Change("change"))
    %>


### Slide(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Slide client-side event.

For additional information check the [slide](/api/web/slider#events-slide) event documentation.


#### Parameters

##### handlerName `System.Func<System.Object,System.Object>`
The action defining the inline handler.




#### Example (ASPX)
    <% Html.Kendo().Slider()
        .Name("Slider")
        .Events(events => events.Slide(() =>
        {
            %>
            function(e) {
            //event handling code
            }
            <%
            }))
            .Render();
            %>


### Slide(`System.String`)
Defines the name of the JavaScript function that will handle the the Slide client-side event.

For additional information check the [slide](/api/web/slider#events-slide) event documentation.


#### Parameters

##### handlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Slider()
    .Name("Slider")
    .Events(events => events.Slide("slide"))
    %>



