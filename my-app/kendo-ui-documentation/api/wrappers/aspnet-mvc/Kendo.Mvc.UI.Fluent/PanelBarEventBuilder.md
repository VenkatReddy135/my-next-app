---
title:PanelBarEventBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.panelbareventbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.PanelBarEventBuilder
Defines the fluent interface for configuring the PanelBar events.



## Methods

### Expand(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Expand client-side event

For additional information check the [expand](/api/web/panelbar#events-expand) event documentation.


#### Parameters

##### expandInlineCodeBlock `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().PanelBar()
        .Name("PanelBar")
        .Events(events => events.Expand(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                    .Render();
                    %>


### Expand(`System.String`)
Defines the name of the JavaScript function that will handle the the Expand client-side event.

For additional information check the [expand](/api/web/panelbar#events-expand) event documentation.


#### Parameters

##### expandHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().PanelBar()
    .Name("PanelBar")
    .Events(events => events.Expand("expand"))
    %>


### ContentLoad(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the ContentLoad client-side event

For additional information check the [contentLoad](/api/web/panelbar#events-contentLoad) event documentation.


#### Parameters

##### contentLoadInlineCodeBlock `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().PanelBar()
        .Name("PanelBar")
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

For additional information check the [contentLoad](/api/web/panelbar#events-contentLoad) event documentation.


#### Parameters

##### contentLoadHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().PanelBar()
    .Name("PanelBar")
    .Events(events => events.ContentLoad("contentLoad"))
    %>


### Collapse(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Collapse client-side event

For additional information check the [collapse](/api/web/panelbar#events-collapse) event documentation.


#### Parameters

##### collapseInlineCodeBlock `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().PanelBar()
        .Name("PanelBar")
        .Events(events => events.Collapse(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                    .Render();
                    %>


### Collapse(`System.String`)
Defines the name of the JavaScript function that will handle the the Collapse client-side event.

For additional information check the [collapse](/api/web/panelbar#events-collapse) event documentation.


#### Parameters

##### collapseHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().PanelBar()
    .Name("PanelBar")
    .Events(events => events.Collapse("collapse"))
    %>


### Select(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Select client-side event

For additional information check the [select](/api/web/panelbar#events-select) event documentation.


#### Parameters

##### selectInlineCodeBlock `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().PanelBar()
        .Name("PanelBar")
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

For additional information check the [select](/api/web/panelbar#events-select) event documentation.


#### Parameters

##### selectHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().PanelBar()
    .Name("PanelBar")
    .Events(events => events.Select("select"))
    %>


### Error(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Error client-side event

For additional information check the [error](/api/web/panelbar#events-error) event documentation.


#### Parameters

##### errorInlineCodeBlock `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().PanelBar()
        .Name("PanelBar")
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

For additional information check the [error](/api/web/panelbar#events-error) event documentation.


#### Parameters

##### errorHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().PanelBar()
    .Name("PanelBar")
    .Events(events => events.Error("onError"))
    %>



