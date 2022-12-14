---
title: kendo.ui.Scheduler
meta_title: Configuration, methods and events of Kendo UI Scheduler
meta_description: How to configure and control methods in Scheduler UI widget, which events to use to open, close, change, select.
slug: api-web-scheduler
relatedDocs: gs-web-scheduler-overview
tags: api,web
publish: true
---

# kendo.ui.Scheduler

Represents the Kendo UI Scheduler widget. Inherits from [Widget](/api/framework/widget).

## Configuration

### allDayEventTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) used to render the "all day" scheduler events.

The fields which can be used in the template are:

* description `String` - the event description
* end `Date` - the event end date
* isAllDay `Boolean` - if true the event is "all day"
* resources `Array` - the event resources
* start `Date` - the event start date
* title `String` - the event title

#### Example - set the all day event template

    <script id="event-template" type="text/x-kendo-template">
      <div>Title: #: title #</div>
      <div>Atendees:
          # for (var i = 0; i < resources.length; i++) { #
            #: resources[i].text #
          # } #
      </div>
    </script>
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      allDayEventTemplate: $("#event-template").html(),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          isAllDay: true,
          title: "Interview",
          atendees: [1,2]
        }
      ],
      resources: [
        {
          field: "atendees",
          dataSource: [
           { value: 1, text: "Alex" },
           { value: 2, text: "Bob" }
          ],
          multiple: true
        }
      ]
    });
    </script>

### allDaySlot `Boolean` *(default: true)*

If set to `true` the scheduler will display a slot for "all day" events.

#### Example - hide the all day slot
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      allDaySlot: false,
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### dataSource `Object|Array|kendo.data.SchedulerDataSource`

The data source of the widget which contains the scheduler events. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing [kendo.data.SchedulerDataSource](/api/framework/schedulerdatasource)
instance.

If the `dataSource` option is set to a JavaScript object or array the widget will initialize a new [kendo.data.SchedulerDataSource](/api/framework/schedulerdatasource) instance using that value as data source configuration.

If the `dataSource` option is an existing [kendo.data.SchedulerDataSource](/api/framework/schedulerdatasource) instance the widget will use that instance and will **not** initialize a new one.

> The Kendo UI Scheduler widget can be bound *only* to a `kendo.data.SchedulerDataSource`. An exception will be thrown if the `dataSource` option is set to a `kendo.data.DataSource` instance.

#### Example - set dataSource as a JavaScript object

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: {
        batch: true,
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
          },
          parameterMap: function(options, operation) {
            if (operation !== "read" && options.models) {
              return {models: kendo.stringify(options.models)};
            }
          }
        },
        schema: {
           model: {
             id: "ID",
             fields: {
               ID: { type: "number" },
               title: { field: "Title", defaultValue: "No title", validation: { required: true } },
               start: { type: "date", field: "Start" },
               end: { type: "date", field: "End" },
               description: { field: "Description" },
               recurrenceId: { from: "RecurrenceID" },
               recurrenceRule: { from: "RecurrenceRule" },
               recurrenceException: { from: "RecurrenceException" },
               ownerId: { field: "OwnerID", defaultValue: 1 },
               isAllDay: { type: "boolean", field: "IsAllDay" }
             }
           }
         }
      }
    });

#### Example - set dataSource as a JavaScript array

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting"
        }
      ]
    });
    </script>

#### Example - set dataSource as an existing kendo.data.SchedulerDataSource instance

    <input id="autocomplete" />
    <script>
    var dataSource = new kendo.data.SchedulerDataSource({
      transport: {
        read: {
          url: "http://demos.kendoui.com/service/tasks",
          dataType: "jsonp"
        }
      }
    });
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: dataSource
    });
    </script>

### date `Date`

The current date of the scheduler. Used to determine the period which is displayed by the widget.

#### Example - set the date of the scheduler

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Breakfast"
        }
      ]
    });
    </script>

### dateHeaderTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) used to render the date header cells.

By default the scheduler renders the date using the current culture date format.

The fields which can be used in the template are:

* date - represents the major tick date.

#### Example - set the date header template
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dateHeaderTemplate: kendo.template("<strong>#=kendo.toString(date, 'd')#</strong>"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### editable `Boolean|Object` *(default: true)*

If set to `true` the user would be able to create new scheduler events and modify or delete existing ones.

#### Example - disable editing
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Breakfast"
        }
      ],
      editable: false
    });
    </script>

### editable.confirmation `Boolean|String` *(default: true)*

If set to `true` the scheduler will display a confirmation dialog when the user clicks the "destroy" button.

Can be set to a string which will be used as the confirmation text.

#### Example - disable delete confirmation
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      editable: {
        confirmation: false
      },
      views: [
        {
          type: "day"
        }
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

#### Example - set delete confirmation text

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      editable: {
        confirmation: "Are you sure you want to delete this meeting?"
      },
      views: [
        {
          type: "day"
        }
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### editable.create `Boolean` *(default: true)*

If set to `true` the user can create new events. Creating is enabled by default.

#### Example - disable event creating
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      editable: {
        create: false
      },
      views: [
        { type: "day" }
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### editable.destroy `Boolean` *(default: true)*

If set to `true` the user can delete events from the view by clicking the "destroy" button. Deleting is enabled by default.

#### Example - disable event deleting
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      editable: {
        destroy: false
      },
      views: [
        { type: "day" }
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### editable.resize `Boolean` *(default: true)*

If set to `true` the scheduler allows event resizing. Dragging the resize handles changes the start or end time of the event.

#### Example - disable event resizing
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Breakfast"
        }
      ],
      editable: {
        resize: false
      }
    });
    </script>

### editable.template `String|Function`

The [template](/api/framework/kendo#methods-template) which renders the editor.

The template should contain elements whose `name` HTML attributes are set as the editable fields. This is how the grid will know
which field to update. The other option is to use [MVVM](/getting-started/framework/mvvm/overview) bindings in order to bind HTML elements to data item fields.

> Use the `role` data attribute to initialize Kendo UI widgets in the template. Check [data attribute initialization](/getting-started/data-attribute-initialization) for more info.

#### Example - customize the popup editor

    <script id="editor" type="text/x-kendo-template">
       <h3>Edit meeting</h3>
       <p>
           <label>Title: <input name="title" /></label>
       </p>
       <p>
           <label>Start: <input data-role="datetimepicker" name="start" /></label>
       </p>
       <p>
           <label>Start: <input data-role="datetimepicker" name="end" /></label>
       </p>
    </script>
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      editable: {
        template: $("#editor").html()
      },
      views: [
        { type: "day" }
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

#### Example - using MVVM in the popup editor template
    <script id="editor" type="text/x-kendo-template">
       <h3>Edit meeting</h3>
       <p>
           <label>Title: <input data-bind="value: title" /></label>
       </p>
       <p>
           <label>Start: <input data-role="datetimepicker" data-bind="value: start" /></label>
       </p>
       <p>
           <label>Start: <input data-role="datetimepicker" data-bind="value: end" /></label>
       </p>
    </script>
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      editable: {
        template: $("#editor").html()
      },
      views: [
        { type: "day" }
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### editable.update `Boolean` *(default: true)*

If set to `true` the user can update events. Updating is enabled by default.

#### Example - disable event updating
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      editable: {
        update: false
      },
      views: [
        { type: "day" }
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### endTime `Date`

The end time of the week and day views. The scheduler will display events ending before the `endTime`.

#### Example - set the end time

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      startTime: new Date("2013/6/6 08:00"),
      endTime: new Date("2013/6/6 18:00")
      views: ["day", "week"],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### eventTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) used to render the scheduler events.

The fields which can be used in the template are:

* description `String` - the event description
* end `Date` - the event end date
* resources `Array` - the event resources
* start `Date` - the event start date
* title `String` - the event title

#### Example - set the event template

    <script id="event-template" type="text/x-kendo-template">
      <div>Title: #: title #</div>
      <div>Atendees:
          # for (var i = 0; i < resources.length; i++) { #
            #: resources[i].text #
          # } #
      </div>
    </script>
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      eventTemplate: $("#event-template").html(),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview",
          atendees: [1,2]
        }
      ],
      resources: [
        {
          field: "atendees",
          dataSource: [
           { value: 1, text: "Alex" },
           { value: 2, text: "Bob" }
          ],
          multiple: true
        }
      ]
    });
    </script>

