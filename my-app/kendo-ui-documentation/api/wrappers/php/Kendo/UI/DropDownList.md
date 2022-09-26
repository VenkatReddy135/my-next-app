---
title: DropDownList
slug: php-ui-dropdownlist
tags: api, php
publish: true
---

# \Kendo\UI\DropDownList

A PHP wrapper for Kendo UI [DropDownList](/api/web/dropdownlist).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use DropDownList in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo DropDownList

    <?php
    // Create a new instance of DropDownList and specify its id
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');

    // Configure it
    $dropDownList->autoBind(true)

    // Output it

    echo $dropDownList->render();
    ?>


## Methods

### animation

Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `\Kendo\UI\DropDownListAnimation|array`


#### Example - using [\Kendo\UI\DropDownListAnimation](/api/wrappers/php/Kendo/UI/DropDownListAnimation)
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $animation = new \Kendo\UI\DropDownListAnimation();
    $close = new \Kendo\UI\DropDownListAnimationClose();
    $animation->close($close);
    $dropDownList->animation($animation);
    ?>

#### Example - using array

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $close = new \Kendo\UI\DropDownListAnimationClose();
    $dropDownList->animation(array('close' => $close));
    ?>

### autoBind
Controls whether to bind the widget to the data source on initialization.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->autoBind(true);
    ?>

### cascade
Fired when the value of the widget is changed via API or user interactionTriggered.
For additional information check the [cascade](/api/web/dropdownlist#events-cascade) event documentation.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->cascade('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onCascade(e) {
            // handle the cascade event.
        }
    </script>
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->cascade('onCascade');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->cascade(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### cascadeFrom
Use it to set the Id of the parent dropdownlist widget.
Help topic showing how cascading functionality works

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->cascadeFrom('value');
    ?>

### change
Fired when the value of the widget is changed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [change](/api/web/dropdownlist#events-change) event documentation.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### close
Fired when the popup of the widget is closed.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [close](/api/web/dropdownlist#events-close) event documentation.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->close('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onClose(e) {
            // handle the close event.
        }
    </script>
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->close('onClose');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->close(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataBound
Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [dataBound](/api/web/dropdownlist#events-dataBound) event documentation.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->dataBound('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDataBound(e) {
            // handle the dataBound event.
        }
    </script>
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->dataBound('onDataBound');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->dataBound(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataSource

Sets the data source of the dataSource.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `\Kendo\Data\DataSource|array`

#### Example - using [\Kendo\Data\DataSource](/api/wrappers/php/kendo/data/datasource)

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dataSource = new \Kendo\Data\DataSource();
    $dropDownList->dataSource($dataSource);
    ?>

#### Example - using array

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $schema = new \Kendo\Data\DataSourceSchema();
    $dropDownList->dataSource(array('schema' => $schema));
    ?>

### dataTextField
The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->dataTextField('value');
    ?>

### dataValueField
The field of the data item that provides the value of the widget.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->dataValueField('value');
    ?>

### delay
Specifies the delay in milliseconds before the search-text typed by the end user is cleared.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->delay(1);
    ?>

### enable
If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->enable(true);
    ?>

### height
The height of the suggestion popup in pixels. The default value is 200 pixels.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->height(1);
    ?>

### ignoreCase
If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->ignoreCase('value');
    ?>

### index
The index of the initially selected item. The index is 0 based.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->index(1);
    ?>

### open
Fired when the popup of the widget is opened by the user.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [open](/api/web/dropdownlist#events-open) event documentation.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->open('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onOpen(e) {
            // handle the open event.
        }
    </script>
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->open('onOpen');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->open(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### optionLabel
Define the text of the default empty item. If the value is an object, then the widget will use it a valid data item.
 Note that the optionLabel will not be available if the widget is empty.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `string|`



#### Example  - using string
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->optionLabel('value');
    ?>

### select
Fired when an item from the popup is selected by the user.
For additional information check the [select](/api/web/dropdownlist#events-select) event documentation.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->select('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelect(e) {
            // handle the select event.
        }
    </script>
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->select('onSelect');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->select(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### template
The template used to render the items. By default the widget displays only the text of the data item (configured via dataTextField).

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### text
The text of the widget used when the autoBind is set to false.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->text('value');
    ?>

### value
The value of the widget.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->value('value');
    ?>

### valuePrimitive
Spcifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.

#### Returns
`\Kendo\UI\DropDownList`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $dropDownList = new \Kendo\UI\DropDownList('DropDownList');
    $dropDownList->valuePrimitive(true);
    ?>

