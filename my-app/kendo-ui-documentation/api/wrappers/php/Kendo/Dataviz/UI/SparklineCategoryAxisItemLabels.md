---
title: SparklineCategoryAxisItemLabels
slug: php-dataviz-ui-sparklinecategoryaxisitemlabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels

A PHP class representing the labels setting of SparklineCategoryAxisItem.


## Methods

### background
The background color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $labels->background('value');
    ?>

### border

The border of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabelsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabelsBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemLabelsBorder)
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $border = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabelsBorder();
    $color = 'value';
    $border->color($color);
    $labels->border($border);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $color = 'value';
    $labels->border(array('color' => $color));
    ?>

### color
The text color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $labels->color('value');
    ?>

### culture
Culture to use for formatting the dates. See Globalization for more information.
It uses the global culture by default.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $labels->culture('value');
    ?>

### dateFormats
Date format strings

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value ``



### font
The font style of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $labels->font('value');
    ?>

### format
The format of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $labels->format('value');
    ?>

### margin
The margin of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $labels->margin(1);
    ?>

### mirror
Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $labels->mirror(true);
    ?>

### padding
The padding of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $labels->padding(1);
    ?>

### rotation
The rotation angle of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $labels->rotation(1);
    ?>

### skip
Number of labels to skip.
Skips rendering the first n labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $labels->skip(1);
    ?>

### step
Label rendering step.
Every n-th label is rendered where n is the step

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $labels->step(1);
    ?>

### template
The label template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
The visibility of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemLabels();
    $labels->visible(true);
    ?>

