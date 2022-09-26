---
title: ChartCategoryAxisItemNotes
slug: php-dataviz-ui-chartcategoryaxisitemnotes
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItemNotes

A PHP class representing the notes setting of ChartCategoryAxisItem.


## Methods

### addDataItem

Adds one or more ChartCategoryAxisItemNotesDataItem to the ChartCategoryAxisItemNotes.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotes`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem|array`

#### Example - using \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotes();
    $dataItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem();
    $position = 'value';
    $dataItem->position($position);
    $notes->addDataItem($dataItem);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotes();
    $position = 'value';
    $notes->addDataItem(array('position' => $position));
    ?>

#### Example - adding more than one ChartCategoryAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotes();
    $first  = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem();
    $second = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem();
    $notes->addDataItem($first, $second);
    ?>

### icon

The icon of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemNotesIcon)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotes();
    $icon = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesIcon();
    $background = 'value';
    $icon->background($background);
    $notes->icon($icon);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotes();
    $background = 'value';
    $notes->icon(array('background' => $background));
    ?>

### label

The label of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemNotesLabel)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotes();
    $label = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLabel();
    $background = 'value';
    $label->background($background);
    $notes->label($label);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotes();
    $background = 'value';
    $notes->label(array('background' => $background));
    ?>

### line

The line of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemNotesLine)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotes();
    $line = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesLine();
    $color = 'value';
    $line->color($color);
    $notes->line($line);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotes();
    $color = 'value';
    $notes->line(array('color' => $color));
    ?>

### position
The position of the category axis note.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotes`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotes();
    $notes->position('value');
    ?>

