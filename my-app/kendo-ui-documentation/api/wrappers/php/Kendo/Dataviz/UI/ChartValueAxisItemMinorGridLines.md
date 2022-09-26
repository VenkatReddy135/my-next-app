---
title: ChartValueAxisItemMinorGridLines
slug: php-dataviz-ui-chartvalueaxisitemminorgridlines
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItemMinorGridLines

A PHP class representing the minorGridLines setting of ChartValueAxisItem.


## Methods

### color
The color of the minor grid lines. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMinorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\ChartValueAxisItemMinorGridLines();
    $minorGridLines->color('value');
    ?>

### dashType
The dash type of the minor grid lines.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMinorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\ChartValueAxisItemMinorGridLines();
    $minorGridLines->dashType('value');
    ?>

### type
The type of grid lines to draw for radar charts:The default type is "line" except for "radarColumn" charts.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMinorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\ChartValueAxisItemMinorGridLines();
    $minorGridLines->type('value');
    ?>

### visible
If set to true the chart will display the minor grid lines. By default the minor grid lines are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMinorGridLines`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\ChartValueAxisItemMinorGridLines();
    $minorGridLines->visible(true);
    ?>

### width
The width of the value axis minor grid lines in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemMinorGridLines`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\ChartValueAxisItemMinorGridLines();
    $minorGridLines->width(1);
    ?>

