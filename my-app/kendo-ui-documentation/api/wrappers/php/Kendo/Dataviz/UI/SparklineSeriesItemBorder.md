---
title: SparklineSeriesItemBorder
slug: php-dataviz-ui-sparklineseriesitemborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineSeriesItemBorder

A PHP class representing the border setting of SparklineSeriesItem.


## Methods

### color
The color of the border.  It defaults to the color of the current series.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemBorder();
    $border->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemBorder();
    $border->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### dashType
The dash type of the border.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemBorder();
    $border->dashType('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemBorder();
    $border->dashType(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### opacity
The border opacity.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemBorder`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemBorder();
    $border->opacity(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemBorder();
    $border->opacity(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### width
The width of the border.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemBorder`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemBorder();
    $border->width(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemBorder();
    $border->width(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

