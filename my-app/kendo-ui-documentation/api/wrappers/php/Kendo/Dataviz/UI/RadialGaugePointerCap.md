---
title: RadialGaugePointerCap
slug: php-dataviz-ui-radialgaugepointercap
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\RadialGaugePointerCap

A PHP class representing the cap setting of RadialGaugePointer.


## Methods

### color
The color of the cap.
Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugePointerCap`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $cap = new \Kendo\Dataviz\UI\RadialGaugePointerCap();
    $cap->color('value');
    ?>

### size
The size of the cap in percents. (from 0 to 1)

#### Returns
`\Kendo\Dataviz\UI\RadialGaugePointerCap`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $cap = new \Kendo\Dataviz\UI\RadialGaugePointerCap();
    $cap->size(1);
    ?>

