---
title: DropDownListAnimation
slug: php-ui-dropdownlistanimation
tags: api, php
publish: true
---

# \Kendo\UI\DropDownListAnimation

A PHP class representing the animation setting of DropDownList.


## Methods

### close



#### Returns
`\Kendo\UI\DropDownListAnimation`

#### Parameters

##### $value `\Kendo\UI\DropDownListAnimationClose|array`


#### Example - using [\Kendo\UI\DropDownListAnimationClose](/api/wrappers/php/Kendo/UI/DropDownListAnimationClose)
    <?php
    $animation = new \Kendo\UI\DropDownListAnimation();
    $close = new \Kendo\UI\DropDownListAnimationClose();
    $duration = 1;
    $close->duration($duration);
    $animation->close($close);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\DropDownListAnimation();
    $duration = 1;
    $animation->close(array('duration' => $duration));
    ?>

### open

The animation played when the suggestion popup is opened.

#### Returns
`\Kendo\UI\DropDownListAnimation`

#### Parameters

##### $value `\Kendo\UI\DropDownListAnimationOpen|array`


#### Example - using [\Kendo\UI\DropDownListAnimationOpen](/api/wrappers/php/Kendo/UI/DropDownListAnimationOpen)
    <?php
    $animation = new \Kendo\UI\DropDownListAnimation();
    $open = new \Kendo\UI\DropDownListAnimationOpen();
    $duration = 1;
    $open->duration($duration);
    $animation->open($open);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\DropDownListAnimation();
    $duration = 1;
    $animation->open(array('duration' => $duration));
    ?>