### group `Object`

The configuration of the scheduler resource(s) grouping.

### group.resources `Array`

An array of resource names by which the scheduler events will be grouped.

#### Example - disable delete confirmation
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      group: {
        resources: ["Rooms"]
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview",
          roomId: 1 // the event is held in "Small meeting room" whose value is 1
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting",
          roomId: 2 // the event is held in "Big meeting room" whose value is 2
        }
      ],
      resources: [
        {
          field: "roomId",
          name: "Rooms",
          dataColorField: "key",
          dataSource: [
            { text: "Small meeting room", value: 1, key: "#aabbcc" },
            { text: "Big meeting room", value: 2, key: "green" }
          ]
        }
      ]
    });
    </script>

### group.orientation `String` *(default: "horizontal")*

The orientation of the group headers. Supported values are *horizontal* or *vertical*. Note that the agenda view is always in vertical orientation.

#### Example - disable delete confirmation
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      group: {
        resources: ["Rooms"],
        orientation: "vertical"
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview",
          roomId: 1 // the event is held in "Small meeting room" whose value is 1
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting",
          roomId: 2 // the event is held in "Big meeting room" whose value is 2
        }
      ],
      resources: [
        {
          field: "roomId",
          name: "Rooms",
          dataColorField: "key",
          dataSource: [
            { text: "Small meeting room", value: 1, key: "#aabbcc" },
            { text: "Big meeting room", value: 2, key: "green" }
          ]
        }
      ]
    });
    </script>


### height `Number|String`

The height of the widget. Numeric values are treated as pixels.

#### Example - set the height of the scheduler
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      height: 500,
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### majorTick `Number` *(default: 60)*

The number of minutes represented by a major tick.

#### Example - set the major tick

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      majorTick: 120, // a major tick represents 120 minutes (2 hours)
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### majorTimeHeaderTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) used to render the major ticks.

By default the scheduler renders the time using the current culture time format.

The fields which can be used in the template are:

* date - represents the major tick date.

