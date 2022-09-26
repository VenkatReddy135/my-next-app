---
title: ChartXAxisItemNotesDataItemLabel
slug: php-dataviz-ui-chartxaxisitemnotesdataitemlabel
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel

A PHP class representing the label setting of ChartXAxisItemNotesDataItem.


## Methods

### background
The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel();
    $label->background('value');
    ?>

### border

The border of the label.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabelBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabelBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemNotesDataItemLabelBorder)
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel();
    $border = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabelBorder();
    $color = 'value';
    $border->color($color);
    $label->border($border);
    ?>

#### Example - using array

    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel();
    $color = 'value';
    $label->border(array('color' => $color));
    ?>

### color
The text color of the note label. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel();
    $label->color('value');
    ?>

### font
The font style of the note label.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel();
    $label->font('value');
    ?>

### format
The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel();
    $label->format('value');
    ?>

### position
The position of the x axis note label.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel();
    $label->position('value');
    ?>

### rotation
The rotation angle of the label. By default the label are not rotated.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel();
    $label->rotation(1);
    ?>

### template
The template which renders the labels.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel();
    $label->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel();
    $label->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### text
The label note text.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel();
    $label->text('value');
    ?>

### visible
If set to true the chart will display the x axis notes label. By default the x axis notes label are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel();
    $label->visible(true);
    ?>

