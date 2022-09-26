---
title: RadialGauge
slug: php-dataviz-ui-radialgauge
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\RadialGauge

A PHP wrapper for Kendo UI [RadialGauge](/api/dataviz/radialgauge).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use RadialGauge in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo RadialGauge

    <?php
    // Create a new instance of RadialGauge and specify its id
    $radialGauge = new \Kendo\Dataviz\UI\RadialGauge('RadialGauge');

    // Configure it
    $radialGauge->renderAs('value')

    // Output it

    echo $radialGauge->render();
    ?>


## Methods

### gaugeArea

The gauge area configuration options.
This is the entire visible area of the gauge.

#### Returns
`\Kendo\Dataviz\UI\RadialGauge`

#### Parameters

##### $value `\Kendo\Dataviz\UI\RadialGaugeGaugeArea|array`


#### Example - using [\Kendo\Dataviz\UI\RadialGaugeGaugeArea](/api/wrappers/php/Kendo/Dataviz/UI/RadialGaugeGaugeArea)
    <?php
    $radialGauge = new \Kendo\Dataviz\UI\RadialGauge('RadialGauge');
    $gaugeArea = new \Kendo\Dataviz\UI\RadialGaugeGaugeArea();
    $height = 1;
    $gaugeArea->height($height);
    $radialGauge->gaugeArea($gaugeArea);
    ?>

#### Example - using array

    <?php
    $radialGauge = new \Kendo\Dataviz\UI\RadialGauge('RadialGauge');
    $height = 1;
    $radialGauge->gaugeArea(array('height' => $height));
    ?>

### pointer

The pointer configuration options.

#### Returns
`\Kendo\Dataviz\UI\RadialGauge`

#### Parameters

##### $value `\Kendo\Dataviz\UI\RadialGaugePointer|array`


#### Example - using [\Kendo\Dataviz\UI\RadialGaugePointer](/api/wrappers/php/Kendo/Dataviz/UI/RadialGaugePointer)
    <?php
    $radialGauge = new \Kendo\Dataviz\UI\RadialGauge('RadialGauge');
    $pointer = new \Kendo\Dataviz\UI\RadialGaugePointer();
    $color = 'value';
    $pointer->color($color);
    $radialGauge->pointer($pointer);
    ?>

#### Example - using array

    <?php
    $radialGauge = new \Kendo\Dataviz\UI\RadialGauge('RadialGauge');
    $color = 'value';
    $radialGauge->pointer(array('color' => $color));
    ?>

### renderAs
Sets the preferred rendering engine.
If it is not supported by the browser, the Gauge will switch to the first available mode.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\RadialGauge`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $radialGauge = new \Kendo\Dataviz\UI\RadialGauge('RadialGauge');
    $radialGauge->renderAs('value');
    ?>

### scale

Configures the scale.

#### Returns
`\Kendo\Dataviz\UI\RadialGauge`

#### Parameters

##### $value `\Kendo\Dataviz\UI\RadialGaugeScale|array`


#### Example - using [\Kendo\Dataviz\UI\RadialGaugeScale](/api/wrappers/php/Kendo/Dataviz/UI/RadialGaugeScale)
    <?php
    $radialGauge = new \Kendo\Dataviz\UI\RadialGauge('RadialGauge');
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $endAngle = 1;
    $scale->endAngle($endAngle);
    $radialGauge->scale($scale);
    ?>

#### Example - using array

    <?php
    $radialGauge = new \Kendo\Dataviz\UI\RadialGauge('RadialGauge');
    $endAngle = 1;
    $radialGauge->scale(array('endAngle' => $endAngle));
    ?>

### transitions
A value indicating if transition animations should be played.

#### Returns
`\Kendo\Dataviz\UI\RadialGauge`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $radialGauge = new \Kendo\Dataviz\UI\RadialGauge('RadialGauge');
    $radialGauge->transitions(true);
    ?>

