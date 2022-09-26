---
title: ChartValueAxisItemNotesIcon
slug: php-dataviz-ui-chartvalueaxisitemnotesicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon

A PHP class representing the icon setting of ChartValueAxisItemNotes.


## Methods

### background
The background color of the notes icon.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemNotesIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemNotesIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemNotesIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon();
    $border = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon();
    $icon->visible(true);
    ?>