#### Example - set the major time header template

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      majorTimeHeaderTemplate: kendo.template("<strong>#=kendo.toString(date, 'h')#</strong><sup>00</sup>"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages `Object`

The configuration of the scheduler messages. Use this option to customize or localize the scheduler messages.

### messages.allDay `String`

The text similar to "all day" displayed in day/week views.

#### Example - set the "allDay" scheduler message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        allDay: "daily"
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.cancel `String`

The text similar to "Cancel" displayed in scheduler.

#### Example - set the "cancel" scheduler message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        cancel: "Undo"
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.date `String`

The text similar to "Date" displayed in scheduler.

#### Example - set the "date" scheduler message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        date: "Date"
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.deleteWindowTitle `String`

The text similar to "Delete event" displayed as title of the scheduler delete event window.

#### Example - set the "deleteWindowTitle" scheduler message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        deleteWindowTitle: "Remove event"
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.destroy `String`

The text similar to "Delete" displayed in scheduler.

#### Example - set the "destroy" scheduler message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        destroy: "Destroy"
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.event `String`

The text similar to "Event" displayed in scheduler.

#### Example - set the "event" scheduler message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        event: "Meeting"
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.save `String`

The text similar to "Save" displayed in scheduler.

#### Example - set the "save" scheduler message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        save: "Update"
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.showFullDay `String`

The text similar to "Show full day" used in scheduler "showFullDay" button.

#### Example - set the "showFullDay" scheduler message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        showFullDay: "Show 24h"
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>


### messages.showWorkDay `String`

The text similar to "Show business hours" used in scheduler "showWorkDay" button.

#### Example - set the "showWorkDay" scheduler message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        showWorkDay: "Show work hours"
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.time `String`

The text similar to "Time" displayed in scheduler.

#### Example - set the "time" scheduler message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        time: "Time of the day"
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.today `String`

The text similar to "Today" displayed in scheduler.

#### Example - set the "today" scheduler message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        today: "Current Date"
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.editor `Object`

The configuration of the scheduler editor messages. Use this option to customize or localize the scheduler editor messages.

### messages.editor.allDayEvent `String`

The text similar to "All day event" displayed in the scheduler event editor.

#### Example - set the "allDayEvent" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        editor: {
            allDayEvent: "Full day"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.editor.description `String`

The text similar to "Description" displayed in the scheduler event editor.

#### Example - set the "description" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        editor: {
            description: "Message"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.editor.editorTitle `String`

The text similar to "Event" displayed as title of the scheduler event editor.

#### Example - set the "editorTitle" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        editor: {
            editorTitle: "Edit event"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.editor.end `String`

The text similar to "End" displayed in the scheduler event editor.

#### Example - set the "end" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        editor: {
            end: "End of the event"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.editor.endTimezone `String`

The text similar to "End timezone" displayed in the scheduler event editor.

#### Example - set the "endTimezone" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        editor: {
            endTimezone: "End date timezone"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.editor.repeat `String`

The text similar to "Repeat" displayed in the scheduler event editor.

#### Example - set the "repeat" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        editor: {
            repeat: "Repeat the event"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.editor.separateTimezones `String`

The text similar to "Use separate start and end time zones" displayed in the scheduler event editor.

#### Example - set the "separateTimezones" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        editor: {
            separateTimezones: "Set different start and end time zones"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.editor.start `String`

The text similar to "Start" displayed in the scheduler event editor.

#### Example - set the "start" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        editor: {
            start: "Start of the event"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.editor.startTimezone `String`

The text similar to "Start timezone" displayed in the scheduler event editor.

#### Example - set the "startTimezone" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        editor: {
            startTimezone: "Start date timezone"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.editor.timezone `String`

The text similar to "Timezone" displayed in the scheduler event editor.

#### Example - set the "timezone" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        editor: {
            timezone: "Event timezone"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.editor.timezoneEditorButton `String`

The text similar to "Time zone" displayed as text of timezone editor button in the scheduler event editor.

#### Example - set the "timezoneEditorButton" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        editor: {
            timezoneEditorButton: "Time zone"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.editor.timezoneEditorTitle `String`

The text similar to "Timezones" displayed as title of timezone editor in the scheduler event editor.

#### Example - set the "timezoneEditorTitle" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        editor: {
            timezoneEditorTitle: "Timezones"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.editor.title `String`

The text similar to "Title of the event" displayed in the scheduler event editor.

#### Example - set the "title" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        editor: {
            title: "Title of the event"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor `Object`

The configuration of the scheduler recurrence editor messages. Use this option to customize or localize the scheduler recurrence editor messages.

### messages.recurrenceEditor.daily `Object`

The configuration of the scheduler recurrence editor daily messages. Use this option to customize or localize the scheduler recurrence editor daily messages.

### messages.recurrenceEditor.daily.days `String`

The text similar to " day(s)" displayed in the scheduler recurrence editor.

#### Example - set the "days" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            daily: {
                days: " days(s)"
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.daily.repeatEvery `String`

The text similar to "Repeat every: " displayed in the scheduler recurrence editor.

#### Example - set the "repeatEvery" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            daily: {
                repeatEvery: "Repeat on: "
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.end `Object`

The configuration of the scheduler recurrence editor end messages. Use this option to customize or localize the scheduler recurrence editor end messages.

### messages.recurrenceEditor.end.endCountAfter `String`

The text similar to "After " displayed in the scheduler recurrence editor.

#### Example - set the "endCountAfter" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            end: {
                endCountAfter: "after "
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.end.endCountOccurrence `String`

The text similar to " occurrence(s)" displayed in the scheduler recurrence editor.

#### Example - set the "endCountOccurrence" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            end: {
                endCountOccurrence: " occurrence(s)."
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.end.endLabel `String`

The text similar to "End:" displayed in the scheduler recurrence editor.

#### Example - set the "endLabel" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            end: {
                endLabel: "end: "
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.end.endNever `String`

The text similar to "Never" displayed in the scheduler recurrence editor.

#### Example - set the "endNever" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            end: {
                endNever: "never"
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.end.endUntilOn `String`

The text similar to "On " displayed in the scheduler recurrence editor.

#### Example - set the "endUntilOn" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            end: {
                endUntilOn: "on "
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.frequencies `Object`

The configuration of the scheduler recurrence editor frequencies messages. Use this option to customize or localize the scheduler recurrence editor frequencies messages.

### messages.recurrenceEditor.frequencies.daily `String`

The text similar to "Daily" displayed in the scheduler recurrence editor.

#### Example - set the "daily" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            frequencies: {
                daily: "daily"
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.frequencies.monthly `String`

The text similar to "Monthly" displayed in the scheduler recurrence editor.

#### Example - set the "monthly" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            frequencies: {
                monthly: "monthly"
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.frequencies.never `String`

The text similar to "Never" displayed in the scheduler recurrence editor.

#### Example - set the "never" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            frequencies: {
                never: "never"
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.frequencies.weekly `String`

The text similar to "Weekly" displayed in the scheduler recurrence editor.

#### Example - set the "weekly" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            frequencies: {
                weekly: "weekly"
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.frequencies.yearly `String`

The text similar to "Yearly" displayed in the scheduler recurrence editor.

#### Example - set the "yearly" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            frequencies: {
                yearly: "yearly"
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.monthly `Object`

The configuration of the scheduler recurrence editor monthly messages. Use this option to customize or localize the scheduler recurrence editor monthly messages.

### messages.recurrenceEditor.monthly.day `String`

The text similar to "Day " displayed in the scheduler recurrence editor.

#### Example - set the "day" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            monthly: {
                day: "day "
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.monthly.months `String`

The text similar to " month(s)" displayed in the scheduler recurrence editor.

#### Example - set the "months" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            monthly: {
                months: " month(s)."
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.monthly.repeatEvery `String`

The text similar to "Repeat every: " displayed in the scheduler recurrence editor.

#### Example - set the "repeatEvery" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            monthly: {
                repeatEvery: "Repeat each: "
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.monthly.repeatOn `String`

The text similar to "Repeat on: " displayed in the scheduler recurrence editor.

#### Example - set the "repeatOn" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            monthly: {
                repeatOn: "repeat on: "
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.offsetPositions `Object`

The configuration of the scheduler recurrence editor offsetPositions messages. Use this option to customize or localize the scheduler recurrence editor offsetPositions messages.

### messages.recurrenceEditor.offsetPositions.first `String`

The text similar to "first" displayed in the scheduler recurrence editor.

#### Example - set the "first" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            offsetPositions: {
                first: "first"
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.offsetPositions.second `String`

The text similar to "second" displayed in the scheduler recurrence editor.

#### Example - set the "second" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            offsetPositions: {
                second: "second"
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.offsetPositions.third `String`

The text similar to "third" displayed in the scheduler recurrence editor.

#### Example - set the "third" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            offsetPositions: {
                third: "third"
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.offsetPositions.fourth `String`

The text similar to "fourth" displayed in the scheduler recurrence editor.

#### Example - set the "fourth" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            offsetPositions: {
                fourth: "fourth"
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.offsetPositions.last `String`

The text similar to "last" displayed in the scheduler recurrence editor.

#### Example - set the "last" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            offsetPositions: {
                last: "last"
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.weekly `Object`

The configuration of the scheduler recurrence editor weekly messages. Use this option to customize or localize the scheduler recurrence editor weekly messages.

### messages.recurrenceEditor.weekly.weeks `String`

The text similar to " week(s)" displayed in the scheduler recurrence editor.

#### Example - set the "weeks" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            weekly: {
                weeks: " week(s)."
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.weekly.repeatEvery `String`

The text similar to "Repeat every: " displayed in the scheduler recurrence editor.

#### Example - set the "repeatEvery" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            weekly: {
                repeatEvery: "Repeat each: "
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.weekly.repeatOn `String`

The text similar to "Repeat on: " displayed in the scheduler recurrence editor.

#### Example - set the "repeatOn" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            weekly: {
                repeatOn: "repeat on: "
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.yearly `Object`

The configuration of the scheduler recurrence editor yearly messages. Use this option to customize or localize the scheduler recurrence editor yearly messages.

### messages.recurrenceEditor.yearly.of `String`

The text similar to " of " displayed in the scheduler recurrence editor.

#### Example - set the "of" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            yearly: {
                of: " of "
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.yearly.repeatEvery `String`

The text similar to "Repeat every: " displayed in the scheduler recurrence editor.

#### Example - set the "repeatEvery" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            yearly: {
                repeatEvery: "Repeat each: "
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.yearly.repeatOn `String`

The text similar to "Repeat on: " displayed in the scheduler recurrence editor.

#### Example - set the "repeatOn" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            yearly: {
                repeatOn: "repeat on: "
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceEditor.yearly.years `String`

The text similar to " year(s)" displayed in the scheduler recurrence editor.

#### Example - set the "years" scheduler recurrence editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceEditor: {
            yearly: {
                years: " year(s)."
            }
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceMessages `Object`

The configuration of the scheduler recurrence messages. Use this option to customize or localize the scheduler recurrence messages.

### messages.recurrenceMessages.deleteRecurring `String`

The text similar to "Do you want to delete only this event occurrence or the whole series?" displayed in the scheduler event editor.

#### Example - set the "deleteRecurring" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceMessages: {
            deleteRecurring: "Delete only this event occurrence or the whole series?"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceMessages.deleteWindowOccurrence `String`

The text similar to "Delete current occurrence" displayed in the scheduler event editor.

#### Example - set the "deleteWindowOccurrence" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceMessages: {
            deleteWindowOccurrence: "Delete current event"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceMessages.deleteWindowSeries `String`

The text similar to "Delete the series" displayed in the scheduler event editor.

#### Example - set the "deleteWindowSeries" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceMessages: {
            deleteWindowSeries: "Delete all occurrences"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceMessages.deleteWindowTitle `String`

The text similar to "Delete Recurring Item" displayed in the scheduler event editor.

#### Example - set the "deleteWindowTitle" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceMessages: {
            deleteWindowTitle: "Delete Recurring event"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceMessages.editRecurring `String`

The text similar to "Do you want to edit only this event occurrence or the whole series?" displayed in the scheduler event editor.

#### Example - set the "editRecurring" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceMessages: {
            editRecurring: "Do you want to edit only this event or the whole series?"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceMessages.editWindowOccurrence `String`

The text similar to "Edit current occurrence" displayed in the scheduler event editor.

#### Example - set the "editWindowOccurrence" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceMessages: {
            editWindowOccurrence: "Edit current event"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceMessages.editWindowSeries `String`

The text similar to "Edit the series" displayed in the scheduler event editor.

#### Example - set the "editWindowSeries" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceMessages: {
            editWindowSeries: "Edit all occurrences"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.recurrenceMessages.editWindowTitle `String`

The text similar to "Edit Recurring Item" displayed in the scheduler event editor.

#### Example - set the "editWindowTitle" scheduler editor message

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        recurrenceMessages: {
            editWindowTitle: "Edit Recurring Event"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.views `Object`

The configuration of the scheduler views messages. Use this option to customize or localize the scheduler views messages.

### messages.views.day `String`

The text similar to "Day" displayed as scheduler "day" view title.

#### Example - set the "day" view title

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        views: {
            day: "Today"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.views.week `String`

The text similar to "Week" displayed as scheduler "week" view title.

#### Example - set the "week" view title

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        views: {
            week: "Weekly"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.views.month `String`

The text similar to "Month" displayed as scheduler "month" view title.

#### Example - set the "month" view title

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        views: {
            month: "Monthly"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### messages.views.agenda `String`

The text similar to "Agenda" displayed as scheduler "agenda" view title.

#### Example - set the "agenda" view title

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      messages: {
        views: {
            agenda: "Events list"
        }
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### minorTickCount `Number` *(default:2)*

The number of time slots to display per major tick.

#### Example - set the number of time slots

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      minorTickCount: 1, // display one time slot per major tick
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### minorTimeHeaderTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) used to render the minor ticks.

By default the scheduler renders a `"&nbsp;"`.

The fields which can be used in the template are:

* date - represents the major tick date.

#### Example - set the minor time header template
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      minorTimeHeaderTemplate: kendo.template("<strong>#=kendo.toString(date, 't')#</strong>"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### resources `Array`

The configuration of the scheduler resource(s). A scheduler resource is optional metadata that can be associated
with a scheduler event.

### resources.dataColorField `String` *(default: "color")*

The field of the resource data item which contains the resource color.

#### Example - set the resource data color field

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview",
          roomId: 1 // the event is held in "Small meeting room" whose value is 1
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting",
          roomId: 2 // the event is held in "Big meeting room" whose value is 2
        }
      ],
      resources: [
        {
          field: "roomId",
          dataColorField: "key",
          dataSource: [
            { text: "Small meeting room", value: 1, key: "#aabbcc" },
            { text: "Big meeting room", value: 2, key: "green" }
          ]
        }
      ]
    });
    </script>

### resources.dataSource `Object|Array|kendo.data.DataSource`

The data source which contains resource data items.  Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing [kendo.data.DataSource](/api/framework/datasource)
instance.

If the `dataSource` option is set to a JavaScript object or array the widget will initialize a new [kendo.data.DataSource](/api/framework/datasource) instance using that value as data source configuration.

If the `dataSource` option is an existing [kendo.data.DataSource](/api/framework/datasource) instance the widget will use that instance and will **not** initialize a new one.

#### Example - set the resource data source

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview",
          roomId: 1 // the event is held in "Small meeting room" whose value is 1
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting",
          roomId: 2 // the event is held in "Big meeting room" whose value is 2
        }
      ],
      resources: [
        {
          field: "roomId",
          dataSource: [
            { text: "Small meeting room", value: 1 },
            { text: "Big meeting room", value: 2 }
          ]
        }
      ]
    });
    </script>

