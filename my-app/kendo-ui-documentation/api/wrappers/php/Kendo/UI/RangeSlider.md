---
title: RangeSlider
slug: php-ui-rangeslider
tags: api, php
publish: true
---

# \Kendo\UI\RangeSlider

A PHP wrapper for Kendo UI [RangeSlider](/api/web/rangeslider).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use RangeSlider in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo RangeSlider

    <?php
    // Create a new instance of RangeSlider and specify its id
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');

    // Configure it
    $rangeSlider->largeStep(1)

    // Output it

    echo $rangeSlider->render();
    ?>


## Methods

### change
Fires when the rangeSlider value changes as a result of selecting a new value with one of the drag handles or the keyboard.
For additional information check the [change](/api/web/rangeslider#events-change) event documentation.

#### Returns
`\Kendo\UI\RangeSlider`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $rangeSlider->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $rangeSlider->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $rangeSlider->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### largeStep
The delta with which the value will change when the user presses the Page Up or Page Down key (the drag
handle must be focused). Note: The allied largeStep will also set large tick for every large step.

#### Returns
`\Kendo\UI\RangeSlider`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $rangeSlider->largeStep(1);
    ?>

### max
The maximum value of the RangeSlider.

#### Returns
`\Kendo\UI\RangeSlider`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $rangeSlider->max(1);
    ?>

### min
The minimum value of the RangeSlider.

#### Returns
`\Kendo\UI\RangeSlider`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $rangeSlider->min(1);
    ?>

### orientation
F
The orientation of a RangeSlider; "horizontal" or
"vertical".

#### Returns
`\Kendo\UI\RangeSlider`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $rangeSlider->orientation('value');
    ?>

### selectionEnd
The selection end value of the RangeSlider.

#### Returns
`\Kendo\UI\RangeSlider`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $rangeSlider->selectionEnd(1);
    ?>

### selectionStart
The selection start value of the RangeSlider.

#### Returns
`\Kendo\UI\RangeSlider`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $rangeSlider->selectionStart(1);
    ?>

### slide
Fires when the user drags the drag handle to a new position.
For additional information check the [slide](/api/web/rangeslider#events-slide) event documentation.

#### Returns
`\Kendo\UI\RangeSlider`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $rangeSlider->slide('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSlide(e) {
            // handle the slide event.
        }
    </script>
    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $rangeSlider->slide('onSlide');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $rangeSlider->slide(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### smallStep
The small step value of the RangeSlider. The underlying value will be changed when the end
user (1) clicks on the increase or decrease buttons of the RangeSlider, (2) presses the
arrow keys (the drag handle must be focused), or (3) drags the drag handle.

#### Returns
`\Kendo\UI\RangeSlider`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $rangeSlider->smallStep(1);
    ?>

### tickPlacement
Denotes the location of the tick marks in the RangeSlider. The available options are:

#### Returns
`\Kendo\UI\RangeSlider`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $rangeSlider->tickPlacement('value');
    ?>

### tooltip

Configuration of the RangeSlider tooltip.

#### Returns
`\Kendo\UI\RangeSlider`

#### Parameters

##### $value `\Kendo\UI\RangeSliderTooltip|array`


#### Example - using [\Kendo\UI\RangeSliderTooltip](/api/wrappers/php/Kendo/UI/RangeSliderTooltip)
    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $tooltip = new \Kendo\UI\RangeSliderTooltip();
    $enabled = true;
    $tooltip->enabled($enabled);
    $rangeSlider->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $rangeSlider = new \Kendo\UI\RangeSlider('RangeSlider');
    $enabled = true;
    $rangeSlider->tooltip(array('enabled' => $enabled));
    ?>

