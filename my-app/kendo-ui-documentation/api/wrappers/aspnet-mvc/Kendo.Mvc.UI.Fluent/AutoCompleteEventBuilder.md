---
title:AutoCompleteEventBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.autocompleteeventbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.AutoCompleteEventBuilder
The fluent API for subscribing to Kendo UI AutoComplete events.



## Methods

### Select(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Select client-side event

For additional information check the [select](/api/web/autocomplete#events-select) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().AutoComplete()
        .Name("AutoComplete")
        .Events(events => events.Select(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### Select(`System.String`)
Defines the name of the JavaScript function that will handle the the Select client-side event.

For additional information check the [select](/api/web/autocomplete#events-select) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().AutoComplete()
        .Name("AutoComplete")
        .Events(events => events.Select("select"))
    )


### Change(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Change client-side event

For additional information check the [change](/api/web/autocomplete#events-change) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().AutoComplete()
        .Name("AutoComplete")
        .Events(events => events.Change(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### Change(`System.String`)
Defines the name of the JavaScript function that will handle the the Change client-side event.

For additional information check the [change](/api/web/autocomplete#events-change) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().AutoComplete()
        .Name("AutoComplete")
        .Events(events => events.Change("change"))
    )


### DataBound(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the DataBound client-side event

For additional information check the [dataBound](/api/web/autocomplete#events-dataBound) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().AutoComplete()
        .Name("AutoComplete")
        .Events(events => events.DataBound(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### DataBound(`System.String`)
Defines the name of the JavaScript function that will handle the the DataBound client-side event.

For additional information check the [dataBound](/api/web/autocomplete#events-dataBound) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().AutoComplete()
    .Name("AutoComplete")
    .Events(events => events.DataBound("dataBound"))
    %>


### Open(`System.String`)
Defines the name of the JavaScript function that will handle the the Open client-side event.

For additional information check the [open](/api/web/autocomplete#events-open) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().AutoComplete()
        .Name("AutoComplete")
        .Events(events => events.Open("open"))
    )


### Open(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Open client-side event

For additional information check the [open](/api/web/autocomplete#events-open) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().AutoComplete()
        .Name("AutoComplete")
        .Events(events => events.Open(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### Close(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Close client-side event

For additional information check the [close](/api/web/autocomplete#events-close) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().AutoComplete()
        .Name("AutoComplete")
        .Events(events => events.Close(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### Close(`System.String`)
Defines the name of the JavaScript function that will handle the the Close client-side event.

For additional information check the [close](/api/web/autocomplete#events-close) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().AutoComplete()
        .Name("AutoComplete")
        .Events(events => events.Close("close"))
    )



