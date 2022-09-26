---
title: StockChartCategoryAxisItemNotesDataItemIcon
slug: php-dataviz-ui-stockchartcategoryaxisitemnotesdataitemicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon

A PHP class representing the icon setting of StockChartCategoryAxisItemNotesDataItem.


## Methods

### background
The background color of the note icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemNotesDataItemIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon();
    $border = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon();
    $icon->visible(true);
    ?>

