---
title: scheduler-resource
slug: jsp-scheduler-resource
tags: api, java
publish: true
---

# \<kendo:scheduler-resource\>

The configuration of the scheduler resource(s). A scheduler resource is optional metadata that can be associated
with a scheduler event.

#### Example
    <kendo:scheduler-resources>
        <kendo:scheduler-resource></kendo:scheduler-resource>
    </kendo:scheduler-resources>

## Configuration Attributes

### dataColorField `java.lang.String`

The field of the resource data item which contains the resource color.

#### Example
    <kendo:scheduler-resource dataColorField="dataColorField">
    </kendo:scheduler-resource>

### dataTextField `java.lang.String`

The field of the resource data item which represents the resource text.

#### Example
    <kendo:scheduler-resource dataTextField="dataTextField">
    </kendo:scheduler-resource>

### dataValueField `java.lang.String`

The field of the resource data item which represents the resource value. The resource value is used to link a scheduler event with a resource.

#### Example
    <kendo:scheduler-resource dataValueField="dataValueField">
    </kendo:scheduler-resource>

### field `java.lang.String`

The field of the scheduler event which contains the resource id.

#### Example
    <kendo:scheduler-resource field="field">
    </kendo:scheduler-resource>

### multiple `boolean`

If set to true the scheduler event can be assigned multiple instances of the resource. The scheduler event field specified via the field option will contain an array of resources.
By default only one resource instance can be assigned to an event.

#### Example
    <kendo:scheduler-resource multiple="multiple">
    </kendo:scheduler-resource>

### name `java.lang.String`

Tha name of the resource used to distinguish resource. If not set the value of the field option is used.

#### Example
    <kendo:scheduler-resource name="name">
    </kendo:scheduler-resource>

### title `java.lang.String`

The user friendly title of the resource displayed in the scheduler edit form. If not set the value of the field option is used.

#### Example
    <kendo:scheduler-resource title="title">
    </kendo:scheduler-resource>

### valuePrimitive `boolean`

Set to false if the scheduler event field specified via the field option contains a resource data item.
By default the scheduler expects that field to contain a primitive value (string, number) which corresponds to the "value" of the resource (specified via dataValueField).

#### Example
    <kendo:scheduler-resource valuePrimitive="valuePrimitive">
    </kendo:scheduler-resource>

