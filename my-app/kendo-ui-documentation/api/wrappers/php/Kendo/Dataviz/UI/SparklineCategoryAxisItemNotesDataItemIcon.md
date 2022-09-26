---
title: SparklineCategoryAxisItemNotesDataItemIcon
slug: php-dataviz-ui-sparklinecategoryaxisitemnotesdataitemicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon

A PHP class representing the icon setting of SparklineCategoryAxisItemNotesDataItem.


## Methods

### background
The background color of the note icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemNotesDataItemIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon();
    $border = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon();
    $icon->visible(true);
    ?>

