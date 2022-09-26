---
title: ChartValueAxisItemLabelsBorder
slug: php-dataviz-ui-chartvalueaxisitemlabelsborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItemLabelsBorder

A PHP class representing the border setting of ChartValueAxisItemLabels.


## Methods

### color
The color of the border. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabelsBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartValueAxisItemLabelsBorder();
    $border->color('value');
    ?>

### dashType
The dash type of the border.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabelsBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartValueAxisItemLabelsBorder();
    $border->dashType('value');
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemLabelsBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartValueAxisItemLabelsBorder();
    $border->width(1);
    ?>

