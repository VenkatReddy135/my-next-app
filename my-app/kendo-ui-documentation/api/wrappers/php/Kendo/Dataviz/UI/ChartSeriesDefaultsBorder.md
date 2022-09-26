---
title: ChartSeriesDefaultsBorder
slug: php-dataviz-ui-chartseriesdefaultsborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesDefaultsBorder

A PHP class representing the border setting of ChartSeriesDefaults.


## Methods

### color
The color of the border. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesDefaultsBorder();
    $border->color('value');
    ?>

### dashType
The dash type of the chart series border.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesDefaultsBorder();
    $border->dashType('value');
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesDefaultsBorder();
    $border->width(1);
    ?>

