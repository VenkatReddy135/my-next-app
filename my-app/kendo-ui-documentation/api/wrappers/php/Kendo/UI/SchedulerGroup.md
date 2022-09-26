---
title: SchedulerGroup
slug: php-ui-schedulergroup
tags: api, php
publish: true
---

# \Kendo\UI\SchedulerGroup

A PHP class representing the group setting of Scheduler.


## Methods

### orientation
The orientation of the group headers. Supported values are horizontal or vertical. Note that the agenda view is always in vertical orientation.

#### Returns
`\Kendo\UI\SchedulerGroup`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $group = new \Kendo\UI\SchedulerGroup();
    $group->orientation('value');
    ?>

### resources
An array of resource names by which the scheduler events will be grouped.

#### Returns
`\Kendo\UI\SchedulerGroup`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $group = new \Kendo\UI\SchedulerGroup();
    $group->resources(new array());
    ?>

