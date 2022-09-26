---
title: ChartLegend
slug: php-dataviz-ui-chartlegend
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartLegend

A PHP class representing the legend setting of Chart.


## Methods

### background
The background color of the legend. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartLegend`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $legend->background('value');
    ?>

### border

The border of the legend.

#### Returns
`\Kendo\Dataviz\UI\ChartLegend`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartLegendBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartLegendBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartLegendBorder)
    <?php
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $border = new \Kendo\Dataviz\UI\ChartLegendBorder();
    $color = 'value';
    $border->color($color);
    $legend->border($border);
    ?>

#### Example - using array

    <?php
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $color = 'value';
    $legend->border(array('color' => $color));
    ?>

### inactiveItems

The chart inactive legend items configuration.

#### Returns
`\Kendo\Dataviz\UI\ChartLegend`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartLegendInactiveItems|array`


#### Example - using [\Kendo\Dataviz\UI\ChartLegendInactiveItems](/api/wrappers/php/Kendo/Dataviz/UI/ChartLegendInactiveItems)
    <?php
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $inactiveItems = new \Kendo\Dataviz\UI\ChartLegendInactiveItems();
    $labels = new \Kendo\Dataviz\UI\ChartLegendInactiveItemsLabels();
    $inactiveItems->labels($labels);
    $legend->inactiveItems($inactiveItems);
    ?>

#### Example - using array

    <?php
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $labels = new \Kendo\Dataviz\UI\ChartLegendInactiveItemsLabels();
    $legend->inactiveItems(array('labels' => $labels));
    ?>

### labels

The chart legend label configuration.

#### Returns
`\Kendo\Dataviz\UI\ChartLegend`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartLegendLabels|array`


#### Example - using [\Kendo\Dataviz\UI\ChartLegendLabels](/api/wrappers/php/Kendo/Dataviz/UI/ChartLegendLabels)
    <?php
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $labels = new \Kendo\Dataviz\UI\ChartLegendLabels();
    $color = 'value';
    $labels->color($color);
    $legend->labels($labels);
    ?>

#### Example - using array

    <?php
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $color = 'value';
    $legend->labels(array('color' => $color));
    ?>

### margin

The margin of the chart legend. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartLegend`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartLegendMargin|array`




#### Example  - using float
    <?php
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $legend->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartLegendMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartLegendMargin)
    <?php
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $margin = new \Kendo\Dataviz\UI\ChartLegendMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $legend->margin($margin);
    ?>

#### Example - using array

    <?php
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $bottom = 1;
    $legend->margin(array('bottom' => $bottom));
    ?>

### offsetX
The X offset of the chart legend. The offset is relative to the default position of the legend.
For instance, a value of 20 will move the legend 20 pixels to the right of its initial position.
A negative value will move the legend to the left of its current position.

#### Returns
`\Kendo\Dataviz\UI\ChartLegend`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $legend->offsetX(1);
    ?>

### offsetY
The Y offset of the chart legend.  The offset is relative to the current position of the legend.
For instance, a value of 20 will move the legend 20 pixels down from its initial position.
A negative value will move the legend upwards from its current position.

#### Returns
`\Kendo\Dataviz\UI\ChartLegend`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $legend->offsetY(1);
    ?>

### position
The positions of the chart legend.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\ChartLegend`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $legend->position('value');
    ?>

### visible
If set to true the chart will display the legend. By default the chart legend is visible.

#### Returns
`\Kendo\Dataviz\UI\ChartLegend`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $legend->visible(true);
    ?>

