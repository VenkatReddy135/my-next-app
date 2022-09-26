---
title: SchedulerView
slug: php-ui-schedulerview
tags: api, php
publish: true
---

# \Kendo\UI\SchedulerView

A PHP class representing the view setting of SchedulerViews.


## Methods

### allDayEventTemplate
The template used to render the "all day" scheduler events.The fields which can be used in the template are:

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->allDayEventTemplate('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->allDayEventTemplate(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### allDaySlot
If set to true the scheduler will display a slot for "all day" events.

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->allDaySlot(true);
    ?>

### dateHeaderTemplate
The template used to render the date header cells.By default the scheduler renders the date using the current culture date format.The fields which can be used in the template are:

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->dateHeaderTemplate('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->dateHeaderTemplate(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### dayTemplate
The template used to render the day slots in month view.The fields which can be used in the template are:

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->dayTemplate('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->dayTemplate(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### editable

If set to true the user would be able to create new scheduler events and modify or delete existing ones.Overrides the editable option of the scheduler.

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `boolean|\Kendo\UI\SchedulerViewEditable|array`




#### Example  - using boolean
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->editable(true);
    ?>


#### Example - using [\Kendo\UI\SchedulerViewEditable](/api/wrappers/php/Kendo/UI/SchedulerViewEditable)
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $editable = new \Kendo\UI\SchedulerViewEditable();
    $create = true;
    $editable->create($create);
    $view->editable($editable);
    ?>

#### Example - using array

    <?php
    $view = new \Kendo\UI\SchedulerView();
    $create = true;
    $view->editable(array('create' => $create));
    ?>

### endTime
The end time of the view. The scheduler will display events ending before the endTime.

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->endTime(new date());
    ?>

### eventHeight
The height of the scheduler event rendered in month view.

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->eventHeight(1);
    ?>

### eventTemplate
The template used by the view to render the scheduler events.The fields which can be used in the template are:

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->eventTemplate('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->eventTemplate(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### eventTimeTemplate
The template used by the agenda view to render the time of the scheduler events.The fields which can be used in the template are:

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->eventTimeTemplate('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->eventTimeTemplate(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### group

The configuration of the view resource(s) grouping.

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `\Kendo\UI\SchedulerViewGroup|array`


#### Example - using [\Kendo\UI\SchedulerViewGroup](/api/wrappers/php/Kendo/UI/SchedulerViewGroup)
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $group = new \Kendo\UI\SchedulerViewGroup();
    $orientation = 'value';
    $group->orientation($orientation);
    $view->group($group);
    ?>

#### Example - using array

    <?php
    $view = new \Kendo\UI\SchedulerView();
    $orientation = 'value';
    $view->group(array('orientation' => $orientation));
    ?>

### majorTick
The number of minutes represented by a major tick.

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->majorTick(1);
    ?>

### majorTimeHeaderTemplate
The template used to render the major ticks.By default the scheduler renders the time using the current culture time format.The fields which can be used in the template are:

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->majorTimeHeaderTemplate('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->majorTimeHeaderTemplate(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### minorTickCount
The number of time slots to display per major tick.

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->minorTickCount(1);
    ?>

### minorTimeHeaderTemplate
The template used to render the minor ticks.By default the scheduler renders a "&nbsp;".The fields which can be used in the template are:

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->minorTimeHeaderTemplate('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->minorTimeHeaderTemplate(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### selected
If set to true the view will be initially selected by the scheduler widget.

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->selected(true);
    ?>

### selectedDateFormat
The format used to display the selected date. Uses kendo.format.Contains two placeholders - "{0}" and "{1}" which represent the start and end date displayed by the view.

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->selectedDateFormat('value');
    ?>

### startTime
The start time of the view. The scheduler will display events starting after the startTime.

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->startTime(new date());
    ?>

### title
The user-friendly title of the view displayed by the scheduler.

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->title('value');
    ?>

### type
The type of the view. The built-in views are: "day", "week", "month" and "agenda".

#### Returns
`\Kendo\UI\SchedulerView`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $view = new \Kendo\UI\SchedulerView();
    $view->type('value');
    ?>

