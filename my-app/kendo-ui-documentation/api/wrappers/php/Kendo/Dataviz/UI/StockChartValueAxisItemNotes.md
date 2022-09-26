---
title: StockChartValueAxisItemNotes
slug: php-dataviz-ui-stockchartvalueaxisitemnotes
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartValueAxisItemNotes

A PHP class representing the notes setting of StockChartValueAxisItem.


## Methods

### addDataItem

Adds one or more StockChartValueAxisItemNotesDataItem to the StockChartValueAxisItemNotes.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotes`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem|array`

#### Example - using \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotes();
    $dataItem = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem();
    $position = 'value';
    $dataItem->position($position);
    $notes->addDataItem($dataItem);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotes();
    $position = 'value';
    $notes->addDataItem(array('position' => $position));
    ?>

#### Example - adding more than one StockChartValueAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotes();
    $first  = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem();
    $second = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesDataItem();
    $notes->addDataItem($first, $second);
    ?>

### icon

The icon of the notes.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemNotesIcon)
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotes();
    $icon = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesIcon();
    $background = 'value';
    $icon->background($background);
    $notes->icon($icon);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotes();
    $background = 'value';
    $notes->icon(array('background' => $background));
    ?>

### label

The label of the notes.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemNotesLabel|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemNotesLabel](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemNotesLabel)
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotes();
    $label = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesLabel();
    $background = 'value';
    $label->background($background);
    $notes->label($label);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotes();
    $background = 'value';
    $notes->label(array('background' => $background));
    ?>

### line

The line of the notes.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartValueAxisItemNotesLine|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartValueAxisItemNotesLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartValueAxisItemNotesLine)
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotes();
    $line = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotesLine();
    $color = 'value';
    $line->color($color);
    $notes->line($line);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotes();
    $color = 'value';
    $notes->line(array('color' => $color));
    ?>

### position
The position of the value axis note.

#### Returns
`\Kendo\Dataviz\UI\StockChartValueAxisItemNotes`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartValueAxisItemNotes();
    $notes->position('value');
    ?>