### resources.dataTextField `String` *(default: "text")*

The field of the resource data item which represents the resource text.

#### Example - set the resource data text field

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview",
          roomId: 1 // the event is held in "Small meeting room" whose value is 1
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting",
          roomId: 2 // the event is held in "Big meeting room" whose value is 2
        }
      ],
      resources: [
        {
          field: "roomId",
          dataTextField: "room",
          dataSource: [
            { room: "Small meeting room", value: 1 },
            { room: "Big meeting room", value: 2 }
          ]
        }
      ]
    });
    </script>

### resources.dataValueField `String` *(default: "value")*

The field of the resource data item which represents the resource value. The resource value is used to link a scheduler event with a resource.

#### Example - set the resource data value field

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview",
          roomId: 1 // the event is held in "Small meeting room" whose roomId is 1
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting",
          roomId: 2 // the event is held in "Big meeting room" whose roomId is 2
        }
      ],
      resources: [
        {
          field: "roomId",
          dataValueField: "roomId"
          dataSource: [
            { text: "Small meeting room", roomId: 1 },
            { text: "Big meeting room", roomId: 2 }
          ]
        }
      ]
    });
    </script>

### resources.field `String`

The field of the scheduler event which contains the resource id.

#### Example - specify the resource field

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview",
          roomId: 1 // the event is held in "Small meeting room" whose value is 1
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting",
          roomId: 2 // the event is held in "Big meeting room" whose value is 2
        }
      ],
      resources: [
        {
          field: "roomId",
          dataSource: [
            { text: "Small meeting room", value: 1 },
            { text: "Big meeting room", value: 2 }
          ]
        }
      ]
    });
    </script>

### resources.multiple `Boolean` *(default: false)*

