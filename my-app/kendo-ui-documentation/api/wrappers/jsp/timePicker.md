---
title: timePicker
slug: jsp-timePicker
tags: api, java
publish: true
---

# \<kendo:timePicker\>
A JSP wrapper for Kendo UI [TimePicker](/api/web/timepicker).

## Configuration Attributes

### culture `java.lang.String`

Specifies the culture info used by the widget.

#### Example
    <kendo:timePicker culture="culture">
    </kendo:timePicker>

### dates `java.lang.Object`

Specifies a list of dates, which are shown in the time drop-down list. If not set, the TimePicker will auto-generate the available times.

#### Example
    <kendo:timePicker dates="dates">
    </kendo:timePicker>

### format `java.lang.String`

Specifies the format, which is used to format the value of the TimePicker displayed in the input. The format also will be used to parse the input.

#### Example
    <kendo:timePicker format="format">
    </kendo:timePicker>

### interval `float`

Specifies the interval, between values in the popup list, in minutes.

#### Example
    <kendo:timePicker interval="interval">
    </kendo:timePicker>

### max `java.util.Date`

Specifies the end value in the popup list.

#### Example
    <kendo:timePicker max="max">
    </kendo:timePicker>

### min `java.util.Date`

Specifies the start value in the popup list.

#### Example
    <kendo:timePicker min="min">
    </kendo:timePicker>

### parseFormats `java.lang.Object`

Specifies the formats, which are used to parse the value set with the value method or by direct input. If not set the value of the options.format will be used. Note that value of the format option is always used.

#### Example
    <kendo:timePicker parseFormats="parseFormats">
    </kendo:timePicker>

### value `java.util.Date`

Specifies the selected time.

#### Example
    <kendo:timePicker value="value">
    </kendo:timePicker>


##  Configuration JSP Tags

### kendo:timePicker-animation

Configures the opening and closing animations of the popup. Setting the animation option to false will disable the opening and closing animations. As a result the popup will open and close instantly.

More documentation is available at [kendo:timePicker-animation](timepicker/animation).

#### Example

    <kendo:timePicker>
        <kendo:timePicker-animation></kendo:timePicker-animation>
    </kendo:timePicker>


## Event Attributes

### change `String`

Fires when the selected date is changed


For additional information check the [change](/api/web/timepicker#events-change) event documentation.

#### Example
    <kendo:timePicker change="handle_change">
    </kendo:timePicker>
    <script>
        function handle_change(e) {
            // Code to handle the change event.
        }
    </script>

### close `String`

Fires when the time drop-down list is closed


For additional information check the [close](/api/web/timepicker#events-close) event documentation.

#### Example
    <kendo:timePicker close="handle_close">
    </kendo:timePicker>
    <script>
        function handle_close(e) {
            // Code to handle the close event.
        }
    </script>

### open `String`

Fires when the time drop-down list is opened


For additional information check the [open](/api/web/timepicker#events-open) event documentation.

#### Example
    <kendo:timePicker open="handle_open">
    </kendo:timePicker>
    <script>
        function handle_open(e) {
            // Code to handle the open event.
        }
    </script>

## Event Tags

### kendo:timePicker-change

Fires when the selected date is changed


For additional information check the [change](/api/web/timepicker#events-change) event documentation.

#### Example
    <kendo:timePicker>
        <kendo:timePicker-change>
            <script>
                function(e) {
                    // Code to handle the change event.
                }
            </script>
        </kendo:timePicker-change>
    </kendo:timePicker>

### kendo:timePicker-close

Fires when the time drop-down list is closed


For additional information check the [close](/api/web/timepicker#events-close) event documentation.

#### Example
    <kendo:timePicker>
        <kendo:timePicker-close>
            <script>
                function(e) {
                    // Code to handle the close event.
                }
            </script>
        </kendo:timePicker-close>
    </kendo:timePicker>

### kendo:timePicker-open

Fires when the time drop-down list is opened


For additional information check the [open](/api/web/timepicker#events-open) event documentation.

#### Example
    <kendo:timePicker>
        <kendo:timePicker-open>
            <script>
                function(e) {
                    // Code to handle the open event.
                }
            </script>
        </kendo:timePicker-open>
    </kendo:timePicker>

