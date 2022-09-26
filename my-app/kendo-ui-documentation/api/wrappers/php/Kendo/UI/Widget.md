---
title: Widget
slug: php-ui-widget
tags: api, php
publish: true
---

# \Kendo\UI\Widget

The abstract base class of all PHP wrappers of the Kendo UI widgets.

## Methods

### attr

Sets an attribute of the HTML element which will be rendered by the widget.

#### Returns

`\Kendo\UI\Widget`

#### Parameters

##### $key `string`

The name of the attribute.

##### $value `mixed`

The value of the attribute.

#### Example

    <?php
    $widget->attr('style', 'width: 100px');
    ?>

### html

Returns only the output HTML of the widget.

#### Returns

`string`

#### Example

    <?php
    echo $widget->html();
    ?>


### render

Returns the output HTML of the widget and its initialization JavaScript (enclosed in a `script` block).

#### Returns

`string`

#### Example

    <?php
    echo $widget->render();
    ?>

### script

Returns the initialization JavaScript of the widget (without a `script` block).

#### Returns

`string`

#### Parameters

##### $executeOnDomReady `boolean` *(default: true*) *(optional)*

Specifies if the initialization JavaScript should be executed when DOM is ready.

#### Example

    <script>
        $(function() {
     <?php
        echo $widget->script(false);
     ?>
        });
    </script>

