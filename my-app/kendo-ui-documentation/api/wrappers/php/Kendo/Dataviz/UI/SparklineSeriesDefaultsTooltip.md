---
title: SparklineSeriesDefaultsTooltip
slug: php-dataviz-ui-sparklineseriesdefaultstooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip

A PHP class representing the tooltip setting of SparklineSeriesDefaults.


## Methods

### background
The background color of the tooltip. The default is determined from the series color.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip();
    $tooltip->background('value');
    ?>

### border

The border configuration options.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesDefaultsTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip();
    $border = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip. The default is the same as the series labels color.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip();
    $tooltip->font('value');
    ?>

### format
The tooltip format.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip();
    $tooltip->format('value');
    ?>

### padding
The padding of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip();
    $tooltip->padding(1);
    ?>

### template
The tooltip template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
A value indicating if the tooltip should be displayed.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesDefaultsTooltip();
    $tooltip->visible(true);
    ?>

