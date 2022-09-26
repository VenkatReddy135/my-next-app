---
title: ColorPalette
slug: php-ui-colorpalette
tags: api, php
publish: true
---

# \Kendo\UI\ColorPalette

A PHP wrapper for Kendo UI [ColorPalette](/api/web/colorpalette).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use ColorPalette in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo ColorPalette

    <?php
    // Create a new instance of ColorPalette and specify its id
    $colorPalette = new \Kendo\UI\ColorPalette('ColorPalette');

    // Configure it
    $colorPalette->columns(1)

    // Output it

    echo $colorPalette->render();
    ?>


## Methods

### change
Triggers when a new color has been changed.
For additional information check the [change](/api/web/colorpalette#events-change) event documentation.

#### Returns
`\Kendo\UI\ColorPalette`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $colorPalette = new \Kendo\UI\ColorPalette('ColorPalette');
    $colorPalette->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $colorPalette = new \Kendo\UI\ColorPalette('ColorPalette');
    $colorPalette->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $colorPalette = new \Kendo\UI\ColorPalette('ColorPalette');
    $colorPalette->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### columns
The number of columns to display.  When you use the "websafe" palette, this will automatically default to 18.

#### Returns
`\Kendo\UI\ColorPalette`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $colorPalette = new \Kendo\UI\ColorPalette('ColorPalette');
    $colorPalette->columns(1);
    ?>

### palette
Specifies the color palette to display.
It can be a string with comma-separated colors in hex representation, an array of kendo.Color object objects or of strings that parseColor understands.  As a shortcut, you can pass "basic" to get the simple palette (this is the default) or "websafe" to get the Web-safe palette.

#### Returns
`\Kendo\UI\ColorPalette`

#### Parameters

##### $value `string|array`



#### Example  - using string
    <?php
    $colorPalette = new \Kendo\UI\ColorPalette('ColorPalette');
    $colorPalette->palette('value');
    ?>

#### Example  - using array
    <?php
    $colorPalette = new \Kendo\UI\ColorPalette('ColorPalette');
    $colorPalette->palette(new array());
    ?>

### tileSize

The size of a color cell.

#### Returns
`\Kendo\UI\ColorPalette`

#### Parameters

##### $value `float|\Kendo\UI\ColorPaletteTileSize|array`




#### Example  - using float
    <?php
    $colorPalette = new \Kendo\UI\ColorPalette('ColorPalette');
    $colorPalette->tileSize(1);
    ?>


#### Example - using [\Kendo\UI\ColorPaletteTileSize](/api/wrappers/php/Kendo/UI/ColorPaletteTileSize)
    <?php
    $colorPalette = new \Kendo\UI\ColorPalette('ColorPalette');
    $tileSize = new \Kendo\UI\ColorPaletteTileSize();
    $height = 1;
    $tileSize->height($height);
    $colorPalette->tileSize($tileSize);
    ?>

#### Example - using array

    <?php
    $colorPalette = new \Kendo\UI\ColorPalette('ColorPalette');
    $height = 1;
    $colorPalette->tileSize(array('height' => $height));
    ?>

### value
Specifies the initially selected color.

#### Returns
`\Kendo\UI\ColorPalette`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $colorPalette = new \Kendo\UI\ColorPalette('ColorPalette');
    $colorPalette->value('value');
    ?>

