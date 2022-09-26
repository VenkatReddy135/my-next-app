---
title:TabStripEventBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.tabstripeventbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.TabStripEventBuilder
Defines the fluent interface for configuring the TabStrip events.



## Methods

### Activate(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Activate client-side event

For additional information check the [activate](/api/web/tabstrip#events-activate) event documentation.


#### Parameters

##### onSelectAction `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().TabStrip()
        .Name("TabStrip")
        .Events(events => events.Activate(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                    .Render();
                    %>


### Activate(`System.String`)
Defines the name of the JavaScript function that will handle the the Activate client-side event.

For additional information check the [activate](/api/web/tabstrip#events-activate) event documentation.


#### Parameters

##### onSelectHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().TabStrip()
    .Name("TabStrip")
    .Events(events => events.Activate("onActivate"))
    %>


### Select(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Select client-side event

For additional information check the [select](/api/web/tabstrip#events-select) event documentation.


#### Parameters

##### onSelectAction `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().TabStrip()
        .Name("TabStrip")
        .Events(events => events.Select(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                    .Render();
                    %>


### Select(`System.String`)
Defines the name of the JavaScript function that will handle the the Select client-side event.

For additional information check the [select](/api/web/tabstrip#events-select) event documentation.


#### Parameters

##### onSelectHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().TabStrip()
    .Name("TabStrip")
    .Events(events => events.Select("onSelect"))
    %>


### ContentLoad(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the ContentLoad client-side event

For additional information check the [contentLoad](/api/web/tabstrip#events-contentLoad) event documentation.


#### Parameters

##### onSelectAction `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().TabStrip()
        .Name("TabStrip")
        .Events(events => events.ContentLoad(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                    .Render();
                    %>


### ContentLoad(`System.String`)
Defines the name of the JavaScript function that will handle the the ContentLoad client-side event.

For additional information check the [contentLoad](/api/web/tabstrip#events-contentLoad) event documentation.


#### Parameters

##### onSelectHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().TabStrip()
    .Name("TabStrip")
    .Events(events => events.ContentLoad("onContentLoad"))
    %>


### Error(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Error client-side event

For additional information check the [error](/api/web/tabstrip#events-error) event documentation.


#### Parameters

##### onErrorAction `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().TabStrip()
        .Name("TabStrip")
        .Events(events => events.Error(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                    .Render();
                    %>


### Error(`System.String`)
Defines the name of the JavaScript function that will handle the the Error client-side event.

For additional information check the [error](/api/web/tabstrip#events-error) event documentation.


#### Parameters

##### onErrorHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().TabStrip()
    .Name("TabStrip")
    .Events(events => events.Error("onError"))
    %>



