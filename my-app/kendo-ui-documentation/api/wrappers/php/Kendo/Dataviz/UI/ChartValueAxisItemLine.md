---
title: ChartValueAxisItemLine
slug: php-dataviz-ui-chartvalueaxisitemline
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItemLine

A PHP class representing the line setting of ChartValueAxisItem.


## Methods

### color
The color of the lines. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartValueAxisItemLine();
    $line->color('value');
    ?>

### dashType
The dash type of the line.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartValueAxisItemLine();
    $line->dashType('value');
    ?>

### visible
If set to true the chart will display the value axis lines. By default the value axis lines are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLine`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartValueAxisItemLine();
    $line->visible(true);
    ?>

### width
The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLine`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartValueAxisItemLine();
    $line->width(1);
    ?>

