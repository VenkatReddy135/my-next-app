---
title: SchedulerViewEditable
slug: php-ui-schedulervieweditable
tags: api, php
publish: true
---

# \Kendo\UI\SchedulerViewEditable

A PHP class representing the editable setting of SchedulerView.


## Methods

### create
If set to true the user can create new events. Creating is enabled by default.

#### Returns
`\Kendo\UI\SchedulerViewEditable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $editable = new \Kendo\UI\SchedulerViewEditable();
    $editable->create(true);
    ?>

### destroy
If set to true the user can delete events from the view by clicking the "destroy" button. Deleting is enabled by default.

#### Returns
`\Kendo\UI\SchedulerViewEditable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $editable = new \Kendo\UI\SchedulerViewEditable();
    $editable->destroy(true);
    ?>

### update
If set to true the user can update events. Updating is enabled by default.

#### Returns
`\Kendo\UI\SchedulerViewEditable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $editable = new \Kendo\UI\SchedulerViewEditable();
    $editable->update(true);
    ?>

