---
title: grid-column-commandItem
slug: jsp-grid-column-commandItem
tags: api, java
publish: true
---

# \<kendo:grid-column-commandItem\>

The configuration of the column command(s). If set the column would display a button for every command. Commands can be custom or built-in ("edit" or "destroy").The "edit" built-in command switches the current table row in edit mode.The "destroy" built-in command removes the data item to which the current table row is bound.Custom commands are supported by specifying the click option.

#### Example
    <kendo:grid-column-command>
        <kendo:grid-column-commandItem></kendo:grid-column-commandItem>
    </kendo:grid-column-command>

## Configuration Attributes

### className `java.lang.String`

The CSS class applied to the command button.

#### Example
    <kendo:grid-column-commandItem className="className">
    </kendo:grid-column-commandItem>

### click `java.lang.String`

The JavaScript function executed when the user clicks the command button. The function receives a jQuery Event as an argument.The function context (available via the this keyword) will be set to the grid instance.

#### Example
    <kendo:grid-column-commandItem click="click">
    </kendo:grid-column-commandItem>

### name `java.lang.String`

The name of the command. The built-in commands are "edit" and "destroy". Can be set to a custom value.

#### Example
    <kendo:grid-column-commandItem name="name">
    </kendo:grid-column-commandItem>

### text `java.lang.String`

The text displayed by the command button. If not set the name option is used as the button text.

#### Example
    <kendo:grid-column-commandItem text="text">
    </kendo:grid-column-commandItem>


## Event Attributes

### click `String`

The JavaScript function executed when the user clicks the command button. The function receives a jQuery Event as an argument.The function context (available via the this keyword) will be set to the grid instance.


#### Example
    <kendo:grid-column-commandItem click="handle_click">
    </kendo:grid-column-commandItem>
    <script>
        function handle_click(e) {
            // Code to handle the click event.
        }
    </script>

## Event Tags

### kendo:grid-column-commandItem-click

The JavaScript function executed when the user clicks the command button. The function receives a jQuery Event as an argument.The function context (available via the this keyword) will be set to the grid instance.


#### Example
    <kendo:grid-column-commandItem>
        <kendo:grid-column-commandItem-click>
            <script>
                function(e) {
                    // Code to handle the click event.
                }
            </script>
        </kendo:grid-column-commandItem-click>
    </kendo:grid-column-commandItem>

