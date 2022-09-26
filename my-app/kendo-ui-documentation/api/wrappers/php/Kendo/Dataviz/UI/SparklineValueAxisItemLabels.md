---
title: SparklineValueAxisItemLabels
slug: php-dataviz-ui-sparklinevalueaxisitemlabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineValueAxisItemLabels

A PHP class representing the labels setting of SparklineValueAxisItem.


## Methods

### background
The background color of the labels. Any valid CSS color string will work here, including
hex and rgb

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $labels->background('value');
    ?>

### border

The border of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemLabelsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemLabelsBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemLabelsBorder)
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $border = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabelsBorder();
    $color = 'value';
    $border->color($color);
    $labels->border($border);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $color = 'value';
    $labels->border(array('color' => $color));
    ?>

### color
The text color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $labels->color('value');
    ?>

### font
The font style of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $labels->font('value');
    ?>

### format
The format of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $labels->format('value');
    ?>

### margin
The margin of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $labels->margin(1);
    ?>

### mirror
Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $labels->mirror(true);
    ?>

### padding
The padding of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $labels->padding(1);
    ?>

### rotation
The rotation angle of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $labels->rotation(1);
    ?>

### skip
Number of labels to skip.
Skips rendering the first n labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $labels->skip(1);
    ?>

### step
Label rendering step.
Every n-th label is rendered where n is the step

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $labels->step(1);
    ?>

### template
The label template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
The visibility of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineValueAxisItemLabels();
    $labels->visible(true);
    ?>

