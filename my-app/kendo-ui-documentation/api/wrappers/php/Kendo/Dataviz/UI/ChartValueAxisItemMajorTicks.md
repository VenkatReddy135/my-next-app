---
title: ChartValueAxisItemMajorTicks
slug: php-dataviz-ui-chartvalueaxisitemmajorticks
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItemMajorTicks

A PHP class representing the majorTicks setting of ChartValueAxisItem.


## Methods

### color
The color of the value axis major ticks lines. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMajorTicks`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\ChartValueAxisItemMajorTicks();
    $majorTicks->color('value');
    ?>

### size
The length of the tick line in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMajorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\ChartValueAxisItemMajorTicks();
    $majorTicks->size(1);
    ?>

### visible
If set to true the chart will display the value axis major ticks. By default the value axis major ticks are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMajorTicks`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\ChartValueAxisItemMajorTicks();
    $majorTicks->visible(true);
    ?>

