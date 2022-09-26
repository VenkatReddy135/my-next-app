---
title: GridFilterableOperators
slug: php-ui-gridfilterableoperators
tags: api, php
publish: true
---

# \Kendo\UI\GridFilterableOperators

A PHP class representing the operators setting of GridFilterable.


## Methods

### date

The texts of the filter operators displayed for columns bound to date fields.

#### Returns
`\Kendo\UI\GridFilterableOperators`

#### Parameters

##### $value `\Kendo\UI\GridFilterableOperatorsDate|array`


#### Example - using [\Kendo\UI\GridFilterableOperatorsDate](/api/wrappers/php/Kendo/UI/GridFilterableOperatorsDate)
    <?php
    $operators = new \Kendo\UI\GridFilterableOperators();
    $date = new \Kendo\UI\GridFilterableOperatorsDate();
    $eq = 'value';
    $date->eq($eq);
    $operators->date($date);
    ?>

#### Example - using array

    <?php
    $operators = new \Kendo\UI\GridFilterableOperators();
    $eq = 'value';
    $operators->date(array('eq' => $eq));
    ?>

### enums

The texts of the filter operators displayed for columns which have their values option set.

#### Returns
`\Kendo\UI\GridFilterableOperators`

#### Parameters

##### $value `\Kendo\UI\GridFilterableOperatorsEnums|array`


#### Example - using [\Kendo\UI\GridFilterableOperatorsEnums](/api/wrappers/php/Kendo/UI/GridFilterableOperatorsEnums)
    <?php
    $operators = new \Kendo\UI\GridFilterableOperators();
    $enums = new \Kendo\UI\GridFilterableOperatorsEnums();
    $eq = 'value';
    $enums->eq($eq);
    $operators->enums($enums);
    ?>

#### Example - using array

    <?php
    $operators = new \Kendo\UI\GridFilterableOperators();
    $eq = 'value';
    $operators->enums(array('eq' => $eq));
    ?>

### number

The texts of the filter operators displayed for columns bound to number fields.

#### Returns
`\Kendo\UI\GridFilterableOperators`

#### Parameters

##### $value `\Kendo\UI\GridFilterableOperatorsNumber|array`


#### Example - using [\Kendo\UI\GridFilterableOperatorsNumber](/api/wrappers/php/Kendo/UI/GridFilterableOperatorsNumber)
    <?php
    $operators = new \Kendo\UI\GridFilterableOperators();
    $number = new \Kendo\UI\GridFilterableOperatorsNumber();
    $eq = 'value';
    $number->eq($eq);
    $operators->number($number);
    ?>

#### Example - using array

    <?php
    $operators = new \Kendo\UI\GridFilterableOperators();
    $eq = 'value';
    $operators->number(array('eq' => $eq));
    ?>

### string

The texts of the filter operators displayed for columns bound to string fields.

#### Returns
`\Kendo\UI\GridFilterableOperators`

#### Parameters

##### $value `\Kendo\UI\GridFilterableOperatorsString|array`


#### Example - using [\Kendo\UI\GridFilterableOperatorsString](/api/wrappers/php/Kendo/UI/GridFilterableOperatorsString)
    <?php
    $operators = new \Kendo\UI\GridFilterableOperators();
    $string = new \Kendo\UI\GridFilterableOperatorsString();
    $contains = 'value';
    $string->contains($contains);
    $operators->string($string);
    ?>

#### Example - using array

    <?php
    $operators = new \Kendo\UI\GridFilterableOperators();
    $contains = 'value';
    $operators->string(array('contains' => $contains));
    ?>

