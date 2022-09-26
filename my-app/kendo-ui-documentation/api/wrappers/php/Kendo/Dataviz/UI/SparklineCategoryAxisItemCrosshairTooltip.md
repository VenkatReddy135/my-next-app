---
title: SparklineCategoryAxisItemCrosshairTooltip
slug: php-dataviz-ui-sparklinecategoryaxisitemcrosshairtooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip

A PHP class representing the tooltip setting of SparklineCategoryAxisItemCrosshair.


## Methods

### background
The background color of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip();
    $tooltip->background('value');
    ?>

### border

The border configuration options.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineCategoryAxisItemCrosshairTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip();
    $border = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip();
    $tooltip->font('value');
    ?>

### format
The tooltip format.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip();
    $tooltip->format('value');
    ?>

### padding
The padding of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip();
    $tooltip->padding(1);
    ?>

### template
The tooltip template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
A value indicating if the tooltip should be displayed.

#### Returns
`\Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineCategoryAxisItemCrosshairTooltip();
    $tooltip->visible(true);
    ?>

