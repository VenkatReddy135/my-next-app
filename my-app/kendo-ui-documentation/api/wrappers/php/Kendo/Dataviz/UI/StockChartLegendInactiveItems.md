---
title: StockChartLegendInactiveItems
slug: php-dataviz-ui-stockchartlegendinactiveitems
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartLegendInactiveItems

A PHP class representing the inactiveItems setting of StockChartLegend.


## Methods

### labels

Configures the legend labels.

#### Returns
`\Kendo\Dataviz\UI\StockChartLegendInactiveItems`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartLegendInactiveItemsLabels|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartLegendInactiveItemsLabels](/api/wrappers/php/Kendo/Dataviz/UI/StockChartLegendInactiveItemsLabels)
    <?php
    $inactiveItems = new \Kendo\Dataviz\UI\StockChartLegendInactiveItems();
    $labels = new \Kendo\Dataviz\UI\StockChartLegendInactiveItemsLabels();
    $color = 'value';
    $labels->color($color);
    $inactiveItems->labels($labels);
    ?>

#### Example - using array

    <?php
    $inactiveItems = new \Kendo\Dataviz\UI\StockChartLegendInactiveItems();
    $color = 'value';
    $inactiveItems->labels(array('color' => $color));
    ?>

### markers

Configures the legend markers.

#### Returns
`\Kendo\Dataviz\UI\StockChartLegendInactiveItems`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartLegendInactiveItemsMarkers|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartLegendInactiveItemsMarkers](/api/wrappers/php/Kendo/Dataviz/UI/StockChartLegendInactiveItemsMarkers)
    <?php
    $inactiveItems = new \Kendo\Dataviz\UI\StockChartLegendInactiveItems();
    $markers = new \Kendo\Dataviz\UI\StockChartLegendInactiveItemsMarkers();
    $color = 'value';
    $markers->color($color);
    $inactiveItems->markers($markers);
    ?>

#### Example - using array

    <?php
    $inactiveItems = new \Kendo\Dataviz\UI\StockChartLegendInactiveItems();
    $color = 'value';
    $inactiveItems->markers(array('color' => $color));
    ?>

