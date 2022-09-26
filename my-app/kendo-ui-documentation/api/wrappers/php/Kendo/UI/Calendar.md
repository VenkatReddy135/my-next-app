---
title: Calendar
slug: php-ui-calendar
tags: api, php
publish: true
---

# \Kendo\UI\Calendar

A PHP wrapper for Kendo UI [Calendar](/api/web/calendar).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use Calendar in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo Calendar

    <?php
    // Create a new instance of Calendar and specify its id
    $calendar = new \Kendo\UI\Calendar('Calendar');

    // Configure it
    $calendar->culture('value')

    // Output it

    echo $calendar->render();
    ?>


## Methods

### change
Fires when the selected date is changed.
For additional information check the [change](/api/web/calendar#events-change) event documentation.

#### Returns
`\Kendo\UI\Calendar`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### culture
Specifies the culture info used by the widget.

#### Returns
`\Kendo\UI\Calendar`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->culture('value');
    ?>

### dates
Specifies a list of dates, which will be passed to the month template.

#### Returns
`\Kendo\UI\Calendar`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->dates(new array());
    ?>

### depth
Specifies the navigation depth. The following
settings are available for the depth value:

#### Returns
`\Kendo\UI\Calendar`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->depth('value');
    ?>

### footer
The template which renders the footer. If false, the footer will not be rendered.

#### Returns
`\Kendo\UI\Calendar`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->footer('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->footer(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### format
Specifies the format, which is used to parse value set with value() method.

#### Returns
`\Kendo\UI\Calendar`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->format('value');
    ?>

### max
Specifies the maximum date, which the calendar can show.

#### Returns
`\Kendo\UI\Calendar`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->max(new date());
    ?>

### min
Specifies the minimum date, which the calendar can show.

#### Returns
`\Kendo\UI\Calendar`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->min(new date());
    ?>

### month

Templates for the cells rendered in "month" view.

#### Returns
`\Kendo\UI\Calendar`

#### Parameters

##### $value `\Kendo\UI\CalendarMonth|array`


#### Example - using [\Kendo\UI\CalendarMonth](/api/wrappers/php/Kendo/UI/CalendarMonth)
    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $month = new \Kendo\UI\CalendarMonth();
    $content = 'value';
    $month->content($content);
    $calendar->month($month);
    ?>

#### Example - using array

    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $content = 'value';
    $calendar->month(array('content' => $content));
    ?>

### navigate
Fires when calendar navigates.
For additional information check the [navigate](/api/web/calendar#events-navigate) event documentation.

#### Returns
`\Kendo\UI\Calendar`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->navigate('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onNavigate(e) {
            // handle the navigate event.
        }
    </script>
    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->navigate('onNavigate');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->navigate(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### start
Specifies the start view.
The following settings are available for the start value:

#### Returns
`\Kendo\UI\Calendar`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->start('value');
    ?>

### value
Specifies the selected date.

#### Returns
`\Kendo\UI\Calendar`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $calendar = new \Kendo\UI\Calendar('Calendar');
    $calendar->value(new date());
    ?>

