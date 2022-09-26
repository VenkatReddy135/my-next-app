---
title: SparklineSeriesItem
slug: php-dataviz-ui-sparklineseriesitem
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineSeriesItem

A PHP class representing the seriesItem setting of SparklineSeries.


## Methods

### aggregate
The aggregate function to apply for date series.This function is used when a category (an year, month, etc.) contains two or more points.
The function return value is displayed instead of the individual points.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->aggregate('value');
    ?>

### axis
The name of the value axis to use.** Applicable to area, bar, column and line series **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->axis('value');
    ?>

### border

The border of the points.** Applicable to bar, column and pie series **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemBorder)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $border = new \Kendo\Dataviz\UI\SparklineSeriesItemBorder();
    $color = 'value';
    $border->color($color);
    $seriesItem->border($border);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $color = 'value';
    $seriesItem->border(array('color' => $color));
    ?>

### categoryField
The data field containing the point category name.** Applicable to pie series. **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->categoryField('value');
    ?>

### color
The series base color.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->color('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->color(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### colorField
The data field containing the point color.** Applicable for bar, column and pie series. **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->colorField('value');
    ?>

### connectors

The label connectors options.** Applicable to pie series. **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemConnectors|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemConnectors](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemConnectors)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $connectors = new \Kendo\Dataviz\UI\SparklineSeriesItemConnectors();
    $color = 'value';
    $connectors->color($color);
    $seriesItem->connectors($connectors);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $color = 'value';
    $seriesItem->connectors(array('color' => $color));
    ?>

### currentField
The data field containing the current value.** Available for bullet and verticalBullet series. **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->currentField('value');
    ?>

### dashType
The series line dash type.** Applicable only to line series **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->dashType('value');
    ?>

### data
Array of data items. The data item type can be either a:

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->data(new array());
    ?>

### explodeField
The data field containing a boolean value that indicates if the sector is exploded.** Available for pie series **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->explodeField('value');
    ?>

### field
The data field containing the series value.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->field('value');
    ?>

### gap
The distance between category clusters.** Applicable for bar and column series. **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->gap(1);
    ?>

### highlight

Configures the appearance of highlighted points.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemHighlight|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemHighlight](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemHighlight)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $highlight = new \Kendo\Dataviz\UI\SparklineSeriesItemHighlight();
    $color = 'value';
    $highlight->color($color);
    $seriesItem->highlight($highlight);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $color = 'value';
    $seriesItem->highlight(array('color' => $color));
    ?>

### labels

Configures the series data labels.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemLabels|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemLabels](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemLabels)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $labels = new \Kendo\Dataviz\UI\SparklineSeriesItemLabels();
    $align = 'value';
    $labels->align($align);
    $seriesItem->labels($labels);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $align = 'value';
    $seriesItem->labels(array('align' => $align));
    ?>

### line

Line options.** Applicable to area series. **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string|\Kendo\Dataviz\UI\SparklineSeriesItemLine|array`




#### Example  - using string
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->line('value');
    ?>


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemLine](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemLine)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $line = new \Kendo\Dataviz\UI\SparklineSeriesItemLine();
    $color = 'value';
    $line->color($color);
    $seriesItem->line($line);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $color = 'value';
    $seriesItem->line(array('color' => $color));
    ?>

### markers

Marker options.** Applicable to area and line series **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemMarkers|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemMarkers](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemMarkers)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $markers = new \Kendo\Dataviz\UI\SparklineSeriesItemMarkers();
    $background = 'value';
    $markers->background($background);
    $seriesItem->markers($markers);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $background = 'value';
    $seriesItem->markers(array('background' => $background));
    ?>

### missingValues
The behavior for handling missing values. The supported values are:

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->missingValues('value');
    ?>

### name
The series name.The name can also be a template which sets the name of the series when bound to grouped data source.The fields which can be used in the template are:

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->name('value');
    ?>

### negativeColor
Color to use for bars with negative values.** Applicable only to bar and column series. **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->negativeColor('value');
    ?>

### notes

The series notes configuration.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemNotes|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemNotes](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemNotes)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $notes = new \Kendo\Dataviz\UI\SparklineSeriesItemNotes();
    $position = 'value';
    $notes->position($position);
    $seriesItem->notes($notes);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $position = 'value';
    $seriesItem->notes(array('position' => $position));
    ?>

### opacity
The series opacity.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->opacity(1);
    ?>

### overlay

The effects overlay.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemOverlay|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemOverlay](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemOverlay)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $overlay = new \Kendo\Dataviz\UI\SparklineSeriesItemOverlay();
    $gradient = 'value';
    $overlay->gradient($gradient);
    $seriesItem->overlay($overlay);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $gradient = 'value';
    $seriesItem->overlay(array('gradient' => $gradient));
    ?>

### padding
The padding around the chart (equal on all sides).** Available for pie series. **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->padding(1);
    ?>

### size
The size (or radius) of the series in pixels.
If not specified, the available space is split evenly between the series.Available for only.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->size(1);
    ?>

### spacing
Space between points as proportion of the point width.** Available for bar and column series. **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->spacing(1);
    ?>

### stack
A value indicating if the series should be stacked. String value indicates that the series should be stacked in a group with the specified name.
** Available for bar and column series. **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `boolean|string`



#### Example  - using boolean
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->stack(true);
    ?>

#### Example  - using string
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->stack('value');
    ?>

### startAngle
The start angle of the first segment.Available for pie series.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->startAngle(1);
    ?>

### target

The target of the bullet chart.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemTarget|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemTarget](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemTarget)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $target = new \Kendo\Dataviz\UI\SparklineSeriesItemTarget();
    $color = 'value';
    $target->color($color);
    $seriesItem->target($target);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $color = 'value';
    $seriesItem->target(array('color' => $color));
    ?>

### targetField
The data field containing the target value.** Available for bullet and verticalBullet series. **** Available for pie series **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->targetField('value');
    ?>

### tooltip

The data point tooltip configuration options.

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesItemTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesItemTooltip](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesItemTooltip)
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $tooltip = new \Kendo\Dataviz\UI\SparklineSeriesItemTooltip();
    $background = 'value';
    $tooltip->background($background);
    $seriesItem->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $background = 'value';
    $seriesItem->tooltip(array('background' => $background));
    ?>

### type
The type of the series. Available types:

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->type('value');
    ?>

### width
The line width.** Available for line series **

#### Returns
`\Kendo\Dataviz\UI\SparklineSeriesItem`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $seriesItem->width(1);
    ?>

