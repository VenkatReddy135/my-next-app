---
title: ChartValueAxisItemNotes
slug: php-dataviz-ui-chartvalueaxisitemnotes
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItemNotes

A PHP class representing the notes setting of ChartValueAxisItem.


## Methods

### addDataItem

Adds one or more ChartValueAxisItemNotesDataItem to the ChartValueAxisItemNotes.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotes`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem|array`

#### Example - using \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartValueAxisItemNotes();
    $dataItem = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem();
    $position = 'value';
    $dataItem->position($position);
    $notes->addDataItem($dataItem);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartValueAxisItemNotes();
    $position = 'value';
    $notes->addDataItem(array('position' => $position));
    ?>

#### Example - adding more than one ChartValueAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartValueAxisItemNotes();
    $first  = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem();
    $second = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem();
    $notes->addDataItem($first, $second);
    ?>

### icon

The icon of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemNotesIcon)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartValueAxisItemNotes();
    $icon = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesIcon();
    $background = 'value';
    $icon->background($background);
    $notes->icon($icon);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartValueAxisItemNotes();
    $background = 'value';
    $notes->icon(array('background' => $background));
    ?>

### label

The label of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemNotesLabel|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemNotesLabel](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemNotesLabel)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartValueAxisItemNotes();
    $label = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesLabel();
    $background = 'value';
    $label->background($background);
    $notes->label($label);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartValueAxisItemNotes();
    $background = 'value';
    $notes->label(array('background' => $background));
    ?>

### line

The line of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemNotesLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemNotesLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemNotesLine)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartValueAxisItemNotes();
    $line = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesLine();
    $color = 'value';
    $line->color($color);
    $notes->line($line);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartValueAxisItemNotes();
    $color = 'value';
    $notes->line(array('color' => $color));
    ?>

### position
The position of the value axis note.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotes`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartValueAxisItemNotes();
    $notes->position('value');
    ?>

