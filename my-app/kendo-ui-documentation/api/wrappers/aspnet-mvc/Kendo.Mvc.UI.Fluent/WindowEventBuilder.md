---
title:WindowEventBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.windoweventbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.WindowEventBuilder
Defines the fluent interface for configuring the Window events.



## Methods

### Open(`System.String`)
Defines the name of the JavaScript function that will handle the the Open client-side event.

For additional information check the [open](/api/web/window#events-open) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.Open("onOpen"))
    %>


### Open(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the Open client-side event.

For additional information check the [open](/api/web/window#events-open) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.Open("onOpen"))
    %>


### Activate(`System.String`)
Defines the name of the JavaScript function that will handle the the Activate client-side event.

For additional information check the [activate](/api/web/window#events-activate) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.Activate("onActivate"))
    %>


### Activate(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the Activate client-side event.

For additional information check the [activate](/api/web/window#events-activate) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.Activate("onActivate"))
    %>


### Deactivate(`System.String`)
Defines the name of the JavaScript function that will handle the the Deactivate client-side event.

For additional information check the [deactivate](/api/web/window#events-deactivate) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.Deactivate("onDeactivate"))
    %>


### Deactivate(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the Deactivate client-side event.

For additional information check the [deactivate](/api/web/window#events-deactivate) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.Deactivate("onDeactivate"))
    %>


### Close(`System.String`)
Defines the name of the JavaScript function that will handle the the Close client-side event.

For additional information check the [close](/api/web/window#events-close) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.Close("onClose"))
    %>


### Close(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the Close client-side event.

For additional information check the [close](/api/web/window#events-close) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.Close("onClose"))
    %>


### DragStart(`System.String`)
Defines the name of the JavaScript function that will handle the the DragStart client-side event.

For additional information check the [dragStart](/api/web/window#events-dragStart) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.DragStart("onDragStart"))
    %>


### DragStart(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the DragStart client-side event.

For additional information check the [dragStart](/api/web/window#events-dragStart) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.DragStart("onDragStart"))
    %>


### DragEnd(`System.String`)
Defines the name of the JavaScript function that will handle the the DragEnd client-side event.

For additional information check the [dragEnd](/api/web/window#events-dragEnd) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.DragEnd("onDragEnd"))
    %>


### DragEnd(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the DragEnd client-side event.

For additional information check the [dragEnd](/api/web/window#events-dragEnd) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.DragEnd("onDragEnd"))
    %>


### Resize(`System.String`)
Defines the name of the JavaScript function that will handle the the Resize client-side event.

For additional information check the [resize](/api/web/window#events-resize) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.Resize("onResize"))
    %>


### Resize(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the Resize client-side event.

For additional information check the [resize](/api/web/window#events-resize) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.Resize("onResize"))
    %>


### Refresh(`System.String`)
Defines the name of the JavaScript function that will handle the the Refresh client-side event.

For additional information check the [refresh](/api/web/window#events-refresh) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.Refresh("onRefresh"))
    %>


### Refresh(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the Refresh client-side event.

For additional information check the [refresh](/api/web/window#events-refresh) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.Refresh("onRefresh"))
    %>


### Error(`System.String`)
Defines the name of the JavaScript function that will handle the the Error client-side event.

For additional information check the [error](/api/web/window#events-error) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.Error("onError"))
    %>


### Error(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the Error client-side event.

For additional information check the [error](/api/web/window#events-error) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    <%= Html.Kendo().Window()
    .Name("Window")
    .Events(events => events.Error("onError"))
    %>



