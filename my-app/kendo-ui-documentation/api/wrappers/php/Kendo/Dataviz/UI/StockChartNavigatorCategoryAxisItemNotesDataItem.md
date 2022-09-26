---
title: StockChartNavigatorCategoryAxisItemNotesDataItem
slug: php-dataviz-ui-stockchartnavigatorcategoryaxisitemnotesdataitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem

A PHP class representing the dataItem setting of StockChartNavigatorCategoryAxisItemNotesData.


## Methods

### icon

The icon of the note.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemNotesDataItemIcon)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem();
    $icon = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemIcon();
    $background = 'value';
    $icon->background($background);
    $dataItem->icon($icon);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->icon(array('background' => $background));
    ?>

### label

The label of the note.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemLabel|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemLabel](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemNotesDataItemLabel)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem();
    $label = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemLabel();
    $background = 'value';
    $label->background($background);
    $dataItem->label($label);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->label(array('background' => $background));
    ?>

### line

The line of the note.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemNotesDataItemLine)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem();
    $line = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItemLine();
    $color = 'value';
    $line->color($color);
    $dataItem->line($line);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem();
    $color = 'value';
    $dataItem->line(array('color' => $color));
    ?>

### position
The position of the category axis note.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem();
    $dataItem->position('value');
    ?>

### value
The value of the note.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem`

#### Parameters

##### $value ``



