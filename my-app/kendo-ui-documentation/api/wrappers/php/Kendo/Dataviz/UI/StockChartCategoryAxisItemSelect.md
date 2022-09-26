---
title: StockChartCategoryAxisItemSelect
slug: php-dataviz-ui-stockchartcategoryaxisitemselect
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartCategoryAxisItemSelect

A PHP class representing the select setting of StockChartCategoryAxisItem.


## Methods

### from
The lower boundary of the selected range.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemSelect`

#### Parameters

##### $value ``



### max
The maximum value that is selectable by the user.Note: The category with the specified index (date) is not included in the selected range
unless the axis is justified. In order to select all categories specify
a value larger than the last category index (date).

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemSelect`

#### Parameters

##### $value ``



### min
The minimum value that is selectable by the user.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemSelect`

#### Parameters

##### $value ``



### mousewheel

Mousewheel zoom settings for the selection.

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemSelect`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartCategoryAxisItemSelectMousewheel|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartCategoryAxisItemSelectMousewheel](/api/wrappers/php/Kendo/Dataviz/UI/StockChartCategoryAxisItemSelectMousewheel)
    <?php
    $select = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemSelect();
    $mousewheel = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemSelectMousewheel();
    $reverse = true;
    $mousewheel->reverse($reverse);
    $select->mousewheel($mousewheel);
    ?>

#### Example - using array

    <?php
    $select = new \Kendo\Dataviz\UI\StockChartCategoryAxisItemSelect();
    $reverse = true;
    $select->mousewheel(array('reverse' => $reverse));
    ?>

### to
The upper boundary of the selected range.Note: The category with the specified index (date) is not included in the selected range
unless the axis is justified. In order to select all categories specify
a value larger than the last category index (date).

#### Returns
`\Kendo\Dataviz\UI\StockChartCategoryAxisItemSelect`

#### Parameters

##### $value ``



