---
title: StockChartCategoryAxisItemLabels
slug: php-dataviz-ui-stockchartcategoryaxisitemlabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels

A PHP class representing the labels setting of StockChartCategoryAxisItem.


## Methods

### background
The background color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $labels->background('value');
    ?>

### border

The border of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabelsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabelsBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemLabelsBorder)
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $border = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabelsBorder();
    $color = 'value';
    $border->color($color);
    $labels->border($border);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $color = 'value';
    $labels->border(array('color' => $color));
    ?>

### color
The text color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $labels->color('value');
    ?>

### culture
Culture to use for formatting the dates. See Globalization for more information.
It defaults to the global culture.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $labels->culture('value');
    ?>

### dateFormats
Date format strings

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value ``



### font
The font style of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $labels->font('value');
    ?>

### format
The format of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $labels->format('value');
    ?>

### margin
The margin of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $labels->margin(1);
    ?>

### mirror
Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $labels->mirror(true);
    ?>

### padding
The padding of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $labels->padding(1);
    ?>

### rotation
The rotation angle of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $labels->rotation(1);
    ?>

### skip
Number of labels to skip.
Skips rendering the first n labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $labels->skip(1);
    ?>

### step
Label rendering step.
Every n-th label is rendered where n is the step

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $labels->step(1);
    ?>

### template
The label template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
The visibility of the labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemLabels();
    $labels->visible(true);
    ?>

