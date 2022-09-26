---
title: SchedulerEditable
slug: php-ui-schedulereditable
tags: api, php
publish: true
---

# \Kendo\UI\SchedulerEditable

A PHP class representing the editable setting of Scheduler.


## Methods

### confirmation
If set to true the scheduler will display a confirmation dialog when the user clicks the "destroy" button.Can be set to a string which will be used as the confirmation text.

#### Returns
`\Kendo\UI\SchedulerEditable`

#### Parameters

##### $value `boolean|string`



#### Example  - using boolean
    <?php
    $editable = new \Kendo\UI\SchedulerEditable();
    $editable->confirmation(true);
    ?>

#### Example  - using string
    <?php
    $editable = new \Kendo\UI\SchedulerEditable();
    $editable->confirmation('value');
    ?>

### create
If set to true the user can create new events. Creating is enabled by default.

#### Returns
`\Kendo\UI\SchedulerEditable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $editable = new \Kendo\UI\SchedulerEditable();
    $editable->create(true);
    ?>

### destroy
If set to true the user can delete events from the view by clicking the "destroy" button. Deleting is enabled by default.

#### Returns
`\Kendo\UI\SchedulerEditable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $editable = new \Kendo\UI\SchedulerEditable();
    $editable->destroy(true);
    ?>

### resize
If set to true the scheduler allows event resizing. Dragging the resize handles changes the start or end time of the event.

#### Returns
`\Kendo\UI\SchedulerEditable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $editable = new \Kendo\UI\SchedulerEditable();
    $editable->resize(true);
    ?>

### template
The template which renders the editor.The template should contain elements whose name HTML attributes are set as the editable fields. This is how the grid will know
which field to update. The other option is to use MVVM bindings in order to bind HTML elements to data item fields.

#### Returns
`\Kendo\UI\SchedulerEditable`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $editable = new \Kendo\UI\SchedulerEditable();
    $editable->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $editable = new \Kendo\UI\SchedulerEditable();
    $editable->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### update
If set to true the user can update events. Updating is enabled by default.

#### Returns
`\Kendo\UI\SchedulerEditable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $editable = new \Kendo\UI\SchedulerEditable();
    $editable->update(true);
    ?>

