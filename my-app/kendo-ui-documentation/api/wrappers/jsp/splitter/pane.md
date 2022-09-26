---
title: splitter-pane
slug: jsp-splitter-pane
tags: api, java
publish: true
---

# \<kendo:splitter-pane\>

Defines the panes of the splitter

#### Example
    <kendo:splitter-panes>
        <kendo:splitter-pane></kendo:splitter-pane>
    </kendo:splitter-panes>

## Configuration Attributes

### collapsed `boolean`

Specifies whether a pane is initially collapsed (true) or expanded (true).

#### Example
    <kendo:splitter-pane collapsed="collapsed">
    </kendo:splitter-pane>

### collapsible `boolean`

Specifies whether a pane is collapsible (true) or not collapsible (false).

#### Example
    <kendo:splitter-pane collapsible="collapsible">
    </kendo:splitter-pane>

### contentUrl `java.lang.String`

Specifies the URL from which to load the content of a pane.

#### Example
    <kendo:splitter-pane contentUrl="contentUrl">
    </kendo:splitter-pane>

### max `java.lang.String`

Specifies the maximum size of a pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%"). The size of a resized pane cannot exceed the defined maximum size.

#### Example
    <kendo:splitter-pane max="max">
    </kendo:splitter-pane>

### min `java.lang.String`

Specifies the minimum size of a pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%"). The size of a resized pane cannot be less than the defined minimum size.

#### Example
    <kendo:splitter-pane min="min">
    </kendo:splitter-pane>

### resizable `boolean`

Specifies whether a pane is resizable (true) or not resizable (false).

#### Example
    <kendo:splitter-pane resizable="resizable">
    </kendo:splitter-pane>

### scrollable `boolean`

Specifies whether a pane is scrollable (true) or not scrollable (false).

#### Example
    <kendo:splitter-pane scrollable="scrollable">
    </kendo:splitter-pane>

### size `java.lang.String`

Specifies the size of a pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%"). This value must not exceed panes.max or be less then panes.min.

#### Example
    <kendo:splitter-pane size="size">
    </kendo:splitter-pane>

