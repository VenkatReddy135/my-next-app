---
title: ChartCategoryAxisItemLabels
slug: php-dataviz-ui-chartcategoryaxisitemlabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels

A PHP class representing the labels setting of ChartCategoryAxisItem.


## Methods

### background
The background color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $labels->background('value');
    ?>

### border

The border of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemLabelsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemLabelsBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemLabelsBorder)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $border = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabelsBorder();
    $color = 'value';
    $border->color($color);
    $labels->border($border);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $color = 'value';
    $labels->border(array('color' => $color));
    ?>

### color
The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $labels->color('value');
    ?>

### culture
The culture to use when formatting date values. See the globalization overview for more information.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $labels->culture('value');
    ?>

### dateFormats

The format used to display the labels when the categories are dates. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemLabelsDateFormats|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemLabelsDateFormats](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemLabelsDateFormats)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $dateFormats = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabelsDateFormats();
    $days = 'value';
    $dateFormats->days($days);
    $labels->dateFormats($dateFormats);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $days = 'value';
    $labels->dateFormats(array('days' => $days));
    ?>

### font
The font style of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $labels->font('value');
    ?>

### format
The format used to display the labels. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $labels->format('value');
    ?>

### margin

The margin of the labels. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartCategoryAxisItemLabelsMargin|array`




#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $labels->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemLabelsMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemLabelsMargin)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $margin = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabelsMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $labels->margin($margin);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $bottom = 1;
    $labels->margin(array('bottom' => $bottom));
    ?>

### mirror
If set to true the chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $labels->mirror(true);
    ?>

### padding

The padding of the labels. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartCategoryAxisItemLabelsPadding|array`




#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $labels->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemLabelsPadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemLabelsPadding)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $padding = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabelsPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $labels->padding($padding);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $bottom = 1;
    $labels->padding(array('bottom' => $bottom));
    ?>

### rotation
The rotation angle of the labels. By default the labels are not rotated.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $labels->rotation(1);
    ?>

### skip
The number of labels to skip. By default no labels are skipped.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $labels->skip(1);
    ?>

### step
The label rendering step - render every n-th label. By default every label is rendered.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $labels->step(1);
    ?>

### template
The template which renders the labels.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the category axis labels. By default the category axis labels are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartCategoryAxisItemLabels();
    $labels->visible(true);
    ?>

