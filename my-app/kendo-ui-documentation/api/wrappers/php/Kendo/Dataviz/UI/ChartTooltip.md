---
title: ChartTooltip
slug: php-dataviz-ui-charttooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartTooltip

A PHP class representing the tooltip setting of Chart.


## Methods

### background
The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $tooltip->background('value');
    ?>

### border

The border configuration options.

#### Returns
`\Kendo\Dataviz\UI\ChartTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $border = new \Kendo\Dataviz\UI\ChartTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\ChartTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $tooltip->font('value');
    ?>

### format
The format of the labels. Uses kendo.format.Format placeholders:

#### Returns
`\Kendo\Dataviz\UI\ChartTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $tooltip->format('value');
    ?>

### padding

The padding of the tooltip. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartTooltip`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartTooltipPadding|array`




#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $tooltip->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartTooltipPadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartTooltipPadding)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $padding = new \Kendo\Dataviz\UI\ChartTooltipPadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $tooltip->padding($padding);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $bottom = 1;
    $tooltip->padding(array('bottom' => $bottom));
    ?>

### shared
If set to true the chart will display a single tooltip for every category.

#### Returns
`\Kendo\Dataviz\UI\ChartTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $tooltip->shared(true);
    ?>

### sharedTemplate
The template which renders the shared tooltip.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $tooltip->sharedTemplate('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $tooltip->sharedTemplate(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### template
The template which renders the tooltip.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\ChartTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
If set to true the chart will display the series tooltip. By default the series tooltip is not displayed.

#### Returns
`\Kendo\Dataviz\UI\ChartTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $tooltip->visible(true);
    ?>

