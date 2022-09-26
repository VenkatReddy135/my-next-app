---
title: Layout
slug: spa-layout
ordinal: 3
publish: true
---

# Layout Overview

The Layout class inherits from the View and provides the additional functionality of rendering other views/layouts in the element.

## Layout Showing a View

    <div id="app"></div>

    <script>
        var view = new kendo.View("<span>Foo</span>");

        var layout = new kendo.Layout("<header>Header</header><section id='content'></section><footer></footer>");

        layout.render($("#app"));

        layout.showIn("#content", view);
    </script>

As the layout itself is a view, a layout instance can also be passed to the `showIn` method, allowing multiple nesting of layouts.

When a view is rendered in a location already used for the rendering of a view, the previous view is hidden (its element is detached from the DOM), and the previous view `hide` event is hidden.


## Layout Switching Views

    <div id="app"></div>

    <script>
        var foo = new kendo.View("<span>Foo</span>", { hide: function() { console.log("Foo is hidden now"); });
        var bar = new kendo.View("<span>Bar</span>");

        var layout = new kendo.Layout("<header>Header</header><section id='content'></section><footer></footer>");

        layout.render($("#app"));

        layout.showIn("#content", foo);
        layout.showIn("#content", bar);
    </script>
