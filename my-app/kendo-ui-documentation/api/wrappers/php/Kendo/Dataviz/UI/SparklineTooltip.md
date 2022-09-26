---
title: SparklineTooltip
slug: php-dataviz-ui-sparklinetooltip
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineTooltip

A PHP class representing the tooltip setting of Sparkline.


## Methods

### background
The background color of the tooltip. The default is determined from the series color.

#### Returns
`\Kendo\Dataviz\UI\SparklineTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineTooltip();
    $tooltip->background('value');
    ?>

### border

The border configuration options.

#### Returns
`\Kendo\Dataviz\UI\SparklineTooltip`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineTooltipBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineTooltipBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineTooltipBorder)
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineTooltip();
    $border = new \Kendo\Dataviz\UI\SparklineTooltipBorder();
    $color = 'value';
    $border->color($color);
    $tooltip->border($border);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineTooltip();
    $color = 'value';
    $tooltip->border(array('color' => $color));
    ?>

### color
The text color of the tooltip. The default is the same as the series labels color.

#### Returns
`\Kendo\Dataviz\UI\SparklineTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineTooltip();
    $tooltip->color('value');
    ?>

### font
The tooltip font.

#### Returns
`\Kendo\Dataviz\UI\SparklineTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineTooltip();
    $tooltip->font('value');
    ?>

### format
The tooltip format.

#### Returns
`\Kendo\Dataviz\UI\SparklineTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineTooltip();
    $tooltip->format('value');
    ?>

### padding
The padding of the tooltip.

#### Returns
`\Kendo\Dataviz\UI\SparklineTooltip`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineTooltip();
    $tooltip->padding(1);
    ?>

### shared
A value indicating if the tooltip should be shared.

#### Returns
`\Kendo\Dataviz\UI\SparklineTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineTooltip();
    $tooltip->shared(true);
    ?>

### sharedTemplate
The shared tooltip template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\SparklineTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineTooltip();
    $tooltip->sharedTemplate('value');
    ?>

### template
The tooltip template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\SparklineTooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineTooltip();
    $tooltip->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineTooltip();
    $tooltip->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
A value indicating if the tooltip should be displayed.

#### Returns
`\Kendo\Dataviz\UI\SparklineTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\Dataviz\UI\SparklineTooltip();
    $tooltip->visible(true);
    ?>

