---
title: panelBar
slug: jsp-panelBar
tags: api, java
publish: true
---

# \<kendo:panelBar\>
A JSP wrapper for Kendo UI [PanelBar](/api/web/panelbar).

## Configuration Attributes

### animation `boolean`

A collection of visual animations used when PanelBar items are expand or collapsed through
user interactions. Setting this option to false will disable all animations. Further configuration is available via [kendo:panelBar-animation](#kendo-panelBar-animation). 

#### Example
    <kendo:panelBar animation="animation">
    </kendo:panelBar>

### expandMode `java.lang.String`

Specifies how the PanelBar items are displayed when opened and closed. The following values
are available:

#### Example
    <kendo:panelBar expandMode="expandMode">
    </kendo:panelBar>


##  Configuration JSP Tags

### kendo:panelBar-animation

A collection of visual animations used when PanelBar items are expand or collapsed through
user interactions. Setting this option to false will disable all animations.

More documentation is available at [kendo:panelBar-animation](panelbar/animation).

#### Example

    <kendo:panelBar>
        <kendo:panelBar-animation></kendo:panelBar-animation>
    </kendo:panelBar>

### kendo:panelBar-items

Contains the items of the panelbar widget

More documentation is available at [kendo:panelBar-items](panelbar/items).

#### Example

    <kendo:panelBar>
        <kendo:panelBar-items></kendo:panelBar-items>
    </kendo:panelBar>


## Event Attributes

### activate `String`

Triggered when an item of a PanelBar is activated.


For additional information check the [activate](/api/web/panelbar#events-activate) event documentation.

#### Example
    <kendo:panelBar activate="handle_activate">
    </kendo:panelBar>
    <script>
        function handle_activate(e) {
            // Code to handle the activate event.
        }
    </script>

### collapse `String`

Triggered when an item of a PanelBar is collapsed.


For additional information check the [collapse](/api/web/panelbar#events-collapse) event documentation.

#### Example
    <kendo:panelBar collapse="handle_collapse">
    </kendo:panelBar>
    <script>
        function handle_collapse(e) {
            // Code to handle the collapse event.
        }
    </script>

### contentLoad `String`

Fires when content is fetched from an AJAX request.


For additional information check the [contentLoad](/api/web/panelbar#events-contentLoad) event documentation.

#### Example
    <kendo:panelBar contentLoad="handle_contentLoad">
    </kendo:panelBar>
    <script>
        function handle_contentLoad(e) {
            // Code to handle the contentLoad event.
        }
    </script>

### error `String`

Fires when AJAX request results in an error.


For additional information check the [error](/api/web/panelbar#events-error) event documentation.

#### Example
    <kendo:panelBar error="handle_error">
    </kendo:panelBar>
    <script>
        function handle_error(e) {
            // Code to handle the error event.
        }
    </script>

### expand `String`

Triggered when an item of a PanelBar is expanded.


For additional information check the [expand](/api/web/panelbar#events-expand) event documentation.

#### Example
    <kendo:panelBar expand="handle_expand">
    </kendo:panelBar>
    <script>
        function handle_expand(e) {
            // Code to handle the expand event.
        }
    </script>

### select `String`

Triggered when an item of a PanelBar is selected.


For additional information check the [select](/api/web/panelbar#events-select) event documentation.

#### Example
    <kendo:panelBar select="handle_select">
    </kendo:panelBar>
    <script>
        function handle_select(e) {
            // Code to handle the select event.
        }
    </script>

## Event Tags

### kendo:panelBar-activate

Triggered when an item of a PanelBar is activated.


For additional information check the [activate](/api/web/panelbar#events-activate) event documentation.

#### Example
    <kendo:panelBar>
        <kendo:panelBar-activate>
            <script>
                function(e) {
                    // Code to handle the activate event.
                }
            </script>
        </kendo:panelBar-activate>
    </kendo:panelBar>

### kendo:panelBar-collapse

Triggered when an item of a PanelBar is collapsed.


For additional information check the [collapse](/api/web/panelbar#events-collapse) event documentation.

#### Example
    <kendo:panelBar>
        <kendo:panelBar-collapse>
            <script>
                function(e) {
                    // Code to handle the collapse event.
                }
            </script>
        </kendo:panelBar-collapse>
    </kendo:panelBar>

### kendo:panelBar-contentLoad

Fires when content is fetched from an AJAX request.


For additional information check the [contentLoad](/api/web/panelbar#events-contentLoad) event documentation.

#### Example
    <kendo:panelBar>
        <kendo:panelBar-contentLoad>
            <script>
                function(e) {
                    // Code to handle the contentLoad event.
                }
            </script>
        </kendo:panelBar-contentLoad>
    </kendo:panelBar>

### kendo:panelBar-error

Fires when AJAX request results in an error.


For additional information check the [error](/api/web/panelbar#events-error) event documentation.

#### Example
    <kendo:panelBar>
        <kendo:panelBar-error>
            <script>
                function(e) {
                    // Code to handle the error event.
                }
            </script>
        </kendo:panelBar-error>
    </kendo:panelBar>

### kendo:panelBar-expand

Triggered when an item of a PanelBar is expanded.


For additional information check the [expand](/api/web/panelbar#events-expand) event documentation.

#### Example
    <kendo:panelBar>
        <kendo:panelBar-expand>
            <script>
                function(e) {
                    // Code to handle the expand event.
                }
            </script>
        </kendo:panelBar-expand>
    </kendo:panelBar>

### kendo:panelBar-select

Triggered when an item of a PanelBar is selected.


For additional information check the [select](/api/web/panelbar#events-select) event documentation.

#### Example
    <kendo:panelBar>
        <kendo:panelBar-select>
            <script>
                function(e) {
                    // Code to handle the select event.
                }
            </script>
        </kendo:panelBar-select>
    </kendo:panelBar>

