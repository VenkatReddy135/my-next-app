---
title: ChartCategoryAxisItemSelect
slug: php-dataviz-ui-chartcategoryaxisitemselect
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItemSelect

A PHP class representing the select setting of ChartCategoryAxisItem.


## Methods

### from
The lower boundary of the selected range.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemSelect`

#### Parameters

##### $value ``



### max
The maximum value which the user can select.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemSelect`

#### Parameters

##### $value ``



### min
The minimum value which the user can select.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemSelect`

#### Parameters

##### $value ``



### mousewheel

The mouse wheel configuration of the selection.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemSelect`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemSelectMousewheel|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemSelectMousewheel](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemSelectMousewheel)
    <?php
    $select = new \Kendo\Dataviz\UI\ChartCategoryAxisItemSelect();
    $mousewheel = new \Kendo\Dataviz\UI\ChartCategoryAxisItemSelectMousewheel();
    $reverse = true;
    $mousewheel->reverse($reverse);
    $select->mousewheel($mousewheel);
    ?>

#### Example - using array

    <?php
    $select = new \Kendo\Dataviz\UI\ChartCategoryAxisItemSelect();
    $reverse = true;
    $select->mousewheel(array('reverse' => $reverse));
    ?>

### to
The upper boundary of the selected range.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemSelect`

#### Parameters

##### $value ``



