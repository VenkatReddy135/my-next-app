---
title:UploadEventBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.uploadeventbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.UploadEventBuilder
Defines the fluent interface for configuring the Upload events.



## Methods

### Select(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Select client-side event

For additional information check the [select](/api/web/upload#events-select) event documentation.


#### Parameters

##### inlineCodeBlock `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().Upload()
        .Name("Upload")
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

For additional information check the [select](/api/web/upload#events-select) event documentation.


#### Parameters

##### onSelectHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Upload()
    .Name("Upload")
    .Events(events => events.Select("onSelect"))
    %>


### Upload(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Upload client-side event

For additional information check the [upload](/api/web/upload#events-upload) event documentation.


#### Parameters

##### inlineCodeBlock `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().Upload()
        .Name("Upload")
        .Events(events => events.Upload(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                    .Render();
                    %>


### Upload(`System.String`)
Defines the name of the JavaScript function that will handle the the Upload client-side event.

For additional information check the [upload](/api/web/upload#events-upload) event documentation.


#### Parameters

##### onUploadHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Upload()
    .Name("Upload")
    .Events(events => events.Upload("onUpload"))
    %>


### Success(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Success client-side event

For additional information check the [success](/api/web/upload#events-success) event documentation.


#### Parameters

##### inlineCodeBlock `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().Upload()
        .Name("Upload")
        .Events(events => events.Success(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                    .Render();
                    %>


### Success(`System.String`)
Defines the name of the JavaScript function that will handle the the Success client-side event.

For additional information check the [success](/api/web/upload#events-success) event documentation.


#### Parameters

##### onSuccessHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Upload()
    .Name("Upload")
    .Events(events => events.Success("onSuccess"))
    %>


### Error(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Error client-side event

For additional information check the [error](/api/web/upload#events-error) event documentation.


#### Parameters

##### inlineCodeBlock `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().Upload()
        .Name("Upload")
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

For additional information check the [error](/api/web/upload#events-error) event documentation.


#### Parameters

##### onErrorHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Upload()
    .Name("Upload")
    .Events(events => events.Error("onError"))
    %>


### Complete(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Complete client-side event

For additional information check the [complete](/api/web/upload#events-complete) event documentation.


#### Parameters

##### inlineCodeBlock `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().Upload()
        .Name("Upload")
        .Events(events => events.Complete(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                    .Render();
                    %>


### Complete(`System.String`)
Defines the name of the JavaScript function that will handle the the Complete client-side event.

For additional information check the [complete](/api/web/upload#events-complete) event documentation.


#### Parameters

##### onCompleteHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Upload()
    .Name("Upload")
    .Events(events => events.Complete("onComplete"))
    %>


### Cancel(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Cancel client-side event

For additional information check the [cancel](/api/web/upload#events-cancel) event documentation.


#### Parameters

##### inlineCodeBlock `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().Upload()
        .Name("Upload")
        .Events(events => events.Cancel(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                    .Render();
                    %>


### Cancel(`System.String`)
Defines the name of the JavaScript function that will handle the the Cancel client-side event.

For additional information check the [cancel](/api/web/upload#events-cancel) event documentation.


#### Parameters

##### onCancelHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Upload()
    .Name("Upload")
    .Events(events => events.Cancel("onCancel"))
    %>


### Remove(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Remove client-side event

For additional information check the [remove](/api/web/upload#events-remove) event documentation.


#### Parameters

##### inlineCodeBlock `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().Upload()
        .Name("Upload")
        .Events(events => events.Remove(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                    .Render();
                    %>


### Remove(`System.String`)
Defines the name of the JavaScript function that will handle the the Remove client-side event.

For additional information check the [remove](/api/web/upload#events-remove) event documentation.


#### Parameters

##### onRemoveHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Upload()
    .Name("Upload")
    .Events(events => events.Remove("onRemove"))
    %>


### Progress(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the Progress client-side event

For additional information check the [progress](/api/web/upload#events-progress) event documentation.


#### Parameters

##### inlineCodeBlock `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    <% Html.Kendo().Upload()
        .Name("Upload")
        .Events(events => events.Progress(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                    .Render();
                    %>


### Progress(`System.String`)
Defines the name of the JavaScript function that will handle the the Progress client-side event.

For additional information check the [progress](/api/web/upload#events-progress) event documentation.


#### Parameters

##### onProgressHandlerName `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Upload()
    .Name("Upload")
    .Events(events => events.Progress("onProgress"))
    %>



