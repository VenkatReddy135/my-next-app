---
title: Splitter
slug: php-ui-splitter
tags: api, php
publish: true
---

# \Kendo\UI\Splitter

A PHP wrapper for Kendo UI [Splitter](/api/web/splitter).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use Splitter in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo Splitter

    <?php
    // Create a new instance of Splitter and specify its id
    $splitter = new \Kendo\UI\Splitter('Splitter');

    // Configure it
    $splitter->orientation('value')

    // Output it

    echo $splitter->render();
    ?>


## Methods

### collapse
Triggered when a pane of a Splitter is collapsed.
For additional information check the [collapse](/api/web/splitter#events-collapse) event documentation.

#### Returns
`\Kendo\UI\Splitter`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->collapse('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onCollapse(e) {
            // handle the collapse event.
        }
    </script>
    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->collapse('onCollapse');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->collapse(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### contentLoad
Triggered when the content for a pane has finished loading.
For additional information check the [contentLoad](/api/web/splitter#events-contentLoad) event documentation.

#### Returns
`\Kendo\UI\Splitter`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->contentLoad('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onContentLoad(e) {
            // handle the contentLoad event.
        }
    </script>
    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->contentLoad('onContentLoad');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->contentLoad(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### error
Triggered when the AJAX request that fetches a pane content has failed.
For additional information check the [error](/api/web/splitter#events-error) event documentation.

#### Returns
`\Kendo\UI\Splitter`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->error('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onError(e) {
            // handle the error event.
        }
    </script>
    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->error('onError');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->error(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### expand
Triggered when a pane of a Splitter is expanded.
For additional information check the [expand](/api/web/splitter#events-expand) event documentation.

#### Returns
`\Kendo\UI\Splitter`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->expand('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onExpand(e) {
            // handle the expand event.
        }
    </script>
    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->expand('onExpand');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->expand(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### layoutChange
Fires when the splitter layout has changed
For additional information check the [layoutChange](/api/web/splitter#events-layoutChange) event documentation.

#### Returns
`\Kendo\UI\Splitter`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->layoutChange('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onLayoutChange(e) {
            // handle the layoutChange event.
        }
    </script>
    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->layoutChange('onLayoutChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->layoutChange(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### orientation
Specifies the orientation of the widget. Supported values are "horizontal" and "vertical".

#### Returns
`\Kendo\UI\Splitter`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->orientation('value');
    ?>

### addPane

Adds one or more SplitterPane to the Splitter.

#### Returns
`\Kendo\UI\Splitter`

#### Parameters

##### $value[, $value2, ...] `\Kendo\UI\SplitterPane|array`

#### Example - using \Kendo\UI\SplitterPane

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $pane = new \Kendo\UI\SplitterPane();
    $collapsed = true;
    $pane->collapsed($collapsed);
    $splitter->addPane($pane);
    ?>

#### Example - using array

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $collapsed = true;
    $splitter->addPane(array('collapsed' => $collapsed));
    ?>

#### Example - adding more than one SplitterPane

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $first  = new \Kendo\UI\SplitterPane();
    $second = new \Kendo\UI\SplitterPane();
    $splitter->addPane($first, $second);
    ?>

### resize
Triggered when a pane is resized.
For additional information check the [resize](/api/web/splitter#events-resize) event documentation.

#### Returns
`\Kendo\UI\Splitter`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->resize('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onResize(e) {
            // handle the resize event.
        }
    </script>
    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->resize('onResize');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $splitter = new \Kendo\UI\Splitter('Splitter');
    $splitter->resize(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

