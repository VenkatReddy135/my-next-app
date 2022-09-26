---
title: StockChart
slug: php-dataviz-ui-stockchart
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\StockChart

A PHP wrapper for Kendo UI [StockChart](/api/dataviz/stockchart).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use StockChart in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo StockChart

    <?php
    // Create a new instance of StockChart and specify its id
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');

    // Configure it
    $stockChart->autoBind(true)

    // Output it

    echo $stockChart->render();
    ?>


## Methods

### autoBind
Indicates whether the chart will call read on the data source initially.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->autoBind(true);
    ?>

### axisDefaults
Default options for all chart axes.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value ``



### axisLabelClick
Fires when an axis label is clicked.
For additional information check the [axisLabelClick](/api/web/stockchart#events-axisLabelClick) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->axisLabelClick('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onAxisLabelClick(e) {
            // handle the axisLabelClick event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->axisLabelClick('onAxisLabelClick');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->axisLabelClick(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### addCategoryAxisItem

Adds one or more StockChartCategoryAxisItem to the StockChart.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\StockChartCategoryAxisItem|array`

#### Example - using \Kendo\Dataviz\UI\StockChartCategoryAxisItem

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $categoryAxisItem = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $baseUnit = 'value';
    $categoryAxisItem->baseUnit($baseUnit);
    $stockChart->addCategoryAxisItem($categoryAxisItem);
    ?>

#### Example - using array

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $baseUnit = 'value';
    $stockChart->addCategoryAxisItem(array('baseUnit' => $baseUnit));
    ?>

#### Example - adding more than one StockChartCategoryAxisItem

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $first  = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $second = new \Kendo\Dataviz\UI\StockChartCategoryAxisItem();
    $stockChart->addCategoryAxisItem($first, $second);
    ?>

### chartArea

The chart area configuration options.
This is the entire visible area of the chart.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartChartArea|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartChartArea](/api/wrappers/php/Kendo/Dataviz/UI/StockChartChartArea)
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $chartArea = new \Kendo\Dataviz\UI\StockChartChartArea();
    $background = 'value';
    $chartArea->background($background);
    $stockChart->chartArea($chartArea);
    ?>

#### Example - using array

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $background = 'value';
    $stockChart->chartArea(array('background' => $background));
    ?>

### dataBound
Fires when the chart has received data from the data source
and is about to render it.
For additional information check the [dataBound](/api/web/stockchart#events-dataBound) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->dataBound('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDataBound(e) {
            // handle the dataBound event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->dataBound('onDataBound');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->dataBound(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataSource

Sets the data source of the dataSource.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `\Kendo\Data\DataSource|array`

#### Example - using [\Kendo\Data\DataSource](/api/wrappers/php/kendo/data/datasource)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $dataSource = new \Kendo\Data\DataSource();
    $stockChart->dataSource($dataSource);
    ?>

#### Example - using array

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $schema = new \Kendo\Data\DataSourceSchema();
    $stockChart->dataSource(array('schema' => $schema));
    ?>

### dateField
The field containing the point date.
It is used as a default categoryField for all series.The data item field value must be either:

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->dateField('value');
    ?>

### drag
Fires as long as the user is dragging the chart using the mouse or swipe gestures.
For additional information check the [drag](/api/web/stockchart#events-drag) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->drag('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDrag(e) {
            // handle the drag event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->drag('onDrag');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->drag(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dragEnd
Fires when the user stops dragging the chart.
For additional information check the [dragEnd](/api/web/stockchart#events-dragEnd) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->dragEnd('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDragEnd(e) {
            // handle the dragEnd event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->dragEnd('onDragEnd');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->dragEnd(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dragStart
Fires when the user has used the mouse or a swipe gesture to drag the chart.The drag operation can be aborted by calling e.preventDefault().
For additional information check the [dragStart](/api/web/stockchart#events-dragStart) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->dragStart('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDragStart(e) {
            // handle the dragStart event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->dragStart('onDragStart');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->dragStart(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### legend

The chart legend configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartLegend|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartLegend](/api/wrappers/php/Kendo/Dataviz/UI/StockChartLegend)
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $legend = new \Kendo\Dataviz\UI\StockChartLegend();
    $background = 'value';
    $legend->background($background);
    $stockChart->legend($legend);
    ?>

#### Example - using array

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $background = 'value';
    $stockChart->legend(array('background' => $background));
    ?>

### legendItemClick
Fires when an legend item is clicked.
For additional information check the [legendItemClick](/api/web/stockchart#events-legendItemClick) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->legendItemClick('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onLegendItemClick(e) {
            // handle the legendItemClick event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->legendItemClick('onLegendItemClick');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->legendItemClick(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### legendItemHover
Fires when an legend item is hovered.
For additional information check the [legendItemHover](/api/web/stockchart#events-legendItemHover) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->legendItemHover('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onLegendItemHover(e) {
            // handle the legendItemHover event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->legendItemHover('onLegendItemHover');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->legendItemHover(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### navigator

The data navigator configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartNavigator|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartNavigator](/api/wrappers/php/Kendo/Dataviz/UI/StockChartNavigator)
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $navigator = new \Kendo\Dataviz\UI\StockChartNavigator();
    $autoBind = true;
    $navigator->autoBind($autoBind);
    $stockChart->navigator($navigator);
    ?>

#### Example - using array

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $autoBind = true;
    $stockChart->navigator(array('autoBind' => $autoBind));
    ?>

### addPane

Adds one or more StockChartPane to the StockChart.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\StockChartPane|array`

#### Example - using \Kendo\Dataviz\UI\StockChartPane

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $pane = new \Kendo\Dataviz\UI\StockChartPane();
    $background = 'value';
    $pane->background($background);
    $stockChart->addPane($pane);
    ?>

#### Example - using array

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $background = 'value';
    $stockChart->addPane(array('background' => $background));
    ?>

#### Example - adding more than one StockChartPane

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $first  = new \Kendo\Dataviz\UI\StockChartPane();
    $second = new \Kendo\Dataviz\UI\StockChartPane();
    $stockChart->addPane($first, $second);
    ?>

### plotArea

The plot area configuration options. This is the area containing the plotted series.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartPlotArea|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartPlotArea](/api/wrappers/php/Kendo/Dataviz/UI/StockChartPlotArea)
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $plotArea = new \Kendo\Dataviz\UI\StockChartPlotArea();
    $background = 'value';
    $plotArea->background($background);
    $stockChart->plotArea($plotArea);
    ?>

