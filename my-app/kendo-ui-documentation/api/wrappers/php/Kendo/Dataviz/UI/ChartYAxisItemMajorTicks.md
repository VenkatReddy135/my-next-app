---
title: ChartYAxisItemMajorTicks
slug: php-dataviz-ui-chartyaxisitemmajorticks
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartYAxisItemMajorTicks

A PHP class representing the majorTicks setting of ChartYAxisItem.


## Methods

### color
The color of the scatter chart y axis major ticks lines. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemMajorTicks`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\ChartYAxisItemMajorTicks();
    $majorTicks->color('value');
    ?>

### size
The length of the tick line in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemMajorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\ChartYAxisItemMajorTicks();
    $majorTicks->size(1);
    ?>

### visible
If set to true the chart will display the scatter chart y axis major ticks. By default the category axis major ticks are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemMajorTicks`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\ChartYAxisItemMajorTicks();
    $majorTicks->visible(true);
    ?>

### width
The width of the major ticks in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemMajorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\ChartYAxisItemMajorTicks();
    $majorTicks->width(1);
    ?>

