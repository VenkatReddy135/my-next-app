---
title: kendo.data.SchedulerDataSource
meta_title: API Reference for Kendo UI SchedulerDataSource
meta_description: Learn more about the configuration of Kendo UI SchedulerDataSource, methods and events.
slug: api-framework-schedulerdatasource
tags: api,framework
publish: true
---

# kendo.data.SchedulerDataSource

The data source used by the [kendo.ui.Scheduler](/api/web/scheduler) widget.
Inherits from [kendo.data.DataSource](/api/framework/datasource). The SchedulerDataSource contains instances of the
[kendo.data.SchedulerEvent](/api/framework/schedulerevent) class.



## Configuration

See the [DataSource configuration](/api/framework/datasource#configuration) for all inherited configuration options.

### schema `Object`

The schema configuration of the SchedulerDataSource.

### schema.model `Object`

The model configuration of the SchedulerDataSource. See [SchedulerEvent](/api/framework/schedulerevent#configuration) for more info.

#### Example - configure the data source model model

    <script>
    var dataSource = new kendo.data.SchedulerDataSource({
        transport: {
            read: {
                url: "http://demos.kendoui.com/service/tasks",
                dataType: "jsonp"
            },
            update: {
                url: "http://demos.kendoui.com/service/tasks/update",
                dataType: "jsonp"
            },
            create: {
                url: "http://demos.kendoui.com/service/tasks/create",
                dataType: "jsonp"
            },
            destroy: {
                url: "http://demos.kendoui.com/service/tasks/destroy",
                dataType: "jsonp"
            }
        },
        schema: {
            model: {
                id: "taskId",
                fields: {
                    taskId: { from: "TaskID", type: "number" },
                    title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                    start: { type: "date", from: "Start" },
                    end: { type: "date", from: "End" },
                    startTimezone: { from: "StartTimezone" },
                    endTimezone: { from: "EndTimezone" },
                    description: { from: "Description" },
                    recurrenceId: { from: "RecurrenceID" },
                    recurrenceRule: { from: "RecurrenceRule" },
                    recurrenceException: { from: "RecurrenceException" },
                    ownerId: { from: "OwnerID", defaultValue: 1 },
                    isAllDay: { type: "boolean", from: "IsAllDay" }
                }
            }
        }
    });
    dataSource.fetch(function() {
        var event = this.at(0);
        console.log(event.title); // outputs "Bowling tournament"
    });
    </script>
