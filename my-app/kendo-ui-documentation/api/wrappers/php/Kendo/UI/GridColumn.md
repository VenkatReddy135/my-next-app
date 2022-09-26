---
title: GridColumn
slug: php-ui-gridcolumn
tags: api, php
publish: true
---

# \Kendo\UI\GridColumn

A PHP class representing the column setting of GridColumns.


## Methods

### aggregates
The aggregate(s) which are calculated when the grid is grouped by the columns field.
The supported aggregates are "average", "count", "max", "min" and "sum".

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->aggregates(new array());
    ?>

### attributes
HTML attributes of the table cell (<td>) rendered for the column.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value ``



### addCommandItem

Adds one or more GridColumnCommandItem to the GridColumn.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value[, $value2, ...] `\Kendo\UI\GridColumnCommandItem|array`

#### Example - using \Kendo\UI\GridColumnCommandItem

    <?php
    $column = new \Kendo\UI\GridColumn();
    $commandItem = new \Kendo\UI\GridColumnCommandItem();
    $className = 'value';
    $commandItem->className($className);
    $column->addCommandItem($commandItem);
    ?>

#### Example - using array

    <?php
    $column = new \Kendo\UI\GridColumn();
    $className = 'value';
    $column->addCommandItem(array('className' => $className));
    ?>

#### Example - adding more than one GridColumnCommandItem

    <?php
    $column = new \Kendo\UI\GridColumn();
    $first  = new \Kendo\UI\GridColumnCommandItem();
    $second = new \Kendo\UI\GridColumnCommandItem();
    $column->addCommandItem($first, $second);
    ?>

### editor
Provides a way to specify a custom editing UI for the column. Use the container parameter to create the editing UI.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `\Kendo\JavaScriptFunction`



#### Example 
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->editor(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### encoded
If set to true the column value will be HTML-encoded before it is displayed. If set to false the column value will be displayed as is. By default the column value is HTML-encoded.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->encoded(true);
    ?>

### field
The field to which the column is bound. The value of this field is displayed by the column during data binding.
The field name should be a valid Javascript identifier and should contain no spaces, no special characters, and the first character should be a letter.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->field('value');
    ?>

### filterable

If set to true a filter menu will be displayed for this column when filtering is enabled. If set to false the filter menu will not be displayed. By default a filter menu is displayed
for all columns when filtering is enabled via the filterable option.Can be set to a JavaScript object which represents the filter menu configuration.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `boolean|\Kendo\UI\GridColumnFilterable|array`




#### Example  - using boolean
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->filterable(true);
    ?>


#### Example - using [\Kendo\UI\GridColumnFilterable](/api/wrappers/php/Kendo/UI/GridColumnFilterable)
    <?php
    $column = new \Kendo\UI\GridColumn();
    $filterable = new \Kendo\UI\GridColumnFilterable();
    $ui = 'value';
    $filterable->ui($ui);
    $column->filterable($filterable);
    ?>

#### Example - using array

    <?php
    $column = new \Kendo\UI\GridColumn();
    $ui = 'value';
    $column->filterable(array('ui' => $ui));
    ?>

### footerTemplate
The template which renders the footer table cell for the column.The fields which can be used in the template are:

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->footerTemplate('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->footerTemplate(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### format
The format that is applied to the value before it is displayed. Takes the form "{0:format}" where "format" is a standard number format,
custom number format, standard date format or a custom date format.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->format('value');
    ?>

### groupFooterTemplate
The template which renders the group footer when the grid is grouped by the column field. By default the group footer is not displayed.The fields which can be used in the template are:

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->groupFooterTemplate('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->groupFooterTemplate(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### groupHeaderTemplate
The template which renders the group header when the grid is grouped by the column field. By default the name of the field
and the current group value is displayed.The fields which can be used in the template are:

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->groupHeaderTemplate('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->groupHeaderTemplate(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### headerAttributes
HTML attributes of the column header. The grid renders a table header cell (<th>) for every column. The headerAttributes option can be used to set the HTML attributes of that th.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value ``



### headerTemplate
The template which renders the column header content. By default the value of the title column option
is displayed in the column header cell.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->headerTemplate('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->headerTemplate(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### hidden
If set to true the column will not be displayed in the grid. By default all columns are displayed.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->hidden(true);
    ?>

### menu
If set to true the column will be visible in the grid column menu. By default the column menu includes all data-bound columns (ones that have their field set).

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->menu(true);
    ?>

### sortable
If set to true the user can click the column header and sort the grid by the column field when sorting is enabled. If set to false sorting will
be disabled for this column. By default all columns are sortable if sorting is enabled via the sortable option.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->sortable(true);
    ?>

### template
The template which renders the column content. The grid renders table rows (<tr>) which represent the data source items.
Each table row consists of table cells (<td>) which represent the grid columns. By default the HTML-encoded value of the field is displayed in the column.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### title
The text that is displayed in the column header cell. If not set the field is used.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->title('value');
    ?>

### values
An array of values that will be displayed instead of the bound value. Each item in the array must have a text and value fields.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->values(new array());
    ?>

### width
The width of the column. Numeric values are treated as pixels. Also refer to Column Widths.

#### Returns
`\Kendo\UI\GridColumn`

#### Parameters

##### $value `string|float`



#### Example  - using string
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->width('value');
    ?>

#### Example  - using float
    <?php
    $column = new \Kendo\UI\GridColumn();
    $column->width(1);
    ?>

