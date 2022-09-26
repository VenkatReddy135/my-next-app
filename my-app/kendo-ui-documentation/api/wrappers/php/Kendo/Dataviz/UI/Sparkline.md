---
title: Sparkline
slug: php-dataviz-ui-sparkline
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\Sparkline

A PHP wrapper for Kendo UI [Sparkline](/api/dataviz/sparkline).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use Sparkline in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo Sparkline

    <?php
    // Create a new instance of Sparkline and specify its id
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');

    // Configure it
    $sparkline->autoBind(true)

    // Output it

    echo $sparkline->render();
    ?>


## Methods

### autoBind
Indicates whether the chart will call read on the data source initially.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->autoBind(true);
    ?>

### axisDefaults
Default options for all chart axes.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value ``



### axisLabelClick
Fires when an axis label is clicked.
For additional information check the [axisLabelClick](/api/web/sparkline#events-axisLabelClick) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->axisLabelClick('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onAxisLabelClick(e) {
            // handle the axisLabelClick event.
        }
    </script>
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->axisLabelClick('onAxisLabelClick');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->axisLabelClick(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### addCategoryAxisItem

Adds one or more SparklineCategoryAxisItem to the Sparkline.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\SparklineCategoryAxisItem|array`

#### Example - using \Kendo\Dataviz\UI\SparklineCategoryAxisItem

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $categoryAxisItem = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $baseUnit = 'value';
    $categoryAxisItem->baseUnit($baseUnit);
    $sparkline->addCategoryAxisItem($categoryAxisItem);
    ?>

#### Example - using array

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $baseUnit = 'value';
    $sparkline->addCategoryAxisItem(array('baseUnit' => $baseUnit));
    ?>

#### Example - adding more than one SparklineCategoryAxisItem

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $first  = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $second = new \Kendo\Dataviz\UI\SparklineCategoryAxisItem();
    $sparkline->addCategoryAxisItem($first, $second);
    ?>

### chartArea

The chart area configuration options.
This is the entire visible area of the chart.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineChartArea|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineChartArea](/api/wrappers/php/Kendo/Dataviz/UI/SparklineChartArea)
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $chartArea = new \Kendo\Dataviz\UI\SparklineChartArea();
    $background = 'value';
    $chartArea->background($background);
    $sparkline->chartArea($chartArea);
    ?>

#### Example - using array

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $background = 'value';
    $sparkline->chartArea(array('background' => $background));
    ?>

### data
The data for the default sparkline series.Will be discareded if series are supplied.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->data(new array());
    ?>

### dataBound
Fires when the sparkline has received data from the data source
and is about to render it.
For additional information check the [dataBound](/api/web/sparkline#events-dataBound) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->dataBound('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDataBound(e) {
            // handle the dataBound event.
        }
    </script>
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->dataBound('onDataBound');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->dataBound(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataSource

Sets the data source of the dataSource.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `\Kendo\Data\DataSource|array`

#### Example - using [\Kendo\Data\DataSource](/api/wrappers/php/kendo/data/datasource)

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $dataSource = new \Kendo\Data\DataSource();
    $sparkline->dataSource($dataSource);
    ?>

#### Example - using array

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $schema = new \Kendo\Data\DataSourceSchema();
    $sparkline->dataSource(array('schema' => $schema));
    ?>

### drag
Fires as long as the user is dragging the sparkline using the mouse or swipe gestures.
For additional information check the [drag](/api/web/sparkline#events-drag) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->drag('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDrag(e) {
            // handle the drag event.
        }
    </script>
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->drag('onDrag');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->drag(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dragEnd
Fires when the user stops dragging the sparkline.
For additional information check the [dragEnd](/api/web/sparkline#events-dragEnd) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->dragEnd('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDragEnd(e) {
            // handle the dragEnd event.
        }
    </script>
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->dragEnd('onDragEnd');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->dragEnd(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dragStart
Fires when the user has used the mouse or a swipe gesture to drag the sparkline.The drag operation can be aborted by calling e.preventDefault().
For additional information check the [dragStart](/api/web/sparkline#events-dragStart) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->dragStart('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDragStart(e) {
            // handle the dragStart event.
        }
    </script>
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->dragStart('onDragStart');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->dragStart(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### plotArea

The plot area configuration options. This is the area containing the plotted series.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklinePlotArea|array`


#### Example - using [\Kendo\Dataviz\UI\SparklinePlotArea](/api/wrappers/php/Kendo/Dataviz/UI/SparklinePlotArea)
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $plotArea = new \Kendo\Dataviz\UI\SparklinePlotArea();
    $background = 'value';
    $plotArea->background($background);
    $sparkline->plotArea($plotArea);
    ?>

#### Example - using array

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $background = 'value';
    $sparkline->plotArea(array('background' => $background));
    ?>

### plotAreaClick
Fires when plot area is clicked.
For additional information check the [plotAreaClick](/api/web/sparkline#events-plotAreaClick) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->plotAreaClick('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onPlotAreaClick(e) {
            // handle the plotAreaClick event.
        }
    </script>
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->plotAreaClick('onPlotAreaClick');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->plotAreaClick(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### pointWidth
The width to allocate for each data point.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->pointWidth(1);
    ?>

### renderAs
Sets the preferred rendering engine.
If it is not supported by the browser, the Sparkline will switch to the first available mode.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->renderAs('value');
    ?>

### addSeriesItem

Adds one or more SparklineSeriesItem to the Sparkline.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\SparklineSeriesItem|array`

#### Example - using \Kendo\Dataviz\UI\SparklineSeriesItem

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $seriesItem = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $aggregate = 'value';
    $seriesItem->aggregate($aggregate);
    $sparkline->addSeriesItem($seriesItem);
    ?>

#### Example - using array

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $aggregate = 'value';
    $sparkline->addSeriesItem(array('aggregate' => $aggregate));
    ?>

#### Example - adding more than one SparklineSeriesItem

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $first  = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $second = new \Kendo\Dataviz\UI\SparklineSeriesItem();
    $sparkline->addSeriesItem($first, $second);
    ?>

### seriesClick
Fires when chart series are clicked.
For additional information check the [seriesClick](/api/web/sparkline#events-seriesClick) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->seriesClick('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSeriesClick(e) {
            // handle the seriesClick event.
        }
    </script>
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->seriesClick('onSeriesClick');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->seriesClick(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### seriesColors
The default colors for the chart's series. When all colors are used, new colors are pulled from the start again.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->seriesColors(new array());
    ?>

### seriesDefaults

Default values for each series.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineSeriesDefaults|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineSeriesDefaults](/api/wrappers/php/Kendo/Dataviz/UI/SparklineSeriesDefaults)
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $seriesDefaults = new \Kendo\Dataviz\UI\SparklineSeriesDefaults();
    $gap = 1;
    $seriesDefaults->gap($gap);
    $sparkline->seriesDefaults($seriesDefaults);
    ?>

#### Example - using array

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $gap = 1;
    $sparkline->seriesDefaults(array('gap' => $gap));
    ?>

### seriesHover
Fires when chart series are hovered.
For additional information check the [seriesHover](/api/web/sparkline#events-seriesHover) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->seriesHover('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSeriesHover(e) {
            // handle the seriesHover event.
        }
    </script>
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->seriesHover('onSeriesHover');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->seriesHover(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### theme
Sets Chart theme. Available themes: default, blueOpal, black.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->theme('value');
    ?>

### tooltip

The data point tooltip configuration options.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineTooltip|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineTooltip](/api/wrappers/php/Kendo/Dataviz/UI/SparklineTooltip)
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $tooltip = new \Kendo\Dataviz\UI\SparklineTooltip();
    $background = 'value';
    $tooltip->background($background);
    $sparkline->tooltip($tooltip);
    ?>

#### Example - using array

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $background = 'value';
    $sparkline->tooltip(array('background' => $background));
    ?>

### transitions
A value indicating if transition animations should be played.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->transitions(true);
    ?>

### type
The default series type.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->type('value');
    ?>

### addValueAxisItem

Adds one or more SparklineValueAxisItem to the Sparkline.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value[, $value2, ...] `\Kendo\Dataviz\UI\SparklineValueAxisItem|array`

#### Example - using \Kendo\Dataviz\UI\SparklineValueAxisItem

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $valueAxisItem = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $color = 'value';
    $valueAxisItem->color($color);
    $sparkline->addValueAxisItem($valueAxisItem);
    ?>

#### Example - using array

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $color = 'value';
    $sparkline->addValueAxisItem(array('color' => $color));
    ?>

#### Example - adding more than one SparklineValueAxisItem

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $first  = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $second = new \Kendo\Dataviz\UI\SparklineValueAxisItem();
    $sparkline->addValueAxisItem($first, $second);
    ?>

### zoom
Fires as long as the user is zooming the chart using the mousewheel.
For additional information check the [zoom](/api/web/sparkline#events-zoom) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->zoom('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onZoom(e) {
            // handle the zoom event.
        }
    </script>
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->zoom('onZoom');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->zoom(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### zoomEnd
Fires when the user stops zooming the chart.
For additional information check the [zoomEnd](/api/web/sparkline#events-zoomEnd) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->zoomEnd('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onZoomEnd(e) {
            // handle the zoomEnd event.
        }
    </script>
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->zoomEnd('onZoomEnd');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->zoomEnd(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### zoomStart
Fires when the user has used the mousewheel to zoom the chart.The zoom operation can be aborted by calling e.preventDefault().
For additional information check the [zoomStart](/api/web/sparkline#events-zoomStart) event documentation.

#### Returns
`\Kendo\Dataviz\UI\Sparkline`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->zoomStart('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onZoomStart(e) {
            // handle the zoomStart event.
        }
    </script>
    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->zoomStart('onZoomStart');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $sparkline = new \Kendo\Dataviz\UI\Sparkline('Sparkline');
    $sparkline->zoomStart(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