#### Example - using array

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $background = 'value';
    $stockChart->plotArea(array('background' => $background));
    ?>

### plotAreaClick
Fires when plot area is clicked.
For additional information check the [plotAreaClick](/api/web/stockchart#events-plotAreaClick) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->plotAreaClick('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onPlotAreaClick(e) {
            // handle the plotAreaClick event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->plotAreaClick('onPlotAreaClick');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->plotAreaClick(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### renderAs
Sets the preferred rendering engine.
If it is not supported by the browser, the Chart will switch to the first available mode.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->renderAs('value');
    ?>

### select
Fires when the user modifies the selection.The range units are:
For additional information check the [select](/api/web/stockchart#events-select) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->select('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelect(e) {
            // handle the select event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->select('onSelect');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->select(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### selectEnd
Fires when the user completes modifying the selection.
For additional information check the [selectEnd](/api/web/stockchart#events-selectEnd) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->selectEnd('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelectEnd(e) {
            // handle the selectEnd event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->selectEnd('onSelectEnd');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->selectEnd(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### selectStart
Fires when the user starts modifying the axis selection.The range units are:
For additional information check the [selectStart](/api/web/stockchart#events-selectStart) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->selectStart('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelectStart(e) {
            // handle the selectStart event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->selectStart('onSelectStart');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->selectStart(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### addSeriesItem

Adds one or more StockChartSeriesItem to the StockChart.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\StockChartSeriesItem|array`

#### Example - using \Kendo\Dataviz\UI\StockChartSeriesItem

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $seriesItem = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $aggregate = 'value';
    $seriesItem->aggregate($aggregate);
    $stockChart->addSeriesItem($seriesItem);
    ?>

#### Example - using array

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $aggregate = 'value';
    $stockChart->addSeriesItem(array('aggregate' => $aggregate));
    ?>

#### Example - adding more than one StockChartSeriesItem

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $first  = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $second = new \Kendo\Dataviz\UI\StockChartSeriesItem();
    $stockChart->addSeriesItem($first, $second);
    ?>

### seriesClick
Fires when chart series are clicked.
For additional information check the [seriesClick](/api/web/stockchart#events-seriesClick) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->seriesClick('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSeriesClick(e) {
            // handle the seriesClick event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->seriesClick('onSeriesClick');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->seriesClick(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### seriesColors
The default colors for the chart's series. When all colors are used, new colors are pulled from the start again.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->seriesColors(new array());
    ?>

### seriesDefaults

Default values for each series.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartSeriesDefaults|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartSeriesDefaults](/api/wrappers/php/Kendo/Dataviz/UI/StockChartSeriesDefaults)
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $seriesDefaults = new \Kendo\Dataviz\UI\StockChartSeriesDefaults();
    $gap = 1;
    $seriesDefaults->gap($gap);
    $stockChart->seriesDefaults($seriesDefaults);
    ?>

#### Example - using array

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $gap = 1;
    $stockChart->seriesDefaults(array('gap' => $gap));
    ?>

### seriesHover
Fires when chart series are hovered.
For additional information check the [seriesHover](/api/web/stockchart#events-seriesHover) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->seriesHover('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSeriesHover(e) {
            // handle the seriesHover event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->seriesHover('onSeriesHover');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->seriesHover(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### theme
Sets Chart theme. Available themes: default, blueOpal, black.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->theme('value');
    ?>

### title

The chart title configuration options or text.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartTitle|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartTitle](/api/wrappers/php/Kendo/Dataviz/UI/StockChartTitle)
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $title = new \Kendo\Dataviz\UI\StockChartTitle();
    $align = 'value';
    $title->align($align);
    $stockChart->title($title);
    ?>

#### Example - using array

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $align = 'value';
    $stockChart->title(array('align' => $align));
    ?>

### tooltip

The data point tooltip configuration options.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `\Kendo\Dataviz\UI\StockChartTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\StockChartTooltip](/api/wrappers/php/Kendo/Dataviz/UI/StockChartTooltip)
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $tooltip = new \Kendo\Dataviz\UI\StockChartTooltip();
    $background = 'value';
    $tooltip->background($background);
    $stockChart->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $background = 'value';
    $stockChart->tooltip(array('background' => $background));
    ?>

### transitions
A value indicating if transition animations should be played.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->transitions(true);
    ?>

### addValueAxisItem

Adds one or more StockChartValueAxisItem to the StockChart.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\StockChartValueAxisItem|array`

#### Example - using \Kendo\Dataviz\UI\StockChartValueAxisItem

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $valueAxisItem = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $color = 'value';
    $valueAxisItem->color($color);
    $stockChart->addValueAxisItem($valueAxisItem);
    ?>

#### Example - using array

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $color = 'value';
    $stockChart->addValueAxisItem(array('color' => $color));
    ?>

#### Example - adding more than one StockChartValueAxisItem

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $first  = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $second = new \Kendo\Dataviz\UI\StockChartValueAxisItem();
    $stockChart->addValueAxisItem($first, $second);
    ?>

### zoom
Fires as long as the user is zooming the chart using the mousewheel.
For additional information check the [zoom](/api/web/stockchart#events-zoom) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->zoom('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onZoom(e) {
            // handle the zoom event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->zoom('onZoom');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->zoom(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### zoomEnd
Fires when the user stops zooming the chart.
For additional information check the [zoomEnd](/api/web/stockchart#events-zoomEnd) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->zoomEnd('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onZoomEnd(e) {
            // handle the zoomEnd event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->zoomEnd('onZoomEnd');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->zoomEnd(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### zoomStart
Fires when the user has used the mousewheel to zoom the chart.The zoom operation can be aborted by calling e.preventDefault().
For additional information check the [zoomStart](/api/web/stockchart#events-zoomStart) event documentation.

#### Returns
`\Kendo\Dataviz\UI\StockChart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->zoomStart('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onZoomStart(e) {
            // handle the zoomStart event.
        }
    </script>
    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->zoomStart('onZoomStart');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $stockChart = new \Kendo\Dataviz\UI\StockChart('StockChart');
    $stockChart->zoomStart(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

