---
title: SparklineSeriesDefaultsLabels
slug: php-dataviz-ui-sparklineseriesdefaultslabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels

A PHP class representing the labels setting of SparklineSeriesDefaults.


## Methods

### background
The background color of the labels. Any valid CSS color string will work here,
including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels();
    $labels->background('value');
    ?>

### border

The border of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesDefaultsLabelsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesDefaultsLabelsBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesDefaultsLabelsBorder)
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels();
    $border = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsLabelsBorder();
    $color = 'value';
    $border->color($color);
    $labels->border($border);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels();
    $color = 'value';
    $labels->border(array('color' => $color));
    ?>

### color
The text color of the labels. Any valid CSS color string will work here, including hex
and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels();
    $labels->color('value');
    ?>

### font
The font style of the labels.
labels

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels();
    $labels->font('value');
    ?>

### format
The format of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels();
    $labels->format('value');
    ?>

### margin
The margin of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels();
    $labels->margin(1);
    ?>

### padding
The padding of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels();
    $labels->padding(1);
    ?>

### template
The label template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
The visibility of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsLabels();
    $labels->visible(true);
    ?>

