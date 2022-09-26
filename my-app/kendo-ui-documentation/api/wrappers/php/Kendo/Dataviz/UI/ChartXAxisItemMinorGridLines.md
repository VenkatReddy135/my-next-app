---
title: ChartXAxisItemMinorGridLines
slug: php-dataviz-ui-chartxaxisitemminorgridlines
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItemMinorGridLines

A PHP class representing the minorGridLines setting of ChartXAxisItem.


## Methods

### color
The color of the minor grid lines. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemMinorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\ChartXAxisItemMinorGridLines();
    $minorGridLines->color('value');
    ?>

### dashType
The dash type of the minor grid lines.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemMinorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\ChartXAxisItemMinorGridLines();
    $minorGridLines->dashType('value');
    ?>

### visible
If set to true the chart will display the minor grid lines. By default the minor grid lines are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemMinorGridLines`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\ChartXAxisItemMinorGridLines();
    $minorGridLines->visible(true);
    ?>

### width
The width of the category axis minor grid lines in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemMinorGridLines`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\ChartXAxisItemMinorGridLines();
    $minorGridLines->width(1);
    ?>

