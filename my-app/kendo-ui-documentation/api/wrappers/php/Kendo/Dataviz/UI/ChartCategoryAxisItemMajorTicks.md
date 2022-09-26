---
title: ChartCategoryAxisItemMajorTicks
slug: php-dataviz-ui-chartcategoryaxisitemmajorticks
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItemMajorTicks

A PHP class representing the majorTicks setting of ChartCategoryAxisItem.


## Methods

### color
The color of the category axis major ticks lines. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemMajorTicks`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMajorTicks();
    $majorTicks->color('value');
    ?>

### size
The length of the tick line in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemMajorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMajorTicks();
    $majorTicks->size(1);
    ?>

### visible
If set to true the chart will display the category axis major ticks. By default the category axis major ticks are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemMajorTicks`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMajorTicks();
    $majorTicks->visible(true);
    ?>

### width
The width of the major ticks in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemMajorTicks`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $majorTicks = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMajorTicks();
    $majorTicks->width(1);
    ?>

