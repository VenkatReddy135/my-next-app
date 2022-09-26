---
title: grid-toolbarItem
slug: jsp-grid-toolbarItem
tags: api, java
publish: true
---

# \<kendo:grid-toolbarItem\>

The list of commands displayed in the grid toolbar. Commands can be custom or built-in ("cancel", "create", "save").The "cancel" built-in command reverts any data changes done by the end user.The "create" command adds an empty data item to the grid.The "save" command persists any data changes done by the end user.

#### Example
    <kendo:grid-toolbar>
        <kendo:grid-toolbarItem></kendo:grid-toolbarItem>
    </kendo:grid-toolbar>

## Configuration Attributes

### name `java.lang.String`

The name of the toolbar command. Either a built-in ("cancel", "create" and "save") or custom.

#### Example
    <kendo:grid-toolbarItem name="name">
    </kendo:grid-toolbarItem>

### template `java.lang.String`

The template which renders the command. Be default renders a button.

#### Example
    <kendo:grid-toolbarItem template="template">
    </kendo:grid-toolbarItem>

### text `java.lang.String`

The text displayed by the command button. If not set the name` option would be used as the button text instead.

#### Example
    <kendo:grid-toolbarItem text="text">
    </kendo:grid-toolbarItem>


## Event Attributes

### template `String`

The template which renders the command. Be default renders a button.


#### Example
    <kendo:grid-toolbarItem template="handle_template">
    </kendo:grid-toolbarItem>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:grid-toolbarItem-template

The template which renders the command. Be default renders a button.


#### Example
    <kendo:grid-toolbarItem>
        <kendo:grid-toolbarItem-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:grid-toolbarItem-template>
    </kendo:grid-toolbarItem>

