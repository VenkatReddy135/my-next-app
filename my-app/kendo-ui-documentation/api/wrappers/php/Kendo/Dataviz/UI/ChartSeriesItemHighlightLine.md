---
title: ChartSeriesItemHighlightLine
slug: php-dataviz-ui-chartseriesitemhighlightline
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesItemHighlightLine

A PHP class representing the line setting of ChartSeriesItemHighlight.


## Methods

### color
The line color. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemHighlightLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartSeriesItemHighlightLine();
    $line->color('value');
    ?>

### opacity
The opacity of the line. By default the border is opaque.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemHighlightLine`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartSeriesItemHighlightLine();
    $line->opacity(1);
    ?>

### width
The width of the line.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemHighlightLine`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartSeriesItemHighlightLine();
    $line->width(1);
    ?>

