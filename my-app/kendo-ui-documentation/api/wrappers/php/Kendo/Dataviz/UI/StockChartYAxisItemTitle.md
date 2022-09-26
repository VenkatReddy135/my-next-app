---
title: StockChartYAxisItemTitle
slug: php-dataviz-ui-stockchartyaxisitemtitle
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartYAxisItemTitle

A PHP class representing the title setting of StockChartYAxisItem.


## Methods

### background
The background color of the title. Any valid CSS color string will work here, including
hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartYAxisItemTitle();
    $title->background('value');
    ?>

### border

The border of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemTitle`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartYAxisItemTitleBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartYAxisItemTitleBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartYAxisItemTitleBorder)
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartYAxisItemTitle();
    $border = new \Kendo\Dataviz\UI\StockChartYAxisItemTitleBorder();
    $color = 'value';
    $border->color($color);
    $title->border($border);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\StockChartYAxisItemTitle();
    $color = 'value';
    $title->border(array('color' => $color));
    ?>

### color
The text color of the title. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartYAxisItemTitle();
    $title->color('value');
    ?>

### font
The font style of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartYAxisItemTitle();
    $title->font('value');
    ?>

### margin
The margin of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemTitle`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartYAxisItemTitle();
    $title->margin(1);
    ?>

### padding
The padding of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemTitle`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartYAxisItemTitle();
    $title->padding(1);
    ?>

### position
The position of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartYAxisItemTitle();
    $title->position('value');
    ?>

### rotation
The rotation angle of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemTitle`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartYAxisItemTitle();
    $title->rotation(1);
    ?>

### text
The text of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartYAxisItemTitle();
    $title->text('value');
    ?>

### visible
The visibility of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartYAxisItemTitle`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartYAxisItemTitle();
    $title->visible(true);
    ?>

