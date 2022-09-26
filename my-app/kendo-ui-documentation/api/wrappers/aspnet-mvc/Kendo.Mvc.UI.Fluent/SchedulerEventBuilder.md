---
title:SchedulerEventBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.schedulereventbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.SchedulerEventBuilder
The fluent API for subscribing to Kendo UI Scheduler events.



## Methods

### Remove(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the remove event.

For additional information check the [remove](/api/web/scheduler#events-remove) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (Razor)
    @(Html.Kendo().Scheduler()
        .Name("Scheduler")
        .DataSource(d => d
            .Model(m => m.Id(f => f.TaskID))
            .Read("Read", "Scheduler")
            .Create("Create", "Scheduler")
            .Destroy("Destroy", "Scheduler")
            .Update("Update", "Scheduler")
        )
        .Events(events => events.Remove(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### Remove(`System.String`)
Defines the name of the JavaScript function that will handle the the remove event.

For additional information check the [remove](/api/web/scheduler#events-remove) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (Razor)
    @(Html.Kendo().Scheduler()
        .Name("Scheduler")
        .Events(events => events.Remove("remove"))
        .DataSource(d => d
            .Model(m => m.Id(f => f.TaskID))
            .Read("Read", "Scheduler")
            .Create("Create", "Scheduler")
            .Destroy("Destroy", "Scheduler")
            .Update("Update", "Scheduler")
        )
    )


### Edit(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the edit event.

For additional information check the [edit](/api/web/scheduler#events-edit) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (Razor)
    @(Html.Kendo().Scheduler()
        .Name("Scheduler")
        .DataSource(d => d
            .Model(m => m.Id(f => f.TaskID))
            .Read("Read", "Scheduler")
            .Create("Create", "Scheduler")
            .Destroy("Destroy", "Scheduler")
            .Update("Update", "Scheduler")
        )
        .Events(events => events.Edit(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### Edit(`System.String`)
Defines the name of the JavaScript function that will handle the the edit event.

For additional information check the [edit](/api/web/scheduler#events-edit) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (Razor)
    @(Html.Kendo().Scheduler<Task>()
        .Name("Scheduler")
        .Events(events => events.Edit("edit"))
        .DataSource(d => d
            .Model(m => m.Id(f => f.TaskID))
            .Read("Read", "Scheduler")
            .Create("Create", "Scheduler")
            .Destroy("Destroy", "Scheduler")
            .Update("Update", "Scheduler")
        )
    )


### Cancel(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the cancel event.

For additional information check the [cancel](/api/web/scheduler#events-cancel) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (Razor)
    @(Html.Kendo().Scheduler<Task>()
        .Name("Scheduler")
        .DataSource(d => d
            .Model(m => m.Id(f => f.TaskID))
            .Read("Read", "Scheduler")
            .Create("Create", "Scheduler")
            .Destroy("Destroy", "Scheduler")
            .Update("Update", "Scheduler")
        )
        .Events(events => events.Cancel(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### Cancel(`System.String`)
Defines the name of the JavaScript function that will handle the the cancel event.

For additional information check the [cancel](/api/web/scheduler#events-cancel) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (Razor)
    @(Html.Kendo().Scheduler<Task>()
        .Name("Scheduler")
        .Events(events => events.Cancel("cancel"))
        .DataSource(d => d
            .Model(m => m.Id(f => f.TaskID))
            .Read("Read", "Scheduler")
            .Create("Create", "Scheduler")
            .Destroy("Destroy", "Scheduler")
            .Update("Update", "Scheduler")
        )
    )


### Save(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the save event.

For additional information check the [save](/api/web/scheduler#events-save) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (Razor)
    @(Html.Kendo().Scheduler<Task>()
        .Name("Scheduler")
        .Events(events => events.Save(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                    .DataSource(d => d
                        .Model(m => m.Id(f => f.TaskID))
                        .Read("Read", "Scheduler")
                        .Create("Create", "Scheduler")
                        .Destroy("Destroy", "Scheduler")
                        .Update("Update", "Scheduler")
                    )
                )


### Save(`System.String`)
Defines the name of the JavaScript function that will handle the the save event.

For additional information check the [save](/api/web/scheduler#events-save) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (Razor)
    @(Html.Kendo().Scheduler<Task>()
        .Name("Scheduler")
        .Events(events => events.Save("save"))
        .DataSource(d => d
            .Model(m => m.Id(f => f.TaskID))
            .Read("Read", "Scheduler")
            .Create("Create", "Scheduler")
            .Destroy("Destroy", "Scheduler")
            .Update("Update", "Scheduler")
        )
    )


### DataBound(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the dataBound event.

For additional information check the [dataBound](/api/web/scheduler#events-dataBound) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (Razor)
    @(Html.Kendo().Scheduler<Task>()
        .Name("Scheduler")
        .DataSource(d => d
            .Model(m => m.Id(f => f.TaskID))
            .Read("Read", "Scheduler")
            .Create("Create", "Scheduler")
            .Destroy("Destroy", "Scheduler")
            .Update("Update", "Scheduler")
        )
        .Events(events => events.DataBound(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### DataBound(`System.String`)
Defines the name of the JavaScript function that will handle the the dataBound event.

For additional information check the [dataBound](/api/web/scheduler#events-dataBound) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (Razor)
    @(Html.Kendo().Scheduler<Task>()
        .Name("Scheduler")
        .Events(events => events.DataBound("dataBound"))
        .DataSource(d => d
            .Model(m => m.Id(f => f.TaskID))
            .Read("Read", "Scheduler")
            .Create("Create", "Scheduler")
            .Destroy("Destroy", "Scheduler")
            .Update("Update", "Scheduler")
        )
    )


### DataBinding(`System.Func<System.Object,System.Object>`)
Defines the inline handler of the dataBinding event.

For additional information check the [dataBinding](/api/web/scheduler#events-dataBinding) event documentation.


#### Parameters

##### handler `System.Func<System.Object,System.Object>`
The handler code wrapped in a text tag (Razor syntax).




#### Example (Razor)
    @(Html.Kendo().Scheduler<Task>()
        .Name("Scheduler")
        .DataSource(d => d
            .Model(m => m.Id(f => f.TaskID))
            .Read("Read", "Scheduler")
            .Create("Create", "Scheduler")
            .Destroy("Destroy", "Scheduler")
            .Update("Update", "Scheduler")
        )
        .Events(events => events.DataBinding(
                @<text>
                    function(e) {
                    //event handling code
                    }
                    </text>
                    ))
                )


### DataBinding(`System.String`)
Defines the name of the JavaScript function that will handle the the dataBinding event.

For additional information check the [dataBinding](/api/web/scheduler#events-dataBinding) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the event.




#### Example (Razor)
    @(Html.Kendo().Scheduler<Task>()
        .Name("Scheduler")
        .Events(events => events.DataBinding("dataBinding"))
        .DataSource(d => d
            .Model(m => m.Id(f => f.TaskID))
            .Read("Read", "Scheduler")
            .Create("Create", "Scheduler")
            .Destroy("Destroy", "Scheduler")
            .Update("Update", "Scheduler")
        )
    )



