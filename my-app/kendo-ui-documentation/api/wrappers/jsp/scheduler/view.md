---
title: scheduler-view
slug: jsp-scheduler-view
tags: api, java
publish: true
---

# \<kendo:scheduler-view\>

The views displayed by the scheduler and their configuration. The array items can be either objects specifying the view configuration or strings representing the view types (assuming default configuration).
By default the Kendo UI Scheduler widget displays "day" and "week" view.

#### Example
    <kendo:scheduler-views>
        <kendo:scheduler-view></kendo:scheduler-view>
    </kendo:scheduler-views>

## Configuration Attributes

### allDayEventTemplate `java.lang.String`

The template used to render the "all day" scheduler events.The fields which can be used in the template are:

#### Example
    <kendo:scheduler-view allDayEventTemplate="allDayEventTemplate">
    </kendo:scheduler-view>

### allDaySlot `boolean`

If set to true the scheduler will display a slot for "all day" events.

#### Example
    <kendo:scheduler-view allDaySlot="allDaySlot">
    </kendo:scheduler-view>

### dateHeaderTemplate `java.lang.String`

The template used to render the date header cells.By default the scheduler renders the date using the current culture date format.The fields which can be used in the template are:

#### Example
    <kendo:scheduler-view dateHeaderTemplate="dateHeaderTemplate">
    </kendo:scheduler-view>

### dayTemplate `java.lang.String`

The template used to render the day slots in month view.The fields which can be used in the template are:

#### Example
    <kendo:scheduler-view dayTemplate="dayTemplate">
    </kendo:scheduler-view>

### editable `boolean`

