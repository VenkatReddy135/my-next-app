---
title: ChartYAxisItemLabelsBorder
slug: php-dataviz-ui-chartyaxisitemlabelsborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartYAxisItemLabelsBorder

A PHP class representing the border setting of ChartYAxisItemLabels.


## Methods

### color
The color of the border. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabelsBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartYAxisItemLabelsBorder();
    $border->color('value');
    ?>

### dashType
The dash type of the border.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabelsBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartYAxisItemLabelsBorder();
    $border->dashType('value');
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemLabelsBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartYAxisItemLabelsBorder();
    $border->width(1);
    ?>

