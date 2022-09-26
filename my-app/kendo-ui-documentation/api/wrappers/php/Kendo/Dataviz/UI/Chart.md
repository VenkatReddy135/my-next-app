---
title: Chart
slug: php-dataviz-ui-chart
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\Chart

A PHP wrapper for Kendo UI [Chart](/api/dataviz/chart).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use Chart in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo Chart

    <?php
    // Create a new instance of Chart and specify its id
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');

    // Configure it
    $chart->autoBind(true)

    // Output it

    echo $chart->render();
    ?>


## Methods

### autoBind
If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
data source is fired. By default the widget will bind to the data source specified in the configuration.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->autoBind(true);
    ?>

### axisDefaults
The default options for all chart axes. Accepts the options supported by categoryAxis, valueAxis, xAxis and yAxis.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value ``



### axisLabelClick
Fired when the user clicks an axis label.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [axisLabelClick](/api/web/chart#events-axisLabelClick) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->axisLabelClick('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onAxisLabelClick(e) {
            // handle the axisLabelClick event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->axisLabelClick('onAxisLabelClick');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->axisLabelClick(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### addCategoryAxisItem

Adds one or more ChartCategoryAxisItem to the Chart.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\ChartCategoryAxisItem|array`

#### Example - using \Kendo\Dataviz\UI\ChartCategoryAxisItem

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $categoryAxisItem = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $baseUnit = 'value';
    $categoryAxisItem->baseUnit($baseUnit);
    $chart->addCategoryAxisItem($categoryAxisItem);
    ?>

#### Example - using array

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $baseUnit = 'value';
    $chart->addCategoryAxisItem(array('baseUnit' => $baseUnit));
    ?>

#### Example - adding more than one ChartCategoryAxisItem

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $first  = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $second = new \Kendo\Dataviz\UI\ChartCategoryAxisItem();
    $chart->addCategoryAxisItem($first, $second);
    ?>

### chartArea

The chart area configuration options. Represents the entire visible area of the chart.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartArea|array`


#### Example - using [\Kendo\Dataviz\UI\ChartArea](/api/wrappers/php/Kendo/Dataviz/UI/ChartArea)
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chartArea = new \Kendo\Dataviz\UI\ChartArea();
    $background = 'value';
    $chartArea->background($background);
    $chart->chartArea($chartArea);
    ?>

#### Example - using array

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $background = 'value';
    $chart->chartArea(array('background' => $background));
    ?>

### dataBound
Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [dataBound](/api/web/chart#events-dataBound) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->dataBound('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDataBound(e) {
            // handle the dataBound event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->dataBound('onDataBound');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->dataBound(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataSource

Sets the data source of the dataSource.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `\Kendo\Data\DataSource|array`

#### Example - using [\Kendo\Data\DataSource](/api/wrappers/php/kendo/data/datasource)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $dataSource = new \Kendo\Data\DataSource();
    $chart->dataSource($dataSource);
    ?>

#### Example - using array

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $schema = new \Kendo\Data\DataSourceSchema();
    $chart->dataSource(array('schema' => $schema));
    ?>

### drag
Fired as long as the user is dragging the chart using the mouse or swipe gestures.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [drag](/api/web/chart#events-drag) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->drag('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDrag(e) {
            // handle the drag event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->drag('onDrag');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->drag(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dragEnd
Fired when the user stops dragging the chart.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [dragEnd](/api/web/chart#events-dragEnd) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->dragEnd('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDragEnd(e) {
            // handle the dragEnd event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->dragEnd('onDragEnd');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->dragEnd(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dragStart
Fired when the user starts dragging the chart.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [dragStart](/api/web/chart#events-dragStart) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->dragStart('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDragStart(e) {
            // handle the dragStart event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->dragStart('onDragStart');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->dragStart(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### legend

The chart legend configuration options.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartLegend|array`


#### Example - using [\Kendo\Dataviz\UI\ChartLegend](/api/wrappers/php/Kendo/Dataviz/UI/ChartLegend)
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $legend = new \Kendo\Dataviz\UI\ChartLegend();
    $background = 'value';
    $legend->background($background);
    $chart->legend($legend);
    ?>

#### Example - using array

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $background = 'value';
    $chart->legend(array('background' => $background));
    ?>

### legendItemClick
Fires when an legend item is clicked.
For additional information check the [legendItemClick](/api/web/chart#events-legendItemClick) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->legendItemClick('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onLegendItemClick(e) {
            // handle the legendItemClick event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->legendItemClick('onLegendItemClick');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->legendItemClick(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### legendItemHover
Fires when an legend item is hovered.
For additional information check the [legendItemHover](/api/web/chart#events-legendItemHover) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->legendItemHover('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onLegendItemHover(e) {
            // handle the legendItemHover event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->legendItemHover('onLegendItemHover');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->legendItemHover(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### addPane

Adds one or more ChartPane to the Chart.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\ChartPane|array`

#### Example - using \Kendo\Dataviz\UI\ChartPane

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $pane = new \Kendo\Dataviz\UI\ChartPane();
    $background = 'value';
    $pane->background($background);
    $chart->addPane($pane);
    ?>

#### Example - using array

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $background = 'value';
    $chart->addPane(array('background' => $background));
    ?>

#### Example - adding more than one ChartPane

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $first  = new \Kendo\Dataviz\UI\ChartPane();
    $second = new \Kendo\Dataviz\UI\ChartPane();
    $chart->addPane($first, $second);
    ?>

### plotArea

The plot area configuration options. The plot area is the area which displays the series.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartPlotArea|array`


#### Example - using [\Kendo\Dataviz\UI\ChartPlotArea](/api/wrappers/php/Kendo/Dataviz/UI/ChartPlotArea)
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $plotArea = new \Kendo\Dataviz\UI\ChartPlotArea();
    $background = 'value';
    $plotArea->background($background);
    $chart->plotArea($plotArea);
    ?>

#### Example - using array

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $background = 'value';
    $chart->plotArea(array('background' => $background));
    ?>

### plotAreaClick
Fired when the user clicks the plot area.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [plotAreaClick](/api/web/chart#events-plotAreaClick) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->plotAreaClick('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onPlotAreaClick(e) {
            // handle the plotAreaClick event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->plotAreaClick('onPlotAreaClick');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->plotAreaClick(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### renderAs
Sets the preferred rendering engine.
If it is not supported by the browser, the Chart will switch to the first available mode.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->renderAs('value');
    ?>

### select
Fired when the user modifies the selection.The range units are:The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [select](/api/web/chart#events-select) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->select('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelect(e) {
            // handle the select event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->select('onSelect');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->select(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### selectEnd
Fired when the user completes modifying the selection.The range units are:The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [selectEnd](/api/web/chart#events-selectEnd) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->selectEnd('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelectEnd(e) {
            // handle the selectEnd event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->selectEnd('onSelectEnd');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->selectEnd(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### selectStart
Fired when the user starts modifying the axis selection.The range units are:The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [selectStart](/api/web/chart#events-selectStart) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->selectStart('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelectStart(e) {
            // handle the selectStart event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->selectStart('onSelectStart');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->selectStart(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### addSeriesItem

Adds one or more ChartSeriesItem to the Chart.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\ChartSeriesItem|array`

#### Example - using \Kendo\Dataviz\UI\ChartSeriesItem

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $seriesItem = new \Kendo\Dataviz\UI\ChartSeriesItem();
    $aggregate = 'value';
    $seriesItem->aggregate($aggregate);
    $chart->addSeriesItem($seriesItem);
    ?>

#### Example - using array

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $aggregate = 'value';
    $chart->addSeriesItem(array('aggregate' => $aggregate));
    ?>

#### Example - adding more than one ChartSeriesItem

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $first  = new \Kendo\Dataviz\UI\ChartSeriesItem();
    $second = new \Kendo\Dataviz\UI\ChartSeriesItem();
    $chart->addSeriesItem($first, $second);
    ?>

### seriesClick
Fired when the user clicks the chart series.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [seriesClick](/api/web/chart#events-seriesClick) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->seriesClick('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSeriesClick(e) {
            // handle the seriesClick event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->seriesClick('onSeriesClick');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->seriesClick(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### seriesColors
The default colors for the chart's series. When all colors are used, new colors are pulled from the start again.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->seriesColors(new array());
    ?>

### seriesDefaults

The default options for all series.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartSeriesDefaults|array`


#### Example - using [\Kendo\Dataviz\UI\ChartSeriesDefaults](/api/wrappers/php/Kendo/Dataviz/UI/ChartSeriesDefaults)
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $seriesDefaults = new \Kendo\Dataviz\UI\ChartSeriesDefaults();
    $gap = 1;
    $seriesDefaults->gap($gap);
    $chart->seriesDefaults($seriesDefaults);
    ?>

#### Example - using array

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $gap = 1;
    $chart->seriesDefaults(array('gap' => $gap));
    ?>

### seriesHover
Fired when the user hovers the chart series.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [seriesHover](/api/web/chart#events-seriesHover) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->seriesHover('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSeriesHover(e) {
            // handle the seriesHover event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->seriesHover('onSeriesHover');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->seriesHover(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### theme
The chart theme.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->theme('value');
    ?>

### title

The chart title configuration options or text.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\Dataviz\UI\ChartTitle|array`




#### Example  - using string
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->title('value');
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartTitle](/api/wrappers/php/Kendo/Dataviz/UI/ChartTitle)
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $title = new \Kendo\Dataviz\UI\ChartTitle();
    $align = 'value';
    $title->align($align);
    $chart->title($title);
    ?>

#### Example - using array

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $align = 'value';
    $chart->title(array('align' => $align));
    ?>

### tooltip

The chart series tooltip configuration options.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\ChartTooltip](/api/wrappers/php/Kendo/Dataviz/UI/ChartTooltip)
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $tooltip = new \Kendo\Dataviz\UI\ChartTooltip();
    $background = 'value';
    $tooltip->background($background);
    $chart->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $background = 'value';
    $chart->tooltip(array('background' => $background));
    ?>

### transitions
If set to true the chart will play animations when displaying the series. By default animations are enabled.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->transitions(true);
    ?>

### addValueAxisItem

Adds one or more ChartValueAxisItem to the Chart.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\ChartValueAxisItem|array`

#### Example - using \Kendo\Dataviz\UI\ChartValueAxisItem

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $valueAxisItem = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $color = 'value';
    $valueAxisItem->color($color);
    $chart->addValueAxisItem($valueAxisItem);
    ?>

#### Example - using array

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $color = 'value';
    $chart->addValueAxisItem(array('color' => $color));
    ?>

#### Example - adding more than one ChartValueAxisItem

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $first  = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $second = new \Kendo\Dataviz\UI\ChartValueAxisItem();
    $chart->addValueAxisItem($first, $second);
    ?>

### addXAxisItem

Adds one or more ChartXAxisItem to the Chart.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\ChartXAxisItem|array`

#### Example - using \Kendo\Dataviz\UI\ChartXAxisItem

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $xAxisItem = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $baseUnit = 'value';
    $xAxisItem->baseUnit($baseUnit);
    $chart->addXAxisItem($xAxisItem);
    ?>

#### Example - using array

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $baseUnit = 'value';
    $chart->addXAxisItem(array('baseUnit' => $baseUnit));
    ?>

#### Example - adding more than one ChartXAxisItem

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $first  = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $second = new \Kendo\Dataviz\UI\ChartXAxisItem();
    $chart->addXAxisItem($first, $second);
    ?>

### addYAxisItem

Adds one or more ChartYAxisItem to the Chart.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\ChartYAxisItem|array`

#### Example - using \Kendo\Dataviz\UI\ChartYAxisItem

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $yAxisItem = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $baseUnit = 'value';
    $yAxisItem->baseUnit($baseUnit);
    $chart->addYAxisItem($yAxisItem);
    ?>

#### Example - using array

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $baseUnit = 'value';
    $chart->addYAxisItem(array('baseUnit' => $baseUnit));
    ?>

#### Example - adding more than one ChartYAxisItem

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $first  = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $second = new \Kendo\Dataviz\UI\ChartYAxisItem();
    $chart->addYAxisItem($first, $second);
    ?>

### zoom
Fired as long as the user is zooming the chart using the mousewheel.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [zoom](/api/web/chart#events-zoom) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->zoom('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onZoom(e) {
            // handle the zoom event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->zoom('onZoom');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->zoom(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### zoomEnd
Fired when the user stops zooming the chart.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [zoomEnd](/api/web/chart#events-zoomEnd) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->zoomEnd('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onZoomEnd(e) {
            // handle the zoomEnd event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->zoomEnd('onZoomEnd');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->zoomEnd(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### zoomStart
Fired when the user uses the mousewheel to zoom the chart.The event handler function context (available via the this keyword) will be set to the widget instance.
For additional information check the [zoomStart](/api/web/chart#events-zoomStart) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Chart`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->zoomStart('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onZoomStart(e) {
            // handle the zoomStart event.
        }
    </script>
    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->zoomStart('onZoomStart');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $chart = new \Kendo\Dataviz\UI\Chart('Chart');
    $chart->zoomStart(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

