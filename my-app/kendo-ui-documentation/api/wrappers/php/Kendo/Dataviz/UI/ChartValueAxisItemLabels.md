---
title: ChartValueAxisItemLabels
slug: php-dataviz-ui-chartvalueaxisitemlabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItemLabels

A PHP class representing the labels setting of ChartValueAxisItem.


## Methods

### background
The background color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $labels->background('value');
    ?>

### border

The border of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemLabelsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemLabelsBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemLabelsBorder)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $border = new \Kendo\Dataviz\UI\ChartValueAxisItemLabelsBorder();
    $color = 'value';
    $border->color($color);
    $labels->border($border);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $color = 'value';
    $labels->border(array('color' => $color));
    ?>

### color
The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $labels->color('value');
    ?>

### font
The font style of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $labels->font('value');
    ?>

### format
The format used to display the labels. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $labels->format('value');
    ?>

### margin

The margin of the labels. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabels`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartValueAxisItemLabelsMargin|array`




#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $labels->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemLabelsMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemLabelsMargin)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $margin = new \Kendo\Dataviz\UI\ChartValueAxisItemLabelsMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $labels->margin($margin);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $bottom = 1;
    $labels->margin(array('bottom' => $bottom));
    ?>

### mirror
If set to true the chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $labels->mirror(true);
    ?>

### padding

The padding of the labels. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabels`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartValueAxisItemLabelsPadding|array`




#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $labels->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemLabelsPadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemLabelsPadding)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $padding = new \Kendo\Dataviz\UI\ChartValueAxisItemLabelsPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $labels->padding($padding);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $bottom = 1;
    $labels->padding(array('bottom' => $bottom));
    ?>

### rotation
The rotation angle (in degrees) of the labels. By default the labels are not rotated.Angles increase clockwise and zero is to the left. Negative values are acceptable.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $labels->rotation(1);
    ?>

### skip
The number of labels to skip. By default no labels are skipped.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $labels->skip(1);
    ?>

### step
Label rendering step.
Every n-th label is rendered where n is the step

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $labels->step(1);
    ?>

### template
The template which renders the labels.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the value axis labels. By default the category axis labels are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartValueAxisItemLabels();
    $labels->visible(true);
    ?>

