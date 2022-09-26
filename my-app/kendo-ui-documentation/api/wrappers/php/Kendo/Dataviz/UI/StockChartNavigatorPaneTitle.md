---
title: StockChartNavigatorPaneTitle
slug: php-dataviz-ui-stockchartnavigatorpanetitle
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorPaneTitle

A PHP class representing the title setting of StockChartNavigatorPane.


## Methods

### background
The background color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorPaneTitle();
    $title->background('value');
    ?>

### border

The border of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPaneTitle`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorPaneTitleBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorPaneTitleBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorPaneTitleBorder)
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorPaneTitle();
    $border = new \Kendo\Dataviz\UI\StockChartNavigatorPaneTitleBorder();
    $color = 'value';
    $border->color($color);
    $title->border($border);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorPaneTitle();
    $color = 'value';
    $title->border(array('color' => $color));
    ?>

### color
The text color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorPaneTitle();
    $title->color('value');
    ?>

### font
The font style of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorPaneTitle();
    $title->font('value');
    ?>

### margin

The margin of the title. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPaneTitle`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\StockChartNavigatorPaneTitleMargin|array`




#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorPaneTitle();
    $title->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorPaneTitleMargin](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorPaneTitleMargin)
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorPaneTitle();
    $margin = new \Kendo\Dataviz\UI\StockChartNavigatorPaneTitleMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $title->margin($margin);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorPaneTitle();
    $bottom = 1;
    $title->margin(array('bottom' => $bottom));
    ?>

### position
The position of the title.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorPaneTitle();
    $title->position('value');
    ?>

### text
The text of the title.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorPaneTitle();
    $title->text('value');
    ?>

### visible
If set to true the chart will display the pane title. By default the pane title is visible.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPaneTitle`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorPaneTitle();
    $title->visible(true);
    ?>

