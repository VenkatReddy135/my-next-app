---
title: SparklineSeriesItemLabelsBorder
slug: php-dataviz-ui-sparklineseriesitemlabelsborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineSeriesItemLabelsBorder

A PHP class representing the border setting of SparklineSeriesItemLabels.


## Methods

### color
The color of the border.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemLabelsBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemLabelsBorder();
    $border->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemLabelsBorder();
    $border->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### dashType
The dash type of the border.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemLabelsBorder`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemLabelsBorder();
    $border->dashType('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemLabelsBorder();
    $border->dashType(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### width
The width of the border.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemLabelsBorder`

#### Parameters

##### $value `float|\Kendo\JavaScriptFunction`



#### Example  - using float
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemLabelsBorder();
    $border->width(1);
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemLabelsBorder();
    $border->width(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

