---
title: calendar
slug: jsp-calendar
tags: api, java
publish: true
---

# \<kendo:calendar\>
A JSP wrapper for Kendo UI [Calendar](/api/web/calendar).

## Configuration Attributes

### culture `java.lang.String`

Specifies the culture info used by the widget.

#### Example
    <kendo:calendar culture="culture">
    </kendo:calendar>

### dates `java.lang.Object`

Specifies a list of dates, which will be passed to the month template.

#### Example
    <kendo:calendar dates="dates">
    </kendo:calendar>

### depth `java.lang.String`

Specifies the navigation depth. The following
settings are available for the depth value:

#### Example
    <kendo:calendar depth="depth">
    </kendo:calendar>

### footer `java.lang.String`

The template which renders the footer. If false, the footer will not be rendered.

#### Example
    <kendo:calendar footer="footer">
    </kendo:calendar>

### format `java.lang.String`

Specifies the format, which is used to parse value set with value() method.

#### Example
    <kendo:calendar format="format">
    </kendo:calendar>

### max `java.util.Date`

Specifies the maximum date, which the calendar can show.

#### Example
    <kendo:calendar max="max">
    </kendo:calendar>

### min `java.util.Date`

Specifies the minimum date, which the calendar can show.

#### Example
    <kendo:calendar min="min">
    </kendo:calendar>

### start `java.lang.String`

Specifies the start view.
The following settings are available for the start value:

#### Example
    <kendo:calendar start="start">
    </kendo:calendar>

### value `java.util.Date`

Specifies the selected date.

#### Example
    <kendo:calendar value="value">
    </kendo:calendar>


##  Configuration JSP Tags

### kendo:calendar-month

Templates for the cells rendered in "month" view.

More documentation is available at [kendo:calendar-month](calendar/month).

#### Example

    <kendo:calendar>
        <kendo:calendar-month></kendo:calendar-month>
    </kendo:calendar>


## Event Attributes

### change `String`

Fires when the selected date is changed.


For additional information check the [change](/api/web/calendar#events-change) event documentation.

#### Example
    <kendo:calendar change="handle_change">
    </kendo:calendar>
    <script>
        function handle_change(e) {
            // Code to handle the change event.
        }
    </script>

### navigate `String`

Fires when calendar navigates.


For additional information check the [navigate](/api/web/calendar#events-navigate) event documentation.

#### Example
    <kendo:calendar navigate="handle_navigate">
    </kendo:calendar>
    <script>
        function handle_navigate(e) {
            // Code to handle the navigate event.
        }
    </script>

## Event Tags

### kendo:calendar-change

Fires when the selected date is changed.


For additional information check the [change](/api/web/calendar#events-change) event documentation.

#### Example
    <kendo:calendar>
        <kendo:calendar-change>
            <script>
                function(e) {
                    // Code to handle the change event.
                }
            </script>
        </kendo:calendar-change>
    </kendo:calendar>

### kendo:calendar-navigate

Fires when calendar navigates.


For additional information check the [navigate](/api/web/calendar#events-navigate) event documentation.

#### Example
    <kendo:calendar>
        <kendo:calendar-navigate>
            <script>
                function(e) {
                    // Code to handle the navigate event.
                }
            </script>
        </kendo:calendar-navigate>
    </kendo:calendar>

