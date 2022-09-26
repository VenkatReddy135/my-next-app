---
title: window
slug: jsp-window
tags: api, java
publish: true
---

# \<kendo:window\>
A JSP wrapper for Kendo UI [Window](/api/web/window).

## Configuration Attributes

### actions `java.lang.Object`

The buttons for interacting with the window. Predefined array values are "Close", "Refresh", "Minimize",
and "Maximize".

#### Example
    <kendo:window actions="actions">
    </kendo:window>

### appendTo `java.lang.Object`

The element that the Window will be appended to. Beneficial if the Window is used together with a form.
Note that this does not constrain the window dragging within the given element.

#### Example
    <kendo:window appendTo="appendTo">
    </kendo:window>

### content `java.lang.Object`

The content of the window

#### Example
    <kendo:window content="content">
    </kendo:window>

### draggable `boolean`

Enables (true) or disables (false) the ability for users to move/drag the widget.

#### Example
    <kendo:window draggable="draggable">
    </kendo:window>

### height `java.lang.Object`

Specifies height of the window.

#### Example
    <kendo:window height="height">
    </kendo:window>

### iframe `boolean`

Explicitly states whether content iframe should be created.

#### Example
    <kendo:window iframe="iframe">
    </kendo:window>

### maxHeight `float`

The maximum height (in pixels) that may be achieved by resizing the window.

#### Example
    <kendo:window maxHeight="maxHeight">
    </kendo:window>

### maxWidth `float`

The maximum width (in pixels) that may be achieved by resizing the window.

#### Example
    <kendo:window maxWidth="maxWidth">
    </kendo:window>

### minHeight `float`

The minimum height (in pixels) that may be achieved by resizing the window.

#### Example
    <kendo:window minHeight="minHeight">
    </kendo:window>

### minWidth `float`

The minimum width (in pixels) that may be achieved by resizing the window.

#### Example
    <kendo:window minWidth="minWidth">
    </kendo:window>

### modal `boolean`

Specifies whether the window should show a modal overlay over the page.

#### Example
    <kendo:window modal="modal">
    </kendo:window>

### pinned `boolean`

Specifies whether the window should be pinned, i.e. it will not move together with the page content during scrolling.

#### Example
    <kendo:window pinned="pinned">
    </kendo:window>

### resizable `boolean`

Enables (true) or disables (false) the ability for users to resize a Window.

#### Example
    <kendo:window resizable="resizable">
    </kendo:window>

### title `java.lang.Object`

The text in the window title bar. If false, the window will be displayed without a title bar. Note that this will prevent the window from being dragged, and the window titlebar buttons will not be shown.

#### Example
    <kendo:window title="title">
    </kendo:window>

### visible `boolean`

Specifies whether the window will be initially visible.

#### Example
    <kendo:window visible="visible">
    </kendo:window>

### width `java.lang.Object`

Specifies width of the window.

#### Example
    <kendo:window width="width">
    </kendo:window>


##  Configuration JSP Tags

### kendo:window-animation

A collection of {Animation} objects, used to change default animations. A value of false
will disable all animations in the widget.

More documentation is available at [kendo:window-animation](window/animation).

#### Example

    <kendo:window>
        <kendo:window-animation></kendo:window-animation>
    </kendo:window>

### kendo:window-position

A collection of one or two members, which define the initial Window's top and/or left position on the page.

More documentation is available at [kendo:window-position](window/position).

#### Example

    <kendo:window>
        <kendo:window-position></kendo:window-position>
    </kendo:window>


## Event Attributes

### activate `String`

Triggered when a Window has finished its opening animation.


