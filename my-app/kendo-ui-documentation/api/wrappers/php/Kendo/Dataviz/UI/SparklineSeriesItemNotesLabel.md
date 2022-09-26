---
title: SparklineSeriesItemNotesLabel
slug: php-dataviz-ui-sparklineseriesitemnoteslabel
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel

A PHP class representing the label setting of SparklineSeriesItemNotes.


## Methods

### background
The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel();
    $label->background('value');
    ?>

### border

The border of the label.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabelBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabelBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemNotesLabelBorder)
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel();
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabelBorder();
    $color = 'value';
    $border->color($color);
    $label->border($border);
    ?>

#### Example - using array

    <?php
    $label = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel();
    $color = 'value';
    $label->border(array('color' => $color));
    ?>

### color
The text color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel();
    $label->color('value');
    ?>

### font
The font style of the label.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel();
    $label->font('value');
    ?>

### format
The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel();
    $label->format('value');
    ?>

### position
The position of the labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel();
    $label->position('value');
    ?>

### rotation
The rotation angle of the label. By default the label are not rotated.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel();
    $label->rotation(1);
    ?>

### template
The template which renders the labels.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel();
    $label->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel();
    $label->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the series notes label. By default the series notes label are visible.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel();
    $label->visible(true);
    ?>

