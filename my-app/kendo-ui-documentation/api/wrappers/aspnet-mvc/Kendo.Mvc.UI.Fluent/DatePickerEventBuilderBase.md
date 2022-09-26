---
title:DatePickerEventBuilderBase
slug:aspnetmvc-kendo.mvc.ui.fluent.datepickereventbuilderbase
publish:true
---

# Kendo.Mvc.UI.Fluent.DatePickerEventBuilderBase
Defines the fluent interface for configuring datepicker client events.



## Methods

### Change(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Change client-side event

For additional information check the [change](/api/web/datepicker#events-change) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().DatePicker()
        .Name("DatePicker")
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

For additional information check the [change](/api/web/datepicker#events-change) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().DatePicker()
        .Name("DatePicker")
        .Events(events => events.Change("change"))
    )


### Open(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Open client-side event

For additional information check the [open](/api/web/datepicker#events-open) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().DatePicker()
        .Name("DatePicker")
        .Events(events => events.Open(
                @<text>
                    %>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### Open(`System.String`)
Defines the name of the JavaScript function that will handle the Open client-side event.

For additional information check the [open](/api/web/datepicker#events-open) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().DatePicker()
        .Name("DatePicker")
        .Events(events => events.Open("open"))
    )


### Close(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Close client-side event

For additional information check the [close](/api/web/datepicker#events-close) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().DatePicker()
        .Name("DatePicker")
        .Events(events => events.Close(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### Close(`System.String`)
Defines the name of the JavaScript function that will handle the Close client-side event.

For additional information check the [close](/api/web/datepicker#events-close) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().DatePicker()
        .Name("DatePicker")
        .Events(events => events.Close("close"))
    )



