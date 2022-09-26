---
title: StockChartNavigatorHint
slug: php-dataviz-ui-stockchartnavigatorhint
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigatorHint

A PHP class representing the hint setting of StockChartNavigator.


## Methods

### format
The format of the hint.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorHint`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $hint = new \Kendo\Dataviz\UI\StockChartNavigatorHint();
    $hint->format('value');
    ?>

### template
The hint template.
Template variables:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorHint`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $hint = new \Kendo\Dataviz\UI\StockChartNavigatorHint();
    $hint->template('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $hint = new \Kendo\Dataviz\UI\StockChartNavigatorHint();
    $hint->template(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

### visible
The visibility of the hint.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigatorHint`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $hint = new \Kendo\Dataviz\UI\StockChartNavigatorHint();
    $hint->visible(true);
    ?>

