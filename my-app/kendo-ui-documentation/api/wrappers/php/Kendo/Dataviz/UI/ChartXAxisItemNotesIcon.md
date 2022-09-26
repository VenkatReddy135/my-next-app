---
title: ChartXAxisItemNotesIcon
slug: php-dataviz-ui-chartxaxisitemnotesicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItemNotesIcon

A PHP class representing the icon setting of ChartXAxisItemNotes.


## Methods

### background
The background color of the notes icon.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartXAxisItemNotesIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemNotesIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemNotesIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemNotesIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartXAxisItemNotesIcon();
    $border = new \Kendo\Dataviz\UI\ChartXAxisItemNotesIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\ChartXAxisItemNotesIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartXAxisItemNotesIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartXAxisItemNotesIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartXAxisItemNotesIcon();
    $icon->visible(true);
    ?>

