---
title: Grid
slug: php-ui-grid
tags: api, php
publish: true
---

# \Kendo\UI\Grid

A PHP wrapper for Kendo UI [Grid](/api/web/grid).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use Grid in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo Grid

    <?php
    // Create a new instance of Grid and specify its id
    $grid = new \Kendo\UI\Grid('Grid');

    // Configure it
    $grid->autoBind(true)

    // Output it

    echo $grid->render();
    ?>


## Methods

### altRowTemplate
The id of the template used for rendering the alternate rows in the grid.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->altRowTemplate('value');
    ?>

### autoBind
If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
data source is fired. By default the widget will bind to the data source specified in the configuration.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->autoBind(true);
    ?>

### cancel
Fired when the user clicks the "cancel" button (in inline or popup editing mode) or closes the popup window.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [cancel](/api/web/grid#events-cancel) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->cancel('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onCancel(e) {
            // handle the cancel event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->cancel('onCancel');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->cancel(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### change
Fired when the user selects a table row or cell in the grid.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [change](/api/web/grid#events-change) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### columnHide
Fired when the user hides a column.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [columnHide](/api/web/grid#events-columnHide) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnHide('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onColumnHide(e) {
            // handle the columnHide event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnHide('onColumnHide');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnHide(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### columnMenu

If set to true the grid will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `boolean|\Kendo\UI\GridColumnMenu|array`




#### Example  - using boolean
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnMenu(true);
    ?>


#### Example - using [\Kendo\UI\GridColumnMenu](/api/wrappers/php/Kendo/UI/GridColumnMenu)
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $columnMenu = new \Kendo\UI\GridColumnMenu();
    $columns = true;
    $columnMenu->columns($columns);
    $grid->columnMenu($columnMenu);
    ?>

#### Example - using array

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $columns = true;
    $grid->columnMenu(array('columns' => $columns));
    ?>

### columnMenuInit
Fired when the column menu is initialized.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [columnMenuInit](/api/web/grid#events-columnMenuInit) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnMenuInit('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onColumnMenuInit(e) {
            // handle the columnMenuInit event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnMenuInit('onColumnMenuInit');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnMenuInit(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### columnReorder
Fired when the user changes the order of a column.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [columnReorder](/api/web/grid#events-columnReorder) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnReorder('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onColumnReorder(e) {
            // handle the columnReorder event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnReorder('onColumnReorder');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnReorder(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### columnResize
Fired when the user resizes a column.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [columnResize](/api/web/grid#events-columnResize) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnResize('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onColumnResize(e) {
            // handle the columnResize event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnResize('onColumnResize');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnResize(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### columnResizeHandleWidth
Defines the width of the column resize handle in pixels. Apply a larger value for easier grasping.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnResizeHandleWidth(1);
    ?>

### columnShow
Fired when the user shows a column.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [columnShow](/api/web/grid#events-columnShow) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnShow('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onColumnShow(e) {
            // handle the columnShow event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnShow('onColumnShow');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->columnShow(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### addColumn

Adds one or more GridColumn to the Grid.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value[, $value2, ...] `\Kendo\UI\GridColumn|array`

#### Example - using \Kendo\UI\GridColumn

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $column = new \Kendo\UI\GridColumn();
    $command = 'value';
    $column->command($command);
    $grid->addColumn($column);
    ?>

#### Example - using array

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $command = 'value';
    $grid->addColumn(array('command' => $command));
    ?>

#### Example - adding more than one GridColumn

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $first  = new \Kendo\UI\GridColumn();
    $second = new \Kendo\UI\GridColumn();
    $grid->addColumn($first, $second);
    ?>

### dataBinding
Fired before the widget binds to its data source.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [dataBinding](/api/web/grid#events-dataBinding) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->dataBinding('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDataBinding(e) {
            // handle the dataBinding event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->dataBinding('onDataBinding');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->dataBinding(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataBound
Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [dataBound](/api/web/grid#events-dataBound) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->dataBound('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDataBound(e) {
            // handle the dataBound event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->dataBound('onDataBound');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->dataBound(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataSource

Sets the data source of the dataSource.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `\Kendo\Data\DataSource|array`

#### Example - using [\Kendo\Data\DataSource](/api/wrappers/php/kendo/data/datasource)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $dataSource = new \Kendo\Data\DataSource();
    $grid->dataSource($dataSource);
    ?>

#### Example - using array

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $schema = new \Kendo\Data\DataSourceSchema();
    $grid->dataSource(array('schema' => $schema));
    ?>

### detailCollapse
Fired when the user collapses a detail table row.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [detailCollapse](/api/web/grid#events-detailCollapse) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->detailCollapse('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDetailCollapse(e) {
            // handle the detailCollapse event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->detailCollapse('onDetailCollapse');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->detailCollapse(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### detailExpand
Fired when the user expands a detail table row.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [detailExpand](/api/web/grid#events-detailExpand) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->detailExpand('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDetailExpand(e) {
            // handle the detailExpand event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->detailExpand('onDetailExpand');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->detailExpand(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### detailInit
Fired when a detail table row is initialized.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [detailInit](/api/web/grid#events-detailInit) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->detailInit('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDetailInit(e) {
            // handle the detailInit event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->detailInit('onDetailInit');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->detailInit(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### detailTemplate
The id of the template used for rendering the detail rows in the grid.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->detailTemplate('value');
    ?>

### edit
Fired when the user edits or creates a data item.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [edit](/api/web/grid#events-edit) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->edit('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onEdit(e) {
            // handle the edit event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->edit('onEdit');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->edit(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### editable

If set to true the user would be able to edit the data to which the grid is bound to. By default editing is disabled.Can be set to a string ("inline", "incell" or "popup") to specify the editing mode. The default editing mode is "incell".Can be set to a JavaScript object which represents the editing configuration.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `boolean|\Kendo\UI\GridEditable|array`




#### Example  - using boolean
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->editable(true);
    ?>


#### Example - using [\Kendo\UI\GridEditable](/api/wrappers/php/Kendo/UI/GridEditable)
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $editable = new \Kendo\UI\GridEditable();
    $confirmation = true;
    $editable->confirmation($confirmation);
    $grid->editable($editable);
    ?>

#### Example - using array

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $confirmation = true;
    $grid->editable(array('confirmation' => $confirmation));
    ?>

### filterMenuInit
Fired when the grid filter menu is initialized.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [filterMenuInit](/api/web/grid#events-filterMenuInit) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->filterMenuInit('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onFilterMenuInit(e) {
            // handle the filterMenuInit event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->filterMenuInit('onFilterMenuInit');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->filterMenuInit(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### filterable

If set to true the user can filter the data source using the grid filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `boolean|\Kendo\UI\GridFilterable|array`




#### Example  - using boolean
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->filterable(true);
    ?>


#### Example - using [\Kendo\UI\GridFilterable](/api/wrappers/php/Kendo/UI/GridFilterable)
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $filterable = new \Kendo\UI\GridFilterable();
    $extra = true;
    $filterable->extra($extra);
    $grid->filterable($filterable);
    ?>

#### Example - using array

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $extra = true;
    $grid->filterable(array('extra' => $extra));
    ?>

### groupable

If set to true the user could group the grid by dragging the column header cells. By default grouping is disabled.Can be set to a JavaScript object which represents the grouping configuration.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `boolean|\Kendo\UI\GridGroupable|array`




#### Example  - using boolean
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->groupable(true);
    ?>


#### Example - using [\Kendo\UI\GridGroupable](/api/wrappers/php/Kendo/UI/GridGroupable)
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $groupable = new \Kendo\UI\GridGroupable();
    $messages = new \Kendo\UI\GridGroupableMessages();
    $groupable->messages($messages);
    $grid->groupable($groupable);
    ?>

#### Example - using array

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $messages = new \Kendo\UI\GridGroupableMessages();
    $grid->groupable(array('messages' => $messages));
    ?>

### height
The height of the grid. Numeric values are treated as pixels.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `float|string`



#### Example  - using float
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->height(1);
    ?>

#### Example  - using string
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->height('value');
    ?>

### navigatable
If set to true the use could navigate the widget using the keyboard navigation. By default keyboard navigation is disabled.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->navigatable(true);
    ?>

### pageable

If set to true the grid will display a pager. By default paging is disabled.Can be set to a JavaScript object which represents the pager configuration.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `boolean|\Kendo\UI\GridPageable|array`




#### Example  - using boolean
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->pageable(true);
    ?>


#### Example - using [\Kendo\UI\GridPageable](/api/wrappers/php/Kendo/UI/GridPageable)
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $pageable = new \Kendo\UI\GridPageable();
    $buttonCount = 1;
    $pageable->buttonCount($buttonCount);
    $grid->pageable($pageable);
    ?>

#### Example - using array

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $buttonCount = 1;
    $grid->pageable(array('buttonCount' => $buttonCount));
    ?>

### remove
Fired when the user clicks the "destroy" command button.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [remove](/api/web/grid#events-remove) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->remove('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onRemove(e) {
            // handle the remove event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->remove('onRemove');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->remove(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### reorderable
If set to true the user could reorder the columns by dragging their header cells. By default reordering is disabled.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->reorderable(true);
    ?>

### resizable
If set to true the user could resize the columns by dragging the edges of their header cells. By default resizing is disabled.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->resizable(true);
    ?>

### rowTemplate
The id of the template used for rendering the rows in the grid.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->rowTemplate('value');
    ?>

### save
Fired when a data item is saved.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [save](/api/web/grid#events-save) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->save('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSave(e) {
            // handle the save event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->save('onSave');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->save(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### saveChanges
Fired when the user clicks the "save" command button.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [saveChanges](/api/web/grid#events-saveChanges) event documentation.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->saveChanges('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSaveChanges(e) {
            // handle the saveChanges event.
        }
    </script>
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->saveChanges('onSaveChanges');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->saveChanges(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### scrollable

If set to true the grid will display a scrollbar when the total row height (or width) exceeds the grid height (or width). By default scrolling is enabled.Can be set to a JavaScript object which represents the scrolling configuration.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `boolean|\Kendo\UI\GridScrollable|array`




#### Example  - using boolean
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->scrollable(true);
    ?>


#### Example - using [\Kendo\UI\GridScrollable](/api/wrappers/php/Kendo/UI/GridScrollable)
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $scrollable = new \Kendo\UI\GridScrollable();
    $virtual = true;
    $scrollable->virtual($virtual);
    $grid->scrollable($scrollable);
    ?>

#### Example - using array

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $virtual = true;
    $grid->scrollable(array('virtual' => $virtual));
    ?>

### selectable
If set to true the user would be able to select grid rows. By default selection is disabled.Can also be set to the following string values:

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `boolean|string`



#### Example  - using boolean
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->selectable(true);
    ?>

#### Example  - using string
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->selectable('value');
    ?>

### sortable

If set to true the user could sort the grid by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value `boolean|\Kendo\UI\GridSortable|array`




#### Example  - using boolean
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $grid->sortable(true);
    ?>


#### Example - using [\Kendo\UI\GridSortable](/api/wrappers/php/Kendo/UI/GridSortable)
    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $sortable = new \Kendo\UI\GridSortable();
    $allowUnsort = true;
    $sortable->allowUnsort($allowUnsort);
    $grid->sortable($sortable);
    ?>

#### Example - using array

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $allowUnsort = true;
    $grid->sortable(array('allowUnsort' => $allowUnsort));
    ?>

### addToolbarItem

Adds one or more GridToolbarItem to the Grid.

#### Returns
`\Kendo\UI\Grid`

#### Parameters

##### $value[, $value2, ...] `\Kendo\UI\GridToolbarItem|array`

#### Example - using \Kendo\UI\GridToolbarItem

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $toolbarItem = new \Kendo\UI\GridToolbarItem();
    $name = 'value';
    $toolbarItem->name($name);
    $grid->addToolbarItem($toolbarItem);
    ?>

#### Example - using array

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $name = 'value';
    $grid->addToolbarItem(array('name' => $name));
    ?>

#### Example - adding more than one GridToolbarItem

    <?php
    $grid = new \Kendo\UI\Grid('Grid');
    $first  = new \Kendo\UI\GridToolbarItem();
    $second = new \Kendo\UI\GridToolbarItem();
    $grid->addToolbarItem($first, $second);
    ?>

