---
title: ChartYAxisItemNotes
slug: php-dataviz-ui-chartyaxisitemnotes
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartYAxisItemNotes

A PHP class representing the notes setting of ChartYAxisItem.


## Methods

### addDataItem

Adds one or more ChartYAxisItemNotesDataItem to the ChartYAxisItemNotes.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotes`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem|array`

#### Example - using \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartYAxisItemNotes();
    $dataItem = new \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem();
    $position = 'value';
    $dataItem->position($position);
    $notes->addDataItem($dataItem);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartYAxisItemNotes();
    $position = 'value';
    $notes->addDataItem(array('position' => $position));
    ?>

#### Example - adding more than one ChartYAxisItemNotesDataItem

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartYAxisItemNotes();
    $first  = new \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem();
    $second = new \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem();
    $notes->addDataItem($first, $second);
    ?>

### icon

The icon of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemNotesIcon|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemNotesIcon](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemNotesIcon)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartYAxisItemNotes();
    $icon = new \Kendo\Dataviz\UI\ChartYAxisItemNotesIcon();
    $background = 'value';
    $icon->background($background);
    $notes->icon($icon);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartYAxisItemNotes();
    $background = 'value';
    $notes->icon(array('background' => $background));
    ?>

### label

The label of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemNotesLabel|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemNotesLabel](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemNotesLabel)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartYAxisItemNotes();
    $label = new \Kendo\Dataviz\UI\ChartYAxisItemNotesLabel();
    $background = 'value';
    $label->background($background);
    $notes->label($label);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartYAxisItemNotes();
    $background = 'value';
    $notes->label(array('background' => $background));
    ?>

### line

The line of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemNotesLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemNotesLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemNotesLine)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartYAxisItemNotes();
    $line = new \Kendo\Dataviz\UI\ChartYAxisItemNotesLine();
    $color = 'value';
    $line->color($color);
    $notes->line($line);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartYAxisItemNotes();
    $color = 'value';
    $notes->line(array('color' => $color));
    ?>

### position
The position of the y axis notes.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotes`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartYAxisItemNotes();
    $notes->position('value');
    ?>

