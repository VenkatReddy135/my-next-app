---
title: SparklineValueAxisItemNotesDataItemIcon
slug: php-dataviz-ui-sparklinevalueaxisitemnotesdataitemicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon

A PHP class representing the icon setting of SparklineValueAxisItemNotesDataItem.


## Methods

### background
The background color of the note icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemNotesDataItemIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon();
    $border = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon();
    $icon->visible(true);
    ?>

