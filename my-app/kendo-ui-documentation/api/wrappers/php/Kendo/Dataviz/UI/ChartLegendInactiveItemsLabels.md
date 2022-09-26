---
title: ChartLegendInactiveItemsLabels
slug: php-dataviz-ui-chartlegendinactiveitemslabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartLegendInactiveItemsLabels

A PHP class representing the labels setting of ChartLegendInactiveItems.


## Methods

### color
The text color of the labels. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartLegendInactiveItemsLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartLegendInactiveItemsLabels();
    $labels->color('value');
    ?>

### font
The font style of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartLegendInactiveItemsLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartLegendInactiveItemsLabels();
    $labels->font('value');
    ?>

### template
The template which renders the labels.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartLegendInactiveItemsLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartLegendInactiveItemsLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\ChartLegendInactiveItemsLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

