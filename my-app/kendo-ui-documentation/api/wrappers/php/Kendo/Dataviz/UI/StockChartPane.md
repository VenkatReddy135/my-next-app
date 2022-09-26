---
title: StockChartPane
slug: php-dataviz-ui-stockchartpane
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartPane

A PHP class representing the pane setting of StockChartPanes.


## Methods

### background
The background color of the pane.

#### Returns
`\Kendo\Dataviz\UI\StockChartPane`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartPane();
    $pane->background('value');
    ?>

### border

The border of the pane.

#### Returns
`\Kendo\Dataviz\UI\StockChartPane`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartPaneBorder|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartPaneBorder](/api/wrappers/php/Kendo/Dataviz/UI/StockChartPaneBorder)
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartPane();
    $border = new \Kendo\Dataviz\UI\StockChartPaneBorder();
    $color = 'value';
    $border->color($color);
    $pane->border($border);
    ?>

#### Example - using array

    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartPane();
    $color = 'value';
    $pane->border(array('color' => $color));
    ?>

### height
The pane height in pixels.

#### Returns
`\Kendo\Dataviz\UI\StockChartPane`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartPane();
    $pane->height(1);
    ?>

### margin
The margin of the pane.

#### Returns
`\Kendo\Dataviz\UI\StockChartPane`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartPane();
    $pane->margin(1);
    ?>

### name
The unique pane name.

#### Returns
`\Kendo\Dataviz\UI\StockChartPane`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartPane();
    $pane->name('value');
    ?>

### padding
The padding of the pane.

#### Returns
`\Kendo\Dataviz\UI\StockChartPane`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartPane();
    $pane->padding(1);
    ?>

### title

The pane title text or configuration.

#### Returns
`\Kendo\Dataviz\UI\StockChartPane`

#### Parameters

##### $value `string|\Kendo\Dataviz\UI\StockChartPaneTitle|array`




#### Example  - using string
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartPane();
    $pane->title('value');
    ?>


#### Example - using [\Kendo\Dataviz\UI\StockChartPaneTitle](/api/wrappers/php/Kendo/Dataviz/UI/StockChartPaneTitle)
    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartPane();
    $title = new \Kendo\Dataviz\UI\StockChartPaneTitle();
    $background = 'value';
    $title->background($background);
    $pane->title($title);
    ?>

#### Example - using array

    <?php
    $pane = new \Kendo\Dataviz\UI\StockChartPane();
    $background = 'value';
    $pane->title(array('background' => $background));
    ?>

