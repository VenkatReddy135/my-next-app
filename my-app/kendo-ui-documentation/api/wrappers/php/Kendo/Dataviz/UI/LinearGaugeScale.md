---
title: LinearGaugeScale
slug: php-dataviz-ui-lineargaugescale
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\LinearGaugeScale

A PHP class representing the scale setting of LinearGauge.


## Methods

### labels

Configures the scale labels.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScale`

#### Parameters

##### $value `\Kendo\Dataviz\UI\LinearGaugeScaleLabels|array`


#### Example - using [\Kendo\Dataviz\UI\LinearGaugeScaleLabels](/api/wrappers/php/Kendo/Dataviz/UI/LinearGaugeScaleLabels)
    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $labels = new \Kendo\Dataviz\UI\LinearGaugeScaleLabels();
    $background = 'value';
    $labels->background($background);
    $scale->labels($labels);
    ?>

#### Example - using array

    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $background = 'value';
    $scale->labels(array('background' => $background));
    ?>

### line

Configures the axis line.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScale`

#### Parameters

##### $value `\Kendo\Dataviz\UI\LinearGaugeScaleLine|array`


#### Example - using [\Kendo\Dataviz\UI\LinearGaugeScaleLine](/api/wrappers/php/Kendo/Dataviz/UI/LinearGaugeScaleLine)
    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $line = new \Kendo\Dataviz\UI\LinearGaugeScaleLine();
    $color = 'value';
    $line->color($color);
    $scale->line($line);
    ?>

#### Example - using array

    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $color = 'value';
    $scale->line(array('color' => $color));
    ?>

### majorTicks

Configures the scale major ticks.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScale`

#### Parameters

##### $value `\Kendo\Dataviz\UI\LinearGaugeScaleMajorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\LinearGaugeScaleMajorTicks](/api/wrappers/php/Kendo/Dataviz/UI/LinearGaugeScaleMajorTicks)
    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $majorTicks = new \Kendo\Dataviz\UI\LinearGaugeScaleMajorTicks();
    $color = 'value';
    $majorTicks->color($color);
    $scale->majorTicks($majorTicks);
    ?>

#### Example - using array

    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $color = 'value';
    $scale->majorTicks(array('color' => $color));
    ?>

### majorUnit
The interval between major divisions.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScale`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $scale->majorUnit(1);
    ?>

### max
The maximum value of the scale.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScale`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $scale->max(1);
    ?>

### min
The minimum value of the scale.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScale`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $scale->min(1);
    ?>

### minorTicks

Configures the scale minor ticks.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScale`

#### Parameters

##### $value `\Kendo\Dataviz\UI\LinearGaugeScaleMinorTicks|array`


#### Example - using [\Kendo\Dataviz\UI\LinearGaugeScaleMinorTicks](/api/wrappers/php/Kendo/Dataviz/UI/LinearGaugeScaleMinorTicks)
    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $minorTicks = new \Kendo\Dataviz\UI\LinearGaugeScaleMinorTicks();
    $color = 'value';
    $minorTicks->color($color);
    $scale->minorTicks($minorTicks);
    ?>

#### Example - using array

    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $color = 'value';
    $scale->minorTicks(array('color' => $color));
    ?>

### minorUnit
The interval between minor divisions.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScale`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $scale->minorUnit(1);
    ?>

### mirror
Mirrors the scale labels and ticks.
If the labels are normally on the left side of the scale, mirroring the scale will render them to the right.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScale`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $scale->mirror(true);
    ?>

### rangePlaceholderColor
The default color for the ranges.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScale`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $scale->rangePlaceholderColor('value');
    ?>

### addRange

Adds one or more LinearGaugeScaleRange to the LinearGaugeScale.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScale`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\LinearGaugeScaleRange|array`

#### Example - using \Kendo\Dataviz\UI\LinearGaugeScaleRange

    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $range = new \Kendo\Dataviz\UI\LinearGaugeScaleRange();
    $color = 'value';
    $range->color($color);
    $scale->addRange($range);
    ?>

#### Example - using array

    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $color = 'value';
    $scale->addRange(array('color' => $color));
    ?>

#### Example - adding more than one LinearGaugeScaleRange

    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $first  = new \Kendo\Dataviz\UI\LinearGaugeScaleRange();
    $second = new \Kendo\Dataviz\UI\LinearGaugeScaleRange();
    $scale->addRange($first, $second);
    ?>

### reverse
Reverses the axis direction - values increase from right to left and from top to bottom.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScale`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $scale->reverse(true);
    ?>

### vertical
The position of the gauge.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScale`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $scale = new \Kendo\Dataviz\UI\LinearGaugeScale();
    $scale->vertical(true);
    ?>

