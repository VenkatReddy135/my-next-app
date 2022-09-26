---
title: SparklineValueAxisItemNotesIcon
slug: php-dataviz-ui-sparklinevalueaxisitemnotesicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon

A PHP class representing the icon setting of SparklineValueAxisItemNotes.


## Methods

### background
The background color of the notes icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemNotesIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemNotesIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemNotesIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon();
    $border = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon();
    $icon->visible(true);
    ?>

