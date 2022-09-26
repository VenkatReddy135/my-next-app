---
title: SparklineChartArea
slug: php-dataviz-ui-sparklinechartarea
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineChartArea

A PHP class representing the chartArea setting of Sparkline.


## Methods

### background
The background color of the chart area.

#### Returns
`\Kendo\Dataviz\UI\SparklineChartArea`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $chartArea = new \Kendo\Dataviz\UI\SparklineChartArea();
    $chartArea->background('value');
    ?>

### border

The border of the chart area.

#### Returns
`\Kendo\Dataviz\UI\SparklineChartArea`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineChartAreaBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineChartAreaBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineChartAreaBorder)
    <?php
    $chartArea = new \Kendo\Dataviz\UI\SparklineChartArea();
    $border = new \Kendo\Dataviz\UI\SparklineChartAreaBorder();
    $color = 'value';
    $border->color($color);
    $chartArea->border($border);
    ?>

#### Example - using array

    <?php
    $chartArea = new \Kendo\Dataviz\UI\SparklineChartArea();
    $color = 'value';
    $chartArea->border(array('color' => $color));
    ?>

### height
The height of the chart area.

#### Returns
`\Kendo\Dataviz\UI\SparklineChartArea`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $chartArea = new \Kendo\Dataviz\UI\SparklineChartArea();
    $chartArea->height(1);
    ?>

### margin
The margin of the chart area.

#### Returns
`\Kendo\Dataviz\UI\SparklineChartArea`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $chartArea = new \Kendo\Dataviz\UI\SparklineChartArea();
    $chartArea->margin(1);
    ?>

### opacity
The background opacity of the chart area.

#### Returns
`\Kendo\Dataviz\UI\SparklineChartArea`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $chartArea = new \Kendo\Dataviz\UI\SparklineChartArea();
    $chartArea->opacity(1);
    ?>

### width
The width of the chart area.

#### Returns
`\Kendo\Dataviz\UI\SparklineChartArea`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $chartArea = new \Kendo\Dataviz\UI\SparklineChartArea();
    $chartArea->width(1);
    ?>

