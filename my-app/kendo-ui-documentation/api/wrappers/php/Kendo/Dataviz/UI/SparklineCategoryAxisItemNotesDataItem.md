---
title: SparklineCategoryAxisItemNotesDataItem
slug: php-dataviz-ui-sparklinecategoryaxisitemnotesdataitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem

A PHP class representing the dataItem setting of SparklineCategoryAxisItemNotesData.


## Methods

### icon

The icon of the note.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemNotesDataItemIcon)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem();
    $icon = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemIcon();
    $background = 'value';
    $icon->background($background);
    $dataItem->icon($icon);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->icon(array('background' => $background));
    ?>

### label

The label of the note.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemNotesDataItemLabel)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem();
    $label = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLabel();
    $background = 'value';
    $label->background($background);
    $dataItem->label($label);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem();
    $background = 'value';
    $dataItem->label(array('background' => $background));
    ?>

### line

The line of the note.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLine|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLine](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemNotesDataItemLine)
    <?php
    $dataItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem();
    $line = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItemLine();
    $color = 'value';
    $line->color($color);
    $dataItem->line($line);
    ?>

#### Example - using array

    <?php
    $dataItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem();
    $color = 'value';
    $dataItem->line(array('color' => $color));
    ?>

### position
The position of the category axis note.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $dataItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem();
    $dataItem->position('value');
    ?>

### value
The value of the note.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemNotesDataItem`

#### Parameters

##### $value ``



