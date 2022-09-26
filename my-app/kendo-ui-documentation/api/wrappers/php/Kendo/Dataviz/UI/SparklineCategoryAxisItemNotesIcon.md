---
title: SparklineCategoryAxisItemNotesIcon
slug: php-dataviz-ui-sparklinecategoryaxisitemnotesicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon

A PHP class representing the icon setting of SparklineCategoryAxisItemNotes.


## Methods

### background
The background color of the notes icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemNotesIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon();
    $border = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon();
    $icon->visible(true);
    ?>

