---
title: ChartArea
slug: php-dataviz-ui-chartarea
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartArea

A PHP class representing the chartArea setting of Chart.


## Methods

### background
The background color of the chart area. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartArea`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $chartArea = new \Kendo\Dataviz\UI\ChartArea();
    $chartArea->background('value');
    ?>

### border

The border of the chart area.

#### Returns
`\Kendo\Dataviz\UI\ChartArea`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartAreaBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartAreaBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartAreaBorder)
    <?php
    $chartArea = new \Kendo\Dataviz\UI\ChartArea();
    $border = new \Kendo\Dataviz\UI\ChartAreaBorder();
    $color = 'value';
    $border->color($color);
    $chartArea->border($border);
    ?>

#### Example - using array

    <?php
    $chartArea = new \Kendo\Dataviz\UI\ChartArea();
    $color = 'value';
    $chartArea->border(array('color' => $color));
    ?>

### height
The height of the chart area.

#### Returns
`\Kendo\Dataviz\UI\ChartArea`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $chartArea = new \Kendo\Dataviz\UI\ChartArea();
    $chartArea->height(1);
    ?>

### margin

The margin of the chart area. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartArea`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartAreaMargin|array`




#### Example  - using float
    <?php
    $chartArea = new \Kendo\Dataviz\UI\ChartArea();
    $chartArea->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartAreaMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartAreaMargin)
    <?php
    $chartArea = new \Kendo\Dataviz\UI\ChartArea();
    $margin = new \Kendo\Dataviz\UI\ChartAreaMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $chartArea->margin($margin);
    ?>

#### Example - using array

    <?php
    $chartArea = new \Kendo\Dataviz\UI\ChartArea();
    $bottom = 1;
    $chartArea->margin(array('bottom' => $bottom));
    ?>

### opacity
The background opacity of the chart area. By default the background is opaque.

#### Returns
`\Kendo\Dataviz\UI\ChartArea`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $chartArea = new \Kendo\Dataviz\UI\ChartArea();
    $chartArea->opacity(1);
    ?>

### width
The width of the chart area.

#### Returns
`\Kendo\Dataviz\UI\ChartArea`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $chartArea = new \Kendo\Dataviz\UI\ChartArea();
    $chartArea->width(1);
    ?>