If set to `true` the scheduler event can be assigned multiple instances of the resource. The scheduler event field specified via the [field](#configuration-resources.field) option will contain an array of resources.
By default only one resource instance can be assigned to an event.

#### Example - multiple resources

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview",
          roomId: 1,
          atendees: [2, 3] // the resource instances with value 2 and 3 (Bob and Charlie)
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting",
          roomId: 2,
          atendees: [1, 2] // the resource instances with value 1 and 2 (Alex and Bob)
        }
      ],
      resources: [
        {
          field: "roomId",
          dataSource: [
            { text: "Small meeting room", value: 1 },
            { text: "Big meeting room", value: 2 }
          ]
        },
        {
          field: "atendees",
          multiple: true,
          dataSource: [
            { text: "Alex", value: 1 },
            { text: "Bob", value: 2 },
            { text: "Charlie", value: 3 }
          ]
        }
      ]
    });
    </script>

### resources.name `String`

Tha name of the resource used to distinguish resource. If not set the value of the [field](#configuration-resources.field) option is used.

#### Example - set the resource title

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview",
          roomId: 1 // the event is held in "Small meeting room" whose value is 1
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting",
          roomId: 2 // the event is held in "Big meeting room" whose value is 2
        }
      ],
      resources: [
        {
          field: "roomId",
          title: "Room",
          name: "Room",
          dataSource: [
            { text: "Small meeting room", value: 1 },
            { text: "Big meeting room", value: 2 }
          ]
        }
      ]
    });
    </script>


### resources.title `String`

The user friendly title of the resource displayed in the scheduler edit form. If not set the value of the [field](#configuration-resources.field) option is used.

#### Example - set the resource title

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview",
          roomId: 1 // the event is held in "Small meeting room" whose value is 1
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting",
          roomId: 2 // the event is held in "Big meeting room" whose value is 2
        }
      ],
      resources: [
        {
          field: "roomId",
          title: "Room",
          dataSource: [
            { text: "Small meeting room", value: 1 },
            { text: "Big meeting room", value: 2 }
          ]
        }
      ]
    });
    </script>

### resources.valuePrimitive `Boolean` *(default: true)*

Set to `false` if the scheduler event field specified via the [field](#configuration-resources.field) option contains a resource data item.
By default the scheduler expects that field to contain a primitive value (string, number) which corresponds to the "value" of the resource (specified via `dataValueField`).

#### Example - set valuePrimitive to false

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview",
          room: { value: 1 } // the resource field is an object instead of a primitive value
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting",
          room: { value: 2 } // the resource field is an object instead of a primitive value
        }
      ],
      resources: [
        {
          field: "room",
          valuePrimitive: false,
          dataSource: [
            { text: "Small meeting room", value: 1 },
            { text: "Big meeting room", value: 2 }
          ]
        }
      ]
    });
    </script>

### selectable `Boolean` *(default: false)*

If set to true the user would be able to select scheduler cells and events. By default selection is disabled.

### startTime `Date`

The start time of the week and day views. The scheduler will display events starting after the `startTime`.

#### Example - set the start time

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      startTime: new Date("2013/6/6 08:00"),
      endTime: new Date("2013/6/6 18:00")
      views: ["day", "week"],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### timezone `String`

The timezone which the scheduler will use to display the scheduler appointment dates. By default the current system timezone is used. This is an acceptable default when the
scheduler widget is bound to local array of events. It is advisable to specify a timezone if the scheduler is bound to a remote service.
That way all users would see the same dates and times no matter their configured system timezone.

The complete list of the supported timezones is available in the [List of IANA time zones](http://en.wikipedia.org/wiki/List_of_IANA_time_zones) Wikipedia page.

> The **kendo.timezones.min.js** file must be included in order to use timezones other than "Etc/UTC".

#### Example - set the timezone
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
        date: new Date("2013/6/13"),
        timezone: "Europe/London", // Use the London timezone
        dataSource: {
            batch: true,
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
                },
                parameterMap: function(options, operation) {
                    if (operation !== "read" && options.models) {
                        return {models: kendo.stringify(options.models)};
                    }
                }
            },
            schema: {
                model: {
                    id: "ID",
                    fields: {
                        ID: { type: "number" },
                        title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                        start: { type: "date", from: "Start" },
                        end: { type: "date", from: "End" },
                        description: { from: "Description" },
                        recurrenceId: { from: "RecurrenceID" },
                        recurrenceRule: { from: "RecurrenceRule" },
                        recurrenceException: { from: "RecurrenceException" },
                        ownerId: { from: "OwnerID", defaultValue: 1 },
                        isAllDay: { type: "boolean", from: "IsAllDay" }
                    }
                }
            }
        }
    });
    </script>

### views `Array`

The views displayed by the scheduler and their configuration. The array items can be either objects specifying the view configuration or strings representing the view types (assuming default configuration).
By default the Kendo UI Scheduler widget displays "day" and "week" view.

#### Example - set views as array of strings

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ], // day and month views
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting"
        }
      ]
    });
    </script>

#### Example - set views as array of objects

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        { type: "day" },
        { type: "month" }
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting"
        }
      ]
    });
    </script>

### views.allDayEventTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) used to render the "all day" scheduler events.

The fields which can be used in the template are:

* description `String` - the event description
* end `Date` - the event end date
* resources `Array` - the event resources
* start `Date` - the event start date
* title `String` - the event title

> The `allDayEventTemplate` option is supported when [views.type](#configuration-views.type) is set to "day" or "week".

#### Example - set the all day event template
    <script id="event-template" type="text/x-kendo-template">
      <div>Title: #: title #</div>
      <div>Atendees:
          # for (var i = 0; i < resources.length; i++) { #
            #: resources[i].text #
          # } #
      </div>
    </script>
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          allDayEventTemplate: $("#event-template").html()
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          isAllDay: true,
          title: "Interview",
          atendees: [1,2]
        }
      ],
      resources: [
        {
          field: "atendees",
          dataSource: [
           { value: 1, text: "Alex" },
           { value: 2, text: "Bob" }
          ],
          multiple: true
        }
      ]
    });
    </script>

### views.allDaySlot `Boolean` *(default: true)*

If set to `true` the scheduler will display a slot for "all day" events.

> The `allDaySlot` option is supported when [views.type](#configuration-views.type) is set to "day" or "week".

#### Example - hide the all day slot
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          allDaySlot: false
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.dateHeaderTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) used to render the date header cells.

By default the scheduler renders the date using the current culture date format.

The fields which can be used in the template are:

* date - represents the major tick date.

> The `dateHeaderTemplate` option is supported when [views.type](#configuration-views.type) is set to "day" or "week".

#### Example - set the date header template
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          dateHeaderTemplate: kendo.template("<strong>#=kendo.toString(date, 'd')#</strong>")
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.dayTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) used to render the day slots in month view.

The fields which can be used in the template are:

* date `Date` - represents the current day

> The `dayTemplate` option is supported when [views.type](#configuration-views.type) is set to "month".

#### Example - set the day template in month view

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "month",
          dayTemplate: kendo.template("<strong>#= kendo.toString(date, 'ddd') #</strong>")
        }
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.editable `Boolean|Object` *(default: true)*

