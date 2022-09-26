---
title: ChartLegendLabels
slug: php-dataviz-ui-chartlegendlabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartLegendLabels

A PHP class representing the labels setting of ChartLegend.


## Methods

### color
The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartLegendLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartLegendLabels();
    $labels->color('value');
    ?>

### font
The font style of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartLegendLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartLegendLabels();
    $labels->font('value');
    ?>

### margin

The margin of the labels. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartLegendLabels`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartLegendLabelsMargin|array`




#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartLegendLabels();
    $labels->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartLegendLabelsMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartLegendLabelsMargin)
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartLegendLabels();
    $margin = new \Kendo\Dataviz\UI\ChartLegendLabelsMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $labels->margin($margin);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\ChartLegendLabels();
    $bottom = 1;
    $labels->margin(array('bottom' => $bottom));
    ?>

### template
The template which renders the labels.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartLegendLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartLegendLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartLegendLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

