---
title: ChartXAxisItemLine
slug: php-dataviz-ui-chartxaxisitemline
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItemLine

A PHP class representing the line setting of ChartXAxisItem.


## Methods

### color
The color of the lines. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartXAxisItemLine();
    $line->color('value');
    ?>

### dashType
The dash type of the line.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartXAxisItemLine();
    $line->dashType('value');
    ?>

### visible
If set to true the chart will display the x axis lines. By default the x axis lines are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLine`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartXAxisItemLine();
    $line->visible(true);
    ?>

### width
The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.
#### Example - set the scatter chart x axis line width

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLine`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartXAxisItemLine();
    $line->width(1);
    ?>

