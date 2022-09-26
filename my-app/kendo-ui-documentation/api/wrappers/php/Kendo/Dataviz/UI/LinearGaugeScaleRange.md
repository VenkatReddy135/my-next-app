---
title: LinearGaugeScaleRange
slug: php-dataviz-ui-lineargaugescalerange
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\LinearGaugeScaleRange

A PHP class representing the range setting of LinearGaugeScaleRanges.


## Methods

### color
The color of the range.
Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleRange`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $range = new \Kendo\Dataviz\UI\LinearGaugeScaleRange();
    $range->color('value');
    ?>

### from
The start position of the range in scale units.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleRange`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $range = new \Kendo\Dataviz\UI\LinearGaugeScaleRange();
    $range->from(1);
    ?>

### opacity
The opacity of the range.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleRange`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $range = new \Kendo\Dataviz\UI\LinearGaugeScaleRange();
    $range->opacity(1);
    ?>

### to
The end position of the range in scale units.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleRange`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $range = new \Kendo\Dataviz\UI\LinearGaugeScaleRange();
    $range->to(1);
    ?>

