---
title: TabStrip
slug: php-ui-tabstrip
tags: api, php
publish: true
---

# \Kendo\UI\TabStrip

A PHP wrapper for Kendo UI [TabStrip](/api/web/tabstrip).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use TabStrip in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo TabStrip

    <?php
    // Create a new instance of TabStrip and specify its id
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');

    // Configure it
    $tabStrip->collapsible(true)

    // Output it

    echo $tabStrip->render();
    ?>


## Methods

### activate
Triggered just after a tab is being made visible, but before the end of the animation
For additional information check the [activate](/api/web/tabstrip#events-activate) event documentation.

#### Returns
`\Kendo\UI\TabStrip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->activate('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onActivate(e) {
            // handle the activate event.
        }
    </script>
    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->activate('onActivate');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->activate(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### animation

A collection of visual animations used when TabStrip tab are selected through
user interactions. Setting this option to false will disable all animations.

#### Returns
`\Kendo\UI\TabStrip`

#### Parameters

##### $value `\Kendo\UI\TabStripAnimation|array`


#### Example - using [\Kendo\UI\TabStripAnimation](/api/wrappers/php/Kendo/UI/TabStripAnimation)
    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $animation = new \Kendo\UI\TabStripAnimation();
    $close = new \Kendo\UI\TabStripAnimationClose();
    $animation->close($close);
    $tabStrip->animation($animation);
    ?>

#### Example - using array

    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $close = new \Kendo\UI\TabStripAnimationClose();
    $tabStrip->animation(array('close' => $close));
    ?>

### collapsible
Specifies whether the TabStrip should be able to collapse completely when clicking an expanded tab.

#### Returns
`\Kendo\UI\TabStrip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->collapsible(true);
    ?>

### contentLoad
Triggered when content is fetched from an AJAX request.
For additional information check the [contentLoad](/api/web/tabstrip#events-contentLoad) event documentation.

#### Returns
`\Kendo\UI\TabStrip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->contentLoad('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onContentLoad(e) {
            // handle the contentLoad event.
        }
    </script>
    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->contentLoad('onContentLoad');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->contentLoad(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dataContentField
Sets the field of the data item that provides the text content of
the tab content element.

#### Returns
`\Kendo\UI\TabStrip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->dataContentField('value');
    ?>

### dataContentUrlField
Sets the field of the data item that provides the URL for
the ajax loaded tab content.

#### Returns
`\Kendo\UI\TabStrip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->dataContentUrlField('value');
    ?>

### dataImageUrlField
Sets the field of the data item that provides the image URL of
the tab.

#### Returns
`\Kendo\UI\TabStrip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->dataImageUrlField('value');
    ?>

### dataSpriteCssClass
Sets the field of the data item that provides the CSS class of
the tab.

#### Returns
`\Kendo\UI\TabStrip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->dataSpriteCssClass('value');
    ?>

### dataTextField
Sets the field of the data item that provides the text name of the tab.

#### Returns
`\Kendo\UI\TabStrip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->dataTextField('value');
    ?>

### dataUrlField
Sets the field of the data item that provides the link URL for the
tab.

#### Returns
`\Kendo\UI\TabStrip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->dataUrlField('value');
    ?>

### error
Triggered when an AJAX request results in an error.
For additional information check the [error](/api/web/tabstrip#events-error) event documentation.

#### Returns
`\Kendo\UI\TabStrip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->error('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onError(e) {
            // handle the error event.
        }
    </script>
    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->error('onError');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->error(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### addItem

Adds one or more TabStripItem to the TabStrip.

#### Returns
`\Kendo\UI\TabStrip`

#### Parameters

##### $value[, $value2, ...] `\Kendo\UI\TabStripItem|array`

#### Example - using \Kendo\UI\TabStripItem

    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $item = new \Kendo\UI\TabStripItem();
    $contentUrl = 'value';
    $item->contentUrl($contentUrl);
    $tabStrip->addItem($item);
    ?>

#### Example - using array

    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $contentUrl = 'value';
    $tabStrip->addItem(array('contentUrl' => $contentUrl));
    ?>

#### Example - adding more than one TabStripItem

    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $first  = new \Kendo\UI\TabStripItem();
    $second = new \Kendo\UI\TabStripItem();
    $tabStrip->addItem($first, $second);
    ?>

### select
Triggered before a tab is selected.
For additional information check the [select](/api/web/tabstrip#events-select) event documentation.

#### Returns
`\Kendo\UI\TabStrip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->select('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelect(e) {
            // handle the select event.
        }
    </script>
    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->select('onSelect');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $tabStrip = new \Kendo\UI\TabStrip('TabStrip');
    $tabStrip->select(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

