---
title: CalendarMonth
slug: php-ui-calendarmonth
tags: api, php
publish: true
---

# \Kendo\UI\CalendarMonth

A PHP class representing the month setting of Calendar.


## Methods

### content

Sets the HTML content of the CalendarMonth.

#### Returns

`CalendarMonth`

#### $value `string`

#### Example

    <?php
    $month = new \Kendo\UI\CalendarMonth();
    $month->content('<strong>Content</strong>');
    ?>


### _empty
The template to be used for rendering the cells in the "month" view, which are not in the min/max range.
 By default, the widget renders an empty string.

#### Returns
`\Kendo\UI\CalendarMonth`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $month = new \Kendo\UI\CalendarMonth();
    $month->_empty('value');
    ?>

