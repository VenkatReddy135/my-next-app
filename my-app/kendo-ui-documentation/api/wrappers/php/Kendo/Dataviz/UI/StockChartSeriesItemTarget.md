---
title: StockChartSeriesItemTarget
slug: php-dataviz-ui-stockchartseriesitemtarget
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartSeriesItemTarget

A PHP class representing the target setting of StockChartSeriesItem.


## Methods

### border

The border of the target.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemTarget`

#### Parameters

##### $value `\Kendo\JavaScriptFunction|\Kendo\Dataviz\UI\StockChartSeriesItemTargetBorder|array`




#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $target = new \Kendo\Dataviz\UI\StockChartSeriesItemTarget();
    $target->border(new \Kendo\JavaScriptFunction('function() { }'));
    ?>


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemTargetBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemTargetBorder)
    <?php
    $target = new \Kendo\Dataviz\UI\StockChartSeriesItemTarget();
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemTargetBorder();
    $color = 'value';
    $border->color($color);
    $target->border($border);
    ?>

#### Example - using array

    <?php
    $target = new \Kendo\Dataviz\UI\StockChartSeriesItemTarget();
    $color = 'value';
    $target->border(array('color' => $color));
    ?>

### color
The target color.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemTarget`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $target = new \Kendo\Dataviz\UI\StockChartSeriesItemTarget();
    $target->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $target = new \Kendo\Dataviz\UI\StockChartSeriesItemTarget();
    $target->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### line

The target line.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemTarget`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemTargetLine|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemTargetLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemTargetLine)
    <?php
    $target = new \Kendo\Dataviz\UI\StockChartSeriesItemTarget();
    $line = new \Kendo\Dataviz\UI\StockChartSeriesItemTargetLine();
    $width = new ();
    $line->width($width);
    $target->line($line);
    ?>

#### Example - using array

    <?php
    $target = new \Kendo\Dataviz\UI\StockChartSeriesItemTarget();
    $width = new ();
    $target->line(array('width' => $width));
    ?>

