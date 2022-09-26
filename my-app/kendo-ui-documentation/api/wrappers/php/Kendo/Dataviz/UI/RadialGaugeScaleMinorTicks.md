---
title: RadialGaugeScaleMinorTicks
slug: php-dataviz-ui-radialgaugescaleminorticks
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\RadialGaugeScaleMinorTicks

A PHP class representing the minorTicks setting of RadialGaugeScale.


## Methods

### color
The color of the minor ticks.
Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScaleMinorTicks`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\RadialGaugeScaleMinorTicks();
    $minorTicks->color('value');
    ?>

### size
The minor tick size.
This is the length of the line in pixels that is drawn to indicate the tick on the scale.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScaleMinorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\RadialGaugeScaleMinorTicks();
    $minorTicks->size(1);
    ?>

### visible
The visibility of the minor ticks.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScaleMinorTicks`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\RadialGaugeScaleMinorTicks();
    $minorTicks->visible(true);
    ?>

### width
The width of the minor ticks.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScaleMinorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\RadialGaugeScaleMinorTicks();
    $minorTicks->width(1);
    ?>

