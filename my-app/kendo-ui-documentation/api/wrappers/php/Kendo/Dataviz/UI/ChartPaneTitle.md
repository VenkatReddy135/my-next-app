---
title: ChartPaneTitle
slug: php-dataviz-ui-chartpanetitle
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartPaneTitle

A PHP class representing the title setting of ChartPane.


## Methods

### background
The background color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartPaneTitle();
    $title->background('value');
    ?>

### border

The border of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartPaneTitle`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartPaneTitleBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartPaneTitleBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartPaneTitleBorder)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartPaneTitle();
    $border = new \Kendo\Dataviz\UI\ChartPaneTitleBorder();
    $color = 'value';
    $border->color($color);
    $title->border($border);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartPaneTitle();
    $color = 'value';
    $title->border(array('color' => $color));
    ?>

### color
The text color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartPaneTitle();
    $title->color('value');
    ?>

### font
The font style of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartPaneTitle();
    $title->font('value');
    ?>

### margin

The margin of the title. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartPaneTitle`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartPaneTitleMargin|array`




#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\ChartPaneTitle();
    $title->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartPaneTitleMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartPaneTitleMargin)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartPaneTitle();
    $margin = new \Kendo\Dataviz\UI\ChartPaneTitleMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $title->margin($margin);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartPaneTitle();
    $bottom = 1;
    $title->margin(array('bottom' => $bottom));
    ?>

### position
The position of the title.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\ChartPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartPaneTitle();
    $title->position('value');
    ?>

### text
The text of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartPaneTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartPaneTitle();
    $title->text('value');
    ?>

### visible
If set to true the chart will display the pane title. By default the pane title is visible.

#### Returns
`\Kendo\Dataviz\UI\ChartPaneTitle`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartPaneTitle();
    $title->visible(true);
    ?>

