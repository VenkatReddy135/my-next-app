---
title: NumericTextBox
slug: php-ui-numerictextbox
tags: api, php
publish: true
---

# \Kendo\UI\NumericTextBox

A PHP wrapper for Kendo UI [NumericTextBox](/api/web/numerictextbox).

Inherits from [\Kendo\UI\Widget](/api/wrappers/php/Kendo/UI/Widget).

## Usage

To use NumericTextBox in a PHP page instantiate a new instance, configure it via the available
configuration [methods](#methods) and output it by `echo`-ing the result of the [render](/api/wrappers/php/Kendo/UI/Widget#render) method.

### Using Kendo NumericTextBox

    <?php
    // Create a new instance of NumericTextBox and specify its id
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');

    // Configure it
    $numericTextBox->culture('value')

    // Output it

    echo $numericTextBox->render();
    ?>


## Methods

### change
Fires when the value is changed
For additional information check the [change](/api/web/numerictextbox#events-change) event documentation.

#### Returns
`\Kendo\UI\NumericTextBox`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->change('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onChange(e) {
            // handle the change event.
        }
    </script>
    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->change('onChange');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->change(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### culture
Specifies the culture info used by the widget.

#### Returns
`\Kendo\UI\NumericTextBox`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->culture('value');
    ?>

### decimals
Specifies the number precision. If not set precision defined by current culture is used.

#### Returns
`\Kendo\UI\NumericTextBox`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->decimals(1);
    ?>

### downArrowText
Specifies the text of the tooltip on the down arrow.

#### Returns
`\Kendo\UI\NumericTextBox`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->downArrowText('value');
    ?>

### format
Specifies the format of the number. Any valid number format is allowed.

#### Returns
`\Kendo\UI\NumericTextBox`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->format('value');
    ?>

### max
Specifies the largest value the user can enter.

#### Returns
`\Kendo\UI\NumericTextBox`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->max(1);
    ?>

### min
Specifies the smallest value the user can enter.

#### Returns
`\Kendo\UI\NumericTextBox`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->min(1);
    ?>

### placeholder
The hint displayed by the widget when it is empty. Not set by default.

#### Returns
`\Kendo\UI\NumericTextBox`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->placeholder('value');
    ?>

### spin
Fires when the value is changed from the spin buttons
For additional information check the [spin](/api/web/numerictextbox#events-spin) event documentation.

#### Returns
`\Kendo\UI\NumericTextBox`

#### Parameters

##### $value `string|\Kendo\JavaScriptFunction`

#### Example - using string which defines a JavaScript function

    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->spin('function(e) { }');
    ?>

#### Example - using string which defines a JavaScript name
    <script>
        function onSpin(e) {
            // handle the spin event.
        }
    </script>
    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->spin('onSpin');
    ?>

#### Example - using [\Kendo\JavaScriptFunction](/api/wrappers/php/kendo/javascriptfunction)

    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->spin(new \Kendo\JavaScriptFunction('function(e) { }'));
    ?>

### spinners
Specifies whether the up and down spin buttons should be rendered

#### Returns
`\Kendo\UI\NumericTextBox`

#### Parameters

##### $value `boolean`



#### Example 
    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->spinners(true);
    ?>

### step
Specifies the value used to increment or decrement widget value.

#### Returns
`\Kendo\UI\NumericTextBox`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->step(1);
    ?>

### upArrowText
Specifies the text of the tooltip on the up arrow.

#### Returns
`\Kendo\UI\NumericTextBox`

#### Parameters

##### $value `string`



#### Example 
    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->upArrowText('value');
    ?>

### value
Specifies the value of the NumericTextBox widget.

#### Returns
`\Kendo\UI\NumericTextBox`

#### Parameters

##### $value `float`



#### Example 
    <?php
    $numericTextBox = new \Kendo\UI\NumericTextBox('NumericTextBox');
    $numericTextBox->value(1);
    ?>

