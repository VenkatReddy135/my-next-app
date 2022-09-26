---
title: ListView
slug: php-ui-listview
tags: api, php
publish: true
---

# \Kendo\UI\ListView

A PHP wrapper for Kendo UI [ListView](/api/web/listview).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use ListView in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo ListView

    <?php
    // Create a new instance of ListView and specify its id
    $listView = new \Kendo\UI\ListView('ListView');

    // Configure it
    $listView->autoBind(true)

    // Output it

    echo $listView->render();
    ?>


## Methods

### altTemplate
Template to be used for rendering the alternate items in the listview.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->altTemplate('value');
    ?>

### autoBind
If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
data source is fired. By default the widget will bind to the data source specified in the configuration.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->autoBind(true);
    ?>

### cancel
Fired when the user clicks the "cancel" button.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [cancel](/api/web/listview#events-cancel) event documentation.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->cancel('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onCancel(e) {
            // handle the cancel event.
        }
    </script>
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->cancel('onCancel');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->cancel(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### change
Fires when the list view selection has changed.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [change](/api/web/listview#events-change) event documentation.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataBinding
Fires when the list view is about to be rendered.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [dataBinding](/api/web/listview#events-dataBinding) event documentation.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->dataBinding('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDataBinding(e) {
            // handle the dataBinding event.
        }
    </script>
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->dataBinding('onDataBinding');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->dataBinding(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataBound
Fires when the list view has received data from the data source and it is already rendered.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [dataBound](/api/web/listview#events-dataBound) event documentation.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->dataBound('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDataBound(e) {
            // handle the dataBound event.
        }
    </script>
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->dataBound('onDataBound');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->dataBound(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataSource

Sets the data source of the dataSource.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `\Kendo\Data\DataSource|array`

#### Example - using [\Kendo\Data\DataSource](/api/wrappers/php/kendo/data/datasource)

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $dataSource = new \Kendo\Data\DataSource();
    $listView->dataSource($dataSource);
    ?>

#### Example - using array

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $schema = new \Kendo\Data\DataSourceSchema();
    $listView->dataSource(array('schema' => $schema));
    ?>

### edit
Fires when the list view enters edit mode.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [edit](/api/web/listview#events-edit) event documentation.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->edit('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onEdit(e) {
            // handle the edit event.
        }
    </script>
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->edit('onEdit');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->edit(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### editTemplate
Specifies ListView item template in edit mode.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->editTemplate('value');
    ?>

### navigatable
Indicates whether keyboard navigation is enabled/disabled.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->navigatable(true);
    ?>

### pageable

Indicates whether paging is enabled/disabled.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `boolean|\Kendo\UI\ListViewPageable|array`




#### Example  - using boolean
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->pageable(true);
    ?>


#### Example - using [\Kendo\UI\ListViewPageable](/api/wrappers/php/Kendo/UI/ListViewPageable)
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $pageable = new \Kendo\UI\ListViewPageable();
    $buttonCount = 1;
    $pageable->buttonCount($buttonCount);
    $listView->pageable($pageable);
    ?>

#### Example - using array

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $buttonCount = 1;
    $listView->pageable(array('buttonCount' => $buttonCount));
    ?>

### remove
Fires before the list view item is removed. If it is not prevented will call DataSource sync method.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [remove](/api/web/listview#events-remove) event documentation.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->remove('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onRemove(e) {
            // handle the remove event.
        }
    </script>
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->remove('onRemove');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->remove(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### save
Fired when a data item is saved.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [save](/api/web/listview#events-save) event documentation.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->save('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSave(e) {
            // handle the save event.
        }
    </script>
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->save('onSave');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->save(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### selectable
Indicates whether selection is enabled/disabled. Possible values:

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `boolean|string`



#### Example  - using boolean
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->selectable(true);
    ?>

#### Example  - using string
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->selectable('value');
    ?>

### tagName
Specifies ListView wrapper element tag name.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->tagName('value');
    ?>

### template
The id of the template used for rendering the items in the listview.

#### Returns
`\Kendo\UI\ListView`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $listView = new \Kendo\UI\ListView('ListView');
    $listView->template('value');
    ?>

