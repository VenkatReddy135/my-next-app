---
title: LinearGaugeScaleMinorTicks
slug: php-dataviz-ui-lineargaugescaleminorticks
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\LinearGaugeScaleMinorTicks

A PHP class representing the minorTicks setting of LinearGaugeScale.


## Methods

### color
The color of the minor ticks.
Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleMinorTicks`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\LinearGaugeScaleMinorTicks();
    $minorTicks->color('value');
    ?>

### size
The minor tick size.
This is the length of the line in pixels that is drawn to indicate the tick on the scale.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleMinorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\LinearGaugeScaleMinorTicks();
    $minorTicks->size(1);
    ?>

### visible
The visibility of the minor ticks.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleMinorTicks`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\LinearGaugeScaleMinorTicks();
    $minorTicks->visible(true);
    ?>

### width
The width of the minor ticks.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleMinorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\LinearGaugeScaleMinorTicks();
    $minorTicks->width(1);
    ?>

