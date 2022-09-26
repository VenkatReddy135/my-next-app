---
title: ComboBox
slug: php-ui-combobox
tags: api, php
publish: true
---

# \Kendo\UI\ComboBox

A PHP wrapper for Kendo UI [ComboBox](/api/web/combobox).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use ComboBox in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo ComboBox

    <?php
    // Create a new instance of ComboBox and specify its id
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');

    // Configure it
    $comboBox->autoBind(true)

    // Output it

    echo $comboBox->render();
    ?>


## Methods

### animation

Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `\Kendo\UI\ComboBoxAnimation|array`


#### Example - using [\Kendo\UI\ComboBoxAnimation](/api/wrappers/php/Kendo/UI/ComboBoxAnimation)
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $animation = new \Kendo\UI\ComboBoxAnimation();
    $close = new \Kendo\UI\ComboBoxAnimationClose();
    $animation->close($close);
    $comboBox->animation($animation);
    ?>

#### Example - using array

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $close = new \Kendo\UI\ComboBoxAnimationClose();
    $comboBox->animation(array('close' => $close));
    ?>

### autoBind
Controls whether to bind the widget to the data source on initialization.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->autoBind(true);
    ?>

### cascade
Fired when the value of the widget is changed via API or user interaction.
For additional information check the [cascade](/api/web/combobox#events-cascade) event documentation.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->cascade('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onCascade(e) {
            // handle the cascade event.
        }
    </script>
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->cascade('onCascade');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->cascade(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### cascadeFrom
Use it to set the Id of the parent ComboBox widget.
Help topic showing how cascading functionality works

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->cascadeFrom('value');
    ?>

### change
Fired when the value of the widget is changed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [change](/api/web/combobox#events-change) event documentation.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### close
Fired when the popup of the widget is closed.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [close](/api/web/combobox#events-close) event documentation.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->close('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onClose(e) {
            // handle the close event.
        }
    </script>
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->close('onClose');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->close(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataBound
Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [dataBound](/api/web/combobox#events-dataBound) event documentation.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->dataBound('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDataBound(e) {
            // handle the dataBound event.
        }
    </script>
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->dataBound('onDataBound');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->dataBound(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataSource

Sets the data source of the dataSource.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `\Kendo\Data\DataSource|array`

#### Example - using [\Kendo\Data\DataSource](/api/wrappers/php/kendo/data/datasource)

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $dataSource = new \Kendo\Data\DataSource();
    $comboBox->dataSource($dataSource);
    ?>

#### Example - using array

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $schema = new \Kendo\Data\DataSourceSchema();
    $comboBox->dataSource(array('schema' => $schema));
    ?>

### dataTextField
The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->dataTextField('value');
    ?>

### dataValueField
The field of the data item that provides the value of the widget.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->dataValueField('value');
    ?>

### delay
The delay in milliseconds between a keystroke and when the widget displays the popup.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->delay(1);
    ?>

### enable
If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->enable(true);
    ?>

### filter
The filtering method used to determine the suggestions for the current value. Filtration is turned of by default.
The supported filter values are startswith, endswith and contains.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->filter('value');
    ?>

### height
The height of the suggestion popup in pixels. The default value is 200 pixels.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->height(1);
    ?>

### highlightFirst
If set to true the first suggestion will be automatically highlighted.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->highlightFirst(true);
    ?>

### ignoreCase
If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->ignoreCase('value');
    ?>

### index
The index of the initially selected item. The index is 0 based.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->index(1);
    ?>

### minLength
The minimum number of characters the user must type before a search is performed. Set to higher value than 1 if the search could match a lot of items.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->minLength(1);
    ?>

### open
Fired when the popup of the widget is opened by the user.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [open](/api/web/combobox#events-open) event documentation.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->open('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onOpen(e) {
            // handle the open event.
        }
    </script>
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->open('onOpen');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->open(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### placeholder
The hint displayed by the widget when it is empty. Not set by default.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->placeholder('value');
    ?>

### select
Fired when an item from the popup is selected by the user.
For additional information check the [select](/api/web/combobox#events-select) event documentation.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->select('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelect(e) {
            // handle the select event.
        }
    </script>
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->select('onSelect');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->select(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### suggest
If set to true the widget will automatically use the first suggestion as its value.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->suggest(true);
    ?>

### template
The template used to render the items. By default the widget displays only the text of the data item (configured via dataTextField).

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### text
The text of the widget used when the autoBind is set to false.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->text('value');
    ?>

### value
The value of the widget.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->value('value');
    ?>

### valuePrimitive
Specifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.

#### Returns
`\Kendo\UI\ComboBox`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $comboBox = new \Kendo\UI\ComboBox('ComboBox');
    $comboBox->valuePrimitive(true);
    ?>

