---
title: ChartSeriesItemTargetBorder
slug: php-dataviz-ui-chartseriesitemtargetborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesItemTargetBorder

A PHP class representing the border setting of ChartSeriesItemTarget.


## Methods

### color
The color of the border.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTargetBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemTargetBorder();
    $border->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemTargetBorder();
    $border->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### dashType
The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTargetBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemTargetBorder();
    $border->dashType('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemTargetBorder();
    $border->dashType(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTargetBorder`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemTargetBorder();
    $border->width(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemTargetBorder();
    $border->width(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

