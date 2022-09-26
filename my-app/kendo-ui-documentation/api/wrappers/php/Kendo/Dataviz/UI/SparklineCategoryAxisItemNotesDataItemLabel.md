---
title: SparklineCategoryAxisItemNotesDataItemLabel
slug: php-dataviz-ui-sparklinecategoryaxisitemnotesdataitemlabel
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel

A PHP class representing the label setting of SparklineCategoryAxisItemNotesDataItem.


## Methods

### background
The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel();
    $label->background('value');
    ?>

### border

The border of the label.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabelBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabelBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemNotesDataItemLabelBorder)
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel();
    $border = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabelBorder();
    $color = 'value';
    $border->color($color);
    $label->border($border);
    ?>

#### Example - using array

    <?php
    $label = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel();
    $color = 'value';
    $label->border(array('color' => $color));
    ?>

### color
The text color of the note label. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel();
    $label->color('value');
    ?>

### font
The font style of the note label.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel();
    $label->font('value');
    ?>

### format
The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel();
    $label->format('value');
    ?>

### position
The position of the category axis note label.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel();
    $label->position('value');
    ?>

### rotation
The rotation angle of the label. By default the label are not rotated.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel();
    $label->rotation(1);
    ?>

### template
The template which renders the labels.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel();
    $label->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel();
    $label->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### text
The label note text.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel();
    $label->text('value');
    ?>

### visible
If set to true the chart will display the category notes label. By default the category notes label are visible.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel();
    $label->visible(true);
    ?>

