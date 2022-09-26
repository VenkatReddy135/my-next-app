---
title: SliderTooltip
slug: php-ui-slidertooltip
tags: api, php
publish: true
---

# \Kendo\UI\SliderTooltip

A PHP class representing the tooltip setting of Slider.


## Methods

### enabled
Disables (false) or enables (true) the tooltip of
the Slider.

#### Returns
`\Kendo\UI\SliderTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\SliderTooltip();
    $tooltip->enabled(true);
    ?>

### format
Format string for the text of the tooltip. Note: The applied
format will also influence the appearance of the Slider
tick labels.

#### Returns
`\Kendo\UI\SliderTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\SliderTooltip();
    $tooltip->format('value');
    ?>

### template
Template of the tooltip.

#### Returns
`\Kendo\UI\SliderTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\SliderTooltip();
    $tooltip->template('value');
    ?>

