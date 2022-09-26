---
title: SparklineSeriesItemNotesLabelBorder
slug: php-dataviz-ui-sparklineseriesitemnoteslabelborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabelBorder

A PHP class representing the border setting of SparklineSeriesItemNotesLabel.


## Methods

### color
The color of the border. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabelBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabelBorder();
    $border->color('value');
    ?>

### dashType
The dash type of the border.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabelBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabelBorder();
    $border->dashType('value');
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabelBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabelBorder();
    $border->width(1);
    ?>

