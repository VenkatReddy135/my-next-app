---
title: ChartPaneTitleBorder
slug: php-dataviz-ui-chartpanetitleborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartPaneTitleBorder

A PHP class representing the border setting of ChartPaneTitle.


## Methods

### color
The color of the border. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartPaneTitleBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartPaneTitleBorder();
    $border->color('value');
    ?>

### dashType
The dash type of the border.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartPaneTitleBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartPaneTitleBorder();
    $border->dashType('value');
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\ChartPaneTitleBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartPaneTitleBorder();
    $border->width(1);
    ?>

