---
title: ChartYAxisItemLine
slug: php-dataviz-ui-chartyaxisitemline
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartYAxisItemLine

A PHP class representing the line setting of ChartYAxisItem.


## Methods

### color
The color of the lines. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartYAxisItemLine();
    $line->color('value');
    ?>

### dashType
The dash type of the line.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartYAxisItemLine();
    $line->dashType('value');
    ?>

### visible
If set to true the chart will display the y axis lines. By default the y axis lines are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLine`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartYAxisItemLine();
    $line->visible(true);
    ?>

### width
The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.
#### Example - set the scatter chart y axis line width

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLine`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartYAxisItemLine();
    $line->width(1);
    ?>

