---
title: StockChartNavigatorPane
slug: php-dataviz-ui-stockchartnavigatorpane
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorPane

A PHP class representing the pane setting of StockChartNavigator.


## Methods

### background
The background color of the pane. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPane`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $pane->background('value');
    ?>

### border

The border of the navigator pane.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPane`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorPaneBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorPaneBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorPaneBorder)
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $border = new \Kendo\Dataviz\UI\StockChartNavigatorPaneBorder();
    $color = 'value';
    $border->color($color);
    $pane->border($border);
    ?>

#### Example - using array

    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $color = 'value';
    $pane->border(array('color' => $color));
    ?>

### height
The navigator pane height in pixels.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPane`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $pane->height(1);
    ?>

### margin

The margin of the pane. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPane`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\StockChartNavigatorPaneMargin|array`




#### Example  - using float
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $pane->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorPaneMargin](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorPaneMargin)
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $margin = new \Kendo\Dataviz\UI\StockChartNavigatorPaneMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $pane->margin($margin);
    ?>

#### Example - using array

    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $bottom = 1;
    $pane->margin(array('bottom' => $bottom));
    ?>

### name
The unique name of the navigator pane.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPane`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $pane->name('value');
    ?>

### padding

The padding of the pane. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPane`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\StockChartNavigatorPanePadding|array`




#### Example  - using float
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $pane->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorPanePadding](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorPanePadding)
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $padding = new \Kendo\Dataviz\UI\StockChartNavigatorPanePadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $pane->padding($padding);
    ?>

#### Example - using array

    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $bottom = 1;
    $pane->padding(array('bottom' => $bottom));
    ?>

### title

The title configuration of the navigator pane.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorPane`

#### Parameters

##### $value `string|\Kendo\Dataviz\UI\StockChartNavigatorPaneTitle|array`




#### Example  - using string
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $pane->title('value');
    ?>


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorPaneTitle](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorPaneTitle)
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $title = new \Kendo\Dataviz\UI\StockChartNavigatorPaneTitle();
    $background = 'value';
    $title->background($background);
    $pane->title($title);
    ?>

#### Example - using array

    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $background = 'value';
    $pane->title(array('background' => $background));
    ?>

