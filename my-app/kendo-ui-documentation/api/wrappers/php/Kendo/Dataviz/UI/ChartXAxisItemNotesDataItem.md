---
title: ChartXAxisItemNotesDataItem
slug: php-dataviz-ui-chartxaxisitemnotesdataitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem

A PHP class representing the dataItem setting of ChartXAxisItemNotesData.


## Methods

### icon

The icon of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemNotesDataItemIcon)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem();
    $icon = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemIcon();
    $background = 'value';
    $icon->background($background);
    $dataItem->icon($icon);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->icon(array('background' => $background));
    ?>

### label

The label of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemNotesDataItemLabel)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem();
    $label = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLabel();
    $background = 'value';
    $label->background($background);
    $dataItem->label($label);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->label(array('background' => $background));
    ?>

### line

The line of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemNotesDataItemLine)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem();
    $line = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItemLine();
    $color = 'value';
    $line->color($color);
    $dataItem->line($line);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem();
    $color = 'value';
    $dataItem->line(array('color' => $color));
    ?>

### position
The position of the x axis note.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem();
    $dataItem->position('value');
    ?>

### value
The value of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemNotesDataItem`

#### Parameters

##### $value ``



