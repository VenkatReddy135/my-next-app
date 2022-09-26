---
title: DatePickerMonth
slug: php-ui-datepickermonth
tags: api, php
publish: true
---

# \Kendo\UI\DatePickerMonth

A PHP class representing the month setting of DatePicker.


## Methods

### content

Sets the HTML content of the DatePickerMonth.

#### Returns

`DatePickerMonth`

#### $value `string`

#### Example

    <?php
    $month = new \Kendo\UI\DatePickerMonth();
    $month->content('<strong>Content</strong>');
    ?>


### _empty
The template to be used for rendering the cells in the "month" view, which are not in the min/max range.

#### Returns
`\Kendo\UI\DatePickerMonth`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $month = new \Kendo\UI\DatePickerMonth();
    $month->_empty('value');
    ?>

