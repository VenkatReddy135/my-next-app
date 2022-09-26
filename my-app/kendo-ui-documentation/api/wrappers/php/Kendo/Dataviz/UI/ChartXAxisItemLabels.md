---
title: ChartXAxisItemLabels
slug: php-dataviz-ui-chartxaxisitemlabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItemLabels

A PHP class representing the labels setting of ChartXAxisItem.


## Methods

### background
The background color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $labels->background('value');
    ?>

### border

The border of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemLabelsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemLabelsBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemLabelsBorder)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $border = new \Kendo\Dataviz\UI\ChartXAxisItemLabelsBorder();
    $color = 'value';
    $border->color($color);
    $labels->border($border);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $color = 'value';
    $labels->border(array('color' => $color));
    ?>

### color
The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $labels->color('value');
    ?>

### culture
The culture to use when formatting date values. See the globalization overview for more information.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $labels->culture('value');
    ?>

### dateFormats

The format used to display the labels when the x values are dates. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemLabelsDateFormats|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemLabelsDateFormats](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemLabelsDateFormats)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $dateFormats = new \Kendo\Dataviz\UI\ChartXAxisItemLabelsDateFormats();
    $days = 'value';
    $dateFormats->days($days);
    $labels->dateFormats($dateFormats);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $days = 'value';
    $labels->dateFormats(array('days' => $days));
    ?>

### font
The font style of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $labels->font('value');
    ?>

### format
The format used to display the labels. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $labels->format('value');
    ?>

### margin

The margin of the labels. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartXAxisItemLabelsMargin|array`




#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $labels->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemLabelsMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemLabelsMargin)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $margin = new \Kendo\Dataviz\UI\ChartXAxisItemLabelsMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $labels->margin($margin);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $bottom = 1;
    $labels->margin(array('bottom' => $bottom));
    ?>

### mirror
If set to true the chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $labels->mirror(true);
    ?>

### padding

The padding of the labels. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartXAxisItemLabelsPadding|array`




#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $labels->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemLabelsPadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemLabelsPadding)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $padding = new \Kendo\Dataviz\UI\ChartXAxisItemLabelsPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $labels->padding($padding);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $bottom = 1;
    $labels->padding(array('bottom' => $bottom));
    ?>

### rotation
The rotation angle of the labels. By default the labels are not rotated.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $labels->rotation(1);
    ?>

### skip
The number of labels to skip.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $labels->skip(1);
    ?>

### step
The label rendering step - render every n-th label. By default every label is rendered.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $labels->step(1);
    ?>

### template
The template which renders the labels.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the x axis labels. By default the x axis labels are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartXAxisItemLabels();
    $labels->visible(true);
    ?>

