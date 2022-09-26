---
title: ChartXAxisItemNotes
slug: php-dataviz-ui-chartxaxisitemnotes
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItemNotes

A PHP class representing the notes setting of ChartXAxisItem.


## Methods

### addDataItem

Adds one or more ChartXAxisItemNotesDataItem to the ChartXAxisItemNotes.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotes`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem|array`

#### Example - using \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartXAxisItemNotes();
    $dataItem = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem();
    $position = 'value';
    $dataItem->position($position);
    $notes->addDataItem($dataItem);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartXAxisItemNotes();
    $position = 'value';
    $notes->addDataItem(array('position' => $position));
    ?>

#### Example - adding more than one ChartXAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartXAxisItemNotes();
    $first  = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem();
    $second = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem();
    $notes->addDataItem($first, $second);
    ?>

### icon

The icon of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemNotesIcon|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemNotesIcon](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemNotesIcon)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartXAxisItemNotes();
    $icon = new \Kendo\Dataviz\UI\ChartXAxisItemNotesIcon();
    $background = 'value';
    $icon->background($background);
    $notes->icon($icon);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartXAxisItemNotes();
    $background = 'value';
    $notes->icon(array('background' => $background));
    ?>

### label

The label of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemNotesLabel|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemNotesLabel](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemNotesLabel)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartXAxisItemNotes();
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesLabel();
    $background = 'value';
    $label->background($background);
    $notes->label($label);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartXAxisItemNotes();
    $background = 'value';
    $notes->label(array('background' => $background));
    ?>

### line

The line of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemNotesLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemNotesLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemNotesLine)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartXAxisItemNotes();
    $line = new \Kendo\Dataviz\UI\ChartXAxisItemNotesLine();
    $color = 'value';
    $line->color($color);
    $notes->line($line);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartXAxisItemNotes();
    $color = 'value';
    $notes->line(array('color' => $color));
    ?>

### position
The position of the x axis note.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotes`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartXAxisItemNotes();
    $notes->position('value');
    ?>

