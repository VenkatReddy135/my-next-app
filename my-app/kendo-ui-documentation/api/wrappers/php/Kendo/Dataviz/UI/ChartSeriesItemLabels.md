---
title: ChartSeriesItemLabels
slug: php-dataviz-ui-chartseriesitemlabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesItemLabels

A PHP class representing the labels setting of ChartSeriesItem.


## Methods

### align
The label alignment when series.type is set to "donut" or "pie".The supported values are:

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->align('value');
    ?>

### background
The background color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->background('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->background(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### border

The border of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesItemLabelsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesItemLabelsBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesItemLabelsBorder)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemLabelsBorder();
    $color = 'value';
    $border->color($color);
    $labels->border($border);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $color = 'value';
    $labels->border(array('color' => $color));
    ?>

### color
The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### distance
The distance of the labels when series.type is set to "donut" or "pie".

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLabels`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->distance(1);
    ?>

### font
The font style of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->font('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->font(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### format
The format of the labels. Uses kendo.format.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->format('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->format(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### margin

The margin of the labels. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLabels`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartSeriesItemLabelsMargin|array`




#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesItemLabelsMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesItemLabelsMargin)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $margin = new \Kendo\Dataviz\UI\ChartSeriesItemLabelsMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $labels->margin($margin);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $bottom = 1;
    $labels->margin(array('bottom' => $bottom));
    ?>

### padding

The padding of the labels. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLabels`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartSeriesItemLabelsPadding|array`




#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesItemLabelsPadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesItemLabelsPadding)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $padding = new \Kendo\Dataviz\UI\ChartSeriesItemLabelsPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $labels->padding($padding);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $bottom = 1;
    $labels->padding(array('bottom' => $bottom));
    ?>

### position
The position of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->position('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->position(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### template
The template which renders the chart series label.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the series labels. By default chart series labels are not displayed.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLabels`

#### Parameters

##### $value `boolean|\Kendo\JavaScriptFunction`



#### Example  - using boolean
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->visible(true);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesItemLabels();
    $labels->visible(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

