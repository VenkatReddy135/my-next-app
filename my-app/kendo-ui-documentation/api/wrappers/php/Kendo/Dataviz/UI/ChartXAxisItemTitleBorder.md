---
title: ChartXAxisItemTitleBorder
slug: php-dataviz-ui-chartxaxisitemtitleborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItemTitleBorder

A PHP class representing the border setting of ChartXAxisItemTitle.


## Methods

### color
The color of the border. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemTitleBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartXAxisItemTitleBorder();
    $border->color('value');
    ?>

### dashType
The dash type of the border.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemTitleBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartXAxisItemTitleBorder();
    $border->dashType('value');
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemTitleBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartXAxisItemTitleBorder();
    $border->width(1);
    ?>

