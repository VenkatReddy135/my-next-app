---
title: ChartValueAxisItemMajorGridLines
slug: php-dataviz-ui-chartvalueaxisitemmajorgridlines
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItemMajorGridLines

A PHP class representing the majorGridLines setting of ChartValueAxisItem.


## Methods

### color
The color of the major grid lines. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMajorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $majorGridLines = new \Kendo\Dataviz\UI\ChartValueAxisItemMajorGridLines();
    $majorGridLines->color('value');
    ?>

### dashType
The dash type of the major grid lines.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMajorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $majorGridLines = new \Kendo\Dataviz\UI\ChartValueAxisItemMajorGridLines();
    $majorGridLines->dashType('value');
    ?>

### type
The type of grid lines to draw for radar charts:The default type is "line" except for "radarColumn" charts.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMajorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $majorGridLines = new \Kendo\Dataviz\UI\ChartValueAxisItemMajorGridLines();
    $majorGridLines->type('value');
    ?>

### visible
If set to true the chart will display the major grid lines. By default the major grid lines are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMajorGridLines`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $majorGridLines = new \Kendo\Dataviz\UI\ChartValueAxisItemMajorGridLines();
    $majorGridLines->visible(true);
    ?>

### width
The width of the value axis major grid lines in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMajorGridLines`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $majorGridLines = new \Kendo\Dataviz\UI\ChartValueAxisItemMajorGridLines();
    $majorGridLines->width(1);
    ?>

