---
title: ChartYAxisItemNotesIcon
slug: php-dataviz-ui-chartyaxisitemnotesicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartYAxisItemNotesIcon

A PHP class representing the icon setting of ChartYAxisItemNotes.


## Methods

### background
The background color of the notes icon.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartYAxisItemNotesIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotesIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemNotesIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemNotesIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemNotesIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartYAxisItemNotesIcon();
    $border = new \Kendo\Dataviz\UI\ChartYAxisItemNotesIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\ChartYAxisItemNotesIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotesIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartYAxisItemNotesIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartYAxisItemNotesIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotesIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartYAxisItemNotesIcon();
    $icon->visible(true);
    ?>

