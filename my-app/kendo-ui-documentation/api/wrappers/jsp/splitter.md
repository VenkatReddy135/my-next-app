---
title: splitter
slug: jsp-splitter
tags: api, java
publish: true
---

# \<kendo:splitter\>
A JSP wrapper for Kendo UI [Splitter](/api/web/splitter).

## Configuration Attributes

### orientation `java.lang.String`

Specifies the orientation of the widget. Supported values are "horizontal" and "vertical".

#### Example
    <kendo:splitter orientation="orientation">
    </kendo:splitter>


##  Configuration JSP Tags

### kendo:splitter-panes

Defines the panes of the splitter

More documentation is available at [kendo:splitter-panes](splitter/panes).

#### Example

    <kendo:splitter>
        <kendo:splitter-panes></kendo:splitter-panes>
    </kendo:splitter>


## Event Attributes

### collapse `String`

Triggered when a pane of a Splitter is collapsed.


For additional information check the [collapse](/api/web/splitter#events-collapse) event documentation.

#### Example
    <kendo:splitter collapse="handle_collapse">
    </kendo:splitter>
    <script>
        function handle_collapse(e) {
            // Code to handle the collapse event.
        }
    </script>

### contentLoad `String`

Triggered when the content for a pane has finished loading.


For additional information check the [contentLoad](/api/web/splitter#events-contentLoad) event documentation.

#### Example
    <kendo:splitter contentLoad="handle_contentLoad">
    </kendo:splitter>
    <script>
        function handle_contentLoad(e) {
            // Code to handle the contentLoad event.
        }
    </script>

### error `String`

Triggered when the AJAX request that fetches a pane content has failed.


For additional information check the [error](/api/web/splitter#events-error) event documentation.

#### Example
    <kendo:splitter error="handle_error">
    </kendo:splitter>
    <script>
        function handle_error(e) {
            // Code to handle the error event.
        }
    </script>

### expand `String`

Triggered when a pane of a Splitter is expanded.


For additional information check the [expand](/api/web/splitter#events-expand) event documentation.

#### Example
    <kendo:splitter expand="handle_expand">
    </kendo:splitter>
    <script>
        function handle_expand(e) {
            // Code to handle the expand event.
        }
    </script>

### layoutChange `String`

Fires when the splitter layout has changed


For additional information check the [layoutChange](/api/web/splitter#events-layoutChange) event documentation.

#### Example
    <kendo:splitter layoutChange="handle_layoutChange">
    </kendo:splitter>
    <script>
        function handle_layoutChange(e) {
            // Code to handle the layoutChange event.
        }
    </script>

### resize `String`

Triggered when a pane is resized.


For additional information check the [resize](/api/web/splitter#events-resize) event documentation.

#### Example
    <kendo:splitter resize="handle_resize">
    </kendo:splitter>
    <script>
        function handle_resize(e) {
            // Code to handle the resize event.
        }
    </script>

## Event Tags

### kendo:splitter-collapse

Triggered when a pane of a Splitter is collapsed.


For additional information check the [collapse](/api/web/splitter#events-collapse) event documentation.

#### Example
    <kendo:splitter>
        <kendo:splitter-collapse>
            <script>
                function(e) {
                    // Code to handle the collapse event.
                }
            </script>
        </kendo:splitter-collapse>
    </kendo:splitter>

### kendo:splitter-contentLoad

Triggered when the content for a pane has finished loading.


For additional information check the [contentLoad](/api/web/splitter#events-contentLoad) event documentation.

#### Example
    <kendo:splitter>
        <kendo:splitter-contentLoad>
            <script>
                function(e) {
                    // Code to handle the contentLoad event.
                }
            </script>
        </kendo:splitter-contentLoad>
    </kendo:splitter>

### kendo:splitter-error

Triggered when the AJAX request that fetches a pane content has failed.


For additional information check the [error](/api/web/splitter#events-error) event documentation.

#### Example
    <kendo:splitter>
        <kendo:splitter-error>
            <script>
                function(e) {
                    // Code to handle the error event.
                }
            </script>
        </kendo:splitter-error>
    </kendo:splitter>

### kendo:splitter-expand

Triggered when a pane of a Splitter is expanded.


For additional information check the [expand](/api/web/splitter#events-expand) event documentation.

#### Example
    <kendo:splitter>
        <kendo:splitter-expand>
            <script>
                function(e) {
                    // Code to handle the expand event.
                }
            </script>
        </kendo:splitter-expand>
    </kendo:splitter>

### kendo:splitter-layoutChange

Fires when the splitter layout has changed


For additional information check the [layoutChange](/api/web/splitter#events-layoutChange) event documentation.

#### Example
    <kendo:splitter>
        <kendo:splitter-layoutChange>
            <script>
                function(e) {
                    // Code to handle the layoutChange event.
                }
            </script>
        </kendo:splitter-layoutChange>
    </kendo:splitter>

### kendo:splitter-resize

Triggered when a pane is resized.


For additional information check the [resize](/api/web/splitter#events-resize) event documentation.

#### Example
    <kendo:splitter>
        <kendo:splitter-resize>
            <script>
                function(e) {
                    // Code to handle the resize event.
                }
            </script>
        </kendo:splitter-resize>
    </kendo:splitter>

