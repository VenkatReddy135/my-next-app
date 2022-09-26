---
title: StockChartSeriesItemNotes
slug: php-dataviz-ui-stockchartseriesitemnotes
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartSeriesItemNotes

A PHP class representing the notes setting of StockChartSeriesItem.


## Methods

### icon

The icon of the notes.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemNotesIcon)
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartSeriesItemNotes();
    $icon = new \Kendo\Dataviz\UI\StockChartSeriesItemNotesIcon();
    $background = 'value';
    $icon->background($background);
    $notes->icon($icon);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartSeriesItemNotes();
    $background = 'value';
    $notes->icon(array('background' => $background));
    ?>

### label

The label of the notes.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemNotesLabel|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemNotesLabel](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemNotesLabel)
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartSeriesItemNotes();
    $label = new \Kendo\Dataviz\UI\StockChartSeriesItemNotesLabel();
    $background = 'value';
    $label->background($background);
    $notes->label($label);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartSeriesItemNotes();
    $background = 'value';
    $notes->label(array('background' => $background));
    ?>

### line

The line of the notes.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemNotes`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesItemNotesLine|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesItemNotesLine](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesItemNotesLine)
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartSeriesItemNotes();
    $line = new \Kendo\Dataviz\UI\StockChartSeriesItemNotesLine();
    $color = 'value';
    $line->color($color);
    $notes->line($line);
    ?>

#### Example - using array

    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartSeriesItemNotes();
    $color = 'value';
    $notes->line(array('color' => $color));
    ?>

### position
The position of the series note.

#### Returns
`\Kendo\Dataviz\UI\StockChartSeriesItemNotes`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $notes = new \Kendo\Dataviz\UI\StockChartSeriesItemNotes();
    $notes->position('value');
    ?>

