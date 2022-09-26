---
title: ChartSeriesItemTooltip
slug: php-dataviz-ui-chartseriesitemtooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesItemTooltip

A PHP class representing the tooltip setting of ChartSeriesItem.


## Methods

### background
The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesItemTooltip();
    $tooltip->background('value');
    ?>

### border

The border configuration options.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesItemTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesItemTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesItemTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesItemTooltip();
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesItemTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesItemTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesItemTooltip();
    $tooltip->font('value');
    ?>

### format
The format of the labels. Uses kendo.format.Format placeholders:

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesItemTooltip();
    $tooltip->format('value');
    ?>

### padding

The padding of the tooltip. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTooltip`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartSeriesItemTooltipPadding|array`




#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesItemTooltip();
    $tooltip->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesItemTooltipPadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesItemTooltipPadding)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesItemTooltip();
    $padding = new \Kendo\Dataviz\UI\ChartSeriesItemTooltipPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $tooltip->padding($padding);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesItemTooltip();
    $bottom = 1;
    $tooltip->padding(array('bottom' => $bottom));
    ?>

### template
The template which renders the tooltip.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesItemTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesItemTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the series tooltip. By default the series tooltip is not displayed.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesItemTooltip();
    $tooltip->visible(true);
    ?>

