---
title: ChartCategoryAxisItemTitle
slug: php-dataviz-ui-chartcategoryaxisitemtitle
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle

A PHP class representing the title setting of ChartCategoryAxisItem.


## Methods

### background
The background color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $title->background('value');
    ?>

### border

The border of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemTitle`

#### Parameters

##### $value `\Kendo\Dataviz\UI\ChartCategoryAxisItemTitleBorder|array`


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemTitleBorder](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemTitleBorder)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $border = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitleBorder();
    $color = 'value';
    $border->color($color);
    $title->border($border);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $color = 'value';
    $title->border(array('color' => $color));
    ?>

### color
The text color of the title. Accepts a valid CSS color string, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $title->color('value');
    ?>

### font
The font style of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $title->font('value');
    ?>

### margin

The margin of the title. A numeric value will set all margins.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemTitle`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartCategoryAxisItemTitleMargin|array`




#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $title->margin(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemTitleMargin](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemTitleMargin)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $margin = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitleMargin();
    $bottom = 1;
    $margin->bottom($bottom);
    $title->margin($margin);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $bottom = 1;
    $title->margin(array('bottom' => $bottom));
    ?>

### padding

The padding of the title. A numeric value will set all paddings.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemTitle`

#### Parameters

##### $value `float|\Kendo\Dataviz\UI\ChartCategoryAxisItemTitlePadding|array`




#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $title->padding(1);
    ?>


#### Example - using [\Kendo\Dataviz\UI\ChartCategoryAxisItemTitlePadding](/api/wrappers/php/Kendo/Dataviz/UI/ChartCategoryAxisItemTitlePadding)
    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $padding = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitlePadding();
    $bottom = 1;
    $padding->bottom($bottom);
    $title->padding($padding);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $bottom = 1;
    $title->padding(array('bottom' => $bottom));
    ?>

### position
The position of the title.The supported values are:

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $title->position('value');
    ?>

### rotation
The rotation angle of the title. By default the title is not rotated.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemTitle`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $title->rotation(1);
    ?>

### text
The text of the title.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $title->text('value');
    ?>

### visible
If set to true the chart will display the category axis title. By default the category axis title is visible.

#### Returns
`\Kendo\Dataviz\UI\ChartCategoryAxisItemTitle`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\ChartCategoryAxisItemTitle();
    $title->visible(true);
    ?>

