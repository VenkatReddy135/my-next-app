---
title: StockChartNavigatorCategoryAxisItemNotes
slug: php-dataviz-ui-stockchartnavigatorcategoryaxisitemnotes
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes

A PHP class representing the notes setting of StockChartNavigatorCategoryAxisItem.


## Methods

### addDataItem

Adds one or more StockChartNavigatorCategoryAxisItemNotesDataItem to the StockChartNavigatorCategoryAxisItemNotes.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem|array`

#### Example - using \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes();
    $dataItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem();
    $position = 'value';
    $dataItem->position($position);
    $notes->addDataItem($dataItem);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes();
    $position = 'value';
    $notes->addDataItem(array('position' => $position));
    ?>

#### Example - adding more than one StockChartNavigatorCategoryAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes();
    $first  = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem();
    $second = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesDataItem();
    $notes->addDataItem($first, $second);
    ?>

### icon

The icon of the notes.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesIcon|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesIcon](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemNotesIcon)
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes();
    $icon = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesIcon();
    $background = 'value';
    $icon->background($background);
    $notes->icon($icon);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes();
    $background = 'value';
    $notes->icon(array('background' => $background));
    ?>

### label

The label of the notes.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesLabel|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesLabel](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemNotesLabel)
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes();
    $label = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesLabel();
    $background = 'value';
    $label->background($background);
    $notes->label($label);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes();
    $background = 'value';
    $notes->label(array('background' => $background));
    ?>

### line

The line of the notes.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesLine|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemNotesLine)
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes();
    $line = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotesLine();
    $color = 'value';
    $line->color($color);
    $notes->line($line);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes();
    $color = 'value';
    $notes->line(array('color' => $color));
    ?>

### position
The position of the category axis note.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemNotes();
    $notes->position('value');
    ?>

