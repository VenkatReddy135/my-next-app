---
title: StockChartValueAxisItemNotesIcon
slug: php-dataviz-ui-stockchartvalueaxisitemnotesicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon

A PHP class representing the icon setting of StockChartValueAxisItemNotes.


## Methods

### background
The background color of the notes icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemNotesIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemNotesIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemNotesIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon();
    $border = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon();
    $icon->visible(true);
    ?>

