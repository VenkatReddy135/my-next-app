---
title: ChartSeriesDefaultsNotesIcon
slug: php-dataviz-ui-chartseriesdefaultsnotesicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon

A PHP class representing the icon setting of ChartSeriesDefaultsNotes.


## Methods

### background
The background color of the notes icon.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsNotesIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon();
    $border = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon();
    $icon->visible(true);
    ?>

