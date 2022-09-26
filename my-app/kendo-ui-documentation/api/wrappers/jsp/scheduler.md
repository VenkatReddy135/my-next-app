---
title: scheduler
slug: jsp-scheduler
tags: api, java
publish: true
---

# \<kendo:scheduler\>
A JSP wrapper for Kendo UI [Scheduler](/api/web/scheduler).

## Configuration Attributes

### allDayEventTemplate `java.lang.String`

The template used to render the "all day" scheduler events.The fields which can be used in the template are:

#### Example
    <kendo:scheduler allDayEventTemplate="allDayEventTemplate">
    </kendo:scheduler>

### allDaySlot `boolean`

If set to true the scheduler will display a slot for "all day" events.

#### Example
    <kendo:scheduler allDaySlot="allDaySlot">
    </kendo:scheduler>

### date `java.util.Date`

The current date of the scheduler. Used to determine the period which is displayed by the widget.

#### Example
    <kendo:scheduler date="date">
    </kendo:scheduler>

### dateHeaderTemplate `java.lang.String`

The template used to render the date header cells.By default the scheduler renders the date using the current culture date format.The fields which can be used in the template are:

#### Example
    <kendo:scheduler dateHeaderTemplate="dateHeaderTemplate">
    </kendo:scheduler>

### editable `boolean`

