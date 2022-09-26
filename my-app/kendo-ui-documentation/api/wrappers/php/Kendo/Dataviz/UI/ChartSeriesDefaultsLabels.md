---
title: ChartSeriesDefaultsLabels
slug: php-dataviz-ui-chartseriesdefaultslabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels

A PHP class representing the labels setting of ChartSeriesDefaults.


## Methods

### background
The background color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $labels->background('value');
    ?>

### border

The border of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesDefaultsLabelsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsLabelsBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsLabelsBorder)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $border = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabelsBorder();
    $color = 'value';
    $border->color($color);
    $labels->border($border);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $color = 'value';
    $labels->border(array('color' => $color));
    ?>

### color
The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $labels->color('value');
    ?>

### font
The font style of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $labels->font('value');
    ?>

### format
The format of the labels. Uses kendo.format.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $labels->format('value');
    ?>

### margin

The margin of the labels. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsLabels`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartSeriesDefaultsLabelsMargin|array`




#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $labels->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsLabelsMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsLabelsMargin)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $margin = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabelsMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $labels->margin($margin);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $bottom = 1;
    $labels->margin(array('bottom' => $bottom));
    ?>

### padding

The padding of the labels. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsLabels`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartSeriesDefaultsLabelsPadding|array`




#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $labels->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsLabelsPadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsLabelsPadding)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $padding = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabelsPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $labels->padding($padding);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $bottom = 1;
    $labels->padding(array('bottom' => $bottom));
    ?>

### template
The template which renders the chart series label.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the series labels. By default chart series labels are not displayed.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $labels->visible(true);
    ?>

