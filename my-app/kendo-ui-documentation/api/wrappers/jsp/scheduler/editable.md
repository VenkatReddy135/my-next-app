---
title: scheduler-editable
slug: jsp-scheduler-editable
tags: api, java
publish: true
---

# \<kendo:scheduler-editable\>

If set to true the user would be able to create new scheduler events and modify or delete existing ones.

#### Example
    <kendo:scheduler>
        <kendo:scheduler-editable></kendo:scheduler-editable>
    </kendo:scheduler>

## Configuration Attributes

### confirmation `java.lang.Object`

If set to true the scheduler will display a confirmation dialog when the user clicks the "destroy" button.Can be set to a string which will be used as the confirmation text.

#### Example
    <kendo:scheduler-editable confirmation="confirmation">
    </kendo:scheduler-editable>

### create `boolean`

If set to true the user can create new events. Creating is enabled by default.

#### Example
    <kendo:scheduler-editable create="create">
    </kendo:scheduler-editable>

### destroy `boolean`

If set to true the user can delete events from the view by clicking the "destroy" button. Deleting is enabled by default.

#### Example
    <kendo:scheduler-editable destroy="destroy">
    </kendo:scheduler-editable>

### resize `boolean`

If set to true the scheduler allows event resizing. Dragging the resize handles changes the start or end time of the event.

#### Example
    <kendo:scheduler-editable resize="resize">
    </kendo:scheduler-editable>

### template `java.lang.String`

The template which renders the editor.The template should contain elements whose name HTML attributes are set as the editable fields. This is how the grid will know
which field to update. The other option is to use MVVM bindings in order to bind HTML elements to data item fields.

#### Example
    <kendo:scheduler-editable template="template">
    </kendo:scheduler-editable>

### update `boolean`

If set to true the user can update events. Updating is enabled by default.

#### Example
    <kendo:scheduler-editable update="update">
    </kendo:scheduler-editable>


## Event Attributes

### template `String`

The template which renders the editor.The template should contain elements whose name HTML attributes are set as the editable fields. This is how the grid will know
which field to update. The other option is to use MVVM bindings in order to bind HTML elements to data item fields.


#### Example
    <kendo:scheduler-editable template="handle_template">
    </kendo:scheduler-editable>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:scheduler-editable-template

The template which renders the editor.The template should contain elements whose name HTML attributes are set as the editable fields. This is how the grid will know
which field to update. The other option is to use MVVM bindings in order to bind HTML elements to data item fields.


#### Example
    <kendo:scheduler-editable>
        <kendo:scheduler-editable-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:scheduler-editable-template>
    </kendo:scheduler-editable>

