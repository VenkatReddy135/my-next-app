---
title: ChartValueAxisItemTitle
slug: php-dataviz-ui-chartvalueaxisitemtitle
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartValueAxisItemTitle

A PHP class representing the title setting of ChartValueAxisItem.


## Methods

### background
The background color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $title->background('value');
    ?>

### border

The border of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemTitle`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartValueAxisItemTitleBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemTitleBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemTitleBorder)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $border = new \Kendo\Dataviz\UI\ChartValueAxisItemTitleBorder();
    $color = 'value';
    $border->color($color);
    $title->border($border);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $color = 'value';
    $title->border(array('color' => $color));
    ?>

### color
The text color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $title->color('value');
    ?>

### font
The font style of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $title->font('value');
    ?>

### margin

The margin of the title. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemTitle`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartValueAxisItemTitleMargin|array`




#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $title->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemTitleMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemTitleMargin)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $margin = new \Kendo\Dataviz\UI\ChartValueAxisItemTitleMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $title->margin($margin);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $bottom = 1;
    $title->margin(array('bottom' => $bottom));
    ?>

### padding

The padding of the title. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemTitle`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartValueAxisItemTitlePadding|array`




#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $title->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartValueAxisItemTitlePadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartValueAxisItemTitlePadding)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $padding = new \Kendo\Dataviz\UI\ChartValueAxisItemTitlePadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $title->padding($padding);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $bottom = 1;
    $title->padding(array('bottom' => $bottom));
    ?>

### position
The position of the title.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $title->position('value');
    ?>

### rotation
The rotation angle of the title. By default the title is not rotated.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemTitle`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $title->rotation(1);
    ?>

### text
The text of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $title->text('value');
    ?>

### visible
If set to true the chart will display the value axis title. By default the value axis title is visible.

#### Returns
`\Kendo\Dataviz\UI\ChartValueAxisItemTitle`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartValueAxisItemTitle();
    $title->visible(true);
    ?>

