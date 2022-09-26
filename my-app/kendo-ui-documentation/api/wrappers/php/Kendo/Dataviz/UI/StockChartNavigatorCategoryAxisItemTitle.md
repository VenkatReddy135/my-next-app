---
title: StockChartNavigatorCategoryAxisItemTitle
slug: php-dataviz-ui-stockchartnavigatorcategoryaxisitemtitle
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle

A PHP class representing the title setting of StockChartNavigatorCategoryAxisItem.


## Methods

### background
The background color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $title->background('value');
    ?>

### border

The border of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitleBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitleBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemTitleBorder)
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $border = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitleBorder();
    $color = 'value';
    $border->color($color);
    $title->border($border);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $color = 'value';
    $title->border(array('color' => $color));
    ?>

### color
The text color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $title->color('value');
    ?>

### font
The font style of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $title->font('value');
    ?>

### margin

The margin of the title. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitleMargin|array`




#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $title->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitleMargin](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemTitleMargin)
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $margin = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitleMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $title->margin($margin);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $bottom = 1;
    $title->margin(array('bottom' => $bottom));
    ?>

### padding

The padding of the title. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitlePadding|array`




#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $title->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitlePadding](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorCategoryAxisItemTitlePadding)
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $padding = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitlePadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $title->padding($padding);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $bottom = 1;
    $title->padding(array('bottom' => $bottom));
    ?>

### position
The position of the title.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $title->position('value');
    ?>

### rotation
The rotation angle of the title. By default the title is not rotated.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $title->rotation(1);
    ?>

### text
The text of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $title->text('value');
    ?>

### visible
If set to true the chart will display the category axis title. By default the category axis title is visible.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItemTitle();
    $title->visible(true);
    ?>

