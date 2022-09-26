---
title: GridFilterable
slug: php-ui-gridfilterable
tags: api, php
publish: true
---

# \Kendo\UI\GridFilterable

A PHP class representing the filterable setting of Grid.


## Methods

### extra
If set to true the filter menu allows the user to input a second criteria.

#### Returns
`\Kendo\UI\GridFilterable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $filterable = new \Kendo\UI\GridFilterable();
    $filterable->extra(true);
    ?>

### messages

The text messages displayed in the filter menu. Use it to customize or localize the filter menu messages.

#### Returns
`\Kendo\UI\GridFilterable`

#### Parameters

##### $value `\Kendo\UI\GridFilterableMessages|array`


#### Example - using [\Kendo\UI\GridFilterableMessages](/api/wrappers/php/Kendo/UI/GridFilterableMessages)
    <?php
    $filterable = new \Kendo\UI\GridFilterable();
    $messages = new \Kendo\UI\GridFilterableMessages();
    $and = 'value';
    $messages->_and($and);
    $filterable->messages($messages);
    ?>

#### Example - using array

    <?php
    $filterable = new \Kendo\UI\GridFilterable();
    $and = 'value';
    $filterable->messages(array('and' => $and));
    ?>

### operators

The text of the filter operators displayed in the filter menu.

#### Returns
`\Kendo\UI\GridFilterable`

#### Parameters

##### $value `\Kendo\UI\GridFilterableOperators|array`


#### Example - using [\Kendo\UI\GridFilterableOperators](/api/wrappers/php/Kendo/UI/GridFilterableOperators)
    <?php
    $filterable = new \Kendo\UI\GridFilterable();
    $operators = new \Kendo\UI\GridFilterableOperators();
    $string = new \Kendo\UI\GridFilterableOperatorsString();
    $operators->string($string);
    $filterable->operators($operators);
    ?>

#### Example - using array

    <?php
    $filterable = new \Kendo\UI\GridFilterable();
    $string = new \Kendo\UI\GridFilterableOperatorsString();
    $filterable->operators(array('string' => $string));
    ?>

