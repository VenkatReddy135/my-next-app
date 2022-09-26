---
title: FlatColorPicker
slug: php-ui-flatcolorpicker
tags: api, php
publish: true
---

# \Kendo\UI\FlatColorPicker

A PHP wrapper for Kendo UI [FlatColorPicker](/api/web/flatcolorpicker).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use FlatColorPicker in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo FlatColorPicker

    <?php
    // Create a new instance of FlatColorPicker and specify its id
    $flatColorPicker = new \Kendo\UI\FlatColorPicker('FlatColorPicker');

    // Configure it
    $flatColorPicker->autoupdate(true)

    // Output it

    echo $flatColorPicker->render();
    ?>


## Methods

### autoupdate
Specifies whether the UI should be updated while the user is typing in
the input field, whenever a valid color can be parsed.  If you pass
false for this, the widget will update only when ENTER is pressed.

#### Returns
`\Kendo\UI\FlatColorPicker`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $flatColorPicker = new \Kendo\UI\FlatColorPicker('FlatColorPicker');
    $flatColorPicker->autoupdate(true);
    ?>

### buttons
Specifies whether the widget should display the Apply / Cancel buttons.

#### Returns
`\Kendo\UI\FlatColorPicker`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $flatColorPicker = new \Kendo\UI\FlatColorPicker('FlatColorPicker');
    $flatColorPicker->buttons(true);
    ?>

### change
Triggers when a new color has been selected.
For additional information check the [change](/api/web/flatcolorpicker#events-change) event documentation.

#### Returns
`\Kendo\UI\FlatColorPicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $flatColorPicker = new \Kendo\UI\FlatColorPicker('FlatColorPicker');
    $flatColorPicker->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $flatColorPicker = new \Kendo\UI\FlatColorPicker('FlatColorPicker');
    $flatColorPicker->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $flatColorPicker = new \Kendo\UI\FlatColorPicker('FlatColorPicker');
    $flatColorPicker->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### messages
Allows customization of "Apply" / "Cancel" labels.

#### Returns
`\Kendo\UI\FlatColorPicker`

#### Parameters

##### $value ``



### opacity
Specifies whether we should display the opacity slider to allow
selection of transparency.

#### Returns
`\Kendo\UI\FlatColorPicker`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $flatColorPicker = new \Kendo\UI\FlatColorPicker('FlatColorPicker');
    $flatColorPicker->opacity(true);
    ?>

### preview
Specifies whether we should display the preview bar which displays the
current color and the input field.

#### Returns
`\Kendo\UI\FlatColorPicker`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $flatColorPicker = new \Kendo\UI\FlatColorPicker('FlatColorPicker');
    $flatColorPicker->preview(true);
    ?>

### value
Specifies the initially selected color.

#### Returns
`\Kendo\UI\FlatColorPicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $flatColorPicker = new \Kendo\UI\FlatColorPicker('FlatColorPicker');
    $flatColorPicker->value('value');
    ?>

