---
title: GridColumnFilterable
slug: php-ui-gridcolumnfilterable
tags: api, php
publish: true
---

# \Kendo\UI\GridColumnFilterable

A PHP class representing the filterable setting of GridColumn.


## Methods

### ui
The role data attribute of the widget used in the filter menu or a JavaScript function which initializes that widget.

#### Returns
`\Kendo\UI\GridColumnFilterable`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`



#### Example  - using string
    <?php
    $filterable = new \Kendo\UI\GridColumnFilterable();
    $filterable->ui('value');
    ?>

#### Example  - using \Kendo\JavaScriptFunction
    <?php
    $filterable = new \Kendo\UI\GridColumnFilterable();
    $filterable->ui(new \Kendo\JavaScriptFunction('function() { }'));
    ?>

