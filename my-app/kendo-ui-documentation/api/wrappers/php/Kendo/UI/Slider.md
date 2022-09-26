---
title: Slider
slug: php-ui-slider
tags: api, php
publish: true
---

# \Kendo\UI\Slider

A PHP wrapper for Kendo UI [Slider](/api/web/slider).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use Slider in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo Slider

    <?php
    // Create a new instance of Slider and specify its id
    $slider = new \Kendo\UI\Slider('Slider');

    // Configure it
    $slider->decreaseButtonTitle('value')

    // Output it

    echo $slider->render();
    ?>


## Methods

### change
Fires when the slider value changes as a result of selecting a new value with the drag handle, buttons or keyboard.
For additional information check the [change](/api/web/slider#events-change) event documentation.

#### Returns
`\Kendo\UI\Slider`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### decreaseButtonTitle
The title of the decrease button of the Slider.

#### Returns
`\Kendo\UI\Slider`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->decreaseButtonTitle('value');
    ?>

### increaseButtonTitle
The title of the increase button of the Slider.

#### Returns
`\Kendo\UI\Slider`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->increaseButtonTitle('value');
    ?>

### largeStep
The delta with which the value will change when the user presses the Page Up or Page Down key (the drag
handle must be focused). Note: The allied largeStep will also set large tick for every large step.

#### Returns
`\Kendo\UI\Slider`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->largeStep(1);
    ?>

### max
The maximum value of the Slider.

#### Returns
`\Kendo\UI\Slider`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->max(1);
    ?>

### min
The minimum value of the Slider.

#### Returns
`\Kendo\UI\Slider`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->min(1);
    ?>

### orientation
The orientation of a Slider: "horizontal" or "vertical".

#### Returns
`\Kendo\UI\Slider`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->orientation('value');
    ?>

### showButtons
Can be used to show (true) or hide (false) the
increase and decrease buttons of a Slider.

#### Returns
`\Kendo\UI\Slider`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->showButtons(true);
    ?>

### slide
Fires when the user drags the drag handle to a new position.
For additional information check the [slide](/api/web/slider#events-slide) event documentation.

#### Returns
`\Kendo\UI\Slider`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->slide('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSlide(e) {
            // handle the slide event.
        }
    </script>
    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->slide('onSlide');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->slide(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### smallStep
The small step value of the Slider. The underlying value will be changed when the end user
(1) clicks on the increase or decrease buttons of the Slider, (2) presses the arrow keys
(the drag handle must be focused), or (3) drags the drag handle.

#### Returns
`\Kendo\UI\Slider`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->smallStep(1);
    ?>

### tickPlacement
Denotes the location of the tick marks in the Slider. The available options are:

#### Returns
`\Kendo\UI\Slider`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->tickPlacement('value');
    ?>

### tooltip

Configuration of the Slider tooltip.

#### Returns
`\Kendo\UI\Slider`

#### Parameters

##### $value `\Kendo\UI\SliderTooltip|array`


#### Example - using [\Kendo\UI\SliderTooltip](/api/wrappers/php/Kendo/UI/SliderTooltip)
    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $tooltip = new \Kendo\UI\SliderTooltip();
    $enabled = true;
    $tooltip->enabled($enabled);
    $slider->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $enabled = true;
    $slider->tooltip(array('enabled' => $enabled));
    ?>

### value
The underlying value of the Slider.

#### Returns
`\Kendo\UI\Slider`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $slider = new \Kendo\UI\Slider('Slider');
    $slider->value(1);
    ?>

