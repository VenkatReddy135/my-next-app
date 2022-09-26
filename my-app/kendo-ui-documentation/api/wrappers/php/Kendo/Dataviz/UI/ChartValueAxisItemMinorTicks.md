---
title: ChartValueAxisItemMinorTicks
slug: php-dataviz-ui-chartvalueaxisitemminorticks
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItemMinorTicks

A PHP class representing the minorTicks setting of ChartValueAxisItem.


## Methods

### color
The color of the value axis minor ticks lines. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMinorTicks`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\ChartValueAxisItemMinorTicks();
    $minorTicks->color('value');
    ?>

### size
The length of the tick line in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMinorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\ChartValueAxisItemMinorTicks();
    $minorTicks->size(1);
    ?>

### visible
If set to true the chart will display the value axis minor ticks. By default the value axis minor ticks are not visible.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMinorTicks`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\ChartValueAxisItemMinorTicks();
    $minorTicks->visible(true);
    ?>

### width
The width of the minor ticks in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMinorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\ChartValueAxisItemMinorTicks();
    $minorTicks->width(1);
    ?>

