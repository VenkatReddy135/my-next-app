---
title: rangeSlider
slug: jsp-rangeSlider
tags: api, java
publish: true
---

# \<kendo:rangeSlider\>
A JSP wrapper for Kendo UI [RangeSlider](/api/web/rangeslider).

## Configuration Attributes

### largeStep `float`

The delta with which the value will change when the user presses the Page Up or Page Down key (the drag
handle must be focused). Note: The allied largeStep will also set large tick for every large step.

#### Example
    <kendo:rangeSlider largeStep="largeStep">
    </kendo:rangeSlider>

### max `float`

The maximum value of the RangeSlider.

#### Example
    <kendo:rangeSlider max="max">
    </kendo:rangeSlider>

### min `float`

The minimum value of the RangeSlider.

#### Example
    <kendo:rangeSlider min="min">
    </kendo:rangeSlider>

### orientation `java.lang.String`

F
The orientation of a RangeSlider; "horizontal" or
"vertical".

#### Example
    <kendo:rangeSlider orientation="orientation">
    </kendo:rangeSlider>

### selectionEnd `float`

The selection end value of the RangeSlider.

#### Example
    <kendo:rangeSlider selectionEnd="selectionEnd">
    </kendo:rangeSlider>

### selectionStart `float`

The selection start value of the RangeSlider.

#### Example
    <kendo:rangeSlider selectionStart="selectionStart">
    </kendo:rangeSlider>

### smallStep `float`

The small step value of the RangeSlider. The underlying value will be changed when the end
user (1) clicks on the increase or decrease buttons of the RangeSlider, (2) presses the
arrow keys (the drag handle must be focused), or (3) drags the drag handle.

#### Example
    <kendo:rangeSlider smallStep="smallStep">
    </kendo:rangeSlider>

### tickPlacement `java.lang.String`

Denotes the location of the tick marks in the RangeSlider. The available options are:

#### Example
    <kendo:rangeSlider tickPlacement="tickPlacement">
    </kendo:rangeSlider>


##  Configuration JSP Tags

### kendo:rangeSlider-tooltip

Configuration of the RangeSlider tooltip.

More documentation is available at [kendo:rangeSlider-tooltip](rangeslider/tooltip).

#### Example

    <kendo:rangeSlider>
        <kendo:rangeSlider-tooltip></kendo:rangeSlider-tooltip>
    </kendo:rangeSlider>


## Event Attributes

### change `String`

Fires when the rangeSlider value changes as a result of selecting a new value with one of the drag handles or the keyboard.


For additional information check the [change](/api/web/rangeslider#events-change) event documentation.

#### Example
    <kendo:rangeSlider change="handle_change">
    </kendo:rangeSlider>
    <script>
        function handle_change(e) {
            // Code to handle the change event.
        }
    </script>

### slide `String`

Fires when the user drags the drag handle to a new position.


For additional information check the [slide](/api/web/rangeslider#events-slide) event documentation.

#### Example
    <kendo:rangeSlider slide="handle_slide">
    </kendo:rangeSlider>
    <script>
        function handle_slide(e) {
            // Code to handle the slide event.
        }
    </script>

## Event Tags

### kendo:rangeSlider-change

Fires when the rangeSlider value changes as a result of selecting a new value with one of the drag handles or the keyboard.


For additional information check the [change](/api/web/rangeslider#events-change) event documentation.

#### Example
    <kendo:rangeSlider>
        <kendo:rangeSlider-change>
            <script>
                function(e) {
                    // Code to handle the change event.
                }
            </script>
        </kendo:rangeSlider-change>
    </kendo:rangeSlider>

### kendo:rangeSlider-slide

Fires when the user drags the drag handle to a new position.


For additional information check the [slide](/api/web/rangeslider#events-slide) event documentation.

#### Example
    <kendo:rangeSlider>
        <kendo:rangeSlider-slide>
            <script>
                function(e) {
                    // Code to handle the slide event.
                }
            </script>
        </kendo:rangeSlider-slide>
    </kendo:rangeSlider>

