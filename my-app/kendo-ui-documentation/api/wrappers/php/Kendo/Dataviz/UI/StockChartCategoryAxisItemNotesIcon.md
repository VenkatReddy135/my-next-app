---
title: StockChartCategoryAxisItemNotesIcon
slug: php-dataviz-ui-stockchartcategoryaxisitemnotesicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon

A PHP class representing the icon setting of StockChartCategoryAxisItemNotes.


## Methods

### background
The background color of the notes icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemNotesIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon();
    $border = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon();
    $icon->visible(true);
    ?>

