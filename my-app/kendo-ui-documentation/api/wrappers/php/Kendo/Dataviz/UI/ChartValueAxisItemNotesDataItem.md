---
title: ChartValueAxisItemNotesDataItem
slug: php-dataviz-ui-chartvalueaxisitemnotesdataitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem

A PHP class representing the dataItem setting of ChartValueAxisItemNotesData.


## Methods

### icon

The icon of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItemIcon|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItemIcon](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemNotesDataItemIcon)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem();
    $icon = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItemIcon();
    $background = 'value';
    $icon->background($background);
    $dataItem->icon($icon);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->icon(array('background' => $background));
    ?>

### label

The label of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItemLabel|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItemLabel](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemNotesDataItemLabel)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem();
    $label = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItemLabel();
    $background = 'value';
    $label->background($background);
    $dataItem->label($label);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->label(array('background' => $background));
    ?>

### line

The line of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItemLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemNotesDataItemLine)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem();
    $line = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItemLine();
    $color = 'value';
    $line->color($color);
    $dataItem->line($line);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem();
    $color = 'value';
    $dataItem->line(array('color' => $color));
    ?>

### position
The position of the value axis note.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem();
    $dataItem->position('value');
    ?>

### value
The value of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemNotesDataItem`

#### Parameters

##### $value ``



