---
title: ChartPane
slug: php-dataviz-ui-chartpane
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartPane

A PHP class representing the pane setting of ChartPanes.


## Methods

### background
The background color of the chart pane. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartPane`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $pane->background('value');
    ?>

### border

The border of the chart pane.

#### Returns
`\Kendo\Dataviz\UI\ChartPane`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartPaneBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartPaneBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartPaneBorder)
    <?php
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $border = new \Kendo\Dataviz\UI\ChartPaneBorder();
    $color = 'value';
    $border->color($color);
    $pane->border($border);
    ?>

#### Example - using array

    <?php
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $color = 'value';
    $pane->border(array('color' => $color));
    ?>

### height
The chart pane height in pixels.

#### Returns
`\Kendo\Dataviz\UI\ChartPane`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $pane->height(1);
    ?>

### margin

The margin of the pane. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartPane`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartPaneMargin|array`




#### Example  - using float
    <?php
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $pane->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartPaneMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartPaneMargin)
    <?php
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $margin = new \Kendo\Dataviz\UI\ChartPaneMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $pane->margin($margin);
    ?>

#### Example - using array

    <?php
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $bottom = 1;
    $pane->margin(array('bottom' => $bottom));
    ?>

### name
The unique name of the chart pane.

#### Returns
`\Kendo\Dataviz\UI\ChartPane`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $pane->name('value');
    ?>

### padding

The padding of the pane. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartPane`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartPanePadding|array`




#### Example  - using float
    <?php
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $pane->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartPanePadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartPanePadding)
    <?php
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $padding = new \Kendo\Dataviz\UI\ChartPanePadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $pane->padding($padding);
    ?>

#### Example - using array

    <?php
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $bottom = 1;
    $pane->padding(array('bottom' => $bottom));
    ?>

### title

The title configuration of the chart pane.

#### Returns
`\Kendo\Dataviz\UI\ChartPane`

#### Parameters

##### $value `string|\Kendo\Dataviz\UI\ChartPaneTitle|array`




#### Example  - using string
    <?php
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $pane->title('value');
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartPaneTitle](/api/wrappers/php/Kendo/Dataviz/UI/ChartPaneTitle)
    <?php
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $title = new \Kendo\Dataviz\UI\ChartPaneTitle();
    $background = 'value';
    $title->background($background);
    $pane->title($title);
    ?>

#### Example - using array

    <?php
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $background = 'value';
    $pane->title(array('background' => $background));
    ?>

