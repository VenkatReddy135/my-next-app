---
title: ChartSeriesItemLine
slug: php-dataviz-ui-chartseriesitemline
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesItemLine

A PHP class representing the line setting of ChartSeriesItem.


## Methods

### color
The line color. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartSeriesItemLine();
    $line->color('value');
    ?>

### opacity
The line opacity. By default the line is opaque.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLine`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartSeriesItemLine();
    $line->opacity(1);
    ?>

### width
The line width in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemLine`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $line = new \Kendo\Dataviz\UI\ChartSeriesItemLine();
    $line->width('value');
    ?>

