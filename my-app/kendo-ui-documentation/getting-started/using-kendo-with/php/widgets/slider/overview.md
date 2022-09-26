---
title: Overview
meta_title: How to use the Slider PHP class, server-side wrapper for Kendo UI Slider widget
meta_description: Learn how to create Kendo UI Slider for PHP, handle Kendo UI Slider Events, access an existing Slider.
slug: php-slider-overview
publish: true
relatedDocs: php-ui-slider
---

# Slider

The Kendo Slider for PHP is a server-side wrapper for the [Kendo UI Slider](http://docs.kendoui.com/api/web/slider) widget.

## Getting Started

Here is how to configure a simple Kendo Slider:

1. Follow the steps from the [introduction](/getting-started/using-kendo-with/php/introduction) - include the autoloader, JavaScript and CSS files.
1. Create a [slider](/api/wrappers/php/Kendo/UI/Slider).

        <?php
        $slider = new \Kendo\UI\Slider('slider');
        $slider->value(42);
        ?>

1. Output the slider by echo-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

        <?php
        echo $slider->render();
        ?>

## Getting Client-side Reference

You can reference the client-side Kendo Slider instance via [jQuery.data()](http://api.jquery.com/jQuery.data/).
Once a reference has been established, you can use the [API](/api/web/slider#methods) to control its behavior.

### Example

    <?php
    $slider = new \Kendo\UI\Slider('slider');
    echo $slider->render();
    ?>
    <script>
    $(function() {
        // The constructor parameter is used as the 'id' HTML attribute of the slider
        var slider = $("#slider").data("kendoSlider");
    });
    </script>

## Handling Events

You can subscribe to all slider [events](/api/web/slider#events).

### Example - subscribing by specifying JavaScript function name

    <?php
    $slider = new \Kendo\UI\Slider('slider');

    // The 'slider_change' JavaScript function will handle the 'change' event of the slider
    $slider->change('slider_change');

    echo $slider->render();
    ?>
    <script>
    function slider_change() {
        // Handle the change event
    }
    </script>

### Example - providing inline JavaScript code

    <?php
    $slider = new \Kendo\UI\Slider('slider');

    // Provide inline JavaScript code that will handle the 'change' event of the slider
    $slider->change('function() { /* Handle the change event */ }');

    echo $slider->render();
    ?>
