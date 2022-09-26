---
title: SparklineValueAxisItemNotes
slug: php-dataviz-ui-sparklinevalueaxisitemnotes
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineValueAxisItemNotes

A PHP class representing the notes setting of SparklineValueAxisItem.


## Methods

### addDataItem

Adds one or more SparklineValueAxisItemNotesDataItem to the SparklineValueAxisItemNotes.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotes`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem|array`

#### Example - using \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotes();
    $dataItem = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem();
    $position = 'value';
    $dataItem->position($position);
    $notes->addDataItem($dataItem);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotes();
    $position = 'value';
    $notes->addDataItem(array('position' => $position));
    ?>

#### Example - adding more than one SparklineValueAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotes();
    $first  = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem();
    $second = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem();
    $notes->addDataItem($first, $second);
    ?>

### icon

The icon of the notes.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemNotesIcon)
    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotes();
    $icon = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesIcon();
    $background = 'value';
    $icon->background($background);
    $notes->icon($icon);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotes();
    $background = 'value';
    $notes->icon(array('background' => $background));
    ?>

### label

The label of the notes.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemNotesLabel|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemNotesLabel](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemNotesLabel)
    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotes();
    $label = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesLabel();
    $background = 'value';
    $label->background($background);
    $notes->label($label);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotes();
    $background = 'value';
    $notes->label(array('background' => $background));
    ?>

### line

The line of the notes.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemNotesLine|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemNotesLine](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemNotesLine)
    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotes();
    $line = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesLine();
    $color = 'value';
    $line->color($color);
    $notes->line($line);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotes();
    $color = 'value';
    $notes->line(array('color' => $color));
    ?>

### position
The position of the value axis note.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotes`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotes();
    $notes->position('value');
    ?>

