---
title: grid-editable
slug: jsp-grid-editable
tags: api, java
publish: true
---

# \<kendo:grid-editable\>

If set to true the user would be able to edit the data to which the grid is bound to. By default editing is disabled.Can be set to a string ("inline", "incell" or "popup") to specify the editing mode. The default editing mode is "incell".Can be set to a JavaScript object which represents the editing configuration.

#### Example
    <kendo:grid>
        <kendo:grid-editable></kendo:grid-editable>
    </kendo:grid>

## Configuration Attributes

### confirmation `java.lang.Object`

If set to true the grid will display a confirmation dialog when the user clicks the "destroy" command button.Can be set to a string which will be used as the confirmation text.

#### Example
    <kendo:grid-editable confirmation="confirmation">
    </kendo:grid-editable>

### createAt `java.lang.String`

The position at which new data items are inserted in the grid. Must be set to either "top" or "bottom". By default new data items are inserted at the top.

#### Example
    <kendo:grid-editable createAt="createAt">
    </kendo:grid-editable>

### destroy `boolean`

If set to true the user can delete data items from the grid by clicking the "destroy" command button. Deleting is enabled by default.

#### Example
    <kendo:grid-editable destroy="destroy">
    </kendo:grid-editable>

### mode `java.lang.String`

The editing mode to use. The supported editing modes are "incell", "inline" and "popup".

#### Example
    <kendo:grid-editable mode="mode">
    </kendo:grid-editable>

### template `java.lang.String`

The template which renders popup editor.The template should contain elements whose name HTML attributes are set as the editable fields. This is how the grid will know
which field to update. The other option is to use MVVM bindings in order to bind HTML elements to data item fields.

#### Example
    <kendo:grid-editable template="template">
    </kendo:grid-editable>

### update `boolean`

If set to true the user can edit data items when editing is enabled.

#### Example
    <kendo:grid-editable update="update">
    </kendo:grid-editable>


## Event Attributes

### template `String`

The template which renders popup editor.The template should contain elements whose name HTML attributes are set as the editable fields. This is how the grid will know
which field to update. The other option is to use MVVM bindings in order to bind HTML elements to data item fields.


#### Example
    <kendo:grid-editable template="handle_template">
    </kendo:grid-editable>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:grid-editable-template

The template which renders popup editor.The template should contain elements whose name HTML attributes are set as the editable fields. This is how the grid will know
which field to update. The other option is to use MVVM bindings in order to bind HTML elements to data item fields.


#### Example
    <kendo:grid-editable>
        <kendo:grid-editable-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:grid-editable-template>
    </kendo:grid-editable>

