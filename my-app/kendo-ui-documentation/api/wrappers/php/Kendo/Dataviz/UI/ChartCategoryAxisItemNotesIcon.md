---
title: ChartCategoryAxisItemNotesIcon
slug: php-dataviz-ui-chartcategoryaxisitemnotesicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon

A PHP class representing the icon setting of ChartCategoryAxisItemNotes.


## Methods

### background
The background color of the notes icon.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemNotesIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon();
    $border = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon();
    $icon->visible(true);
    ?>

