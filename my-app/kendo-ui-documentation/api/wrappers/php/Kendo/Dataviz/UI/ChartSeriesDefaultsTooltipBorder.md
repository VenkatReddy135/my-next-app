---
title: ChartSeriesDefaultsTooltipBorder
slug: php-dataviz-ui-chartseriesdefaultstooltipborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltipBorder

A PHP class representing the border setting of ChartSeriesDefaultsTooltip.


## Methods

### color
The color of the border.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltipBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltipBorder();
    $border->color('value');
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltipBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltipBorder();
    $border->width(1);
    ?>