For additional information check the [activate](/api/web/window#events-activate) event documentation.

#### Example
    <kendo:window activate="handle_activate">
    </kendo:window>
    <script>
        function handle_activate(e) {
            // Code to handle the activate event.
        }
    </script>

### close `String`

Triggered when a Window is closed (by a user or through the close() method).


For additional information check the [close](/api/web/window#events-close) event documentation.

#### Example
    <kendo:window close="handle_close">
    </kendo:window>
    <script>
        function handle_close(e) {
            // Code to handle the close event.
        }
    </script>

### deactivate `String`

Triggered when a Window has finished its closing animation.


For additional information check the [deactivate](/api/web/window#events-deactivate) event documentation.

#### Example
    <kendo:window deactivate="handle_deactivate">
    </kendo:window>
    <script>
        function handle_deactivate(e) {
            // Code to handle the deactivate event.
        }
    </script>

### dragend `String`

Triggered when a Window has been moved by a user.


For additional information check the [dragend](/api/web/window#events-dragend) event documentation.

#### Example
    <kendo:window dragend="handle_dragend">
    </kendo:window>
    <script>
        function handle_dragend(e) {
            // Code to handle the dragend event.
        }
    </script>

### dragstart `String`

Triggered when the user starts to move the window.


For additional information check the [dragstart](/api/web/window#events-dragstart) event documentation.

#### Example
    <kendo:window dragstart="handle_dragstart">
    </kendo:window>
    <script>
        function handle_dragstart(e) {
            // Code to handle the dragstart event.
        }
    </script>

### error `String`

Triggered when an AJAX request for content fails.


For additional information check the [error](/api/web/window#events-error) event documentation.

#### Example
    <kendo:window error="handle_error">
    </kendo:window>
    <script>
        function handle_error(e) {
            // Code to handle the error event.
        }
    </script>

### open `String`

Triggered when a Window is opened (i.e. the open() method is called).


For additional information check the [open](/api/web/window#events-open) event documentation.

#### Example
    <kendo:window open="handle_open">
    </kendo:window>
    <script>
        function handle_open(e) {
            // Code to handle the open event.
        }
    </script>

### refresh `String`

Triggered when the content of a Window has finished loading via AJAX,
when the window iframe has finished loading, or when the refresh button
has been clicked on a window with static content.


For additional information check the [refresh](/api/web/window#events-refresh) event documentation.

#### Example
    <kendo:window refresh="handle_refresh">
    </kendo:window>
    <script>
        function handle_refresh(e) {
            // Code to handle the refresh event.
        }
    </script>

### resize `String`

Triggered when a window has been resized by a user.


For additional information check the [resize](/api/web/window#events-resize) event documentation.

#### Example
    <kendo:window resize="handle_resize">
    </kendo:window>
    <script>
        function handle_resize(e) {
            // Code to handle the resize event.
        }
    </script>

## Event Tags

### kendo:window-activate

Triggered when a Window has finished its opening animation.


For additional information check the [activate](/api/web/window#events-activate) event documentation.

#### Example
    <kendo:window>
        <kendo:window-activate>
            <script>
                function(e) {
                    // Code to handle the activate event.
                }
            </script>
        </kendo:window-activate>
    </kendo:window>

### kendo:window-close

Triggered when a Window is closed (by a user or through the close() method).


For additional information check the [close](/api/web/window#events-close) event documentation.

#### Example
    <kendo:window>
        <kendo:window-close>
            <script>
                function(e) {
                    // Code to handle the close event.
                }
            </script>
        </kendo:window-close>
    </kendo:window>

### kendo:window-deactivate

Triggered when a Window has finished its closing animation.


For additional information check the [deactivate](/api/web/window#events-deactivate) event documentation.

#### Example
    <kendo:window>
        <kendo:window-deactivate>
            <script>
                function(e) {
                    // Code to handle the deactivate event.
                }
            </script>
        </kendo:window-deactivate>
    </kendo:window>

### kendo:window-dragend

Triggered when a Window has been moved by a user.


For additional information check the [dragend](/api/web/window#events-dragend) event documentation.

#### Example
    <kendo:window>
        <kendo:window-dragend>
            <script>
                function(e) {
                    // Code to handle the dragend event.
                }
            </script>
        </kendo:window-dragend>
    </kendo:window>

### kendo:window-dragstart

Triggered when the user starts to move the window.


For additional information check the [dragstart](/api/web/window#events-dragstart) event documentation.

#### Example
    <kendo:window>
        <kendo:window-dragstart>
            <script>
                function(e) {
                    // Code to handle the dragstart event.
                }
            </script>
        </kendo:window-dragstart>
    </kendo:window>

### kendo:window-error

Triggered when an AJAX request for content fails.


For additional information check the [error](/api/web/window#events-error) event documentation.

#### Example
    <kendo:window>
        <kendo:window-error>
            <script>
                function(e) {
                    // Code to handle the error event.
                }
            </script>
        </kendo:window-error>
    </kendo:window>

### kendo:window-open

Triggered when a Window is opened (i.e. the open() method is called).


For additional information check the [open](/api/web/window#events-open) event documentation.

#### Example
    <kendo:window>
        <kendo:window-open>
            <script>
                function(e) {
                    // Code to handle the open event.
                }
            </script>
        </kendo:window-open>
    </kendo:window>

### kendo:window-refresh

Triggered when the content of a Window has finished loading via AJAX,
when the window iframe has finished loading, or when the refresh button
has been clicked on a window with static content.


For additional information check the [refresh](/api/web/window#events-refresh) event documentation.

#### Example
    <kendo:window>
        <kendo:window-refresh>
            <script>
                function(e) {
                    // Code to handle the refresh event.
                }
            </script>
        </kendo:window-refresh>
    </kendo:window>

### kendo:window-resize

Triggered when a window has been resized by a user.


For additional information check the [resize](/api/web/window#events-resize) event documentation.

#### Example
    <kendo:window>
        <kendo:window-resize>
            <script>
                function(e) {
                    // Code to handle the resize event.
                }
            </script>
        </kendo:window-resize>
    </kendo:window>

