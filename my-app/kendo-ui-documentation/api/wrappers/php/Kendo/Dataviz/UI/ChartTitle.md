---
title: ChartTitle
slug: php-dataviz-ui-charttitle
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartTitle

A PHP class representing the title setting of Chart.


## Methods

### align
The alignment of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $title->align('value');
    ?>

### background
The background color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $title->background('value');
    ?>

### border

The border of the series.

#### Returns
`\Kendo\Dataviz\UI\ChartTitle`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartTitleBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartTitleBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartTitleBorder)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $border = new \Kendo\Dataviz\UI\ChartTitleBorder();
    $color = 'value';
    $border->color($color);
    $title->border($border);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $color = 'value';
    $title->border(array('color' => $color));
    ?>

### font
The font of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $title->font('value');
    ?>

### margin

The margin of the title. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartTitle`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartTitleMargin|array`




#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $title->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartTitleMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartTitleMargin)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $margin = new \Kendo\Dataviz\UI\ChartTitleMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $title->margin($margin);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $bottom = 1;
    $title->margin(array('bottom' => $bottom));
    ?>

### padding

The padding of the title. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartTitle`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartTitlePadding|array`




#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $title->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartTitlePadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartTitlePadding)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $padding = new \Kendo\Dataviz\UI\ChartTitlePadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $title->padding($padding);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $bottom = 1;
    $title->padding(array('bottom' => $bottom));
    ?>

### position
The position of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $title->position('value');
    ?>

### text
The text of the chart title. You can also set the text directly for a title with default options.

#### Returns
`\Kendo\Dataviz\UI\ChartTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $title->text('value');
    ?>

### visible
If set to true the chart will display the title. By default the title is not displayed.

#### Returns
`\Kendo\Dataviz\UI\ChartTitle`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $title->visible(true);
    ?>

