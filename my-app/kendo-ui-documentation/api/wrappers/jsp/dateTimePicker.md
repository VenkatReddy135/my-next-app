---
title: dateTimePicker
slug: jsp-dateTimePicker
tags: api, java
publish: true
---

# \<kendo:dateTimePicker\>
A JSP wrapper for Kendo UI [DateTimePicker](/api/web/datetimepicker).

## Configuration Attributes

### ARIATemplate `java.lang.String`

Specifies a template used to populate value of the aria-label attribute.

#### Example
    <kendo:dateTimePicker ARIATemplate="ARIATemplate">
    </kendo:dateTimePicker>

### culture `java.lang.String`

Specifies the culture info used by the widget.

#### Example
    <kendo:dateTimePicker culture="culture">
    </kendo:dateTimePicker>

### dates `java.lang.Object`

Specifies a list of dates, which will be passed to the month template of the DateView. All dates, which match the date portion of the selected date will be used to re-bind the TimeView.

#### Example
    <kendo:dateTimePicker dates="dates">
    </kendo:dateTimePicker>

### depth `java.lang.String`

Specifies the navigation depth of the calendar. The following
settings are available for the depth value:

#### Example
    <kendo:dateTimePicker depth="depth">
    </kendo:dateTimePicker>

### footer `java.lang.String`

The template which renders the footer of the calendar. If false, the footer will not be rendered.

#### Example
    <kendo:dateTimePicker footer="footer">
    </kendo:dateTimePicker>

### format `java.lang.String`

Specifies the format, which is used to format the value of the DateTimePicker displayed in the input. The format also will be used to parse the input.

#### Example
    <kendo:dateTimePicker format="format">
    </kendo:dateTimePicker>

### interval `float`

Specifies the interval, between values in the popup list, in minutes.

#### Example
    <kendo:dateTimePicker interval="interval">
    </kendo:dateTimePicker>

### max `java.util.Date`

Specifies the maximum date, which the calendar can show.

#### Example
    <kendo:dateTimePicker max="max">
    </kendo:dateTimePicker>

### min `java.util.Date`

Specifies the minimum date that the calendar can show.

#### Example
    <kendo:dateTimePicker min="min">
    </kendo:dateTimePicker>

### parseFormats `java.lang.Object`

Specifies the formats, which are used to parse the value set with value() method or by direct input. If not set the value of the options.format and options.timeFormat will be used. Note that value of the format option is always used.

#### Example
    <kendo:dateTimePicker parseFormats="parseFormats">
    </kendo:dateTimePicker>

### start `java.lang.String`

Specifies the start view of the calendar.
 The following settings are available for the start value:

#### Example
    <kendo:dateTimePicker start="start">
    </kendo:dateTimePicker>

### timeFormat `java.lang.String`

Specifies the format, which is used to format the values in the time drop-down list.

#### Example
    <kendo:dateTimePicker timeFormat="timeFormat">
    </kendo:dateTimePicker>

### value `java.util.Date`

Specifies the selected value.

#### Example
    <kendo:dateTimePicker value="value">
    </kendo:dateTimePicker>


##  Configuration JSP Tags

### kendo:dateTimePicker-animation

Configures the opening and closing animations of the popups. Setting the animation option to false will disable the opening and closing animations. As a result the popup will open and close instantly.

More documentation is available at [kendo:dateTimePicker-animation](datetimepicker/animation).

#### Example

    <kendo:dateTimePicker>
        <kendo:dateTimePicker-animation></kendo:dateTimePicker-animation>
    </kendo:dateTimePicker>

### kendo:dateTimePicker-month

Templates for the cells rendered in the calendar "month" view.

More documentation is available at [kendo:dateTimePicker-month](datetimepicker/month).

#### Example

    <kendo:dateTimePicker>
        <kendo:dateTimePicker-month></kendo:dateTimePicker-month>
    </kendo:dateTimePicker>


## Event Attributes

### change `String`

Triggered when the underlying value of a DateTimePicker is changed.


For additional information check the [change](/api/web/datetimepicker#events-change) event documentation.

#### Example
    <kendo:dateTimePicker change="handle_change">
    </kendo:dateTimePicker>
    <script>
        function handle_change(e) {
            // Code to handle the change event.
        }
    </script>

### close `String`

Fires when the calendar or the time drop-down list is closed


For additional information check the [close](/api/web/datetimepicker#events-close) event documentation.

#### Example
    <kendo:dateTimePicker close="handle_close">
    </kendo:dateTimePicker>
    <script>
        function handle_close(e) {
            // Code to handle the close event.
        }
    </script>

### open `String`

Fires when the calendar or the time drop-down list is opened


For additional information check the [open](/api/web/datetimepicker#events-open) event documentation.

#### Example
    <kendo:dateTimePicker open="handle_open">
    </kendo:dateTimePicker>
    <script>
        function handle_open(e) {
            // Code to handle the open event.
        }
    </script>

## Event Tags

### kendo:dateTimePicker-change

Triggered when the underlying value of a DateTimePicker is changed.


For additional information check the [change](/api/web/datetimepicker#events-change) event documentation.

#### Example
    <kendo:dateTimePicker>
        <kendo:dateTimePicker-change>
            <script>
                function(e) {
                    // Code to handle the change event.
                }
            </script>
        </kendo:dateTimePicker-change>
    </kendo:dateTimePicker>

### kendo:dateTimePicker-close

Fires when the calendar or the time drop-down list is closed


For additional information check the [close](/api/web/datetimepicker#events-close) event documentation.

#### Example
    <kendo:dateTimePicker>
        <kendo:dateTimePicker-close>
            <script>
                function(e) {
                    // Code to handle the close event.
                }
            </script>
        </kendo:dateTimePicker-close>
    </kendo:dateTimePicker>

### kendo:dateTimePicker-open

Fires when the calendar or the time drop-down list is opened


For additional information check the [open](/api/web/datetimepicker#events-open) event documentation.

#### Example
    <kendo:dateTimePicker>
        <kendo:dateTimePicker-open>
            <script>
                function(e) {
                    // Code to handle the open event.
                }
            </script>
        </kendo:dateTimePicker-open>
    </kendo:dateTimePicker>

