---
title: ChartCategoryAxisItemNotesLabel
slug: php-dataviz-ui-chartcategoryaxisitemnoteslabel
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel

A PHP class representing the label setting of ChartCategoryAxisItemNotes.


## Methods

### background
The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel();
    $label->background('value');
    ?>

### border

The border of the label.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabelBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabelBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemNotesLabelBorder)
    <?php
    $label = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel();
    $border = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabelBorder();
    $color = 'value';
    $border->color($color);
    $label->border($border);
    ?>

#### Example - using array

    <?php
    $label = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel();
    $color = 'value';
    $label->border(array('color' => $color));
    ?>

### color
The text color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel();
    $label->color('value');
    ?>

### font
The font style of the label.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel();
    $label->font('value');
    ?>

### format
The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel();
    $label->format('value');
    ?>

### position
The position of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel();
    $label->position('value');
    ?>

### rotation
The rotation angle of the label. By default the label are not rotated.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel();
    $label->rotation(1);
    ?>

### template
The template which renders the labels.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $label = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel();
    $label->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $label = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel();
    $label->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the category notes label. By default the category notes label are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel();
    $label->visible(true);
    ?>

