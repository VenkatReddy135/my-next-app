---
title: grid-column-filterable
slug: jsp-grid-column-filterable
tags: api, java
publish: true
---

# \<kendo:grid-column-filterable\>

If set to true a filter menu will be displayed for this column when filtering is enabled. If set to false the filter menu will not be displayed. By default a filter menu is displayed
for all columns when filtering is enabled via the filterable option.Can be set to a JavaScript object which represents the filter menu configuration.

#### Example
    <kendo:grid-column>
        <kendo:grid-column-filterable></kendo:grid-column-filterable>
    </kendo:grid-column>

## Configuration Attributes

### ui `java.lang.String`

The role data attribute of the widget used in the filter menu or a JavaScript function which initializes that widget.

#### Example
    <kendo:grid-column-filterable ui="ui">
    </kendo:grid-column-filterable>


## Event Attributes

### ui `String`

The role data attribute of the widget used in the filter menu or a JavaScript function which initializes that widget.


#### Example
    <kendo:grid-column-filterable ui="handle_ui">
    </kendo:grid-column-filterable>
    <script>
        function handle_ui(e) {
            // Code to handle the ui event.
        }
    </script>

## Event Tags

### kendo:grid-column-filterable-ui

The role data attribute of the widget used in the filter menu or a JavaScript function which initializes that widget.


#### Example
    <kendo:grid-column-filterable>
        <kendo:grid-column-filterable-ui>
            <script>
                function(e) {
                    // Code to handle the ui event.
                }
            </script>
        </kendo:grid-column-filterable-ui>
    </kendo:grid-column-filterable>

