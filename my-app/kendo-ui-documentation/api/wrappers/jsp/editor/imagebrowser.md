---
title: editor-imageBrowser
slug: jsp-editor-imageBrowser
tags: api, java
publish: true
---

# \<kendo:editor-imageBrowser\>

Configuration for image browser dialog.

#### Example
    <kendo:editor>
        <kendo:editor-imageBrowser></kendo:editor-imageBrowser>
    </kendo:editor>

## Configuration Attributes

### fileTypes `java.lang.String`

Defines the allowed file extensions.

#### Example
    <kendo:editor-imageBrowser fileTypes="fileTypes">
    </kendo:editor-imageBrowser>

### path `java.lang.String`

Defines the initial folder to display, relative to the root.

#### Example
    <kendo:editor-imageBrowser path="path">
    </kendo:editor-imageBrowser>


##  Configuration JSP Tags

### kendo:editor-imageBrowser-messages

Defines texts shown within the image browser.

More documentation is available at [kendo:editor-imageBrowser-messages](editor/imagebrowser-messages).

#### Example

    <kendo:editor-imageBrowser>
        <kendo:editor-imageBrowser-messages></kendo:editor-imageBrowser-messages>
    </kendo:editor-imageBrowser>

### kendo:editor-imageBrowser-schema

Set the object responsible for describing the image raw data format.

More documentation is available at [kendo:editor-imageBrowser-schema](editor/imagebrowser-schema).

#### Example

    <kendo:editor-imageBrowser>
        <kendo:editor-imageBrowser-schema></kendo:editor-imageBrowser-schema>
    </kendo:editor-imageBrowser>

### kendo:editor-imageBrowser-transport

Specifies the settings for loading and saving data.

More documentation is available at [kendo:editor-imageBrowser-transport](editor/imagebrowser-transport).

#### Example

    <kendo:editor-imageBrowser>
        <kendo:editor-imageBrowser-transport></kendo:editor-imageBrowser-transport>
    </kendo:editor-imageBrowser>

