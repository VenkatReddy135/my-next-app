---
title: SparklineCategoryAxisItemMinorGridLines
slug: php-dataviz-ui-sparklinecategoryaxisitemminorgridlines
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorGridLines

A PHP class representing the minorGridLines setting of SparklineCategoryAxisItem.


## Methods

### color
The color of the lines. Any valid CSS color string will work here, including hex and
rgb.Note that this setting has no effect if the visibility of the minor
grid lines is not set to true.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorGridLines();
    $minorGridLines->color('value');
    ?>

### dashType
The dash type of the grid lines.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorGridLines`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorGridLines();
    $minorGridLines->dashType('value');
    ?>

### visible
The visibility of the lines.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorGridLines`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorGridLines();
    $minorGridLines->visible(true);
    ?>

### width
The width of the lines.Note that this setting has no effect if the visibility of the minor
grid lines is not set to true.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorGridLines`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $minorGridLines = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemMinorGridLines();
    $minorGridLines->width(1);
    ?>