If set to `true` the user would be able to create new scheduler events and modify or delete existing ones.

Overrides the [editable](#configuration-editable) option of the scheduler.

#### Example - disable view editing

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          editable: false
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.editable.create `Boolean` *(default: true)*

If set to `true` the user can create new events. Creating is enabled by default.

#### Example - disable event creating
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          editable: {
            create: false
          }
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.editable.destroy `Boolean` *(default: true)*

If set to `true` the user can delete events from the view by clicking the "destroy" button. Deleting is enabled by default.

#### Example - disable event deleting
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          editable: {
            destroy: false
          }
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.editable.update `Boolean` *(default: true)*

If set to `true` the user can update events. Updating is enabled by default.

#### Example - disable event updating
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          editable: {
            update: false
          }
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.endTime `Date`

The end time of the view. The scheduler will display events ending before the `endTime`.

#### Example - set the end time

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          startTime: new Date("2013/6/6 08:00"),
          endTime: new Date("2013/6/6 18:00")
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.eventDateTemplate

The [template](/api/framework/kendo#methods-template) used by the agenda view to render the date of the scheduler events.

The fields which can be used in the template are:

* date `Date` - represents the event date.

> The `eventDateTemplate` option is supported when [views.type](#configuration-views.type) is set to "agenda".

#### Example - set the event date template

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "agenda",
          eventDateTemplate: kendo.template("<strong>#= kendo.toString(date, 'dd-MM-yyyy')#</strong>")
        }
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.eventHeight `Number` *(default: 25)*

The height of the scheduler event rendered in month view.

> The `eventHeight` option is supported when [views.type](#configuration-views.type) is set to "month".

#### Example - set the event height in month view

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "month",
          eventHeight: 40
        }
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      height: 1000
    });
    </script>

### views.eventTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) used by the view to render the scheduler events.

The fields which can be used in the template are:

* description `String` - the event description
* end `Date` - the event end date
* resources `Array` - the event resources
* start `Date` - the event start date
* title `String` - the event title

#### Example - set the event template

    <script id="event-template" type="text/x-kendo-template">
      <div>Title: #: title #</div>
      <div>Atendees:
          # for (var i = 0; i < resources.length; i++) { #
            #: resources[i].text #
          # } #
      </div>
    </script>
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          eventTemplate: $("#event-template").html()
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview",
          atendees: [1,2]
        }
      ],
      resources: [
        {
          field: "atendees",
          dataSource: [
           { value: 1, text: "Alex" },
           { value: 2, text: "Bob" }
          ],
          multiple: true
        }
      ]
    });
    </script>

### views.eventTimeTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) used by the agenda view to render the time of the scheduler events.

The fields which can be used in the template are:

* description `String` - the event description
* end `Date` - the event end date
* isAllDay `Boolean` - if true the event is "all day"
* resources `Array` - the event resources
* start `Date` - the event start date
* title `String` - the event title

> The `eventTimeTemplate` option is supported when [views.type](#configuration-views.type) is set to "agenda".

#### Example - set the event time template
    <script id="event-time-template" type="text/x-kendo-template">
      # if (isAllDay) { #
         All day
      # } else { #
         #= kendo.toString(start, "t") # - #= kendo.toString(end, "t") #
      # }  #
    </script>
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "agenda",
          eventTimeTemplate: $("#event-time-template").html(),
        }
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.group `Object`

The configuration of the view resource(s) grouping.

### views.group.orientation `String` *(default: "horizontal")*

The orientation of the group headers. Supported values are *horizontal* or *vertical*. Note that the agenda view is always in vertical orientation.

#### Example - disable delete confirmation
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
            type: "month",
            group: {
                orientation: "vertical"
            }
        }
      ],
      group: {
        resources: ["Rooms"]
      },
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview",
          roomId: 1 // the event is held in "Small meeting room" whose value is 1
        },
        {
          id: 2,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Meeting",
          roomId: 2 // the event is held in "Big meeting room" whose value is 2
        }
      ],
      resources: [
        {
          field: "roomId",
          name: "Rooms",
          dataColorField: "key",
          dataSource: [
            { text: "Small meeting room", value: 1, key: "#aabbcc" },
            { text: "Big meeting room", value: 2, key: "green" }
          ]
        }
      ]
    });
    </script>


### views.majorTick `Number` *(default: 60)*

The number of minutes represented by a major tick.

> The `majorTick` option is supported when [views.type](#configuration-views.type) is set to "day" or "week".

#### Example - set the major tick

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          majorTick: 120 // a major tick represents 120 minutes (2 hours)
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.majorTimeHeaderTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) used to render the major ticks.

By default the scheduler renders the time using the current culture time format.

The fields which can be used in the template are:

* date - represents the major tick date.

