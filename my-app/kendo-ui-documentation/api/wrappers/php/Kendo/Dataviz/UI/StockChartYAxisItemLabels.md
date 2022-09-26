---
title: StockChartYAxisItemLabels
slug: php-dataviz-ui-stockchartyaxisitemlabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartYAxisItemLabels

A PHP class representing the labels setting of StockChartYAxisItem.


## Methods

### background
The background color of the labels. Any valid CSS color string will work here, including
hex and rgb

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $labels->background('value');
    ?>

### border

The border of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartYAxisItemLabelsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartYAxisItemLabelsBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartYAxisItemLabelsBorder)
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $border = new \Kendo\Dataviz\UI\StockChartYAxisItemLabelsBorder();
    $color = 'value';
    $border->color($color);
    $labels->border($border);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $color = 'value';
    $labels->border(array('color' => $color));
    ?>

### color
The text color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $labels->color('value');
    ?>

### culture
Culture to use for formatting the dates. See Globalization for more information.
It defaults to the global culture.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $labels->culture('value');
    ?>

### dateFormats
Date format strings

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value ``



### font
The font style of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $labels->font('value');
    ?>

### format
The format of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $labels->format('value');
    ?>

### margin
The margin of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $labels->margin(1);
    ?>

### mirror
Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $labels->mirror(true);
    ?>

### padding
The padding of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $labels->padding(1);
    ?>

### rotation
The rotation angle of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $labels->rotation(1);
    ?>

### skip
Number of labels to skip.
Skips rendering the first n labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $labels->skip(1);
    ?>

### step
Label rendering step.
Every n-th label is rendered where n is the step

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $labels->step(1);
    ?>

### template
The label template.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
The visibility of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartYAxisItemLabels();
    $labels->visible(true);
    ?>

