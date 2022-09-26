---
title: StockChartNavigatorSelect
slug: php-dataviz-ui-stockchartnavigatorselect
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorSelect

A PHP class representing the select setting of StockChartNavigator.


## Methods

### from
The lower boundary of the selected range.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSelect`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $select = new \Kendo\Dataviz\UI\StockChartNavigatorSelect();
    $select->from(new date());
    ?>

### to
The upper boundary of the selected range.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorSelect`

#### Parameters

##### $value `date`



#### Example 
    <?php
    $select = new \Kendo\Dataviz\UI\StockChartNavigatorSelect();
    $select->to(new date());
    ?>

