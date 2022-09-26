---
title: SparklineSeriesItemNotes
slug: php-dataviz-ui-sparklineseriesitemnotes
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineSeriesItemNotes

A PHP class representing the notes setting of SparklineSeriesItem.


## Methods

### icon

The icon of the notes.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemNotesIcon)
    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineSeriesItemNotes();
    $icon = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesIcon();
    $background = 'value';
    $icon->background($background);
    $notes->icon($icon);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineSeriesItemNotes();
    $background = 'value';
    $notes->icon(array('background' => $background));
    ?>

### label

The label of the notes.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemNotesLabel)
    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineSeriesItemNotes();
    $label = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLabel();
    $background = 'value';
    $label->background($background);
    $notes->label($label);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineSeriesItemNotes();
    $background = 'value';
    $notes->label(array('background' => $background));
    ?>

### line

The line of the notes.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemNotesLine|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemNotesLine](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemNotesLine)
    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineSeriesItemNotes();
    $line = new \Kendo\Dataviz\UI\SparklineSeriesItemNotesLine();
    $color = 'value';
    $line->color($color);
    $notes->line($line);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineSeriesItemNotes();
    $color = 'value';
    $notes->line(array('color' => $color));
    ?>

### position
The position of the series note.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemNotes`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $notes = new \Kendo\Dataviz\UI\SparklineSeriesItemNotes();
    $notes->position('value');
    ?>

