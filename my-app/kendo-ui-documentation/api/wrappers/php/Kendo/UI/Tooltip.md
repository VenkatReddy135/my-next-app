---
title: Tooltip
slug: php-ui-tooltip
tags: api, php
publish: true
---

# \Kendo\UI\Tooltip

A PHP wrapper for Kendo UI [Tooltip](/api/web/tooltip).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use Tooltip in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo Tooltip

    <?php
    // Create a new instance of Tooltip and specify its id
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');

    // Configure it
    $tooltip->autoHide(true)

    // Output it

    echo $tooltip->render();
    ?>


## Methods

### animation

A collection of {Animation} objects, used to change default animations. A value of false
will disable all animations in the widget.

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `\Kendo\UI\TooltipAnimation|array`


#### Example - using [\Kendo\UI\TooltipAnimation](/api/wrappers/php/Kendo/UI/TooltipAnimation)
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $animation = new \Kendo\UI\TooltipAnimation();
    $close = new \Kendo\UI\TooltipAnimationClose();
    $animation->close($close);
    $tooltip->animation($animation);
    ?>

#### Example - using array

    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $close = new \Kendo\UI\TooltipAnimationClose();
    $tooltip->animation(array('close' => $close));
    ?>

### autoHide
Specifies if the tooltip will be hidden when mouse leaves the target element. If set to false a close button will be shown within tooltip. If set to false, showAfter is specified and the showOn is set to "mouseenter" the Tooltip will be displayed after the given timeout even if the element is no longer hovered.

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->autoHide(true);
    ?>

### callout
Specifies if the tooltip callout will be displayed.

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->callout(true);
    ?>

### content

Sets the HTML content of the Tooltip.

#### Returns

`Tooltip`

#### $value `string`

#### Example

    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->content('<strong>Content</strong>');
    ?>


### contentLoad
Triggered when an AJAX request for content completes.
For additional information check the [contentLoad](/api/web/tooltip#events-contentLoad) event documentation.

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->contentLoad('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onContentLoad(e) {
            // handle the contentLoad event.
        }
    </script>
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->contentLoad('onContentLoad');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->contentLoad(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### endContent

Stops output bufferring and sets the preceding markup as the content of the Tooltip.

#### Example

    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->startContent();
    ?>
    <strong>Content</strong>
    <?php
    $tooltip->endContent(); // content is set to <strong>Content</strong>
    ?>

### error
Triggered when an AJAX request for content fails.
For additional information check the [error](/api/web/tooltip#events-error) event documentation.

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->error('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onError(e) {
            // handle the error event.
        }
    </script>
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->error('onError');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->error(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### filter
Specifies a selector for elements, within the container, for which the tooltip will be displayed.

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->filter('value');
    ?>

### height
The height (in pixels) of the tooltip.

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->height(1);
    ?>

### hide
Triggered when a Tooltip is hidden
For additional information check the [hide](/api/web/tooltip#events-hide) event documentation.

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->hide('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onHide(e) {
            // handle the hide event.
        }
    </script>
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->hide('onHide');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->hide(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### iframe
Explicitly states whether content iframe should be created.

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->iframe(true);
    ?>

### position
The position relative to the target element, at which the tooltip will be shown. Predefined values are "bottom", "top", "left", "right", "center".

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->position('value');
    ?>

### requestStart
Triggered before an AJAX request started. Note that this event is triggered only when an AJAX request, instead of an iframe, is used.
For additional information check the [requestStart](/api/web/tooltip#events-requestStart) event documentation.

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->requestStart('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onRequestStart(e) {
            // handle the requestStart event.
        }
    </script>
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->requestStart('onRequestStart');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->requestStart(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### show
Triggered when a Tooltip is shown.
For additional information check the [show](/api/web/tooltip#events-show) event documentation.

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->show('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onShow(e) {
            // handle the show event.
        }
    </script>
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->show('onShow');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->show(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### showAfter
Specify the delay in milliseconds before the tooltip is shown. This option is ignored if showOn is set to "click" or "focus".

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->showAfter(1);
    ?>

### showOn
The event on which the tooltip will be shown. Predefined values are "mouseenter", "click" and "focus".

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->showOn('value');
    ?>

### startContent

Starts output bufferring. Any following markup will be set as the content of the Tooltip.

#### Example

    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->startContent();
    ?>
    <strong>Content</strong>
    <?php
    $tooltip->endContent(); // content is set to <strong>Content</strong>
    ?>


### width
The width (in pixels) of the tooltip.

#### Returns
`\Kendo\UI\Tooltip`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $tooltip = new \Kendo\UI\Tooltip('Tooltip');
    $tooltip->width(1);
    ?>