If set to true the user would be able to create new scheduler events and modify or delete existing ones.Overrides the editable option of the scheduler. Further configuration is available via [kendo:scheduler-view-editable](#kendo-scheduler-view-editable). 

#### Example
    <kendo:scheduler-view editable="editable">
    </kendo:scheduler-view>

### endTime `java.util.Date`

The end time of the view. The scheduler will display events ending before the endTime.

#### Example
    <kendo:scheduler-view endTime="endTime">
    </kendo:scheduler-view>

### eventHeight `float`

The height of the scheduler event rendered in month view.

#### Example
    <kendo:scheduler-view eventHeight="eventHeight">
    </kendo:scheduler-view>

### eventTemplate `java.lang.String`

The template used by the view to render the scheduler events.The fields which can be used in the template are:

#### Example
    <kendo:scheduler-view eventTemplate="eventTemplate">
    </kendo:scheduler-view>

### eventTimeTemplate `java.lang.String`

The template used by the agenda view to render the time of the scheduler events.The fields which can be used in the template are:

#### Example
    <kendo:scheduler-view eventTimeTemplate="eventTimeTemplate">
    </kendo:scheduler-view>

### majorTick `float`

The number of minutes represented by a major tick.

#### Example
    <kendo:scheduler-view majorTick="majorTick">
    </kendo:scheduler-view>

### majorTimeHeaderTemplate `java.lang.String`

The template used to render the major ticks.By default the scheduler renders the time using the current culture time format.The fields which can be used in the template are:

#### Example
    <kendo:scheduler-view majorTimeHeaderTemplate="majorTimeHeaderTemplate">
    </kendo:scheduler-view>

### minorTickCount `float`

The number of time slots to display per major tick.

#### Example
    <kendo:scheduler-view minorTickCount="minorTickCount">
    </kendo:scheduler-view>

### minorTimeHeaderTemplate `java.lang.String`

The template used to render the minor ticks.By default the scheduler renders a "&nbsp;".The fields which can be used in the template are:

#### Example
    <kendo:scheduler-view minorTimeHeaderTemplate="minorTimeHeaderTemplate">
    </kendo:scheduler-view>

### selected `boolean`

If set to true the view will be initially selected by the scheduler widget.

#### Example
    <kendo:scheduler-view selected="selected">
    </kendo:scheduler-view>

### selectedDateFormat `java.lang.String`

The format used to display the selected date. Uses kendo.format.Contains two placeholders - "{0}" and "{1}" which represent the start and end date displayed by the view.

#### Example
    <kendo:scheduler-view selectedDateFormat="selectedDateFormat">
    </kendo:scheduler-view>

### startTime `java.util.Date`

The start time of the view. The scheduler will display events starting after the startTime.

#### Example
    <kendo:scheduler-view startTime="startTime">
    </kendo:scheduler-view>

### title `java.lang.String`

The user-friendly title of the view displayed by the scheduler.

#### Example
    <kendo:scheduler-view title="title">
    </kendo:scheduler-view>

### type `java.lang.String`

The type of the view. The built-in views are: "day", "week", "month" and "agenda".

#### Example
    <kendo:scheduler-view type="type">
    </kendo:scheduler-view>


##  Configuration JSP Tags

### kendo:scheduler-view-editable

If set to true the user would be able to create new scheduler events and modify or delete existing ones.Overrides the editable option of the scheduler.

More documentation is available at [kendo:scheduler-view-editable](scheduler/view-editable).

#### Example

    <kendo:scheduler-view>
        <kendo:scheduler-view-editable></kendo:scheduler-view-editable>
    </kendo:scheduler-view>

### kendo:scheduler-view-group

The configuration of the view resource(s) grouping.

More documentation is available at [kendo:scheduler-view-group](scheduler/view-group).

#### Example

    <kendo:scheduler-view>
        <kendo:scheduler-view-group></kendo:scheduler-view-group>
    </kendo:scheduler-view>


## Event Attributes

### allDayEventTemplate `String`

The template used to render the "all day" scheduler events.The fields which can be used in the template are:


#### Example
    <kendo:scheduler-view allDayEventTemplate="handle_allDayEventTemplate">
    </kendo:scheduler-view>
    <script>
        function handle_allDayEventTemplate(e) {
            // Code to handle the allDayEventTemplate event.
        }
    </script>

### dateHeaderTemplate `String`

The template used to render the date header cells.By default the scheduler renders the date using the current culture date format.The fields which can be used in the template are:


#### Example
    <kendo:scheduler-view dateHeaderTemplate="handle_dateHeaderTemplate">
    </kendo:scheduler-view>
    <script>
        function handle_dateHeaderTemplate(e) {
            // Code to handle the dateHeaderTemplate event.
        }
    </script>

### dayTemplate `String`

The template used to render the day slots in month view.The fields which can be used in the template are:


#### Example
    <kendo:scheduler-view dayTemplate="handle_dayTemplate">
    </kendo:scheduler-view>
    <script>
        function handle_dayTemplate(e) {
            // Code to handle the dayTemplate event.
        }
    </script>

### eventTemplate `String`

The template used by the view to render the scheduler events.The fields which can be used in the template are:


#### Example
    <kendo:scheduler-view eventTemplate="handle_eventTemplate">
    </kendo:scheduler-view>
    <script>
        function handle_eventTemplate(e) {
            // Code to handle the eventTemplate event.
        }
    </script>

### eventTimeTemplate `String`

The template used by the agenda view to render the time of the scheduler events.The fields which can be used in the template are:


#### Example
    <kendo:scheduler-view eventTimeTemplate="handle_eventTimeTemplate">
    </kendo:scheduler-view>
    <script>
        function handle_eventTimeTemplate(e) {
            // Code to handle the eventTimeTemplate event.
        }
    </script>

### majorTimeHeaderTemplate `String`

The template used to render the major ticks.By default the scheduler renders the time using the current culture time format.The fields which can be used in the template are:


#### Example
    <kendo:scheduler-view majorTimeHeaderTemplate="handle_majorTimeHeaderTemplate">
    </kendo:scheduler-view>
    <script>
        function handle_majorTimeHeaderTemplate(e) {
            // Code to handle the majorTimeHeaderTemplate event.
        }
    </script>

### minorTimeHeaderTemplate `String`

The template used to render the minor ticks.By default the scheduler renders a "&nbsp;".The fields which can be used in the template are:


#### Example
    <kendo:scheduler-view minorTimeHeaderTemplate="handle_minorTimeHeaderTemplate">
    </kendo:scheduler-view>
    <script>
        function handle_minorTimeHeaderTemplate(e) {
            // Code to handle the minorTimeHeaderTemplate event.
        }
    </script>

## Event Tags

### kendo:scheduler-view-allDayEventTemplate

The template used to render the "all day" scheduler events.The fields which can be used in the template are:


#### Example
    <kendo:scheduler-view>
        <kendo:scheduler-view-allDayEventTemplate>
            <script>
                function(e) {
                    // Code to handle the allDayEventTemplate event.
                }
            </script>
        </kendo:scheduler-view-allDayEventTemplate>
    </kendo:scheduler-view>

### kendo:scheduler-view-dateHeaderTemplate

The template used to render the date header cells.By default the scheduler renders the date using the current culture date format.The fields which can be used in the template are:


#### Example
    <kendo:scheduler-view>
        <kendo:scheduler-view-dateHeaderTemplate>
            <script>
                function(e) {
                    // Code to handle the dateHeaderTemplate event.
                }
            </script>
        </kendo:scheduler-view-dateHeaderTemplate>
    </kendo:scheduler-view>

### kendo:scheduler-view-dayTemplate

The template used to render the day slots in month view.The fields which can be used in the template are:


#### Example
    <kendo:scheduler-view>
        <kendo:scheduler-view-dayTemplate>
            <script>
                function(e) {
                    // Code to handle the dayTemplate event.
                }
            </script>
        </kendo:scheduler-view-dayTemplate>
    </kendo:scheduler-view>

### kendo:scheduler-view-eventTemplate

The template used by the view to render the scheduler events.The fields which can be used in the template are:


#### Example
    <kendo:scheduler-view>
        <kendo:scheduler-view-eventTemplate>
            <script>
                function(e) {
                    // Code to handle the eventTemplate event.
                }
            </script>
        </kendo:scheduler-view-eventTemplate>
    </kendo:scheduler-view>

### kendo:scheduler-view-eventTimeTemplate

The template used by the agenda view to render the time of the scheduler events.The fields which can be used in the template are:


#### Example
    <kendo:scheduler-view>
        <kendo:scheduler-view-eventTimeTemplate>
            <script>
                function(e) {
                    // Code to handle the eventTimeTemplate event.
                }
            </script>
        </kendo:scheduler-view-eventTimeTemplate>
    </kendo:scheduler-view>

### kendo:scheduler-view-majorTimeHeaderTemplate

The template used to render the major ticks.By default the scheduler renders the time using the current culture time format.The fields which can be used in the template are:


#### Example
    <kendo:scheduler-view>
        <kendo:scheduler-view-majorTimeHeaderTemplate>
            <script>
                function(e) {
                    // Code to handle the majorTimeHeaderTemplate event.
                }
            </script>
        </kendo:scheduler-view-majorTimeHeaderTemplate>
    </kendo:scheduler-view>

### kendo:scheduler-view-minorTimeHeaderTemplate

The template used to render the minor ticks.By default the scheduler renders a "&nbsp;".The fields which can be used in the template are:


#### Example
    <kendo:scheduler-view>
        <kendo:scheduler-view-minorTimeHeaderTemplate>
            <script>
                function(e) {
                    // Code to handle the minorTimeHeaderTemplate event.
                }
            </script>
        </kendo:scheduler-view-minorTimeHeaderTemplate>
    </kendo:scheduler-view>

