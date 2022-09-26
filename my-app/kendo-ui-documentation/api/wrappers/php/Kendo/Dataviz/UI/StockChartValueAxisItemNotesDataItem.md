---
title: StockChartValueAxisItemNotesDataItem
slug: php-dataviz-ui-stockchartvalueaxisitemnotesdataitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem

A PHP class representing the dataItem setting of StockChartValueAxisItemNotesData.


## Methods

### icon

The icon of the note.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemIcon|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemIcon](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemNotesDataItemIcon)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem();
    $icon = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemIcon();
    $background = 'value';
    $icon->background($background);
    $dataItem->icon($icon);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->icon(array('background' => $background));
    ?>

### label

The label of the note.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemNotesDataItemLabel)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem();
    $label = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLabel();
    $background = 'value';
    $label->background($background);
    $dataItem->label($label);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->label(array('background' => $background));
    ?>

### line

The line of the note.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemNotesDataItemLine)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem();
    $line = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItemLine();
    $color = 'value';
    $line->color($color);
    $dataItem->line($line);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem();
    $color = 'value';
    $dataItem->line(array('color' => $color));
    ?>

### position
The position of the value axis note.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dataItem = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem();
    $dataItem->position('value');
    ?>

### value
The value of the note.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem`

#### Parameters

##### $value ``



