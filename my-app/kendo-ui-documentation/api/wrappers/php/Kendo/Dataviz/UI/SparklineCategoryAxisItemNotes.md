---
title: SparklineCategoryAxisItemNotes
slug: php-dataviz-ui-sparklinecategoryaxisitemnotes
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes

A PHP class representing the notes setting of SparklineCategoryAxisItem.


## Methods

### addDataItem

Adds one or more SparklineCategoryAxisItemNotesDataItem to the SparklineCategoryAxisItemNotes.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem|array`

#### Example - using \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes();
    $dataItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem();
    $position = 'value';
    $dataItem->position($position);
    $notes->addDataItem($dataItem);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes();
    $position = 'value';
    $notes->addDataItem(array('position' => $position));
    ?>

#### Example - adding more than one SparklineCategoryAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes();
    $first  = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem();
    $second = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem();
    $notes->addDataItem($first, $second);
    ?>

### icon

The icon of the notes.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemNotesIcon)
    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes();
    $icon = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesIcon();
    $background = 'value';
    $icon->background($background);
    $notes->icon($icon);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes();
    $background = 'value';
    $notes->icon(array('background' => $background));
    ?>

### label

The label of the notes.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesLabel|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesLabel](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemNotesLabel)
    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes();
    $label = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesLabel();
    $background = 'value';
    $label->background($background);
    $notes->label($label);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes();
    $background = 'value';
    $notes->label(array('background' => $background));
    ?>

### line

The line of the notes.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesLine|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesLine](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemNotesLine)
    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes();
    $line = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesLine();
    $color = 'value';
    $line->color($color);
    $notes->line($line);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes();
    $color = 'value';
    $notes->line(array('color' => $color));
    ?>

### position
The position of the category axis note.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotes();
    $notes->position('value');
    ?>

