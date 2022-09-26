---
title: RangeSliderTooltip
slug: php-ui-rangeslidertooltip
tags: api, php
publish: true
---

# \Kendo\UI\RangeSliderTooltip

A PHP class representing the tooltip setting of RangeSlider.


## Methods

### enabled
Disables (false) or enables (true) the tooltip of the RangeSlider.

#### Returns
`\Kendo\UI\RangeSliderTooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\RangeSliderTooltip();
    $tooltip->enabled(true);
    ?>

### format
Format string for the text of the tooltip. Note: The applied format will also influence the appearance of
the RangeSlider tick labels.

#### Returns
`\Kendo\UI\RangeSliderTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\RangeSliderTooltip();
    $tooltip->format('value');
    ?>

### template
Template of the tooltip.

#### Returns
`\Kendo\UI\RangeSliderTooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\RangeSliderTooltip();
    $tooltip->template('value');
    ?>

