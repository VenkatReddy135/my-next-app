---
title: SparklineValueAxisItemCrosshairTooltip
slug: php-dataviz-ui-sparklinevalueaxisitemcrosshairtooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip

A PHP class representing the tooltip setting of SparklineValueAxisItemCrosshair.


## Methods

### background
The background color of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip();
    $tooltip->background('value');
    ?>

### border

The border configuration options.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemCrosshairTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip();
    $border = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip();
    $tooltip->font('value');
    ?>

### format
The tooltip format.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip();
    $tooltip->format('value');
    ?>

### padding
The padding of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip();
    $tooltip->padding(1);
    ?>

### template
The tooltip template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
A value indicating if the tooltip should be displayed.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineValueAxisItemCrosshairTooltip();
    $tooltip->visible(true);
    ?>

