---
title: DataSourceSchema
slug: php-data-datasourceschema
tags: api, php
publish: true
---

# \Kendo\Data\DataSourceSchema

A PHP class representing the schema setting of DataSource.


## Methods

### aggregates
The field from the response which contains the aggregate results. Can be set to a function which is called to
return the aggregate results from the response.The result of the function should be a JavaScript object which contains the aggregate results for every fields in the following format:For example if the data source is configured like this:The aggregate results should have the following format:

#### Returns
`\Kendo\Data\DataSourceSchema`

#### Parameters

##### $value `\Kendo\JavaScriptFunction|string`



#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $schema = new \Kendo\Data\DataSourceSchema();
    $schema->aggregates(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

#### Example  - using string
    <?php
    $schema = new \Kendo\Data\DataSourceSchema();
    $schema->aggregates('value');
    ?>

### data
The field from the server response which contains the data items. Can be set to a function which is called to
return the data items for the response.

#### Returns
`\Kendo\Data\DataSourceSchema`

#### Parameters

##### $value `\Kendo\JavaScriptFunction|string`



#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $schema = new \Kendo\Data\DataSourceSchema();
    $schema->data(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

#### Example  - using string
    <?php
    $schema = new \Kendo\Data\DataSourceSchema();
    $schema->data('value');
    ?>

### errors
The field from the server response which contains server-side errors. Can be set to a function which is called to
return the errors for response. If there are any errors the error event will be fired.

#### Returns
`\Kendo\Data\DataSourceSchema`

#### Parameters

##### $value `\Kendo\JavaScriptFunction|string`



#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $schema = new \Kendo\Data\DataSourceSchema();
    $schema->errors(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

#### Example  - using string
    <?php
    $schema = new \Kendo\Data\DataSourceSchema();
    $schema->errors('value');
    ?>

### groups
The field from the server response which contains the groups. Can be set to a function which is called to
return the groups from the response.The result should have the following format:

#### Returns
`\Kendo\Data\DataSourceSchema`

#### Parameters

##### $value `\Kendo\JavaScriptFunction|string`



#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $schema = new \Kendo\Data\DataSourceSchema();
    $schema->groups(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

#### Example  - using string
    <?php
    $schema = new \Kendo\Data\DataSourceSchema();
    $schema->groups('value');
    ?>

### parse
Executed before the server response is used. Use it to preprocess or parse the server response.

#### Returns
`\Kendo\Data\DataSourceSchema`

#### Parameters

##### $value `\Kendo\JavaScriptFunction`



#### Example 
    <?php
    $schema = new \Kendo\Data\DataSourceSchema();
    $schema->parse(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### total
The field from the server response which contains the total number of data items. Can be set to a function which is called to
return the total number of data items for the response.

#### Returns
`\Kendo\Data\DataSourceSchema`

#### Parameters

##### $value `\Kendo\JavaScriptFunction|string`



#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $schema = new \Kendo\Data\DataSourceSchema();
    $schema->total(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

#### Example  - using string
    <?php
    $schema = new \Kendo\Data\DataSourceSchema();
    $schema->total('value');
    ?>

### type
The type of the response. The supported values are "xml" and "json". By default the schema interprets the server response as JSON.

#### Returns
`\Kendo\Data\DataSourceSchema`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $schema = new \Kendo\Data\DataSourceSchema();
    $schema->type('value');
    ?>

