---
title: ChartCategoryAxisItemNotesDataItem
slug: php-dataviz-ui-chartcategoryaxisitemnotesdataitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem

A PHP class representing the dataItem setting of ChartCategoryAxisItemNotesData.


## Methods

### icon

The icon of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemNotesDataItemIcon)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem();
    $icon = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemIcon();
    $background = 'value';
    $icon->background($background);
    $dataItem->icon($icon);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->icon(array('background' => $background));
    ?>

### label

The label of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemLabel|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemLabel](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemNotesDataItemLabel)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem();
    $label = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemLabel();
    $background = 'value';
    $label->background($background);
    $dataItem->label($label);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->label(array('background' => $background));
    ?>

### line

The line of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemNotesDataItemLine)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem();
    $line = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItemLine();
    $color = 'value';
    $line->color($color);
    $dataItem->line($line);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem();
    $color = 'value';
    $dataItem->line(array('color' => $color));
    ?>

### position
The position of the category axis note.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dataItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem();
    $dataItem->position('value');
    ?>

### value
The value of the note.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemNotesDataItem`

#### Parameters

##### $value ``



