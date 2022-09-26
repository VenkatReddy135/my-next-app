---
title: StockChartTitle
slug: php-dataviz-ui-stockcharttitle
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartTitle

A PHP class representing the title setting of StockChart.


## Methods

### align
The alignment of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartTitle();
    $title->align('value');
    ?>

### background
The background color of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartTitle();
    $title->background('value');
    ?>

### border

The border of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartTitle`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartTitleBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartTitleBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartTitleBorder)
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartTitle();
    $border = new \Kendo\Dataviz\UI\StockChartTitleBorder();
    $color = 'value';
    $border->color($color);
    $title->border($border);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\StockChartTitle();
    $color = 'value';
    $title->border(array('color' => $color));
    ?>

### font
The font of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartTitle();
    $title->font('value');
    ?>

### margin
The margin of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartTitle`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartTitle();
    $title->margin(1);
    ?>

### padding
The padding of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartTitle`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartTitle();
    $title->padding(1);
    ?>

### position
The position of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartTitle();
    $title->position('value');
    ?>

### text
The title of the chart. You can also set the text directly for a title with default options.

#### Returns
`\Kendo\Dataviz\UI\StockChartTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartTitle();
    $title->text('value');
    ?>

### visible
The visibility of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartTitle`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartTitle();
    $title->visible(true);
    ?>

