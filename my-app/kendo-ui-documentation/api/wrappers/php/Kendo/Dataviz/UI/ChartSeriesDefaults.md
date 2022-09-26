---
title: ChartSeriesDefaults
slug: php-dataviz-ui-chartseriesdefaults
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesDefaults

A PHP class representing the seriesDefaults setting of Chart.


## Methods

### area
The area chart series options. Accepts all values supported by the series option.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value ``



### bar
The bar chart series options. Accepts all values supported by the series option.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value ``



### border

The border of the series.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesDefaultsBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsBorder)
    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\ChartSeriesDefaults();
    $border = new \Kendo\Dataviz\UI\ChartSeriesDefaultsBorder();
    $color = 'value';
    $border->color($color);
    $seriesDefaults->border($border);
    ?>

#### Example - using array

    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\ChartSeriesDefaults();
    $color = 'value';
    $seriesDefaults->border(array('color' => $color));
    ?>

### bubble
The bubble chart series options. Accepts all values supported by the series option.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value ``



### candlestick
The candlestick chart series options. Accepts all values supported by the series option.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value ``



### column
The column chart series options. Accepts all values supported by the series option.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value ``



### donut
The donut chart series options. Accepts all values supported by the series option.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value ``



### gap
The distance between category clusters.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\ChartSeriesDefaults();
    $seriesDefaults->gap(1);
    ?>

### labels

The chart series label configuration.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesDefaultsLabels|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsLabels](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsLabels)
    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\ChartSeriesDefaults();
    $labels = new \Kendo\Dataviz\UI\ChartSeriesDefaultsLabels();
    $background = 'value';
    $labels->background($background);
    $seriesDefaults->labels($labels);
    ?>

#### Example - using array

    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\ChartSeriesDefaults();
    $background = 'value';
    $seriesDefaults->labels(array('background' => $background));
    ?>

### line
The line chart series options. Accepts all values supported by the series option.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value ``



### notes

The seriesDefaults notes configuration.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesDefaultsNotes|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsNotes](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsNotes)
    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\ChartSeriesDefaults();
    $notes = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotes();
    $icon = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon();
    $notes->icon($icon);
    $seriesDefaults->notes($notes);
    ?>

#### Example - using array

    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\ChartSeriesDefaults();
    $icon = new \Kendo\Dataviz\UI\ChartSeriesDefaultsNotesIcon();
    $seriesDefaults->notes(array('icon' => $icon));
    ?>

### ohlc
The ohlc chart series options. Accepts all values supported by the series option.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value ``



### overlay

The chart series overlay options.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesDefaultsOverlay|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsOverlay](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsOverlay)
    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\ChartSeriesDefaults();
    $overlay = new \Kendo\Dataviz\UI\ChartSeriesDefaultsOverlay();
    $gradient = 'value';
    $overlay->gradient($gradient);
    $seriesDefaults->overlay($overlay);
    ?>

#### Example - using array

    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\ChartSeriesDefaults();
    $gradient = 'value';
    $seriesDefaults->overlay(array('gradient' => $gradient));
    ?>

### pie
The pie chart series options. Accepts all values supported by the series option.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value ``



### scatter
The scatter chart series options. Accepts all values supported by the series option.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value ``



### scatterLine
The scatterLine chart series options. Accepts all values supported by the series option.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value ``



### spacing
The space between the chart series as proportion of the series width.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\ChartSeriesDefaults();
    $seriesDefaults->spacing(1);
    ?>

### stack
A value indicating if the series should be stacked. String value indicates that the series should be stacked in a group with the specified name.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\ChartSeriesDefaults();
    $seriesDefaults->stack(true);
    ?>

### tooltip

The chart series tooltip configuration options.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaultsTooltip)
    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\ChartSeriesDefaults();
    $tooltip = new \Kendo\Dataviz\UI\ChartSeriesDefaultsTooltip();
    $background = 'value';
    $tooltip->background($background);
    $seriesDefaults->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $seriesDefaults = new \Kendo\Dataviz\UI\ChartSeriesDefaults();
    $background = 'value';
    $seriesDefaults->tooltip(array('background' => $background));
    ?>

### verticalArea
The verticalArea chart series options. Accepts all values supported by the series option.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value ``



### verticalLine
The verticalLine chart series options. Accepts all values supported by the series option.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesDefaults`

#### Parameters

##### $value ``



