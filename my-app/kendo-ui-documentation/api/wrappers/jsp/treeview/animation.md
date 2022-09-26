---
title: treeView-animation
slug: jsp-treeView-animation
tags: api, java
publish: true
---

# \<kendo:treeView-animation\>

A collection of visual animations used when items are expanded or collapsed through user interaction.
Setting this option to false will disable all animations.

#### Example
    <kendo:treeView>
        <kendo:treeView-animation></kendo:treeView-animation>
    </kendo:treeView>

## Configuration Attributes

### collapse `boolean`

The animation that will be used when collapsing items. Further configuration is available via [kendo:treeView-animation-collapse](#kendo-treeView-animation-collapse). 

#### Example
    <kendo:treeView-animation collapse="collapse">
    </kendo:treeView-animation>

### expand `boolean`

The animation that will be used when expanding items. Further configuration is available via [kendo:treeView-animation-expand](#kendo-treeView-animation-expand). 

#### Example
    <kendo:treeView-animation expand="expand">
    </kendo:treeView-animation>


##  Configuration JSP Tags

### kendo:treeView-animation-collapse

The animation that will be used when collapsing items.

More documentation is available at [kendo:treeView-animation-collapse](treeview/animation-collapse).

#### Example

    <kendo:treeView-animation>
        <kendo:treeView-animation-collapse></kendo:treeView-animation-collapse>
    </kendo:treeView-animation>

### kendo:treeView-animation-expand

The animation that will be used when expanding items.

More documentation is available at [kendo:treeView-animation-expand](treeview/animation-expand).

#### Example

    <kendo:treeView-animation>
        <kendo:treeView-animation-expand></kendo:treeView-animation-expand>
    </kendo:treeView-animation>

