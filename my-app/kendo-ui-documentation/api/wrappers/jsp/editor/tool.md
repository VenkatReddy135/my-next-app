---
title: editor-tool
slug: jsp-editor-tool
tags: api, java
publish: true
---

# \<kendo:editor-tool\>

A collection of tools that are used to interact with the Editor.
Tools may be switched on by specifying their name.
Custom tools and tools that require configuration are defined as objects.The available editor commands are:

#### Example
    <kendo:editor-tools>
        <kendo:editor-tool></kendo:editor-tool>
    </kendo:editor-tools>

## Configuration Attributes

### exec `java.lang.String`

The JavaScript function which will be executed when the end-user clicks the tool button.

#### Example
    <kendo:editor-tool exec="exec">
    </kendo:editor-tool>

### name `java.lang.String`

When specifying a tool as an object, a tool name is required.

#### Example
    <kendo:editor-tool name="name">
    </kendo:editor-tool>

### template `java.lang.String`

The kendo template that will be used for rendering the given tool.

#### Example
    <kendo:editor-tool template="template">
    </kendo:editor-tool>

### tooltip `java.lang.String`

The text which will be displayed when the end-user hovers the tool button with the mouse.

#### Example
    <kendo:editor-tool tooltip="tooltip">
    </kendo:editor-tool>


##  Configuration JSP Tags

### kendo:editor-tool-items

For tools that display a list of items (fontName, fontSize, formatting), this option specifies the items in the shown list.

More documentation is available at [kendo:editor-tool-items](editor/tool-items).

#### Example

    <kendo:editor-tool>
        <kendo:editor-tool-items></kendo:editor-tool-items>
    </kendo:editor-tool>


## Event Attributes

### exec `String`

The JavaScript function which will be executed when the end-user clicks the tool button.


#### Example
    <kendo:editor-tool exec="handle_exec">
    </kendo:editor-tool>
    <script>
        function handle_exec(e) {
            // Code to handle the exec event.
        }
    </script>

## Event Tags

### kendo:editor-tool-exec

The JavaScript function which will be executed when the end-user clicks the tool button.


#### Example
    <kendo:editor-tool>
        <kendo:editor-tool-exec>
            <script>
                function(e) {
                    // Code to handle the exec event.
                }
            </script>
        </kendo:editor-tool-exec>
    </kendo:editor-tool>

