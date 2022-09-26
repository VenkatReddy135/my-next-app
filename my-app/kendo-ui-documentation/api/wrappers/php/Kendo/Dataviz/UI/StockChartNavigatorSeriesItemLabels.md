---
title: StockChartNavigatorSeriesItemLabels
slug: php-dataviz-ui-stockchartnavigatorseriesitemlabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels

A PHP class representing the labels setting of StockChartNavigatorSeriesItem.


## Methods

### background
The background color of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels();
    $labels->background('value');
    ?>

### border

The border of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabelsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabelsBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorSeriesItemLabelsBorder)
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels();
    $border = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabelsBorder();
    $color = 'value';
    $border->color($color);
    $labels->border($border);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels();
    $color = 'value';
    $labels->border(array('color' => $color));
    ?>

### color
The text color of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels();
    $labels->color('value');
    ?>

### font
The font style of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels();
    $labels->font('value');
    ?>

### format
The format of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels();
    $labels->format('value');
    ?>

### margin
The margin of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels();
    $labels->margin(1);
    ?>

### padding
The padding of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels();
    $labels->padding(1);
    ?>

### position
Defines the position of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels();
    $labels->position('value');
    ?>

### template
The label template. Template variables:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
The visibility of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItemLabels();
    $labels->visible(true);
    ?>

