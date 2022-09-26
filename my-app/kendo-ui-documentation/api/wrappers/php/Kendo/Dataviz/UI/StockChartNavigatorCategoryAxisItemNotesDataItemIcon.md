---
title: StockChartNavigatorCategoryAxisItemNotesDataItemIcon
slug: php-dataviz-ui-stockchartnavigatorcategoryaxisitemnotesdataitemicon
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon

A PHP class representing the icon setting of StockChartNavigatorCategoryAxisItemNotesDataItem.


## Methods

### background
The background color of the note icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon();
    $icon->background('value');
    ?>

### border

The border of the icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIconBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIconBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemNotesDataItemIconBorder)
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon();
    $border = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIconBorder();
    $color = 'value';
    $border->color($color);
    $icon->border($border);
    ?>

#### Example - using array

    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon();
    $color = 'value';
    $icon->border(array('color' => $color));
    ?>

### size
The size of the icon.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon();
    $icon->size(1);
    ?>

### type
The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon();
    $icon->type('value');
    ?>

### visible
The icon visibility.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $icon = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon();
    $icon->visible(true);
    ?>

