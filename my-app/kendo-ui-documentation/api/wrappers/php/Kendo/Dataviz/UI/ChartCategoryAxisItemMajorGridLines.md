---
title: ChartCategoryAxisItemMajorGridLines
slug: php-dataviz-ui-chartcategoryaxisitemmajorgridlines
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItemMajorGridLines

A PHP class representing the majorGridLines setting of ChartCategoryAxisItem.


## Methods

### color
The color of the major grid lines. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemMajorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $majorGridLines = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMajorGridLines();
    $majorGridLines->color('value');
    ?>

### dashType
The dash type of the major grid lines.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemMajorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $majorGridLines = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMajorGridLines();
    $majorGridLines->dashType('value');
    ?>

### visible
If set to true the chart will display the major grid lines. By default the major grid lines are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemMajorGridLines`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $majorGridLines = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMajorGridLines();
    $majorGridLines->visible(true);
    ?>

### width
The width of the category axis major grid lines in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemMajorGridLines`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $majorGridLines = new \Kendo\Dataviz\UI\ChartCategoryAxisItemMajorGridLines();
    $majorGridLines->width(1);
    ?>

