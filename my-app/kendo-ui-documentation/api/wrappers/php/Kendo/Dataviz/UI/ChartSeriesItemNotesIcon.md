---
title: ChartSeriesItemNotesIcon
slug: php-dataviz-ui-chartseriesitemnotesicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesItemNotesIcon

A PHP class representing the icon setting of ChartSeriesItemNotes.


## Methods

### background
The background color of the notes icon.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartSeriesItemNotesIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemNotesIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesItemNotesIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesItemNotesIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesItemNotesIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartSeriesItemNotesIcon();
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemNotesIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\ChartSeriesItemNotesIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemNotesIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartSeriesItemNotesIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartSeriesItemNotesIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemNotesIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartSeriesItemNotesIcon();
    $icon->visible(true);
    ?>

