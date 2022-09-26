---
title: scheduler-view-editable
slug: jsp-scheduler-view-editable
tags: api, java
publish: true
---

# \<kendo:scheduler-view-editable\>

If set to true the user would be able to create new scheduler events and modify or delete existing ones.Overrides the editable option of the scheduler.

#### Example
    <kendo:scheduler-view>
        <kendo:scheduler-view-editable></kendo:scheduler-view-editable>
    </kendo:scheduler-view>

## Configuration Attributes

### create `boolean`

If set to true the user can create new events. Creating is enabled by default.

#### Example
    <kendo:scheduler-view-editable create="create">
    </kendo:scheduler-view-editable>

### destroy `boolean`

If set to true the user can delete events from the view by clicking the "destroy" button. Deleting is enabled by default.

#### Example
    <kendo:scheduler-view-editable destroy="destroy">
    </kendo:scheduler-view-editable>

### update `boolean`

If set to true the user can update events. Updating is enabled by default.

#### Example
    <kendo:scheduler-view-editable update="update">
    </kendo:scheduler-view-editable>

