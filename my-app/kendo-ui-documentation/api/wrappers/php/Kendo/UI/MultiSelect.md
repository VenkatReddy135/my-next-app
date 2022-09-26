---
title: MultiSelect
slug: php-ui-multiselect
tags: api, php
publish: true
---

# \Kendo\UI\MultiSelect

A PHP wrapper for Kendo UI [MultiSelect](/api/web/multiselect).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use MultiSelect in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo MultiSelect

    <?php
    // Create a new instance of MultiSelect and specify its id
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');

    // Configure it
    $multiSelect->autoBind(true)

    // Output it

    echo $multiSelect->render();
    ?>


## Methods

### animation

Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `\Kendo\UI\MultiSelectAnimation|array`


#### Example - using [\Kendo\UI\MultiSelectAnimation](/api/wrappers/php/Kendo/UI/MultiSelectAnimation)
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $animation = new \Kendo\UI\MultiSelectAnimation();
    $close = new \Kendo\UI\MultiSelectAnimationClose();
    $animation->close($close);
    $multiSelect->animation($animation);
    ?>

#### Example - using array

    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $close = new \Kendo\UI\MultiSelectAnimationClose();
    $multiSelect->animation(array('close' => $close));
    ?>

### autoBind
Controls whether to bind the widget to the data source on initialization.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->autoBind(true);
    ?>

### change
Fired when the value of the widget is changed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [change](/api/web/multiselect#events-change) event documentation.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### close
Fired when the popup of the widget is closed.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [close](/api/web/multiselect#events-close) event documentation.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->close('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onClose(e) {
            // handle the close event.
        }
    </script>
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->close('onClose');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->close(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataBound
Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [dataBound](/api/web/multiselect#events-dataBound) event documentation.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->dataBound('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDataBound(e) {
            // handle the dataBound event.
        }
    </script>
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->dataBound('onDataBound');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->dataBound(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataSource

Sets the data source of the dataSource.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `\Kendo\Data\DataSource|array`

#### Example - using [\Kendo\Data\DataSource](/api/wrappers/php/kendo/data/datasource)

    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $dataSource = new \Kendo\Data\DataSource();
    $multiSelect->dataSource($dataSource);
    ?>

#### Example - using array

    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $schema = new \Kendo\Data\DataSourceSchema();
    $multiSelect->dataSource(array('schema' => $schema));
    ?>

### dataTextField
The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->dataTextField('value');
    ?>

### dataValueField
The field of the data item that provides the value of the widget.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->dataValueField('value');
    ?>

### delay
Specifies the delay in milliseconds after which the multiselect will start filtering dataSource.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->delay(1);
    ?>

### enable
If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->enable(true);
    ?>

### filter
The filtering method used to determine the suggestions for the current value. Filtration is turned of by default.
The supported filter values are startswith, endswith and contains.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->filter('value');
    ?>

### height
The height of the suggestion popup in pixels. The default value is 200 pixels.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->height(1);
    ?>

### highlightFirst
If set to true the first suggestion will be automatically highlighted.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->highlightFirst(true);
    ?>

### ignoreCase
If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->ignoreCase('value');
    ?>

### itemTemplate
The template used to render the items in the popup list.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->itemTemplate('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->itemTemplate(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### maxSelectedItems
Defines the limit of the selected items. If set to null widget will not limit number of the selected items.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->maxSelectedItems(1);
    ?>

### minLength
The minimum number of characters the user must type before a search is performed. Set to higher value than 1 if the search could match a lot of items.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->minLength(1);
    ?>

### open
Fired when the popup of the widget is opened by the user.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [open](/api/web/multiselect#events-open) event documentation.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->open('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onOpen(e) {
            // handle the open event.
        }
    </script>
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->open('onOpen');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->open(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### placeholder
The hint displayed by the widget when it is empty. Not set by default.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->placeholder('value');
    ?>

### select
Fired when an item from the popup is selected by the user.
For additional information check the [select](/api/web/multiselect#events-select) event documentation.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->select('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelect(e) {
            // handle the select event.
        }
    </script>
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->select('onSelect');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->select(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### tagTemplate
The template used to render the tags.

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->tagTemplate('value');
    ?>

### value
Define the value of the widget

#### Returns
`\Kendo\UI\MultiSelect`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $multiSelect = new \Kendo\UI\MultiSelect('MultiSelect');
    $multiSelect->value(new array());
    ?>

