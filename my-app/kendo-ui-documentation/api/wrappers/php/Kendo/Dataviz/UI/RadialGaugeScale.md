---
title: RadialGaugeScale
slug: php-dataviz-ui-radialgaugescale
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\RadialGaugeScale

A PHP class representing the scale setting of RadialGauge.


## Methods

### endAngle
The end angle of the gauge.
The gauge is rendered clockwise(0 degrees are the 180 degrees in the polar coordinat system)

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScale`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $scale->endAngle(1);
    ?>

### labels

Configures the scale labels.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScale`

#### Parameters

##### $value `\Kendo\Dataviz\UI\RadialGaugeScaleLabels|array`


#### Example - using [\Kendo\Dataviz\UI\RadialGaugeScaleLabels](/api/wrappers/php/Kendo/Dataviz/UI/RadialGaugeScaleLabels)
    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $labels = new \Kendo\Dataviz\UI\RadialGaugeScaleLabels();
    $background = 'value';
    $labels->background($background);
    $scale->labels($labels);
    ?>

#### Example - using array

    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $background = 'value';
    $scale->labels(array('background' => $background));
    ?>

### majorTicks

Configures the scale major ticks.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScale`

#### Parameters

##### $value `\Kendo\Dataviz\UI\RadialGaugeScaleMajorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\RadialGaugeScaleMajorTicks](/api/wrappers/php/Kendo/Dataviz/UI/RadialGaugeScaleMajorTicks)
    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $majorTicks = new \Kendo\Dataviz\UI\RadialGaugeScaleMajorTicks();
    $color = 'value';
    $majorTicks->color($color);
    $scale->majorTicks($majorTicks);
    ?>

#### Example - using array

    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $color = 'value';
    $scale->majorTicks(array('color' => $color));
    ?>

### majorUnit
The interval between major divisions.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScale`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $scale->majorUnit(1);
    ?>

### max
The maximum value of the scale.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScale`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $scale->max(1);
    ?>

### min
The minimum value of the scale.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScale`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $scale->min(1);
    ?>

### minorTicks

Configures the scale minor ticks.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScale`

#### Parameters

##### $value `\Kendo\Dataviz\UI\RadialGaugeScaleMinorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\RadialGaugeScaleMinorTicks](/api/wrappers/php/Kendo/Dataviz/UI/RadialGaugeScaleMinorTicks)
    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $minorTicks = new \Kendo\Dataviz\UI\RadialGaugeScaleMinorTicks();
    $color = 'value';
    $minorTicks->color($color);
    $scale->minorTicks($minorTicks);
    ?>

#### Example - using array

    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $color = 'value';
    $scale->minorTicks(array('color' => $color));
    ?>

### minorUnit
The interval between minor divisions.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScale`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $scale->minorUnit(1);
    ?>

### rangeDistance
The distance from the range indicators to the ticks.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScale`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $scale->rangeDistance(1);
    ?>

### rangePlaceholderColor
The default color for the ranges.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScale`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $scale->rangePlaceholderColor('value');
    ?>

### rangeSize
The width of the range indicators.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScale`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $scale->rangeSize(1);
    ?>

### addRange

Adds one or more RadialGaugeScaleRange to the RadialGaugeScale.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScale`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\RadialGaugeScaleRange|array`

#### Example - using \Kendo\Dataviz\UI\RadialGaugeScaleRange

    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $range = new \Kendo\Dataviz\UI\RadialGaugeScaleRange();
    $color = 'value';
    $range->color($color);
    $scale->addRange($range);
    ?>

#### Example - using array

    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $color = 'value';
    $scale->addRange(array('color' => $color));
    ?>

#### Example - adding more than one RadialGaugeScaleRange

    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $first  = new \Kendo\Dataviz\UI\RadialGaugeScaleRange();
    $second = new \Kendo\Dataviz\UI\RadialGaugeScaleRange();
    $scale->addRange($first, $second);
    ?>

### reverse
Reverses the scale direction - values are increase anticlockwise.

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScale`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $scale->reverse(true);
    ?>

### startAngle
The start angle of the gauge.
The gauge is rendered clockwise(0 degrees are the 180 degrees in the polar coordinat system)

#### Returns
`\Kendo\Dataviz\UI\RadialGaugeScale`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\RadialGaugeScale();
    $scale->startAngle(1);
    ?>

