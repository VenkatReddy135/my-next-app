---
title: StockChartCategoryAxisItemNotesDataItem
slug: php-dataviz-ui-stockchartcategoryaxisitemnotesdataitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem

A PHP class representing the dataItem setting of StockChartCategoryAxisItemNotesData.


## Methods

### icon

The icon of the note.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemNotesDataItemIcon)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem();
    $icon = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemIcon();
    $background = 'value';
    $icon->background($background);
    $dataItem->icon($icon);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->icon(array('background' => $background));
    ?>

### label

The label of the note.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemLabel|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemLabel](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemNotesDataItemLabel)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem();
    $label = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemLabel();
    $background = 'value';
    $label->background($background);
    $dataItem->label($label);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->label(array('background' => $background));
    ?>

### line

The line of the note.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemNotesDataItemLine)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem();
    $line = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItemLine();
    $color = 'value';
    $line->color($color);
    $dataItem->line($line);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem();
    $color = 'value';
    $dataItem->line(array('color' => $color));
    ?>

### position
The position of the category axis note.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem();
    $dataItem->position('value');
    ?>

### value
The value of the note.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem`

#### Parameters

##### $value ``



