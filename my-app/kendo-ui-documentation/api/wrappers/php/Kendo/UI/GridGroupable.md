---
title: GridGroupable
slug: php-ui-gridgroupable
tags: api, php
publish: true
---

# \Kendo\UI\GridGroupable

A PHP class representing the groupable setting of Grid.


## Methods

### messages

The text messages displayed during grouping.

#### Returns
`\Kendo\UI\GridGroupable`

#### Parameters

##### $value `\Kendo\UI\GridGroupableMessages|array`


#### Example - using [\Kendo\UI\GridGroupableMessages](/api/wrappers/php/Kendo/UI/GridGroupableMessages)
    <?php
    $groupable = new \Kendo\UI\GridGroupable();
    $messages = new \Kendo\UI\GridGroupableMessages();
    $empty = 'value';
    $messages->_empty($empty);
    $groupable->messages($messages);
    ?>

#### Example - using array

    <?php
    $groupable = new \Kendo\UI\GridGroupable();
    $empty = 'value';
    $groupable->messages(array('empty' => $empty));
    ?>

