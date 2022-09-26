---
title: StockChartPaneTitle
slug: php-dataviz-ui-stockchartpanetitle
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartPaneTitle

A PHP class representing the title setting of StockChartPane.


## Methods

### background
The background color of the title. Any valid CSS color string will work here, including
hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartPaneTitle();
    $title->background('value');
    ?>

### border

The border of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartPaneTitle`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartPaneTitleBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartPaneTitleBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartPaneTitleBorder)
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartPaneTitle();
    $border = new \Kendo\Dataviz\UI\StockChartPaneTitleBorder();
    $color = 'value';
    $border->color($color);
    $title->border($border);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\StockChartPaneTitle();
    $color = 'value';
    $title->border(array('color' => $color));
    ?>

### color
The text color of the title. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartPaneTitle();
    $title->color('value');
    ?>

### font
The font style of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartPaneTitle();
    $title->font('value');
    ?>

### margin
The margin of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartPaneTitle`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartPaneTitle();
    $title->margin(1);
    ?>

### position
The position of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartPaneTitle();
    $title->position('value');
    ?>

### text
The text of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartPaneTitle();
    $title->text('value');
    ?>

### visible
The visibility of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartPaneTitle`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartPaneTitle();
    $title->visible(true);
    ?>

