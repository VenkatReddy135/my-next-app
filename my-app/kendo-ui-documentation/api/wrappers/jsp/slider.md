---
title: slider
slug: jsp-slider
tags: api, java
publish: true
---

# \<kendo:slider\>
A JSP wrapper for Kendo UI [Slider](/api/web/slider).

## Configuration Attributes

### decreaseButtonTitle `java.lang.String`

The title of the decrease button of the Slider.

#### Example
    <kendo:slider decreaseButtonTitle="decreaseButtonTitle">
    </kendo:slider>

### increaseButtonTitle `java.lang.String`

The title of the increase button of the Slider.

#### Example
    <kendo:slider increaseButtonTitle="increaseButtonTitle">
    </kendo:slider>

### largeStep `float`

The delta with which the value will change when the user presses the Page Up or Page Down key (the drag
handle must be focused). Note: The allied largeStep will also set large tick for every large step.

#### Example
    <kendo:slider largeStep="largeStep">
    </kendo:slider>

### max `float`

The maximum value of the Slider.

#### Example
    <kendo:slider max="max">
    </kendo:slider>

### min `float`

The minimum value of the Slider.

#### Example
    <kendo:slider min="min">
    </kendo:slider>

### orientation `java.lang.String`

The orientation of a Slider: "horizontal" or "vertical".

#### Example
    <kendo:slider orientation="orientation">
    </kendo:slider>

### showButtons `boolean`

Can be used to show (true) or hide (false) the
increase and decrease buttons of a Slider.

#### Example
    <kendo:slider showButtons="showButtons">
    </kendo:slider>

### smallStep `float`

The small step value of the Slider. The underlying value will be changed when the end user
(1) clicks on the increase or decrease buttons of the Slider, (2) presses the arrow keys
(the drag handle must be focused), or (3) drags the drag handle.

#### Example
    <kendo:slider smallStep="smallStep">
    </kendo:slider>

### tickPlacement `java.lang.String`

Denotes the location of the tick marks in the Slider. The available options are:

#### Example
    <kendo:slider tickPlacement="tickPlacement">
    </kendo:slider>

### value `float`

The underlying value of the Slider.

#### Example
    <kendo:slider value="value">
    </kendo:slider>


##  Configuration JSP Tags

### kendo:slider-tooltip

Configuration of the Slider tooltip.

More documentation is available at [kendo:slider-tooltip](slider/tooltip).

#### Example

    <kendo:slider>
        <kendo:slider-tooltip></kendo:slider-tooltip>
    </kendo:slider>


## Event Attributes

### change `String`

Fires when the slider value changes as a result of selecting a new value with the drag handle, buttons or keyboard.


For additional information check the [change](/api/web/slider#events-change) event documentation.

#### Example
    <kendo:slider change="handle_change">
    </kendo:slider>
    <script>
        function handle_change(e) {
            // Code to handle the change event.
        }
    </script>

### slide `String`

Fires when the user drags the drag handle to a new position.


For additional information check the [slide](/api/web/slider#events-slide) event documentation.

#### Example
    <kendo:slider slide="handle_slide">
    </kendo:slider>
    <script>
        function handle_slide(e) {
            // Code to handle the slide event.
        }
    </script>

## Event Tags

### kendo:slider-change

Fires when the slider value changes as a result of selecting a new value with the drag handle, buttons or keyboard.


For additional information check the [change](/api/web/slider#events-change) event documentation.

#### Example
    <kendo:slider>
        <kendo:slider-change>
            <script>
                function(e) {
                    // Code to handle the change event.
                }
            </script>
        </kendo:slider-change>
    </kendo:slider>

### kendo:slider-slide

Fires when the user drags the drag handle to a new position.


For additional information check the [slide](/api/web/slider#events-slide) event documentation.

#### Example
    <kendo:slider>
        <kendo:slider-slide>
            <script>
                function(e) {
                    // Code to handle the slide event.
                }
            </script>
        </kendo:slider-slide>
    </kendo:slider>

