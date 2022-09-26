---
title: SparklineCategoryAxisItemLine
slug: php-dataviz-ui-sparklinecategoryaxisitemline
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineCategoryAxisItemLine

A PHP class representing the line setting of SparklineCategoryAxisItem.


## Methods

### color
The color of the lines. Any valid CSS color string will work here, including hex and rgb.Note: This will also effect the major and minor ticks, but not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLine();
    $line->color('value');
    ?>

### dashType
The dash type of the line.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLine();
    $line->dashType('value');
    ?>

### visible
The visibility of the lines.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLine`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLine();
    $line->visible(true);
    ?>

### width
The width of the line. This will also effect the major and minor ticks, but
not the grid lines.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLine`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLine();
    $line->width(1);
    ?>

