---
title: ChartSeriesDefaultsNotesLabel
slug: php-dataviz-ui-chartseriesdefaultsnoteslabel
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel

A PHP class representing the label setting of ChartSeriesDefaultsNotes.


## Methods

### background
The background color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel();
    $label->background('value');
    ?>

### border

The border of the label.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabelBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabelBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsNotesLabelBorder)
    <?php
    $label = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel();
    $border = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabelBorder();
    $color = 'value';
    $border->color($color);
    $label->border($border);
    ?>

#### Example - using array

    <?php
    $label = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel();
    $color = 'value';
    $label->border(array('color' => $color));
    ?>

### color
The text color of the label. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel();
    $label->color('value');
    ?>

### font
The font style of the label.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel();
    $label->font('value');
    ?>

### format
The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel();
    $label->format('value');
    ?>

### position
The position of the labels.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel();
    $label->position('value');
    ?>

### rotation
The rotation angle of the label. By default the label are not rotated.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel();
    $label->rotation(1);
    ?>

### template
The template which renders the labels.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $label = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel();
    $label->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $label = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel();
    $label->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the seriesDefaults notes label. By default the seriesDefaults notes label are visible.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $label = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel();
    $label->visible(true);
    ?>

