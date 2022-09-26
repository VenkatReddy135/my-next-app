---
title: RadialGaugePointer
slug: php-dataviz-ui-radialgaugepointer
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\RadialGaugePointer

A PHP class representing the pointer setting of RadialGauge.


## Methods

### cap

The cap configuration options.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugePointer`

#### Parameters

##### $value `\Kendo\Dataviz\UI\RadialGaugePointerCap|array`


#### Example - using [\Kendo\Dataviz\UI\RadialGaugePointerCap](/api/wrappers/php/Kendo/Dataviz/UI/RadialGaugePointerCap)
    <?php
    $pointer = new \Kendo\Dataviz\UI\RadialGaugePointer();
    $cap = new \Kendo\Dataviz\UI\RadialGaugePointerCap();
    $color = 'value';
    $cap->color($color);
    $pointer->cap($cap);
    ?>

#### Example - using array

    <?php
    $pointer = new \Kendo\Dataviz\UI\RadialGaugePointer();
    $color = 'value';
    $pointer->cap(array('color' => $color));
    ?>

### color
The color of the pointer.
Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugePointer`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $pointer = new \Kendo\Dataviz\UI\RadialGaugePointer();
    $pointer->color('value');
    ?>

### value
The value of the gauge.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugePointer`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $pointer = new \Kendo\Dataviz\UI\RadialGaugePointer();
    $pointer->value(1);
    ?>

