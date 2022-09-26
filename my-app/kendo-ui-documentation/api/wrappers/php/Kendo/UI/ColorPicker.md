---
title: ColorPicker
slug: php-ui-colorpicker
tags: api, php
publish: true
---

# \Kendo\UI\ColorPicker

A PHP wrapper for Kendo UI [ColorPicker](/api/web/colorpicker).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use ColorPicker in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo ColorPicker

    <?php
    // Create a new instance of ColorPicker and specify its id
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');

    // Configure it
    $colorPicker->buttons(true)

    // Output it

    echo $colorPicker->render();
    ?>


## Methods

### buttons
Specifies whether the widget should display the Apply / Cancel buttons.Applicable only for the HSV selector, when a pallete is not specified.

#### Returns
`\Kendo\UI\ColorPicker`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->buttons(true);
    ?>

### change
Fires when a color was selected, either by clicking on it (in the
simple picker), by clicking ENTER or by pressing "Apply" in the HSV
picker.
For additional information check the [change](/api/web/colorpicker#events-change) event documentation.

#### Returns
`\Kendo\UI\ColorPicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### close
Fires when the picker popup is closing.
For additional information check the [close](/api/web/colorpicker#events-close) event documentation.

#### Returns
`\Kendo\UI\ColorPicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->close('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onClose(e) {
            // handle the close event.
        }
    </script>
    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->close('onClose');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->close(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### columns
The number of columns to show in the color dropdown when a pallete is specified.
This is automatically initialized for the "basic" and "websafe" palettes.
If you use a custom palette then you can set this to some value that makes sense for your colors.

#### Returns
`\Kendo\UI\ColorPicker`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->columns(1);
    ?>

### messages
Allows customization of "Apply" / "Cancel" labels.

#### Returns
`\Kendo\UI\ColorPicker`

#### Parameters

##### $value ``



### opacity
Only for the HSV selector.  If true, the widget will display the opacity slider.
Note that currently in HTML5 the <input type="color"> does not support opacity.

#### Returns
`\Kendo\UI\ColorPicker`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->opacity(true);
    ?>

### open
Fires when the picker popup is opening.
For additional information check the [open](/api/web/colorpicker#events-open) event documentation.

#### Returns
`\Kendo\UI\ColorPicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->open('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onOpen(e) {
            // handle the open event.
        }
    </script>
    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->open('onOpen');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->open(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### palette
When a non-null palette argument is supplied, the drop-down will be
a simple color picker that lists the colors. The following are supported:If palette is missing or null, the widget will display the HSV
selector.

#### Returns
`\Kendo\UI\ColorPicker`

#### Parameters

##### $value `string|array`



#### Example  - using string
    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->palette('value');
    ?>

#### Example  - using array
    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->palette(new array());
    ?>

### preview
Only applicable for the HSV selector.Displays the color preview element, along with an input field where the end user can paste a color in a CSS-supported notation.

#### Returns
`\Kendo\UI\ColorPicker`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->preview(true);
    ?>

### select
Fires as a new color is displayed in the drop-down picker.  This is
not necessarily the "final" value; for example this event triggers
when the sliders in the HSV selector are dragged, but then pressing
ESC would cancel the selection and the color will revert to the
original value.
For additional information check the [select](/api/web/colorpicker#events-select) event documentation.

#### Returns
`\Kendo\UI\ColorPicker`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->select('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSelect(e) {
            // handle the select event.
        }
    </script>
    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->select('onSelect');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->select(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### tileSize

The size of a color cell.

#### Returns
`\Kendo\UI\ColorPicker`

#### Parameters

##### $value `float|\Kendo\UI\ColorPickerTileSize|array`




#### Example  - using float
    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->tileSize(1);
    ?>


#### Example - using [\Kendo\UI\ColorPickerTileSize](/api/wrappers/php/Kendo/UI/ColorPickerTileSize)
    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $tileSize = new \Kendo\UI\ColorPickerTileSize();
    $height = 1;
    $tileSize->height($height);
    $colorPicker->tileSize($tileSize);
    ?>

#### Example - using array

    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $height = 1;
    $colorPicker->tileSize(array('height' => $height));
    ?>

### toolIcon
A CSS class name to display an icon in the color picker button.  If
specified, the HTML for the element will look like this:

#### Returns
`\Kendo\UI\ColorPicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->toolIcon('value');
    ?>

### value
The initially selected color.
Note that when initializing the widget from an <input> element, the initial color will be decided by the field instead.

#### Returns
`\Kendo\UI\ColorPicker`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $colorPicker = new \Kendo\UI\ColorPicker('ColorPicker');
    $colorPicker->value('value');
    ?>

