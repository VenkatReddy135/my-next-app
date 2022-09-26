---
title: LinearGaugePointer
slug: php-dataviz-ui-lineargaugepointer
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\LinearGaugePointer

A PHP class representing the pointer setting of LinearGauge.


## Methods

### border

The border of the pointer.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugePointer`

#### Parameters

##### $value `\Kendo\Dataviz\UI\LinearGaugePointerBorder|array`


#### Example - using [\Kendo\Dataviz\UI\LinearGaugePointerBorder](/api/wrappers/php/Kendo/Dataviz/UI/LinearGaugePointerBorder)
    <?php
    $pointer = new \Kendo\Dataviz\UI\LinearGaugePointer();
    $border = new \Kendo\Dataviz\UI\LinearGaugePointerBorder();
    $color = 'value';
    $border->color($color);
    $pointer->border($border);
    ?>

#### Example - using array

    <?php
    $pointer = new \Kendo\Dataviz\UI\LinearGaugePointer();
    $color = 'value';
    $pointer->border(array('color' => $color));
    ?>

### color
The color of the pointer.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugePointer`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $pointer = new \Kendo\Dataviz\UI\LinearGaugePointer();
    $pointer->color('value');
    ?>

### margin
The margin of the pointer.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugePointer`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $pointer = new \Kendo\Dataviz\UI\LinearGaugePointer();
    $pointer->margin(1);
    ?>

### opacity
The opacity of the pointer.
Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugePointer`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $pointer = new \Kendo\Dataviz\UI\LinearGaugePointer();
    $pointer->opacity(1);
    ?>

### shape
The shape of the pointer.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugePointer`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $pointer = new \Kendo\Dataviz\UI\LinearGaugePointer();
    $pointer->shape('value');
    ?>

### size
The size of the pointer.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugePointer`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $pointer = new \Kendo\Dataviz\UI\LinearGaugePointer();
    $pointer->size(1);
    ?>

### track

The element arround/under the pointer.
(available only for 'barIndicator' shape)

#### Returns
`\Kendo\Dataviz\UI\LinearGaugePointer`

#### Parameters

##### $value `\Kendo\Dataviz\UI\LinearGaugePointerTrack|array`


#### Example - using [\Kendo\Dataviz\UI\LinearGaugePointerTrack](/api/wrappers/php/Kendo/Dataviz/UI/LinearGaugePointerTrack)
    <?php
    $pointer = new \Kendo\Dataviz\UI\LinearGaugePointer();
    $track = new \Kendo\Dataviz\UI\LinearGaugePointerTrack();
    $color = 'value';
    $track->color($color);
    $pointer->track($track);
    ?>

#### Example - using array

    <?php
    $pointer = new \Kendo\Dataviz\UI\LinearGaugePointer();
    $color = 'value';
    $pointer->track(array('color' => $color));
    ?>

### value
The value of the gauge.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugePointer`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $pointer = new \Kendo\Dataviz\UI\LinearGaugePointer();
    $pointer->value(1);
    ?>

