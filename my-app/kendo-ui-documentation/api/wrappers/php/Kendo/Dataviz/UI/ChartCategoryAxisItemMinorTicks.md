---
title: ChartCategoryAxisItemMinorTicks
slug: php-dataviz-ui-chartcategoryaxisitemminorticks
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItemMinorTicks

A PHP class representing the minorTicks setting of ChartCategoryAxisItem.


## Methods

### color
The color of the category axis minor ticks lines. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemMinorTicks`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMinorTicks();
    $minorTicks->color('value');
    ?>

### size
The length of the tick line in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemMinorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMinorTicks();
    $minorTicks->size(1);
    ?>

### visible
If set to true the chart will display the category axis minor ticks. By default the category axis minor ticks are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemMinorTicks`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMinorTicks();
    $minorTicks->visible(true);
    ?>

### width
The width of the minor ticks in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemMinorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $minorTicks = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMinorTicks();
    $minorTicks->width(1);
    ?>

