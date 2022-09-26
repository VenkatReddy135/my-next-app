---
title: ChartXAxisItemNotesLabel
slug: php-dataviz-ui-chartxaxisitemnoteslabel
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItemNotesLabel

A PHP class representing the label setting of ChartXAxisItemNotes.


## Methods

### background
The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesLabel();
    $label->background('value');
    ?>

### border

The border of the label.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesLabel`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemNotesLabelBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemNotesLabelBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemNotesLabelBorder)
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesLabel();
    $border = new \Kendo\Dataviz\UI\ChartXAxisItemNotesLabelBorder();
    $color = 'value';
    $border->color($color);
    $label->border($border);
    ?>

#### Example - using array

    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesLabel();
    $color = 'value';
    $label->border(array('color' => $color));
    ?>

### color
The text color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesLabel();
    $label->color('value');
    ?>

### font
The font style of the label.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesLabel();
    $label->font('value');
    ?>

### format
The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesLabel();
    $label->format('value');
    ?>

### position
The position of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesLabel();
    $label->position('value');
    ?>

### rotation
The rotation angle of the label. By default the label are not rotated.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesLabel`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesLabel();
    $label->rotation(1);
    ?>

### template
The template which renders the labels.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesLabel`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesLabel();
    $label->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesLabel();
    $label->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the x axis notes label. By default the x axis notes label are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesLabel`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesLabel();
    $label->visible(true);
    ?>

