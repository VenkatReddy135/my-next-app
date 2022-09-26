---
title: grid-column
slug: jsp-grid-column
tags: api, java
publish: true
---

# \<kendo:grid-column\>

The configuration of the grid columns. An array of JavaScript objects or strings. A JavaScript objects are interpreted as column configurations. Strings are interpreted as the
field to which the column is bound. The grid will create a column for every item of the array.

#### Example
    <kendo:grid-columns>
        <kendo:grid-column></kendo:grid-column>
    </kendo:grid-columns>

## Configuration Attributes

### aggregates `java.lang.Object`

The aggregate(s) which are calculated when the grid is grouped by the columns field.
The supported aggregates are "average", "count", "max", "min" and "sum".

#### Example
    <kendo:grid-column aggregates="aggregates">
    </kendo:grid-column>

### attributes `java.lang.Object`

HTML attributes of the table cell (<td>) rendered for the column.

#### Example
    <kendo:grid-column attributes="attributes">
    </kendo:grid-column>

### command `java.lang.String`

The configuration of the column command(s). If set the column would display a button for every command. Commands can be custom or built-in ("edit" or "destroy").The "edit" built-in command switches the current table row in edit mode.The "destroy" built-in command removes the data item to which the current table row is bound.Custom commands are supported by specifying the click option. Further configuration is available via [kendo:grid-column-command](#kendo-grid-column-command). 

#### Example
    <kendo:grid-column command="command">
    </kendo:grid-column>

### editor `java.lang.String`

Provides a way to specify a custom editing UI for the column. Use the container parameter to create the editing UI.

#### Example
    <kendo:grid-column editor="editor">
    </kendo:grid-column>

### encoded `boolean`

If set to true the column value will be HTML-encoded before it is displayed. If set to false the column value will be displayed as is. By default the column value is HTML-encoded.

#### Example
    <kendo:grid-column encoded="encoded">
    </kendo:grid-column>

### field `java.lang.String`

The field to which the column is bound. The value of this field is displayed by the column during data binding.
The field name should be a valid Javascript identifier and should contain no spaces, no special characters, and the first character should be a letter.

#### Example
    <kendo:grid-column field="field">
    </kendo:grid-column>

### filterable `boolean`

If set to true a filter menu will be displayed for this column when filtering is enabled. If set to false the filter menu will not be displayed. By default a filter menu is displayed
for all columns when filtering is enabled via the filterable option.Can be set to a JavaScript object which represents the filter menu configuration. Further configuration is available via [kendo:grid-column-filterable](#kendo-grid-column-filterable). 

#### Example
    <kendo:grid-column filterable="filterable">
    </kendo:grid-column>

### footerTemplate `java.lang.String`

The template which renders the footer table cell for the column.The fields which can be used in the template are:

#### Example
    <kendo:grid-column footerTemplate="footerTemplate">
    </kendo:grid-column>

### format `java.lang.String`

The format that is applied to the value before it is displayed. Takes the form "{0:format}" where "format" is a standard number format,
custom number format, standard date format or a custom date format.

#### Example
    <kendo:grid-column format="format">
    </kendo:grid-column>

### groupFooterTemplate `java.lang.String`

The template which renders the group footer when the grid is grouped by the column field. By default the group footer is not displayed.The fields which can be used in the template are:

#### Example
    <kendo:grid-column groupFooterTemplate="groupFooterTemplate">
    </kendo:grid-column>

### groupHeaderTemplate `java.lang.String`

The template which renders the group header when the grid is grouped by the column field. By default the name of the field
and the current group value is displayed.The fields which can be used in the template are:

#### Example
    <kendo:grid-column groupHeaderTemplate="groupHeaderTemplate">
    </kendo:grid-column>

### headerAttributes `java.lang.Object`

HTML attributes of the column header. The grid renders a table header cell (<th>) for every column. The headerAttributes option can be used to set the HTML attributes of that th.

#### Example
    <kendo:grid-column headerAttributes="headerAttributes">
    </kendo:grid-column>

### headerTemplate `java.lang.String`

The template which renders the column header content. By default the value of the title column option
is displayed in the column header cell.

#### Example
    <kendo:grid-column headerTemplate="headerTemplate">
    </kendo:grid-column>

### hidden `boolean`

If set to true the column will not be displayed in the grid. By default all columns are displayed.

#### Example
    <kendo:grid-column hidden="hidden">
    </kendo:grid-column>

### menu `boolean`

If set to true the column will be visible in the grid column menu. By default the column menu includes all data-bound columns (ones that have their field set).

#### Example
    <kendo:grid-column menu="menu">
    </kendo:grid-column>

### sortable `boolean`

If set to true the user can click the column header and sort the grid by the column field when sorting is enabled. If set to false sorting will
be disabled for this column. By default all columns are sortable if sorting is enabled via the sortable option.

#### Example
    <kendo:grid-column sortable="sortable">
    </kendo:grid-column>

### template `java.lang.String`

The template which renders the column content. The grid renders table rows (<tr>) which represent the data source items.
Each table row consists of table cells (<td>) which represent the grid columns. By default the HTML-encoded value of the field is displayed in the column.

#### Example
    <kendo:grid-column template="template">
    </kendo:grid-column>

### title `java.lang.String`

The text that is displayed in the column header cell. If not set the field is used.

#### Example
    <kendo:grid-column title="title">
    </kendo:grid-column>

### width `java.lang.Object`

The width of the column. Numeric values are treated as pixels. Also refer to Column Widths.

#### Example
    <kendo:grid-column width="width">
    </kendo:grid-column>


##  Configuration JSP Tags

### kendo:grid-column-command

The configuration of the column command(s). If set the column would display a button for every command. Commands can be custom or built-in ("edit" or "destroy").The "edit" built-in command switches the current table row in edit mode.The "destroy" built-in command removes the data item to which the current table row is bound.Custom commands are supported by specifying the click option.

More documentation is available at [kendo:grid-column-command](grid/column-command).

#### Example

    <kendo:grid-column>
        <kendo:grid-column-command></kendo:grid-column-command>
    </kendo:grid-column>

### kendo:grid-column-filterable

If set to true a filter menu will be displayed for this column when filtering is enabled. If set to false the filter menu will not be displayed. By default a filter menu is displayed
for all columns when filtering is enabled via the filterable option.Can be set to a JavaScript object which represents the filter menu configuration.

More documentation is available at [kendo:grid-column-filterable](grid/column-filterable).

#### Example

    <kendo:grid-column>
        <kendo:grid-column-filterable></kendo:grid-column-filterable>
    </kendo:grid-column>


## Event Attributes

### editor `String`

Provides a way to specify a custom editing UI for the column. Use the container parameter to create the editing UI.


#### Example
    <kendo:grid-column editor="handle_editor">
    </kendo:grid-column>
    <script>
        function handle_editor(e) {
            // Code to handle the editor event.
        }
    </script>

### footerTemplate `String`

The template which renders the footer table cell for the column.The fields which can be used in the template are:


#### Example
    <kendo:grid-column footerTemplate="handle_footerTemplate">
    </kendo:grid-column>
    <script>
        function handle_footerTemplate(e) {
            // Code to handle the footerTemplate event.
        }
    </script>

### groupHeaderTemplate `String`

The template which renders the group header when the grid is grouped by the column field. By default the name of the field
and the current group value is displayed.The fields which can be used in the template are:


#### Example
    <kendo:grid-column groupHeaderTemplate="handle_groupHeaderTemplate">
    </kendo:grid-column>
    <script>
        function handle_groupHeaderTemplate(e) {
            // Code to handle the groupHeaderTemplate event.
        }
    </script>

### groupFooterTemplate `String`

The template which renders the group footer when the grid is grouped by the column field. By default the group footer is not displayed.The fields which can be used in the template are:


#### Example
    <kendo:grid-column groupFooterTemplate="handle_groupFooterTemplate">
    </kendo:grid-column>
    <script>
        function handle_groupFooterTemplate(e) {
            // Code to handle the groupFooterTemplate event.
        }
    </script>

### headerTemplate `String`

The template which renders the column header content. By default the value of the title column option
is displayed in the column header cell.


#### Example
    <kendo:grid-column headerTemplate="handle_headerTemplate">
    </kendo:grid-column>
    <script>
        function handle_headerTemplate(e) {
            // Code to handle the headerTemplate event.
        }
    </script>

### template `String`

The template which renders the column content. The grid renders table rows (<tr>) which represent the data source items.
Each table row consists of table cells (<td>) which represent the grid columns. By default the HTML-encoded value of the field is displayed in the column.


#### Example
    <kendo:grid-column template="handle_template">
    </kendo:grid-column>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:grid-column-editor

Provides a way to specify a custom editing UI for the column. Use the container parameter to create the editing UI.


#### Example
    <kendo:grid-column>
        <kendo:grid-column-editor>
            <script>
                function(e) {
                    // Code to handle the editor event.
                }
            </script>
        </kendo:grid-column-editor>
    </kendo:grid-column>

### kendo:grid-column-footerTemplate

The template which renders the footer table cell for the column.The fields which can be used in the template are:


#### Example
    <kendo:grid-column>
        <kendo:grid-column-footerTemplate>
            <script>
                function(e) {
                    // Code to handle the footerTemplate event.
                }
            </script>
        </kendo:grid-column-footerTemplate>
    </kendo:grid-column>

### kendo:grid-column-groupHeaderTemplate

The template which renders the group header when the grid is grouped by the column field. By default the name of the field
and the current group value is displayed.The fields which can be used in the template are:


#### Example
    <kendo:grid-column>
        <kendo:grid-column-groupHeaderTemplate>
            <script>
                function(e) {
                    // Code to handle the groupHeaderTemplate event.
                }
            </script>
        </kendo:grid-column-groupHeaderTemplate>
    </kendo:grid-column>

### kendo:grid-column-groupFooterTemplate

The template which renders the group footer when the grid is grouped by the column field. By default the group footer is not displayed.The fields which can be used in the template are:


#### Example
    <kendo:grid-column>
        <kendo:grid-column-groupFooterTemplate>
            <script>
                function(e) {
                    // Code to handle the groupFooterTemplate event.
                }
            </script>
        </kendo:grid-column-groupFooterTemplate>
    </kendo:grid-column>

### kendo:grid-column-headerTemplate

The template which renders the column header content. By default the value of the title column option
is displayed in the column header cell.


#### Example
    <kendo:grid-column>
        <kendo:grid-column-headerTemplate>
            <script>
                function(e) {
                    // Code to handle the headerTemplate event.
                }
            </script>
        </kendo:grid-column-headerTemplate>
    </kendo:grid-column>

### kendo:grid-column-template

The template which renders the column content. The grid renders table rows (<tr>) which represent the data source items.
Each table row consists of table cells (<td>) which represent the grid columns. By default the HTML-encoded value of the field is displayed in the column.


#### Example
    <kendo:grid-column>
        <kendo:grid-column-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:grid-column-template>
    </kendo:grid-column>

