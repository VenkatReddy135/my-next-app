---
title: ChartPlotArea
slug: php-dataviz-ui-chartplotarea
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartPlotArea

A PHP class representing the plotArea setting of Chart.


## Methods

### background
The background color of the chart plot area. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartPlotArea`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $plotArea = new \Kendo\Dataviz\UI\ChartPlotArea();
    $plotArea->background('value');
    ?>

### border

The border of the chart plot area.

#### Returns
`\Kendo\Dataviz\UI\ChartPlotArea`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartPlotAreaBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartPlotAreaBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartPlotAreaBorder)
    <?php
    $plotArea = new \Kendo\Dataviz\UI\ChartPlotArea();
    $border = new \Kendo\Dataviz\UI\ChartPlotAreaBorder();
    $color = 'value';
    $border->color($color);
    $plotArea->border($border);
    ?>

#### Example - using array

    <?php
    $plotArea = new \Kendo\Dataviz\UI\ChartPlotArea();
    $color = 'value';
    $plotArea->border(array('color' => $color));
    ?>

### margin

The margin of the chart plot area. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartPlotArea`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartPlotAreaMargin|array`




#### Example  - using float
    <?php
    $plotArea = new \Kendo\Dataviz\UI\ChartPlotArea();
    $plotArea->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartPlotAreaMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartPlotAreaMargin)
    <?php
    $plotArea = new \Kendo\Dataviz\UI\ChartPlotArea();
    $margin = new \Kendo\Dataviz\UI\ChartPlotAreaMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $plotArea->margin($margin);
    ?>

#### Example - using array

    <?php
    $plotArea = new \Kendo\Dataviz\UI\ChartPlotArea();
    $bottom = 1;
    $plotArea->margin(array('bottom' => $bottom));
    ?>

### opacity
The background opacity of the chart plot area. By default the background is opaque.

#### Returns
`\Kendo\Dataviz\UI\ChartPlotArea`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $plotArea = new \Kendo\Dataviz\UI\ChartPlotArea();
    $plotArea->opacity(1);
    ?>

### padding

The padding of the chart plot area. A numeric value will set all paddings.The default padding for pie, donut, radar and polar charts is proportional of the chart size.

#### Returns
`\Kendo\Dataviz\UI\ChartPlotArea`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartPlotAreaPadding|array`




#### Example  - using float
    <?php
    $plotArea = new \Kendo\Dataviz\UI\ChartPlotArea();
    $plotArea->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartPlotAreaPadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartPlotAreaPadding)
    <?php
    $plotArea = new \Kendo\Dataviz\UI\ChartPlotArea();
    $padding = new \Kendo\Dataviz\UI\ChartPlotAreaPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $plotArea->padding($padding);
    ?>

#### Example - using array

    <?php
    $plotArea = new \Kendo\Dataviz\UI\ChartPlotArea();
    $bottom = 1;
    $plotArea->padding(array('bottom' => $bottom));
    ?>

