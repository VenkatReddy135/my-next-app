---
title: ChartYAxisItemNotesDataItem
slug: php-dataviz-ui-chartyaxisitemnotesdataitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem

A PHP class representing the dataItem setting of ChartYAxisItemNotesData.


## Methods

### icon

The icon of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemNotesDataItemIcon|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemNotesDataItemIcon](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemNotesDataItemIcon)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem();
    $icon = new \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItemIcon();
    $background = 'value';
    $icon->background($background);
    $dataItem->icon($icon);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->icon(array('background' => $background));
    ?>

### label

The label of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemNotesDataItemLabel|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemNotesDataItemLabel](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemNotesDataItemLabel)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem();
    $label = new \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItemLabel();
    $background = 'value';
    $label->background($background);
    $dataItem->label($label);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->label(array('background' => $background));
    ?>

### line

The line of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemNotesDataItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemNotesDataItemLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemNotesDataItemLine)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem();
    $line = new \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItemLine();
    $color = 'value';
    $line->color($color);
    $dataItem->line($line);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem();
    $color = 'value';
    $dataItem->line(array('color' => $color));
    ?>

### position
The position of the y axis notes.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem();
    $dataItem->position('value');
    ?>

### value
The value of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemNotesDataItem`

#### Parameters

##### $value ``



