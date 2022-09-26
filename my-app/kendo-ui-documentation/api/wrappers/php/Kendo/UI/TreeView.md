---
title: TreeView
slug: php-ui-treeview
tags: api, php
publish: true
---

# \Kendo\UI\TreeView

A PHP wrapper for Kendo UI [TreeView](/api/web/treeview).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use TreeView in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo TreeView

    <?php
    // Create a new instance of TreeView and specify its id
    $treeView = new \Kendo\UI\TreeView('TreeView');

    // Configure it
    $treeView->animation(true)

    // Output it

    echo $treeView->render();
    ?>


## Methods

### animation

A collection of visual animations used when items are expanded or collapsed through user interaction.
Setting this option to false will disable all animations.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `boolean|\Kendo\UI\TreeViewAnimation|array`




#### Example  - using boolean
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->animation(true);
    ?>


#### Example - using [\Kendo\UI\TreeViewAnimation](/api/wrappers/php/Kendo/UI/TreeViewAnimation)
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $animation = new \Kendo\UI\TreeViewAnimation();
    $collapse = true;
    $animation->collapse($collapse);
    $treeView->animation($animation);
    ?>

#### Example - using array

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $collapse = true;
    $treeView->animation(array('collapse' => $collapse));
    ?>

### autoBind
If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
data source is fired. By default the widget will bind to the data source specified in the configuration.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->autoBind(true);
    ?>

### change
Triggered when the selection has changed (either by the user or through the select method).
For additional information check the [change](/api/web/treeview#events-change) event documentation.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### checkboxes

If true or an object, renders checkboxes beside each node.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `boolean|\Kendo\UI\TreeViewCheckboxes|array`




#### Example  - using boolean
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->checkboxes(true);
    ?>


#### Example - using [\Kendo\UI\TreeViewCheckboxes](/api/wrappers/php/Kendo/UI/TreeViewCheckboxes)
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $checkboxes = new \Kendo\UI\TreeViewCheckboxes();
    $checkChildren = true;
    $checkboxes->checkChildren($checkChildren);
    $treeView->checkboxes($checkboxes);
    ?>

#### Example - using array

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $checkChildren = true;
    $treeView->checkboxes(array('checkChildren' => $checkChildren));
    ?>

### collapse
Triggered before a subgroup gets collapsed.
For additional information check the [collapse](/api/web/treeview#events-collapse) event documentation.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->collapse('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onCollapse(e) {
            // handle the collapse event.
        }
    </script>
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->collapse('onCollapse');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->collapse(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataBound
Triggered after the dataSource change event has been processed (adding/removing items);
For additional information check the [dataBound](/api/web/treeview#events-dataBound) event documentation.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dataBound('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDataBound(e) {
            // handle the dataBound event.
        }
    </script>
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dataBound('onDataBound');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dataBound(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataImageUrlField
Sets the field of the data item that provides the image URL of the treeview nodes.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dataImageUrlField('value');
    ?>

### dataSource

Sets the data source of the dataSource.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `\Kendo\Data\HierarchicalDataSource|array`

#### Example - using [\Kendo\Data\HierarchicalDataSource](/api/wrappers/php/kendo/data/hierarchicaldatasource)

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $dataSource = new \Kendo\Data\HierarchicalDataSource();
    $treeView->dataSource($dataSource);
    ?>

#### Example - using array

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $schema = new \Kendo\Data\DataSourceSchema();
    $treeView->dataSource(array('schema' => $schema));
    ?>

### dataSpriteCssClassField
Sets the field of the data item that provides the sprite CSS class of the nodes.
If an array, each level uses the field that is at the same index in the array, or the last item in the array.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dataSpriteCssClassField('value');
    ?>

### dataTextField
Sets the field of the data item that provides the text content of the nodes.
If an array, each level uses the field that is at the same index in the array, or the last item in the array.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string|array`



#### Example  - using string
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dataTextField('value');
    ?>

#### Example  - using array
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dataTextField(new array());
    ?>

### dataUrlField
Sets the field of the data item that provides the link URL of the nodes.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dataUrlField('value');
    ?>

### drag
Triggered while a node is being dragged.
For additional information check the [drag](/api/web/treeview#events-drag) event documentation.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->drag('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDrag(e) {
            // handle the drag event.
        }
    </script>
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->drag('onDrag');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->drag(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dragAndDrop
Disables (false) or enables (true) drag-and-drop of the nodes.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dragAndDrop(true);
    ?>

### dragend
Triggered after a node has been dropped.
For additional information check the [dragend](/api/web/treeview#events-dragend) event documentation.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dragend('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDragend(e) {
            // handle the dragend event.
        }
    </script>
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dragend('onDragend');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dragend(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dragstart
Triggered before the dragging of a node starts.
For additional information check the [dragstart](/api/web/treeview#events-dragstart) event documentation.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dragstart('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDragstart(e) {
            // handle the dragstart event.
        }
    </script>
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dragstart('onDragstart');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->dragstart(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### drop
Triggered when a node is being dropped.
For additional information check the [drop](/api/web/treeview#events-drop) event documentation.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->drop('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDrop(e) {
            // handle the drop event.
        }
    </script>
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->drop('onDrop');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->drop(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### expand
Triggered before a subgroup gets expanded.
For additional information check the [expand](/api/web/treeview#events-expand) event documentation.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->expand('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onExpand(e) {
            // handle the expand event.
        }
    </script>
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->expand('onExpand');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->expand(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### addItem

Adds one or more TreeViewItem to the TreeView.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value[, $value2, ...] `\Kendo\UI\TreeViewItem|array`

#### Example - using \Kendo\UI\TreeViewItem

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $item = new \Kendo\UI\TreeViewItem();
    $enabled = true;
    $item->enabled($enabled);
    $treeView->addItem($item);
    ?>

#### Example - using array

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $enabled = true;
    $treeView->addItem(array('enabled' => $enabled));
    ?>

#### Example - adding more than one TreeViewItem

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $first  = new \Kendo\UI\TreeViewItem();
    $second = new \Kendo\UI\TreeViewItem();
    $treeView->addItem($first, $second);
    ?>

### loadOnDemand
Indicates whether the child datasources should be fetched lazily when parent groups get expanded.
Setting this to false causes all child dataSources to be loaded at initialization time.
Note: when initializing the widget from an array (rather than from a HierarchicalDataSource instance), this option defaults to false, rather than true.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->loadOnDemand(true);
    ?>

### navigate
Triggered when the user moves the focus on another node
For additional information check the [navigate](/api/web/treeview#events-navigate) event documentation.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->navigate('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onNavigate(e) {
            // handle the navigate event.
        }
    </script>
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->navigate('onNavigate');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->navigate(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### select
Triggered when a node is being selected by the user. Cancellable.
For additional information check the [select](/api/web/treeview#events-select) event documentation.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->select('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelect(e) {
            // handle the select event.
        }
    </script>
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->select('onSelect');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->select(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### template
Template for rendering each node.

#### Returns
`\Kendo\UI\TreeView`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $treeView = new \Kendo\UI\TreeView('TreeView');
    $treeView->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

