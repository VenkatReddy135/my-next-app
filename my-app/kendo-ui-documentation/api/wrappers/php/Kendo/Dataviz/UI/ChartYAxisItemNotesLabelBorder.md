---
title: ChartYAxisItemNotesLabelBorder
slug: php-dataviz-ui-chartyaxisitemnoteslabelborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartYAxisItemNotesLabelBorder

A PHP class representing the border setting of ChartYAxisItemNotesLabel.


## Methods

### color
The color of the border. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotesLabelBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartYAxisItemNotesLabelBorder();
    $border->color('value');
    ?>

### dashType
The dash type of the border.The following dash types are supported:

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotesLabelBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartYAxisItemNotesLabelBorder();
    $border->dashType('value');
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotesLabelBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\ChartYAxisItemNotesLabelBorder();
    $border->width(1);
    ?>

