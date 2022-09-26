---
title: stockChart-navigator-hint
slug: jsp-stockChart-navigator-hint
tags: api, java
publish: true
---

# \<kendo:stockChart-navigator-hint\>

Default options for the navigator hint.

#### Example
    <kendo:stockChart-navigator>
        <kendo:stockChart-navigator-hint></kendo:stockChart-navigator-hint>
    </kendo:stockChart-navigator>

## Configuration Attributes

### format `java.lang.String`

The format of the hint.

#### Example
    <kendo:stockChart-navigator-hint format="format">
    </kendo:stockChart-navigator-hint>

### template `java.lang.String`

The hint template.
Template variables:

#### Example
    <kendo:stockChart-navigator-hint template="template">
    </kendo:stockChart-navigator-hint>

### visible `boolean`

The visibility of the hint.

#### Example
    <kendo:stockChart-navigator-hint visible="visible">
    </kendo:stockChart-navigator-hint>


## Event Attributes

### template `String`

The hint template.
Template variables:


#### Example
    <kendo:stockChart-navigator-hint template="handle_template">
    </kendo:stockChart-navigator-hint>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:stockChart-navigator-hint-template

The hint template.
Template variables:


#### Example
    <kendo:stockChart-navigator-hint>
        <kendo:stockChart-navigator-hint-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:stockChart-navigator-hint-template>
    </kendo:stockChart-navigator-hint>

