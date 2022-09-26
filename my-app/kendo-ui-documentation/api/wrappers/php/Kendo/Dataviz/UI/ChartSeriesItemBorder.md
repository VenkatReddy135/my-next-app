---
title: ChartSeriesItemBorder
slug: php-dataviz-ui-chartseriesitemborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesItemBorder

A PHP class representing the border setting of ChartSeriesItem.


## Methods

### color
The color of the border. Accepts a valid CSS color string, including hex and rgb. By default it is set to color of the current series.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemBorder();
    $border->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemBorder();
    $border->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### dashType
The dash type of the border.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemBorder();
    $border->dashType('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemBorder();
    $border->dashType(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### opacity
The opacity of the border. By default the border is opaque.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemBorder`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemBorder();
    $border->opacity(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemBorder();
    $border->opacity(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### width
The width of the border in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemBorder`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemBorder();
    $border->width(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemBorder();
    $border->width(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

