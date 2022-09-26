---
title: SparklineValueAxisItemNotesDataItem
slug: php-dataviz-ui-sparklinevalueaxisitemnotesdataitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem

A PHP class representing the dataItem setting of SparklineValueAxisItemNotesData.


## Methods

### icon

The icon of the note.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemNotesDataItemIcon)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem();
    $icon = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemIcon();
    $background = 'value';
    $icon->background($background);
    $dataItem->icon($icon);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->icon(array('background' => $background));
    ?>

### label

The label of the note.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemLabel|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemLabel](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemNotesDataItemLabel)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem();
    $label = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemLabel();
    $background = 'value';
    $label->background($background);
    $dataItem->label($label);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->label(array('background' => $background));
    ?>

### line

The line of the note.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemLine](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemNotesDataItemLine)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem();
    $line = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItemLine();
    $color = 'value';
    $line->color($color);
    $dataItem->line($line);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem();
    $color = 'value';
    $dataItem->line(array('color' => $color));
    ?>

### position
The position of the value axis note.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dataItem = new \Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem();
    $dataItem->position('value');
    ?>

### value
The value of the note.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemNotesDataItem`

#### Parameters

##### $value ``



