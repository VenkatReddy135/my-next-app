---
title: RadialGaugeScaleRange
slug: php-dataviz-ui-radialgaugescalerange
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\RadialGaugeScaleRange

A PHP class representing the range setting of RadialGaugeScaleRanges.


## Methods

### color
The color of the range.
Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScaleRange`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $range = new \Kendo\Dataviz\UI\RadialGaugeScaleRange();
    $range->color('value');
    ?>

### from
The start position of the range in scale units.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScaleRange`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $range = new \Kendo\Dataviz\UI\RadialGaugeScaleRange();
    $range->from(1);
    ?>

### opacity
The opacity of the range.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScaleRange`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $range = new \Kendo\Dataviz\UI\RadialGaugeScaleRange();
    $range->opacity(1);
    ?>

### to
The end position of the range in scale units.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScaleRange`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $range = new \Kendo\Dataviz\UI\RadialGaugeScaleRange();
    $range->to(1);
    ?>

