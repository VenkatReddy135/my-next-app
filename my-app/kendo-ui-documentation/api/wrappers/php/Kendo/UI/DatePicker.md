---
title: DatePicker
slug: php-ui-datepicker
tags: api, php
publish: true
---

# \Kendo\UI\DatePicker

A PHP wrapper for Kendo UI [DatePicker](/api/web/datepicker).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use DatePicker in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo DatePicker

    <?php
    // Create a new instance of DatePicker and specify its id
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');

    // Configure it
    $datePicker->culture('value')

    // Output it

    echo $datePicker->render();
    ?>


## Methods

### ARIATemplate
Specifies a template used to populate value of the aria-label attribute.

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->ARIATemplate('value');
    ?>

### animation

Configures the opening and closing animations of the calendar popup. Setting the animation option to false will disable the opening and closing animations. As a result the calendar popup will open and close instantly.

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `\Kendo\UI\DatePickerAnimation|array`


#### Example - using [\Kendo\UI\DatePickerAnimation](/api/wrappers/php/Kendo/UI/DatePickerAnimation)
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $animation = new \Kendo\UI\DatePickerAnimation();
    $close = new \Kendo\UI\DatePickerAnimationClose();
    $animation->close($close);
    $datePicker->animation($animation);
    ?>

#### Example - using array

    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $close = new \Kendo\UI\DatePickerAnimationClose();
    $datePicker->animation(array('close' => $close));
    ?>

### change
Fires when the selected date is changed
For additional information check the [change](/api/web/datepicker#events-change) event documentation.

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### close
Fires when the calendar is closed
For additional information check the [close](/api/web/datepicker#events-close) event documentation.

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->close('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onClose(e) {
            // handle the close event.
        }
    </script>
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->close('onClose');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->close(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### culture
Specifies the culture info used by the widget.

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->culture('value');
    ?>

### dates
Specifies a list of dates, which will be passed to the month template.

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->dates(new array());
    ?>

### depth
Specifies the navigation depth. The following
settings are available for the depth value:

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->depth('value');
    ?>

### footer
The template which renders the footer of the calendar. If false, the footer will not be rendered.

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->footer('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->footer(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### format
Specifies the format, which is used to format the value of the DatePicker displayed in the input. The format also will be used to parse the input.

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->format('value');
    ?>

### max
Specifies the maximum date, which the calendar can show.

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->max(new date());
    ?>

### min
Specifies the minimum date that the calendar can show.

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->min(new date());
    ?>

### month

Templates for the cells rendered in the calendar "month" view.

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `\Kendo\UI\DatePickerMonth|array`


#### Example - using [\Kendo\UI\DatePickerMonth](/api/wrappers/php/Kendo/UI/DatePickerMonth)
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $month = new \Kendo\UI\DatePickerMonth();
    $content = 'value';
    $month->content($content);
    $datePicker->month($month);
    ?>

#### Example - using array

    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $content = 'value';
    $datePicker->month(array('content' => $content));
    ?>

### open
Fires when the calendar is opened
For additional information check the [open](/api/web/datepicker#events-open) event documentation.

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->open('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onOpen(e) {
            // handle the open event.
        }
    </script>
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->open('onOpen');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->open(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### parseFormats
Specifies a lis of date formats used to parse the value set with value() method or by direct user input. If not set the value of the format will be used.
 Note that format option is always used parsing process.

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->parseFormats(new array());
    ?>

### start
Specifies the start view.
The following settings are available for the start value:

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->start('value');
    ?>

### value
Specifies the selected date.

#### Returns
`\Kendo\UI\DatePicker`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $datePicker = new \Kendo\UI\DatePicker('DatePicker');
    $datePicker->value(new date());
    ?>

