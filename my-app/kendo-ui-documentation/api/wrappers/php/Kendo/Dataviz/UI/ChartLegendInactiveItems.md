---
title: ChartLegendInactiveItems
slug: php-dataviz-ui-chartlegendinactiveitems
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartLegendInactiveItems

A PHP class representing the inactiveItems setting of ChartLegend.


## Methods

### labels

The chart legend label configuration.

#### Returns
`\Kendo\Dataviz\UI\ChartLegendInactiveItems`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartLegendInactiveItemsLabels|array`


#### Example - using [\Kendo\Dataviz\UI\ChartLegendInactiveItemsLabels](/api/wrappers/php/Kendo/Dataviz/UI/ChartLegendInactiveItemsLabels)
    <?php
    $inactiveItems = new \Kendo\Dataviz\UI\ChartLegendInactiveItems();
    $labels = new \Kendo\Dataviz\UI\ChartLegendInactiveItemsLabels();
    $color = 'value';
    $labels->color($color);
    $inactiveItems->labels($labels);
    ?>

#### Example - using array

    <?php
    $inactiveItems = new \Kendo\Dataviz\UI\ChartLegendInactiveItems();
    $color = 'value';
    $inactiveItems->labels(array('color' => $color));
    ?>

