---
title: LinearGaugeScaleMajorTicks
slug: php-dataviz-ui-lineargaugescalemajorticks
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\LinearGaugeScaleMajorTicks

A PHP class representing the majorTicks setting of LinearGaugeScale.


## Methods

### color
The color of the major ticks.
Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleMajorTicks`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\LinearGaugeScaleMajorTicks();
    $majorTicks->color('value');
    ?>

### size
The major tick size.
This is the length of the line in pixels that is drawn to indicate the tick on the scale.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleMajorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\LinearGaugeScaleMajorTicks();
    $majorTicks->size(1);
    ?>

### visible
The visibility of the major ticks.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleMajorTicks`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\LinearGaugeScaleMajorTicks();
    $majorTicks->visible(true);
    ?>

### width
The width of the major ticks.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleMajorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\LinearGaugeScaleMajorTicks();
    $majorTicks->width(1);
    ?>

