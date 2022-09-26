---
title: SparklineValueAxisItemLine
slug: php-dataviz-ui-sparklinevalueaxisitemline
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineValueAxisItemLine

A PHP class representing the line setting of SparklineValueAxisItem.


## Methods

### color
The color of the line. This will also effect the major and minor ticks, but
not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\SparklineValueAxisItemLine();
    $line->color('value');
    ?>

### dashType
The dash type of the line.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\SparklineValueAxisItemLine();
    $line->dashType('value');
    ?>

### visible
The visibility of the line.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLine`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\SparklineValueAxisItemLine();
    $line->visible(true);
    ?>

### width
The width of the line. This will also effect the major and minor ticks, but
not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLine`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\SparklineValueAxisItemLine();
    $line->width(1);
    ?>

