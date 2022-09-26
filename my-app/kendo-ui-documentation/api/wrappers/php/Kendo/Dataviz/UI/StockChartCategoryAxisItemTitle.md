---
title: StockChartCategoryAxisItemTitle
slug: php-dataviz-ui-stockchartcategoryaxisitemtitle
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle

A PHP class representing the title setting of StockChartCategoryAxisItem.


## Methods

### background
The background color of the title. Any valid CSS color string will work here, including
hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle();
    $title->background('value');
    ?>

### border

The border of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemTitleBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemTitleBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemTitleBorder)
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle();
    $border = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemTitleBorder();
    $color = 'value';
    $border->color($color);
    $title->border($border);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle();
    $color = 'value';
    $title->border(array('color' => $color));
    ?>

### color
The text color of the title. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle();
    $title->color('value');
    ?>

### font
The font style of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle();
    $title->font('value');
    ?>

### margin
The margin of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle();
    $title->margin(1);
    ?>

### position
The position of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle();
    $title->position('value');
    ?>

### rotation
The rotation angle of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle();
    $title->rotation(1);
    ?>

### text
The text of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle();
    $title->text('value');
    ?>

### visible
The visibility of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemTitle();
    $title->visible(true);
    ?>

