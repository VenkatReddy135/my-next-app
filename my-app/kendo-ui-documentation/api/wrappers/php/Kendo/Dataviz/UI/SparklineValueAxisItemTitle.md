---
title: SparklineValueAxisItemTitle
slug: php-dataviz-ui-sparklinevalueaxisitemtitle
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\SparklineValueAxisItemTitle

A PHP class representing the title setting of SparklineValueAxisItem.


## Methods

### background
The background color of the title. Any valid CSS color string will work here, including
hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineValueAxisItemTitle();
    $title->background('value');
    ?>

### border

The border of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemTitle`

#### Parameters

##### $value `\Kendo\Dataviz\UI\SparklineValueAxisItemTitleBorder|array`


#### Example - using [\Kendo\Dataviz\UI\SparklineValueAxisItemTitleBorder](/api/wrappers/php/Kendo/Dataviz/UI/SparklineValueAxisItemTitleBorder)
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineValueAxisItemTitle();
    $border = new \Kendo\Dataviz\UI\SparklineValueAxisItemTitleBorder();
    $color = 'value';
    $border->color($color);
    $title->border($border);
    ?>

#### Example - using array

    <?php
    $title = new \Kendo\Dataviz\UI\SparklineValueAxisItemTitle();
    $color = 'value';
    $title->border(array('color' => $color));
    ?>

### color
The text color of the title. Any valid CSS color string will work here, including hex and rgb.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineValueAxisItemTitle();
    $title->color('value');
    ?>

### font
The font style of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineValueAxisItemTitle();
    $title->font('value');
    ?>

### margin
The margin of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemTitle`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineValueAxisItemTitle();
    $title->margin(1);
    ?>

### padding
The padding of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemTitle`

#### Parameters

##### $value `float|`



#### Example  - using float
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineValueAxisItemTitle();
    $title->padding(1);
    ?>

### position
The position of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineValueAxisItemTitle();
    $title->position('value');
    ?>

### rotation
The rotation angle of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemTitle`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineValueAxisItemTitle();
    $title->rotation(1);
    ?>

### text
The text of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemTitle`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineValueAxisItemTitle();
    $title->text('value');
    ?>

### visible
The visibility of the title.

#### Returns
`\Kendo\Dataviz\UI\SparklineValueAxisItemTitle`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $title = new \Kendo\Dataviz\UI\SparklineValueAxisItemTitle();
    $title->visible(true);
    ?>

