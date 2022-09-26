---
title: LinearGauge
slug: php-dataviz-ui-lineargauge
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\LinearGauge

A PHP wrapper for Kendo UI [LinearGauge](/api/dataviz/lineargauge).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use LinearGauge in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo LinearGauge

    <?php
    // Create a new instance of LinearGauge and specify its id
    $linearGauge = new \Kendo\Dataviz\UI\LinearGauge('LinearGauge');

    // Configure it
    $linearGauge->renderAs('value')

    // Output it

    echo $linearGauge->render();
    ?>


## Methods

### gaugeArea

The gauge area configuration options.
This is the entire visible area of the gauge.

#### Returns
`\Kendo\Dataviz\UI\LinearGauge`

#### Parameters

##### $value `\Kendo\Dataviz\UI\LinearGaugeGaugeArea|array`


#### Example - using [\Kendo\Dataviz\UI\LinearGaugeGaugeArea](/api/wrappers/php/Kendo/Dataviz/UI/LinearGaugeGaugeArea)
    <?php
    $linearGauge = new \Kendo\Dataviz\UI\LinearGauge('LinearGauge');
    $gaugeArea = new \Kendo\Dataviz\UI\LinearGaugeGaugeArea();
    $height = 1;
    $gaugeArea->height($height);
    $linearGauge->gaugeArea($gaugeArea);
    ?>

#### Example - using array

    <?php
    $linearGauge = new \Kendo\Dataviz\UI\LinearGauge('LinearGauge');
    $height = 1;
    $linearGauge->gaugeArea(array('height' => $height));
    ?>

### pointer

The pointer configuration options.

#### Returns
`\Kendo\Dataviz\UI\LinearGauge`

#### Parameters

##### $value `\Kendo\Dataviz\UI\LinearGaugePointer|array`


#### Example - using [\Kendo\Dataviz\UI\LinearGaugePointer](/api/wrappers/php/Kendo/Dataviz/UI/LinearGaugePointer)
    <?php
    $linearGauge = new \Kendo\Dataviz\UI\LinearGauge('LinearGauge');
    $pointer = new \Kendo\Dataviz\UI\LinearGaugePointer();
    $color = 'value';
    $pointer->color($color);
    $linearGauge->pointer($pointer);
    ?>

#### Example - using array

    <?php
    $linearGauge = new \Kendo\Dataviz\UI\LinearGauge('LinearGauge');
    $color = 'value';
    $linearGauge->pointer(array('color' => $color));
    ?>

### renderAs
Sets the preferred rendering engine.
If it is not supported by the browser, the Gauge will switch to the first available mode.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\LinearGauge`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $linearGauge = new \Kendo\Dataviz\UI\LinearGauge('LinearGauge');
    $linearGauge->renderAs('value');
    ?>

### scale

Configures the scale.

#### Returns
`\Kendo\Dataviz\UI\LinearGauge`

#### Parameters

##### $value `\Kendo\Dataviz\UI\LinearGaugeScale|array`


#### Example - using [\Kendo\Dataviz\UI\LinearGaugeScale](/api/wrappers/php/Kendo/Dataviz/UI/LinearGaugeScale)
    <?php
    $linearGauge = new \Kendo\Dataviz\UI\LinearGauge('LinearGauge');
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $majorUnit = 1;
    $scale->majorUnit($majorUnit);
    $linearGauge->scale($scale);
    ?>

#### Example - using array

    <?php
    $linearGauge = new \Kendo\Dataviz\UI\LinearGauge('LinearGauge');
    $majorUnit = 1;
    $linearGauge->scale(array('majorUnit' => $majorUnit));
    ?>

### transitions
A value indicating if transition animations should be played.

#### Returns
`\Kendo\Dataviz\UI\LinearGauge`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $linearGauge = new \Kendo\Dataviz\UI\LinearGauge('LinearGauge');
    $linearGauge->transitions(true);
    ?>

