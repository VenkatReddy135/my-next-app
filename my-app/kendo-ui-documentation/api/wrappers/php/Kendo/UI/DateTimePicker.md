---
title: DateTimePicker
slug: php-ui-datetimepicker
tags: api, php
publish: true
---

# \Kendo\UI\DateTimePicker

A PHP wrapper for Kendo UI [DateTimePicker](/api/web/datetimepicker).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use DateTimePicker in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo DateTimePicker

    <?php
    // Create a new instance of DateTimePicker and specify its id
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');

    // Configure it
    $dateTimePicker->culture('value')

    // Output it

    echo $dateTimePicker->render();
    ?>


## Methods

### ARIATemplate
Specifies a template used to populate value of the aria-label attribute.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->ARIATemplate('value');
    ?>

### animation

Configures the opening and closing animations of the popups. Setting the animation option to false will disable the opening and closing animations. As a result the popup will open and close instantly.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `\Kendo\UI\DateTimePickerAnimation|array`


#### Example - using [\Kendo\UI\DateTimePickerAnimation](/api/wrappers/php/Kendo/UI/DateTimePickerAnimation)
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $animation = new \Kendo\UI\DateTimePickerAnimation();
    $close = new \Kendo\UI\DateTimePickerAnimationClose();
    $animation->close($close);
    $dateTimePicker->animation($animation);
    ?>

#### Example - using array

    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $close = new \Kendo\UI\DateTimePickerAnimationClose();
    $dateTimePicker->animation(array('close' => $close));
    ?>

### change
Triggered when the underlying value of a DateTimePicker is changed.
For additional information check the [change](/api/web/datetimepicker#events-change) event documentation.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### close
Fires when the calendar or the time drop-down list is closed
For additional information check the [close](/api/web/datetimepicker#events-close) event documentation.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->close('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onClose(e) {
            // handle the close event.
        }
    </script>
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->close('onClose');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->close(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### culture
Specifies the culture info used by the widget.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->culture('value');
    ?>

### dates
Specifies a list of dates, which will be passed to the month template of the DateView. All dates, which match the date portion of the selected date will be used to re-bind the TimeView.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->dates(new array());
    ?>

### depth
Specifies the navigation depth of the calendar. The following
settings are available for the depth value:

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->depth('value');
    ?>

### footer
The template which renders the footer of the calendar. If false, the footer will not be rendered.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->footer('value');
    ?>

### format
Specifies the format, which is used to format the value of the DateTimePicker displayed in the input. The format also will be used to parse the input.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->format('value');
    ?>

### interval
Specifies the interval, between values in the popup list, in minutes.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->interval(1);
    ?>

### max
Specifies the maximum date, which the calendar can show.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->max(new date());
    ?>

### min
Specifies the minimum date that the calendar can show.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->min(new date());
    ?>

### month

Templates for the cells rendered in the calendar "month" view.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `\Kendo\UI\DateTimePickerMonth|array`


#### Example - using [\Kendo\UI\DateTimePickerMonth](/api/wrappers/php/Kendo/UI/DateTimePickerMonth)
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $month = new \Kendo\UI\DateTimePickerMonth();
    $content = 'value';
    $month->content($content);
    $dateTimePicker->month($month);
    ?>

#### Example - using array

    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $content = 'value';
    $dateTimePicker->month(array('content' => $content));
    ?>

### open
Fires when the calendar or the time drop-down list is opened
For additional information check the [open](/api/web/datetimepicker#events-open) event documentation.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->open('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onOpen(e) {
            // handle the open event.
        }
    </script>
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->open('onOpen');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->open(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### parseFormats
Specifies the formats, which are used to parse the value set with value() method or by direct input. If not set the value of the options.format and options.timeFormat will be used. Note that value of the format option is always used.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->parseFormats(new array());
    ?>

### start
Specifies the start view of the calendar.
 The following settings are available for the start value:

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->start('value');
    ?>

### timeFormat
Specifies the format, which is used to format the values in the time drop-down list.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->timeFormat('value');
    ?>

### value
Specifies the selected value.

#### Returns
`\Kendo\UI\DateTimePicker`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $dateTimePicker = new \Kendo\UI\DateTimePicker('DateTimePicker');
    $dateTimePicker->value(new date());
    ?>

