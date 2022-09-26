---
title: SchedulerMessages
slug: php-ui-schedulermessages
tags: api, php
publish: true
---

# \Kendo\UI\SchedulerMessages

A PHP class representing the messages setting of Scheduler.


## Methods

### allDay
The text similar to "all day" displayed in day/week views.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $messages->allDay('value');
    ?>

### cancel
The text similar to "Cancel" displayed in scheduler.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $messages->cancel('value');
    ?>

### date
The text similar to "Date" displayed in scheduler.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $messages->date('value');
    ?>

### deleteWindowTitle
The text similar to "Delete event" displayed as title of the scheduler delete event window.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $messages->deleteWindowTitle('value');
    ?>

### destroy
The text similar to "Delete" displayed in scheduler.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $messages->destroy('value');
    ?>

### editor

The configuration of the scheduler editor messages. Use this option to customize or localize the scheduler editor messages.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `\Kendo\UI\SchedulerMessagesEditor|array`


#### Example - using [\Kendo\UI\SchedulerMessagesEditor](/api/wrappers/php/Kendo/UI/SchedulerMessagesEditor)
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $editor = new \Kendo\UI\SchedulerMessagesEditor();
    $allDayEvent = 'value';
    $editor->allDayEvent($allDayEvent);
    $messages->editor($editor);
    ?>

#### Example - using array

    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $allDayEvent = 'value';
    $messages->editor(array('allDayEvent' => $allDayEvent));
    ?>

### event
The text similar to "Event" displayed in scheduler.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $messages->event('value');
    ?>

### recurrenceEditor

The configuration of the scheduler recurrence editor messages. Use this option to customize or localize the scheduler recurrence editor messages.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `\Kendo\UI\SchedulerMessagesRecurrenceEditor|array`


#### Example - using [\Kendo\UI\SchedulerMessagesRecurrenceEditor](/api/wrappers/php/Kendo/UI/SchedulerMessagesRecurrenceEditor)
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $daily = new \Kendo\UI\SchedulerMessagesRecurrenceEditorDaily();
    $recurrenceEditor->daily($daily);
    $messages->recurrenceEditor($recurrenceEditor);
    ?>

#### Example - using array

    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $daily = new \Kendo\UI\SchedulerMessagesRecurrenceEditorDaily();
    $messages->recurrenceEditor(array('daily' => $daily));
    ?>

### recurrenceMessages

The configuration of the scheduler recurrence messages. Use this option to customize or localize the scheduler recurrence messages.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `\Kendo\UI\SchedulerMessagesRecurrenceMessages|array`


#### Example - using [\Kendo\UI\SchedulerMessagesRecurrenceMessages](/api/wrappers/php/Kendo/UI/SchedulerMessagesRecurrenceMessages)
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $recurrenceMessages = new \Kendo\UI\SchedulerMessagesRecurrenceMessages();
    $deleteRecurring = 'value';
    $recurrenceMessages->deleteRecurring($deleteRecurring);
    $messages->recurrenceMessages($recurrenceMessages);
    ?>

#### Example - using array

    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $deleteRecurring = 'value';
    $messages->recurrenceMessages(array('deleteRecurring' => $deleteRecurring));
    ?>

### save
The text similar to "Save" displayed in scheduler.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $messages->save('value');
    ?>

### showFullDay
The text similar to "Show full day" used in scheduler "showFullDay" button.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $messages->showFullDay('value');
    ?>

### showWorkDay
The text similar to "Show business hours" used in scheduler "showWorkDay" button.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $messages->showWorkDay('value');
    ?>

### time
The text similar to "Time" displayed in scheduler.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $messages->time('value');
    ?>

### today
The text similar to "Today" displayed in scheduler.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $messages->today('value');
    ?>

### views

The configuration of the scheduler views messages. Use this option to customize or localize the scheduler views messages.

#### Returns
`\Kendo\UI\SchedulerMessages`

#### Parameters

##### $value `\Kendo\UI\SchedulerMessagesViews|array`


#### Example - using [\Kendo\UI\SchedulerMessagesViews](/api/wrappers/php/Kendo/UI/SchedulerMessagesViews)
    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $views = new \Kendo\UI\SchedulerMessagesViews();
    $agenda = 'value';
    $views->agenda($agenda);
    $messages->views($views);
    ?>

#### Example - using array

    <?php
    $messages = new \Kendo\UI\SchedulerMessages();
    $agenda = 'value';
    $messages->views(array('agenda' => $agenda));
    ?>

