---
title: ChartSeriesItemNotes
slug: php-dataviz-ui-chartseriesitemnotes
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesItemNotes

A PHP class representing the notes setting of ChartSeriesItem.


## Methods

### icon

The icon of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesItemNotesIcon|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesItemNotesIcon](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesItemNotesIcon)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartSeriesItemNotes();
    $icon = new \Kendo\Dataviz\UI\ChartSeriesItemNotesIcon();
    $background = 'value';
    $icon->background($background);
    $notes->icon($icon);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartSeriesItemNotes();
    $background = 'value';
    $notes->icon(array('background' => $background));
    ?>

### label

The label of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesItemNotesLabel|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesItemNotesLabel](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesItemNotesLabel)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartSeriesItemNotes();
    $label = new \Kendo\Dataviz\UI\ChartSeriesItemNotesLabel();
    $background = 'value';
    $label->background($background);
    $notes->label($label);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartSeriesItemNotes();
    $background = 'value';
    $notes->label(array('background' => $background));
    ?>

### line

The line of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesItemNotesLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesItemNotesLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesItemNotesLine)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartSeriesItemNotes();
    $line = new \Kendo\Dataviz\UI\ChartSeriesItemNotesLine();
    $color = 'value';
    $line->color($color);
    $notes->line($line);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartSeriesItemNotes();
    $color = 'value';
    $notes->line(array('color' => $color));
    ?>

### position
The position of the series note.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemNotes`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartSeriesItemNotes();
    $notes->position('value');
    ?>

