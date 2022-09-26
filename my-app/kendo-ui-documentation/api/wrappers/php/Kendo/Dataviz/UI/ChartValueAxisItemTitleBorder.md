---
title: ChartValueAxisItemTitleBorder
slug: php-dataviz-ui-chartvalueaxisitemtitleborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItemTitleBorder

A PHP class representing the border setting of ChartValueAxisItemTitle.


## Methods

### color
The color of the border. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemTitleBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartValueAxisItemTitleBorder();
    $border->color('value');
    ?>

### dashType
The dash type of the border.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemTitleBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartValueAxisItemTitleBorder();
    $border->dashType('value');
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemTitleBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartValueAxisItemTitleBorder();
    $border->width(1);
    ?>

