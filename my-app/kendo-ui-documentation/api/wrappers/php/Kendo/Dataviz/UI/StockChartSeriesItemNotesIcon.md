---
title: StockChartSeriesItemNotesIcon
slug: php-dataviz-ui-stockchartseriesitemnotesicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon

A PHP class representing the icon setting of StockChartSeriesItemNotes.


## Methods

### background
The background color of the notes icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemNotesIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemNotesIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemNotesIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon();
    $border = new \Kendo\Dataviz\UI\StockChartSeriesItemNotesIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon();
    $icon->visible(true);
    ?>

