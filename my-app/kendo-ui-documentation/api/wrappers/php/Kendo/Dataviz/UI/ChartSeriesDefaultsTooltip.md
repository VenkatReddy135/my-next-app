---
title: ChartSeriesDefaultsTooltip
slug: php-dataviz-ui-chartseriesdefaultstooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip

A PHP class representing the tooltip setting of ChartSeriesDefaults.


## Methods

### background
The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip();
    $tooltip->background('value');
    ?>

### border

The border configuration options.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip();
    $border = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip();
    $tooltip->font('value');
    ?>

### format
The format of the labels. Uses kendo.format.Format placeholders:

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip();
    $tooltip->format('value');
    ?>

### padding

The padding of the tooltip. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltipPadding|array`




#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip();
    $tooltip->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltipPadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsTooltipPadding)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip();
    $padding = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltipPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $tooltip->padding($padding);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip();
    $bottom = 1;
    $tooltip->padding(array('bottom' => $bottom));
    ?>

### template
The template which renders the tooltip.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the series tooltip. By default the series tooltip is not displayed.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip();
    $tooltip->visible(true);
    ?>

