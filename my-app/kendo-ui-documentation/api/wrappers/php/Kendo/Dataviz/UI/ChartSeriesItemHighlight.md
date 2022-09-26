---
title: ChartSeriesItemHighlight
slug: php-dataviz-ui-chartseriesitemhighlight
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesItemHighlight

A PHP class representing the highlight setting of ChartSeriesItem.


## Methods

### border

The border of the highlighted chart series. The color is computed automatically from the base point color.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemHighlight`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesItemHighlightBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesItemHighlightBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesItemHighlightBorder)
    <?php
    $highlight = new \Kendo\Dataviz\UI\ChartSeriesItemHighlight();
    $border = new \Kendo\Dataviz\UI\ChartSeriesItemHighlightBorder();
    $color = 'value';
    $border->color($color);
    $highlight->border($border);
    ?>

#### Example - using array

    <?php
    $highlight = new \Kendo\Dataviz\UI\ChartSeriesItemHighlight();
    $color = 'value';
    $highlight->border(array('color' => $color));
    ?>

### color
The highlight color. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemHighlight`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $highlight = new \Kendo\Dataviz\UI\ChartSeriesItemHighlight();
    $highlight->color('value');
    ?>

### line

The line of the highlighted chart series. The color is computed automatically from the base point color.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemHighlight`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesItemHighlightLine|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesItemHighlightLine](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesItemHighlightLine)
    <?php
    $highlight = new \Kendo\Dataviz\UI\ChartSeriesItemHighlight();
    $line = new \Kendo\Dataviz\UI\ChartSeriesItemHighlightLine();
    $color = 'value';
    $line->color($color);
    $highlight->line($line);
    ?>

#### Example - using array

    <?php
    $highlight = new \Kendo\Dataviz\UI\ChartSeriesItemHighlight();
    $color = 'value';
    $highlight->line(array('color' => $color));
    ?>

### opacity
The opacity of the highlighted points.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemHighlight`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $highlight = new \Kendo\Dataviz\UI\ChartSeriesItemHighlight();
    $highlight->opacity(1);
    ?>

### visible
If set to true the chart will highlight the series when the user hovers it with the mouse.
By default chart series highlighting is enabled.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemHighlight`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $highlight = new \Kendo\Dataviz\UI\ChartSeriesItemHighlight();
    $highlight->visible(true);
    ?>

