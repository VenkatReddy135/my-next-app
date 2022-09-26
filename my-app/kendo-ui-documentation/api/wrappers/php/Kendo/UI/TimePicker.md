---
title: TimePicker
slug: php-ui-timepicker
tags: api, php
publish: true
---

# \Kendo\UI\TimePicker

A PHP wrapper for Kendo UI [TimePicker](/api/web/timepicker).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use TimePicker in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo TimePicker

    <?php
    // Create a new instance of TimePicker and specify its id
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');

    // Configure it
    $timePicker->culture('value')

    // Output it

    echo $timePicker->render();
    ?>


## Methods

### animation

Configures the opening and closing animations of the popup. Setting the animation option to false will disable the opening and closing animations. As a result the popup will open and close instantly.

#### Returns
`\Kendo\UI\TimePicker`

#### Parameters

##### $value `\Kendo\UI\TimePickerAnimation|array`


#### Example - using [\Kendo\UI\TimePickerAnimation](/api/wrappers/php/Kendo/UI/TimePickerAnimation)
    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $animation = new \Kendo\UI\TimePickerAnimation();
    $close = new \Kendo\UI\TimePickerAnimationClose();
    $animation->close($close);
    $timePicker->animation($animation);
    ?>

#### Example - using array

    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $close = new \Kendo\UI\TimePickerAnimationClose();
    $timePicker->animation(array('close' => $close));
    ?>

### change
Fires when the selected date is changed
For additional information check the [change](/api/web/timepicker#events-change) event documentation.

#### Returns
`\Kendo\UI\TimePicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### close
Fires when the time drop-down list is closed
For additional information check the [close](/api/web/timepicker#events-close) event documentation.

#### Returns
`\Kendo\UI\TimePicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->close('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onClose(e) {
            // handle the close event.
        }
    </script>
    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->close('onClose');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->close(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### culture
Specifies the culture info used by the widget.

#### Returns
`\Kendo\UI\TimePicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->culture('value');
    ?>

### dates
Specifies a list of dates, which are shown in the time drop-down list. If not set, the TimePicker will auto-generate the available times.

#### Returns
`\Kendo\UI\TimePicker`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->dates(new array());
    ?>

### format
Specifies the format, which is used to format the value of the TimePicker displayed in the input. The format also will be used to parse the input.

#### Returns
`\Kendo\UI\TimePicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->format('value');
    ?>

### interval
Specifies the interval, between values in the popup list, in minutes.

#### Returns
`\Kendo\UI\TimePicker`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->interval(1);
    ?>

### max
Specifies the end value in the popup list.

#### Returns
`\Kendo\UI\TimePicker`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->max(new date());
    ?>

### min
Specifies the start value in the popup list.

#### Returns
`\Kendo\UI\TimePicker`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->min(new date());
    ?>

### open
Fires when the time drop-down list is opened
For additional information check the [open](/api/web/timepicker#events-open) event documentation.

#### Returns
`\Kendo\UI\TimePicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->open('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onOpen(e) {
            // handle the open event.
        }
    </script>
    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->open('onOpen');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->open(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### parseFormats
Specifies the formats, which are used to parse the value set with the value method or by direct input. If not set the value of the options.format will be used. Note that value of the format option is always used.

#### Returns
`\Kendo\UI\TimePicker`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->parseFormats(new array());
    ?>

### value
Specifies the selected time.

#### Returns
`\Kendo\UI\TimePicker`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $timePicker = new \Kendo\UI\TimePicker('TimePicker');
    $timePicker->value(new date());
    ?>

