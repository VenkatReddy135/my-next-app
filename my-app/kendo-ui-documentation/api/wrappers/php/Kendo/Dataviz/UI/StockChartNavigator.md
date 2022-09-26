---
title: StockChartNavigator
slug: php-dataviz-ui-stockchartnavigator
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChartNavigator

A PHP class representing the navigator setting of StockChart.


## Methods

### autoBind
Indicates whether the navigator will call read on the data source initially.
Applicable only when using a dedicated navigator data source.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigator`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $navigator->autoBind(true);
    ?>

### addCategoryAxisItem

Adds one or more StockChartNavigatorCategoryAxisItem to the StockChartNavigator.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigator`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem|array`

#### Example - using \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem

    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $baseUnit = 'value';
    $categoryAxisItem->baseUnit($baseUnit);
    $navigator->addCategoryAxisItem($categoryAxisItem);
    ?>

#### Example - using array

    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $baseUnit = 'value';
    $navigator->addCategoryAxisItem(array('baseUnit' => $baseUnit));
    ?>

#### Example - adding more than one StockChartNavigatorCategoryAxisItem

    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $first  = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $second = new \Kendo\Dataviz\UI\StockChartNavigatorCategoryAxisItem();
    $navigator->addCategoryAxisItem($first, $second);
    ?>

### dataSource

Sets the data source of the dataSource.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigator`

#### Parameters

##### $value `\Kendo\Data\DataSource|array`

#### Example - using [\Kendo\Data\DataSource](/api/wrappers/php/kendo/data/datasource)

    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $dataSource = new \Kendo\Data\DataSource();
    $navigator->dataSource($dataSource);
    ?>

#### Example - using array

    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $schema = new \Kendo\Data\DataSourceSchema();
    $navigator->dataSource(array('schema' => $schema));
    ?>

### dateField
The field containing the point date.
It is used as a default field for the navigator axis.The data item field value must be either:

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigator`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $navigator->dateField('value');
    ?>

### hint

Default options for the navigator hint.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigator`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorHint|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorHint](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorHint)
    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $hint = new \Kendo\Dataviz\UI\StockChartNavigatorHint();
    $format = 'value';
    $hint->format($format);
    $navigator->hint($hint);
    ?>

#### Example - using array

    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $format = 'value';
    $navigator->hint(array('format' => $format));
    ?>

### pane

The navigator pane configuration.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigator`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorPane|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorPane](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorPane)
    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $pane = new \Kendo\Dataviz\UI\StockChartNavigatorPane();
    $background = 'value';
    $pane->background($background);
    $navigator->pane($pane);
    ?>

#### Example - using array

    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $background = 'value';
    $navigator->pane(array('background' => $background));
    ?>

### select

Specifies the initially selected range.The full range of values is shown if no range is specified.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigator`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigatorSelect|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigatorSelect](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigatorSelect)
    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $select = new \Kendo\Dataviz\UI\StockChartNavigatorSelect();
    $from = new date();
    $select->from($from);
    $navigator->select($select);
    ?>

#### Example - using array

    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $from = new date();
    $navigator->select(array('from' => $from));
    ?>

### addSeriesItem

Adds one or more StockChartNavigatorSeriesItem to the StockChartNavigator.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigator`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\StockChartNavigatorSeriesItem|array`

#### Example - using \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem

    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $seriesItem = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $aggregate = 'value';
    $seriesItem->aggregate($aggregate);
    $navigator->addSeriesItem($seriesItem);
    ?>

#### Example - using array

    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $aggregate = 'value';
    $navigator->addSeriesItem(array('aggregate' => $aggregate));
    ?>

#### Example - adding more than one StockChartNavigatorSeriesItem

    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $first  = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $second = new \Kendo\Dataviz\UI\StockChartNavigatorSeriesItem();
    $navigator->addSeriesItem($first, $second);
    ?>

### visible
The visibility of the navigator.

#### Returns
`\Kendo\Dataviz\UI\StockChartNavigator`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $navigator->visible(true);
    ?>

