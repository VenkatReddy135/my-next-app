---
title: SparklineCategoryAxisItemTitle
slug: php-dataviz-ui-sparklinecategoryaxisitemtitle
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle

A PHP class representing the title setting of SparklineCategoryAxisItem.


## Methods

### background
The background color of the title. Any valid CSS color string will work here, including
hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle();
    $title->background('value');
    ?>

### border

The border of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemTitleBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemTitleBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemTitleBorder)
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle();
    $border = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemTitleBorder();
    $color = 'value';
    $border->color($color);
    $title->border($border);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle();
    $color = 'value';
    $title->border(array('color' => $color));
    ?>

### color
The text color of the title. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle();
    $title->color('value');
    ?>

### font
The font style of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle();
    $title->font('value');
    ?>

### margin
The margin of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle();
    $title->margin(1);
    ?>

### position
The position of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle();
    $title->position('value');
    ?>

### rotation
The rotation angle of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle();
    $title->rotation(1);
    ?>

### text
The text of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle();
    $title->text('value');
    ?>

### visible
The visibility of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemTitle();
    $title->visible(true);
    ?>

