---
title: calendar-month
slug: jsp-calendar-month
tags: api, java
publish: true
---

# \<kendo:calendar-month\>

Templates for the cells rendered in "month" view.

#### Example
    <kendo:calendar>
        <kendo:calendar-month></kendo:calendar-month>
    </kendo:calendar>

## Configuration Attributes

### content `java.lang.String`

The template to be used for rendering the cells in "month" view, which are between the min/max range.
 By default, the widget renders the value of the corresponding day.

#### Example
    <kendo:calendar-month content="content">
    </kendo:calendar-month>

### empty `java.lang.String`

The template to be used for rendering the cells in the "month" view, which are not in the min/max range.
 By default, the widget renders an empty string.

#### Example
    <kendo:calendar-month empty="empty">
    </kendo:calendar-month>

