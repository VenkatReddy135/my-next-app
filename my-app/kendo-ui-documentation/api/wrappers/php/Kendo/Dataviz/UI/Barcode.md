---
title: Barcode
slug: php-dataviz-ui-barcode
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\Barcode

A PHP wrapper for Kendo UI [Barcode](/api/dataviz/barcode).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use Barcode in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo Barcode

    <?php
    // Create a new instance of Barcode and specify its id
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');

    // Configure it
    $barcode->background('value')

    // Output it

    echo $barcode->render();
    ?>


## Methods

### background
The background of the barcode area.
Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\Barcode`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');
    $barcode->background('value');
    ?>

### border

The border of the barcode area.

#### Returns
`\Kendo\Dataviz\UI\Barcode`

#### Parameters

##### $value `\Kendo\Dataviz\UI\BarcodeBorder|array`


#### Example - using [\Kendo\Dataviz\UI\BarcodeBorder](/api/wrappers/php/Kendo/Dataviz/UI/BarcodeBorder)
    <?php
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');
    $border = new \Kendo\Dataviz\UI\BarcodeBorder();
    $color = 'value';
    $border->color($color);
    $barcode->border($border);
    ?>

#### Example - using array

    <?php
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');
    $color = 'value';
    $barcode->border(array('color' => $color));
    ?>

### checksum
If set to true the barcode will not display the checksum digit next to the value in the text area.

#### Returns
`\Kendo\Dataviz\UI\Barcode`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');
    $barcode->checksum(true);
    ?>

### color
The color of the bar elements.
Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\Barcode`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');
    $barcode->color('value');
    ?>

### height
The height of the barcode in pixels.  By default the height is 100.

#### Returns
`\Kendo\Dataviz\UI\Barcode`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');
    $barcode->height(1);
    ?>

### padding

The padding of the barcode.

#### Returns
`\Kendo\Dataviz\UI\Barcode`

#### Parameters

##### $value `\Kendo\Dataviz\UI\BarcodePadding|array`


#### Example - using [\Kendo\Dataviz\UI\BarcodePadding](/api/wrappers/php/Kendo/Dataviz/UI/BarcodePadding)
    <?php
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');
    $padding = new \Kendo\Dataviz\UI\BarcodePadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $barcode->padding($padding);
    ?>

#### Example - using array

    <?php
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');
    $bottom = 1;
    $barcode->padding(array('bottom' => $bottom));
    ?>

### renderAs
Sets the preferred rendering engine.
If it is not supported by the browser, the Barcode will switch to the first available mode.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\Barcode`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');
    $barcode->renderAs('value');
    ?>

### text

Can be set to a JavaScript object which represents the text configuration.

#### Returns
`\Kendo\Dataviz\UI\Barcode`

#### Parameters

##### $value `\Kendo\Dataviz\UI\BarcodeText|array`


#### Example - using [\Kendo\Dataviz\UI\BarcodeText](/api/wrappers/php/Kendo/Dataviz/UI/BarcodeText)
    <?php
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');
    $text = new \Kendo\Dataviz\UI\BarcodeText();
    $color = 'value';
    $text->color($color);
    $barcode->text($text);
    ?>

#### Example - using array

    <?php
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');
    $color = 'value';
    $barcode->text(array('color' => $color));
    ?>

### type
The symbology (encoding) the barcode will use.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\Barcode`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');
    $barcode->type('value');
    ?>

### value
The initial value of the Barcode

#### Returns
`\Kendo\Dataviz\UI\Barcode`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');
    $barcode->value('value');
    ?>

### width
The width of the barcode in pixels.  By default the width is 300.

#### Returns
`\Kendo\Dataviz\UI\Barcode`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $barcode = new \Kendo\Dataviz\UI\Barcode('Barcode');
    $barcode->width(1);
    ?>

