---
title: SparklineSeriesItemTargetBorder
slug: php-dataviz-ui-sparklineseriesitemtargetborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineSeriesItemTargetBorder

A PHP class representing the border setting of SparklineSeriesItemTarget.


## Methods

### color
The color of the border.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemTargetBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemTargetBorder();
    $border->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemTargetBorder();
    $border->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### dashType
The dash type of the border.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemTargetBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemTargetBorder();
    $border->dashType('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemTargetBorder();
    $border->dashType(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### width
The width of the border.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemTargetBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemTargetBorder();
    $border->width(1);
    ?>