If set to true the user would be able to create new scheduler events and modify or delete existing ones. Further configuration is available via [kendo:scheduler-editable](#kendo-scheduler-editable). 

#### Example
    <kendo:scheduler editable="editable">
    </kendo:scheduler>

### endTime `java.util.Date`

The end time of the week and day views. The scheduler will display events ending before the endTime.

#### Example
    <kendo:scheduler endTime="endTime">
    </kendo:scheduler>

### eventTemplate `java.lang.String`

The template used to render the scheduler events.The fields which can be used in the template are:

#### Example
    <kendo:scheduler eventTemplate="eventTemplate">
    </kendo:scheduler>

### height `java.lang.Object`

The height of the widget. Numeric values are treated as pixels.

#### Example
    <kendo:scheduler height="height">
    </kendo:scheduler>

### majorTick `float`

The number of minutes represented by a major tick.

#### Example
    <kendo:scheduler majorTick="majorTick">
    </kendo:scheduler>

### majorTimeHeaderTemplate `java.lang.String`

The template used to render the major ticks.By default the scheduler renders the time using the current culture time format.The fields which can be used in the template are:

#### Example
    <kendo:scheduler majorTimeHeaderTemplate="majorTimeHeaderTemplate">
    </kendo:scheduler>

### minorTickCount `float`

The number of time slots to display per major tick.

#### Example
    <kendo:scheduler minorTickCount="minorTickCount">
    </kendo:scheduler>

### minorTimeHeaderTemplate `java.lang.String`

The template used to render the minor ticks.By default the scheduler renders a "&nbsp;".The fields which can be used in the template are:

#### Example
    <kendo:scheduler minorTimeHeaderTemplate="minorTimeHeaderTemplate">
    </kendo:scheduler>

### selectable `boolean`

If set to true the user would be able to select scheduler cells and events. By default selection is disabled.

#### Example
    <kendo:scheduler selectable="selectable">
    </kendo:scheduler>

### startTime `java.util.Date`

The start time of the week and day views. The scheduler will display events starting after the startTime.

#### Example
    <kendo:scheduler startTime="startTime">
    </kendo:scheduler>

### timezone `java.lang.String`

The timezone which the scheduler will use to display the scheduler appointment dates. By default the current system timezone is used. This is an acceptable default when the
scheduler widget is bound to local array of events. It is advisable to specify a timezone if the scheduler is bound to a remote service.
That way all users would see the same dates and times no matter their configured system timezone.The complete list of the supported timezones is available in the List of IANA time zones Wikipedia page.

#### Example
    <kendo:scheduler timezone="timezone">
    </kendo:scheduler>

### width `java.lang.Object`

The width of the widget. Numeric values are treated as pixels.

#### Example
    <kendo:scheduler width="width">
    </kendo:scheduler>


##  Configuration JSP Tags

### kendo:scheduler-editable

If set to true the user would be able to create new scheduler events and modify or delete existing ones.

More documentation is available at [kendo:scheduler-editable](scheduler/editable).

#### Example

    <kendo:scheduler>
        <kendo:scheduler-editable></kendo:scheduler-editable>
    </kendo:scheduler>

### kendo:scheduler-group

The configuration of the scheduler resource(s) grouping.

More documentation is available at [kendo:scheduler-group](scheduler/group).

#### Example

    <kendo:scheduler>
        <kendo:scheduler-group></kendo:scheduler-group>
    </kendo:scheduler>

### kendo:scheduler-messages

The configuration of the scheduler messages. Use this option to customize or localize the scheduler messages.

More documentation is available at [kendo:scheduler-messages](scheduler/messages).

#### Example

    <kendo:scheduler>
        <kendo:scheduler-messages></kendo:scheduler-messages>
    </kendo:scheduler>

### kendo:scheduler-resources

The configuration of the scheduler resource(s). A scheduler resource is optional metadata that can be associated
with a scheduler event.

More documentation is available at [kendo:scheduler-resources](scheduler/resources).

#### Example

    <kendo:scheduler>
        <kendo:scheduler-resources></kendo:scheduler-resources>
    </kendo:scheduler>

### kendo:scheduler-views

The views displayed by the scheduler and their configuration. The array items can be either objects specifying the view configuration or strings representing the view types (assuming default configuration).
By default the Kendo UI Scheduler widget displays "day" and "week" view.

More documentation is available at [kendo:scheduler-views](scheduler/views).

#### Example

    <kendo:scheduler>
        <kendo:scheduler-views></kendo:scheduler-views>
    </kendo:scheduler>


## Event Attributes

### add `String`

Fired when the a new event is about to be added.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [add](/api/web/scheduler#events-add) event documentation.

#### Example
    <kendo:scheduler add="handle_add">
    </kendo:scheduler>
    <script>
        function handle_add(e) {
            // Code to handle the add event.
        }
    </script>

### cancel `String`

Fired when the user cancels editing by clicking the "cancel" button.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [cancel](/api/web/scheduler#events-cancel) event documentation.

#### Example
    <kendo:scheduler cancel="handle_cancel">
    </kendo:scheduler>
    <script>
        function handle_cancel(e) {
            // Code to handle the cancel event.
        }
    </script>

### dataBinding `String`

Fired before the widget binds to its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBinding](/api/web/scheduler#events-dataBinding) event documentation.

#### Example
    <kendo:scheduler dataBinding="handle_dataBinding">
    </kendo:scheduler>
    <script>
        function handle_dataBinding(e) {
            // Code to handle the dataBinding event.
        }
    </script>

### dataBound `String`

Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBound](/api/web/scheduler#events-dataBound) event documentation.

#### Example
    <kendo:scheduler dataBound="handle_dataBound">
    </kendo:scheduler>
    <script>
        function handle_dataBound(e) {
            // Code to handle the dataBound event.
        }
    </script>

### edit `String`

Fired when the user opens a scheduler event in edit mode by or creates a new event.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [edit](/api/web/scheduler#events-edit) event documentation.

#### Example
    <kendo:scheduler edit="handle_edit">
    </kendo:scheduler>
    <script>
        function handle_edit(e) {
            // Code to handle the edit event.
        }
    </script>

### moveStart `String`

Fired when the user starts to drag an event.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [moveStart](/api/web/scheduler#events-moveStart) event documentation.

#### Example
    <kendo:scheduler moveStart="handle_moveStart">
    </kendo:scheduler>
    <script>
        function handle_moveStart(e) {
            // Code to handle the moveStart event.
        }
    </script>

### move `String`

Fired when the user is moving an event.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [move](/api/web/scheduler#events-move) event documentation.

#### Example
    <kendo:scheduler move="handle_move">
    </kendo:scheduler>
    <script>
        function handle_move(e) {
            // Code to handle the move event.
        }
    </script>

### moveEnd `String`

Fired when the user stops moving an event.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [moveEnd](/api/web/scheduler#events-moveEnd) event documentation.

#### Example
    <kendo:scheduler moveEnd="handle_moveEnd">
    </kendo:scheduler>
    <script>
        function handle_moveEnd(e) {
            // Code to handle the moveEnd event.
        }
    </script>

### navigate `String`

Fired when the user changes selected date, view or of the schedulerThe event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [navigate](/api/web/scheduler#events-navigate) event documentation.

#### Example
    <kendo:scheduler navigate="handle_navigate">
    </kendo:scheduler>
    <script>
        function handle_navigate(e) {
            // Code to handle the navigate event.
        }
    </script>

### remove `String`

Fired when the user clicks the "destroy" button.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [remove](/api/web/scheduler#events-remove) event documentation.

#### Example
    <kendo:scheduler remove="handle_remove">
    </kendo:scheduler>
    <script>
        function handle_remove(e) {
            // Code to handle the remove event.
        }
    </script>

### resizeStart `String`

Fired when the user starts to resize an event.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [resizeStart](/api/web/scheduler#events-resizeStart) event documentation.

#### Example
    <kendo:scheduler resizeStart="handle_resizeStart">
    </kendo:scheduler>
    <script>
        function handle_resizeStart(e) {
            // Code to handle the resizeStart event.
        }
    </script>

### resize `String`

Fired when the user is resizing an event.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [resize](/api/web/scheduler#events-resize) event documentation.

#### Example
    <kendo:scheduler resize="handle_resize">
    </kendo:scheduler>
    <script>
        function handle_resize(e) {
            // Code to handle the resize event.
        }
    </script>

### resizeEnd `String`

Fired when the user releases the mouse after resizing an event.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [resizeEnd](/api/web/scheduler#events-resizeEnd) event documentation.

#### Example
    <kendo:scheduler resizeEnd="handle_resizeEnd">
    </kendo:scheduler>
    <script>
        function handle_resizeEnd(e) {
            // Code to handle the resizeEnd event.
        }
    </script>

### save `String`

Fired when the user saves a scheduler event by clicking the "save" button.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [save](/api/web/scheduler#events-save) event documentation.

#### Example
    <kendo:scheduler save="handle_save">
    </kendo:scheduler>
    <script>
        function handle_save(e) {
            // Code to handle the save event.
        }
    </script>

## Event Tags

### kendo:scheduler-add

Fired when the a new event is about to be added.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [add](/api/web/scheduler#events-add) event documentation.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-add>
            <script>
                function(e) {
                    // Code to handle the add event.
                }
            </script>
        </kendo:scheduler-add>
    </kendo:scheduler>

### kendo:scheduler-cancel

Fired when the user cancels editing by clicking the "cancel" button.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [cancel](/api/web/scheduler#events-cancel) event documentation.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-cancel>
            <script>
                function(e) {
                    // Code to handle the cancel event.
                }
            </script>
        </kendo:scheduler-cancel>
    </kendo:scheduler>

### kendo:scheduler-dataBinding

Fired before the widget binds to its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBinding](/api/web/scheduler#events-dataBinding) event documentation.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-dataBinding>
            <script>
                function(e) {
                    // Code to handle the dataBinding event.
                }
            </script>
        </kendo:scheduler-dataBinding>
    </kendo:scheduler>

### kendo:scheduler-dataBound

Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [dataBound](/api/web/scheduler#events-dataBound) event documentation.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-dataBound>
            <script>
                function(e) {
                    // Code to handle the dataBound event.
                }
            </script>
        </kendo:scheduler-dataBound>
    </kendo:scheduler>

### kendo:scheduler-edit

Fired when the user opens a scheduler event in edit mode by or creates a new event.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [edit](/api/web/scheduler#events-edit) event documentation.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-edit>
            <script>
                function(e) {
                    // Code to handle the edit event.
                }
            </script>
        </kendo:scheduler-edit>
    </kendo:scheduler>

### kendo:scheduler-moveStart

Fired when the user starts to drag an event.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [moveStart](/api/web/scheduler#events-moveStart) event documentation.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-moveStart>
            <script>
                function(e) {
                    // Code to handle the moveStart event.
                }
            </script>
        </kendo:scheduler-moveStart>
    </kendo:scheduler>

### kendo:scheduler-move

Fired when the user is moving an event.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [move](/api/web/scheduler#events-move) event documentation.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-move>
            <script>
                function(e) {
                    // Code to handle the move event.
                }
            </script>
        </kendo:scheduler-move>
    </kendo:scheduler>

### kendo:scheduler-moveEnd

Fired when the user stops moving an event.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [moveEnd](/api/web/scheduler#events-moveEnd) event documentation.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-moveEnd>
            <script>
                function(e) {
                    // Code to handle the moveEnd event.
                }
            </script>
        </kendo:scheduler-moveEnd>
    </kendo:scheduler>

### kendo:scheduler-navigate

Fired when the user changes selected date, view or of the schedulerThe event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [navigate](/api/web/scheduler#events-navigate) event documentation.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-navigate>
            <script>
                function(e) {
                    // Code to handle the navigate event.
                }
            </script>
        </kendo:scheduler-navigate>
    </kendo:scheduler>

### kendo:scheduler-remove

Fired when the user clicks the "destroy" button.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [remove](/api/web/scheduler#events-remove) event documentation.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-remove>
            <script>
                function(e) {
                    // Code to handle the remove event.
                }
            </script>
        </kendo:scheduler-remove>
    </kendo:scheduler>

### kendo:scheduler-resizeStart

Fired when the user starts to resize an event.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [resizeStart](/api/web/scheduler#events-resizeStart) event documentation.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-resizeStart>
            <script>
                function(e) {
                    // Code to handle the resizeStart event.
                }
            </script>
        </kendo:scheduler-resizeStart>
    </kendo:scheduler>

### kendo:scheduler-resize

Fired when the user is resizing an event.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [resize](/api/web/scheduler#events-resize) event documentation.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-resize>
            <script>
                function(e) {
                    // Code to handle the resize event.
                }
            </script>
        </kendo:scheduler-resize>
    </kendo:scheduler>

### kendo:scheduler-resizeEnd

Fired when the user releases the mouse after resizing an event.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [resizeEnd](/api/web/scheduler#events-resizeEnd) event documentation.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-resizeEnd>
            <script>
                function(e) {
                    // Code to handle the resizeEnd event.
                }
            </script>
        </kendo:scheduler-resizeEnd>
    </kendo:scheduler>

### kendo:scheduler-save

Fired when the user saves a scheduler event by clicking the "save" button.The event handler function context (available via the this keyword) will be set to the widget instance.


For additional information check the [save](/api/web/scheduler#events-save) event documentation.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-save>
            <script>
                function(e) {
                    // Code to handle the save event.
                }
            </script>
        </kendo:scheduler-save>
    </kendo:scheduler>

