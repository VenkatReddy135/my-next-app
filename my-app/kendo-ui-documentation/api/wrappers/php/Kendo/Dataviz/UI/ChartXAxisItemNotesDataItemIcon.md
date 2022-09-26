---
title: ChartXAxisItemNotesDataItemIcon
slug: php-dataviz-ui-chartxaxisitemnotesdataitemicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon

A PHP class representing the icon setting of ChartXAxisItemNotesDataItem.


## Methods

### background
The background color of the note icon.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemNotesDataItemIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon();
    $border = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon();
    $icon->visible(true);
    ?>

