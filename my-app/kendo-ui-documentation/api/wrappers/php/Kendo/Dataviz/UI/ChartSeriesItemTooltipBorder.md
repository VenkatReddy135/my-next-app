---
title: ChartSeriesItemTooltipBorder
slug: php-dataviz-ui-chartseriesitemtooltipborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesItemTooltipBorder

A PHP class representing the border setting of ChartSeriesItemTooltip.


## Methods

### color
The color of the border.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTooltipBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemTooltipBorder();
    $border->color('value');
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTooltipBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemTooltipBorder();
    $border->width(1);
    ?>

