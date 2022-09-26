---
title: scheduler-group
slug: jsp-scheduler-group
tags: api, java
publish: true
---

# \<kendo:scheduler-group\>

The configuration of the scheduler resource(s) grouping.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-group></kendo:scheduler-group>
    </kendo:scheduler>

## Configuration Attributes

### orientation `java.lang.String`

The orientation of the group headers. Supported values are horizontal or vertical. Note that the agenda view is always in vertical orientation.

#### Example
    <kendo:scheduler-group orientation="orientation">
    </kendo:scheduler-group>

### resources `java.lang.Object`

An array of resource names by which the scheduler events will be grouped.

#### Example
    <kendo:scheduler-group resources="resources">
    </kendo:scheduler-group>

