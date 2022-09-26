---
title: QRCode
slug: php-dataviz-ui-qrcode
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\QRCode

A PHP wrapper for Kendo UI [QRCode](/api/dataviz/qrcode).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use QRCode in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo QRCode

    <?php
    // Create a new instance of QRCode and specify its id
    $qRCode = new \Kendo\Dataviz\UI\QRCode('QRCode');

    // Configure it
    $qRCode->background('value')

    // Output it

    echo $qRCode->render();
    ?>


## Methods

### background
The background color of the QR code. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\QRCode`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $qRCode = new \Kendo\Dataviz\UI\QRCode('QRCode');
    $qRCode->background('value');
    ?>

### border

The border of the QR code.

#### Returns
`\Kendo\Dataviz\UI\QRCode`

#### Parameters

##### $value `\Kendo\Dataviz\UI\QRCodeBorder|array`


#### Example - using [\Kendo\Dataviz\UI\QRCodeBorder](/api/wrappers/php/Kendo/Dataviz/UI/QRCodeBorder)
    <?php
    $qRCode = new \Kendo\Dataviz\UI\QRCode('QRCode');
    $border = new \Kendo\Dataviz\UI\QRCodeBorder();
    $color = 'value';
    $border->color($color);
    $qRCode->border($border);
    ?>

#### Example - using array

    <?php
    $qRCode = new \Kendo\Dataviz\UI\QRCode('QRCode');
    $color = 'value';
    $qRCode->border(array('color' => $color));
    ?>

### color
The color of the QR code. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\QRCode`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $qRCode = new \Kendo\Dataviz\UI\QRCode('QRCode');
    $qRCode->color('value');
    ?>

### encoding
The encoding mode used to encode the value.The possible values are:

#### Returns
`\Kendo\Dataviz\UI\QRCode`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $qRCode = new \Kendo\Dataviz\UI\QRCode('QRCode');
    $qRCode->encoding('value');
    ?>

### errorCorrection
The error correction level used to encode the value.The possible values are:

#### Returns
`\Kendo\Dataviz\UI\QRCode`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $qRCode = new \Kendo\Dataviz\UI\QRCode('QRCode');
    $qRCode->errorCorrection('value');
    ?>

### renderAs
Sets the preferred rendering engine.
If it is not supported by the browser, the QRCode will switch to the first available mode.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\QRCode`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $qRCode = new \Kendo\Dataviz\UI\QRCode('QRCode');
    $qRCode->renderAs('value');
    ?>

### size
Specifies the size of a QR code in pixels (i.e. "200px"). Numeric values are treated as pixels. If no size is specified, it will be determined from the element width and height. In case the element does not have width or height bigger than zero, a default value of 200 pixels will be used.

#### Returns
`\Kendo\Dataviz\UI\QRCode`

#### Parameters

##### $value `float|string`



#### Example  - using float
    <?php
    $qRCode = new \Kendo\Dataviz\UI\QRCode('QRCode');
    $qRCode->size(1);
    ?>

#### Example  - using string
    <?php
    $qRCode = new \Kendo\Dataviz\UI\QRCode('QRCode');
    $qRCode->size('value');
    ?>

### value
The value of the QRCode.

#### Returns
`\Kendo\Dataviz\UI\QRCode`

#### Parameters

##### $value `float|string`



#### Example  - using float
    <?php
    $qRCode = new \Kendo\Dataviz\UI\QRCode('QRCode');
    $qRCode->value(1);
    ?>

#### Example  - using string
    <?php
    $qRCode = new \Kendo\Dataviz\UI\QRCode('QRCode');
    $qRCode->value('value');
    ?>

