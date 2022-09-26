---
title: editor-tool-item
slug: jsp-editor-tool-item
tags: api, java
publish: true
---

# \<kendo:editor-tool-item\>

For tools that display a list of items (fontName, fontSize, formatting), this option specifies the items in the shown list.

#### Example
    <kendo:editor-tool-items>
        <kendo:editor-tool-item></kendo:editor-tool-item>
    </kendo:editor-tool-items>

## Configuration Attributes

### context `java.lang.String`

Only applicable for the formatting tool. Specifies the context in which the option will be available.

#### Example
    <kendo:editor-tool-item context="context">
    </kendo:editor-tool-item>

### text `java.lang.String`

The string that the popup item will show.

#### Example
    <kendo:editor-tool-item text="text">
    </kendo:editor-tool-item>

### value `java.lang.String`

The value that will be applied by the tool when this item is selected.

#### Example
    <kendo:editor-tool-item value="value">
    </kendo:editor-tool-item>

