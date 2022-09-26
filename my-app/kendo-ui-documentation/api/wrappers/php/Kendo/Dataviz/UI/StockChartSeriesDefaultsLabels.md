---
title: StockChartSeriesDefaultsLabels
slug: php-dataviz-ui-stockchartseriesdefaultslabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels

A PHP class representing the labels setting of StockChartSeriesDefaults.


## Methods

### background
The background color of the labels. Any valid CSS color string will work here,
including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels();
    $labels->background('value');
    ?>

### border

The border of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesDefaultsLabelsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesDefaultsLabelsBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesDefaultsLabelsBorder)
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels();
    $border = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsLabelsBorder();
    $color = 'value';
    $border->color($color);
    $labels->border($border);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels();
    $color = 'value';
    $labels->border(array('color' => $color));
    ?>

### color
The text color of the labels. Any valid CSS color string will work here, including hex
and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels();
    $labels->color('value');
    ?>

### font
The font style of the labels.
labels

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels();
    $labels->font('value');
    ?>

### format
The format of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels();
    $labels->format('value');
    ?>

### margin
The margin of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels();
    $labels->margin(1);
    ?>

### padding
The padding of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels();
    $labels->padding(1);
    ?>

### template
The label template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
The visibility of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartSeriesDefaultsLabels();
    $labels->visible(true);
    ?>

