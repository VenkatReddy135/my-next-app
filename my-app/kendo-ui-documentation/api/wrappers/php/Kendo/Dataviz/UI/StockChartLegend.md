---
title: StockChartLegend
slug: php-dataviz-ui-stockchartlegend
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartLegend

A PHP class representing the legend setting of StockChart.


## Methods

### background
The background color of the legend. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartLegend`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $legend = new \Kendo\Dataviz\UI\StockChartLegend();
    $legend->background('value');
    ?>

### border

The border of the legend.

#### Returns
`\Kendo\Dataviz\UI\StockChartLegend`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartLegendBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartLegendBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartLegendBorder)
    <?php
    $legend = new \Kendo\Dataviz\UI\StockChartLegend();
    $border = new \Kendo\Dataviz\UI\StockChartLegendBorder();
    $color = 'value';
    $border->color($color);
    $legend->border($border);
    ?>

#### Example - using array

    <?php
    $legend = new \Kendo\Dataviz\UI\StockChartLegend();
    $color = 'value';
    $legend->border(array('color' => $color));
    ?>

### inactiveItems

Configures the legend inactive items.

#### Returns
`\Kendo\Dataviz\UI\StockChartLegend`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartLegendInactiveItems|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartLegendInactiveItems](/api/wrappers/php/Kendo/Dataviz/UI/StockChartLegendInactiveItems)
    <?php
    $legend = new \Kendo\Dataviz\UI\StockChartLegend();
    $inactiveItems = new \Kendo\Dataviz\UI\StockChartLegendInactiveItems();
    $labels = new \Kendo\Dataviz\UI\StockChartLegendInactiveItemsLabels();
    $inactiveItems->labels($labels);
    $legend->inactiveItems($inactiveItems);
    ?>

#### Example - using array

    <?php
    $legend = new \Kendo\Dataviz\UI\StockChartLegend();
    $labels = new \Kendo\Dataviz\UI\StockChartLegendInactiveItemsLabels();
    $legend->inactiveItems(array('labels' => $labels));
    ?>

### labels

Configures the legend labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartLegend`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartLegendLabels|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartLegendLabels](/api/wrappers/php/Kendo/Dataviz/UI/StockChartLegendLabels)
    <?php
    $legend = new \Kendo\Dataviz\UI\StockChartLegend();
    $labels = new \Kendo\Dataviz\UI\StockChartLegendLabels();
    $color = 'value';
    $labels->color($color);
    $legend->labels($labels);
    ?>

#### Example - using array

    <?php
    $legend = new \Kendo\Dataviz\UI\StockChartLegend();
    $color = 'value';
    $legend->labels(array('color' => $color));
    ?>

### margin
The margin of the legend.

#### Returns
`\Kendo\Dataviz\UI\StockChartLegend`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $legend = new \Kendo\Dataviz\UI\StockChartLegend();
    $legend->margin(1);
    ?>

### offsetX
The X offset from its position.  The offset is relative to the current position of the legend.
For instance, a value of 20 will move the legend 20 pixels to the right of it's initial position.  A negative value will move the legend
to the left of the current position.

#### Returns
`\Kendo\Dataviz\UI\StockChartLegend`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $legend = new \Kendo\Dataviz\UI\StockChartLegend();
    $legend->offsetX(1);
    ?>

### offsetY
The Y offset from its position.  The offset is relative to the current position of the legend.
For instance, a value of 20 will move the legend 20 pixels down from it's initial position.  A negative value will move the legend
upwards from the current position.

#### Returns
`\Kendo\Dataviz\UI\StockChartLegend`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $legend = new \Kendo\Dataviz\UI\StockChartLegend();
    $legend->offsetY(1);
    ?>

### padding
The padding of the legend.

#### Returns
`\Kendo\Dataviz\UI\StockChartLegend`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $legend = new \Kendo\Dataviz\UI\StockChartLegend();
    $legend->padding(1);
    ?>

### position
The positions of the legend.

#### Returns
`\Kendo\Dataviz\UI\StockChartLegend`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $legend = new \Kendo\Dataviz\UI\StockChartLegend();
    $legend->position('value');
    ?>

### visible
The visibility of the legend.

#### Returns
`\Kendo\Dataviz\UI\StockChartLegend`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $legend = new \Kendo\Dataviz\UI\StockChartLegend();
    $legend->visible(true);
    ?>

