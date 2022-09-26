---
title: Menu
slug: php-ui-menu
tags: api, php
publish: true
---

# \Kendo\UI\Menu

A PHP wrapper for Kendo UI [Menu](/api/web/menu).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use Menu in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo Menu

    <?php
    // Create a new instance of Menu and specify its id
    $menu = new \Kendo\UI\Menu('Menu');

    // Configure it
    $menu->closeOnClick(true)

    // Output it

    echo $menu->render();
    ?>


## Methods

### activate
Fires when a sub menu gets opened and its animation finished.
For additional information check the [activate](/api/web/menu#events-activate) event documentation.

#### Returns
`\Kendo\UI\Menu`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->activate('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onActivate(e) {
            // handle the activate event.
        }
    </script>
    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->activate('onActivate');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->activate(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### animation

A collection of Animation objects, used to change default animations. A value of false will disable all animations in the widget.Available animations for the Menu are listed below.  Each animation has a reverse options which is used for the close effect by default, but can be over-ridden
by setting the close animation.  Each animation also has a direction which can be set off the animation (i.e. slideIn:Down).

#### Returns
`\Kendo\UI\Menu`

#### Parameters

##### $value `\Kendo\UI\MenuAnimation|array`


#### Example - using [\Kendo\UI\MenuAnimation](/api/wrappers/php/Kendo/UI/MenuAnimation)
    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $animation = new \Kendo\UI\MenuAnimation();
    $close = new \Kendo\UI\MenuAnimationClose();
    $animation->close($close);
    $menu->animation($animation);
    ?>

#### Example - using array

    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $close = new \Kendo\UI\MenuAnimationClose();
    $menu->animation(array('close' => $close));
    ?>

### close
Fires before a sub menu gets closed. You can cancel this event to prevent closure.
For additional information check the [close](/api/web/menu#events-close) event documentation.

#### Returns
`\Kendo\UI\Menu`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->close('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onClose(e) {
            // handle the close event.
        }
    </script>
    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->close('onClose');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->close(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### closeOnClick
Specifies that sub menus should close after item selection (provided they won't navigate).

#### Returns
`\Kendo\UI\Menu`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->closeOnClick(true);
    ?>

### deactivate
Fires when a sub menu gets closed and its animation finished.
For additional information check the [deactivate](/api/web/menu#events-deactivate) event documentation.

#### Returns
`\Kendo\UI\Menu`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->deactivate('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onDeactivate(e) {
            // handle the deactivate event.
        }
    </script>
    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->deactivate('onDeactivate');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->deactivate(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### direction
Specifies Menu opening direction. Can be "top", "bottom", "left", "right".
You can also specify different direction for root and sub menu items, separating them with space. The example below will initialize the root menu to open upwards and
its sub menus to the left.

#### Returns
`\Kendo\UI\Menu`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->direction('value');
    ?>

### hoverDelay
Specifies the delay in ms before the menu is opened/closed - used to avoid accidental closure on leaving.

#### Returns
`\Kendo\UI\Menu`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->hoverDelay(1);
    ?>

### addItem

Adds one or more MenuItem to the Menu.

#### Returns
`\Kendo\UI\Menu`

#### Parameters

##### $value[, $value2, ...] `\Kendo\UI\MenuItem|array`

#### Example - using \Kendo\UI\MenuItem

    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $item = new \Kendo\UI\MenuItem();
    $enabled = true;
    $item->enabled($enabled);
    $menu->addItem($item);
    ?>

#### Example - using array

    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $enabled = true;
    $menu->addItem(array('enabled' => $enabled));
    ?>

#### Example - adding more than one MenuItem

    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $first  = new \Kendo\UI\MenuItem();
    $second = new \Kendo\UI\MenuItem();
    $menu->addItem($first, $second);
    ?>

### open
Fires before a sub menu gets opened. You can cancel this event to prevent opening the sub menu.
For additional information check the [open](/api/web/menu#events-open) event documentation.

#### Returns
`\Kendo\UI\Menu`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->open('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onOpen(e) {
            // handle the open event.
        }
    </script>
    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->open('onOpen');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->open(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### openOnClick
Specifies that the root sub menus will be opened on item click.

#### Returns
`\Kendo\UI\Menu`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->openOnClick(true);
    ?>

### orientation
Root menu orientation. Could be horizontal or vertical.

#### Returns
`\Kendo\UI\Menu`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->orientation('value');
    ?>

### popupCollision
Specifies how Menu should adjust to screen boundaries. By default the strategy is "fit" for a sub menu with a horizontal parent,
meaning it will move to fit in screen boundaries in all directions, and "fit flip" for a sub menu with vertical parent, meaning it will fit vertically and flip over
its parent horizontally. You can also switch off the screen boundary detection completely if you set the popupCollision to false.

#### Returns
`\Kendo\UI\Menu`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->popupCollision('value');
    ?>

### select
Fires when a menu item gets selected.
For additional information check the [select](/api/web/menu#events-select) event documentation.

#### Returns
`\Kendo\UI\Menu`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->select('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelect(e) {
            // handle the select event.
        }
    </script>
    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->select('onSelect');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $menu = new \Kendo\UI\Menu('Menu');
    $menu->select(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

