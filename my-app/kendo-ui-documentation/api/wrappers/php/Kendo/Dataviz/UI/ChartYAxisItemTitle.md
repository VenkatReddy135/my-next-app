---
title: ChartYAxisItemTitle
slug: php-dataviz-ui-chartyaxisitemtitle
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartYAxisItemTitle

A PHP class representing the title setting of ChartYAxisItem.


## Methods

### background
The background color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $title->background('value');
    ?>

### border

The border of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemTitle`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartYAxisItemTitleBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemTitleBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemTitleBorder)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $border = new \Kendo\Dataviz\UI\ChartYAxisItemTitleBorder();
    $color = 'value';
    $border->color($color);
    $title->border($border);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $color = 'value';
    $title->border(array('color' => $color));
    ?>

### color
The text color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $title->color('value');
    ?>

### font
The font style of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $title->font('value');
    ?>

### margin

The margin of the title. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemTitle`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartYAxisItemTitleMargin|array`




#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $title->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemTitleMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemTitleMargin)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $margin = new \Kendo\Dataviz\UI\ChartYAxisItemTitleMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $title->margin($margin);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $bottom = 1;
    $title->margin(array('bottom' => $bottom));
    ?>

### padding

The padding of the title. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemTitle`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartYAxisItemTitlePadding|array`




#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $title->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartYAxisItemTitlePadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartYAxisItemTitlePadding)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $padding = new \Kendo\Dataviz\UI\ChartYAxisItemTitlePadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $title->padding($padding);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $bottom = 1;
    $title->padding(array('bottom' => $bottom));
    ?>

### position
The position of the title.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $title->position('value');
    ?>

### rotation
The rotation angle of the title. By default the title is not rotated.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemTitle`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $title->rotation(1);
    ?>

### text
The text of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $title->text('value');
    ?>

### visible
If set to true the chart will display the scatter chart y axis title. By default the scatter chart y axis title is visible.

#### Returns
`\Kendo\Dataviz\UI\ChartYAxisItemTitle`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartYAxisItemTitle();
    $title->visible(true);
    ?>

