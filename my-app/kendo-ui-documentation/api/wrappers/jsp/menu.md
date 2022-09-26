---
title: menu
slug: jsp-menu
tags: api, java
publish: true
---

# \<kendo:menu\>
A JSP wrapper for Kendo UI [Menu](/api/web/menu).

## Configuration Attributes

### closeOnClick `boolean`

Specifies that sub menus should close after item selection (provided they won't navigate).

#### Example
    <kendo:menu closeOnClick="closeOnClick">
    </kendo:menu>

### direction `java.lang.String`

Specifies Menu opening direction. Can be "top", "bottom", "left", "right".
You can also specify different direction for root and sub menu items, separating them with space. The example below will initialize the root menu to open upwards and
its sub menus to the left.

#### Example
    <kendo:menu direction="direction">
    </kendo:menu>

### hoverDelay `float`

Specifies the delay in ms before the menu is opened/closed - used to avoid accidental closure on leaving.

#### Example
    <kendo:menu hoverDelay="hoverDelay">
    </kendo:menu>

### openOnClick `boolean`

Specifies that the root sub menus will be opened on item click.

#### Example
    <kendo:menu openOnClick="openOnClick">
    </kendo:menu>

### orientation `java.lang.String`

Root menu orientation. Could be horizontal or vertical.

#### Example
    <kendo:menu orientation="orientation">
    </kendo:menu>

### popupCollision `java.lang.String`

Specifies how Menu should adjust to screen boundaries. By default the strategy is "fit" for a sub menu with a horizontal parent,
meaning it will move to fit in screen boundaries in all directions, and "fit flip" for a sub menu with vertical parent, meaning it will fit vertically and flip over
its parent horizontally. You can also switch off the screen boundary detection completely if you set the popupCollision to false.

#### Example
    <kendo:menu popupCollision="popupCollision">
    </kendo:menu>


##  Configuration JSP Tags

### kendo:menu-animation

A collection of Animation objects, used to change default animations. A value of false will disable all animations in the widget.Available animations for the Menu are listed below.  Each animation has a reverse options which is used for the close effect by default, but can be over-ridden
by setting the close animation.  Each animation also has a direction which can be set off the animation (i.e. slideIn:Down).

More documentation is available at [kendo:menu-animation](menu/animation).

#### Example

    <kendo:menu>
        <kendo:menu-animation></kendo:menu-animation>
    </kendo:menu>

### kendo:menu-items

Contains the items of the menu widget

More documentation is available at [kendo:menu-items](menu/items).

#### Example

    <kendo:menu>
        <kendo:menu-items></kendo:menu-items>
    </kendo:menu>


## Event Attributes

### close `String`

Fires before a sub menu gets closed. You can cancel this event to prevent closure.


For additional information check the [close](/api/web/menu#events-close) event documentation.

#### Example
    <kendo:menu close="handle_close">
    </kendo:menu>
    <script>
        function handle_close(e) {
            // Code to handle the close event.
        }
    </script>

### open `String`

Fires before a sub menu gets opened. You can cancel this event to prevent opening the sub menu.


For additional information check the [open](/api/web/menu#events-open) event documentation.

#### Example
    <kendo:menu open="handle_open">
    </kendo:menu>
    <script>
        function handle_open(e) {
            // Code to handle the open event.
        }
    </script>

### activate `String`

Fires when a sub menu gets opened and its animation finished.


For additional information check the [activate](/api/web/menu#events-activate) event documentation.

#### Example
    <kendo:menu activate="handle_activate">
    </kendo:menu>
    <script>
        function handle_activate(e) {
            // Code to handle the activate event.
        }
    </script>

### deactivate `String`

Fires when a sub menu gets closed and its animation finished.


For additional information check the [deactivate](/api/web/menu#events-deactivate) event documentation.

#### Example
    <kendo:menu deactivate="handle_deactivate">
    </kendo:menu>
    <script>
        function handle_deactivate(e) {
            // Code to handle the deactivate event.
        }
    </script>

### select `String`

Fires when a menu item gets selected.


For additional information check the [select](/api/web/menu#events-select) event documentation.

#### Example
    <kendo:menu select="handle_select">
    </kendo:menu>
    <script>
        function handle_select(e) {
            // Code to handle the select event.
        }
    </script>

## Event Tags

### kendo:menu-close

Fires before a sub menu gets closed. You can cancel this event to prevent closure.


For additional information check the [close](/api/web/menu#events-close) event documentation.

#### Example
    <kendo:menu>
        <kendo:menu-close>
            <script>
                function(e) {
                    // Code to handle the close event.
                }
            </script>
        </kendo:menu-close>
    </kendo:menu>

### kendo:menu-open

Fires before a sub menu gets opened. You can cancel this event to prevent opening the sub menu.


For additional information check the [open](/api/web/menu#events-open) event documentation.

#### Example
    <kendo:menu>
        <kendo:menu-open>
            <script>
                function(e) {
                    // Code to handle the open event.
                }
            </script>
        </kendo:menu-open>
    </kendo:menu>

### kendo:menu-activate

Fires when a sub menu gets opened and its animation finished.


For additional information check the [activate](/api/web/menu#events-activate) event documentation.

#### Example
    <kendo:menu>
        <kendo:menu-activate>
            <script>
                function(e) {
                    // Code to handle the activate event.
                }
            </script>
        </kendo:menu-activate>
    </kendo:menu>

### kendo:menu-deactivate

Fires when a sub menu gets closed and its animation finished.


For additional information check the [deactivate](/api/web/menu#events-deactivate) event documentation.

#### Example
    <kendo:menu>
        <kendo:menu-deactivate>
            <script>
                function(e) {
                    // Code to handle the deactivate event.
                }
            </script>
        </kendo:menu-deactivate>
    </kendo:menu>

### kendo:menu-select

Fires when a menu item gets selected.


For additional information check the [select](/api/web/menu#events-select) event documentation.

#### Example
    <kendo:menu>
        <kendo:menu-select>
            <script>
                function(e) {
                    // Code to handle the select event.
                }
            </script>
        </kendo:menu-select>
    </kendo:menu>

