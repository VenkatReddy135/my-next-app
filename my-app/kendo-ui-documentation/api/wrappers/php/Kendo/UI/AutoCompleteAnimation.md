---
title: AutoCompleteAnimation
slug: php-ui-autocompleteanimation
tags: api, php
publish: true
---

# \Kendo\UI\AutoCompleteAnimation

A PHP class representing the animation setting of AutoComplete.


## Methods

### close

The animation played when the suggestion popup is closed.

#### Returns
`\Kendo\UI\AutoCompleteAnimation`

#### Parameters

##### $value `\Kendo\UI\AutoCompleteAnimationClose|array`


#### Example - using [\Kendo\UI\AutoCompleteAnimationClose](/api/wrappers/php/Kendo/UI/AutoCompleteAnimationClose)
    <?php
    $animation = new \Kendo\UI\AutoCompleteAnimation();
    $close = new \Kendo\UI\AutoCompleteAnimationClose();
    $duration = 1;
    $close->duration($duration);
    $animation->close($close);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\AutoCompleteAnimation();
    $duration = 1;
    $animation->close(array('duration' => $duration));
    ?>

### open

The animation played when the suggestion popup is opened.

#### Returns
`\Kendo\UI\AutoCompleteAnimation`

#### Parameters

##### $value `\Kendo\UI\AutoCompleteAnimationOpen|array`


#### Example - using [\Kendo\UI\AutoCompleteAnimationOpen](/api/wrappers/php/Kendo/UI/AutoCompleteAnimationOpen)
    <?php
    $animation = new \Kendo\UI\AutoCompleteAnimation();
    $open = new \Kendo\UI\AutoCompleteAnimationOpen();
    $duration = 1;
    $open->duration($duration);
    $animation->open($open);
    ?>

#### Example - using array

    <?php
    $animation = new \Kendo\UI\AutoCompleteAnimation();
    $duration = 1;
    $animation->open(array('duration' => $duration));
    ?>

