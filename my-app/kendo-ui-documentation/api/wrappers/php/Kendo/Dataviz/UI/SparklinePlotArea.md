---
title: SparklinePlotArea
slug: php-dataviz-ui-sparklineplotarea
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklinePlotArea

A PHP class representing the plotArea setting of Sparkline.


## Methods

### background
The background color of the plot area.

#### Returns
`\Kendo\Dataviz\UI\SparklinePlotArea`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $plotArea = new \Kendo\Dataviz\UI\SparklinePlotArea();
    $plotArea->background('value');
    ?>

### border

The border of the plot area.

#### Returns
`\Kendo\Dataviz\UI\SparklinePlotArea`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklinePlotAreaBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklinePlotAreaBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklinePlotAreaBorder)
    <?php
    $plotArea = new \Kendo\Dataviz\UI\SparklinePlotArea();
    $border = new \Kendo\Dataviz\UI\SparklinePlotAreaBorder();
    $color = 'value';
    $border->color($color);
    $plotArea->border($border);
    ?>

#### Example - using array

    <?php
    $plotArea = new \Kendo\Dataviz\UI\SparklinePlotArea();
    $color = 'value';
    $plotArea->border(array('color' => $color));
    ?>

### margin
The margin of the plot area.

#### Returns
`\Kendo\Dataviz\UI\SparklinePlotArea`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $plotArea = new \Kendo\Dataviz\UI\SparklinePlotArea();
    $plotArea->margin(1);
    ?>

### opacity
The background opacity of the plot area.

#### Returns
`\Kendo\Dataviz\UI\SparklinePlotArea`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $plotArea = new \Kendo\Dataviz\UI\SparklinePlotArea();
    $plotArea->opacity(1);
    ?>

