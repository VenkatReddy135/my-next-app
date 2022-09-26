---
title: LinearGaugeScaleLabels
slug: php-dataviz-ui-lineargaugescalelabels
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\LinearGaugeScaleLabels

A PHP class representing the labels setting of LinearGaugeScale.


## Methods

### background
The background color of the labels.
Any valid CSS color string will work here, including hex and rgb

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\LinearGaugeScaleLabels();
    $labels->background('value');
    ?>

### border

The border of the labels.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleLabels`

#### Parameters

##### $value `\Kendo\Dataviz\UI\LinearGaugeScaleLabelsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\LinearGaugeScaleLabelsBorder](/api/wrappers/php/Kendo/Dataviz/UI/LinearGaugeScaleLabelsBorder)
    <?php
    $labels = new \Kendo\Dataviz\UI\LinearGaugeScaleLabels();
    $border = new \Kendo\Dataviz\UI\LinearGaugeScaleLabelsBorder();
    $color = 'value';
    $border->color($color);
    $labels->border($border);
    ?>

#### Example - using array

    <?php
    $labels = new \Kendo\Dataviz\UI\LinearGaugeScaleLabels();
    $color = 'value';
    $labels->border(array('color' => $color));
    ?>

### color
The text color of the labels.
Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\LinearGaugeScaleLabels();
    $labels->color('value');
    ?>

### font
The font style of the labels.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\LinearGaugeScaleLabels();
    $labels->font('value');
    ?>

### format
The format of the labels.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleLabels`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\LinearGaugeScaleLabels();
    $labels->format('value');
    ?>

### margin
The margin of the labels.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\LinearGaugeScaleLabels();
    $labels->margin(1);
    ?>

### padding
The padding of the labels.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleLabels`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $labels = new \Kendo\Dataviz\UI\LinearGaugeScaleLabels();
    $labels->padding(1);
    ?>

### template
The label template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleLabels`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $labels = new \Kendo\Dataviz\UI\LinearGaugeScaleLabels();
    $labels->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $labels = new \Kendo\Dataviz\UI\LinearGaugeScaleLabels();
    $labels->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
The visibility of the labels.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeScaleLabels`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $labels = new \Kendo\Dataviz\UI\LinearGaugeScaleLabels();
    $labels->visible(true);
    ?>

