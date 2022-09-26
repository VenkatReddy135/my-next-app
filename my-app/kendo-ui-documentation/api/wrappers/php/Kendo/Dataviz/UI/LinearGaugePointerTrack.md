---
title: LinearGaugePointerTrack
slug: php-dataviz-ui-lineargaugepointertrack
tags: api, php
publish: true
---

# \Kendo\Dataviz\UI\LinearGaugePointerTrack

A PHP class representing the track setting of LinearGaugePointer.


## Methods

### border

The border of the track.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugePointerTrack`

#### Parameters

##### $value `\Kendo\Dataviz\UI\LinearGaugePointerTrackBorder|array`


#### Example - using [\Kendo\Dataviz\UI\LinearGaugePointerTrackBorder](/api/wrappers/php/Kendo/Dataviz/UI/LinearGaugePointerTrackBorder)
    <?php
    $track = new \Kendo\Dataviz\UI\LinearGaugePointerTrack();
    $border = new \Kendo\Dataviz\UI\LinearGaugePointerTrackBorder();
    $color = 'value';
    $border->color($color);
    $track->border($border);
    ?>

#### Example - using array

    <?php
    $track = new \Kendo\Dataviz\UI\LinearGaugePointerTrack();
    $color = 'value';
    $track->border(array('color' => $color));
    ?>

### color
The color of the track.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugePointerTrack`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $track = new \Kendo\Dataviz\UI\LinearGaugePointerTrack();
    $track->color('value');
    ?>

### opacity
The opacity of the track.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugePointerTrack`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $track = new \Kendo\Dataviz\UI\LinearGaugePointerTrack();
    $track->opacity(1);
    ?>

### size
The size of the track.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugePointerTrack`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $track = new \Kendo\Dataviz\UI\LinearGaugePointerTrack();
    $track->size(1);
    ?>

### visible
The visibility of the track.

#### Returns
`\Kendo\Dataviz\UI\LinearGaugePointerTrack`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $track = new \Kendo\Dataviz\UI\LinearGaugePointerTrack();
    $track->visible(true);
    ?>

