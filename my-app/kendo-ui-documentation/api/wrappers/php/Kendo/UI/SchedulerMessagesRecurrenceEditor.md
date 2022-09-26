---
title: SchedulerMessagesRecurrenceEditor
slug: php-ui-schedulermessagesrecurrenceeditor
tags: api, php
publish: true
---

# \Kendo\UI\SchedulerMessagesRecurrenceEditor

A PHP class representing the recurrenceEditor setting of SchedulerMessages.


## Methods

### daily

The configuration of the scheduler recurrence editor daily messages. Use this option to customize or localize the scheduler recurrence editor daily messages.

#### Returns
`\Kendo\UI\SchedulerMessagesRecurrenceEditor`

#### Parameters

##### $value `\Kendo\UI\SchedulerMessagesRecurrenceEditorDaily|array`


#### Example - using [\Kendo\UI\SchedulerMessagesRecurrenceEditorDaily](/api/wrappers/php/Kendo/UI/SchedulerMessagesRecurrenceEditorDaily)
    <?php
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $daily = new \Kendo\UI\SchedulerMessagesRecurrenceEditorDaily();
    $days = 'value';
    $daily->days($days);
    $recurrenceEditor->daily($daily);
    ?>

#### Example - using array

    <?php
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $days = 'value';
    $recurrenceEditor->daily(array('days' => $days));
    ?>

### end

The configuration of the scheduler recurrence editor end messages. Use this option to customize or localize the scheduler recurrence editor end messages.

#### Returns
`\Kendo\UI\SchedulerMessagesRecurrenceEditor`

#### Parameters

##### $value `\Kendo\UI\SchedulerMessagesRecurrenceEditorEnd|array`


#### Example - using [\Kendo\UI\SchedulerMessagesRecurrenceEditorEnd](/api/wrappers/php/Kendo/UI/SchedulerMessagesRecurrenceEditorEnd)
    <?php
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $end = new \Kendo\UI\SchedulerMessagesRecurrenceEditorEnd();
    $endCountAfter = 'value';
    $end->endCountAfter($endCountAfter);
    $recurrenceEditor->end($end);
    ?>

#### Example - using array

    <?php
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $endCountAfter = 'value';
    $recurrenceEditor->end(array('endCountAfter' => $endCountAfter));
    ?>

### frequencies

The configuration of the scheduler recurrence editor frequencies messages. Use this option to customize or localize the scheduler recurrence editor frequencies messages.

#### Returns
`\Kendo\UI\SchedulerMessagesRecurrenceEditor`

#### Parameters

##### $value `\Kendo\UI\SchedulerMessagesRecurrenceEditorFrequencies|array`


#### Example - using [\Kendo\UI\SchedulerMessagesRecurrenceEditorFrequencies](/api/wrappers/php/Kendo/UI/SchedulerMessagesRecurrenceEditorFrequencies)
    <?php
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $frequencies = new \Kendo\UI\SchedulerMessagesRecurrenceEditorFrequencies();
    $daily = 'value';
    $frequencies->daily($daily);
    $recurrenceEditor->frequencies($frequencies);
    ?>

#### Example - using array

    <?php
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $daily = 'value';
    $recurrenceEditor->frequencies(array('daily' => $daily));
    ?>

### monthly

The configuration of the scheduler recurrence editor monthly messages. Use this option to customize or localize the scheduler recurrence editor monthly messages.

#### Returns
`\Kendo\UI\SchedulerMessagesRecurrenceEditor`

#### Parameters

##### $value `\Kendo\UI\SchedulerMessagesRecurrenceEditorMonthly|array`


#### Example - using [\Kendo\UI\SchedulerMessagesRecurrenceEditorMonthly](/api/wrappers/php/Kendo/UI/SchedulerMessagesRecurrenceEditorMonthly)
    <?php
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $monthly = new \Kendo\UI\SchedulerMessagesRecurrenceEditorMonthly();
    $day = 'value';
    $monthly->day($day);
    $recurrenceEditor->monthly($monthly);
    ?>

#### Example - using array

    <?php
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $day = 'value';
    $recurrenceEditor->monthly(array('day' => $day));
    ?>

### offsetPositions

The configuration of the scheduler recurrence editor offsetPositions messages. Use this option to customize or localize the scheduler recurrence editor offsetPositions messages.

#### Returns
`\Kendo\UI\SchedulerMessagesRecurrenceEditor`

#### Parameters

##### $value `\Kendo\UI\SchedulerMessagesRecurrenceEditorOffsetPositions|array`


#### Example - using [\Kendo\UI\SchedulerMessagesRecurrenceEditorOffsetPositions](/api/wrappers/php/Kendo/UI/SchedulerMessagesRecurrenceEditorOffsetPositions)
    <?php
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $offsetPositions = new \Kendo\UI\SchedulerMessagesRecurrenceEditorOffsetPositions();
    $first = 'value';
    $offsetPositions->first($first);
    $recurrenceEditor->offsetPositions($offsetPositions);
    ?>

#### Example - using array

    <?php
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $first = 'value';
    $recurrenceEditor->offsetPositions(array('first' => $first));
    ?>

### weekly

The configuration of the scheduler recurrence editor weekly messages. Use this option to customize or localize the scheduler recurrence editor weekly messages.

#### Returns
`\Kendo\UI\SchedulerMessagesRecurrenceEditor`

#### Parameters

##### $value `\Kendo\UI\SchedulerMessagesRecurrenceEditorWeekly|array`


#### Example - using [\Kendo\UI\SchedulerMessagesRecurrenceEditorWeekly](/api/wrappers/php/Kendo/UI/SchedulerMessagesRecurrenceEditorWeekly)
    <?php
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $weekly = new \Kendo\UI\SchedulerMessagesRecurrenceEditorWeekly();
    $repeatEvery = 'value';
    $weekly->repeatEvery($repeatEvery);
    $recurrenceEditor->weekly($weekly);
    ?>

#### Example - using array

    <?php
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $repeatEvery = 'value';
    $recurrenceEditor->weekly(array('repeatEvery' => $repeatEvery));
    ?>

### yearly

The configuration of the scheduler recurrence editor yearly messages. Use this option to customize or localize the scheduler recurrence editor yearly messages.

#### Returns
`\Kendo\UI\SchedulerMessagesRecurrenceEditor`

#### Parameters

##### $value `\Kendo\UI\SchedulerMessagesRecurrenceEditorYearly|array`


#### Example - using [\Kendo\UI\SchedulerMessagesRecurrenceEditorYearly](/api/wrappers/php/Kendo/UI/SchedulerMessagesRecurrenceEditorYearly)
    <?php
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $yearly = new \Kendo\UI\SchedulerMessagesRecurrenceEditorYearly();
    $of = 'value';
    $yearly->of($of);
    $recurrenceEditor->yearly($yearly);
    ?>

#### Example - using array

    <?php
    $recurrenceEditor = new \Kendo\UI\SchedulerMessagesRecurrenceEditor();
    $of = 'value';
    $recurrenceEditor->yearly(array('of' => $of));
    ?>

