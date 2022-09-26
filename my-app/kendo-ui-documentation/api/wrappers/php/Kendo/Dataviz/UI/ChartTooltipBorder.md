---
title: ChartTooltipBorder
slug: php-dataviz-ui-charttooltipborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartTooltipBorder

A PHP class representing the border setting of ChartTooltip.


## Methods

### color
The color of the border.

#### Returns
`\Kendo\Dataviz\UI\ChartTooltipBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartTooltipBorder();
    $border->color('value');
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\ChartTooltipBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartTooltipBorder();
    $border->width(1);
    ?>

