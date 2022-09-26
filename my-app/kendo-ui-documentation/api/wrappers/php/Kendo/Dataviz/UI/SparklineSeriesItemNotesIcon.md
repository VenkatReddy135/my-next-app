---
title: SparklineSeriesItemNotesIcon
slug: php-dataviz-ui-sparklineseriesitemnotesicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon

A PHP class representing the icon setting of SparklineSeriesItemNotes.


## Methods

### background
The background color of the notes icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemNotesIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemNotesIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemNotesIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon();
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon();
    $icon->visible(true);
    ?>

