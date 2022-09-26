---
title: ChartXAxisItemMajorGridLines
slug: php-dataviz-ui-chartxaxisitemmajorgridlines
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItemMajorGridLines

A PHP class representing the majorGridLines setting of ChartXAxisItem.


## Methods

### color
The color of the lines. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemMajorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $majorGridLines = new \Kendo\Dataviz\UI\ChartXAxisItemMajorGridLines();
    $majorGridLines->color('value');
    ?>

### dashType
The dash type of the line.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemMajorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $majorGridLines = new \Kendo\Dataviz\UI\ChartXAxisItemMajorGridLines();
    $majorGridLines->dashType('value');
    ?>

### visible
If set to true the chart will display the x major grid liness. By default the x major grid liness are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemMajorGridLines`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $majorGridLines = new \Kendo\Dataviz\UI\ChartXAxisItemMajorGridLines();
    $majorGridLines->visible(true);
    ?>

### width
The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.
#### Example - set the scatter chart x major grid lines width

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemMajorGridLines`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $majorGridLines = new \Kendo\Dataviz\UI\ChartXAxisItemMajorGridLines();
    $majorGridLines->width(1);
    ?>

