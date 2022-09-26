---
title: ChartXAxisItemTitle
slug: php-dataviz-ui-chartxaxisitemtitle
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartXAxisItemTitle

A PHP class representing the title setting of ChartXAxisItem.


## Methods

### background
The background color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $title->background('value');
    ?>

### border

The border of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemTitle`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartXAxisItemTitleBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemTitleBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemTitleBorder)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $border = new \Kendo\Dataviz\UI\ChartXAxisItemTitleBorder();
    $color = 'value';
    $border->color($color);
    $title->border($border);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $color = 'value';
    $title->border(array('color' => $color));
    ?>

### color
The text color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $title->color('value');
    ?>

### font
The font style of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $title->font('value');
    ?>

### margin

The margin of the title. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemTitle`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartXAxisItemTitleMargin|array`




#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $title->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemTitleMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemTitleMargin)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $margin = new \Kendo\Dataviz\UI\ChartXAxisItemTitleMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $title->margin($margin);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $bottom = 1;
    $title->margin(array('bottom' => $bottom));
    ?>

### padding

The padding of the title. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemTitle`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartXAxisItemTitlePadding|array`




#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $title->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartXAxisItemTitlePadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartXAxisItemTitlePadding)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $padding = new \Kendo\Dataviz\UI\ChartXAxisItemTitlePadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $title->padding($padding);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $bottom = 1;
    $title->padding(array('bottom' => $bottom));
    ?>

### position
The position of the title.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $title->position('value');
    ?>

### rotation
The rotation angle of the title. By default the title is not rotated.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemTitle`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $title->rotation(1);
    ?>

### text
The text of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $title->text('value');
    ?>

### visible
If set to true the chart will display the scatter chart x axis title. By default the scatter chart x axis title is visible.

#### Returns
`\Kendo\Dataviz\UI\ChartXAxisItemTitle`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartXAxisItemTitle();
    $title->visible(true);
    ?>