> The `majorTimeHeaderTemplate` option is supported when [views.type](#configuration-views.type) is set to "day" or "week".

#### Example - set the major time header template

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          majorTimeHeaderTemplate: kendo.template("<strong>#=kendo.toString(date, 'h')#</strong><sup>00</sup>")
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.minorTickCount `Number` *(default:2)*

The number of time slots to display per major tick.

> The `minorTickCount` option is supported when [views.type](#configuration-views.type) is set to "day" or "week".

#### Example - set the number of time slots

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          minorTickCount: 1 // display one time slot per major tick
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.minorTimeHeaderTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) used to render the minor ticks.

By default the scheduler renders a `"&nbsp;"`.

The fields which can be used in the template are:

* date - represents the major tick date.

> The `minorTimeHeaderTemplate` option is supported when [views.type](#configuration-views.type) is set to "day" or "week".

#### Example - set the minor time header template
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          minorTimeHeaderTemplate: kendo.template("<strong>#=kendo.toString(date, 't')#</strong>")
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.selected `Boolean` *(default: false)*

If set to `true` the view will be initially selected by the scheduler widget.

> If more than one view is selected then last of them will prevail.

#### Example - select a view

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        { type: "day" },
        { type: "month", selected: true }
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.selectedDateFormat `String`

The format used to display the selected date. Uses [kendo.format](/api/framework/kendo#methods-format).

Contains two placeholders - "{0}" and "{1}" which represent the start and end date displayed by the view.

#### Example - set the selectedDateFormat
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          selectedDateFormat: "{0:dd-MM-yyyy}"
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.startTime `Date`

The start time of the view. The scheduler will display events starting after the `startTime`.

#### Example - set the start time

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          startTime: new Date("2013/6/6 08:00"),
          endTime: new Date("2013/6/6 18:00")
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.title `String`

The user-friendly title of the view displayed by the scheduler.

#### Example - set the view title
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        {
          type: "day",
          title: "Today",
        },
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### views.type `String`

The type of the view. The built-in views are: "day", "week", "month" and "agenda".

#### Example - set the view type

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [
        { type: "day" }
      ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

### width `Number|String`

The width of the widget. Numeric values are treated as pixels.

#### Example - set the width of the scheduler
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      width: 500,
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    </script>

## Fields

### dataSource `kendo.data.SchedulerDataSource`

The [data source](/api/framework/schedulerdatasource) of the widget. Configured via the [dataSource](#configuration-dataSource) option.

> Changes of the data source will be reflected in the widget.

> Assigning a new data source would have no effect. Use the [setDataSource](#methods-setDataSource) method instead.

#### Example - add a data item to the data source
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6")
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.dataSource.add( {
      start: new Date("2013/6/6 08:00 AM"),
      end: new Date("2013/6/6 09:00 AM"),
      title: "Interview"
    });
    </script>

#### Example - update a data item in the data source
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    var event = scheduler.dataSource.at(0);
    event.set("end", new Date("2013/6/6 10:00 AM"));
    </script>

#### Example - remove a data item from the data source
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    var event = scheduler.dataSource.at(0);
    scheduler.dataSource.remove(event);
    </script>

## Methods

### addEvent

Adds a new scheduler event and opens the edit form.

#### Parameters

##### data `Object`

The object containing the scheduler event fields.

#### Example - add a new event
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6")
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.addEvent({ title: "(No title)" });
    </script>

### cancelEvent

Cancels the scheduler event editing. Closes the edit form.

#### Example - cancel editing
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6")
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.addEvent({ title: "(No title)" });
    scheduler.cancelEvent();
    </script>

### date

Gets or sets the current scheduler date.

#### Parameters

##### value `Date` *(optional)*

The new date to set.

#### Returns

`Date` the current date.

#### Example - set the current date

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.date(new Date("2013/6/6"));
    </script>

### destroy

Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.

> This method does not remove the widget element from DOM.

#### Example

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.destroy();
    </script>

### editEvent

Opens the specified scheduler event in the edit form.

#### Parameters

##### event `String|kendo.data.SchedulerEvent`

The event which should be put in edit mode. Also accepts a string which is the `uid` of the event which should be edited.

#### Example - edit an event
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    var event = scheduler.dataSource.at(0);
    scheduler.editEvent(event);
    </script>

### removeEvent

Removes the specified scheduler event.

#### Parameters

##### event `String|kendo.data.SchedulerEvent`

The event which should be removed. Also accepts a string which is the `uid` of the event which should be removed.

#### Example - remove an event
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    var event = scheduler.dataSource.at(0);
    scheduler.removeEvent(event);
    </script>

### saveEvent

Saves the scheduler event which is open in the edit form and closes it.

#### Example - save an new event
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6")
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.addEvent({ title: "(No title)" });
    scheduler.saveEvent();
    </script>

### setDataSource

Sets the data source of the widget.

#### Parameters

##### dataSource `kendo.data.SchedulerDataSource`

The data source to which the widget should be bound.

#### Example - set the data source
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6")
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    var dataSource = new kendo.data.SchedulerDataSource({
      data: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    scheduler.setDataSource(dataSource);
    </script>

### view

Gets or sets the current scheduler view.

#### Parameters

##### type `String` *(optional)*

The view type to select.

#### Returns

`kendo.ui.SchedulerView` the current scheduler view.

#### Example - set the current view

    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.view("month");
    </script>

## Events

### add

Fired when the a new event is about to be added.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.event `Object`

The event data from which the SchedulerEvent instance will be created and added to the DataSource.

##### e.preventDefault `Function`

If invoked prevents the add action.

##### e.sender `kendo.ui.Scheduler`

The widget instance which fired the event.

#### Example - subscribe to the "add" event during initialization
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      add: function(e) {
        console.log("Add", e.start);
      }
    });
    </script>

#### Example - subscribe to the "add" event after initialization

    <div id="scheduler"></div>
    <script>
    function scheduler_add(e) {
      console.log("Add", e.start);
    }
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.bind("add", scheduler_add);
    </script>

### cancel

Fired when the user cancels editing by clicking the "cancel" button.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.container `jQuery`

The jQuery object representing the container element. That element contains the editing UI.

##### e.event `kendo.data.SchedulerEvent`

The event which is no longer in edit mode.

##### e.preventDefault `Function`

If invoked prevents the cancel action. The scheduler event remains in edit mode.

##### e.sender `kendo.ui.Scheduler`

The widget instance which fired the event.

#### Example - subscribe to the "cancel" event during initialization
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      cancel: function(e) {
        console.log("Cancelling", e.event.title);
      }
    });
    </script>

#### Example - subscribe to the "cancel" event after initialization

    <div id="scheduler"></div>
    <script>
    function scheduler_cancel(e) {
      console.log("Cancelling", e.event.title);
    }
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.bind("cancel", scheduler_cancel);
    </script>

### dataBinding

Fired before the widget binds to its data source.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.sender `kendo.ui.Scheduler`

The widget instance which fired the event.

#### Example - subscribe to the "dataBinding" event during initialization
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      dataBinding: function(e) {
        console.log("dataBinding"));
      }
    });
    </script>

#### Example - subscribe to the "dataBinding" event after initialization

    <div id="scheduler"></div>
    <script>
    function scheduler_dataBinding(e) {
        console.log("dataBinding"));
    }
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.bind("dataBinding", scheduler_dataBinding);
    </script>

### dataBound

Fired when the widget is bound to data from its data source.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.sender `kendo.ui.Scheduler`

The widget instance which fired the event.

#### Example - subscribe to the "dataBound" event during initialization
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      dataBound: function(e) {
        console.log("dataBound"));
      }
    });
    </script>

#### Example - subscribe to the "dataBound" event after initialization

    <div id="scheduler"></div>
    <script>
    function scheduler_dataBound(e) {
        console.log("dataBound"));
    }
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.bind("dataBound", scheduler_dataBound);
    </script>

### edit

Fired when the user opens a scheduler event in edit mode by or creates a new event.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.container `jQuery`

The jQuery object representing the container element. That element contains the editing UI.

##### e.event `kendo.data.SchedulerEvent`

The event which is being edited.

##### e.preventDefault `Function`

If invoked prevents the edit action.

##### e.sender `kendo.ui.Scheduler`

The widget instance which fired the event.

#### Example - subscribe to the "edit" event during initialization
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      edit: function(e) {
        console.log("Editing", e.event.title);
      }
    });
    </script>

#### Example - subscribe to the "edit" event after initialization

    <div id="scheduler"></div>
    <script>
    function scheduler_edit(e) {
      console.log("Editing", e.event.title);
    }
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.bind("edit", scheduler_edit);
    </script>

### moveStart

Fired when the user starts to drag an event.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.event `kendo.data.SchedulerEvent`

The event which is being moved.

##### e.preventDefault `Function`

If invoked prevents the move action.

##### e.sender `kendo.ui.Scheduler`

The widget instance which fired the event.

#### Example - subscribe to the "moveStart" event during initialization
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      moveStart: function(e) {
        console.log("Move Start", e.event.title);
      }
    });
    </script>

#### Example - subscribe to the "moveStart" event after initialization

    <div id="scheduler"></div>
    <script>
    function scheduler_moveStart(e) {
      console.log("Move Start", e.event.title);
    }
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.bind("moveStart", scheduler_moveStart);
    </script>

### move

Fired when the user is moving an event.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.event `kendo.data.SchedulerEvent`

