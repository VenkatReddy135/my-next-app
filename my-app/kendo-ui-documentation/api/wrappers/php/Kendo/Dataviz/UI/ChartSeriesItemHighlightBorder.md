---
title: ChartSeriesItemHighlightBorder
slug: php-dataviz-ui-chartseriesitemhighlightborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesItemHighlightBorder

A PHP class representing the border setting of ChartSeriesItemHighlight.


## Methods

### color
The color of the border. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemHighlightBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemHighlightBorder();
    $border->color('value');
    ?>

### opacity
The opacity of the border. By default the border is opaque.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemHighlightBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemHighlightBorder();
    $border->opacity(1);
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemHighlightBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemHighlightBorder();
    $border->width(1);
    ?>

