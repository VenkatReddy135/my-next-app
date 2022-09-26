---
title: numericTextBox
slug: jsp-numericTextBox
tags: api, java
publish: true
---

# \<kendo:numericTextBox\>
A JSP wrapper for Kendo UI [NumericTextBox](/api/web/numerictextbox).

## Configuration Attributes

### culture `java.lang.String`

Specifies the culture info used by the widget.

#### Example
    <kendo:numericTextBox culture="culture">
    </kendo:numericTextBox>

### decimals `float`

Specifies the number precision. If not set precision defined by current culture is used.

#### Example
    <kendo:numericTextBox decimals="decimals">
    </kendo:numericTextBox>

### downArrowText `java.lang.String`

Specifies the text of the tooltip on the down arrow.

#### Example
    <kendo:numericTextBox downArrowText="downArrowText">
    </kendo:numericTextBox>

### format `java.lang.String`

Specifies the format of the number. Any valid number format is allowed.

#### Example
    <kendo:numericTextBox format="format">
    </kendo:numericTextBox>

### max `float`

Specifies the largest value the user can enter.

#### Example
    <kendo:numericTextBox max="max">
    </kendo:numericTextBox>

### min `float`

Specifies the smallest value the user can enter.

#### Example
    <kendo:numericTextBox min="min">
    </kendo:numericTextBox>

### placeholder `java.lang.String`

The hint displayed by the widget when it is empty. Not set by default.

#### Example
    <kendo:numericTextBox placeholder="placeholder">
    </kendo:numericTextBox>

### spinners `boolean`

Specifies whether the up and down spin buttons should be rendered

#### Example
    <kendo:numericTextBox spinners="spinners">
    </kendo:numericTextBox>

### step `float`

Specifies the value used to increment or decrement widget value.

#### Example
    <kendo:numericTextBox step="step">
    </kendo:numericTextBox>

### upArrowText `java.lang.String`

Specifies the text of the tooltip on the up arrow.

#### Example
    <kendo:numericTextBox upArrowText="upArrowText">
    </kendo:numericTextBox>

### value `float`

Specifies the value of the NumericTextBox widget.

#### Example
    <kendo:numericTextBox value="value">
    </kendo:numericTextBox>


## Event Attributes

### change `String`

Fires when the value is changed


For additional information check the [change](/api/web/numerictextbox#events-change) event documentation.

#### Example
    <kendo:numericTextBox change="handle_change">
    </kendo:numericTextBox>
    <script>
        function handle_change(e) {
            // Code to handle the change event.
        }
    </script>

### spin `String`

Fires when the value is changed from the spin buttons


For additional information check the [spin](/api/web/numerictextbox#events-spin) event documentation.

#### Example
    <kendo:numericTextBox spin="handle_spin">
    </kendo:numericTextBox>
    <script>
        function handle_spin(e) {
            // Code to handle the spin event.
        }
    </script>

## Event Tags

### kendo:numericTextBox-change

Fires when the value is changed


For additional information check the [change](/api/web/numerictextbox#events-change) event documentation.

#### Example
    <kendo:numericTextBox>
        <kendo:numericTextBox-change>
            <script>
                function(e) {
                    // Code to handle the change event.
                }
            </script>
        </kendo:numericTextBox-change>
    </kendo:numericTextBox>

### kendo:numericTextBox-spin

Fires when the value is changed from the spin buttons


For additional information check the [spin](/api/web/numerictextbox#events-spin) event documentation.

#### Example
    <kendo:numericTextBox>
        <kendo:numericTextBox-spin>
            <script>
                function(e) {
                    // Code to handle the spin event.
                }
            </script>
        </kendo:numericTextBox-spin>
    </kendo:numericTextBox>

