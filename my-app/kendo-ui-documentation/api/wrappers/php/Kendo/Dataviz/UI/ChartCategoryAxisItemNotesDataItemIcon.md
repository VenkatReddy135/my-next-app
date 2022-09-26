---
title: ChartCategoryAxisItemNotesDataItemIcon
slug: php-dataviz-ui-chartcategoryaxisitemnotesdataitemicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon

A PHP class representing the icon setting of ChartCategoryAxisItemNotesDataItem.


## Methods

### background
The background color of the note icon.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemNotesDataItemIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon();
    $border = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon();
    $icon->visible(true);
    ?>

