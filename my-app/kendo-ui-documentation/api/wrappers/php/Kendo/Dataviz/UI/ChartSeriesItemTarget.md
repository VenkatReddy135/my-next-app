---
title: ChartSeriesItemTarget
slug: php-dataviz-ui-chartseriesitemtarget
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesItemTarget

A PHP class representing the target setting of ChartSeriesItem.


## Methods

### border

The border of the target.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTarget`

#### Parameters

##### $value `\Kendo\JavaScriptFunction|\Kendo\Dataviz\UI\ChartSeriesItemTargetBorder|array`




#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $target = new \Kendo\Dataviz\UI\ChartSeriesItemTarget();
    $target->border(new \Kendo\JavaScriptFunction('function() { }'));
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesItemTargetBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesItemTargetBorder)
    <?php
    $target = new \Kendo\Dataviz\UI\ChartSeriesItemTarget();
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemTargetBorder();
    $color = 'value';
    $border->color($color);
    $target->border($border);
    ?>

#### Example - using array

    <?php
    $target = new \Kendo\Dataviz\UI\ChartSeriesItemTarget();
    $color = 'value';
    $target->border(array('color' => $color));
    ?>

### color
The target color.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTarget`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $target = new \Kendo\Dataviz\UI\ChartSeriesItemTarget();
    $target->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $target = new \Kendo\Dataviz\UI\ChartSeriesItemTarget();
    $target->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### line

The target line options.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTarget`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesItemTargetLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesItemTargetLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesItemTargetLine)
    <?php
    $target = new \Kendo\Dataviz\UI\ChartSeriesItemTarget();
    $line = new \Kendo\Dataviz\UI\ChartSeriesItemTargetLine();
    $width = new ();
    $line->width($width);
    $target->line($line);
    ?>

#### Example - using array

    <?php
    $target = new \Kendo\Dataviz\UI\ChartSeriesItemTarget();
    $width = new ();
    $target->line(array('width' => $width));
    ?>

