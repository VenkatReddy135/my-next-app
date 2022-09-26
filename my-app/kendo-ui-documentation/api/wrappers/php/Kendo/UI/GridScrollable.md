---
title: GridScrollable
slug: php-ui-gridscrollable
tags: api, php
publish: true
---

# \Kendo\UI\GridScrollable

A PHP class representing the scrollable setting of Grid.


## Methods

### virtual
If set to true the grid will always display a single page of data. Scrolling would just change the data which is currently displayed.

#### Returns
`\Kendo\UI\GridScrollable`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $scrollable = new \Kendo\UI\GridScrollable();
    $scrollable->virtual(true);
    ?>

