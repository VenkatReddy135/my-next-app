---
title: Pager
slug: php-ui-pager
tags: api, php
publish: true
---

# \Kendo\UI\Pager

A PHP wrapper for Kendo UI [Pager](/api/web/pager).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use Pager in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo Pager

    <?php
    // Create a new instance of Pager and specify its id
    $pager = new \Kendo\UI\Pager('Pager');

    // Configure it
    $pager->autoBind(true)

    // Output it

    echo $pager->render();
    ?>


## Methods

### autoBind
Indicates whether the pager refresh method will be called within its initialization.

#### Returns
`\Kendo\UI\Pager`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $pager->autoBind(true);
    ?>

### buttonCount
Defines the number of buttons displayed in the numeric pager.

#### Returns
`\Kendo\UI\Pager`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $pager->buttonCount(1);
    ?>

### change
Fires when the current page has changed.
For additional information check the [change](/api/web/pager#events-change) event documentation.

#### Returns
`\Kendo\UI\Pager`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $pager->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $pager->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $pager->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataSource

Sets the data source of the dataSource.

#### Returns
`\Kendo\UI\Pager`

#### Parameters

##### $value `\Kendo\Data\DataSource|array`

#### Example - using [\Kendo\Data\DataSource](/api/wrappers/php/kendo/data/datasource)

    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $dataSource = new \Kendo\Data\DataSource();
    $pager->dataSource($dataSource);
    ?>

#### Example - using array

    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $schema = new \Kendo\Data\DataSourceSchema();
    $pager->dataSource(array('schema' => $schema));
    ?>

### info
Defines if a label showing current paging information will be displayed.

#### Returns
`\Kendo\UI\Pager`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $pager->info(true);
    ?>

### input
Defines if an input element which allows the user to navigate to given page will be displayed.

#### Returns
`\Kendo\UI\Pager`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $pager->input(true);
    ?>

### linkTemplate
The template for page number links.

#### Returns
`\Kendo\UI\Pager`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $pager->linkTemplate('value');
    ?>

### messages

Defines texts shown within the pager. Use this option to customize or localize the pager messages.

#### Returns
`\Kendo\UI\Pager`

#### Parameters

##### $value `\Kendo\UI\PagerMessages|array`


#### Example - using [\Kendo\UI\PagerMessages](/api/wrappers/php/Kendo/UI/PagerMessages)
    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $messages = new \Kendo\UI\PagerMessages();
    $display = 'value';
    $messages->display($display);
    $pager->messages($messages);
    ?>

#### Example - using array

    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $display = 'value';
    $pager->messages(array('display' => $display));
    ?>

### numeric
Defines if numeric portion of the pager will be shown.

#### Returns
`\Kendo\UI\Pager`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $pager->numeric(true);
    ?>

### pageSizes
Displays a list with predefined page sizes. An array of values to be displayed can be provided. If pageSize option is provided for DataSource then this pageSize value will be automatically selected in created selectbox.

#### Returns
`\Kendo\UI\Pager`

#### Parameters

##### $value `boolean|array`



#### Example  - using boolean
    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $pager->pageSizes(true);
    ?>

#### Example  - using array
    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $pager->pageSizes(new array());
    ?>

### previousNext
Defines if buttons for navigating to the first, last, previous and next pages will be shown.

#### Returns
`\Kendo\UI\Pager`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $pager->previousNext(true);
    ?>

### refresh
Defines if a refresh button will be displayed. Click on that button will call DataSource read() method to get actual data.

#### Returns
`\Kendo\UI\Pager`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $pager->refresh(true);
    ?>

### selectTemplate
The template for selected page number link.

#### Returns
`\Kendo\UI\Pager`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $pager = new \Kendo\UI\Pager('Pager');
    $pager->selectTemplate('value');
    ?>