The event which is being moved.

##### e.slot `Object`

The slot over which the event is currently positioned.

###### e.slot.element `jQuery`

The slot's element.

###### e.slot.start `Date`

The slot's start date.

###### e.slot.end `Date`

The slot's end date.

##### e.preventDefault `Function`

If invoked prevents the move action.

##### e.sender `kendo.ui.Scheduler`

The widget instance which fired the event.

#### Example - subscribe to the "move" event during initialization
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      move: function(e) {
        console.log("Move", e.slot.start);
      }
    });
    </script>

#### Example - subscribe to the "move" event after initialization

    <div id="scheduler"></div>
    <script>
    function scheduler_move(e) {
      console.log("Move", e.slot.start);
    }
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.bind("move", scheduler_move);
    </script>

### moveEnd

Fired when the user stops moving an event.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.event `kendo.data.SchedulerEvent`

The event which is being moved.

##### e.slot `Object`

The slot over which the event is currently positioned.

###### e.slot.element `jQuery`

The slot's element.

###### e.slot.start `Date`

The slot's start date.

###### e.slot.end `Date`

The slot's end date.

##### e.preventDefault `Function`

If invoked prevents the move action.

##### e.resources `Object`

The resources for the slot if resource grouping is enabled.

##### e.sender `kendo.ui.Scheduler`

The widget instance which fired the event.

#### Example - subscribe to the "moveEnd" event during initialization
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      moveEnd: function(e) {
        console.log("MoveEnd", e.slot.start);
      }
    });
    </script>

#### Example - subscribe to the "moveEnd" event after initialization

    <div id="scheduler"></div>
    <script>
    function scheduler_moveEnd(e) {
      console.log("MoveEnd", e.slot.start);
    }
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.bind("moveEnd", scheduler_moveEnd);
    </script>

### navigate

Fired when the user changes selected date, view or of the scheduler

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.action `String`

Name of the action. Possible values are:

* changeView - navigate to diffrent view
* next - navigate to next time period
* previous - navigate to previous time period
* today - select today's date
* changeDate - a date is selected via the Calendar

##### e.date `Date`

Selected date

##### e.view `String`

Name of the view

##### e.preventDefault `Function`

If invoked prevents the action.

##### e.sender `kendo.ui.Scheduler`

The widget instance which fired the event.

#### Example - subscribe to the "navigate" event during initialization
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      navigate: function(e) {
        console.log("navigate", e.date);
      }
    });
    </script>

#### Example - subscribe to the "navigate" event after initialization

    <div id="scheduler"></div>
    <script>
    function scheduler_navigate(e) {
      console.log("navigate", e.date);
    }
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.bind("navigate", scheduler_navigate);
    </script>

### remove

Fired when the user clicks the "destroy" button.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.event `kendo.data.SchedulerEvent`

The event which is being removed.

##### e.preventDefault `Function`

If invoked prevents the remove action.

##### e.sender `kendo.ui.Scheduler`

The widget instance which fired the event.

#### Example - subscribe to the "remove" event during initialization
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      remove: function(e) {
        console.log("Removing", e.event.title);
      }
    });
    </script>

#### Example - subscribe to the "remove" event after initialization

    <div id="scheduler"></div>
    <script>
    function scheduler_remove(e) {
      console.log("Removing", e.event.title);
    }
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.bind("remove", scheduler_remove);
    </script>

### resizeStart

Fired when the user starts to resize an event.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.event `kendo.data.SchedulerEvent`

The event which is being resized.

##### e.preventDefault `Function`

If invoked prevents the resize action.

##### e.sender `kendo.ui.Scheduler`

The widget instance which fired the event.

#### Example - subscribe to the "resizeStart" event during initialization
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      resizeStart: function(e) {
        console.log("Resize Start", e.event.title);
      }
    });
    </script>

#### Example - subscribe to the "resizeStart" event after initialization

    <div id="scheduler"></div>
    <script>
    function scheduler_resizeStart(e) {
      console.log("Resize Start", e.event.title);
    }
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.bind("resizeStart", scheduler_resizeStart);
    </script>

### resize

Fired when the user is resizing an event.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.event `kendo.data.SchedulerEvent`

The event which is being resized.

##### e.slot `Object`

The slot over which the event is resized to.

###### e.slot.element `jQuery`

The slot's element.

###### e.slot.start `Date`

The slot's start date.

###### e.slot.end `Date`

The slot's end date.

##### e.preventDefault `Function`

If invoked prevents the resize action.

##### e.sender `kendo.ui.Scheduler`

The widget instance which fired the event.

#### Example - subscribe to the "resize" event during initialization
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      resize: function(e) {
        console.log("Resize", e.slot.start);
      }
    });
    </script>

#### Example - subscribe to the "resize" event after initialization

    <div id="scheduler"></div>
    <script>
    function scheduler_resize(e) {
      console.log("Resize", e.slot.start);
    }
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.bind("resize", scheduler_resize);
    </script>

### resizeEnd

Fired when the user releases the mouse after resizing an event.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.event `kendo.data.SchedulerEvent`

The event which is being resized.

##### e.slot `Object`

The slot over which the event is resized to.

###### e.slot.element `jQuery`

The slot's element.

###### e.slot.start `Date`

The slot's start date.

###### e.slot.end `Date`

The slot's end date.

##### e.preventDefault `Function`

If invoked prevents the resize action.

##### e.sender `kendo.ui.Scheduler`

The widget instance which fired the event.

#### Example - subscribe to the "resizeEnd" event during initialization
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      resizeEnd: function(e) {
        console.log("Resize End", e.slot.start);
      }
    });
    </script>

#### Example - subscribe to the "resizeEnd" event after initialization

    <div id="scheduler"></div>
    <script>
    function scheduler_resizeEnd(e) {
      console.log("Resize End", e.slot.start);
    }
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.bind("resizeEnd", scheduler_resizeEnd);
    </script>

### save

Fired when the user saves a scheduler event by clicking the "save" button.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.container `jQuery`

The jQuery object representing the container element. That element contains the editing UI.

##### e.event `kendo.data.SchedulerEvent`

The event which is saved.

##### e.preventDefault `Function`

If invoked prevents the save action.

##### e.sender `kendo.ui.Scheduler`

The widget instance which fired the event.

#### Example - subscribe to the "save" event during initialization
    <div id="scheduler"></div>
    <script>
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ],
      save: function(e) {
        console.log("Saving", e.event.title);
      }
    });
    </script>

#### Example - subscribe to the "save" event after initialization

    <div id="scheduler"></div>
    <script>
    function scheduler_save(e) {
      console.log("Saving", e.event.title);
    }
    $("#scheduler").kendoScheduler({
      date: new Date("2013/6/6"),
      views: [ "day", "month" ],
      dataSource: [
        {
          id: 1,
          start: new Date("2013/6/6 08:00 AM"),
          end: new Date("2013/6/6 09:00 AM"),
          title: "Interview"
        }
      ]
    });
    var scheduler = $("#scheduler").data("kendoScheduler");
    scheduler.bind("save", scheduler_save);
    </script>

