---
title: QRCodeBorder
slug: php-dataviz-ui-qrcodeborder
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\QRCodeBorder

A PHP class representing the border setting of QRCode.


## Methods

### color
The color of the border. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\QRCodeBorder`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\QRCodeBorder();
    $border->color('value');
    ?>

### width
The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.

#### Returns
`\Kendo\Dataviz\UI\QRCodeBorder`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $border = new \Kendo\Dataviz\UI\QRCodeBorder();
    $border->width(1);
    ?>

