---
title: SchedulerResource
slug: php-ui-schedulerresource
tags: api, php
publish: true
---

# \Kendo\UI\SchedulerResource

A PHP class representing the resource setting of SchedulerResources.


## Methods

### dataColorField
The field of the resource data item which contains the resource color.

#### Returns
`\Kendo\UI\SchedulerResource`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $resource = new \Kendo\UI\SchedulerResource();
    $resource->dataColorField('value');
    ?>

### dataSource

Sets the data source of the dataSource.

#### Returns
`\Kendo\UI\SchedulerResource`

#### Parameters

##### $value `\Kendo\Data\DataSource|array`

#### Example - using [\Kendo\Data\DataSource](/api/wrappers/php/kendo/data/datasource)

    <?php
    $resource = new \Kendo\UI\SchedulerResource();
    $dataSource = new \Kendo\Data\DataSource();
    $resource->dataSource($dataSource);
    ?>

#### Example - using array

    <?php
    $resource = new \Kendo\UI\SchedulerResource();
    $schema = new \Kendo\Data\DataSourceSchema();
    $resource->dataSource(array('schema' => $schema));
    ?>

### dataTextField
The field of the resource data item which represents the resource text.

#### Returns
`\Kendo\UI\SchedulerResource`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $resource = new \Kendo\UI\SchedulerResource();
    $resource->dataTextField('value');
    ?>

### dataValueField
The field of the resource data item which represents the resource value. The resource value is used to link a scheduler event with a resource.

#### Returns
`\Kendo\UI\SchedulerResource`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $resource = new \Kendo\UI\SchedulerResource();
    $resource->dataValueField('value');
    ?>

### field
The field of the scheduler event which contains the resource id.

#### Returns
`\Kendo\UI\SchedulerResource`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $resource = new \Kendo\UI\SchedulerResource();
    $resource->field('value');
    ?>

### multiple
If set to true the scheduler event can be assigned multiple instances of the resource. The scheduler event field specified via the field option will contain an array of resources.
By default only one resource instance can be assigned to an event.

#### Returns
`\Kendo\UI\SchedulerResource`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $resource = new \Kendo\UI\SchedulerResource();
    $resource->multiple(true);
    ?>

### name
Tha name of the resource used to distinguish resource. If not set the value of the field option is used.

#### Returns
`\Kendo\UI\SchedulerResource`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $resource = new \Kendo\UI\SchedulerResource();
    $resource->name('value');
    ?>

### title
The user friendly title of the resource displayed in the scheduler edit form. If not set the value of the field option is used.

#### Returns
`\Kendo\UI\SchedulerResource`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $resource = new \Kendo\UI\SchedulerResource();
    $resource->title('value');
    ?>

### valuePrimitive
Set to false if the scheduler event field specified via the field option contains a resource data item.
By default the scheduler expects that field to contain a primitive value (string, number) which corresponds to the "value" of the resource (specified via dataValueField).

#### Returns
`\Kendo\UI\SchedulerResource`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $resource = new \Kendo\UI\SchedulerResource();
    $resource->valuePrimitive(true);
    ?>

