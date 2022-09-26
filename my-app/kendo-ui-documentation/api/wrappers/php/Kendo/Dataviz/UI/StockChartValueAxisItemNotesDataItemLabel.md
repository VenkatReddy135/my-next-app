---
title: StockChartValueAxisItemNotesDataItemLabel
slug: php-dataviz-ui-stockchartvalueaxisitemnotesdataitemlabel
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel

A PHP class representing the label setting of StockChartValueAxisItemNotesDataItem.


## Methods

### background
The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel();
    $label->background('value');
    ?>

### border

The border of the label.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabelBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabelBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemNotesDataItemLabelBorder)
    <?php
    $label = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel();
    $border = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabelBorder();
    $color = 'value';
    $border->color($color);
    $label->border($border);
    ?>

#### Example - using array

    <?php
    $label = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel();
    $color = 'value';
    $label->border(array('color' => $color));
    ?>

### color
The text color of the note label. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel();
    $label->color('value');
    ?>

### font
The font style of the note label.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel();
    $label->font('value');
    ?>

### format
The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel();
    $label->format('value');
    ?>

### position
The position of the value axis note label.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel();
    $label->position('value');
    ?>

### rotation
The rotation angle of the label. By default the label are not rotated.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel();
    $label->rotation(1);
    ?>

### template
The template which renders the labels.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $label = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel();
    $label->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $label = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel();
    $label->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### text
The label note text.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel();
    $label->text('value');
    ?>

### visible
If set to true the chart will display the value axis notes label. By default the value axis notes label are visible.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel();
    $label->visible(true);
    ?>

