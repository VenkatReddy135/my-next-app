---
title: BarcodeText
slug: php-dataviz-ui-barcodetext
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\BarcodeText

A PHP class representing the text setting of Barcode.


## Methods

### color
The color of the text. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\BarcodeText`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $text = new \Kendo\Dataviz\UI\BarcodeText();
    $text->color('value');
    ?>

### font
The font of the text.

#### Returns
`\Kendo\Dataviz\UI\BarcodeText`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $text = new \Kendo\Dataviz\UI\BarcodeText();
    $text->font('value');
    ?>

### margin

The margin of the text

#### Returns
`\Kendo\Dataviz\UI\BarcodeText`

#### Parameters

##### $value `\Kendo\Dataviz\UI\BarcodeTextMargin|array`


#### Example - using [\Kendo\Dataviz\UI\BarcodeTextMargin](/api/wrappers/php/Kendo/Dataviz/UI/BarcodeTextMargin)
    <?php
    $text = new \Kendo\Dataviz\UI\BarcodeText();
    $margin = new \Kendo\Dataviz\UI\BarcodeTextMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $text->margin($margin);
    ?>

#### Example - using array

    <?php
    $text = new \Kendo\Dataviz\UI\BarcodeText();
    $bottom = 1;
    $text->margin(array('bottom' => $bottom));
    ?>

### visible
If set to false the barcode will not display the value as a text below the barcode lines.

#### Returns
`\Kendo\Dataviz\UI\BarcodeText`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $text = new \Kendo\Dataviz\UI\BarcodeText();
    $text->visible(true);
    ?>

