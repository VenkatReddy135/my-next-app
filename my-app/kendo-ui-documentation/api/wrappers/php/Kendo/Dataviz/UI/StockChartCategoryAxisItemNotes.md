---
title: StockChartCategoryAxisItemNotes
slug: php-dataviz-ui-stockchartcategoryaxisitemnotes
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes

A PHP class representing the notes setting of StockChartCategoryAxisItem.


## Methods

### addDataItem

Adds one or more StockChartCategoryAxisItemNotesDataItem to the StockChartCategoryAxisItemNotes.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem|array`

#### Example - using \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes();
    $dataItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem();
    $position = 'value';
    $dataItem->position($position);
    $notes->addDataItem($dataItem);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes();
    $position = 'value';
    $notes->addDataItem(array('position' => $position));
    ?>

#### Example - adding more than one StockChartCategoryAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes();
    $first  = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem();
    $second = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesDataItem();
    $notes->addDataItem($first, $second);
    ?>

### icon

The icon of the notes.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemNotesIcon)
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes();
    $icon = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesIcon();
    $background = 'value';
    $icon->background($background);
    $notes->icon($icon);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes();
    $background = 'value';
    $notes->icon(array('background' => $background));
    ?>

### label

The label of the notes.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesLabel|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesLabel](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemNotesLabel)
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes();
    $label = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesLabel();
    $background = 'value';
    $label->background($background);
    $notes->label($label);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes();
    $background = 'value';
    $notes->label(array('background' => $background));
    ?>

### line

The line of the notes.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesLine|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemNotesLine)
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes();
    $line = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotesLine();
    $color = 'value';
    $line->color($color);
    $notes->line($line);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes();
    $color = 'value';
    $notes->line(array('color' => $color));
    ?>

### position
The position of the category axis note.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemNotes();
    $notes->position('value');
    ?>

