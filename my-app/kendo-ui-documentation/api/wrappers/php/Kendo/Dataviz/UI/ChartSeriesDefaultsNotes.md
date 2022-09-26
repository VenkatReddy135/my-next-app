---
title: ChartSeriesDefaultsNotes
slug: php-dataviz-ui-chartseriesdefaultsnotes
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesDefaultsNotes

A PHP class representing the notes setting of ChartSeriesDefaults.


## Methods

### icon

The icon of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsNotesIcon)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotes();
    $icon = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon();
    $background = 'value';
    $icon->background($background);
    $notes->icon($icon);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotes();
    $background = 'value';
    $notes->icon(array('background' => $background));
    ?>

### label

The label of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsNotesLabel)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotes();
    $label = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLabel();
    $background = 'value';
    $label->background($background);
    $notes->label($label);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotes();
    $background = 'value';
    $notes->label(array('background' => $background));
    ?>

### line

The line of the notes.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsNotesLine)
    <?php
    $notes = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotes();
    $line = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesLine();
    $color = 'value';
    $line->color($color);
    $notes->line($line);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotes();
    $color = 'value';
    $notes->line(array('color' => $color));
    ?>

