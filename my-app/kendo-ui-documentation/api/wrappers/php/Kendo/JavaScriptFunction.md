---
title: JavaScriptFunction
slug: php-javascriptfunction
tags: api, php
publish: true
---

# \Kendo\JavaScriptFunction

A PHP class representing a JavaScript function. The \Kendo\JavaScriptFunction is commonly used for specifying
event handlers of Kendo UI events or configuration settings that need a JavaScript function.

## Usage

To create a \Kendo\JavaScriptFunction use its constructor and provide a string value which represents the JavaScript function.
You can specify a function name or inline definition.

### Creating a \Kendo\JavaScriptFunction which refers to existing JavaScript function

    <script>
        function onSave() {
            // implementation
        }
    </script>

    <?php
        // Specify the JavaScript function name which is 'onSave'
        $onSaveFunction = new \Kendo\JavaScriptFunction('onSave');
    ?>

### Creating a \Kendo\JavaScriptFunction with inline JavaScript

    <?php
        // Specify the JavaScript function name which is 'onSave'
        $onSaveFunction = new \Kendo\JavaScriptFunction('function() { alert("onSave"); }');
    ?>
