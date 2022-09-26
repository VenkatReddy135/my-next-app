---
title: AutoComplete
slug: php-ui-autocomplete
tags: api, php
publish: true
---

# \Kendo\UI\AutoComplete

A PHP wrapper for Kendo UI [AutoComplete](/api/web/autocomplete).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use AutoComplete in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo AutoComplete

    <?php
    // Create a new instance of AutoComplete and specify its id
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');

    // Configure it
    $autoComplete->dataTextField('value')

    // Output it

    echo $autoComplete->render();
    ?>


## Methods

### animation

Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `\Kendo\UI\AutoCompleteAnimation|array`


#### Example - using [\Kendo\UI\AutoCompleteAnimation](/api/wrappers/php/Kendo/UI/AutoCompleteAnimation)
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $animation = new \Kendo\UI\AutoCompleteAnimation();
    $close = new \Kendo\UI\AutoCompleteAnimationClose();
    $animation->close($close);
    $autoComplete->animation($animation);
    ?>

#### Example - using array

    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $close = new \Kendo\UI\AutoCompleteAnimationClose();
    $autoComplete->animation(array('close' => $close));
    ?>

### change
Fired when the value of the widget is changed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [change](/api/web/autocomplete#events-change) event documentation.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### close
Fired when the suggestion popup of the widget is closed by the user.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [close](/api/web/autocomplete#events-close) event documentation.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->close('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onClose(e) {
            // handle the close event.
        }
    </script>
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->close('onClose');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->close(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataBound
Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [dataBound](/api/web/autocomplete#events-dataBound) event documentation.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->dataBound('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDataBound(e) {
            // handle the dataBound event.
        }
    </script>
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->dataBound('onDataBound');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->dataBound(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataSource

Sets the data source of the dataSource.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `\Kendo\Data\DataSource|array`

#### Example - using [\Kendo\Data\DataSource](/api/wrappers/php/kendo/data/datasource)

    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $dataSource = new \Kendo\Data\DataSource();
    $autoComplete->dataSource($dataSource);
    ?>

#### Example - using array

    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $schema = new \Kendo\Data\DataSourceSchema();
    $autoComplete->dataSource(array('schema' => $schema));
    ?>

### dataTextField
The field of the data item used when searching for suggestions.  This is the text that will be displayed in the list of matched results.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->dataTextField('value');
    ?>

### delay
The delay in milliseconds between a keystroke and when the widget displays the suggestion popup.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->delay(1);
    ?>

### enable
If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->enable(true);
    ?>

### filter
The filtering method used to determine the suggestions for the current value. The default filter is "startswith" -
all data items which begin with the current widget value are displayed in the suggestion popup. The supported filter values are startswith, endswith and contains.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->filter('value');
    ?>

### height
The height of the suggestion popup in pixels. The default value is 200 pixels.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->height(1);
    ?>

### highlightFirst
If set to true the first suggestion will be automatically highlighted.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->highlightFirst(true);
    ?>

### ignoreCase
If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->ignoreCase(true);
    ?>

### minLength
The minimum number of characters the user must type before a search is performed. Set to higher value than 1 if the search could match a lot of items.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->minLength(1);
    ?>

### open
Fired when the suggestion popup of the widget is opened by the user.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [open](/api/web/autocomplete#events-open) event documentation.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->open('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onOpen(e) {
            // handle the open event.
        }
    </script>
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->open('onOpen');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->open(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### placeholder
The hint displayed by the widget when it is empty. Not set by default.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->placeholder('value');
    ?>

### select
Fired when an item from the suggestion popup is selected by the user.
For additional information check the [select](/api/web/autocomplete#events-select) event documentation.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->select('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelect(e) {
            // handle the select event.
        }
    </script>
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->select('onSelect');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->select(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### separator
The character used to separate multiple values. Empty by default.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->separator('value');
    ?>

### suggest
If set to true the widget will automatically use the first suggestion as its value.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->suggest(true);
    ?>

### template
The template used to render the suggestions. By default the widget displays only the text of the suggestion (configured via dataTextField).

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### valuePrimitive
Spcifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item text field. If set to false, the View-Model field will be updated with the selected item.

#### Returns
`\Kendo\UI\AutoComplete`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $autoComplete = new \Kendo\UI\AutoComplete('AutoComplete');
    $autoComplete->valuePrimitive(true);
    ?>

