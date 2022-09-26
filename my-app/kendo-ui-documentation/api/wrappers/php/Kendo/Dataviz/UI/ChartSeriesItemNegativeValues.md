---
title: ChartSeriesItemNegativeValues
slug: php-dataviz-ui-chartseriesitemnegativevalues
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartSeriesItemNegativeValues

A PHP class representing the negativeValues setting of ChartSeriesItem.


## Methods

### color
The color of the chart negative bubble values.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemNegativeValues`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $negativeValues = new \Kendo\Dataviz\UI\ChartSeriesItemNegativeValues();
    $negativeValues->color('value');
    ?>

### visible
If set to true the chart will display the negative bubbles. By default the negative bubbles are not displayed.

#### Returns
`\Kendo\Dataviz\UI\ChartSeriesItemNegativeValues`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $negativeValues = new \Kendo\Dataviz\UI\ChartSeriesItemNegativeValues();
    $negativeValues->visible(true);
    ?>

