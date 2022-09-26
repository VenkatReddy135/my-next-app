---
title:GridEventBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.grideventbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.GridEventBuilder
Defines the fluent API for configuring the Kendo Grid for ASP.NET MVC events.



## Methods

### Change(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the Change client-side event.

For additional information check the [change](/api/web/grid#events-change) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
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

For additional information check the [change](/api/web/grid#events-change) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.Change("gridChange"))
    )


### Cancel(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the Cancel client-side event.

For additional information check the [cancel](/api/web/grid#events-cancel) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.Cancel(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### Cancel(`System.String`)
Defines the name of the JavaScript function that will handle the the Cancel client-side event.

For additional information check the [cancel](/api/web/grid#events-cancel) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.Cancel("gridCancel"))
    )


### Edit(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the Edit client-side event.

For additional information check the [edit](/api/web/grid#events-edit) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.Edit(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### Edit(`System.String`)
Defines the name of the JavaScript function that will handle the the Edit client-side event.

For additional information check the [edit](/api/web/grid#events-edit) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.Edit("gridEdit"))
    )


### Save(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the Save client-side event.

For additional information check the [save](/api/web/grid#events-save) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.Save(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### Save(`System.String`)
Defines the name of the JavaScript function that will handle the the Save client-side event.

For additional information check the [save](/api/web/grid#events-save) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.Save("gridSave"))
    )


### SaveChanges(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the SaveChanges client-side event.

For additional information check the [saveChanges](/api/web/grid#events-saveChanges) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.SaveChanges(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### SaveChanges(`System.String`)
Defines the name of the JavaScript function that will handle the the SaveChanges client-side event.

For additional information check the [saveChanges](/api/web/grid#events-saveChanges) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.SaveChanges("gridSaveChanges"))
    )


### DetailExpand(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the DetailExpand client-side event.

For additional information check the [detailExpand](/api/web/grid#events-detailExpand) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.DetailExpand(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### DetailExpand(`System.String`)
Defines the name of the JavaScript function that will handle the the DetailExpand client-side event.

For additional information check the [detailExpand](/api/web/grid#events-detailExpand) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.DetailExpand("gridDetailExpand"))
    )


### DetailInit(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the DetailInit client-side event.

For additional information check the [detailInit](/api/web/grid#events-detailInit) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.DetailInit(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### DetailInit(`System.String`)
Defines the name of the JavaScript function that will handle the the DetailInit client-side event.

For additional information check the [detailInit](/api/web/grid#events-detailInit) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.DetailInit("gridDetailInit"))
    )


### DetailCollapse(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the DetailCollapse client-side event.

For additional information check the [detailCollapse](/api/web/grid#events-detailCollapse) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.DetailCollapse(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### DetailCollapse(`System.String`)
Defines the name of the JavaScript function that will handle the the DetailCollapse client-side event.

For additional information check the [detailCollapse](/api/web/grid#events-detailCollapse) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.DetailCollapse("gridDetailCollapse"))
    )


### Remove(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the Remove client-side event.

For additional information check the [remove](/api/web/grid#events-remove) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.Remove(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### Remove(`System.String`)
Defines the name of the JavaScript function that will handle the the Remove client-side event.

For additional information check the [remove](/api/web/grid#events-remove) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.Remove("gridRemove"))
    )


### DataBound(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the DataBound client-side event.

For additional information check the [dataBound](/api/web/grid#events-dataBound) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
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

For additional information check the [dataBound](/api/web/grid#events-dataBound) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.DataBound("gridDataBound"))
    )


### DataBinding(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the DataBinding client-side event.

For additional information check the [dataBinding](/api/web/grid#events-dataBinding) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.DataBinding(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### DataBinding(`System.String`)
Defines the name of the JavaScript function that will handle the the DataBinding client-side event.

For additional information check the [dataBinding](/api/web/grid#events-dataBinding) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.DataBinding("gridDataBinding"))
    )


### ColumnResize(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the ColumnResize client-side event.

For additional information check the [columnResize](/api/web/grid#events-columnResize) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.ColumnResize(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### ColumnResize(`System.String`)
Defines the name of the JavaScript function that will handle the the ColumnResize client-side event.

For additional information check the [columnResize](/api/web/grid#events-columnResize) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.ColumnResize("gridColumnResize"))
    )


### ColumnReorder(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the ColumnReorder client-side event.

For additional information check the [columnReorder](/api/web/grid#events-columnReorder) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.ColumnReorder(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### ColumnReorder(`System.String`)
Defines the name of the JavaScript function that will handle the the ColumnReorder client-side event.

For additional information check the [columnReorder](/api/web/grid#events-columnReorder) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.ColumnReorder("gridColumnReorder"))
    )


### ColumnHide(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the ColumnHide client-side event.

For additional information check the [columnHide](/api/web/grid#events-columnHide) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.ColumnHide(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### ColumnHide(`System.String`)
Defines the name of the JavaScript function that will handle the the ColumnHide client-side event.

For additional information check the [columnHide](/api/web/grid#events-columnHide) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.ColumnHide("gridColumnHide"))
    )


### ColumnShow(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the the ColumnShow client-side event.

For additional information check the [columnShow](/api/web/grid#events-columnShow) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.ColumnShow(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### ColumnShow(`System.String`)
Defines the name of the JavaScript function that will handle the the ColumnShow client-side event.

For additional information check the [columnShow](/api/web/grid#events-columnShow) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.ColumnShow("gridColumnShow"))
    )


### ColumnMenuInit(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the ColumnMenuInit client-side event.

For additional information check the [columnMenuInit](/api/web/grid#events-columnMenuInit) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.ColumnMenuInit(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### ColumnMenuInit(`System.String`)
Defines the name of the JavaScript function that will handle the ColumnMenuInit client-side event.

For additional information check the [columnMenuInit](/api/web/grid#events-columnMenuInit) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.ColumnMenuInit("gridColumnMenuInit"))
    )


### FilterMenuInit(`System.Func<System.Object,System.Object>`)
Defines the name of the JavaScript function that will handle the FilterMenuInit client-side event.

For additional information check the [filterMenuInit](/api/web/grid#events-filterMenuInit) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.FilterMenuInit(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### FilterMenuInit(`System.String`)
Defines the name of the JavaScript function that will handle the FilterMenuInit client-side event.

For additional information check the [filterMenuInit](/api/web/grid#events-filterMenuInit) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (ASPX)
    @(Html.Kendo().Grid()
        .Name("Grid")
        .Events(events => events.FilterMenuInit("gridFilterMenuInit"))
    )



