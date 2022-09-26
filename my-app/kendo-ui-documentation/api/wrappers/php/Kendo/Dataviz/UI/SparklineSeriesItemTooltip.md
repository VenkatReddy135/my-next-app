---
title: SparklineSeriesItemTooltip
slug: php-dataviz-ui-sparklineseriesitemtooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineSeriesItemTooltip

A PHP class representing the tooltip setting of SparklineSeriesItem.


## Methods

### background
The background color of the tooltip. The default is determined from the series color.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesItemTooltip();
    $tooltip->background('value');
    ?>

### border

The border configuration options.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesItemTooltip();
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesItemTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip. The default is the same as the series labels color.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesItemTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesItemTooltip();
    $tooltip->font('value');
    ?>

### format
The tooltip format. Format variables depend on the series type:

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesItemTooltip();
    $tooltip->format('value');
    ?>

### padding
The padding of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemTooltip`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesItemTooltip();
    $tooltip->padding(1);
    ?>

### template
The tooltip template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesItemTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesItemTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
A value indicating if the tooltip should be displayed.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItemTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesItemTooltip();
    $tooltip->visible(true);
    ?>

