---
title: ChartYAxisItemLabels
slug: php-dataviz-ui-chartyaxisitemlabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartYAxisItemLabels

A PHP class representing the labels setting of ChartYAxisItem.


## Methods

### background
The background color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $labels->background('value');
    ?>

### border

The border of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemLabelsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemLabelsBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemLabelsBorder)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $border = new \Kendo\Dataviz\UI\ChartYAxisItemLabelsBorder();
    $color = 'value';
    $border->color($color);
    $labels->border($border);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $color = 'value';
    $labels->border(array('color' => $color));
    ?>

### color
The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $labels->color('value');
    ?>

### culture
The culture to use when formatting date values. See the globalization overview for more information.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $labels->culture('value');
    ?>

### dateFormats

The format used to display the labels when the x values are dates. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemLabelsDateFormats|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemLabelsDateFormats](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemLabelsDateFormats)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $dateFormats = new \Kendo\Dataviz\UI\ChartYAxisItemLabelsDateFormats();
    $days = 'value';
    $dateFormats->days($days);
    $labels->dateFormats($dateFormats);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $days = 'value';
    $labels->dateFormats(array('days' => $days));
    ?>

### font
The font style of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $labels->font('value');
    ?>

### format
The format used to display the labels. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $labels->format('value');
    ?>

### margin

The margin of the labels. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartYAxisItemLabelsMargin|array`




#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $labels->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemLabelsMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemLabelsMargin)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $margin = new \Kendo\Dataviz\UI\ChartYAxisItemLabelsMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $labels->margin($margin);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $bottom = 1;
    $labels->margin(array('bottom' => $bottom));
    ?>

### mirror
If set to true the chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $labels->mirror(true);
    ?>

### padding

The padding of the labels. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartYAxisItemLabelsPadding|array`




#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $labels->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemLabelsPadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemLabelsPadding)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $padding = new \Kendo\Dataviz\UI\ChartYAxisItemLabelsPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $labels->padding($padding);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $bottom = 1;
    $labels->padding(array('bottom' => $bottom));
    ?>

### rotation
The rotation angle of the labels. By default the labels are not rotated.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $labels->rotation(1);
    ?>

### skip
The number of labels to skip.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $labels->skip(1);
    ?>

### step
The label rendering step - render every n-th label. By default every label is rendered.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $labels->step(1);
    ?>

### template
The template which renders the labels.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the y axis labels. By default the y axis labels are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartYAxisItemLabels();
    $labels->visible(true);
    ?>

