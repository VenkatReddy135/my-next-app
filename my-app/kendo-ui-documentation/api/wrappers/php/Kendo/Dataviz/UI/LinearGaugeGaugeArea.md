---
title: LinearGaugeGaugeArea
slug: php-dataviz-ui-lineargaugegaugearea
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\LinearGaugeGaugeArea

A PHP class representing the gaugeArea setting of LinearGauge.


## Methods

### background
The background of the gauge area.
Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeGaugeArea`

#### Parameters

##### $value ``



### border

The border of the gauge area.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeGaugeArea`

#### Parameters

##### $value `\Kendo\Dataviz\UI\LinearGaugeGaugeAreaBorder|array`


#### Example - using [\Kendo\Dataviz\UI\LinearGaugeGaugeAreaBorder](/api/wrappers/php/Kendo/Dataviz/UI/LinearGaugeGaugeAreaBorder)
    <?php
    $gaugeArea = new \Kendo\Dataviz\UI\LinearGaugeGaugeArea();
    $border = new \Kendo\Dataviz\UI\LinearGaugeGaugeAreaBorder();
    $color = 'value';
    $border->color($color);
    $gaugeArea->border($border);
    ?>

#### Example - using array

    <?php
    $gaugeArea = new \Kendo\Dataviz\UI\LinearGaugeGaugeArea();
    $color = 'value';
    $gaugeArea->border(array('color' => $color));
    ?>

### height
The height of the gauge area.  By default, the vertical gauge is 200px and
the horizontal one is 60px.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeGaugeArea`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $gaugeArea = new \Kendo\Dataviz\UI\LinearGaugeGaugeArea();
    $gaugeArea->height(1);
    ?>

### margin
The margin of the gauge area.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeGaugeArea`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $gaugeArea = new \Kendo\Dataviz\UI\LinearGaugeGaugeArea();
    $gaugeArea->margin(1);
    ?>

### width
The width of the gauge area.  By default the vertical gauge is 60px and
horizontal gauge is 200px.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugeGaugeArea`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $gaugeArea = new \Kendo\Dataviz\UI\LinearGaugeGaugeArea();
    $gaugeArea->width(1);
    ?>

