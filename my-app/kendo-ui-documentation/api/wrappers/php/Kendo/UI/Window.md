---
title: Window
slug: php-ui-window
tags: api, php
publish: true
---

# \Kendo\UI\Window

A PHP wrapper for Kendo UI [Window](/api/web/window).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use Window in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo Window

    <?php
    // Create a new instance of Window and specify its id
    $window = new \Kendo\UI\Window('Window');

    // Configure it
    $window->draggable(true)

    // Output it

    echo $window->render();
    ?>


## Methods

### actions
The buttons for interacting with the window. Predefined array values are "Close", "Refresh", "Minimize",
and "Maximize".

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `array`



#### Example 
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->actions(new array());
    ?>

### activate
Triggered when a Window has finished its opening animation.
For additional information check the [activate](/api/web/window#events-activate) event documentation.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->activate('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onActivate(e) {
            // handle the activate event.
        }
    </script>
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->activate('onActivate');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->activate(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### animation

A collection of {Animation} objects, used to change default animations. A value of false
will disable all animations in the widget.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `\Kendo\UI\WindowAnimation|array`


#### Example - using [\Kendo\UI\WindowAnimation](/api/wrappers/php/Kendo/UI/WindowAnimation)
    <?php
    $window = new \Kendo\UI\Window('Window');
    $animation = new \Kendo\UI\WindowAnimation();
    $close = new \Kendo\UI\WindowAnimationClose();
    $animation->close($close);
    $window->animation($animation);
    ?>

#### Example - using array

    <?php
    $window = new \Kendo\UI\Window('Window');
    $close = new \Kendo\UI\WindowAnimationClose();
    $window->animation(array('close' => $close));
    ?>

### appendTo
The element that the Window will be appended to. Beneficial if the Window is used together with a form.
Note that this does not constrain the window dragging within the given element.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `|string`



#### Example  - using 
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->appendTo(new ());
    ?>

#### Example  - using string
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->appendTo('value');
    ?>

### close
Triggered when a Window is closed (by a user or through the close() method).
For additional information check the [close](/api/web/window#events-close) event documentation.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->close('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onClose(e) {
            // handle the close event.
        }
    </script>
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->close('onClose');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->close(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### content

Sets the HTML content of the Window.

#### Returns

`Window`

#### $value `string`

#### Example

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->content('<strong>Content</strong>');
    ?>


### deactivate
Triggered when a Window has finished its closing animation.
For additional information check the [deactivate](/api/web/window#events-deactivate) event documentation.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->deactivate('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDeactivate(e) {
            // handle the deactivate event.
        }
    </script>
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->deactivate('onDeactivate');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->deactivate(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### dragend
Triggered when a Window has been moved by a user.
For additional information check the [dragend](/api/web/window#events-dragend) event documentation.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->dragend('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDragend(e) {
            // handle the dragend event.
        }
    </script>
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->dragend('onDragend');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->dragend(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### draggable
Enables (true) or disables (false) the ability for users to move/drag the widget.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->draggable(true);
    ?>

### dragstart
Triggered when the user starts to move the window.
For additional information check the [dragstart](/api/web/window#events-dragstart) event documentation.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->dragstart('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDragstart(e) {
            // handle the dragstart event.
        }
    </script>
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->dragstart('onDragstart');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->dragstart(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### endContent

Stops output bufferring and sets the preceding markup as the content of the Window.

#### Example

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->startContent();
    ?>
    <strong>Content</strong>
    <?php
    $window->endContent(); // content is set to <strong>Content</strong>
    ?>

### error
Triggered when an AJAX request for content fails.
For additional information check the [error](/api/web/window#events-error) event documentation.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->error('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onError(e) {
            // handle the error event.
        }
    </script>
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->error('onError');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->error(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### height
Specifies height of the window.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `float|string`



#### Example  - using float
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->height(1);
    ?>

#### Example  - using string
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->height('value');
    ?>

### iframe
Explicitly states whether content iframe should be created.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->iframe(true);
    ?>

### maxHeight
The maximum height (in pixels) that may be achieved by resizing the window.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->maxHeight(1);
    ?>

### maxWidth
The maximum width (in pixels) that may be achieved by resizing the window.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->maxWidth(1);
    ?>

### minHeight
The minimum height (in pixels) that may be achieved by resizing the window.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->minHeight(1);
    ?>

### minWidth
The minimum width (in pixels) that may be achieved by resizing the window.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->minWidth(1);
    ?>

### modal
Specifies whether the window should show a modal overlay over the page.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->modal(true);
    ?>

### open
Triggered when a Window is opened (i.e. the open() method is called).
For additional information check the [open](/api/web/window#events-open) event documentation.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->open('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onOpen(e) {
            // handle the open event.
        }
    </script>
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->open('onOpen');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->open(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### pinned
Specifies whether the window should be pinned, i.e. it will not move together with the page content during scrolling.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->pinned(true);
    ?>

### position

A collection of one or two members, which define the initial Window's top and/or left position on the page.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `\Kendo\UI\WindowPosition|array`


#### Example - using [\Kendo\UI\WindowPosition](/api/wrappers/php/Kendo/UI/WindowPosition)
    <?php
    $window = new \Kendo\UI\Window('Window');
    $position = new \Kendo\UI\WindowPosition();
    $left = 1;
    $position->left($left);
    $window->position($position);
    ?>

#### Example - using array

    <?php
    $window = new \Kendo\UI\Window('Window');
    $left = 1;
    $window->position(array('left' => $left));
    ?>

### refresh
Triggered when the content of a Window has finished loading via AJAX,
when the window iframe has finished loading, or when the refresh button
has been clicked on a window with static content.
For additional information check the [refresh](/api/web/window#events-refresh) event documentation.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->refresh('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onRefresh(e) {
            // handle the refresh event.
        }
    </script>
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->refresh('onRefresh');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->refresh(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### resizable
Enables (true) or disables (false) the ability for users to resize a Window.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->resizable(true);
    ?>

### resize
Triggered when a window has been resized by a user.
For additional information check the [resize](/api/web/window#events-resize) event documentation.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->resize('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onResize(e) {
            // handle the resize event.
        }
    </script>
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->resize('onResize');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->resize(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### startContent

Starts output bufferring. Any following markup will be set as the content of the Window.

#### Example

    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->startContent();
    ?>
    <strong>Content</strong>
    <?php
    $window->endContent(); // content is set to <strong>Content</strong>
    ?>


### title
The text in the window title bar. If false, the window will be displayed without a title bar. Note that this will prevent the window from being dragged, and the window titlebar buttons will not be shown.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `string|boolean`



#### Example  - using string
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->title('value');
    ?>

#### Example  - using boolean
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->title(true);
    ?>

### visible
Specifies whether the window will be initially visible.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->visible(true);
    ?>

### width
Specifies width of the window.

#### Returns
`\Kendo\UI\Window`

#### Parameters

##### $value `float|string`



#### Example  - using float
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->width(1);
    ?>

#### Example  - using string
    <?php
    $window = new \Kendo\UI\Window('Window');
    $window->width('value');
    ?>

